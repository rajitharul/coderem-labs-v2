/* Shared design tokens for the remOPS motion graphics.
   Deliberately mirrors app/globals.css so the rendered video reads as part of
   the page rather than an embed dropped into it: same off-white, same black
   ink, same spray-grain and pastel mesh behind non-white areas. */

import { loadFont } from "@remotion/google-fonts/Inter";

/* Scoped to the weights and subset actually used. Unscoped, this fires 126
   font requests per render and slows every frame down for nothing. */
export const { fontFamily } = loadFont("normal", {
  weights: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const C = {
  bg: "#f0f6f8", // --bg-2
  surface: "#ffffff", // --surface
  ink: "#000000", // --text / --accent
  muted: "rgba(0,0,0,0.55)",
  faint: "rgba(0,0,0,0.32)",
  line: "rgba(12,16,22,0.12)", // --border
  lineStrong: "rgba(12,16,22,0.24)", // --border-strong
  frost: "rgba(255,255,255,0.55)", // --frost
  live: "#25d366", // the one green, "online", same as the page
  risk: "#dc2626", // the one red, reserved for at-risk / exception
} as const;

/* --grain: the spray-paint speckle used across the site. */
export const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='0 0 0 0.45 0.75 1'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.85'/%3E%3C/svg%3E")`;

/* --tint-glow: the pastel blue + pink mesh behind non-white areas. */
export const MESH = [
  "radial-gradient(120% 120% at 0% 0%, rgba(168,200,240,0.78), transparent 60%)",
  "radial-gradient(110% 110% at 100% 0%, rgba(246,196,222,0.74), transparent 62%)",
  "radial-gradient(125% 125% at 100% 100%, rgba(176,206,242,0.62), transparent 62%)",
  "radial-gradient(125% 125% at 16% 106%, rgba(246,200,224,0.56), transparent 60%)",
].join(", ");

/* Type scale. Labels are uppercase + letterspaced (the site's "mono" role,
   which is really just Inter at a smaller size). */
export const label = {
  fontFamily,
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase" as const,
  color: C.ink,
};

export const num = {
  fontFamily,
  fontVariantNumeric: "tabular-nums" as const,
  fontWeight: 700,
  letterSpacing: "-0.02em",
};
