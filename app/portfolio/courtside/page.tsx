import type { Metadata } from "next";
import Link from "next/link";

const LIVE_URL = "https://courtside-blush.vercel.app/";

export const metadata: Metadata = {
  title: "Courtside: A multi-sided sports-venue booking platform | CodeREM Labs",
  description: "Case study: Courtside lets players discover and book sports courts across six sports, venue owners manage availability and bookings, and admins onboard venues — with real-time slot booking and pay-to-confirm checkout via a live payment gateway.",
};

export default function Page() {
  return (
    <>
      {/* HERO */}
          <section className="hero" style={{ minHeight: "auto", padding: "150px 0 70px" } as React.CSSProperties}>
            <div className="orbs"><span className="orb a"></span><span className="orb b"></span></div>
            <div className="container">
              <p className="cs-breadcrumb reveal"><Link href="/portfolio">Portfolio</Link> <span>/</span> Case study</p>
              <h1 className="reveal" data-delay="60">Court<span className="h-word">side</span></h1>
              <p className="cs-lead reveal" data-delay="120">A multi-sided sports-venue booking platform — discover and reserve courts across six sports, manage venues from an owner dashboard, and onboard the whole marketplace from a super-admin portal.</p>

              <div className="cta-actions reveal" data-delay="150" style={{ marginTop: "28px" } as React.CSSProperties}>
                <a href={LIVE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit live site <span className="btn-arrow">→</span></a>
              </div>

              <div className="cs-metabar reveal" data-delay="180">
                <div className="m"><div className="k">Engagement</div><div className="v">Product design &amp; build · 0→1</div></div>
                <div className="m"><div className="k">Sector</div><div className="v">Sports &amp; Recreation</div></div>
                <div className="m"><div className="k">Platform</div><div className="v">Web · Multi-sided marketplace</div></div>
                <div className="m"><div className="k">Status</div><div className="v">Live in production</div></div>
              </div>
            </div>
          </section>

          {/* ABSTRACT */}
          <section style={{ padding: "50px 0 20px" } as React.CSSProperties}>
            <div className="container">
              <div className="cs-abstract reveal">
                <span className="k">Abstract</span>
                <p>Courtside is a full-stack booking platform — think OpenTable or Playo for sports facilities — built around three distinct experiences. <strong>Players</strong> browse and reserve time slots across six sports: pickleball, cricket, football, basketball, tennis and badminton. <strong>Venue owners</strong> manage their courts, availability and bookings from a dedicated dashboard. A <strong>super-admin portal</strong> sits on top to onboard venues and assign owners. Bookings are confirmed through a real payment-gateway integration, with pending holds that auto-expire to free up slots.</p>
              </div>
            </div>
          </section>

          {/* 01 THE CHALLENGE */}
          <section className="cs-section">
            <div className="container cs-grid">
              <div className="section-head reveal" style={{ marginBottom: "0" } as React.CSSProperties}>
                <p className="eyebrow">01 · The challenge</p>
                <h2>Three audiences, one source of truth.</h2>
              </div>
              <div className="cs-body reveal" data-delay="100">
                <p>Sports-facility booking is a marketplace problem: players want to find an open court near them <strong>right now</strong>, venue owners want to control exactly when and how their courts are bookable, and the platform operator needs to onboard venues and keep the whole system trustworthy.</p>
                <p>The hard part is availability. Courts open and close on irregular schedules, get blocked for maintenance or private events, and must never be double-booked. And a booking only counts once money changes hands — a held slot that never gets paid for shouldn&apos;t lock everyone else out forever.</p>
              </div>
            </div>
          </section>

          {/* 02 THE PLATFORM */}
          <section className="cs-section">
            <div className="container">
              <div className="section-head reveal">
                <p className="eyebrow">02 · The platform</p>
                <h2>Built for <span className="h-word">every side</span> of the market.</h2>
                <p>Each role gets a purpose-built surface, all backed by a single authoritative model of venues, courts, availability and bookings.</p>
              </div>
              <div className="cs-caps" data-stagger>
                <div className="cs-cap">
                  <span className="n">01</span>
                  <h3>Player experience</h3>
                  <p>A sport-aware landing page with featured venues and live stats, a venue browser with search and filtering by sport, city and amenities, and detail pages with photo galleries, lightbox and per-court info (surface, indoor/outdoor).</p>
                </div>
                <div className="cs-cap">
                  <span className="n">02</span>
                  <h3>Real-time slot booking</h3>
                  <p>Pick a date, see a live availability grid, and book in configurable slot lengths of 30, 60, 90 or 120 minutes. Booking details capture profile autofill, a country-code phone number and an ID number.</p>
                </div>
                <div className="cs-cap">
                  <span className="n">03</span>
                  <h3>Pay-to-confirm checkout</h3>
                  <p>Bookings start as <strong>pending</strong> and become <strong>confirmed</strong> only after a successful payment. Stale pending holds auto-expire to free the slot back up, so unpaid reservations never block real players.</p>
                </div>
                <div className="cs-cap">
                  <span className="n">04</span>
                  <h3>Venue owner dashboard</h3>
                  <p>Owners manage courts, surfaces and photos with per-venue and per-court image caps. Courts are closed by default and opened with additive per-date open windows and weekday schedules, plus one-off overrides and manual blocks.</p>
                </div>
                <div className="cs-cap">
                  <span className="n">05</span>
                  <h3>Super-admin portal</h3>
                  <p>Create venues and assign or transfer ownership to users, with platform-wide booking visibility. Access is gated behind an email allowlist, keeping the highest tier locked down.</p>
                </div>
                <div className="cs-cap">
                  <span className="n">06</span>
                  <h3>Granular availability</h3>
                  <p>Availability is modeled as additive open windows over a closed-by-default baseline, combined with weekday schedules, schedule overrides and manual blocks — so a court is bookable exactly when its owner intends, and never otherwise.</p>
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
                <p>Courtside is deployed and running in production. Explore the real app below, or open it in a new tab.</p>
              </div>
              <div className="mac-window reveal" style={{ maxWidth: "1040px", margin: "0 auto" } as React.CSSProperties}>
                <div className="mac-bar">
                  <span className="mac-dots"><i></i><i></i><i></i></span>
                  <span className="mac-title">courtside-blush.vercel.app</span>
                </div>
                <div style={{ height: "clamp(440px, 62vh, 700px)", overflow: "hidden" } as React.CSSProperties}>
                  <iframe
                    src={LIVE_URL}
                    title="Courtside — live site"
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
                <h2>Type-safe, role-aware, and built around real money.</h2>
              </div>
              <div className="cs-body reveal" data-delay="100">
                <p>Courtside is a <strong>Next.js 16</strong> App Router app with React Server Components, React 19 and TypeScript end to end. Data and auth run on <strong>Supabase</strong> (Postgres + Auth) with <strong>Row-Level Security</strong>: public read policies for venues and courts, and a service-role admin path gated behind verified ownership and role checks. Ten incremental SQL migrations model venues, courts, bookings, blocks, schedule overrides, open windows and payments.</p>
                <p>Payments go through a <strong>PayHere</strong> integration with proper server-side hash signing — the merchant secret never leaves a server-only module, and every entry point asserts sandbox mode so it can&apos;t hit the live gateway by accident. Three authorization tiers — player, owner and super-admin — are enforced server-side throughout.</p>
                <div className="chips">
                  <span className="chip">Next.js 16</span><span className="chip">React 19</span><span className="chip">TypeScript</span><span className="chip">Supabase (Postgres + Auth)</span>
                  <span className="chip">Row-Level Security</span><span className="chip">PayHere</span><span className="chip">Tailwind CSS v4</span><span className="chip">Motion</span><span className="chip">Lucide</span>
                </div>
              </div>
            </div>
          </section>

          {/* 04 OUTCOME */}
          <section className="cs-section">
            <div className="container cs-grid">
              <div className="section-head reveal" style={{ marginBottom: "0" } as React.CSSProperties}>
                <p className="eyebrow">04 · Outcome</p>
                <h2>A complete marketplace, live in production.</h2>
              </div>
              <div className="cs-body reveal" data-delay="100">
                <p>Courtside ships all three sides of a sports-booking marketplace in one coherent product: players book in seconds against real-time availability, owners stay in full control of when their courts are bookable, and operators onboard new venues without touching the database.</p>
                <p>With server-enforced authorization, payment-gated confirmation and an availability model that can&apos;t be tricked into double-booking, it&apos;s a platform that holds up where it matters — <strong>at the moment a player&apos;s money turns a held slot into a confirmed game.</strong></p>
              </div>
            </div>
          </section>

          {/* CITATION */}
          <section style={{ padding: "10px 0 40px" } as React.CSSProperties}>
            <div className="container">
              <div className="cs-cite reveal">
                <span className="k">Cite this case study</span>
                <b>CodeREM Labs (2026).</b> Courtside: A multi-sided sports-venue booking platform. <i>CodeREM Labs Product Case Studies.</i> Available at coderemlabs.com/portfolio.
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
