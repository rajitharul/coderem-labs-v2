import type { Metadata } from "next";
import Link from "next/link";
import Scene from "@/components/Scene";

const SIGNUP = "/portfolio/remops/signup";

export const metadata: Metadata = {
  title: "remOPS: An agentic WhatsApp platform, tailor-made for your business | CodeREM Labs",
  description:
    "remOPS turns WhatsApp into the operating surface of your business. Customers place and track orders; your team asks, approves and gets alerted — wired straight into your ERP, WMS and TMS. Free setup with a dedicated engineer. Pay only for usage.",
};

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="hero" style={{ minHeight: "auto", padding: "150px 0 70px" } as React.CSSProperties}>
        <div className="orbs"><span className="orb a"></span><span className="orb b"></span></div>
        <div className="container">
          <p className="cs-breadcrumb reveal"><Link href="/portfolio">Portfolio</Link> <span>/</span> Product</p>
          <h1 className="reveal" data-delay="60">rem<span className="h-word">OPS</span></h1>
          <p className="cs-lead reveal" data-delay="120">An agentic WhatsApp platform that runs your business where your customers and your team already are. They place orders, chase shipments, approve POs and ask anything — in a thread wired straight into the systems you already run. Tailor-made for how <em>you</em> work, and set up for you by a real engineer, free.</p>

          <div className="cta-actions reveal" data-delay="150" style={{ marginTop: "28px" } as React.CSSProperties}>
            <Link href={SIGNUP} className="btn btn-primary">Get set up — free <span className="btn-arrow">→</span></Link>
            <a href="#demo" className="btn btn-ghost">See it work</a>
          </div>

          <div className="cs-metabar reveal" data-delay="180">
            <div className="m"><div className="k">Engagement</div><div className="v">Tailor-made build &amp; guided setup</div></div>
            <div className="m"><div className="k">Channel</div><div className="v">WhatsApp Business Platform</div></div>
            <div className="m"><div className="k">Setup</div><div className="v">Free · dedicated engineer</div></div>
            <div className="m"><div className="k">Pricing</div><div className="v">Usage-based, on demand</div></div>
          </div>
        </div>
      </section>

      {/* ABSTRACT */}
      <section style={{ padding: "50px 0 20px" } as React.CSSProperties}>
        <div className="container">
          <div className="cs-abstract reveal">
            <span className="k">Abstract</span>
            <p>remOPS turns WhatsApp into the operating surface of your business. <strong>Outside</strong>, your customers place and reorder, track shipments, pull invoices and raise problems — in the app they already have open. <strong>Inside</strong>, your team asks the business anything (&quot;where is container MSKU-4471?&quot;, &quot;which POs slip this week?&quot;), approves in-thread, and gets pushed the exceptions that matter before a customer has to call. It is not a chatbot bolted onto an FAQ: every remOPS agent is built against <strong>your</strong> systems, <strong>your</strong> rules and <strong>your</strong> vocabulary — and a dedicated engineer sets the whole thing up with you, at no cost, before you pay for a single message.</p>
          </div>
        </div>
      </section>

      {/* 01 THE CHALLENGE */}
      <section className="cs-section">
        <div className="container cs-grid">
          <div className="section-head reveal" style={{ marginBottom: "0" } as React.CSSProperties}>
            <p className="eyebrow">01 · The problem</p>
            <h2>The demo bot didn&apos;t know your SKUs.</h2>
          </div>
          <div className="cs-body reveal" data-delay="100">
            <p>You have probably already been shown a WhatsApp agent. It greeted the customer by name, answered three questions off a help page, and then collapsed the moment someone asked the only question that mattered: <em>what&apos;s my price on SKU-4471, am I over my credit limit, where is my container, can you approve this discount.</em></p>
            <p>Generic agents fail for a boring reason. They are not connected to the systems where those answers live, and they know nothing about how your business actually decides things — your price tiers, your minimum order quantities, your credit terms, your delivery windows, your approval chains, the fact that your warehouse team calls it a &quot;pallet note&quot; and your ERP calls it a delivery advice.</p>
            <p>So they guess. And a system that guesses about stock, price or an ETA is <strong>worse than no system at all</strong> — because now someone has to check its work.</p>
          </div>
        </div>
      </section>

      {/* THE ANTI-GENERIC STATEMENT */}
      <section className="cs-section">
        <div className="container">
          <p className="cs-callout reveal">If you&apos;re fed up with generic agents that demo beautifully and die on the first <em>real</em> question — that is the entire reason remOPS exists.</p>
        </div>
      </section>

      {/* 02 OUTSIDE — the customer */}
      <section className="cs-section" id="demo">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">02 · Outside</p>
            <h2>Your customer <span className="h-word">just types.</span></h2>
            <p>No portal, no app, no phone call, no waiting for your sales desk to open. They order in the thread they already have open — and the answer they get is the one your systems would have given them.</p>
          </div>

          <div className="scene-split">
            <div className="reveal">
              <Scene
                name="remops-thread"
                width={1080}
                height={1350}
                className="portrait"
                alt="A customer messages: 200 units of SKU-4471 to the Colombo warehouse by Friday. The agent replies with their own tier price of LKR 412 per unit, 1,340 in stock at the Colombo DC, a confirmed Friday delivery window and an order total of LKR 82,400 — then places the order and attaches the invoice."
                caption="Their price, their credit limit, their delivery window — checked live, in the thread."
              />
            </div>

            <div className="cs-body reveal" data-delay="100">
              <p>Nothing in that reply is invented. The <strong>tier price</strong> is the one on their account, the <strong>stock figure</strong> comes from the warehouse, the <strong>delivery window</strong> is one your fleet can actually hit, and the credit check happened before the order was offered — not after your finance team caught it.</p>
              <ul className="feature-list">
                <li>Order and reorder from a live catalogue</li>
                <li>Track a shipment without calling anyone</li>
                <li>Invoices, proof of delivery and documents on demand</li>
                <li>Complaints with a photo, opened as a ticket in your system</li>
                <li>Voice notes, PDFs and their own language</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 03 INSIDE — the co-pilot */}
      <section className="cs-section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">03 · Inside</p>
            <h2>Your team gets a <span className="h-word">co-pilot.</span></h2>
            <p>The same channel, a completely different job. It answers on demand — and it speaks first when something is going wrong.</p>
          </div>

          <div className="reveal">
            <Scene
              name="remops-exception"
              width={1920}
              height={1080}
              className="wide"
              alt="At 07:02 the co-pilot messages, unprompted: container MSKU-4471 is held in customs at Colombo. It carries stock for three open orders. The revised ETA rolls from 14:20 to 16:40 and two of the three orders flip to at-risk."
              caption="Nobody asked it. It noticed — and it worked out which orders were about to break."
            />
          </div>

          <div className="cs-grid" style={{ marginTop: "56px" } as React.CSSProperties}>
            <div className="section-head reveal" style={{ marginBottom: "0" } as React.CSSProperties}>
              <h2 style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)" } as React.CSSProperties}>The question you actually needed answered.</h2>
            </div>
            <div className="cs-body reveal" data-delay="100">
              <p>&quot;Where is container MSKU-4471?&quot; is not a question a help page can answer. It requires reading your TMS, knowing which purchase orders are riding on that container, knowing what each customer was promised, and doing the arithmetic on who is about to be let down.</p>
              <p>That is the difference between a chatbot and a co-pilot — and it is why remOPS has to be <strong>built against your systems</strong> rather than configured in a dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 CAPABILITIES */}
      <section className="cs-section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">04 · What it does</p>
            <h2>An agent with <span className="h-word">real authority.</span></h2>
            <p>Not an FAQ with a chat bubble. remOPS reads from your source of truth, acts inside your systems, and knows the limits of what it&apos;s allowed to do.</p>
          </div>
          <div className="cs-caps" data-stagger>
            <div className="cs-cap">
              <span className="n">01</span>
              <h3>Ordering that knows your rules</h3>
              <p>Customer-specific price lists, credit limits, minimum order quantities, substitutions and delivery windows — enforced at the point of order, not discovered later by your sales desk.</p>
            </div>
            <div className="cs-cap">
              <span className="n">02</span>
              <h3>Live shipment intelligence</h3>
              <p>&quot;Where is it?&quot; answered from your TMS and carrier feeds — real legs, real ETAs, real exceptions. Including the ones nobody has noticed yet.</p>
            </div>
            <div className="cs-cap">
              <span className="n">03</span>
              <h3>In-chat approvals</h3>
              <p>POs, discounts, credit extensions and write-offs approved from the thread — with real role checks, real authority limits, and an audit entry for every decision.</p>
            </div>
            <div className="cs-cap">
              <span className="n">04</span>
              <h3>It speaks first</h3>
              <p>Stockout risk, a delayed container, a cold-chain breach, an overdue invoice, a daily 07:00 briefing. The agent opens the conversation instead of waiting to be asked.</p>
            </div>
            <div className="cs-cap">
              <span className="n">05</span>
              <h3>Voice, photos and paperwork</h3>
              <p>A voice note in Sinhala, a photo of a damaged carton, a PDF purchase order dropped into the chat — all understood and turned into a record in your system.</p>
            </div>
            <div className="cs-cap">
              <span className="n">06</span>
              <h3>Guardrails, not guesses</h3>
              <p>It reads from your systems rather than inventing answers, refuses when it isn&apos;t sure, and hands to a human with the full thread attached. Every action is logged.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 INTEGRATION */}
      <section className="cs-section">
        <div className="container cs-grid">
          <div className="section-head reveal" style={{ marginBottom: "0" } as React.CSSProperties}>
            <p className="eyebrow">05 · Integration</p>
            <h2>It plugs into what you already run.</h2>
          </div>
          <div className="cs-body reveal" data-delay="100">
            <p>The agent is only as good as its reach into your business. remOPS connects to your ERP, WMS, TMS and CRM — and where there is no clean API, we do the unglamorous work anyway: a database view, a scheduled export, an SFTP drop, a screen-scraped legacy screen. <strong>Your fifteen-year-old system is not a blocker.</strong> It is just an integration.</p>
            <p>It runs on the <strong>official WhatsApp Business Platform</strong> — a verified business sender, proper opt-in, template messages, and a number your customers can trust. Not an unofficial bridge that gets your account banned the week you scale.</p>
            <div className="chips">
              <span className="chip">SAP</span><span className="chip">Odoo</span><span className="chip">Zoho</span><span className="chip">Microsoft Dynamics</span><span className="chip">NetSuite</span><span className="chip">Salesforce</span><span className="chip">HubSpot</span><span className="chip">QuickBooks · Xero</span><span className="chip">WMS · TMS</span><span className="chip">Google Sheets</span><span className="chip">REST · GraphQL · SOAP</span><span className="chip">SQL · SFTP · CSV</span><span className="chip">Custom / in-house</span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: "0" } as React.CSSProperties}>
        <div className="container">
          <div className="reveal">
            <Scene
              name="remops-weave"
              width={1920}
              height={1080}
              className="wide"
              alt="Data flows continuously from SAP, a WMS, a TMS, Salesforce and Google Sheets into the remOPS agent core, and out to WhatsApp."
              caption="Your fifteen-year-old system is not a blocker. It is just an integration."
            />
          </div>
        </div>
      </section>

      {/* 05 SETUP — the core promise */}
      <section className="cs-section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">06 · Setup</p>
            <h2>You don&apos;t get a login. <span className="h-word">You get an engineer.</span></h2>
            <p>Software like this doesn&apos;t fail at the demo. It fails at the setup — which is exactly the part everyone else leaves to you.</p>
          </div>

          <div className="cs-grid" style={{ alignItems: "start" } as React.CSSProperties}>
            <div className="cs-body reveal">
              <p>We assign you a <strong>dedicated setup engineer</strong> — a named person, not a ticket queue and not a sales rep. They learn how your business actually works, wire remOPS into your systems, teach it your vocabulary and your edge cases, train your team on it, and stay with you after you go live.</p>
              <p><strong>That setup is free.</strong> You go live before you pay us anything. After that you pay only for what the agent actually does — usage, on demand. No seat licences, no platform fee, no annual lock-in.</p>
            </div>

            <ol className="cs-steps reveal" data-delay="100">
              <li><span><strong>Discovery.</strong> Your engineer maps how you really operate — the SKUs, the approval chains, the exceptions, the workarounds nobody documented.</span></li>
              <li><span><strong>Integration.</strong> We connect the agent to your ERP, WMS, TMS and CRM. Whatever you run, however old it is.</span></li>
              <li><span><strong>Tailoring.</strong> We teach it your rules, your pricing, your language and the edge cases that break generic bots. Tuned on your data, not a template.</span></li>
              <li><span><strong>Go live.</strong> Your official WhatsApp business number, your verified sender, your team trained on it.</span></li>
              <li><span><strong>We stay.</strong> Your engineer keeps tuning it, adds workflows, and adapts it as your operation changes.</span></li>
            </ol>
          </div>

          <div className="cs-metrics" data-stagger style={{ marginTop: "56px" } as React.CSSProperties}>
            <div className="cs-metric">
              <div className="big">$0</div>
              <h3>Setup cost</h3>
              <p>Discovery, integration, tailoring, training and go-live. All of it, free.</p>
            </div>
            <div className="cs-metric">
              <div className="big">1</div>
              <h3>Dedicated engineer</h3>
              <p>A named person who builds it with you and stays after launch.</p>
            </div>
            <div className="cs-metric">
              <div className="big">0</div>
              <h3>Seat licences</h3>
              <p>Add your whole team. You&apos;re never billed for the number of people.</p>
            </div>
            <div className="cs-metric">
              <div className="big">Pay per use</div>
              <h3>On demand</h3>
              <p>You pay for what the agent does — nothing before it&apos;s working.</p>
            </div>
          </div>

          <div className="reveal" style={{ marginTop: "56px" } as React.CSSProperties}>
            <Scene
              name="remops-setup"
              width={1920}
              height={1080}
              className="wide"
              alt="Five phases of setup complete — discovery, integration, tailoring, go-live and ongoing support — while the engineer hours invested climb to 140 and the amount you have paid stays at $0.00."
              caption="140 engineer hours in. Nothing paid. That is what free setup actually means."
            />
          </div>
        </div>
      </section>

      {/* 06 WHERE IT FITS */}
      <section className="cs-section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">07 · Where it fits</p>
            <h2>Anywhere orders move and someone asks &quot;where is it?&quot;</h2>
            <p>remOPS is built per customer, so the shape changes with the operation. These are the ones where it pays for itself fastest.</p>
          </div>
          <div className="tag-cloud reveal">
            <span className="v">Distribution &amp; Wholesale</span>
            <span className="v">Logistics &amp; 3PL</span>
            <span className="v">Freight Forwarding</span>
            <span className="v">Manufacturing</span>
            <span className="v">FMCG &amp; Food</span>
            <span className="v">Pharma &amp; Cold Chain</span>
            <span className="v">Retail Chains</span>
            <span className="v">Construction Supply</span>
            <span className="v">Automotive Parts</span>
            <span className="v">Agriculture &amp; Produce</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingTop: "20px" } as React.CSSProperties}>
        <div className="container">
          <div className="cta-band reveal">
            <p className="eyebrow center">Stop settling for the generic one</p>
            <h2>Let&apos;s build yours.</h2>
            <p>Free setup · Dedicated engineer · Pay only for usage · No lock-in</p>
            <div className="cta-actions">
              <Link href={SIGNUP} className="btn btn-primary">Sign up for remOPS <span className="btn-arrow">→</span></Link>
              <Link href="/portfolio" className="btn btn-ghost">More Work</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
