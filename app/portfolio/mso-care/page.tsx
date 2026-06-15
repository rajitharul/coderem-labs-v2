import type { Metadata } from "next";
import Link from "next/link";
import UIShowcase from "@/components/UIShowcase";

const CAREFLOW_SCREENS = [
  { file: "dashboard.html", title: "Dashboard" },
  { file: "patient.html", title: "Patient Chart" },
  { file: "risk.html", title: "Risk & Care" },
  { file: "patient-risk.html", title: "Risk Detail" },
  { file: "claim.html", title: "Claim Detail" },
  { file: "appointments.html", title: "Appointments" },
];

export const metadata: Metadata = {
  title: "CareFlow: One platform for the whole MSO | CodeREM Labs",
  description: "Case study: CareFlow unifies credentialing, scheduling, prior authorization, coding, billing, denial management and care coordination into one HIPAA-compliant platform. +40% care gaps closed, 85% less reporting time, run on 20% of the original staff.",
};

export default function Page() {
  return (
    <>
      {/* HERO */}
          <section className="hero" style={{ minHeight: "auto", padding: "150px 0 70px" } as React.CSSProperties}>
            <div className="orbs"><span className="orb a"></span><span className="orb b"></span></div>
            <div className="container">
              <p className="cs-breadcrumb reveal"><Link href="/portfolio">Portfolio</Link> <span>/</span> Case study</p>
              <h1 className="reveal" data-delay="60">Care<span className="h-word">Flow</span></h1>
              <p className="cs-lead reveal" data-delay="120">One platform to orchestrate care and revenue across an entire Management Services Organization. It automates work that used to take a small army.</p>

              <div className="cs-metabar reveal" data-delay="180">
                <div className="m"><div className="k">Client</div><div className="v">US Healthcare MSO</div></div>
                <div className="m"><div className="k">Sector</div><div className="v">Healthcare · Care Coordination</div></div>
                <div className="m"><div className="k">Engagement</div><div className="v">Prototype → Production platform</div></div>
                <div className="m"><div className="k">Compliance</div><div className="v">HIPAA · HL7 FHIR</div></div>
              </div>
            </div>
          </section>

          {/* HERO VISUAL */}
          <section style={{ padding: "0 0 30px" } as React.CSSProperties}>
            <div className="container">
              <div className="mac-window reveal" style={{ maxWidth: "980px", margin: "0 auto" } as React.CSSProperties}>
                <div className="mac-bar"><span className="mac-dots"><i></i><i></i><i></i></span><span className="mac-title">care-orchestrator · network overview</span></div>
                <div className="mac-body sc-dash" style={{ height: "clamp(260px,32vw,340px)" } as React.CSSProperties}>
                  <div className="dash-side"><span></span><span className="on"></span><span></span><span></span></div>
                  <div className="dash-main">
                    <div className="dash-kpis">
                      <div className="kpi"><b>50+</b><i>provider sites</i></div>
                      <div className="kpi"><b>+40%</b><i>care gaps closed</i></div>
                      <div className="kpi"><b>24h</b><i>monthly reporting</i></div>
                    </div>
                    <div className="dash-chart">
                      <span style={{ "--d": "0", "--peak": "54%" } as React.CSSProperties}></span><span style={{ "--d": "1", "--peak": "76%" } as React.CSSProperties}></span><span style={{ "--d": "2", "--peak": "50%" } as React.CSSProperties}></span><span style={{ "--d": "3", "--peak": "88%" } as React.CSSProperties}></span><span style={{ "--d": "4", "--peak": "66%" } as React.CSSProperties}></span><span style={{ "--d": "5", "--peak": "94%" } as React.CSSProperties}></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ABSTRACT */}
          <section style={{ padding: "50px 0 20px" } as React.CSSProperties}>
            <div className="container">
              <div className="cs-abstract reveal">
                <span className="k">Abstract</span>
                <p>CareFlow is a platform built by CodeREM Labs for a US healthcare Management Services Organization. It consolidates the dozens of processes an MSO runs, credentialing, payer-contract and utilization management, scheduling, prior authorization, coding and claim adjudication, billing, denial management, risk stratification and care-plan follow-up, into a single product, automating most of it while surfacing the statistics leaders need to decide. Begun as a rapid prototype that met <strong style={{ color: "var(--accent)" } as React.CSSProperties}>~90%</strong> of the application, it now orchestrates care across multiple US providers while running on <strong style={{ color: "var(--accent)" } as React.CSSProperties}>20%</strong> of the staff originally required.</p>
              </div>
            </div>
          </section>

          {/* 01 THE CHALLENGE */}
          <section className="cs-section">
            <div className="container cs-grid">
              <div className="section-head reveal" style={{ marginBottom: "0" } as React.CSSProperties}>
                <p className="eyebrow">01 · The challenge</p>
                <h2>The MSO does the hardest work in healthcare.</h2>
              </div>
              <div className="cs-body reveal" data-delay="100">
                <p>Healthcare is a vast industry with a simple contract at its core: <strong>consumers are entitled to care, and providers are entitled to be paid</strong> for the services they render. Management Services Organizations exist to make sure both halves of that promise are kept, that quality care reaches patients while providers run a well-managed revenue cycle and administration.</p>
                <p>That is far harder than it sounds. It spans credentialing and payer-contract management, utilization management, appointments and scheduling, prior authorization, coding and claim adjudication before billing, billing itself, denial management, posting, risk-based categorization of patients and ongoing follow-up on care plans. Because each function is a specialty, MSOs typically carry <strong>large, deeply specialized teams</strong> to run them.</p>
                <p>Our client, a growing MSO coordinating care across a network of <strong>50+ provider locations</strong>, was straining under exactly this load. Patient data was siloed, care gaps were missed, and compliance reporting consumed <strong>hundreds of hours every month</strong>.</p>
              </div>
            </div>
          </section>

          {/* 02 APPROACH */}
          <section className="cs-section">
            <div className="container cs-grid">
              <div className="section-head reveal" style={{ marginBottom: "0" } as React.CSSProperties}>
                <p className="eyebrow">02 · Approach</p>
                <h2>On-the-fly research, fast prototyping.</h2>
                <p style={{ fontSize: "1.05rem" } as React.CSSProperties}>Our client was a group of doctors who couldn't spare the time to explain every process, so we researched as we built, and proved the platform with a working prototype.</p>
              </div>
              <ol className="cs-steps reveal" data-delay="100">
                <li><span>Partnered with <strong>clinical leadership</strong> to understand care-coordination workflows and regulatory requirements.</span></li>
                <li><span>Architected a <strong>HIPAA-compliant platform</strong> with end-to-end encryption and comprehensive audit logging.</span></li>
                <li><span>Built integrations with major EHR systems (<strong>Epic, Cerner</strong>) using <strong>HL7 FHIR</strong> standards.</span></li>
                <li><span>Developed an intelligent <strong>care-gap identification engine</strong> using rule-based logic and ML models.</span></li>
                <li><span>Created automated reporting pipelines for <strong>HEDIS, Stars</strong> and other quality measures.</span></li>
              </ol>
            </div>
          </section>

          {/* 03 THE PLATFORM */}
          <section className="cs-section">
            <div className="container">
              <div className="section-head reveal">
                <p className="eyebrow">03 · The platform</p>
                <h2>Every MSO function, <span className="h-word">under one roof.</span></h2>
                <p>The goal was to bring all of these processes under a single product, automate most of them, and expose the statistics that support real decision-making.</p>
              </div>
              <div className="cs-caps" data-stagger>
                <div className="cs-cap">
                  <span className="n">01</span>
                  <h3>Credentialing &amp; contracts</h3>
                  <p>Provider credentialing, payer-contract management and utilization management in one place, the administrative backbone of the revenue cycle.</p>
                </div>
                <div className="cs-cap">
                  <span className="n">02</span>
                  <h3>Scheduling &amp; prior auth</h3>
                  <p>Appointments, scheduling and prior authorization handled inside the platform, so care starts on time and approvals don't stall it.</p>
                </div>
                <div className="cs-cap">
                  <span className="n">03</span>
                  <h3>Coding, billing &amp; claims</h3>
                  <p>Coding and claim adjudication before billing, billing, denial management and posting, the full claim journey, automated where it counts.</p>
                </div>
                <div className="cs-cap">
                  <span className="n">04</span>
                  <h3>Risk &amp; care plans</h3>
                  <p>Risk-based categorization of patients and structured follow-up on care plans, so the right patients are reached at the right time.</p>
                </div>
                <div className="cs-cap">
                  <span className="n">05</span>
                  <h3>Care-gap engine</h3>
                  <p>An intelligent engine combining rule-based logic and ML proactively identifies care gaps, turning missed opportunities into closed ones.</p>
                </div>
                <div className="cs-cap">
                  <span className="n">06</span>
                  <h3>Statistics &amp; reporting</h3>
                  <p>Automated pipelines for HEDIS, Stars and other quality measures, with live statistics that turn months of manual reporting into hours.</p>
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
                <p>The real screens we shipped — click any to open it full screen.</p>
              </div>
              <UIShowcase base="/portfolio/mso-care/ui" screens={CAREFLOW_SCREENS} />
            </div>
          </section>

          {/* CALLOUT */}
          <section style={{ padding: "40px 0" } as React.CSSProperties}>
            <div className="container">
              <p className="cs-callout reveal">From a working prototype that met <em>~90%</em> of the brief, to a platform orchestrating care across the US on <em>a fifth of the staff.</em></p>
            </div>
          </section>

          {/* 04 RESULTS */}
          <section className="cs-section">
            <div className="container">
              <div className="section-head reveal">
                <p className="eyebrow">04 · Results &amp; impact</p>
                <h2>Better care, a fraction of the effort.</h2>
              </div>
              <div className="cs-metrics" data-stagger>
                <div className="cs-metric">
                  <div className="big">+40%</div>
                  <h3>Care gaps closed</h3>
                  <p>Proactive identification raised the care-gap closure rate, catching what siloed data used to let slip through.</p>
                </div>
                <div className="cs-metric">
                  <div className="big">−85%</div>
                  <h3>Reporting time</h3>
                  <p>Monthly compliance reporting dropped from 160 hours to 24 · automated pipelines doing what teams once did by hand.</p>
                </div>
                <div className="cs-metric">
                  <div className="big">20%</div>
                  <h3>Of the original staff</h3>
                  <p>The MSO now orchestrates care across multiple providers using only a fifth of the specialized staff it originally required.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 05 ENGINEERING */}
          <section className="cs-section">
            <div className="container cs-grid">
              <div className="section-head reveal" style={{ marginBottom: "0" } as React.CSSProperties}>
                <p className="eyebrow">05 · Engineering</p>
                <h2>Compliant by design, integrated by standard.</h2>
              </div>
              <div className="cs-body reveal" data-delay="100">
                <p>CareFlow is a HIPAA-compliant platform built with end-to-end encryption and comprehensive audit logging from day one. It speaks the healthcare ecosystem's native language, integrating with Epic and Cerner over <strong>HL7 FHIR</strong>, and runs an event-driven backbone that keeps care, claims and reporting in sync across every site.</p>
                <div className="chips">
                  <span className="chip">React</span><span className="chip">Python</span><span className="chip">FastAPI</span><span className="chip">PostgreSQL</span>
                  <span className="chip">Apache Kafka</span><span className="chip">HL7 FHIR</span><span className="chip">AWS (HIPAA)</span><span className="chip">Terraform</span>
                </div>
              </div>
            </div>
          </section>

          {/* 06 OUTCOME */}
          <section className="cs-section">
            <div className="container cs-grid">
              <div className="section-head reveal" style={{ marginBottom: "0" } as React.CSSProperties}>
                <p className="eyebrow">06 · Outcome</p>
                <h2>A prototype that became infrastructure.</h2>
              </div>
              <div className="cs-body reveal" data-delay="100">
                <p>Despite a client who could spare little time to explain a famously complex domain, on-the-fly research and fast prototyping let us deliver a working system that met roughly 90% of the application, exactly the promise we make to every client.</p>
                <p>From that starting point, CareFlow grew into production infrastructure: <strong>it now orchestrates care across multiple US healthcare providers while utilizing only 20% of the staff originally required</strong>, proof that the hardest work in healthcare can be made dramatically lighter.</p>
              </div>
            </div>
          </section>

          {/* CITATION */}
          <section style={{ padding: "10px 0 40px" } as React.CSSProperties}>
            <div className="container">
              <div className="cs-cite reveal">
                <span className="k">Cite this case study</span>
                <b>CodeREM Labs (2026).</b> CareFlow: Unifying care coordination and revenue-cycle operations for a US healthcare MSO. <i>CodeREM Labs Product Case Studies.</i> Available at coderemlabs.com/portfolio.
              </div>
            </div>
          </section>

          {/* CTA */}
          <section style={{ paddingTop: "20px" } as React.CSSProperties}>
            <div className="container">
              <div className="cta-band reveal">
                <p className="eyebrow center">Coordinating something this complex?</p>
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
