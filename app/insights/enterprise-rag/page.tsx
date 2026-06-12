import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RAG Systems for Enterprise Knowledge Search | CodeREM Labs Insights",
  description: "A practical guide to building retrieval-augmented generation systems that make enterprise knowledge searchable, explainable and governed.",
};

export default function Page() {
  return (
    <>
      <section className="hero article-hero" style={{ minHeight: "auto", padding: "150px 0 40px" } as React.CSSProperties}>
            <div className="orbs"><span className="orb a"></span></div>
            <div className="container">
              <p className="article-meta reveal"><Link href="/insights" style={{ color: "var(--accent)" } as React.CSSProperties}>Insights</Link> <span className="sep">/</span> <span className="cat">RAG Systems</span> <span className="sep">·</span> <span>5 min read</span></p>
              <h1 className="reveal" data-delay="60">RAG Systems for <span className="h-word">Enterprise</span> Knowledge Search</h1>
              <p className="lead reveal" data-delay="120">A practical guide to building retrieval-augmented generation systems that make enterprise knowledge searchable, explainable and governed.</p>
            </div>
          </section>

          <section style={{ padding: "30px 0 90px" } as React.CSSProperties}>
            <div className="container">
              <div className="prose reveal">
                <p>Every enterprise is sitting on more knowledge than anyone can read, wikis, tickets, contracts, policies, past projects. The promise of a large language model is that you can finally <em>ask</em> that knowledge a question. The risk is that a raw LLM will answer confidently from its training data instead of your data, and you'll have no way to tell the difference.</p>
                <p><strong>Retrieval-Augmented Generation (RAG)</strong> closes that gap. Instead of trusting the model to "know," you retrieve the relevant passages from your own corpus and ask the model to answer <em>from those passages</em>, with citations. Done well, RAG turns a black box into a searchable, explainable, governed system. Done badly, it's a confident liar with extra steps.</p>

                <h2>What RAG actually is</h2>
                <p>RAG has two halves. <strong>Retrieval</strong> finds the most relevant chunks of your knowledge for a given question. <strong>Generation</strong> hands those chunks to an LLM and asks it to compose an answer grounded in them. The model contributes language and synthesis; your data contributes truth.</p>
                <p>This separation is the whole point. It means you can update knowledge without retraining a model, trace every answer back to a source, and restrict what each user is allowed to see.</p>

                <h2>The pipeline, stage by stage</h2>

                <h3>1. Ingestion &amp; chunking</h3>
                <p>Documents are split into passages small enough to be precise but large enough to carry context. Chunking strategy matters more than people expect, split on semantic boundaries (sections, headings) rather than arbitrary character counts, and keep metadata (source, date, access level) attached to every chunk.</p>

                <h3>2. Embeddings &amp; the index</h3>
                <p>Each chunk is converted into a vector embedding and stored in a vector index for fast nearest-neighbour search. This is what lets a query like "what's our refund policy for enterprise plans" find the right passage even if it never uses the word "refund."</p>

                <h3>3. Hybrid retrieval</h3>
                <p>Pure semantic search misses exact terms (product codes, names, acronyms); pure keyword search misses paraphrase. The robust answer is <strong>hybrid retrieval</strong>, run lexical (BM25) and semantic search in parallel and fuse the results. It's the same principle that drives our <Link href="/portfolio/leximatch">LexiMatch</Link> retrieval engine.</p>

                <h3>4. Generation with citations</h3>
                <p>The retrieved passages, plus the question, go to the LLM with an instruction to answer only from the provided context and to cite which passage supports each claim. If the context doesn't contain the answer, the correct response is "I don't know", not a guess.</p>

                <blockquote>A good RAG answer is one you can verify in two clicks. If you can't see the source, you can't trust the system.</blockquote>

                <h2>Searchable, explainable, governed</h2>
                <p>Those three words are the difference between a demo and a system an enterprise can deploy.</p>
                <ul>
                  <li><strong>Searchable</strong>, hybrid retrieval and good chunking make the right knowledge findable, even across messy, heterogeneous sources.</li>
                  <li><strong>Explainable</strong>, every answer carries citations to the exact passages it used, so users can verify and auditors can trace.</li>
                  <li><strong>Governed</strong>, access control travels with the data. Retrieval respects who is asking, so the model can never surface a document the user isn't allowed to read.</li>
                </ul>

                <div className="callout-box">
                  <span className="k">Governance is not optional</span>
                  <p>The fastest way to fail a security review is to build RAG that retrieves across everything and filters at the end. Enforce permissions <strong>at retrieval time</strong>, filter the candidate set by the user's access before anything reaches the model. A passage the user can't see should never enter the prompt.</p>
                </div>

                <h2>Evaluate before you trust</h2>
                <p>RAG quality is measurable. Build a small evaluation set of real questions with known good answers, and track two things: did retrieval surface the right passages (recall), and did the answer stay faithful to them (groundedness)? Most "the AI is wrong" complaints are actually retrieval failures, fix the search before you blame the model.</p>

                <h2>Common pitfalls</h2>
                <ul>
                  <li>Chunking blindly on character count and shredding the context the answer needs.</li>
                  <li>Skipping hybrid retrieval and missing exact-match terms.</li>
                  <li>Letting the model answer without citations, you lose explainability entirely.</li>
                  <li>Bolting on access control at the end instead of enforcing it during retrieval.</li>
                </ul>

                <h2>Key takeaways</h2>
                <ol>
                  <li>Retrieve first, generate second, ground every answer in your own corpus.</li>
                  <li>Use hybrid (lexical + semantic) retrieval; chunk on meaning, keep metadata.</li>
                  <li>Always cite sources, and let the system say "I don't know."</li>
                  <li>Enforce permissions at retrieval time, and evaluate retrieval and groundedness continuously.</li>
                </ol>
              </div>

              <div className="prose" style={{ marginTop: "50px" } as React.CSSProperties}>
                <div className="cta-band reveal">
                  <p className="eyebrow center">Sitting on knowledge no one can find?</p>
                  <h2 style={{ margin: "0 0 18px" } as React.CSSProperties}>Let's make it searchable and safe.</h2>
                  <div className="cta-actions">
                    <Link href="/get-started" className="btn btn-primary">Start Your Project <span className="btn-arrow">→</span></Link>
                    <Link href="/services" className="btn btn-ghost">Our AI Services</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </>
  );
}
