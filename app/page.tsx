import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CodeREM Labs: Medical Grade Precision. F1 Grade Performance.",
  description: "Enterprise software, AI automation and AI innovation. A problem is never truly solved until it meets the optimal solution.",
};

export default function Page() {
  return (
    <>
      {/* HERO */}
          <section className="hero">
            <div className="orbs"><span className="orb a"></span><span className="orb b"></span><span className="orb c"></span></div>
            <div className="container">
              <p className="eyebrow">Enterprise Software · AI Automation · AI Innovation</p>
              <h1 className="reveal hero-2line">Medical Grade <span className="h-word">Precision.</span><br />F1 Grade <span className="h-word">Performance.</span></h1>
              <p className="sub hero-tagline">We solve the right problems with software that&apos;s <span className="rotate-wrap rotate-lg"><span data-rotate="precise, relentless, resilient, scalable, built to last">precise</span></span></p>
              <div className="hero-actions">
                <Link href="/get-started" className="btn btn-primary">Start Your Project <span className="btn-arrow">→</span></Link>
                <Link href="/portfolio" className="btn btn-ghost">View Our Work</Link>
              </div>
            </div>
          </section>

          {/* SCRUB STATEMENT */}
          <section className="statement">
            <div className="container">
              <p className="eyebrow">The belief we build on</p>
              <p className="big" data-scroll-fill>A problem is never truly solved until it meets the optimal solution.</p>
            </div>
          </section>

          {/* WHAT WE DO, full-width rows with animated macOS windows */}
          <section className="svc-pin" data-svc-pin>
            <div className="container">
              <div className="section-head">
                <p className="eyebrow">What we do</p>
                <h2>Maximize results while <span className="h-word">minimizing work.</span></h2>
                <p>Three primary offerings, consultation, software and automation.</p>
              </div>
            </div>
            <div className="svc-pin-stage">
              <span className="svc-scroll">Scroll</span>
              <div className="container">
                <div className="svc-deck">

                {/* 01 Enterprise Solutions */}
                <article className="svc-row svc-card" data-card>
                  <div className="svc-text">
                    <span className="svc-idx">01</span>
                    <h3>Enterprise Solutions</h3>
                    <p>Complete 0 to 100 · from ideation to production-ready systems. Scalable, secure architecture designed for millions of users, with full ownership from architecture to deployment.</p>
                    <div className="chips"><span className="chip">Full-Stack Dev</span><span className="chip">Cloud Native</span><span className="chip">Security First</span><span className="chip">CI/CD</span></div>
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

                {/* 02 Mobile Applications */}
                <article className="svc-row svc-card" data-card>
                  <div className="svc-text">
                    <span className="svc-idx">02</span>
                    <h3>Mobile Applications</h3>
                    <p>Your customers live on their phones, so we build apps that feel right at home there. Fast, reliable and genuinely nice to use, on both iOS and Android.</p>
                    <div className="chips"><span className="chip">iOS</span><span className="chip">Android</span><span className="chip">React Native</span><span className="chip">Offline-First</span><span className="chip">Push Notifications</span></div>
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

                {/* 02 AI Automations */}
                <article className="svc-row svc-card" data-card>
                  <div className="svc-text">
                    <span className="svc-idx">03</span>
                    <h3>AI Automations</h3>
                    <p>Automate repetitive tasks and workflows with intelligent AI systems. Dramatic reduction in manual work and human error, minutes instead of hours, 24/7, without additional headcount.</p>
                    <div className="chips"><span className="chip">Process Automation</span><span className="chip">Document AI</span><span className="chip">Workflow AI</span><span className="chip">Data Pipelines</span></div>
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

                {/* 03 AI Innovations */}
                <article className="svc-row svc-card" data-card>
                  <div className="svc-text">
                    <span className="svc-idx">04</span>
                    <h3>AI Innovations</h3>
                    <p>We don't just use AI that's out there, we build AI that keeps you ahead of your competition. Custom models, RAG systems and agents tailored to your domain.</p>
                    <div className="chips"><span className="chip">LLM &amp; GPT</span><span className="chip">RAG Systems</span><span className="chip">AI Agents</span><span className="chip">Generative AI</span></div>
                  </div>
                  <div className="svc-demo">
                    <div className="mac-window">
                      <div className="mac-bar"><span className="mac-dots"><i></i><i></i><i></i></span><span className="mac-title">CodeREM Claims Assist</span></div>
                      <div className="mac-body sc-chat">
                        <div className="msg user">Extract all claim information for ref #12345</div>
                        <div className="msg ai">
                          <span className="dots"><i></i><i></i><i></i></span>
                          <span className="ai-docs">
                            <em>Located <b>3 documents</b> linked to ref #12345</em>
                            <span className="ai-chips">
                              <span className="doc" style={{ "--d": "0" } as React.CSSProperties}>Claim form</span>
                              <span className="doc" style={{ "--d": "1" } as React.CSSProperties}>Physician notes</span>
                              <span className="doc" style={{ "--d": "2" } as React.CSSProperties}>Itemised bill</span>
                            </span>
                          </span>
                          <span className="ai-text">Extracted 14 fields · 97% confidence. Flagged 1 edge case for human review.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>

                {/* 04 Discovery & Analysis */}
                <article className="svc-row svc-card" data-card>
                  <div className="svc-text">
                    <span className="svc-idx">05</span>
                    <h3>Discovery &amp; Analysis</h3>
                    <p>Before we build, we understand. Deep research and precise analysis to identify pain points and map out the optimal solution, so you never build the wrong product.</p>
                    <div className="chips"><span className="chip">Workflow Mapping</span><span className="chip">Requirements</span><span className="chip">Architecture</span><span className="chip">Strategy</span></div>
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
            </div>
          </section>

          {/* PROCESS, pinned deck, cards reveal horizontally */}
          <section className="svc-pin proc-pin" data-hdeck>
            <div className="container">
              <div className="section-head">
                <p className="eyebrow">The CodeREM process</p>
                <h2>There's no <span className="h-word">magic</span> here.</h2>
                <p>Understanding a problem correctly is equivalent to solving 80% of it, so we put real effort into finding the optimal solution.</p>
              </div>
            </div>
            <div className="svc-pin-stage">
              <span className="svc-scroll">Scroll</span>
              <div className="container">
                <div className="svc-deck">

                  <article className="svc-row svc-card" data-card>
                    <div className="svc-text">
                      <span className="svc-idx">01 · Discovery</span>
                      <h3>Analytical Precision</h3>
                      <p>Requirements gathered with deep analysis, then broken down into clear, prioritised work items.</p>
                    </div>
                    <div className="svc-demo">
                      <div className="mac-window">
                        <div className="mac-bar"><span className="mac-dots"><i></i><i></i><i></i></span><span className="mac-title">Discovery · breakdown</span></div>
                        <div className="mac-body pr-discovery">
                          <div className="pr-brief">
                            <span className="pr-scan"></span>
                            <span className="pr-l w2"></span><span className="pr-l w1"></span><span className="pr-l w3"></span><span className="pr-l w2"></span><span className="pr-l w1"></span>
                          </div>
                          <div className="pr-flow">→</div>
                          <div className="pr-backlog">
                            <div className="pr-item" style={{ "--d": "0" } as React.CSSProperties}><i></i><span></span></div>
                            <div className="pr-item" style={{ "--d": "1" } as React.CSSProperties}><i></i><span></span></div>
                            <div className="pr-item" style={{ "--d": "2" } as React.CSSProperties}><i></i><span></span></div>
                            <div className="pr-item" style={{ "--d": "3" } as React.CSSProperties}><i></i><span></span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>

                  <article className="svc-row svc-card" data-card>
                    <div className="svc-text">
                      <span className="svc-idx">02 · Build</span>
                      <h3>Speed to Market</h3>
                      <p>A working prototype in 14 days, at zero cost, something you can see, click and reshape before committing.</p>
                    </div>
                    <div className="svc-demo">
                      <div className="mac-window">
                        <div className="mac-bar"><span className="mac-dots"><i></i><i></i><i></i></span><span className="mac-title">Generating screens…</span></div>
                        <div className="mac-body sc-stitch">
                          <div className="screen" style={{ "--s": "0" } as React.CSSProperties}>
                            <span className="sl h" style={{ "--d": "0" } as React.CSSProperties}></span>
                            <span className="sl" style={{ "--d": "1" } as React.CSSProperties}></span>
                            <span className="sl b" style={{ "--d": "2" } as React.CSSProperties}></span>
                            <span className="sl blk" style={{ "--d": "3" } as React.CSSProperties}></span>
                            <span className="sl btn" style={{ "--d": "4" } as React.CSSProperties}></span>
                          </div>
                          <div className="screen" style={{ "--s": "1" } as React.CSSProperties}>
                            <span className="sl h" style={{ "--d": "0" } as React.CSSProperties}></span>
                            <span className="sl blk" style={{ "--d": "1" } as React.CSSProperties}></span>
                            <span className="sl" style={{ "--d": "2" } as React.CSSProperties}></span>
                            <span className="sl c" style={{ "--d": "3" } as React.CSSProperties}></span>
                          </div>
                          <div className="screen" style={{ "--s": "2" } as React.CSSProperties}>
                            <span className="sl h" style={{ "--d": "0" } as React.CSSProperties}></span>
                            <span className="sl" style={{ "--d": "1" } as React.CSSProperties}></span>
                            <span className="sl b" style={{ "--d": "2" } as React.CSSProperties}></span>
                            <span className="sl" style={{ "--d": "3" } as React.CSSProperties}></span>
                            <span className="sl btn" style={{ "--d": "4" } as React.CSSProperties}></span>
                          </div>
                          <span className="pr-badge">14 days</span>
                        </div>
                      </div>
                    </div>
                  </article>

                  <article className="svc-row svc-card" data-card>
                    <div className="svc-text">
                      <span className="svc-idx">03 · Launch</span>
                      <h3>Engineering Excellence</h3>
                      <p>Security baked into every layer, architected to scale to millions, and hardened to stay reliable under load.</p>
                    </div>
                    <div className="svc-demo">
                      <div className="mac-window">
                        <div className="mac-bar"><span className="mac-dots"><i></i><i></i><i></i></span><span className="mac-title">Launch · health</span></div>
                        <div className="mac-body pr-launch">
                          <div className="pr-stat" style={{ "--d": "0" } as React.CSSProperties}><span className="dot"></span><b>Security hardened</b><em>✓ passed</em></div>
                          <div className="pr-stat" style={{ "--d": "1" } as React.CSSProperties}><span className="dot"></span><b>Scaled · 10k rps</b><em>✓ passed</em></div>
                          <div className="pr-stat" style={{ "--d": "2" } as React.CSSProperties}><span className="dot"></span><b>Uptime · 99.99%</b><em>✓ passed</em></div>
                          <div className="pr-scale"><span style={{ "--d": "0", "--peak": "50%" } as React.CSSProperties}></span><span style={{ "--d": "1", "--peak": "72%" } as React.CSSProperties}></span><span style={{ "--d": "2", "--peak": "90%" } as React.CSSProperties}></span><span style={{ "--d": "3", "--peak": "100%" } as React.CSSProperties}></span></div>
                        </div>
                      </div>
                    </div>
                  </article>

                </div>
              </div>
            </div>
          </section>

          {/* FEATURED WORK */}
          <section>
            <div className="container">
              <div className="section-head">
                <p className="eyebrow">Selected work</p>
                <h2><span className="h-word">Value</span> beyond what you think you need.</h2>
              </div>
              <div className="work" data-stagger>
                <div className="work-item">
                  <div className="work-visual"><span className="tag">Product</span><span className="big">FlightSmart Travel</span></div>
                  <div className="work-body">
                    <p>A travel agency booking platform integrating digital wallets and commission tracking, consolidating multiple reservation channels into one interface.</p>
                    <div className="work-metrics"><div className="m"><div className="v">65%</div><div className="k">Booking time reduced</div></div><div className="m"><div className="v">99.8%</div><div className="k">Revenue accuracy</div></div></div>
                    <Link href="/portfolio/flightsmart" className="card-link">View case study <span className="btn-arrow">→</span></Link>
                  </div>
                </div>
                <div className="work-item">
                  <div className="work-visual"><span className="tag">Healthcare · AI</span><span className="big">ClaimBrain</span></div>
                  <div className="work-body">
                    <p>An AI-powered medical claims processing system using OCR and LLMs to extract data from claim documents and physician notes, flagging edge cases for human review.</p>
                    <div className="work-metrics"><div className="m"><div className="v">90%</div><div className="k">Processing time reduced</div></div><div className="m"><div className="v">97%</div><div className="k">Extraction accuracy</div></div></div>
                    <Link href="/portfolio/claimbrain" className="card-link">View case study <span className="btn-arrow">→</span></Link>
                  </div>
                </div>
              </div>
              <div className="center" style={{ marginTop: "44px" } as React.CSSProperties}><Link href="/portfolio" className="btn btn-ghost">See all projects <span className="btn-arrow">→</span></Link></div>
            </div>
          </section>

          {/* CTA */}
          <section>
            <div className="container">
              <div className="cta-band">
                <p className="eyebrow center">Let's get started</p>
                <h2>Well begun is half done.</h2>
                <p>Free consultation · No commitment required · Response within 24h · Global availability</p>
                <div className="cta-actions">
                  <Link href="/get-started" className="btn btn-primary">Start Your Project <span className="btn-arrow">→</span></Link>
                  <Link href="/how-we-work" className="btn btn-ghost">How We Work</Link>
                </div>
              </div>
            </div>
          </section>
    </>
  );
}
