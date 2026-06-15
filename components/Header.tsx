"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const MENU_LINKS = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      // hide the bar when scrolling down past its height, reveal on scroll up
      if (y > lastY && y > 120) setHidden(true);
      else if (y < lastY) setHidden(false);
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}${hidden && !open ? " header-hidden" : ""}`}>
        <div className="container nav">
          <Link href="/" className="brand">
            <Logo id="logo-header" />
            CodeREM Labs
          </Link>
          <div className="nav-cta">
            <Link href="/get-started" className="btn btn-primary">
              Get Started <span className="btn-arrow">→</span>
            </Link>
            <button
              className="menu-btn"
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span>Menu</span>
              <span className="menu-btn-ico">
                <i></i>
                <i></i>
              </span>
            </button>
          </div>
        </div>
        <nav id="site-menu" className="menu-panel" aria-hidden={!open}>
          <div className="menu-inner">
            {MENU_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={isActive(link.href) ? "active" : undefined}
                onClick={() => setOpen(false)}
              >
                <span className="menu-arrow">→</span>
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </nav>
      </header>
      <div className="menu-backdrop" onClick={() => setOpen(false)} />
    </>
  );
}
