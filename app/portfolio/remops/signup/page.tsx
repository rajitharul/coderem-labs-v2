import type { Metadata } from "next";
import Link from "next/link";
import SignupForm from "./SignupForm";

export const metadata: Metadata = {
  title: "Sign up for remOPS: Free setup, dedicated engineer | CodeREM Labs",
  description:
    "Tell us how your business actually runs. A dedicated setup engineer will build, integrate and tailor your remOPS WhatsApp agent with you, free. You only pay for usage once it's live.",
};

export default function Page() {
  return (
    <>
      <section className="hero" style={{ minHeight: "auto", padding: "150px 0 40px" } as React.CSSProperties}>
        <div className="orbs"><span className="orb a"></span><span className="orb c"></span></div>
        <div className="container">
          <p className="cs-breadcrumb reveal">
            <Link href="/portfolio">Portfolio</Link> <span>/</span>{" "}
            <Link href="/portfolio/remops">remOPS</Link> <span>/</span> Sign up
          </p>
          <h1 className="reveal" data-delay="80">Get set up. <span className="h-word">Free.</span></h1>
          <p className="lede reveal" data-delay="160">Tell us how your business actually runs. A dedicated setup engineer (a real person, not a sales rep) will reach out within 24 hours and build your remOPS agent with you.</p>
        </div>
      </section>

      <section style={{ paddingTop: "0" } as React.CSSProperties}>
        <div className="container">
          <div className="split" style={{ alignItems: "flex-start" } as React.CSSProperties}>

            {/* FORM */}
            <SignupForm />

            {/* SIDE INFO */}
            <div className="reveal" data-delay="120">
              <div className="contact-card" style={{ marginBottom: "20px" } as React.CSSProperties}>
                <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "16px" } as React.CSSProperties}>
                  <div className="avatar">P</div>
                  <div>
                    <h3 style={{ fontSize: "1.2rem" } as React.CSSProperties}>Praveen</h3>
                    <span className="muted" style={{ fontSize: ".88rem" } as React.CSSProperties}>CEO · Director Solutions</span>
                  </div>
                </div>
                <p>Every signup comes to me personally, and I assign your setup engineer myself.</p>
                <a href="mailto:praveen@coderemlabs.com" className="card-link">praveen@coderemlabs.com <span className="btn-arrow">→</span></a>
              </div>

              <div className="card" style={{ marginBottom: "20px" } as React.CSSProperties}>
                <h3 style={{ fontSize: "1.2rem", marginBottom: "14px" } as React.CSSProperties}>What &quot;free setup&quot; actually means</h3>
                <ul className="feature-list">
                  <li>A named engineer assigned to you</li>
                  <li>They map how your business really works</li>
                  <li>They integrate your ERP, WMS, TMS or CRM</li>
                  <li>They tailor the agent to your rules and vocabulary</li>
                  <li>They train your team and stay after go-live</li>
                  <li>You go live before you pay us anything</li>
                </ul>
                <p className="muted" style={{ marginTop: "16px", fontSize: ".92rem" } as React.CSSProperties}>
                  After that, you pay only for usage, on demand. No seat licences, no platform fee, no lock-in.
                </p>
              </div>

              <div className="card">
                <h3 style={{ fontSize: "1.2rem", marginBottom: "18px" } as React.CSSProperties}>What happens next</h3>
                <div className="steps" style={{ gridTemplateColumns: "1fr", gap: "14px" } as React.CSSProperties}>
                  <div className="step" style={{ padding: "18px" } as React.CSSProperties}>
                    <span className="role">Step 01</span>
                    <h3 style={{ fontSize: "1.05rem", margin: "6px 0" } as React.CSSProperties}>We read it properly</h3>
                    <p style={{ marginTop: "0" } as React.CSSProperties}>Within 24 hours we review what you sent and assign your setup engineer.</p>
                  </div>
                  <div className="step" style={{ padding: "18px" } as React.CSSProperties}>
                    <span className="role">Step 02</span>
                    <h3 style={{ fontSize: "1.05rem", margin: "6px 0" } as React.CSSProperties}>Discovery call</h3>
                    <p style={{ marginTop: "0" } as React.CSSProperties}>Your engineer walks through your workflows and the systems we&apos;d connect to.</p>
                  </div>
                  <div className="step" style={{ padding: "18px" } as React.CSSProperties}>
                    <span className="role">Step 03</span>
                    <h3 style={{ fontSize: "1.05rem", margin: "6px 0" } as React.CSSProperties}>We build it with you</h3>
                    <p style={{ marginTop: "0" } as React.CSSProperties}>Integration, tailoring, training and go-live, at no cost. Then you pay per use.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
