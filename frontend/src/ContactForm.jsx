import { useEffect, useState } from "react";
import {
  Mail,
  CalendarDays,
  ArrowUpRight,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { profile } from "./portfolioData";
const configuredApi = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");
const apiBase =
  configuredApi && !/^https?:\/\//.test(configuredApi)
    ? "https://" + configuredApi
    : configuredApi;
export default function ContactForm({ language }) {
  const t = (fr, en) => (language === "fr" ? fr : en);
  const [kind, setKind] = useState("message");
  const [status, setStatus] = useState("idle");
  const [available, setAvailable] = useState(null);
  const [draft, setDraft] = useState("");
  useEffect(() => {
    const abort = new AbortController();
    fetch(apiBase + "/api/contact/config", { signal: abort.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => setAvailable(Boolean(data.available)))
      .catch(() => {
        if (!abort.signal.aborted) setAvailable(false);
      });
    return () => abort.abort();
  }, []);
  const today = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Africa/Douala",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
  async function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const values = Object.fromEntries(new FormData(form));
    values.kind = kind;
    values.language = language;
    values.timezone = "Africa/Douala";
    if (
      kind === "appointment" &&
      new Date(values.date + "T" + values.time + ":00+01:00") <= new Date()
    ) {
      setStatus("past");
      return;
    }
    const subject =
      kind === "appointment"
        ? t("Demande de rendez-vous — ", "Meeting request — ") + values.subject
        : values.subject;
    const body = [
      t("Nom : ", "Name: ") + values.name,
      "Email: " + values.email,
      kind === "appointment"
        ? t("Créneau souhaité : ", "Requested time: ") +
          values.date +
          " " +
          values.time +
          " (Africa/Douala, UTC+1)"
        : "",
      values.message,
      kind === "appointment"
        ? t(
            "Ce créneau reste à confirmer.",
            "This time is subject to confirmation.",
          )
        : "",
    ]
      .filter(Boolean)
      .join("\n\n");
    setDraft(
      "mailto:" +
        profile.email +
        "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body),
    );
    if (available === false) {
      setStatus("draft");
      return;
    }
    setStatus("sending");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 25000);
    try {
      const response = await fetch(apiBase + "/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
        signal: controller.signal,
      });
      if (response.status === 503) {
        setAvailable(false);
        setStatus("draft");
        return;
      }
      if (response.status === 429) {
        setStatus("rate");
        return;
      }
      if (response.status === 400) {
        setStatus("invalid");
        return;
      }
      if (!response.ok) throw new Error("delivery");
      const data = await response.json();
      if (data.status !== "sent") throw new Error("delivery");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      clearTimeout(timeout);
    }
  }
  return (
    <div className="contact-form-wrap">
      <div
        className="contact-tabs"
        role="group"
        aria-label={t("Type de contact", "Contact type")}
      >
        <button
          type="button"
          aria-pressed={kind === "message"}
          onClick={() => {
            setKind("message");
            setStatus("idle");
          }}
        >
          <Mail size={18} />
          {t("Envoyer un message", "Send a message")}
        </button>
        <button
          type="button"
          aria-pressed={kind === "appointment"}
          onClick={() => {
            setKind("appointment");
            setStatus("idle");
          }}
        >
          <CalendarDays size={18} />
          {t("Demander un rendez-vous", "Request a meeting")}
        </button>
      </div>
      <form onSubmit={submit} className="contact-form">
        <div className="form-row">
          <label>
            {t("Votre nom", "Your name")}
            <input
              name="name"
              autoComplete="name"
              minLength={2}
              maxLength={100}
              required
              placeholder={t("Nom et prénom", "Full name")}
            />
          </label>
          <label>
            {t("Votre email", "Your email")}
            <input
              name="email"
              type="email"
              autoComplete="email"
              maxLength={254}
              required
              placeholder="vous@exemple.com"
            />
          </label>
        </div>
        <label>
          {t("Sujet du projet", "Project subject")}
          <input
            name="subject"
            minLength={3}
            maxLength={160}
            required
            placeholder={t(
              "Application, collaboration, conseil…",
              "Application, collaboration, consulting…",
            )}
          />
        </label>
        {kind === "appointment" && (
          <>
            <div className="form-row">
              <label>
                {t("Date souhaitée", "Preferred date")}
                <input type="date" name="date" min={today} required />
              </label>
              <label>
                {t("Heure souhaitée", "Preferred time")}
                <input type="time" name="time" required />
              </label>
            </div>
            <p className="form-note">
              {t(
                "Heure du Cameroun (UTC+1). Il s’agit d’une demande : le rendez-vous sera confirmé personnellement par email.",
                "Cameroon time (UTC+1). This is a request: the meeting will be confirmed personally by email.",
              )}
            </p>
          </>
        )}
        <label>
          {t("Votre message", "Your message")}
          <textarea
            name="message"
            rows={5}
            minLength={10}
            maxLength={5000}
            required
            placeholder={t(
              "Parlez-moi de votre idée et de vos besoins.",
              "Tell me about your idea and what you need.",
            )}
          />
        </label>
        <label className="form-honeypot" aria-hidden="true">
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
        <p className="form-note">
          {t(
            "Vos coordonnées servent uniquement à répondre à votre demande.",
            "Your contact details are used only to respond to your request.",
          )}
        </p>
        <button
          className="button primary"
          disabled={status === "sending"}
          type="submit"
        >
          {status === "sending"
            ? t("Envoi en cours…", "Sending…")
            : available === false
              ? t("Préparer mon email", "Prepare my email")
              : kind === "appointment"
                ? t("Envoyer ma demande", "Send my request")
                : t("Envoyer le message", "Send message")}
          <Send size={16} />
        </button>
        <div aria-live="polite" className="form-feedback">
          {status === "sent" && (
            <p className="form-success">
              <CheckCircle2 size={20} />
              {kind === "appointment"
                ? t(
                    "Demande envoyée. Le créneau sera confirmé par email.",
                    "Request sent. The time will be confirmed by email.",
                  )
                : t(
                    "Message envoyé. Merci, je vous répondrai par email.",
                    "Message sent. Thank you, I’ll reply by email.",
                  )}
            </p>
          )}
          {status === "past" && (
            <p className="form-error">
              <AlertCircle size={18} />
              {t(
                "Choisissez une date et une heure futures.",
                "Choose a future date and time.",
              )}
            </p>
          )}
          {status === "rate" && (
            <p className="form-error">
              <AlertCircle size={18} />
              {t(
                "Trop de tentatives rapprochées. Patientez 15 minutes avant de réessayer.",
                "Too many recent attempts. Please wait 15 minutes before trying again.",
              )}
            </p>
          )}
          {status === "invalid" && (
            <p className="form-error">
              <AlertCircle size={18} />
              {t(
                "Certaines informations ne sont pas valides. Vérifiez tous les champs.",
                "Some information is invalid. Please check every field.",
              )}
            </p>
          )}
          {(status === "draft" || status === "error") && (
            <div className="form-fallback">
              <p>
                {status === "draft"
                  ? t(
                      "Votre email est prêt. Ouvrez votre messagerie pour l’envoyer ; rien n’a encore été transmis.",
                      "Your email is ready. Open your email app to send it; nothing has been sent yet.",
                    )
                  : t(
                      "L’envoi n’a pas abouti. Réessayez ou utilisez votre messagerie.",
                      "Delivery failed. Retry or use your email app.",
                    )}
              </p>
              <a className="button" href={draft}>
                {t("Ouvrir ma messagerie", "Open my email app")}
                <ArrowUpRight size={16} />
              </a>
              <a className="text-link" href={"mailto:" + profile.email}>
                {profile.email}
              </a>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
