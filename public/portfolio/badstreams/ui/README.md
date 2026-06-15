# Badstreams — Portfolio Screens

Self-contained UI screens from **Badstreams**, an enforced overlay ad-delivery platform for Kick streamers. Built on the project's real design system (pure black + white + Yuzu `#FED766`, Gasoek One display type, hard offset drop-shadows, sharp borders). **All data is mocked** — no backend, no Django, no auth.

## Open

Open `index.html` in a browser for the gallery, or any screen directly:

| File | Screen | Role |
|---|---|---|
| `landing.html` | Public landing page | Marketing / brand |
| `admin-analytics.html` | Proof-of-play analytics | Admin |
| `admin-campaigns.html` | Campaigns dashboard | Admin |
| `streamer-browse.html` | Campaign browse | Streamer |

Cross-links between pages work, so you can click through the whole flow.

## Notes

- `design.css` is a copy of the live project's design system (`static/css/design.css`).
- External CDNs are used at runtime: Google Fonts, Tailwind (CDN), Chart.js, and `picsum.photos` / `pravatar.cc` for placeholder imagery. An internet connection is needed for full fidelity.
- `admin-analytics.html` generates heartbeat strips and the screenshot gallery in JS, and renders the concurrent-viewers chart with Chart.js. Click any screenshot for a full-screen lightbox (ESC to close).

## Screenshot tips

For clean portfolio captures, use a wide viewport (≥1440px) so the sidebar layout and KPI bands render at full width. Browser full-page screenshot (DevTools → "Capture full size screenshot") works well for the landing and analytics pages.
