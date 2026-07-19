import { NextResponse } from "next/server";
import {
  sendRemOpsWelcomeEmail,
  sendRemOpsSignupNotification,
  type RemOpsSignup,
} from "@/lib/email";

/* POST /api/remops-signup: receives the remOPS signup form, validates it, then
   fires the welcome + internal notification emails in parallel. Same shape as
   /api/contact: no persistence, the emails (plus a server log) are the only
   record of a signup. */

export const runtime = "nodejs"; // nodemailer needs the Node runtime, not edge

const REQUIRED: Array<keyof RemOpsSignup> = [
  "name",
  "email",
  "company",
  "whatsapp",
  "industry",
  "challenge",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* Accept the common ways people write a number (+94 77 123 4567, 0771234567)
   and only insist there are enough digits to be dialable. */
const DIGITS_RE = /^\+?[\d\s().-]{7,20}$/;

/* Multi-selects arrive as arrays; drop anything that isn't a non-empty string
   so a malformed payload can't reach the email templates. */
function stringList(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((v): v is string => typeof v === "string" && v.trim() !== "")
    .map((v) => v.trim())
    .slice(0, 20);
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  for (const field of REQUIRED) {
    const value = body[field];
    if (typeof value !== "string" || value.trim() === "") {
      return NextResponse.json(
        { error: `Missing required field: ${field}` },
        { status: 400 }
      );
    }
  }

  if (!EMAIL_RE.test(String(body.email))) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (!DIGITS_RE.test(String(body.whatsapp).trim())) {
    return NextResponse.json(
      { error: "Please enter a valid WhatsApp number, including country code." },
      { status: 400 }
    );
  }

  const data: RemOpsSignup = {
    name: String(body.name).trim(),
    email: String(body.email).trim(),
    company: String(body.company).trim(),
    whatsapp: String(body.whatsapp).trim(),
    industry: String(body.industry),
    useCases: stringList(body.useCases),
    systems: stringList(body.systems),
    volume: typeof body.volume === "string" ? body.volume : "",
    challenge: String(body.challenge).trim(),
  };

  console.log(
    `[remops] New signup from ${data.name} <${data.email}> · ${data.company}`
  );

  try {
    await Promise.all([
      sendRemOpsSignupNotification(data),
      sendRemOpsWelcomeEmail(data.email, data.name),
    ]);
  } catch (err) {
    console.error("[remops] Email send failed:", err);
    return NextResponse.json(
      {
        error:
          "We couldn't send your signup right now. Please email us directly at praveen@coderemlabs.com.",
      },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
