import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights: CodeREM Labs",
  description: "AI and software guides built from real delivery work, automation, enterprise platforms, RAG systems and rapid prototyping.",
};

export default function Page() {
  return (
    <>
      <section className="hero" style={{ paddingBottom: "50px" } as React.CSSProperties}>
            <div className="orbs"><span className="orb c"></span><span className="orb b"></span></div>
            <div className="container">
              <p className="eyebrow reveal">Insights</p>
              <h1 className="reveal" data-delay="80">Guides built from <span className="h-word">real delivery work</span></h1>
              <p className="lede reveal" data-delay="160">Practical notes on automation, enterprise platforms, RAG systems, and rapid prototyping for teams evaluating what to build next.</p>
            </div>
          </section>

          <section style={{ paddingTop: "10px" } as React.CSSProperties}>
            <div className="container">
              <div className="grid cols-2" data-stagger>
                <article className="article">
                  <div className="meta"><span className="cat">AI Automation</span><span>·</span><span>5 min read</span></div>
                  <h3>AI Automation for Medical Claims Processing</h3>
                  <p>How OCR, LLM guardrails, code validation, and human review reduce manual medical claims processing without removing accountability.</p>
                  <Link href="/insights/medical-claims-ai" className="card-link">Read article <span className="btn-arrow">→</span></Link>
                </article>
                <article className="article">
                  <div className="meta"><span className="cat">RAG Systems</span><span>·</span><span>5 min read</span></div>
                  <h3>RAG Systems for Enterprise Knowledge Search</h3>
                  <p>A practical guide to building retrieval-augmented generation systems that make enterprise knowledge searchable, explainable, and governed.</p>
                  <Link href="/insights/enterprise-rag" className="card-link">Read article <span className="btn-arrow">→</span></Link>
                </article>
                <article className="article">
                  <div className="meta"><span className="cat">Enterprise Software</span><span>·</span><span>6 min read</span></div>
                  <h3>Custom ERP vs Off-the-Shelf Software</h3>
                  <p>How to decide whether a growing business should use packaged software, customize an existing platform, or build a custom ERP.</p>
                  <Link href="/insights/custom-erp" className="card-link">Read article <span className="btn-arrow">→</span></Link>
                </article>
                <article className="article">
                  <div className="meta"><span className="cat">Product Discovery</span><span>·</span><span>5 min read</span></div>
                  <h3>How to Scope a 14-Day Software Prototype</h3>
                  <p>A practical framework for choosing the right workflow, data, and success criteria for a fast software prototype.</p>
                  <Link href="/insights/prototype-scope" className="card-link">Read article <span className="btn-arrow">→</span></Link>
                </article>
              </div>
            </div>
          </section>

          <section>
            <div className="container">
              <div className="cta-band reveal">
                <p className="eyebrow center">Stay updated</p>
                <h2>Build the right thing next.</h2>
                <p>Tell us where you're struggling, we'll help you figure out what to build, and how.</p>
                <div className="cta-actions">
                  <Link href="/get-started" className="btn btn-primary">Talk to Us <span className="btn-arrow">→</span></Link>
                  <Link href="/portfolio" className="btn btn-ghost">View Our Work</Link>
                </div>
              </div>
            </div>
          </section>
    </>
  );
}
