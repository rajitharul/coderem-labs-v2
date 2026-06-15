import type { Metadata } from "next";
import Link from "next/link";
import UIShowcase from "@/components/UIShowcase";

const BADSTREAMS_SCREENS = [
  { file: "landing.html", title: "Landing" },
  { file: "streamer-browse.html", title: "Browse Campaigns" },
  { file: "admin-campaigns.html", title: "Campaigns" },
  { file: "admin-analytics.html", title: "Proof of Play" },
];

export const metadata: Metadata = {
  title: "Bad Streams: Tamper-proof, real-time ad delivery for live streams | CodeREM Labs",
  description: "Case study: Bad Streams is a full-stack SaaS that delivers tamper-proof ads inside live streams on Kick and Twitch, enforcing exact placement every second, with proof of play and real-time analytics. <1s enforcement, zero-install streamer setup.",
};

export default function Page() {
  return (
    <>
      {/* HERO */}
          <section className="hero" style={{ minHeight: "auto", padding: "150px 0 70px" } as React.CSSProperties}>
            <div className="orbs"><span className="orb a"></span><span className="orb b"></span></div>
            <div className="container">
              <p className="cs-breadcrumb reveal"><Link href="/portfolio">Portfolio</Link> <span>/</span> Case study</p>
              <h1 className="reveal" data-delay="60">Bad <span className="h-word">Streams</span></h1>
              <p className="cs-lead reveal" data-delay="120">Tamper-proof, real-time ad delivery inside a live stream. Influencer advertising is built on enforcement, not trust.</p>

              <div className="cs-metabar reveal" data-delay="180">
                <div className="m"><div className="k">Client</div><div className="v">New Zealand · AdTech</div></div>
                <div className="m"><div className="k">Sector</div><div className="v">Live Streaming · Advertising</div></div>
                <div className="m"><div className="k">Type</div><div className="v">Full-stack SaaS</div></div>
                <div className="m"><div className="k">Platforms</div><div className="v">Kick · Twitch · OBS</div></div>
              </div>
            </div>
          </section>

          {/* ABSTRACT */}
          <section style={{ padding: "50px 0 20px" } as React.CSSProperties}>
            <div className="container">
              <div className="cs-abstract reveal">
                <span className="k">Abstract</span>
                <p>Bad Streams is a full-stack SaaS platform built by CodeREM Labs that connects brands with live streamers on platforms like <strong>Kick and Twitch</strong>, delivering tamper-proof ads directly inside a streamer's broadcast, with built-in analytics and proof of play. Rather than trusting that an ad ran correctly, Bad Streams <strong>enforces the exact position, scale, visibility and layer order</strong> of every ad asset, every single second, snapping it back automatically within <strong style={{ color: "var(--accent)" } as React.CSSProperties}>one second</strong> if it's tampered with.</p>
              </div>
            </div>
          </section>

          {/* 01 THE CHALLENGE */}
          <section className="cs-section">
            <div className="container cs-grid">
              <div className="section-head reveal" style={{ marginBottom: "0" } as React.CSSProperties}>
                <p className="eyebrow">01 · The challenge</p>
                <h2>Influencer ads run entirely on trust.</h2>
              </div>
              <div className="cs-body reveal" data-delay="100">
                <p>Traditional influencer ad deals rely entirely on trust: brands pay streamers upfront and <strong>hope</strong> the ad runs correctly, at the right time, in the right position. There is no mechanism to verify placement, enforce creative specs or measure real delivery.</p>
                <p>Streamers can move, resize, hide or reorder ad overlays with <strong>no accountability</strong>, and brands have zero visibility into whether their campaigns are actually delivered as agreed. The result is wasted ad spend and broken trust on both sides of the deal.</p>
              </div>
            </div>
          </section>

          {/* 02 APPROACH */}
          <section className="cs-section">
            <div className="container cs-grid">
              <div className="section-head reveal" style={{ marginBottom: "0" } as React.CSSProperties}>
                <p className="eyebrow">02 · Approach</p>
                <h2>Replace trust with enforcement and proof.</h2>
                <p style={{ fontSize: "1.05rem" } as React.CSSProperties}>A brand-side studio to configure the campaign, a zero-install overlay for streamers, and per-second enforcement with screenshot-backed proof.</p>
              </div>
              <ol className="cs-steps reveal" data-delay="100">
                <li><span>Built a brand-side <strong>campaign management system</strong> with drag-and-drop ad positioning on a 1920×1080 virtual canvas, opacity control, z-index ordering and 300&nbsp;ms debounce autosave.</span></li>
                <li><span>Engineered a <strong>zero-install streamer experience</strong>: on approval, streamers get a unique signed overlay URL they add as an OBS browser source in under 60 seconds, no plugins or scripts.</span></li>
                <li><span>Implemented <strong>tamper-proof enforcement</strong> via OBS WebSocket v5 with SHA-256 HMAC auth, every second it enforces the advertiser's exact position, scale, visibility and layer order, snapping back changes within one second.</span></li>
                <li><span>Developed <strong>Proof of Play</strong>: full OBS scene screenshots captured every 30 seconds via GetSourceScreenshot, stored server-side alongside live/offline detection and viewer analytics from the Kick.com Public API.</span></li>
                <li><span>Built <strong>staleness detection</strong> with a 90-second heartbeat freshness window, so stale data shows as offline rather than misleading, brands always see accurate delivery status.</span></li>
              </ol>
            </div>
          </section>

          {/* 03 THE PLATFORM */}
          <section className="cs-section">
            <div className="container">
              <div className="section-head reveal">
                <p className="eyebrow">03 · The platform</p>
                <h2>Every second, <span className="h-word">enforced.</span></h2>
                <p>Bad Streams enforces the exact position, scale, visibility and layer order of ad assets every single second, and proves it with server-side screenshots.</p>
              </div>
              <div className="cs-caps" data-stagger>
                <div className="cs-cap">
                  <span className="n">01</span>
                  <h3>Brand campaign studio</h3>
                  <p>Drag-and-drop ad positioning on a 1920×1080 virtual canvas with opacity, z-index ordering and 300&nbsp;ms debounce autosave, brands set the rules exactly.</p>
                </div>
                <div className="cs-cap">
                  <span className="n">02</span>
                  <h3>Zero-install onboarding</h3>
                  <p>Approved streamers add a single signed browser-source URL to OBS and go live in under a minute, no extension, no desktop app, no extra software.</p>
                </div>
                <div className="cs-cap">
                  <span className="n">03</span>
                  <h3>Tamper-proof enforcement</h3>
                  <p>Over OBS WebSocket v5 with SHA-256 HMAC auth, the exact position, scale, visibility and layer order are enforced every second, changes snap back within one.</p>
                </div>
                <div className="cs-cap">
                  <span className="n">04</span>
                  <h3>Proof of play</h3>
                  <p>Full OBS scene screenshots are captured every 30 seconds via GetSourceScreenshot and stored server-side, verifiable evidence the ad actually ran.</p>
                </div>
                <div className="cs-cap">
                  <span className="n">05</span>
                  <h3>Real-time analytics</h3>
                  <p>OBS connection status, live/offline detection and viewer counts are tracked per streamer in real time via the Kick.com Public API.</p>
                </div>
                <div className="cs-cap">
                  <span className="n">06</span>
                  <h3>Staleness detection</h3>
                  <p>A 90-second heartbeat freshness window means stale data is shown as offline, never as a misleading "live", accuracy brands can act on.</p>
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
              <UIShowcase base="/portfolio/badstreams/ui" screens={BADSTREAMS_SCREENS} layout="carousel" />
            </div>
          </section>

          {/* CALLOUT */}
          <section style={{ padding: "40px 0" } as React.CSSProperties}>
            <div className="container">
              <p className="cs-callout reveal">Snapped back within <em>a second,</em> proven every <em>thirty</em>, advertising you can actually verify.</p>
            </div>
          </section>

          {/* 04 RESULTS */}
          <section className="cs-section">
            <div className="container">
              <div className="section-head reveal">
                <p className="eyebrow">04 · Results &amp; impact</p>
                <h2>Verifiable delivery, end to end.</h2>
              </div>
              <div className="cs-metrics" data-stagger>
                <div className="cs-metric">
                  <div className="big">&lt;1s</div>
                  <h3>Enforcement latency</h3>
                  <p>Tampered ad placements snap back to the advertiser-configured position within one second.</p>
                </div>
                <div className="cs-metric">
                  <div className="big">30s</div>
                  <h3>Proof of play</h3>
                  <p>Full OBS scene screenshots are captured and stored server-side every 30 seconds.</p>
                </div>
                <div className="cs-metric">
                  <div className="big">&lt;60s</div>
                  <h3>Streamer setup</h3>
                  <p>Zero-install onboarding, streamers add one browser-source URL to OBS and they're live.</p>
                </div>
                <div className="cs-metric">
                  <div className="big">Live</div>
                  <h3>Real-time analytics</h3>
                  <p>OBS connection status, stream live/offline detection and viewer counts tracked per streamer in real time.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 05 ENGINEERING */}
          <section className="cs-section">
            <div className="container cs-grid">
              <div className="section-head reveal" style={{ marginBottom: "0" } as React.CSSProperties}>
                <p className="eyebrow">05 · Engineering</p>
                <h2>One HTML page, doing the impossible.</h2>
              </div>
              <div className="cs-body reveal" data-delay="100">
                <p>The overlay is a single HTML page served by Django and loaded as a browser source inside OBS, running entirely in OBS's embedded Chromium engine, <strong>no extension, no desktop app, no extra software</strong>. It polls the Django API every 3 seconds for campaign state and holds a persistent WebSocket to OBS for enforcement and screenshot capture, while all analytics flow back through overlay-token-authenticated endpoints.</p>
                <div className="chips">
                  <span className="chip">Python</span><span className="chip">Django 5.2</span><span className="chip">Django REST Framework</span><span className="chip">HTMX</span>
                  <span className="chip">Tailwind CSS</span><span className="chip">PostgreSQL</span><span className="chip">OBS WebSocket v5</span><span className="chip">Kick.com API</span>
                </div>
              </div>
            </div>
          </section>

          {/* 06 OUTCOME */}
          <section className="cs-section">
            <div className="container cs-grid">
              <div className="section-head reveal" style={{ marginBottom: "0" } as React.CSSProperties}>
                <p className="eyebrow">06 · Outcome</p>
                <h2>From "hope it ran" to "here's the screenshot."</h2>
              </div>
              <div className="cs-body reveal" data-delay="100">
                <p>Bad Streams removes the uncertainty that defined influencer advertising. Brands no longer pay and hope, they configure a campaign once and the platform <strong>enforces it every second and proves it every thirty</strong>, snapping back any tampering within a second.</p>
                <p>For streamers, it's a 60-second, zero-install setup. For brands, it's the first time in-stream advertising comes with <strong>verifiable, screenshot-backed delivery</strong>, turning a trust problem into an accountable, measurable channel.</p>
              </div>
            </div>
          </section>

          {/* CITATION */}
          <section style={{ padding: "10px 0 40px" } as React.CSSProperties}>
            <div className="container">
              <div className="cs-cite reveal">
                <span className="k">Cite this case study</span>
                <b>CodeREM Labs (2026).</b> Bad Streams: Tamper-proof, real-time in-stream ad delivery with proof of play. <i>CodeREM Labs Product Case Studies.</i> Available at coderemlabs.com/portfolio.
              </div>
            </div>
          </section>

          {/* CTA */}
          <section style={{ paddingTop: "20px" } as React.CSSProperties}>
            <div className="container">
              <div className="cta-band reveal">
                <p className="eyebrow center">Building something that has to be provable?</p>
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
