"use client";

import { useState } from "react";
import {
  BUDGET_OPTIONS,
  TIMELINE_OPTIONS,
  PROJECT_TYPE_OPTIONS,
} from "@/lib/form-options";

/* Get Started contact form (client). Holds the form state and POSTs to
   /api/contact, which sends the notification + thank-you emails. Replaces the
   old simulated submit that lived in components/Motion.tsx. */

type Status = "idle" | "sending" | "success" | "error";

const EMPTY = {
  name: "",
  email: "",
  company: "",
  budget: "",
  timeline: "",
  projectType: "",
  description: "",
  attachment: "",
};

export default function ContactForm() {
  const [data, setData] = useState(EMPTY);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const set =
    (key: keyof typeof EMPTY) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) =>
      setData((d) => ({ ...d, [key]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(json.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
      setData(EMPTY);
    } catch {
      setError(
        "We couldn't reach the server. Please email us directly at praveen@coderemlabs.com."
      );
      setStatus("error");
    }
  }

  const sending = status === "sending";

  return (
    <div className="card reveal" style={{ padding: "36px" } as React.CSSProperties}>
      <form id="project-form" onSubmit={onSubmit}>
        <div className="form-grid">
          <div className="field">
            <label>Full Name <span className="req">*</span></label>
            <input type="text" required placeholder="Jane Doe" value={data.name} onChange={set("name")} />
          </div>
          <div className="field">
            <label>Work Email <span className="req">*</span></label>
            <input type="email" required placeholder="jane@company.com" value={data.email} onChange={set("email")} />
          </div>
          <div className="field full">
            <label>Company <span className="req">*</span></label>
            <input type="text" required placeholder="Company name" value={data.company} onChange={set("company")} />
          </div>
          <div className="field">
            <label>Budget Range <span className="req">*</span></label>
            <select required value={data.budget} onChange={set("budget")}>
              <option value="" disabled>Select a range</option>
              {BUDGET_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label>Timeline <span className="req">*</span></label>
            <select required value={data.timeline} onChange={set("timeline")}>
              <option value="" disabled>Select a timeline</option>
              {TIMELINE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
          <div className="field full">
            <label>Project Type <span className="req">*</span></label>
            <select required value={data.projectType} onChange={set("projectType")}>
              <option value="" disabled>Select a type</option>
              {PROJECT_TYPE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
          <div className="field full">
            <label>Tell Us About Your Project <span className="req">*</span></label>
            <textarea required placeholder="What are you trying to build, or where are you struggling?" value={data.description} onChange={set("description")}></textarea>
          </div>
          <div className="field full">
            <label>Attachment Link (Optional)</label>
            <input type="url" placeholder="https://…" value={data.attachment} onChange={set("attachment")} />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={sending}
          style={{ marginTop: "22px", width: "100%" } as React.CSSProperties}
        >
          {sending ? "Sending…" : <>Send Project Details <span className="btn-arrow">→</span></>}
        </button>

        {status === "success" && (
          <p className="accent" style={{ marginTop: "16px", textAlign: "center" } as React.CSSProperties}>
            Thanks, your inquiry has been sent. We&apos;ll respond within 24 hours.
          </p>
        )}
        {status === "error" && (
          <p style={{ marginTop: "16px", textAlign: "center", color: "#dc2626" } as React.CSSProperties}>
            {error}
          </p>
        )}
      </form>
    </div>
  );
}
