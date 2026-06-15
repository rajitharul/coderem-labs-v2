import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="brand">
              <Logo id="logo-footer" />
              CodeREM Labs
            </Link>
            <p>
              Engineering excellence for modern businesses. We build software
              that delivers measurable results.
            </p>
            <a href="mailto:hello@coderemlabs.com" className="accent">
              hello@coderemlabs.com
            </a>
          </div>
          <div>
            <h4>Company</h4>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/insights">Insights</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/get-started">Get Started</Link>
          </div>
          <div>
            <h4>Services</h4>
            <Link href="/services">Enterprise Solutions</Link>
            <Link href="/services">Mobile Applications</Link>
            <Link href="/services">AI Automations</Link>
            <Link href="/services">AI Innovations</Link>
            <Link href="/services">Discovery &amp; Analysis</Link>
          </div>
          <div>
            <h4>Insights</h4>
            <Link href="/insights/medical-claims-ai">Medical Claims AI</Link>
            <Link href="/insights/enterprise-rag">Enterprise RAG Systems</Link>
            <Link href="/insights/custom-erp">Custom ERP Decisions</Link>
            <Link href="/insights/prototype-scope">14-Day Prototype Scope</Link>
          </div>
        </div>
      </div>
      <div className="footer-logo" data-footer-logo>
        CodeREM
      </div>
      <div className="container">
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} CodeREM Labs. All rights reserved.
          </span>
          <span>
            Sri Lanka / Global ·{" "}
            <a href="#" className="accent">
              LinkedIn
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
