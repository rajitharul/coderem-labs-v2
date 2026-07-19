import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, Easing } from "remotion";
import { C, fontFamily, num } from "../theme";
import { Backdrop, Label, useIn, useOutro, rise, money } from "../ui";

/* Scene 4: "The setup sequence".

   Five phases of work complete while two counters run side by side: engineer
   hours climbing to 140, and the amount you've paid holding at $0.00. The whole
   argument of the product is that contrast, so the scene is built to make you
   watch both numbers at once. */

const PHASES = [
  { n: "01", t: "Discovery", s: "We map how you really operate", at: 34 },
  { n: "02", t: "Integration", s: "We wire it into your ERP, WMS and TMS", at: 86 },
  { n: "03", t: "Tailoring", s: "We teach it your rules and your vocabulary", at: 138 },
  { n: "04", t: "Go live", s: "Your verified WhatsApp business number", at: 190 },
  { n: "05", t: "We stay", s: "Your engineer keeps tuning it, for good", at: 242 },
];

const FILL = 46; // frames for one phase's rail to fill
const DONE = PHASES[4].at + FILL;

export const Setup: React.FC = () => {
  const frame = useCurrentFrame();
  const outro = useOutro();
  const head = useIn(0, 22);
  const stats = useIn(16, 22);
  const close = useIn(DONE + 16, 20);

  const hours = interpolate(frame, [PHASES[0].at, DONE], [0, 140], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });

  return (
    <Backdrop>
      <AbsoluteFill style={{ padding: 72, opacity: outro, flexDirection: "row", gap: 72 }}>
        {/* LEFT: the claim, and the two numbers that prove it */}
        <div style={{ width: 640, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={rise(head, 12)}>
            <Label size={17} color={C.muted}>Setup</Label>
            <div style={{ fontSize: 52, fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 1.1, marginTop: 16 }}>
              You don&apos;t get a login.<br />You get an engineer.
            </div>
          </div>

          <div style={{ display: "flex", gap: 24, marginTop: 48, ...rise(stats, 12) }}>
            <Stat k="Engineer hours invested" v={Math.round(hours).toString()} />
            <Stat k="What you’ve paid" v={`$${money(0)}`} />
          </div>

          <div
            style={{
              marginTop: 36,
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: "-0.01em",
              lineHeight: 1.45,
              ...rise(close, 10),
            }}
          >
            You go live before you pay us anything.
            <span style={{ color: C.muted, fontWeight: 500 }}>
              {" "}Then you pay only for what the agent actually does.
            </span>
          </div>
        </div>

        {/* RIGHT: the work itself */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 26 }}>
          {PHASES.map((ph) => {
            const p = interpolate(frame, [ph.at, ph.at + FILL], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.33, 0, 0.15, 1),
            });
            const live = frame >= ph.at;
            const complete = p >= 1;
            return (
              <div key={ph.n} style={{ opacity: live ? 1 : 0.3, transition: "none" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 18 }}>
                  <span style={{ ...num, fontSize: 20, color: C.muted, width: 34 }}>{ph.n}</span>
                  <span style={{ fontSize: 30, fontWeight: 700, letterSpacing: "-0.02em", flex: 1 }}>
                    {ph.t}
                  </span>
                  <Check show={complete} />
                </div>
                <div style={{ fontSize: 21, fontWeight: 500, color: C.muted, margin: "6px 0 12px", paddingLeft: 52 }}>
                  {ph.s}
                </div>
                <div style={{ height: 6, borderRadius: 4, background: C.line, marginLeft: 52, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${p * 100}%`, background: C.ink, borderRadius: 4 }} />
                </div>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </Backdrop>
  );
};

const Stat: React.FC<{ k: string; v: string }> = ({ k, v }) => (
  <div
    style={{
      flex: 1,
      background: C.surface,
      border: `1px solid ${C.line}`,
      borderRadius: 20,
      padding: "24px 26px",
      boxShadow: "0 1px 2px rgba(12,16,22,.05), 0 14px 34px rgba(12,16,22,.05)",
      fontFamily,
    }}
  >
    <div style={{ ...num, fontSize: 54, lineHeight: 1.05 }}>{v}</div>
    <div style={{ fontSize: 18, fontWeight: 500, color: C.muted, marginTop: 8 }}>{k}</div>
  </div>
);

const Check: React.FC<{ show: boolean }> = ({ show }) => (
  <span
    style={{
      width: 30,
      height: 30,
      borderRadius: "50%",
      background: show ? C.ink : "transparent",
      border: `1px solid ${show ? C.ink : C.line}`,
      color: C.surface,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 15,
      fontWeight: 700,
      opacity: show ? 1 : 0.5,
    }}
  >
    {show ? "✓" : ""}
  </span>
);
