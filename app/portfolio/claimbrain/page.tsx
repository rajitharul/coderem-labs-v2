import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ClaimBrain: AI medical claims processing | CodeREM Labs",
  description: "Case study: ClaimBrain uses OCR and guardrailed LLMs to extract and validate medical claims data, CMS-1500, UB-04, EOBs and physician notes, at ~97% accuracy, with 90% faster processing and human-in-the-loop review.",
};

export default function Page() {
  return (
    <>
      {/* HERO */}
          <section className="hero" style={{ minHeight: "auto", padding: "150px 0 70px" } as React.CSSProperties}>
            <div className="orbs"><span className="orb a"></span><span className="orb b"></span></div>
            <div className="container">
              <p className="cs-breadcrumb reveal"><Link href="/portfolio">Portfolio</Link> <span>/</span> Case study</p>
              <h1 className="reveal" data-delay="60">Claim<span className="h-word">Brain</span></h1>
              <p className="cs-lead reveal" data-delay="120">AI that reads, understands and validates medical claims. It turns hours of manual review into minutes, at near-human accuracy.</p>

              <div className="cs-metabar reveal" data-delay="180">
                <div className="m"><div className="k">Client</div><div className="v">Healthcare Insurance Provider</div></div>
                <div className="m"><div className="k">Sector</div><div className="v">Health Insurance · AI</div></div>
                <div className="m"><div className="k">Engagement</div><div className="v">AI solution · OCR + LLM</div></div>
                <div className="m"><div className="k">Approach</div><div className="v">Guardrailed · Human-in-the-loop</div></div>
              </div>
            </div>
          </section>

          {/* ABSTRACT */}
          <section style={{ padding: "50px 0 20px" } as React.CSSProperties}>
            <div className="container">
              <div className="cs-abstract reveal">
                <span className="k">Abstract</span>
                <p>ClaimBrain is an AI system built by CodeREM Labs for a healthcare insurance provider drowning in the complexity and volume of medical claims. It uses <strong>OCR</strong> to extract data from scanned claim forms and handwritten physician notes, and <strong>LLMs operating within defined guardrails</strong> to understand clinical context, validate coding accuracy and flag discrepancies. Tuned over multiple lines of business, it reaches <strong style={{ color: "var(--accent)" } as React.CSSProperties}>~97%</strong> extraction accuracy while automatically routing edge cases to humans, cutting processing time by <strong style={{ color: "var(--accent)" } as React.CSSProperties}>90%</strong>.</p>
              </div>
            </div>
          </section>

          {/* 01 THE CHALLENGE */}
          <section className="cs-section">
            <div className="container cs-grid">
              <div className="section-head reveal" style={{ marginBottom: "0" } as React.CSSProperties}>
                <p className="eyebrow">01 · The challenge</p>
                <h2>Skilled adjusters, stuck doing data entry.</h2>
              </div>
              <div className="cs-body reveal" data-delay="100">
                <p>Our client, a healthcare insurance provider, was struggling with the sheer complexity and volume of medical claims. Operations leaned heavily on <strong>manual review</strong> of scanned claim forms, handwritten physician notes and supporting medical documentation. The work was slow, error-prone and costly, it took experienced staff to interpret nuanced clinical language and ensure compliance with payer-specific rules.</p>
                <p>At scale, that meant <strong>thousands of hours annually</strong> reviewing forms, verifying diagnosis and procedure codes, cross-referencing policy coverage and catching billing errors. Error rates were high and processing was slow. Worst of all, <strong>skilled claims adjusters were stuck on repetitive data entry</strong> instead of the complex adjudication and fraud detection where their judgement actually matters.</p>
              </div>
            </div>
          </section>

          {/* 02 APPROACH */}
          <section className="cs-section">
            <div className="container cs-grid">
              <div className="section-head reveal" style={{ marginBottom: "0" } as React.CSSProperties}>
                <p className="eyebrow">02 · Approach</p>
                <h2>OCR for the page, LLMs for the meaning.</h2>
                <p style={{ fontSize: "1.05rem" } as React.CSSProperties}>We paired document AI with guardrailed language models, and kept humans in the loop where the stakes demand it.</p>
              </div>
              <ol className="cs-steps reveal" data-delay="100">
                <li><span>Analyzed medical claim document types, <strong>CMS-1500, UB-04, EOBs</strong> and supporting clinical notes, across multiple lines of business.</span></li>
                <li><span>Developed a custom <strong>OCR pipeline</strong> optimized for claim forms, handwritten physician notes and scanned insurance documents.</span></li>
                <li><span>Built a <strong>RAG</strong> system for intelligent claims Q&amp;A, letting adjusters query claim history and policy details in natural language.</span></li>
                <li><span>Trained classification models to validate <strong>ICD-10, CPT and HCPCS</strong> codes against submitted diagnoses and flag potential upcoding or bundling errors.</span></li>
                <li><span>Created a <strong>human-in-the-loop</strong> review interface for edge cases, denied-claim appeals and continuous model improvement.</span></li>
              </ol>
            </div>
          </section>

          {/* 03 THE SYSTEM */}
          <section className="cs-section">
            <div className="container">
              <div className="section-head reveal">
                <p className="eyebrow">03 · The system</p>
                <h2>Reads the claim. <span className="h-word">Understands it.</span></h2>
                <p>ClaimBrain combines document AI, guardrailed reasoning and human oversight into one pipeline, accurate enough to trust, honest enough to ask for help.</p>
              </div>
              <div className="cs-caps" data-stagger>
                <div className="cs-cap">
                  <span className="n">01</span>
                  <h3>Document OCR</h3>
                  <p>A custom OCR pipeline extracts data from CMS-1500, UB-04 and EOB forms, handwritten physician notes and scanned documents, the messy reality of real claims.</p>
                </div>
                <div className="cs-cap">
                  <span className="n">02</span>
                  <h3>Clinical understanding</h3>
                  <p>LLMs operating within <strong>defined guardrails</strong> interpret nuanced clinical language, understand context and flag discrepancies, without hallucinating outside their lane.</p>
                </div>
                <div className="cs-cap">
                  <span className="n">03</span>
                  <h3>Code validation</h3>
                  <p>Classification models validate ICD-10, CPT and HCPCS codes against submitted diagnoses, catching potential upcoding and bundling errors automatically.</p>
                </div>
                <div className="cs-cap">
                  <span className="n">04</span>
                  <h3>RAG claims Q&amp;A</h3>
                  <p>A retrieval-augmented system lets adjusters ask about claim history and policy coverage in plain language, answers grounded in the actual record.</p>
                </div>
                <div className="cs-cap">
                  <span className="n">05</span>
                  <h3>Human-in-the-loop</h3>
                  <p>Edge cases and appeals route to a review interface, where adjuster decisions feed back into the model, accuracy that compounds over time.</p>
                </div>
                <div className="cs-cap">
                  <span className="n">06</span>
                  <h3>Accuracy &amp; compliance</h3>
                  <p>~97% extraction accuracy with payer-specific rule compliance built in, and every uncertain case flagged rather than guessed.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CALLOUT */}
          <section style={{ padding: "40px 0" } as React.CSSProperties}>
            <div className="container">
              <p className="cs-callout reveal">Automation where it's safe, a human where it matters, <em>~97% accuracy,</em> every edge case flagged.</p>
            </div>
          </section>

          {/* 04 RESULTS */}
          <section className="cs-section">
            <div className="container">
              <div className="section-head reveal">
                <p className="eyebrow">04 · Results &amp; impact</p>
                <h2>Hours of work, done in minutes.</h2>
              </div>
              <div className="cs-metrics" data-stagger>
                <div className="cs-metric">
                  <div className="big">−90%</div>
                  <h3>Processing time</h3>
                  <p>Claims processing dropped from hours to minutes per batch, clearing backlogs that used to define the workday.</p>
                </div>
                <div className="cs-metric">
                  <div className="big">97%</div>
                  <h3>Extraction accuracy</h3>
                  <p>Human-level accuracy on medical claims data fields, with uncertain cases flagged for review rather than guessed.</p>
                </div>
                <div className="cs-metric">
                  <div className="big">↑</div>
                  <h3>Adjusters freed</h3>
                  <p>Skilled adjusters moved off repetitive data entry and back to complex adjudication and fraud detection, where they add the most value.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 05 ENGINEERING */}
          <section className="cs-section">
            <div className="container cs-grid">
              <div className="section-head reveal" style={{ marginBottom: "0" } as React.CSSProperties}>
                <p className="eyebrow">05 · Engineering</p>
                <h2>Guardrailed AI, grounded in the record.</h2>
              </div>
              <div className="cs-body reveal" data-delay="100">
                <p>ClaimBrain runs a document-AI front end (Tesseract OCR) into guardrailed reasoning with GPT-4, orchestrated through LangChain and grounded by a Pinecone vector store for retrieval. Classification models handle code validation, and a React review console keeps a human in the loop, all served from a FastAPI backend over PostgreSQL.</p>
                <div className="chips">
                  <span className="chip">Python</span><span className="chip">FastAPI</span><span className="chip">OpenAI GPT-4</span><span className="chip">LangChain</span>
                  <span className="chip">Pinecone</span><span className="chip">Tesseract OCR</span><span className="chip">React</span><span className="chip">PostgreSQL</span>
                </div>
              </div>
            </div>
          </section>

          {/* 06 OUTCOME */}
          <section className="cs-section">
            <div className="container cs-grid">
              <div className="section-head reveal" style={{ marginBottom: "0" } as React.CSSProperties}>
                <p className="eyebrow">06 · Outcome</p>
                <h2>Faster claims, better-spent expertise.</h2>
              </div>
              <div className="cs-body reveal" data-delay="100">
                <p>By fine-tuning the pipeline to roughly <strong>97% accuracy</strong> while automatically flagging edge cases for human review, ClaimBrain made claims processing dramatically faster without sacrificing the trust the work demands.</p>
                <p>The insurer cut processing time by <strong>90%</strong> and put its most experienced people back on the problems only people can solve, <strong>complex adjudication and fraud detection</strong>, while the machine handles the rest.</p>
              </div>
            </div>
          </section>

          {/* CITATION */}
          <section style={{ padding: "10px 0 40px" } as React.CSSProperties}>
            <div className="container">
              <div className="cs-cite reveal">
                <span className="k">Cite this case study</span>
                <b>CodeREM Labs (2026).</b> ClaimBrain: OCR and guardrailed LLMs for medical claims extraction and validation. <i>CodeREM Labs Product Case Studies.</i> Available at coderemlabs.com/portfolio.
              </div>
            </div>
          </section>

          {/* CTA */}
          <section style={{ paddingTop: "20px" } as React.CSSProperties}>
            <div className="container">
              <div className="cta-band reveal">
                <p className="eyebrow center">Have a document-heavy workflow to automate?</p>
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
