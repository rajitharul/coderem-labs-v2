import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { C, fontFamily, num } from "../theme";
import { Backdrop, Label } from "../ui";

/* Scene 3 — "The integration weave".

   Deliberately built as a TRUE seamless loop: no entrance, no outro. Every
   moving thing has a period that divides evenly into the duration (300 frames /
   100-frame cycle = 3), so the loop point is mathematically invisible. An
   entrance animation would re-fire every 10 seconds and read as a glitch. */

const PERIOD = 100; // frames per packet cycle — 300 / 100 = 3 whole cycles
const CORE = { x: 960, y: 540 };
const IN_X = 470; // right edge of the system nodes
const OUT_X = 1450; // left edge of the WhatsApp node

const SYSTEMS = [
  { t: "SAP", s: "ERP", y: 300 },
  { t: "WMS", s: "Warehouse", y: 420 },
  { t: "TMS", s: "Transport", y: 540 },
  { t: "Salesforce", s: "CRM", y: 660 },
  { t: "Google Sheets", s: "The spreadsheet", y: 780 },
];

/* Cubic bezier evaluated by hand — no DOM measurement, so every frame is
   deterministic and identical across render threads. */
const bez = (t: number, p: number[][]) => {
  const u = 1 - t;
  const w = [u * u * u, 3 * u * u * t, 3 * u * t * t, t * t * t];
  return [
    w[0] * p[0][0] + w[1] * p[1][0] + w[2] * p[2][0] + w[3] * p[3][0],
    w[0] * p[0][1] + w[1] * p[1][1] + w[2] * p[2][1] + w[3] * p[3][1],
  ];
};

const curve = (y: number) => [
  [IN_X, y],
  [IN_X + 170, y],
  [CORE.x - 230, CORE.y],
  [CORE.x - 100, CORE.y],
];

export const Weave: React.FC = () => {
  const frame = useCurrentFrame();
  const phase = (frame % PERIOD) / PERIOD;
  const breathe = 1 + 0.015 * Math.sin(2 * Math.PI * phase);

  return (
    <Backdrop>
      {/* wiring + packets */}
      <AbsoluteFill>
        <svg width={1920} height={1080} viewBox="0 0 1920 1080">
          {SYSTEMS.map((s, i) => {
            const p = curve(s.y);
            const d = `M ${p[0][0]} ${p[0][1]} C ${p[1][0]} ${p[1][1]}, ${p[2][0]} ${p[2][1]}, ${p[3][0]} ${p[3][1]}`;
            return (
              <g key={s.t}>
                <path d={d} fill="none" stroke={C.lineStrong} strokeWidth={1.5} />
                {/* two packets per lane, half a cycle apart, staggered per lane */}
                {[0, 0.5].map((off) => {
                  const t = (phase + off + i * 0.11) % 1;
                  const [x, y] = bez(t, p);
                  return (
                    <g key={off}>
                      <circle cx={x} cy={y} r={13} fill={C.ink} opacity={0.08} />
                      <circle cx={x} cy={y} r={5} fill={C.ink} />
                    </g>
                  );
                })}
              </g>
            );
          })}

          {/* core → WhatsApp */}
          <line x1={CORE.x + 100} y1={CORE.y} x2={OUT_X} y2={CORE.y}
            stroke={C.lineStrong} strokeWidth={1.5} />
          {[0, 0.34, 0.67].map((off) => {
            const t = (phase + off) % 1;
            const x = CORE.x + 100 + t * (OUT_X - CORE.x - 100);
            return (
              <g key={off}>
                <circle cx={x} cy={CORE.y} r={13} fill={C.live} opacity={0.14} />
                <circle cx={x} cy={CORE.y} r={5} fill={C.live} />
              </g>
            );
          })}
        </svg>
      </AbsoluteFill>

      {/* heading */}
      <div style={{ position: "absolute", left: 72, top: 68 }}>
        <Label size={17} color={C.muted}>Integration</Label>
        <div style={{ fontFamily, fontSize: 44, fontWeight: 700, letterSpacing: "-0.03em", marginTop: 12 }}>
          It plugs into what you already run.
        </div>
      </div>

      {/* system nodes */}
      {SYSTEMS.map((s, i) => {
        // each lane's status dot pulses on the same 100-frame cycle
        const lit = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(2 * Math.PI * (phase - i * 0.11)));
        return (
          <div key={s.t}
            style={{
              position: "absolute", left: IN_X - 250, top: s.y - 38,
              width: 250, height: 76, borderRadius: 16,
              background: C.surface, border: `1px solid ${C.line}`,
              boxShadow: "0 1px 2px rgba(12,16,22,.05), 0 10px 26px rgba(12,16,22,.05)",
              display: "flex", alignItems: "center", gap: 14, padding: "0 20px",
              fontFamily,
            }}>
            <span style={{ width: 9, height: 9, borderRadius: "50%", background: C.ink, opacity: lit }} />
            <span>
              <span style={{ display: "block", fontSize: 23, fontWeight: 700, letterSpacing: "-0.01em" }}>{s.t}</span>
              <span style={{ display: "block", fontSize: 16, fontWeight: 500, color: C.muted }}>{s.s}</span>
            </span>
          </div>
        );
      })}

      {/* the core */}
      <div
        style={{
          position: "absolute", left: CORE.x - 100, top: CORE.y - 100,
          width: 200, height: 200, borderRadius: 44,
          background: C.ink, color: C.surface,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          transform: `scale(${breathe})`,
          boxShadow: "0 30px 70px rgba(12,16,22,.28)",
          fontFamily,
        }}
      >
        <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-0.02em" }}>
          rem<span style={{ fontWeight: 500 }}>OPS</span>
        </div>
        <div style={{ ...num, fontSize: 13, letterSpacing: "0.14em", opacity: 0.6, marginTop: 6 }}>
          AGENT CORE
        </div>
      </div>

      {/* WhatsApp */}
      <div
        style={{
          position: "absolute", left: OUT_X, top: CORE.y - 48,
          width: 300, height: 96, borderRadius: 20,
          background: C.surface, border: `1px solid ${C.lineStrong}`,
          boxShadow: "0 1px 2px rgba(12,16,22,.05), 0 14px 34px rgba(12,16,22,.06)",
          display: "flex", alignItems: "center", gap: 16, padding: "0 24px",
          fontFamily,
        }}
      >
        <span style={{ width: 12, height: 12, borderRadius: "50%", background: C.live }} />
        <span>
          <span style={{ display: "block", fontSize: 25, fontWeight: 700, letterSpacing: "-0.01em" }}>WhatsApp</span>
          <span style={{ display: "block", fontSize: 16, fontWeight: 500, color: C.muted }}>
            Your customers · your team
          </span>
        </span>
      </div>

      <div style={{ position: "absolute", left: 72, bottom: 56, fontFamily, fontSize: 26, fontWeight: 500, color: C.muted }}>
        Your fifteen-year-old system is not a blocker. It is just an integration.
      </div>
    </Backdrop>
  );
};
