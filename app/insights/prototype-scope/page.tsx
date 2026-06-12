import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Scope a 14-Day Software Prototype | CodeREM Labs Insights",
  description: "A practical framework for choosing the right workflow, data and success criteria for a fast software prototype, and what to leave out.",
};

export default function Page() {
  return (
    <>
      <section className="hero article-hero" style={{ minHeight: "auto", padding: "150px 0 40px" } as React.CSSProperties}>
            <div className="orbs"><span className="orb a"></span></div>
            <div className="container">
              <p className="article-meta reveal"><Link href="/insights" style={{ color: "var(--accent)" } as React.CSSProperties}>Insights</Link> <span className="sep">/</span> <span className="cat">Product Discovery</span> <span className="sep">·</span> <span>5 min read</span></p>
              <h1 className="reveal" data-delay="60">How to Scope a <span className="h-word">14-Day</span> Software Prototype</h1>
              <p className="lead reveal" data-delay="120">A practical framework for choosing the right workflow, data and success criteria for a fast prototype, and the discipline to leave the rest out.</p>
            </div>
          </section>

          <section style={{ padding: "30px 0 90px" } as React.CSSProperties}>
            <div className="container">
              <div className="prose reveal">
                <p>We promise clients a working prototype in 14 days, at zero cost, so they can see exactly what they're getting before writing their first cheque. People assume the hard part is the building. It isn't, it's the <strong>scoping</strong>. A 14-day prototype lives or dies on what you choose to leave out.</p>
                <p>This is the framework we use to scope one: pick a single workflow, feed it real data, define success up front, and cut everything that doesn't serve the question you're trying to answer.</p>

                <h2>First, agree what a prototype is for</h2>
                <p>A prototype exists to <strong>retire risk and create belief</strong>, to prove that the core idea works and to let stakeholders feel it, not just read about it. It is explicitly <em>not</em> a v1. It is not production-hardened, not feature-complete, and not the place to litigate edge cases. If you forget this, the scope balloons and the 14 days evaporate.</p>

                <blockquote>If everything is in the prototype, nothing is proven. A prototype is a bet on one idea, made visible.</blockquote>

                <h2>1. Pick one workflow, the spine</h2>
                <p>Choose the single end-to-end path that carries the most value or the most risk, and build that one all the way through. One user, one journey, start to finish. A travel agent booking a ticket; an adjuster processing a claim; a manager seeing the one dashboard that matters. The temptation is to build a little of everything; resist it. <strong>Depth on one workflow beats breadth across ten.</strong></p>

                <h2>2. Use real, or realistic, data</h2>
                <p>Nothing exposes a flawed idea faster than real data, and nothing makes a prototype feel real faster either. Get a representative slice of the client's actual data where you can; where you can't, construct realistic data that includes the messy cases. A demo that only works on perfect inputs proves nothing about the real world.</p>

                <h2>3. Define success before you start</h2>
                <p>Write down, in advance, what would make this prototype a "yes." It should be concrete and observable:</p>
                <ul>
                  <li><strong>A task it must complete</strong>, e.g. "process this real claim end to end."</li>
                  <li><strong>A number it must hit</strong>, e.g. "booking in under 5 minutes," or "extraction accuracy a human agrees with."</li>
                  <li><strong>A belief it must create</strong>, e.g. "the client can see their workflow in it and wants to keep going."</li>
                </ul>
                <p>If you can't state the success criteria, you're not ready to build, you're still in discovery, and that's fine. Naming the criteria is half the work.</p>

                <h2>4. Cut ruthlessly</h2>
                <p>Everything that doesn't serve the chosen workflow and its success criteria is out of scope for now. Authentication beyond a stub, admin panels, settings, every secondary workflow, polish on screens no one will judge the idea by, all of it waits. Maintain an explicit "not now" list so cuts are decisions, not omissions, and nobody is surprised.</p>

                <div className="callout-box">
                  <span className="k">The 14-day cadence</span>
                  <p>Roughly: a short, intense discovery to lock the workflow, data and success criteria; then rapid build with the client seeing progress every few days, because feedback on day 4 is worth ten times feedback on day 14. Learn and change fast. The prototype should be in front of the people who'll judge it long before it's "done."</p>
                </div>

                <h2>What the prototype earns you</h2>
                <p>Done right, two weeks buys more than a demo. It buys a <strong>shared, concrete understanding</strong> of what's being built, a de-risked path to production, and the evidence a client needs to commit with confidence. Understanding a problem correctly is most of solving it, and nothing forces that understanding like having to make it real in 14 days.</p>

                <h2>Key takeaways</h2>
                <ol>
                  <li>Scope is the hard part, a prototype is defined by what you leave out.</li>
                  <li>Build one workflow end-to-end, not a little of everything.</li>
                  <li>Use real or realistic data, including the messy cases.</li>
                  <li>Write success criteria before you build; keep an explicit "not now" list; show the client every few days.</li>
                </ol>
              </div>

              <div className="prose" style={{ marginTop: "50px" } as React.CSSProperties}>
                <div className="cta-band reveal">
                  <p className="eyebrow center">Have an idea worth proving?</p>
                  <h2 style={{ margin: "0 0 18px" } as React.CSSProperties}>Get a working prototype in 14 days.</h2>
                  <div className="cta-actions">
                    <Link href="/get-started" className="btn btn-primary">Start Your Project <span className="btn-arrow">→</span></Link>
                    <Link href="/how-it-works" className="btn btn-ghost">How We Work</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </>
  );
}
