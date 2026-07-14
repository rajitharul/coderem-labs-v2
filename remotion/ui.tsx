import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { C, GRAIN, MESH, fontFamily, label } from "./theme";

/* Motion primitives.

   The whole system is critically damped (damping 200 → no overshoot, no
   bounce). Things arrive and settle; nothing springs past its mark. That is
   the difference between "instrument" and "advertisement", and it's the reason
   these read as precise rather than playful. */

export const useIn = (at: number, dur = 18) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return spring({
    frame: frame - at,
    fps,
    durationInFrames: dur,
    config: { damping: 200, stiffness: 140, mass: 0.7 },
  });
};

/* Fade+rise from a progress value. Small travel — 14px, not 60px. */
export const rise = (p: number, px = 14): React.CSSProperties => ({
  opacity: p,
  transform: `translateY(${(1 - p) * px}px)`,
});

/* Global fade at the tail so the clip loops back to its empty state cleanly. */
export const useOutro = (fade = 22) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  return interpolate(
    frame,
    [durationInFrames - fade, durationInFrames - 1],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
};

/* Count a number up to its final value, holding it afterwards. */
export const useCount = (at: number, to: number, dur = 26) => {
  const p = useIn(at, dur);
  return to * p;
};

export const money = (n: number) =>
  n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export const int = (n: number) => Math.round(n).toLocaleString("en-US");

/* ---------------------------------------------------------------- surfaces */

/* The page's background: off-white, pastel mesh, spray grain. Everything sits
   on this so the video and the page share one substrate. */
export const Backdrop: React.FC<{ children?: React.ReactNode; plain?: boolean }> = ({
  children,
  plain,
}) => (
  <AbsoluteFill style={{ backgroundColor: plain ? C.surface : C.bg, fontFamily }}>
    {!plain && (
      <AbsoluteFill style={{ backgroundImage: MESH, backgroundSize: "100% 100%" }} />
    )}
    {/* Lighter than the site's 0.85: full-frame grain reads as sensor noise on
        video, and noise is the one thing a video codec cannot compress. */}
    <AbsoluteFill
      style={{
        backgroundImage: GRAIN,
        backgroundSize: "180px 180px",
        opacity: plain ? 0.22 : 0.4,
      }}
    />
    {children}
  </AbsoluteFill>
);

export const Label: React.FC<{
  children: React.ReactNode;
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}> = ({ children, size = 18, color = C.ink, style }) => (
  <div style={{ ...label, fontSize: size, color, ...style }}>{children}</div>
);

/* Hairline rule — 1px at render scale, which is what keeps the frames feeling
   drawn rather than blurred. */
export const Rule: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <div style={{ height: 1, background: C.line, width: "100%", ...style }} />
);

/* A slim caption strip along the bottom of the landscape scenes. */
export const Caption: React.FC<{ at: number; children: React.ReactNode }> = ({
  at,
  children,
}) => {
  const p = useIn(at);
  return (
    <div
      style={{
        position: "absolute",
        left: 72,
        bottom: 56,
        fontFamily,
        fontSize: 26,
        fontWeight: 500,
        color: C.muted,
        letterSpacing: "-0.01em",
        ...rise(p, 10),
      }}
    >
      {children}
    </div>
  );
};
