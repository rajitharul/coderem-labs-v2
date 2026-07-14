import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, Easing } from "remotion";
import { C, num } from "../theme";
import { Backdrop, Label, useIn, useOutro, rise, Caption } from "../ui";

/* Scene 2 — "The exception co-pilot".

   The agent speaks first. A container stalls in customs; the ETA rolls forward
   140 minutes and two of the three orders riding on it flip to at-risk.

   The red is the only chromatic event in the whole set, which is the point:
   nothing else in this system is allowed to be red, so when it is, it means
   something. */

const X1 = 70;
const X2 = 514;
const X3 = 958;
const Y = 112;

const T = {
  panel: 0,
  bubble: 24,
  travel: [44, 122] as const,
  hold: 122,
  holdLabel: 142,
  eta: 176,
  roll: [204, 244] as const,
  chips: [226, 238] as const,
  caption: 268,
};

const clock = (mins: number) => {
  const h = Math.floor(mins / 60);
  const m = Math.round(mins % 60);
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
};

export const Exception: React.FC = () => {
  const frame = useCurrentFrame();
  const outro = useOutro();
  const panel = useIn(T.panel, 22);
  const bubble = useIn(T.bubble);
  const rail = useIn(14, 30);
  const holdP = useIn(T.hold, 14);
  const holdLabel = useIn(T.holdLabel, 16);
  const etaIn = useIn(T.eta, 18);

  // Container position: eases out of Port Klang and stops dead at customs.
  const cx = interpolate(frame, [T.travel[0], T.travel[1]], [X1, X2], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  // The ETA rolls rather than cuts — 14:20 → 16:40.
  const mins = interpolate(frame, [T.roll[0], T.roll[1]], [860, 1000], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });
  const late = frame >= T.roll[0];

  // Radar ping on the customs node, once a second.
  const since = frame - T.hold;
  const ping = since > 0 ? (since % 30) / 30 : -1;

  return (
    <Backdrop>
      <AbsoluteFill style={{ padding: 72, opacity: outro, flexDirection: "row", gap: 64 }}>
        {/* LEFT — the unprompted alert */}
        <div style={{ width: 620, display: "flex", flexDirection: "column", justifyContent: "center", ...rise(panel, 12) }}>
          <Label size={17} color={C.muted}>Exception · unprompted</Label>
          <div style={{ fontSize: 46, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.12, margin: "18px 0 34px" }}>
            It tells you before<br />the customer does.
          </div>

          <div
            style={{
              background: C.surface,
              border: `1px solid ${C.line}`,
              borderLeft: `4px solid ${C.ink}`,
              borderRadius: 22,
              borderBottomLeftRadius: 6,
              padding: "26px 28px",
              fontSize: 25,
              lineHeight: 1.55,
              fontWeight: 500,
              boxShadow: "0 1px 2px rgba(12,16,22,.06), 0 18px 44px rgba(12,16,22,.07)",
              ...rise(bubble, 14),
            }}
          >
            <Label size={14} style={{ marginBottom: 12 }}>remOPS Co-pilot · 07:02</Label>
            Container <strong style={{ fontWeight: 700 }}>MSKU-4471</strong> discharged at
            Colombo 06:12 and is held in customs. It carries stock for{" "}
            <strong style={{ fontWeight: 700 }}>3 open orders</strong>, 2 of which now
            breach their promised date.
          </div>
        </div>

        {/* RIGHT — the route and what it's carrying */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 40 }}>
          <div style={{ ...rise(rail, 10) }}>
            <Label size={16} color={C.muted} style={{ marginBottom: 10 }}>Container MSKU-4471</Label>
            <svg width="100%" viewBox="0 0 1028 190" style={{ overflow: "visible" }}>
              {/* legs */}
              <line x1={X1} y1={Y} x2={X2} y2={Y} stroke={C.lineStrong} strokeWidth={2}
                strokeDasharray={444} strokeDashoffset={444 * (1 - rail)} />
              <line x1={X2} y1={Y} x2={X3} y2={Y} stroke={C.line} strokeWidth={2}
                strokeDasharray={444} strokeDashoffset={444 * (1 - rail)} />

              {/* nodes */}
              {[
                { x: X1, t: "Port Klang", s: "Departed" },
                { x: X2, t: "Colombo Port", s: "Customs" },
                { x: X3, t: "Colombo DC", s: "Destination" },
              ].map((n, i) => {
                const isHold = i === 1;
                const alarm = isHold ? holdP : 0;
                return (
                  <g key={n.x} opacity={rail}>
                    {isHold && ping >= 0 && (
                      <circle cx={n.x} cy={Y} r={10 + ping * 34} fill="none"
                        stroke={C.risk} strokeWidth={2} opacity={(1 - ping) * 0.7} />
                    )}
                    <circle cx={n.x} cy={Y} r={9}
                      fill={isHold && alarm > 0.5 ? C.risk : C.ink} />
                    <text x={n.x} y={Y + 44} textAnchor="middle" fontSize={22} fontWeight={700}
                      fill={C.ink} letterSpacing="-0.01em">{n.t}</text>
                    <text x={n.x} y={Y + 72} textAnchor="middle" fontSize={18} fontWeight={500}
                      fill={C.muted}>{n.s}</text>
                  </g>
                );
              })}

              {/* the container itself */}
              <g transform={`translate(${cx}, ${Y - 46})`} opacity={rail}>
                <rect x={-26} y={-15} width={52} height={30} rx={4} fill={C.ink} />
                {[-13, 0, 13].map((o) => (
                  <line key={o} x1={o} y1={-10} x2={o} y2={10} stroke={C.surface}
                    strokeWidth={1.5} opacity={0.45} />
                ))}
              </g>

              {/* hold callout */}
              <g opacity={holdLabel} transform={`translate(${X2}, ${Y - 96})`}>
                <text textAnchor="middle" fontSize={19} fontWeight={700} fill={C.risk}
                  letterSpacing="0.1em">CUSTOMS HOLD</text>
                <text y={26} textAnchor="middle" fontSize={18} fontWeight={500} fill={C.muted}>
                  doc mismatch
                </text>
              </g>
            </svg>
          </div>

          {/* ETA + the orders riding on it */}
          <div style={{ display: "flex", gap: 44, alignItems: "flex-start", ...rise(etaIn, 10) }}>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
              <Label size={15} color={C.muted}>Orders on this container</Label>
              {[
                { id: "SO-88190", qty: "200 × SKU-4471", risk: T.chips[0] },
                { id: "SO-88204", qty: "60 × SKU-1180", risk: T.chips[1] },
                { id: "SO-88221", qty: "15 × SKU-9902", risk: null },
              ].map((o) => {
                const atRisk = o.risk !== null && frame >= o.risk;
                return (
                  <div key={o.id}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      gap: 18, padding: "16px 20px", borderRadius: 14,
                      background: C.surface, border: `1px solid ${atRisk ? C.risk : C.line}`,
                      fontSize: 22,
                    }}>
                    <span style={{ fontWeight: 700, letterSpacing: "-0.01em" }}>{o.id}</span>
                    <span style={{ color: C.muted, fontWeight: 500, flex: 1 }}>{o.qty}</span>
                    <span
                      style={{
                        ...num, fontSize: 15, letterSpacing: "0.1em", textTransform: "uppercase",
                        padding: "7px 13px", borderRadius: 100,
                        background: atRisk ? C.risk : "transparent",
                        color: atRisk ? C.surface : C.muted,
                        border: `1px solid ${atRisk ? C.risk : C.line}`,
                      }}>
                      {atRisk ? "At risk" : o.risk === null ? "Float" : "On time"}
                    </span>
                  </div>
                );
              })}
            </div>

            <div style={{ width: 260 }}>
              <Label size={15} color={C.muted}>Revised ETA</Label>
              <div style={{ ...num, fontSize: 92, lineHeight: 1.05, marginTop: 8, color: late ? C.risk : C.ink }}>
                {clock(mins)}
              </div>
              <div style={{ fontSize: 20, fontWeight: 500, color: C.muted, marginTop: 4 }}>
                was 14:20 · +1 working day
              </div>
            </div>
          </div>
        </div>
      </AbsoluteFill>
      <Caption at={T.caption}>Nobody asked it. It noticed.</Caption>
    </Backdrop>
  );
};
