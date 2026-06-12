# CodeREM Labs Logo Export

Standalone exports of the logo used in the About page "Our Story / Born from a Simple Belief" section. The original is not an image file — it is rendered in code by `src/components/ui/Logo.tsx` (an inline SVG animated with Framer Motion).

## Files

- **logo-static.svg** — non-animated version, waves frozen at their starting shape. Use for favicons, print, social images, or anywhere animation isn't wanted.
- **logo-animated.svg** — self-contained animated version (SMIL + CSS, no JavaScript needed). Works when opened in a browser, embedded inline in HTML, or used via `<img src="logo-animated.svg">`.

Both scale to any size (vector, 100×100 viewBox).

## How the original animation works

The logo has two animated parts:

1. **Brackets `[ ]`** (dark slate `#0f172a`, stroke width 6): drawn in with a stroke "pathLength" reveal over 0.8s, ease-out. The right bracket starts 0.2s after the left.
2. **Three waves** between the brackets, each a quadratic Bézier (`M20 y Q35 cy 50 y T80 y`) at 80% opacity with a Gaussian-blur glow filter:
   - Blue `#3b82f6`, width 3 — control point oscillates 40 ↔ 60, 3s loop
   - Teal `#2dd4bf`, width 2.5 — oscillates 30 ↔ 70, 3.5s loop
   - Indigo `#6366f1`, width 2 — oscillates 20 ↔ 80, 4s loop

   Each wave's `d` attribute morphs between an upward and downward curve forever (ease-in-out). The slightly different durations make the waves drift in and out of phase, giving the organic "breathing" effect.

Additionally, on the About page the whole logo block slides in from the right (`x: 20 → 0`, fade in) when scrolled into view, via Framer Motion `whileInView`.

## Note

Animated SVG `d`-morphing uses SMIL, supported in Chrome, Firefox, Safari, and Edge. The intro draw-in uses plain CSS animations. Neither runs inside contexts that rasterize SVGs (e.g., some email clients) — use the static version there.
