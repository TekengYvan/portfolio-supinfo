const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
function createApp({ mailer, settings = {} } = {}) {
  const app = express();
  app.disable("x-powered-by");
  const configured = Boolean(mailer);
  const defaultOrigins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://portfolio-supinfo.onrender.com",
    "https://portfolio-frontend-tekeng.onrender.com",
  ];
  const configuredOrigins = (settings.origins || process.env.FRONTEND_ORIGIN || "")
    .split(",")
    .map((x) => x.trim().replace(/\/$/, ""))
    .filter(Boolean);
  const allowed = [...new Set([...defaultOrigins, ...configuredOrigins])];
  app.use(
    cors({
      origin(origin, callback) {
        callback(null, !origin || allowed.includes(origin));
      },
    }),
  );
  app.use(express.json({ limit: "16kb" }));
  app.get("/api/contact/config", (_req, res) =>
    res.json({ available: configured, timezone: "Africa/Douala" }),
  );
  app.get("/api/health", (_req, res) => res.json({ status: "ok" }));
  const attempts = new Map();
  const windowMs = 15 * 60 * 1000;
  app.post("/api/contact", async (req, res) => {
    const origin = req.get("origin");
    if (origin && !allowed.includes(origin))
      return res.status(403).json({ error: "origin_not_allowed" });
    const now = Date.now();
    for (const [key, value] of attempts) {
      if (now - value.since > windowMs) attempts.delete(key);
    }
    const key = req.ip;
    const current = attempts.get(key) || { since: now, count: 0 };
    current.count++;
    attempts.set(key, current);
    if (current.count > 5)
      return res.status(429).json({ error: "rate_limited" });
    const data = req.body;
    if (!data || typeof data !== "object" || Array.isArray(data))
      return res.status(400).json({ error: "invalid_request" });
    const valid = (key, min, max) =>
      typeof data[key] === "string" &&
      data[key].trim().length >= min &&
      data[key].length <= max;
    if (
      !valid("name", 2, 100) ||
      !valid("email", 3, 254) ||
      !valid("subject", 3, 160) ||
      !valid("message", 10, 5000) ||
      !["message", "appointment"].includes(data.kind) ||
      data.website
    )
      return res.status(400).json({ error: "invalid_fields" });
    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ||
      /[\r\n]/.test(data.name + data.email + data.subject)
    )
      return res.status(400).json({ error: "invalid_fields" });
    let meeting = "";
    if (data.kind === "appointment") {
      if (
        !/^\d{4}-\d{2}-\d{2}$/.test(data.date || "") ||
        !/^([01]\d|2[0-3]):[0-5]\d$/.test(data.time || "") ||
        data.timezone !== "Africa/Douala"
      )
        return res.status(400).json({ error: "invalid_appointment" });
      const date = new Date(data.date + "T" + data.time + ":00+01:00");
      if (
        !Number.isFinite(date.valueOf()) ||
        date <= new Date() ||
        new Date(data.date + "T00:00:00Z").toISOString().slice(0, 10) !==
          data.date
      )
        return res.status(400).json({ error: "invalid_appointment" });
      meeting =
        "Requested time: " +
        data.date +
        " " +
        data.time +
        " (Africa/Douala, UTC+1).\nPending your confirmation.";
    }
    if (!configured)
      return res.status(503).json({ error: "mail_not_configured" });
    try {
      const name = data.name.trim();
      const email = data.email.trim();
      const subject = data.subject.trim();
      const message = data.message.trim();
      const isMeeting = data.kind === "appointment";
      const receivedAt = new Intl.DateTimeFormat("en-GB", {
        dateStyle: "full",
        timeStyle: "short",
        timeZone: "Africa/Douala",
      }).format(new Date());
      const meetingHtml = isMeeting
        ? `<div style="margin:20px 0;padding:16px;border-left:4px solid #f97316;background:#fff7ed"><strong>Requested meeting</strong><br>${escapeHtml(data.date)} at ${escapeHtml(data.time)} · Cameroon time (UTC+1)<br><small>This appointment is pending your confirmation.</small></div>`
        : "";
      const result = await mailer.sendMail({
        from: settings.from,
        to: settings.to || "tekengyvan2@gmail.com",
        replyTo: { name, address: email },
        subject:
          (isMeeting ? "📅 Meeting request · " : "✦ New portfolio message · ") +
          subject,
        text: [
          "New message from your portfolio",
          "Name: " + name,
          "Email: " + email,
          "Subject: " + subject,
          meeting,
          message,
          "Received: " + receivedAt + " (Africa/Douala)",
        ]
          .filter(Boolean)
          .join("\n\n"),
        html: `<!doctype html><html><body style="margin:0;background:#f4f1ea;font-family:Arial,sans-serif;color:#171717"><div style="max-width:640px;margin:0 auto;padding:32px 16px"><div style="background:#171717;color:#fff;padding:28px;border-radius:18px 18px 0 0"><div style="color:#fb923c;font-size:12px;font-weight:700;letter-spacing:2px">YVAN.TEKENG · PORTFOLIO</div><h1 style="margin:12px 0 4px;font-size:26px">${isMeeting ? "New meeting request" : "You received a new message"}</h1><p style="margin:0;color:#d4d4d4">Sent from your portfolio contact form</p></div><div style="background:#fff;padding:28px;border:1px solid #e5e5e5;border-top:0"><table style="width:100%;border-collapse:collapse"><tr><td style="padding:8px 0;color:#737373;width:90px">From</td><td style="padding:8px 0;font-weight:700">${escapeHtml(name)}</td></tr><tr><td style="padding:8px 0;color:#737373">Email</td><td style="padding:8px 0"><a style="color:#ea580c" href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr><tr><td style="padding:8px 0;color:#737373">Subject</td><td style="padding:8px 0">${escapeHtml(subject)}</td></tr></table>${meetingHtml}<div style="margin:22px 0;padding:20px;background:#fafafa;border-radius:12px;white-space:pre-wrap;line-height:1.65">${escapeHtml(message)}</div><a href="mailto:${escapeHtml(email)}?subject=${encodeURIComponent("Re: " + subject)}" style="display:inline-block;background:#ea580c;color:#fff;text-decoration:none;font-weight:700;padding:12px 20px;border-radius:999px">Reply to ${escapeHtml(name)}</a><p style="margin:24px 0 0;color:#737373;font-size:12px">Received ${escapeHtml(receivedAt)} · Africa/Douala</p></div></div></body></html>`,
      });
      if (!result.accepted?.length) throw new Error("not_accepted");
      res.json({ status: "sent", kind: data.kind });
    } catch {
      res.status(502).json({ error: "delivery_failed" });
    }
  });
  app.use((error, _req, res, _next) =>
    res
      .status(error.status === 413 ? 413 : 400)
      .json({ error: "invalid_request" }),
  );
  return app;
}
function configuredTransport(env = process.env) {
  if (!env.EMAIL_USER || !env.EMAIL_PASS) return null;
  return nodemailer.createTransport(
    env.SMTP_HOST
      ? {
          host: env.SMTP_HOST,
          port: Number(env.SMTP_PORT || 587),
          secure: env.SMTP_SECURE === "true",
          auth: { user: env.EMAIL_USER, pass: env.EMAIL_PASS },
          connectionTimeout: 10000,
          socketTimeout: 12000,
        }
      : {
          service: "gmail",
          auth: { user: env.EMAIL_USER, pass: env.EMAIL_PASS },
          connectionTimeout: 10000,
          socketTimeout: 12000,
        },
  );
}
module.exports = { createApp, configuredTransport };
