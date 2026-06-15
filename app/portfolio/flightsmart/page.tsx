import type { Metadata } from "next";
import Link from "next/link";
import UIShowcase from "@/components/UIShowcase";

// A curated handful of the most representative screens — operations, admin,
// finance and a detail view — shown as a coverflow carousel.
const FLIGHTSMART_SCREENS = [
  { file: "agent_dashboard.html", title: "Agent Dashboard" },
  { file: "admin_dashboard.html", title: "Admin Dashboard" },
  { file: "wallet_dashboard.html", title: "Wallet Dashboard" },
  { file: "payments_overview.html", title: "Payments Overview" },
  { file: "fund_request_detail.html", title: "Fund Request Detail" },
];

export const metadata: Metadata = {
  title: "FlightSmart: A unified booking & operations platform for travel agencies | CodeREM Labs",
  description: "Case study: FlightSmart consolidates air ticketing, DMS, insurance and visa workflows into one platform, with CRM, HRMS, digital wallets and automated IATA reconciliation. 65% faster bookings, 99.8% revenue accuracy.",
};

export default function Page() {
  return (
    <>
      {/* HERO */}
          <section className="hero" style={{ minHeight: "auto", padding: "150px 0 70px" } as React.CSSProperties}>
            <div className="orbs"><span className="orb a"></span><span className="orb b"></span></div>
            <div className="container">
              <p className="cs-breadcrumb reveal"><Link href="/portfolio">Portfolio</Link> <span>/</span> Case study</p>
              <h1 className="reveal" data-delay="60">Flight<span className="h-word">Smart</span></h1>
              <p className="cs-lead reveal" data-delay="120">A comprehensive travel-agency booking platform with integrated digital wallets and commission tracking, one system of record for an entire agency.</p>

              <div className="cs-metabar reveal" data-delay="180">
                <div className="m"><div className="k">Client</div><div className="v">FlightSmart Travel</div></div>
                <div className="m"><div className="k">Sector</div><div className="v">Travel &amp; Tourism</div></div>
                <div className="m"><div className="k">Engagement</div><div className="v">Product design &amp; build · 0→1</div></div>
                <div className="m"><div className="k">Platform</div><div className="v">Web · Enterprise SaaS</div></div>
              </div>
            </div>
          </section>

          {/* ABSTRACT */}
          <section style={{ padding: "50px 0 20px" } as React.CSSProperties}>
            <div className="container">
              <div className="cs-abstract reveal">
                <span className="k">Abstract</span>
                <p>FlightSmart is a unified operating platform built by CodeREM Labs for FlightSmart Travel. It collapses the fragmented stack a travel agency depends on, air-ticket reservation systems, Destination Management Systems, travel-insurance platforms and visa-application workflows, into a single system of record, then layers customer relationship management, human-resource management, digital wallets, commission tracking and automated financial reconciliation on top. In production it reduced average booking time by <strong style={{ color: "var(--accent)" } as React.CSSProperties}>65%</strong> and reached <strong style={{ color: "var(--accent)" } as React.CSSProperties}>99.8% revenue accuracy</strong>.</p>
              </div>
            </div>
          </section>

          {/* 01 THE CHALLENGE */}
          <section className="cs-section">
            <div className="container cs-grid">
              <div className="section-head reveal" style={{ marginBottom: "0" } as React.CSSProperties}>
                <p className="eyebrow">01 · The challenge</p>
                <h2>Too many products, sold through too many channels.</h2>
              </div>
              <div className="cs-body reveal" data-delay="100">
                <p>Travel agencies sell a wide and heterogeneous product mix, <strong>air tickets, hotel and accommodation bookings, visas, travel insurance and destination tour packages</strong>. Each of these is typically transacted through a different supplier system, by different agents, across different channels.</p>
                <p>That fragmentation compounds into real losses. When too many things are sold through too many channels, the agency loses <strong>traceability</strong>, and with it, revenue. The same gaps make it hard to follow up on inquiries or act in time, so sales slip away, customers are left dissatisfied, and the agency's reputation suffers.</p>
                <p>FlightSmart Travel was running on a legacy system that made this worse. Agents juggled disconnected tools for flight search, booking management and commission tracking, and the workflow demanded <strong>manual data entry across multiple systems</strong>, a constant source of errors and lost revenue.</p>
              </div>
            </div>
          </section>

          {/* 02 APPROACH */}
          <section className="cs-section">
            <div className="container cs-grid">
              <div className="section-head reveal" style={{ marginBottom: "0" } as React.CSSProperties}>
                <p className="eyebrow">02 · Approach</p>
                <h2>Understand the work before rebuilding it.</h2>
              </div>
              <div className="cs-body reveal" data-delay="100">
                <p>We began where every CodeREM engagement begins: with <strong>analysis, not assumptions</strong>. We conducted stakeholder interviews across agents, managers and back-office staff, and mapped the existing workflows end to end to locate exactly where time and money were leaking.</p>
                <p>Shadowing the real booking lifecycle let us quantify the baseline, an average booking took roughly <strong>12 minutes</strong> of an agent's time, and pinpoint the highest-leverage opportunities for automation. We agreed measurable success criteria up front: <strong>booking time</strong> and <strong>revenue accuracy</strong>, the two numbers that decide whether an agency thrives.</p>
              </div>
            </div>
          </section>

          {/* 03 THE PLATFORM */}
          <section className="cs-section">
            <div className="container">
              <div className="section-head reveal">
                <p className="eyebrow">03 · The platform</p>
                <h2>One platform. <span className="h-word">One record.</span></h2>
                <p>FlightSmart brings air-ticket reservation platforms, Destination Management Systems, travel-insurance reservation and visa applications onto a single surface, so an agent looks at one system and maintains a single record for every tour they operate.</p>
              </div>
              <div className="cs-caps" data-stagger>
                <div className="cs-cap">
                  <span className="n">01</span>
                  <h3>Unified reservations</h3>
                  <p>Air tickets, DMS tour packages, travel insurance and visa applications in one console, replacing six supplier portals with a single source of truth per tour.</p>
                </div>
                <div className="cs-cap">
                  <span className="n">02</span>
                  <h3>Digital wallets &amp; commissions</h3>
                  <p>Every sale is attributed to an agent and channel, with commissions computed automatically and balances held in per-agent digital wallets, making revenue traceable from inquiry to settlement.</p>
                </div>
                <div className="cs-cap">
                  <span className="n">03</span>
                  <h3>CRM &amp; loyalty</h3>
                  <p>A built-in CRM captures every inquiry and interaction, so follow-ups happen on time, rates and products stay consistent, and customer loyalty becomes something you can measure and grow.</p>
                </div>
                <div className="cs-cap">
                  <span className="n">04</span>
                  <h3>Human Resource Management</h3>
                  <p>A full HRMS is embedded in the platform: employee profiles, availability, automated results-driven evaluations and payroll, the back office runs inside the same system the agents do.</p>
                </div>
                <div className="cs-cap">
                  <span className="n">05</span>
                  <h3>Automated reconciliation</h3>
                  <p>FlightSmart performs automated <strong>bank and IATA reconciliation</strong>, closing the books without a dedicated accounting team and eliminating the manual steps where revenue used to leak.</p>
                </div>
                <div className="cs-cap">
                  <span className="n">06</span>
                  <h3>Management visibility</h3>
                  <p>Managers get full, real-time visibility into how the business is running, across agents, products and channels, on a single ground where the whole agency operates.</p>
                </div>
              </div>
            </div>
          </section>

          {/* UI SCREENS */}
          <section className="cs-section">
            <div className="container">
              <div className="section-head reveal" style={{ marginBottom: "40px" } as React.CSSProperties}>
                <p className="eyebrow">Product view</p>
                <h2>Inside the <span className="h-word">product.</span></h2>
                <p>A few of the real screens we shipped. Browse with the arrows or dots — click the front screen to open it full screen.</p>
              </div>
              <UIShowcase base="/portfolio/flightsmart/ui" screens={FLIGHTSMART_SCREENS} layout="carousel" />
            </div>
          </section>

          {/* CALLOUT */}
          <section style={{ padding: "40px 0" } as React.CSSProperties}>
            <div className="container">
              <p className="cs-callout reveal">A single platform that gives managers full visibility, and gives agents <em>one ground to play their game.</em></p>
            </div>
          </section>

          {/* 04 RESULTS */}
          <section className="cs-section">
            <div className="container">
              <div className="section-head reveal">
                <p className="eyebrow">04 · Results &amp; impact</p>
                <h2>Measurable outcomes in production.</h2>
              </div>
              <div className="cs-metrics" data-stagger>
                <div className="cs-metric">
                  <div className="big">−65%</div>
                  <h3>Booking time</h3>
                  <p>Average booking time fell from ~12 minutes to ~4 minutes per booking, freeing agents to handle more inquiries and close more sales.</p>
                </div>
                <div className="cs-metric">
                  <div className="big">99.8%</div>
                  <h3>Revenue accuracy</h3>
                  <p>Automated commission calculation eliminated manual errors, making revenue traceable and trustworthy across every product and channel.</p>
                </div>
                <div className="cs-metric">
                  <div className="big">~0</div>
                  <h3>Dedicated accounting effort</h3>
                  <p>Automated bank and IATA reconciliation removed almost all need for a standalone accounting team, the platform closes the loop itself.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 05 TECH */}
          <section className="cs-section">
            <div className="container cs-grid">
              <div className="section-head reveal" style={{ marginBottom: "0" } as React.CSSProperties}>
                <p className="eyebrow">05 · Engineering</p>
                <h2>Built to scale, integrate and reconcile.</h2>
              </div>
              <div className="cs-body reveal" data-delay="100">
                <p>FlightSmart is a modern, type-safe web platform engineered for reliability at the edges where money moves. A unified data model sits behind integrations to external air-ticketing, DMS, insurance and visa systems, with an event-driven reconciliation engine keeping financial records in lock-step.</p>
                <div className="chips">
                  <span className="chip">Next.js</span><span className="chip">TypeScript</span><span className="chip">Node.js</span><span className="chip">PostgreSQL</span>
                  <span className="chip">Supplier / GDS integrations</span><span className="chip">Digital wallets</span><span className="chip">IATA reconciliation</span><span className="chip">Role-based access</span>
                </div>
              </div>
            </div>
          </section>

          {/* 06 OUTCOME */}
          <section className="cs-section">
            <div className="container cs-grid">
              <div className="section-head reveal" style={{ marginBottom: "0" } as React.CSSProperties}>
                <p className="eyebrow">06 · Outcome</p>
                <h2>A genuine game-changer for the agency.</h2>
              </div>
              <div className="cs-body reveal" data-delay="100">
                <p>FlightSmart has been a turning point for the agencies it serves. By consolidating reservations, CRM, HR and finance into one system, and automating the reconciliation work that once required dedicated staff, it removed entire categories of manual effort while making the business legible to the people running it.</p>
                <p>The result is an agency that moves faster, loses less, and finally sees itself clearly: <strong>agents work in one place, managers see everything, and revenue is accounted for to the last cent.</strong></p>
              </div>
            </div>
          </section>

          {/* CITATION */}
          <section style={{ padding: "10px 0 40px" } as React.CSSProperties}>
            <div className="container">
              <div className="cs-cite reveal">
                <span className="k">Cite this case study</span>
                <b>CodeREM Labs (2026).</b> FlightSmart: A unified booking and operations platform for travel agencies. <i>CodeREM Labs Product Case Studies.</i> Available at coderemlabs.com/portfolio.
              </div>
            </div>
          </section>

          {/* CTA */}
          <section style={{ paddingTop: "20px" } as React.CSSProperties}>
            <div className="container">
              <div className="cta-band reveal">
                <p className="eyebrow center">Have a platform like this in mind?</p>
                <h2>Well begun is half done.</h2>
                <p>Free consultation · No commitment required · Response within 24h · Global availability</p>
                <div className="cta-actions">
                  <Link href="/get-started" className="btn btn-primary">Start Your Project <span className="btn-arrow">→</span></Link>
                  <Link href="/portfolio" className="btn btn-ghost">More Work</Link>
                </div>
              </div>
            </div>
          </section>
    </>
  );
}
