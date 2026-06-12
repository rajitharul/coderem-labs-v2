import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started: CodeREM Labs",
  description: "Let's build something great. Tell us about your idea or where you're struggling and we'll get back to you within 24 hours.",
};

export default function Page() {
  return (
    <>
      <section className="hero" style={{ paddingBottom: "40px" } as React.CSSProperties}>
            <div className="orbs"><span className="orb a"></span><span className="orb c"></span></div>
            <div className="container">
              <p className="eyebrow reveal">Contact us</p>
              <h1 className="reveal" data-delay="80">Let's build <span className="h-word">something great</span></h1>
              <p className="lede reveal" data-delay="160">Tell us about your idea or where you're struggling and we'll get back to you within 24 hours.</p>
            </div>
          </section>

          <section style={{ paddingTop: "0" } as React.CSSProperties}>
            <div className="container">
              <div className="split" style={{ alignItems: "flex-start" } as React.CSSProperties}>

                {/* FORM */}
                <div className="card reveal" style={{ padding: "36px" } as React.CSSProperties}>
                  <form id="project-form">
                    <div className="form-grid">
                      <div className="field"><label>Full Name <span className="req">*</span></label><input type="text" required placeholder="Jane Doe" /></div>
                      <div className="field"><label>Work Email <span className="req">*</span></label><input type="email" required placeholder="jane@company.com" /></div>
                      <div className="field full"><label>Company <span className="req">*</span></label><input type="text" required placeholder="Company name" /></div>
                      <div className="field"><label>Budget Range <span className="req">*</span></label>
                        <select required defaultValue="">
                          <option value="" disabled>Select a range</option>
                          <option>Under $25,000</option>
                          <option>$25,000, $50,000</option>
                          <option>$50,000, $100,000</option>
                          <option>$100,000, $250,000</option>
                          <option>Over $250,000</option>
                          <option>Not sure yet</option>
                        </select>
                      </div>
                      <div className="field"><label>Timeline <span className="req">*</span></label>
                        <select required defaultValue="">
                          <option value="" disabled>Select a timeline</option>
                          <option>As soon as possible</option>
                          <option>1 to 3 months</option>
                          <option>3 to 6 months</option>
                          <option>6+ months</option>
                          <option>Flexible</option>
                        </select>
                      </div>
                      <div className="field full"><label>Project Type <span className="req">*</span></label>
                        <select required defaultValue="">
                          <option value="" disabled>Select a type</option>
                          <option>Web Application</option>
                          <option>Mobile Application</option>
                          <option>Enterprise System</option>
                          <option>AI/ML Solution</option>
                          <option>Cloud &amp; DevOps</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="field full"><label>Tell Us About Your Project <span className="req">*</span></label><textarea required placeholder="What are you trying to build, or where are you struggling?"></textarea></div>
                      <div className="field full"><label>Attachment Link (Optional)</label><input type="url" placeholder="https://…" /></div>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ marginTop: "22px", width: "100%" } as React.CSSProperties}>Send Project Details <span className="btn-arrow">→</span></button>
                    <p id="form-note" className="accent" style={{ display: "none", marginTop: "16px", textAlign: "center" } as React.CSSProperties}>Thanks, your inquiry has been sent. We'll respond within 24 hours.</p>
                  </form>
                </div>

                {/* SIDE INFO */}
                <div className="reveal" data-delay="120">
                  <div className="contact-card" style={{ marginBottom: "20px" } as React.CSSProperties}>
                    <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "16px" } as React.CSSProperties}>
                      <div className="avatar">P</div>
                      <div><h3 style={{ fontSize: "1.2rem" } as React.CSSProperties}>Praveen</h3><span className="muted" style={{ fontSize: ".88rem" } as React.CSSProperties}>CEO · Director Solutions</span></div>
                    </div>
                    <p>Every inquiry goes directly to our CEO. You'll get a personal response.</p>
                    <a href="mailto:praveen@coderemlabs.com" className="card-link">praveen@coderemlabs.com <span className="btn-arrow">→</span></a>
                  </div>

                  <div className="card">
                    <h3 style={{ fontSize: "1.2rem", marginBottom: "18px" } as React.CSSProperties}>What happens next</h3>
                    <div className="steps" style={{ gridTemplateColumns: "1fr", gap: "14px" } as React.CSSProperties}>
                      <div className="step" style={{ padding: "18px" } as React.CSSProperties}><span className="role">Step 01</span><h3 style={{ fontSize: "1.05rem", margin: "6px 0" } as React.CSSProperties}>We Review</h3><p style={{ marginTop: "0" } as React.CSSProperties}>Our team reviews your submission within 24 hours.</p></div>
                      <div className="step" style={{ padding: "18px" } as React.CSSProperties}><span className="role">Step 02</span><h3 style={{ fontSize: "1.05rem", margin: "6px 0" } as React.CSSProperties}>Discovery Call</h3><p style={{ marginTop: "0" } as React.CSSProperties}>We schedule a call to dive deeper into your needs.</p></div>
                      <div className="step" style={{ padding: "18px" } as React.CSSProperties}><span className="role">Step 03</span><h3 style={{ fontSize: "1.05rem", margin: "6px 0" } as React.CSSProperties}>Proposal</h3><p style={{ marginTop: "0" } as React.CSSProperties}>You receive a detailed proposal with scope, timeline, and pricing.</p></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
    </>
  );
}
