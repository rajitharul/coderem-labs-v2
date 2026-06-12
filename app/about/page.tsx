import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "About: CodeREM Labs",
  description: "Analytical precision with speed to market, delivered. A team of engineers, architects and problem-solvers building software that makes a real difference.",
};

export default function Page() {
  return (
    <>
      <section className="hero" style={{ paddingBottom: "50px" } as React.CSSProperties}>
            <div className="orbs"><span className="orb a"></span><span className="orb b"></span></div>
            <div className="container">
              <p className="eyebrow reveal">About us</p>
              <h1 className="reveal" data-delay="80">Analytical Precision with <span className="h-word">Speed to Market</span>, Delivered</h1>
              <p className="lede reveal" data-delay="160">We're a team of engineers, architects, and problem-solvers passionate about building software that makes a real difference.</p>
            </div>
          </section>

          <section className="story" style={{ paddingTop: "10px" } as React.CSSProperties}>
            <div className="container">
              <div className="reveal">
                <p className="eyebrow">Our story</p>
                <h2>Born from a simple belief</h2>
              </div>

              <div className="story-cols">
              <div className="crem-logo-wrap reveal" data-delay="80">
                <Logo id="logo-about" size="100%" />
              </div>

              <div className="story-lead reveal" data-delay="140">
                <p><strong>CodeREM Labs</strong> was founded with a clear mission: to bring enterprise-grade engineering to organizations of all sizes. We saw too many businesses struggling with outdated systems, failed projects, and vendors who promised the moon but delivered frustration.</p>
                <p>Our founding team came together from leading tech companies, bringing experience from building systems that serve millions of users. We knew there had to be a better way, one that combines deep technical expertise with genuine partnership.</p>
                <p>Today, we've helped, and continue to help, organizations transform their operations through custom software, AI automation, and modern cloud infrastructure. But we're just getting started.</p>
              </div>
              </div>
            </div>
          </section>

          <section style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" } as React.CSSProperties}>
            <div className="container">
              <div className="section-head reveal"><p className="eyebrow">What sets us apart</p><h2>Engineering-first, outcome-focused</h2></div>
              <div className="cs-caps" data-stagger>
                <div className="cs-cap"><span className="n">01</span><h3>Engineering-First Culture</h3><p>Deep technical craft at the core of everything we deliver.</p></div>
                <div className="cs-cap"><span className="n">02</span><h3>Transparent Process</h3><p>Clarity at every step, so you always know where things stand.</p></div>
                <div className="cs-cap"><span className="n">03</span><h3>Outcome-Focused</h3><p>Measured by the results we deliver, not the hours we bill.</p></div>
                <div className="cs-cap"><span className="n">04</span><h3>Modern Architecture</h3><p>Built on scalable, future-proof foundations.</p></div>
                <div className="cs-cap"><span className="n">05</span><h3>Long-Term Partnership</h3><p>We stay invested well beyond launch.</p></div>
                <div className="cs-cap"><span className="n">06</span><h3>Global Delivery</h3><p>Sri Lanka-based, serving clients worldwide.</p></div>
              </div>
            </div>
          </section>

          <section>
            <div className="container">
              <div className="section-head reveal"><p className="eyebrow">Core values</p><h2>What we hold to</h2></div>
              <div className="tag-cloud reveal" data-delay="120">
                <span className="v">Reliability</span>
                <span className="v">Clarity</span>
                <span className="v">Security</span>
                <span className="v">Speed</span>
                <span className="v">Measurable Outcomes</span>
                <span className="v">Transparency</span>
              </div>
            </div>
          </section>

          <section style={{ paddingTop: "0" } as React.CSSProperties}>
            <div className="container">
              <div className="cta-band reveal">
                <p className="eyebrow center">Join us or work with us</p>
                <h2>Let's build something great.</h2>
                <p>Free consultation with a 24-hour response time.</p>
                <div className="cta-actions">
                  <Link href="/get-started" className="btn btn-primary">Start Your Project <span className="btn-arrow">→</span></Link>
                  <a href="#" className="btn btn-ghost">View Careers</a>
                  <Link href="/portfolio" className="btn btn-ghost">View Our Work</Link>
                </div>
              </div>
            </div>
          </section>
    </>
  );
}
