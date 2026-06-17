import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio: CodeREM Labs",
  description: "Value beyond what you think you need. Courtside, FlightSmart, CareFlow, ClaimBrain, LexiMatch AI and Bad Streams.",
};

export default function Page() {
  return (
    <>
      <section className="hero" style={{ paddingBottom: "50px" } as React.CSSProperties}>
            <div className="orbs"><span className="orb a"></span><span className="orb b"></span></div>
            <div className="container">
              <p className="eyebrow reveal">Our portfolio</p>
              <h1 className="reveal" data-delay="80">Value beyond what you <span className="h-word">think you need</span></h1>
              <p className="lede reveal" data-delay="160">Outcomes that act as evidence for true value delivery, beyond what the client has expressed as their need in their industry.</p>
              <div className="chips center reveal" data-delay="240" style={{ justifyContent: "center" } as React.CSSProperties}>
                <span className="chip">All Projects</span><span className="chip">Products</span><span className="chip">Platforms</span><span className="chip">AI</span><span className="chip">Integrations</span>
              </div>
            </div>
          </section>

          <section style={{ paddingTop: "60px" } as React.CSSProperties}>
            <div className="container">
              <div className="work" data-stagger>

                <Link href="/portfolio/courtside" className="work-item">
                  <div className="work-visual"><span className="tag">Product · Sports Tech</span><span className="big">Courtside</span></div>
                  <div className="work-body">
                    <p>A multi-sided sports-venue booking platform where players discover and reserve courts across six sports, venue owners manage availability and bookings from a dedicated dashboard, and a super-admin portal onboards venues and assigns owners. Real-time slot booking with pay-to-confirm checkout through a live payment gateway.</p>
                    <div className="chips"><span className="chip">Next.js 16</span><span className="chip">React 19</span><span className="chip">Supabase</span><span className="chip">Tailwind v4</span><span className="chip">+3</span></div>
                    <span className="card-link">Read the case study <span className="btn-arrow">→</span></span>
                  </div>
                </Link>

                <Link href="/portfolio/flightsmart" className="work-item">
                  <div className="work-visual"><span className="tag">Product</span><span className="big">FlightSmart Travel</span></div>
                  <div className="work-body">
                    <p>A travel agency booking platform integrating digital wallets and commission tracking. The system consolidates multiple reservation channels, enabling agents to manage air tickets, hotel bookings, visas, travel insurance, and tour packages through one interface. Includes CRM and HR management with automated bank reconciliation.</p>
                    <div className="chips"><span className="chip">Next.js</span><span className="chip">TypeScript</span><span className="chip">Node.js</span><span className="chip">PostgreSQL</span><span className="chip">+4</span></div>
                    <span className="card-link">Read the case study <span className="btn-arrow">→</span></span>
                  </div>
                </Link>

                <Link href="/portfolio/mso-care" className="work-item">
                  <div className="work-visual"><span className="tag">Platform · Healthcare</span><span className="big">CareFlow</span></div>
                  <div className="work-body">
                    <p>A management services organization platform automating healthcare provider operations, credentialing, payer contracts, scheduling, prior authorization, coding, billing, and denial management. Reduced staffing requirements by 80% while improving care coordination.</p>
                    <div className="chips"><span className="chip">React</span><span className="chip">Python</span><span className="chip">FastAPI</span><span className="chip">PostgreSQL</span><span className="chip">+4</span></div>
                    <span className="card-link">Read the case study <span className="btn-arrow">→</span></span>
                  </div>
                </Link>

                <Link href="/portfolio/claimbrain" className="work-item">
                  <div className="work-visual"><span className="tag">AI · Healthcare</span><span className="big">ClaimBrain</span></div>
                  <div className="work-body">
                    <p>An AI-powered medical claims processing system using OCR and LLMs to extract data from claim documents and physician notes. Achieves close to 97% accuracy in claims data extraction while automatically flagging edge cases for human review.</p>
                    <div className="chips"><span className="chip">Python</span><span className="chip">FastAPI</span><span className="chip">OpenAI GPT-4</span><span className="chip">LangChain</span><span className="chip">+4</span></div>
                    <span className="card-link">Read the case study <span className="btn-arrow">→</span></span>
                  </div>
                </Link>

                <Link href="/portfolio/leximatch" className="work-item">
                  <div className="work-visual"><span className="tag">AI · Legal Tech</span><span className="big">LexiMatch AI</span></div>
                  <div className="work-body">
                    <p>An explainable AI framework for legal precedent discovery that matches legal reasoning rather than keywords. The system structures judgments into facts, issues, decisions, and reasoning for nuanced comparisons.</p>
                    <div className="chips"><span className="chip">Python</span><span className="chip">FastAPI</span><span className="chip">LLM (GPT-4)</span><span className="chip">BM25/Lucene</span><span className="chip">+4</span></div>
                    <span className="card-link">Read the case study <span className="btn-arrow">→</span></span>
                  </div>
                </Link>

                <Link href="/portfolio/badstreams" className="work-item">
                  <div className="work-visual"><span className="tag">Product</span><span className="big">Bad Streams</span></div>
                  <div className="work-body">
                    <p>A SaaS platform connecting brands with live streamers on Kick and Twitch. Delivers tamper-proof, real-time ad overlays with analytics and proof-of-play verification, enforcing exact position, scale, visibility, and layer order of ad assets every single second.</p>
                    <div className="chips"><span className="chip">Python</span><span className="chip">Django 5.2</span><span className="chip">DRF</span><span className="chip">HTMX</span><span className="chip">+4</span></div>
                    <span className="card-link">Read the case study <span className="btn-arrow">→</span></span>
                  </div>
                </Link>

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
                  <Link href="/services" className="btn btn-ghost">Our Services</Link>
                </div>
              </div>
            </div>
          </section>
    </>
  );
}
