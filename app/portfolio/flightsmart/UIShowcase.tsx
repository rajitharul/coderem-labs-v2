"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/* FlightSmart UI gallery — a grid of the real HTML screens (served from
   /public/portfolio/flightsmart/ui) shown as live browser-framed previews.
   Click a screen to open a fullscreen, interactive viewer with prev/next. */

const BASE = "/portfolio/flightsmart/ui";

const SCREENS: { file: string; title: string }[] = [
  { file: "agent_dashboard.html", title: "Agent Dashboard" },
  { file: "subagent_dashboard.html", title: "Sub-agent Dashboard" },
  { file: "admin_dashboard.html", title: "Admin Dashboard" },
  { file: "accountant_dashboard.html", title: "Accountant Dashboard" },
  { file: "wallet_dashboard.html", title: "Wallet Dashboard" },
  { file: "my_wallet.html", title: "My Wallet" },
  { file: "wallet_ledger.html", title: "Wallet Ledger" },
  { file: "payments_overview.html", title: "Payments Overview" },
  { file: "payout_list.html", title: "Payouts" },
  { file: "fund_request_list.html", title: "Fund Requests" },
  { file: "fund_request_detail.html", title: "Fund Request Detail" },
];
const N = SCREENS.length;

export default function UIShowcase() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<number | null>(null);

  // Scale each fixed 1280-wide screen down to its tile width.
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const DESIGN_W = 1280;
    const stages = Array.from(grid.querySelectorAll<HTMLElement>(".ui-stage"));
    const apply = () => {
      for (const s of stages) s.style.setProperty("--ui-scale", String(s.clientWidth / DESIGN_W));
    };
    apply();
    const ro = new ResizeObserver(apply);
    stages.forEach((s) => ro.observe(s));
    return () => ro.disconnect();
  }, []);

  const move = useCallback((dir: number) => setOpen((i) => (i === null ? i : (i + dir + N) % N)), []);

  // lightbox keyboard + scroll lock
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      else if (e.key === "ArrowRight") move(1);
      else if (e.key === "ArrowLeft") move(-1);
    };
    document.addEventListener("keydown", onKey);
    const prevOv = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOv;
    };
  }, [open, move]);

  const lb = open === null ? null : SCREENS[open];

  return (
    <>
      <div className="ui-grid" ref={gridRef} data-stagger>
        {SCREENS.map((s, i) => (
          <button key={s.file} className="ui-tile" onClick={() => setOpen(i)} aria-label={`Open ${s.title}`}>
            <div className="ui-tile-bar">
              <span className="ui-dots"><i></i><i></i><i></i></span>
              <span className="ui-tile-title">{s.title}</span>
              <span className="ui-tile-open">⤢</span>
            </div>
            <div className="ui-stage">
              <iframe
                className="ui-frame"
                src={`${BASE}/${s.file}`}
                title={s.title}
                loading="lazy"
                tabIndex={-1}
                scrolling="no"
              />
              <span className="ui-tile-overlay" />
            </div>
          </button>
        ))}
      </div>

      {lb && open !== null && (
        <div className="ui-lb" onClick={() => setOpen(null)}>
          <button className="ui-lb-arrow prev" onClick={(e) => { e.stopPropagation(); move(-1); }} aria-label="Previous">‹</button>
          <button className="ui-lb-arrow next" onClick={(e) => { e.stopPropagation(); move(1); }} aria-label="Next">›</button>
          <div className="ui-lb-card" onClick={(e) => e.stopPropagation()}>
            <div className="ui-lb-bar">
              <span className="ui-dots"><i></i><i></i><i></i></span>
              <span className="ui-lb-title">{lb.title}</span>
              <span className="ui-lb-counter">{String(open + 1).padStart(2, "0")} / {N}</span>
              <div className="ui-lb-actions">
                <a href={`${BASE}/${lb.file}`} target="_blank" rel="noopener noreferrer" className="ui-lb-btn" title="Open in new tab">↗</a>
                <button className="ui-lb-btn" onClick={() => setOpen(null)} aria-label="Close">✕</button>
              </div>
            </div>
            <iframe key={lb.file} className="ui-lb-frame" src={`${BASE}/${lb.file}`} title={`${lb.title} (fullscreen)`} />
          </div>
        </div>
      )}
    </>
  );
}
