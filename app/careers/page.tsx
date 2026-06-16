import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers: CodeREM Labs",
  description: "Join CodeREM Labs — a team of engineers, architects and problem-solvers building enterprise-grade software, AI automation and AI innovation. See our open positions.",
};

export default function Page() {
  return (
    <>
      <section className="hero" style={{ paddingBottom: "50px" } as React.CSSProperties}>
            <div className="orbs"><span className="orb a"></span><span className="orb b"></span></div>
            <div className="container">
              <p className="eyebrow reveal">Careers</p>
              <h1 className="reveal" data-delay="80">Build things that <span className="h-word">actually matter</span></h1>
              <p className="lede reveal" data-delay="160">We're a team of engineers, architects and problem-solvers who care about craft. If that sounds like you, we'd love to stay in touch.</p>
            </div>
          </section>

          <section className="bg-tint" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" } as React.CSSProperties}>
            <div className="container">
              <div className="section-head reveal"><p className="eyebrow">Why CodeREM</p><h2>A place to do your best work</h2></div>
              <div className="cs-caps" data-stagger>
                <div className="cs-cap"><span className="n">01</span><h3>Engineering-First Culture</h3><p>Deep technical craft sits at the core of everything we ship, not as an afterthought.</p></div>
                <div className="cs-cap"><span className="n">02</span><h3>Real Ownership</h3><p>You own problems end to end, from architecture to deployment, and see your work in production.</p></div>
                <div className="cs-cap"><span className="n">03</span><h3>Remote-Friendly</h3><p>Sri Lanka-based, serving clients worldwide. We optimise for outcomes, not hours at a desk.</p></div>
                <div className="cs-cap"><span className="n">04</span><h3>Modern Stack</h3><p>TypeScript, React, Node, cloud-native infrastructure and applied AI, kept genuinely current.</p></div>
                <div className="cs-cap"><span className="n">05</span><h3>Growth &amp; Mentorship</h3><p>Work alongside engineers who have built systems serving millions, and grow fast doing it.</p></div>
                <div className="cs-cap"><span className="n">06</span><h3>Meaningful Work</h3><p>Real products for real businesses, measured by the results we deliver for them.</p></div>
              </div>
            </div>
          </section>

          <section>
            <div className="container">
              <div className="section-head reveal"><p className="eyebrow">Open positions</p><h2>Roles we're hiring for</h2></div>
              <div
                className="cs-abstract reveal"
                style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto", borderLeft: "1px solid var(--border)" } as React.CSSProperties}
              >
                <span className="k" style={{ color: "var(--text-muted)" } as React.CSSProperties}>No openings right now</span>
                <p style={{ marginTop: "14px" } as React.CSSProperties}>We don't have any positions available at the moment. Please check back later.</p>
              </div>
            </div>
          </section>

          <section style={{ paddingTop: "0" } as React.CSSProperties}>
            <div className="container">
              <div className="cta-band reveal">
                <p className="eyebrow center">Not looking for a role?</p>
                <h2>Let's build something great.</h2>
                <p>Free consultation with a 24-hour response time.</p>
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
