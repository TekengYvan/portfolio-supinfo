const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
function createApp({ mailer, settings = {} } = {}) {
  const app = express();
  app.disable("x-powered-by");
  const configured = Boolean(mailer);
  const allowed = (
    settings.origins ||
    process.env.FRONTEND_ORIGIN ||
    "http://localhost:5173,http://127.0.0.1:5173"
  )
    .split(",")
    .map((x) => x.trim());
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
      const result = await mailer.sendMail({
        from: settings.from,
        to: settings.to || "tekengyvan2@gmail.com",
        replyTo: data.email.trim(),
        subject:
          (data.kind === "appointment" ? "[Rendez-vous] " : "[Portfolio] ") +
          data.subject.trim(),
        text: [
          "Name: " + data.name.trim(),
          "Email: " + data.email.trim(),
          meeting,
          data.message.trim(),
        ]
          .filter(Boolean)
          .join("\n\n"),
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
