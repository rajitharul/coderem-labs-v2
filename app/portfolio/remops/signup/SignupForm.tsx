"use client";

import { useState } from "react";
import {
  INDUSTRY_OPTIONS,
  USE_CASE_OPTIONS,
  SYSTEM_OPTIONS,
  VOLUME_OPTIONS,
} from "@/lib/remops-options";

/* remOPS signup form (client). Qualifying questions so the setup engineer walks
   into the first call already knowing the industry, the workflows and the
   systems we'd be integrating against. POSTs to /api/remops-signup, which sends
   the welcome + internal notification emails. */

type Status = "idle" | "sending" | "success" | "error";

const EMPTY = {
  name: "",
  email: "",
  company: "",
  whatsapp: "",
  industry: "",
  volume: "",
  challenge: "",
};

export default function SignupForm() {
  const [data, setData] = useState(EMPTY);
  const [useCases, setUseCases] = useState<string[]>([]);
  const [systems, setSystems] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const set =
    (key: keyof typeof EMPTY) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) =>
      setData((d) => ({ ...d, [key]: e.target.value }));

  const toggle =
    (list: string[], setList: (v: string[]) => void) => (value: string) =>
      setList(
        list.includes(value) ? list.filter((v) => v !== value) : [...list, value]
      );

  const toggleUseCase = toggle(useCases, setUseCases);
  const toggleSystem = toggle(systems, setSystems);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/remops-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, useCases, systems }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(json.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
      setData(EMPTY);
      setUseCases([]);
      setSystems([]);
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
      <form id="remops-form" onSubmit={onSubmit}>
        <div className="form-grid">
          <div className="field">
            <label>Full Name <span className="req">*</span></label>
            <input type="text" required placeholder="Jane Doe" value={data.name} onChange={set("name")} />
          </div>
          <div className="field">
            <label>Work Email <span className="req">*</span></label>
            <input type="email" required placeholder="jane@company.com" value={data.email} onChange={set("email")} />
          </div>
          <div className="field">
            <label>Company <span className="req">*</span></label>
            <input type="text" required placeholder="Company name" value={data.company} onChange={set("company")} />
          </div>
          <div className="field">
            <label>WhatsApp Number <span className="req">*</span></label>
            <input type="tel" required placeholder="+94 77 123 4567" value={data.whatsapp} onChange={set("whatsapp")} />
          </div>
          <div className="field">
            <label>Industry <span className="req">*</span></label>
            <select required value={data.industry} onChange={set("industry")}>
              <option value="" disabled>Select your industry</option>
              {INDUSTRY_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label>Expected Volume</label>
            <select value={data.volume} onChange={set("volume")}>
              <option value="">Not sure yet</option>
              {VOLUME_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>

          <div className="field full">
            <label>What would you run on WhatsApp?</label>
            <div className="opt-grid">
              {USE_CASE_OPTIONS.map((o) => (
                <label key={o.value} className="opt">
                  <input
                    type="checkbox"
                    checked={useCases.includes(o.value)}
                    onChange={() => toggleUseCase(o.value)}
                  />
                  <span className="box" aria-hidden="true"></span>
                  {o.label}
                </label>
              ))}
            </div>
          </div>

          <div className="field full">
            <label>Which systems should it connect to?</label>
            <div className="opt-grid">
              {SYSTEM_OPTIONS.map((o) => (
                <label key={o.value} className="opt">
                  <input
                    type="checkbox"
                    checked={systems.includes(o.value)}
                    onChange={() => toggleSystem(o.value)}
                  />
                  <span className="box" aria-hidden="true"></span>
                  {o.label}
                </label>
              ))}
            </div>
          </div>

          <div className="field full">
            <label>What&apos;s broken today? <span className="req">*</span></label>
            <textarea
              required
              placeholder="What are your customers and your team constantly chasing you for? Where does it fall apart — order taking, tracking, approvals, someone re-typing things into the ERP?"
              value={data.challenge}
              onChange={set("challenge")}
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={sending}
          style={{ marginTop: "22px", width: "100%" } as React.CSSProperties}
        >
          {sending ? "Sending…" : <>Get my free setup <span className="btn-arrow">→</span></>}
        </button>

        {status === "success" && (
          <p className="accent" style={{ marginTop: "16px", textAlign: "center" } as React.CSSProperties}>
            You&apos;re in. We&apos;ll assign your setup engineer and be in touch within 24 hours.
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
