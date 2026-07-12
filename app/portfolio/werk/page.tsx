import type { Metadata } from "next";
import Link from "next/link";

const LIVE_URL = "https://remwerk.coderemlabs.com";

export const metadata: Metadata = {
  title: "remWERK: A secure, multi-tenant business management & audit platform | CodeREM Labs",
  description: "Case study: remWERK lets business owners register and run their business with bank-grade security, exact decimal financial tracking, and an append-only, tamper-proof audit trail — backed by a super-admin control plane and architected to scale horizontally.",
};

export default function Page() {
  return (
    <>
      {/* HERO */}
          <section className="hero" style={{ minHeight: "auto", padding: "150px 0 70px" } as React.CSSProperties}>
            <div className="orbs"><span className="orb a"></span><span className="orb b"></span></div>
            <div className="container">
              <p className="cs-breadcrumb reveal"><Link href="/portfolio">Portfolio</Link> <span>/</span> Case study</p>
              <h1 className="reveal" data-delay="60">rem<span className="h-word">WERK</span></h1>
              <p className="cs-lead reveal" data-delay="120">A secure, multi-tenant platform where business owners manage their operations, finances, and records — backed by a tamper-proof activity log and full platform oversight, engineered to run lean today and scale horizontally on demand.</p>

              <div className="cta-actions reveal" data-delay="150" style={{ marginTop: "28px" } as React.CSSProperties}>
                <a href={LIVE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit live site <span className="btn-arrow">→</span></a>
              </div>

              <div className="cs-metabar reveal" data-delay="180">
                <div className="m"><div className="k">Engagement</div><div className="v">Product design &amp; build · 0→1</div></div>
                <div className="m"><div className="k">Sector</div><div className="v">Business Management &amp; Fintech</div></div>
                <div className="m"><div className="k">Platform</div><div className="v">Web · Multi-tenant SaaS</div></div>
                <div className="m"><div className="k">Status</div><div className="v">Live in production</div></div>
              </div>
            </div>
          </section>

          {/* ABSTRACT */}
          <section style={{ padding: "50px 0 20px" } as React.CSSProperties}>
            <div className="container">
              <div className="cs-abstract reveal">
                <span className="k">Abstract</span>
                <p>remWERK is a secure, multi-tenant business management platform that gives business owners a single place to register their business, maintain their business and personal records, track finances, and manage day-to-day operations — while keeping a complete, tamper-proof history of every action taken. Every business operates in its own isolated <strong>tenant</strong>, and a dedicated <strong>super-admin control plane</strong> sits above the platform to audit all activity, block or unblock users and businesses, securely &quot;view as&quot; any user for support, and respond to in-app support messages — all without ever touching a user&apos;s password.</p>
              </div>
            </div>
          </section>

          {/* 01 THE CHALLENGE */}
          <section className="cs-section">
            <div className="container cs-grid">
              <div className="section-head reveal" style={{ marginBottom: "0" } as React.CSSProperties}>
                <p className="eyebrow">01 · The challenge</p>
                <h2>Real money, real trust, real isolation.</h2>
              </div>
              <div className="cs-body reveal" data-delay="100">
                <p>Running a business platform that holds finances is a trust problem before it is a feature problem. Many businesses share one platform, but no business can ever see another&apos;s data — isolation has to be airtight. The money has to reconcile exactly: debts, client credit and opening balances can&apos;t drift because of floating-point rounding.</p>
                <p>And when something goes wrong — a dispute, a mistake, or a support request — there has to be a complete, trustworthy record of what happened that <strong>not even the application itself can silently rewrite.</strong> All of this has to run cheaply on day one, yet be ready to scale the moment demand arrives.</p>
              </div>
            </div>
          </section>

          {/* 02 THE PLATFORM */}
          <section className="cs-section">
            <div className="container">
              <div className="section-head reveal">
                <p className="eyebrow">02 · The platform</p>
                <h2>Built for owners, <span className="h-word">overseen by admins.</span></h2>
                <p>Each business gets an isolated workspace, while a platform-wide control plane keeps the whole system trustworthy and supportable.</p>
              </div>
              <div className="cs-caps" data-stagger>
                <div className="cs-cap">
                  <span className="n">01</span>
                  <h3>Multi-tenant onboarding</h3>
                  <p>Self-service registration where each owner gets a fully isolated workspace to register and run their business. One platform, many businesses, zero cross-tenant leakage.</p>
                </div>
                <div className="cs-cap">
                  <span className="n">02</span>
                  <h3>Tamper-proof activity log</h3>
                  <p>An append-only, partitioned audit trail captures every meaningful action. The log can&apos;t be silently altered — even by the application — so the history of what happened always holds up.</p>
                </div>
                <div className="cs-cap">
                  <span className="n">03</span>
                  <h3>Super-admin oversight</h3>
                  <p>A control plane for platform-wide auditing, blocking and unblocking users and businesses, and a secure &quot;view as user&quot; support tool — all without ever touching a user&apos;s password.</p>
                </div>
                <div className="cs-cap">
                  <span className="n">04</span>
                  <h3>Exact financial tracking</h3>
                  <p>Debts, client credit, opening balances and credit resolution computed with exact decimal arithmetic (accurate to three decimal places) rather than error-prone floating-point math, so the numbers always reconcile.</p>
                </div>
                <div className="cs-cap">
                  <span className="n">05</span>
                  <h3>Built-in support messaging</h3>
                  <p>Two-way support messaging between users and platform admins, so requests are handled inside the platform with full context — no separate channel required.</p>
                </div>
                <div className="cs-cap">
                  <span className="n">06</span>
                  <h3>Security by default</h3>
                  <p>argon2id password hashing, Redis-backed sessions, login rate-limiting, and hardened HTTP security headers — HSTS, anti-clickjacking, and MIME-sniffing protection — on by default, everywhere.</p>
                </div>
              </div>
            </div>
          </section>

          {/* LIVE PREVIEW */}
          <section className="cs-section">
            <div className="container">
              <div className="section-head reveal" style={{ marginBottom: "40px" } as React.CSSProperties}>
                <p className="eyebrow">Product view</p>
                <h2>The <span className="h-word">live product.</span></h2>
                <p>remWERK is deployed and running in production. Explore the real app below, or open it in a new tab.</p>
              </div>
              <div className="mac-window reveal" style={{ maxWidth: "1040px", margin: "0 auto" } as React.CSSProperties}>
                <div className="mac-bar">
                  <span className="mac-dots"><i></i><i></i><i></i></span>
                  <span className="mac-title">remwerk.coderemlabs.com</span>
                </div>
                <div style={{ height: "clamp(440px, 62vh, 700px)", overflow: "hidden" } as React.CSSProperties}>
                  <iframe
                    src={LIVE_URL}
                    title="remWERK — live site"
                    loading="lazy"
                    style={{ width: "100%", height: "100%", border: 0, display: "block" } as React.CSSProperties}
                  />
                </div>
              </div>
              <div className="cta-actions reveal" style={{ marginTop: "32px", justifyContent: "center" } as React.CSSProperties}>
                <a href={LIVE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Open in a new tab <span className="btn-arrow">→</span></a>
              </div>
            </div>
          </section>

          {/* 03 ENGINEERING */}
          <section className="cs-section">
            <div className="container cs-grid">
              <div className="section-head reveal" style={{ marginBottom: "0" } as React.CSSProperties}>
                <p className="eyebrow">03 · Engineering</p>
                <h2>Lean today, horizontal tomorrow.</h2>
              </div>
              <div className="cs-body reveal" data-delay="100">
                <p>remWERK is a <strong>Next.js 15</strong> + TypeScript app with a deliberately <strong>stateless, horizontally scalable</strong> app tier — all session, rate-limit and cache state lives in <strong>Redis</strong>, so any instance can serve any request. The audit trail is an append-only, partitioned table protected by database triggers and least-privilege role grants, so the activity log can&apos;t be silently altered, even by the app.</p>
                <p>Records use <strong>time-ordered UUID v7</strong> identifiers for index-friendly, shard-ready data, while <strong>pooled database access</strong> (PgBouncer / serverless pooling) keeps the system within connection limits under load. Least-privilege database roles separate runtime access from migrations, and exact money math runs on <strong>decimal.js</strong>. It&apos;s built to run cheaply on a single machine today, yet scales horizontally by adding infrastructure rather than rewriting code.</p>
                <div className="chips">
                  <span className="chip">Next.js 15</span><span className="chip">TypeScript</span><span className="chip">Tailwind CSS</span><span className="chip">PostgreSQL (Prisma)</span>
                  <span className="chip">Redis</span><span className="chip">argon2id</span><span className="chip">decimal.js</span><span className="chip">Docker</span><span className="chip">Vercel · Neon · Upstash</span>
                </div>
              </div>
            </div>
          </section>

          {/* 04 OUTCOME */}
          <section className="cs-section">
            <div className="container cs-grid">
              <div className="section-head reveal" style={{ marginBottom: "0" } as React.CSSProperties}>
                <p className="eyebrow">04 · Outcome</p>
                <h2>A trustworthy platform, live in production.</h2>
              </div>
              <div className="cs-body reveal" data-delay="100">
                <p>remWERK ships a complete, multi-tenant business management platform where owners run their operations and finances in an isolated workspace, every action is recorded in a history that can&apos;t be silently rewritten, and a super-admin control plane keeps the whole system auditable and supportable.</p>
                <p>With bank-grade security defaults, exact decimal bookkeeping and a stateless architecture that scales by adding infrastructure, it&apos;s a platform that holds up where it matters — <strong>at the intersection of real money and complete, tamper-proof trust.</strong></p>
              </div>
            </div>
          </section>

          {/* CITATION */}
          <section style={{ padding: "10px 0 40px" } as React.CSSProperties}>
            <div className="container">
              <div className="cs-cite reveal">
                <span className="k">Cite this case study</span>
                <b>CodeREM Labs (2026).</b> remWERK: A secure, multi-tenant business management &amp; audit platform. <i>CodeREM Labs Product Case Studies.</i> Available at coderemlabs.com/portfolio.
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
