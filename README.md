# coderem-labs-v2

CodeREM Labs marketing site — Next.js 15 (App Router, TypeScript).

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Structure

- `app/` — routes (home, about, services, how-it-works, get-started, `portfolio/*` case studies, `insights/*` articles) plus `globals.css`
- `components/` — shared UI: `Logo` (standard animated brand mark), `Header`, `Footer`, `Motion` (GSAP + Lenis scroll system), `ScrollProgress`
- `logo-export/` — source-of-truth logo assets (animated/static SVG, PNG)
- `public/` — fonts and logo files served as-is

The standard logo lives in `components/Logo.tsx` and is used in the header, footer, About page, favicon (`app/icon.svg`), and Open Graph image.
