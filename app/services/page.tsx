import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services: CodeREM Labs",
  description: "Enterprise Solutions, AI Automations, AI Innovations and Discovery & Analysis. Consultation, software and automation done right.",
};

export default function Page() {
  return (
    <>
      <section className="hero" style={{ paddingBottom: "50px" } as React.CSSProperties}>
            <div className="orbs"><span className="orb a"></span><span className="orb c"></span></div>
            <div className="container">
              <p className="eyebrow reveal">Our services · What we do</p>
              <h1 className="reveal" data-delay="80">Consultation. Software. <span className="h-word">Automation.</span></h1>
              <p className="lede reveal" data-delay="160">Three primary offerings, engineered with the discipline of medicine and the speed of motorsport.</p>
            </div>
          </section>

          <section style={{ paddingTop: "10px" } as React.CSSProperties}>
            <div className="container">
              <div className="svc-list">

                {/* 01 Enterprise Solutions, demo right */}
                <article className="svc-row reveal">
                  <div className="svc-text">
                    <h3>Enterprise Solutions</h3>
                    <p>You might be dreaming of a big business. Scaling makes businesses vulnerable unless they are established on strong cornerstones.</p>
                    <h4 style={{ fontSize: ".95rem", margin: "22px 0 6px", color: "var(--text-muted)", fontFamily: "var(--font-mono)", letterSpacing: ".06em", textTransform: "uppercase" } as React.CSSProperties}>Expected outcomes</h4>
                    <ul className="feature-list">
                      <li>Production-ready applications with enterprise-grade security</li>
                      <li>Scalable architecture designed for millions of users</li>
                      <li>Full ownership, from architecture to deployment</li>
                      <li>Future-proof systems built for continuous improvement</li>
                    </ul>
                    <div className="chips"><span className="chip">Full-Stack Dev</span><span className="chip">Cloud Native</span><span className="chip">Scalable Architecture</span><span className="chip">Security First</span><span className="chip">CI/CD Pipelines</span></div>
                    <p className="muted" style={{ marginTop: "18px" } as React.CSSProperties}>Timeline: 12 to 24 weeks for full enterprise deployment</p>
                  </div>
                  <div className="svc-demo">
                    <div className="mac-window">
                      <div className="mac-bar"><span className="mac-dots"><i></i><i></i><i></i></span><span className="mac-title">app.coderemlabs.com</span></div>
                      <div className="mac-body sc-dash">
                        <div className="dash-side"><span></span><span className="on"></span><span></span><span></span></div>
                        <div className="dash-main">
                          <div className="dash-kpis">
                            <div className="kpi"><b>1.2M</b><i>users</i></div>
                            <div className="kpi"><b>99.8%</b><i>uptime</i></div>
                            <div className="kpi"><b>4.9★</b><i>rating</i></div>
                          </div>
                          <div className="dash-chart">
                            <span style={{ "--d": "0", "--peak": "62%" } as React.CSSProperties}></span><span style={{ "--d": "1", "--peak": "84%" } as React.CSSProperties}></span><span style={{ "--d": "2", "--peak": "48%" } as React.CSSProperties}></span><span style={{ "--d": "3", "--peak": "92%" } as React.CSSProperties}></span><span style={{ "--d": "4", "--peak": "70%" } as React.CSSProperties}></span><span style={{ "--d": "5", "--peak": "55%" } as React.CSSProperties}></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="svc-row rev reveal">
                  <div className="svc-text">
                    <h3>Mobile Applications</h3>
                    <p>Your customers live on their phones, and a clunky app is worse than no app at all. We build mobile experiences that feel native, load fast, and keep working even when the signal drops.</p>
                    <h4 style={{ fontSize: ".95rem", margin: "22px 0 6px", color: "var(--text-muted)", fontFamily: "var(--font-mono)", letterSpacing: ".06em", textTransform: "uppercase" } as React.CSSProperties}>Expected outcomes</h4>
                    <ul className="feature-list">
                      <li>Native-quality apps on both iOS and Android</li>
                      <li>Fast, offline-friendly experiences that respect the user</li>
                      <li>Shared code where it's sensible, native where it counts</li>
                      <li>Smooth, automated releases to the App Store and Play Store</li>
                    </ul>
                    <div className="chips"><span className="chip">React Native</span><span className="chip">Swift</span><span className="chip">Kotlin</span><span className="chip">Flutter</span><span className="chip">Push Notifications</span><span className="chip">Offline-First</span></div>
                    <p className="muted" style={{ marginTop: "18px" } as React.CSSProperties}>Timeline: 8 to 16 weeks to a polished, store-ready app</p>
                  </div>
                  <div className="svc-demo">
                    <div className="phone-stage">
                      <div className="phone">
                        <div className="ph-top"></div>
                        <div className="ph-list">
                          <div className="ph-card" style={{ "--d": "0" } as React.CSSProperties}></div>
                          <div className="ph-card" style={{ "--d": "1" } as React.CSSProperties}></div>
                          <div className="ph-card" style={{ "--d": "2" } as React.CSSProperties}></div>
                          <div className="ph-card" style={{ "--d": "3" } as React.CSSProperties}></div>
                          <div className="ph-card" style={{ "--d": "4" } as React.CSSProperties}></div>
                        </div>
                        <div className="ph-tabs">
                          <span className="ph-tab" style={{ "--t": "0" } as React.CSSProperties}></span>
                          <span className="ph-tab" style={{ "--t": "1" } as React.CSSProperties}></span>
                          <span className="ph-tab" style={{ "--t": "2" } as React.CSSProperties}></span>
                          <span className="ph-tab" style={{ "--t": "3" } as React.CSSProperties}></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>

                {/* 02 AI Automations, demo left */}
                <article className="svc-row reveal">
                  <div className="svc-text">
                    <h3>AI Automations</h3>
                    <p>We are at that age where human intelligence is utilized actually where it matters, such as handling finances, handling secure data and making key decisions.</p>
                    <h4 style={{ fontSize: ".95rem", margin: "22px 0 6px", color: "var(--text-muted)", fontFamily: "var(--font-mono)", letterSpacing: ".06em", textTransform: "uppercase" } as React.CSSProperties}>Expected outcomes</h4>
                    <ul className="feature-list">
                      <li>Dramatic reduction in manual work and human error</li>
                      <li>Faster processing times, minutes instead of hours</li>
                      <li>Cost savings through intelligent automation</li>
                      <li>24/7 operations without additional headcount</li>
                    </ul>
                    <div className="chips"><span className="chip">Process Automation</span><span className="chip">Document AI</span><span className="chip">Smart Chatbots</span><span className="chip">Workflow AI</span><span className="chip">Data Pipelines</span></div>
                    <p className="muted" style={{ marginTop: "18px" } as React.CSSProperties}>Timeline: 4 to 10 weeks for initial automation deployment</p>
                  </div>
                  <div className="svc-demo">
                    <div className="mac-window">
                      <div className="mac-bar"><span className="mac-dots"><i></i><i></i><i></i></span><span className="mac-title">Automation · running</span></div>
                      <div className="mac-body sc-flow">
                        <div className="task" style={{ "--d": "0" } as React.CSSProperties}><span className="check"></span>Extract invoice data</div>
                        <div className="task" style={{ "--d": "1" } as React.CSSProperties}><span className="check"></span>Validate against policy</div>
                        <div className="task" style={{ "--d": "2" } as React.CSSProperties}><span className="check"></span>Post to ledger</div>
                        <div className="task" style={{ "--d": "3" } as React.CSSProperties}><span className="check"></span>Notify the team</div>
                        <div className="flow-bar"><i></i></div>
                      </div>
                    </div>
                  </div>
                </article>

                {/* 03 AI Innovations, demo right */}
                <article className="svc-row rev reveal">
                  <div className="svc-text">
                    <h3>AI Innovations</h3>
                    <p>We are a team of AI Engineers. We don't just use AI that's out there in the market, we build AI that will help you stay way ahead of your competition.</p>
                    <div className="chips" style={{ marginTop: "22px" } as React.CSSProperties}><span className="chip">LLM &amp; GPT</span><span className="chip">RAG Systems</span><span className="chip">AI Agents</span><span className="chip">Predictive ML</span><span className="chip">Generative AI</span></div>
                    <p className="muted" style={{ marginTop: "18px" } as React.CSSProperties}>Timeline: 6 to 16 weeks depending on complexity</p>
                  </div>
                  <div className="svc-demo">
                    <div className="mac-window">
                      <div className="mac-bar"><span className="mac-dots"><i></i><i></i><i></i></span><span className="mac-title">CodeREM Claims Assist</span></div>
                      <div className="mac-body sc-chat">
                        <div className="msg user">Summarise this 9-page claim</div>
                        <div className="msg ai"><span className="dots"><i></i><i></i><i></i></span><span className="ai-text">Extracted 14 fields · 97% confidence. Flagged 1 edge case for human review.</span></div>
                      </div>
                    </div>
                  </div>
                </article>

                {/* 04 Discovery & Analysis, demo left */}
                <article className="svc-row reveal">
                  <div className="svc-text">
                    <h3>Discovery &amp; Analysis</h3>
                    <p>Before we build, we understand. We dive deep into your business processes, identify pain points, and map out the optimal solution.</p>
                    <h4 style={{ fontSize: ".95rem", margin: "22px 0 6px", color: "var(--text-muted)", fontFamily: "var(--font-mono)", letterSpacing: ".06em", textTransform: "uppercase" } as React.CSSProperties}>Typical deliverables</h4>
                    <ul className="feature-list">
                      <li>Custom ERP &amp; business platforms</li>
                      <li>Full-stack web &amp; mobile applications</li>
                      <li>Cloud infrastructure &amp; DevOps setup</li>
                      <li>API development &amp; third-party integrations</li>
                      <li>Ongoing maintenance &amp; support</li>
                    </ul>
                    <p className="muted" style={{ marginTop: "18px" } as React.CSSProperties}>Timeline: 2 to 4 weeks for comprehensive analysis</p>
                  </div>
                  <div className="svc-demo">
                    <div className="mac-window">
                      <div className="mac-bar"><span className="mac-dots"><i></i><i></i><i></i></span><span className="mac-title">Discovery · analysis</span></div>
                      <div className="mac-body sc-analysis">
                        <svg className="ana-chart" viewBox="0 0 300 130" preserveAspectRatio="none">
                          <polygon className="ana-area" points="12,118 12,92 70,74 128,86 186,50 244,60 288,28 288,118"></polygon>
                          <polyline className="ana-line" points="12,92 70,74 128,86 186,50 244,60 288,28"></polyline>
                        </svg>
                        <div className="ana-list">
                          <div className="ana-item" style={{ "--d": "0" } as React.CSSProperties}>Goals mapped</div>
                          <div className="ana-item" style={{ "--d": "1" } as React.CSSProperties}>Pain points found</div>
                          <div className="ana-item" style={{ "--d": "2" } as React.CSSProperties}>Scope defined</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>


              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-tint" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" } as React.CSSProperties}>
            <div className="container">
              <div className="section-head reveal"><p className="eyebrow">FAQs</p><h2>Good questions, straight answers</h2></div>
              <div className="grid cols-2" data-stagger>
                <div className="card">
                  <h3>Do you offer a free prototype?</h3>
                  <p>Yes. We turn your vision into a working prototype within 14 days at zero cost, so you can see exactly what you are getting before writing your first cheque.</p>
                </div>
                <div className="card">
                  <h3>Where is CodeREM Labs located?</h3>
                  <p>Sri Lanka / Global, we are Sri Lanka-based and deliver to clients worldwide.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container">
              <div className="cta-band reveal">
                <p className="eyebrow center">Let's get started</p>
                <h2>Well begun is half done.</h2>
                <p>Free consultation · No commitment required · Response within 24h · Global availability</p>
                <div className="cta-actions">
                  <Link href="/get-started" className="btn btn-primary">Start Your Project <span className="btn-arrow">→</span></Link>
                  <Link href="/portfolio" className="btn btn-ghost">View Our Work</Link>
                </div>
              </div>
            </div>
          </section>
    </>
  );
}
