import { NextResponse } from "next/server";
import {
  sendThankYouEmail,
  sendInquiryNotification,
  type Submission,
} from "@/lib/email";

/* POST /api/contact — receives the Get Started form, validates it, then fires
   the thank-you + internal notification emails in parallel. No persistence:
   the emails (plus a server log) are the only record of a submission. */

export const runtime = "nodejs"; // nodemailer needs the Node runtime, not edge

const REQUIRED: Array<keyof Submission> = [
  "name",
  "email",
  "company",
  "budget",
  "timeline",
  "projectType",
  "description",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Partial<Submission>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  for (const field of REQUIRED) {
    if (!body[field] || String(body[field]).trim() === "") {
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

  const data: Submission = {
    name: String(body.name).trim(),
    email: String(body.email).trim(),
    company: String(body.company).trim(),
    budget: String(body.budget),
    timeline: String(body.timeline),
    projectType: String(body.projectType),
    description: String(body.description).trim(),
    attachment: body.attachment ? String(body.attachment).trim() : undefined,
  };

  console.log(`[contact] New inquiry from ${data.name} <${data.email}> · ${data.company}`);

  try {
    await Promise.all([
      sendInquiryNotification(data),
      sendThankYouEmail(data.email, data.name),
    ]);
  } catch (err) {
    console.error("[contact] Email send failed:", err);
    return NextResponse.json(
      {
        error:
          "We couldn't send your message right now. Please email us directly at praveen@coderemlabs.com.",
      },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
