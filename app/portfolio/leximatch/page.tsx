import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LexiMatch AI: Explainable AI for legal precedent discovery | CodeREM Labs",
  description: "Case study: LexiMatch AI is a two-stage, explainable legal retrieval engine that matches legal reasoning, not keywords. Facetization, hybrid search, section-aware re-ranking and party-stance labels deliver 94%+ recall with 100% explainability.",
};

export default function Page() {
  return (
    <>
      {/* HERO */}
          <section className="hero" style={{ minHeight: "auto", padding: "150px 0 70px" } as React.CSSProperties}>
            <div className="orbs"><span className="orb a"></span><span className="orb b"></span></div>
            <div className="container">
              <p className="cs-breadcrumb reveal"><Link href="/portfolio">Portfolio</Link> <span>/</span> Case study</p>
              <h1 className="reveal" data-delay="60">Lexi<span className="h-word">Match AI</span></h1>
              <p className="cs-lead reveal" data-delay="120">Finding the "why" behind the "what", next-generation explainable AI for legal precedent discovery, matching legal reasoning rather than keywords.</p>

              <div className="cs-metabar reveal" data-delay="180">
                <div className="m"><div className="k">Domain</div><div className="v">Legal Tech · Research</div></div>
                <div className="m"><div className="k">Type</div><div className="v">Two-stage retrieval engine</div></div>
                <div className="m"><div className="k">Benchmark</div><div className="v">COLIEE 2025 corpus</div></div>
                <div className="m"><div className="k">Property</div><div className="v">Explainable · Facet-aware</div></div>
              </div>
            </div>
          </section>

          {/* ABSTRACT */}
          <section style={{ padding: "50px 0 20px" } as React.CSSProperties}>
            <div className="container">
              <div className="cs-abstract reveal">
                <span className="k">Abstract</span>
                <p>LexiMatch AI is an advanced, two-stage legal case-retrieval framework built by CodeREM Labs to find truly analogous precedents by matching <strong>legal reasoning, not surface keywords</strong>. It automatically breaks complex judgments into structured facets, <strong>facts, issues, decisions and reasoning</strong>, and compares query facets directly against candidate facets for nuanced, like-for-like matching. Every result arrives with an interpretable rationale and a party-stance label, achieving <strong style={{ color: "var(--accent)" } as React.CSSProperties}>94%+</strong> candidate recall with <strong style={{ color: "var(--accent)" } as React.CSSProperties}>100%</strong> explainability.</p>
              </div>
            </div>
          </section>

          {/* 01 THE CHALLENGE */}
          <section className="cs-section">
            <div className="container cs-grid">
              <div className="section-head reveal" style={{ marginBottom: "0" } as React.CSSProperties}>
                <p className="eyebrow">01 · The challenge</p>
                <h2>Keyword search can't tell <em>what</em> from <em>why.</em></h2>
              </div>
              <div className="cs-body reveal" data-delay="100">
                <p>Legal professionals burn enormous billable hours sifting through irrelevant precedents returned by keyword search. Traditional lexical tools like <strong>BM25</strong> fail the moment a key legal argument is phrased differently, and modern vector-based neural search blurs the line between a case's facts and the judge's final decision, behaving like a <strong>black box</strong>.</p>
                <p>Standard tools simply cannot distinguish between <strong>what happened</strong> in a case and <strong>why it matters</strong>. The result is irrelevant hits, missed analogous precedents, and wasted effort, exactly the work that should be fastest for a machine.</p>
              </div>
            </div>
          </section>

          {/* 02 APPROACH */}
          <section className="cs-section">
            <div className="container cs-grid">
              <div className="section-head reveal" style={{ marginBottom: "0" } as React.CSSProperties}>
                <p className="eyebrow">02 · Approach</p>
                <h2>Structure the judgment, then match facet to facet.</h2>
                <p style={{ fontSize: "1.05rem" } as React.CSSProperties}>A two-stage pipeline: high-recall retrieval first, then fine-grained, explainable re-ranking across legal facets.</p>
              </div>
              <ol className="cs-steps reveal" data-delay="100">
                <li><span>Designed an <strong>Automated Document Structuring (Facetization)</strong> pipeline using a deterministic LLM to segment raw judgments into distinct facets: facts, issues, decision and reasoning.</span></li>
                <li><span>Built a <strong>Hybrid Search Architecture</strong> running parallel lexical (BM25) and semantic (dense ANN) search, fused with <strong>Reciprocal Rank Fusion</strong> into a high-recall candidate pool.</span></li>
                <li><span>Developed a <strong>Section-Aware Re-ranking</strong> stage scoring across structured facets, with query-wise <strong>Z-score normalization</strong> to fix the scale mismatch between keyword scores and cosine similarities.</span></li>
                <li><span>Implemented <strong>dynamically learned section weights</strong> that prioritize crucial elements, like legal reasoning, in the final ranking.</span></li>
                <li><span>Engineered <strong>explainable outputs</strong> returning the exact matched section plus an LLM-generated rationale, with <strong>party-stance detection</strong> labeling support, opposition or neutrality.</span></li>
              </ol>
            </div>
          </section>

          {/* 03 THE ENGINE */}
          <section className="cs-section">
            <div className="container">
              <div className="section-head reveal">
                <p className="eyebrow">03 · The engine</p>
                <h2>Like-for-like, <span className="h-word">reasoning to reasoning.</span></h2>
                <p>By moving beyond whole-document matching, LexiMatch compares specific query facets against candidate facets, so legal professionals can trust every result with full transparency.</p>
              </div>
              <div className="cs-caps" data-stagger>
                <div className="cs-cap">
                  <span className="n">01</span>
                  <h3>Facetization</h3>
                  <p>A deterministic LLM segments unstructured judgments into facts, issues, decision and reasoning, giving the engine the structure courts already think in.</p>
                </div>
                <div className="cs-cap">
                  <span className="n">02</span>
                  <h3>Facet-level matching</h3>
                  <p>Compares the reasoning of the query directly to the reasoning of a candidate, like-for-like, instead of blurring a whole document into one vector.</p>
                </div>
                <div className="cs-cap">
                  <span className="n">03</span>
                  <h3>Hybrid search</h3>
                  <p>Parallel BM25 lexical and dense ANN semantic search, combined with Reciprocal Rank Fusion to keep recall high without losing precision.</p>
                </div>
                <div className="cs-cap">
                  <span className="n">04</span>
                  <h3>Section-aware re-ranking</h3>
                  <p>Query-wise Z-score normalization reconciles keyword and cosine scales, while learned section weights push legal reasoning to the top.</p>
                </div>
                <div className="cs-cap">
                  <span className="n">05</span>
                  <h3>Explainable outputs</h3>
                  <p>Every result returns the exact matched section text alongside a concise, LLM-generated rationale, no black boxes.</p>
                </div>
                <div className="cs-cap">
                  <span className="n">06</span>
                  <h3>Party-stance detection</h3>
                  <p>Labels whether a retrieved case supports, opposes or is neutral to a specific party's position, context a citation alone can't give.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CALLOUT */}
          <section style={{ padding: "40px 0" } as React.CSSProperties}>
            <div className="container">
              <p className="cs-callout reveal">It bridges traditional search and modern AI, <em>high accuracy, with a rationale you can read.</em></p>
            </div>
          </section>

          {/* 04 RESULTS */}
          <section className="cs-section">
            <div className="container">
              <div className="section-head reveal">
                <p className="eyebrow">04 · Results &amp; impact</p>
                <h2>Recall, precision and trust, together.</h2>
              </div>
              <div className="cs-metrics" data-stagger>
                <div className="cs-metric">
                  <div className="big">94%+</div>
                  <h3>Candidate recall</h3>
                  <p>A high-recall candidate pool maintained via hybrid search with offline caching.</p>
                </div>
                <div className="cs-metric">
                  <div className="big">↑</div>
                  <h3>Precision gain</h3>
                  <p>Consistent gains over both strong lexical and state-of-the-art neural baselines on the COLIEE 2025 corpus.</p>
                </div>
                <div className="cs-metric">
                  <div className="big" style={{ fontSize: "clamp(1.9rem,4vw,2.9rem)" } as React.CSSProperties}>Sub-linear</div>
                  <h3>Scoring efficiency</h3>
                  <p>Offline section-level embeddings and ANN indexing drastically cut scoring operations and cost.</p>
                </div>
                <div className="cs-metric">
                  <div className="big">100%</div>
                  <h3>Explainability</h3>
                  <p>Every result includes the matched section text and an LLM-generated rationale with party-stance labels.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 05 ENGINEERING */}
          <section className="cs-section">
            <div className="container cs-grid">
              <div className="section-head reveal" style={{ marginBottom: "0" } as React.CSSProperties}>
                <p className="eyebrow">05 · Engineering</p>
                <h2>A retrieval stack tuned for law.</h2>
              </div>
              <div className="cs-body reveal" data-delay="100">
                <p>LexiMatch pairs a deterministic LLM facetizer with a hybrid retrieval core, BM25/Lucene for lexical signal and FAISS dense ANN for semantics, fused by Reciprocal Rank Fusion. A section-aware re-ranker with learned weights produces the final order, and an LLM rationale layer makes every decision legible. It is served from a FastAPI backend over PostgreSQL.</p>
                <div className="chips">
                  <span className="chip">Python</span><span className="chip">FastAPI</span><span className="chip">LLM (GPT-4)</span><span className="chip">BM25 / Lucene</span>
                  <span className="chip">Dense ANN (FAISS)</span><span className="chip">Reciprocal Rank Fusion</span><span className="chip">LangChain</span><span className="chip">PostgreSQL</span>
                </div>
              </div>
            </div>
          </section>

          {/* 06 OUTCOME */}
          <section className="cs-section">
            <div className="container cs-grid">
              <div className="section-head reveal" style={{ marginBottom: "0" } as React.CSSProperties}>
                <p className="eyebrow">06 · Outcome</p>
                <h2>Results lawyers can actually trust.</h2>
              </div>
              <div className="cs-body reveal" data-delay="100">
                <p>By matching legal reasoning facet-to-facet and explaining every match, LexiMatch AI delivers high-accuracy precedent discovery without the black box, backed by consistent precision gains over strong lexical and neural baselines on the <strong>COLIEE 2025</strong> benchmark.</p>
                <p>The result is a tool legal professionals can rely on: <strong>every result carries the section that triggered it, a clear rationale, and a party-stance label</strong>, full transparency, from query to citation.</p>
              </div>
            </div>
          </section>

          {/* CITATION */}
          <section style={{ padding: "10px 0 40px" } as React.CSSProperties}>
            <div className="container">
              <div className="cs-cite reveal">
                <span className="k">Cite this case study</span>
                <b>CodeREM Labs (2026).</b> LexiMatch AI: A two-stage, explainable facet-matching framework for legal precedent retrieval. <i>CodeREM Labs Product Case Studies.</i> Available at coderemlabs.com/portfolio.
              </div>
            </div>
          </section>

          {/* CTA */}
          <section style={{ paddingTop: "20px" } as React.CSSProperties}>
            <div className="container">
              <div className="cta-band reveal">
                <p className="eyebrow center">Need explainable AI you can defend?</p>
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
