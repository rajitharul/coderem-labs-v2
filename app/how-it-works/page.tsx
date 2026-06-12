import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works: CodeREM Labs",
  description: "The CodeREM process: analytical precision, vision to prototype in 14 days, concept to launch, and the finest attention to detail.",
};

export default function Page() {
  return (
    <>
      <section className="hero" style={{ paddingBottom: "60px" } as React.CSSProperties}>
            <div className="orbs"><span className="orb a"></span><span className="orb b"></span></div>
            <div className="container">
              <p className="eyebrow reveal">The CodeREM process</p>
              <h1 className="reveal" data-delay="80">There's no <span className="h-word">magic</span> here</h1>
              <p className="lede reveal" data-delay="160">Understanding a problem correctly is equivalent to solving 80% of it. We put true effort into understanding problems and determining optimal solutions, rather than just building something that makes things work for now.</p>
            </div>
          </section>

          <section style={{ paddingTop: "20px" } as React.CSSProperties}>
            <div className="container">
              <div className="svc-list">

                <article className="svc-row reveal">
                  <div className="svc-text">
                    <span className="svc-idx">01 · Industry-Leading Analysis</span>
                    <h3>Analytical Precision</h3>
                    <p>Ever wasted time and resources building the wrong product? We understand that pain.</p>
                    <ul className="feature-list">
                      <li>Deep-dive discovery sessions to understand business goals</li>
                      <li>Comprehensive requirement documentation with zero ambiguity</li>
                      <li>User journey mapping and workflow optimization</li>
                    </ul>
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

                <article className="svc-row rev reveal">
                  <div className="svc-text">
                    <span className="svc-idx">02 · Vision to Prototype in 14 Days</span>
                    <h3>Speed to Market</h3>
                    <p>We turn your vision into a working prototype at zero cost within 14 days, so you see exactly what you're getting before writing your first cheque.</p>
                    <ul className="feature-list">
                      <li>Rapid prototyping with real functionality</li>
                      <li>Learn and change fast</li>
                      <li>Agile release trains</li>
                    </ul>
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

                <article className="svc-row reveal">
                  <div className="svc-text">
                    <span className="svc-idx">03 · From Concept to Launch</span>
                    <h3>Engineering Excellence</h3>
                    <ul className="feature-list">
                      <li>Focus on scalability and maintainability</li>
                      <li>Information security baked into every layer</li>
                      <li>Architected for high-performance and growth</li>
                    </ul>
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

                <article className="svc-row rev reveal">
                  <div className="svc-text">
                    <span className="svc-idx">04 · The Finest Attention to Detail</span>
                    <h3>Quality Assurance</h3>
                    <p>Quality is not an afterthought, it's woven into every line of code.</p>
                    <ul className="feature-list">
                      <li>Automated testing at every stage</li>
                      <li>Manual QA by experienced testers</li>
                      <li>Security audits and vulnerability assessments</li>
                    </ul>
                  </div>
                  <div className="svc-demo">
                    <div className="mac-window">
                      <div className="mac-bar"><span className="mac-dots"><i></i><i></i><i></i></span><span className="mac-title">QA · test suite</span></div>
                      <div className="mac-body pr-improve">
                        <div className="pr-suite">
                          <div className="pr-suite-head"><span>Running tests</span><span className="pr-count">248 / 248 passed</span></div>
                          <div className="pr-trow" style={{ "--d": "0" } as React.CSSProperties}><i></i><b></b></div>
                          <div className="pr-trow" style={{ "--d": "1" } as React.CSSProperties}><i></i><b></b></div>
                          <div className="pr-trow" style={{ "--d": "2" } as React.CSSProperties}><i></i><b></b></div>
                          <div className="pr-progress"><span></span></div>
                        </div>
                        <div className="pr-handover">
                          <div className="pr-avatars"><i style={{ "--d": "0" } as React.CSSProperties}></i><i style={{ "--d": "1" } as React.CSSProperties}></i><i style={{ "--d": "2" } as React.CSSProperties}></i></div>
                          <span className="pr-handtext">Team onboarded</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>

              </div>
            </div>
          </section>

          <section>
            <div className="container">
              <div className="cta-band reveal">
                <p className="eyebrow center">Ready when you are</p>
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
