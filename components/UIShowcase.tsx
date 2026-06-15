"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/* Reusable live UI gallery for case studies. Renders a grid of real HTML
   screens (served from /public) as live, browser-framed previews; clicking a
   screen opens a fullscreen, interactive viewer with prev/next.
   Pass `base` (the public folder, e.g. "/portfolio/mso-care/ui") and the list
   of `screens` ({ file, title }). */

export type UIScreen = { file: string; title: string };

export default function UIShowcase({ base, screens }: { base: string; screens: UIScreen[] }) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<number | null>(null);
  const n = screens.length;

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

  const move = useCallback(
    (dir: number) => setOpen((i) => (i === null ? i : (i + dir + n) % n)),
    [n]
  );

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

  const lb = open === null ? null : screens[open];

  return (
    <>
      <div className="ui-grid" ref={gridRef} data-stagger>
        {screens.map((s, i) => (
          <button key={s.file} className="ui-tile" onClick={() => setOpen(i)} aria-label={`Open ${s.title}`}>
            <div className="ui-tile-bar">
              <span className="ui-dots"><i></i><i></i><i></i></span>
              <span className="ui-tile-title">{s.title}</span>
              <span className="ui-tile-open">⤢</span>
            </div>
            <div className="ui-stage">
              <iframe
                className="ui-frame"
                src={`${base}/${s.file}`}
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
              <span className="ui-lb-counter">{String(open + 1).padStart(2, "0")} / {n}</span>
              <div className="ui-lb-actions">
                <a href={`${base}/${lb.file}`} target="_blank" rel="noopener noreferrer" className="ui-lb-btn" title="Open in new tab">↗</a>
                <button className="ui-lb-btn" onClick={() => setOpen(null)} aria-label="Close">✕</button>
              </div>
            </div>
            <iframe key={lb.file} className="ui-lb-frame" src={`${base}/${lb.file}`} title={`${lb.title} (fullscreen)`} />
          </div>
        </div>
      )}
    </>
  );
}
