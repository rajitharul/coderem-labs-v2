import nodemailer from "nodemailer";
import {
  BUDGET_OPTIONS,
  TIMELINE_OPTIONS,
  PROJECT_TYPE_OPTIONS,
  getLabelForValue,
} from "@/lib/form-options";
import {
  INDUSTRY_OPTIONS,
  USE_CASE_OPTIONS,
  SYSTEM_OPTIONS,
  VOLUME_OPTIONS,
  getLabelsForValues,
} from "@/lib/remops-options";

/* Email transport + templates for the Get Started contact form.
   One Zoho SMTP transporter is created at module load. Two HTML emails are
   sent per submission:
     • sendThankYouEmail     — branded auto-reply to the inquirer ("from Praveen")
     • sendInquiryNotification — internal notice to CONTACT_EMAIL, replyTo set to
                                 the inquirer so Praveen can reply directly.
   Nothing is persisted; the emails (plus a server log) are the only record. */

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  SMTP_FROM,
  CONTACT_EMAIL,
} = process.env;

// Warn (don't throw) at import so the build/dev server still boots without creds.
if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
  console.warn(
    "[email] SMTP env vars are missing — contact form emails will fail until SMTP_HOST/SMTP_USER/SMTP_PASS are set."
  );
}

const port = Number(SMTP_PORT) || 465;

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port,
  secure: port === 465, // SSL on 465, STARTTLS otherwise
  auth: SMTP_USER && SMTP_PASS ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
});

const FROM = SMTP_FROM || `CodeREM Labs <${SMTP_USER}>`;
const TO = CONTACT_EMAIL || SMTP_USER || "";
const ACCENT = "#1e40af";

export type Submission = {
  name: string;
  email: string;
  company: string;
  budget: string;
  timeline: string;
  projectType: string;
  description: string;
  attachment?: string;
};

function esc(s: string): string {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/* One label/value line in a notification email's detail table. `v` is trusted
   HTML — callers escape their own values (and may pass links). */
function row(k: string, v: string): string {
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid rgba(12,16,22,0.08);color:#50555a;font-size:13px;width:150px;vertical-align:top;">${k}</td>
      <td style="padding:10px 0;border-bottom:1px solid rgba(12,16,22,0.08);color:#0c1016;font-size:14px;font-weight:600;">${v}</td>
    </tr>`;
}

/* Branded auto-reply to the person who submitted the form. */
export async function sendThankYouEmail(to: string, name: string) {
  const firstName = esc(name.trim().split(/\s+/)[0] || "there");
  const html = `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f0f6f8;padding:32px 0;font-family:Inter,Arial,sans-serif;">
    <tr><td align="center">
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid rgba(12,16,22,0.10);border-radius:18px;overflow:hidden;">
        <tr><td style="padding:36px 40px 8px;">
          <div style="font-size:18px;font-weight:700;color:${ACCENT};letter-spacing:-0.01em;">CodeREM Labs</div>
        </td></tr>
        <tr><td style="padding:8px 40px 36px;color:#1e232c;font-size:16px;line-height:1.6;">
          <p style="margin:0 0 16px;">Hi ${firstName},</p>
          <p style="margin:0 0 16px;">Thanks for reaching out to <strong>CodeREM Labs</strong>. We've received your project details and they've come straight to my inbox.</p>
          <p style="margin:0 0 16px;">I personally review every inquiry, and you'll hear back from us within <strong>24 hours</strong> to set up a discovery call.</p>
          <p style="margin:0 0 24px;">In the meantime, if you want to add anything, just reply to this email.</p>
          <p style="margin:0;color:#0c1016;font-weight:700;">Praveen</p>
          <p style="margin:2px 0 0;color:#50555a;font-size:14px;">CEO · Director Solutions, CodeREM Labs</p>
        </td></tr>
      </table>
      <p style="margin:18px 0 0;color:#50555a;font-size:12px;">Medical Grade Precision. F1 Grade Performance.</p>
    </td></tr>
  </table>`;

  return transporter.sendMail({
    from: FROM,
    to,
    subject: "We've received your project details — CodeREM Labs",
    html,
  });
}

/* Internal notification to CONTACT_EMAIL with the full submission. */
export async function sendInquiryNotification(data: Submission) {
  const budget = esc(getLabelForValue(BUDGET_OPTIONS, data.budget));
  const timeline = esc(getLabelForValue(TIMELINE_OPTIONS, data.timeline));
  const projectType = esc(getLabelForValue(PROJECT_TYPE_OPTIONS, data.projectType));

  const attachmentRow = data.attachment
    ? row("Attachment", `<a href="${esc(data.attachment)}" style="color:${ACCENT};">${esc(data.attachment)}</a>`)
    : "";

  const html = `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f0f6f8;padding:32px 0;font-family:Inter,Arial,sans-serif;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid rgba(12,16,22,0.10);border-radius:18px;overflow:hidden;">
        <tr><td style="padding:28px 40px;border-bottom:3px solid ${ACCENT};">
          <div style="font-size:13px;font-weight:700;color:${ACCENT};text-transform:uppercase;letter-spacing:0.08em;">New project inquiry</div>
          <div style="font-size:22px;font-weight:700;color:#0c1016;margin-top:6px;">${esc(data.name)} · ${esc(data.company)}</div>
        </td></tr>
        <tr><td style="padding:20px 40px 32px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${row("Name", esc(data.name))}
            ${row("Email", `<a href="mailto:${esc(data.email)}" style="color:${ACCENT};">${esc(data.email)}</a>`)}
            ${row("Company", esc(data.company))}
            ${row("Budget", budget)}
            ${row("Timeline", timeline)}
            ${row("Project type", projectType)}
            ${attachmentRow}
          </table>
          <div style="margin-top:24px;">
            <div style="color:#50555a;font-size:13px;margin-bottom:8px;">Project details</div>
            <div style="background:#f0f6f8;border:1px solid rgba(12,16,22,0.10);border-radius:12px;padding:16px;color:#1e232c;font-size:14px;line-height:1.6;white-space:pre-wrap;">${esc(data.description)}</div>
          </div>
        </td></tr>
      </table>
    </td></tr>
  </table>`;

  return transporter.sendMail({
    from: FROM,
    to: TO,
    replyTo: data.email,
    subject: `New inquiry: ${data.name} (${data.company})`,
    html,
  });
}

/* ------------------------------------------------------------------ remOPS */

export type RemOpsSignup = {
  name: string;
  email: string;
  company: string;
  whatsapp: string;
  industry: string;
  useCases: string[];
  systems: string[];
  volume: string;
  challenge: string;
};

/* Auto-reply to a remOPS signup. The promise the product page makes — a real
   setup engineer, free setup, pay only for usage — is restated here verbatim,
   so the first email doesn't undercut the landing page. */
export async function sendRemOpsWelcomeEmail(to: string, name: string) {
  const firstName = esc(name.trim().split(/\s+/)[0] || "there");
  const html = `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f0f6f8;padding:32px 0;font-family:Inter,Arial,sans-serif;">
    <tr><td align="center">
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid rgba(12,16,22,0.10);border-radius:18px;overflow:hidden;">
        <tr><td style="padding:36px 40px 8px;">
          <div style="font-size:18px;font-weight:700;color:${ACCENT};letter-spacing:-0.01em;">rem<span style="font-weight:800;">OPS</span> <span style="color:#50555a;font-weight:500;">· CodeREM Labs</span></div>
        </td></tr>
        <tr><td style="padding:8px 40px 36px;color:#1e232c;font-size:16px;line-height:1.6;">
          <p style="margin:0 0 16px;">Hi ${firstName},</p>
          <p style="margin:0 0 16px;">Thanks for signing up for <strong>remOPS</strong>. Your details are with me now.</p>
          <p style="margin:0 0 16px;">Here's what happens next: within <strong>24 hours</strong> we'll assign you a <strong>dedicated setup engineer</strong> — a real person, not a sales rep — who will walk you through how remOPS would fit the way your business actually runs, and map it against the systems you already use.</p>
          <p style="margin:0 0 16px;"><strong>The setup is free.</strong> Your engineer builds and tailors the agent with you, integrates it, trains your team, and stays with you afterwards. You go live before you pay anything — and after that you only ever pay for what you actually use.</p>
          <p style="margin:0 0 24px;">If you want to add anything before we speak, just reply to this email.</p>
          <p style="margin:0;color:#0c1016;font-weight:700;">Praveen</p>
          <p style="margin:2px 0 0;color:#50555a;font-size:14px;">CEO · Director Solutions, CodeREM Labs</p>
        </td></tr>
      </table>
      <p style="margin:18px 0 0;color:#50555a;font-size:12px;">Medical Grade Precision. F1 Grade Performance.</p>
    </td></tr>
  </table>`;

  return transporter.sendMail({
    from: FROM,
    to,
    subject: "Your remOPS setup — next steps",
    html,
  });
}

/* Internal notification with the full remOPS qualifying submission. */
export async function sendRemOpsSignupNotification(data: RemOpsSignup) {
  const industry = esc(getLabelForValue(INDUSTRY_OPTIONS, data.industry));
  const volume = data.volume
    ? esc(getLabelForValue(VOLUME_OPTIONS, data.volume))
    : "—";

  const list = (opts: typeof USE_CASE_OPTIONS, values: string[]) =>
    values.length
      ? getLabelsForValues(opts, values)
          .map(
            (l) =>
              `<span style="display:inline-block;border:1px solid rgba(12,16,22,0.12);border-radius:100px;padding:4px 11px;margin:0 4px 4px 0;font-size:12px;font-weight:600;color:#1e232c;">${esc(l)}</span>`
          )
          .join("")
      : "—";

  const html = `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f0f6f8;padding:32px 0;font-family:Inter,Arial,sans-serif;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid rgba(12,16,22,0.10);border-radius:18px;overflow:hidden;">
        <tr><td style="padding:28px 40px;border-bottom:3px solid ${ACCENT};">
          <div style="font-size:13px;font-weight:700;color:${ACCENT};text-transform:uppercase;letter-spacing:0.08em;">New remOPS signup</div>
          <div style="font-size:22px;font-weight:700;color:#0c1016;margin-top:6px;">${esc(data.name)} · ${esc(data.company)}</div>
        </td></tr>
        <tr><td style="padding:20px 40px 32px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${row("Name", esc(data.name))}
            ${row("Email", `<a href="mailto:${esc(data.email)}" style="color:${ACCENT};">${esc(data.email)}</a>`)}
            ${row("WhatsApp", `<a href="https://wa.me/${esc(data.whatsapp.replace(/[^\d]/g, ""))}" style="color:${ACCENT};">${esc(data.whatsapp)}</a>`)}
            ${row("Company", esc(data.company))}
            ${row("Industry", industry)}
            ${row("Volume", volume)}
            ${row("Wants to run", list(USE_CASE_OPTIONS, data.useCases))}
            ${row("Systems", list(SYSTEM_OPTIONS, data.systems))}
          </table>
          <div style="margin-top:24px;">
            <div style="color:#50555a;font-size:13px;margin-bottom:8px;">What's broken today</div>
            <div style="background:#f0f6f8;border:1px solid rgba(12,16,22,0.10);border-radius:12px;padding:16px;color:#1e232c;font-size:14px;line-height:1.6;white-space:pre-wrap;">${esc(data.challenge)}</div>
          </div>
        </td></tr>
      </table>
    </td></tr>
  </table>`;

  return transporter.sendMail({
    from: FROM,
    to: TO,
    replyTo: data.email,
    subject: `remOPS signup: ${data.name} (${data.company})`,
    html,
  });
}
