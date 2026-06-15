"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/* Reusable live UI gallery for case studies. Renders real HTML screens
   (served from /public) as live, browser-framed previews; clicking a screen
   opens a fullscreen, interactive viewer with prev/next.
   Pass `base` (the public folder, e.g. "/portfolio/mso-care/ui") and the list
   of `screens` ({ file, title }).
   `layout="grid"` (default) tiles every screen; `layout="carousel"` shows a
   coverflow with one screen centred and neighbours peeking at the sides,
   auto-advancing — better when you want to feature just a few. */

export type UIScreen = { file: string; title: string };

export default function UIShowcase({
  base,
  screens,
  layout = "grid",
}: {
  base: string;
  screens: UIScreen[];
  layout?: "grid" | "carousel";
}) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<number | null>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = screens.length;

  // Scale each fixed 1280-wide screen down to its rendered tile width.
  // Re-query + re-measure after layout settles (double rAF) so the wider
  // carousel stage gets the right scale and the frame fills it, not just a
  // corner. Guard against transient zero widths keeping the small default.
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const DESIGN_W = 1280;
    const apply = () => {
      grid.querySelectorAll<HTMLElement>(".ui-stage").forEach((s) => {
        const w = s.clientWidth;
        if (w > 0) s.style.setProperty("--ui-scale", String(w / DESIGN_W));
      });
    };
    apply();
    const raf = requestAnimationFrame(() => requestAnimationFrame(apply));
    const ro = new ResizeObserver(apply);
    grid.querySelectorAll<HTMLElement>(".ui-stage").forEach((s) => ro.observe(s));
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [layout, n]);

  const move = useCallback(
    (dir: number) => setOpen((i) => (i === null ? i : (i + dir + n) % n)),
    [n]
  );
  const step = useCallback((dir: number) => setActive((a) => (a + dir + n) % n), [n]);

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

  // carousel auto-advance (pauses on hover / when the lightbox is open)
  useEffect(() => {
    if (layout !== "carousel" || paused || open !== null || n <= 1) return;
    const id = setInterval(() => setActive((a) => (a + 1) % n), 4200);
    return () => clearInterval(id);
  }, [layout, paused, open, n]);

  const lb = open === null ? null : screens[open];

  const framedScreen = (s: UIScreen) => (
    <>
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
    </>
  );

  return (
    <>
      {layout === "carousel" ? (
        <div
          className="ui-carousel"
          ref={gridRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="ui-cstage">
            {screens.map((s, i) => {
              // signed distance from the active slide, wrapped to the shorter way round
              let d = i - active;
              if (d > n / 2) d -= n;
              if (d < -n / 2) d += n;
              const abs = Math.abs(d);
              const hidden = abs > 1;
              const style: React.CSSProperties = {
                transform: `translate(-50%, -50%) translateX(${d * 52}%) rotateY(${-d * 22}deg) scale(${abs === 0 ? 1 : 0.82})`,
                opacity: hidden ? 0 : abs === 1 ? 0.6 : 1,
                zIndex: 10 - abs,
                pointerEvents: hidden ? "none" : "auto",
                filter: abs === 0 ? "none" : "brightness(0.94)",
              };
              return (
                <button
                  key={s.file}
                  className={`ui-tile ui-cslide${abs === 0 ? " is-active" : ""}`}
                  style={style}
                  aria-hidden={hidden}
                  tabIndex={hidden ? -1 : 0}
                  onClick={() => (abs === 0 ? setOpen(i) : setActive(i))}
                  aria-label={abs === 0 ? `Open ${s.title}` : `Show ${s.title}`}
                >
                  {framedScreen(s)}
                </button>
              );
            })}
          </div>

          <div className="ui-cnav">
            <button className="ui-cnav-arrow" onClick={() => step(-1)} aria-label="Previous screen">‹</button>
            <div className="ui-cdots" role="tablist">
              {screens.map((s, i) => (
                <button
                  key={s.file}
                  className={`ui-cdot${i === active ? " is-active" : ""}`}
                  onClick={() => setActive(i)}
                  aria-label={s.title}
                  aria-selected={i === active}
                  role="tab"
                />
              ))}
            </div>
            <button className="ui-cnav-arrow" onClick={() => step(1)} aria-label="Next screen">›</button>
          </div>
        </div>
      ) : (
        <div className="ui-grid" ref={gridRef} data-stagger>
          {screens.map((s, i) => (
            <button key={s.file} className="ui-tile" onClick={() => setOpen(i)} aria-label={`Open ${s.title}`}>
              {framedScreen(s)}
            </button>
          ))}
        </div>
      )}

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
