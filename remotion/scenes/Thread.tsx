import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { C, GRAIN, MESH, fontFamily, num } from "../theme";
import { Backdrop, useIn, useOutro, rise, money, int } from "../ui";

/* Scene 1: "The live thread".

   A customer orders 200 units; the agent answers with the customer's own tier
   price, live stock, a confirmed delivery window and the total, then places the
   order and attaches the invoice.

   Layout note: every bubble is mounted from frame 0 and revealed with opacity,
   so the column never reflows. The "agent is thinking" beat is carried by the
   header subtitle flipping to "typing…", which is what WhatsApp actually does,
   and costs zero layout shift. */

const T = {
  card: 0,
  q1: 22,
  type1: [52, 94] as const,
  a1: 94,
  rows: [108, 120, 132, 144],
  a1tail: 164,
  q2: 198,
  type2: [224, 258] as const,
  a2: 258,
  file: 276,
};

const Bubble: React.FC<{
  at: number;
  side: "in" | "out";
  children: React.ReactNode;
}> = ({ at, side, children }) => {
  const p = useIn(at);
  const out = side === "out";
  return (
    <div
      style={{
        alignSelf: out ? "flex-end" : "flex-start",
        maxWidth: "85%",
        padding: "18px 22px",
        borderRadius: 22,
        [out ? "borderBottomRightRadius" : "borderBottomLeftRadius"]: 7,
        background: out ? C.ink : C.surface,
        color: out ? C.surface : C.ink,
        border: out ? "none" : `1px solid ${C.line}`,
        boxShadow: "0 1px 2px rgba(12,16,22,.07), 0 8px 24px rgba(12,16,22,.05)",
        fontSize: 26,
        lineHeight: 1.5,
        fontWeight: 500,
        letterSpacing: "-0.01em",
        ...rise(p, 12),
      }}
    >
      {children}
    </div>
  );
};

/* One line of the structured order payload: label left, value right. */
const Row: React.FC<{ at: number; k: string; v: React.ReactNode }> = ({ at, k, v }) => {
  const p = useIn(at, 16);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: 20,
        fontSize: 22,
        ...rise(p, 8),
      }}
    >
      <span style={{ color: C.muted, fontWeight: 500 }}>{k}</span>
      <span style={{ ...num, fontSize: 22, color: C.ink }}>{v}</span>
    </div>
  );
};

const Time: React.FC<{ t: string; out?: boolean }> = ({ t, out }) => (
  <div
    style={{
      marginTop: 8,
      fontSize: 16,
      fontWeight: 500,
      textAlign: "right",
      opacity: 0.5,
      color: out ? C.surface : C.ink,
    }}
  >
    {t}
    {out ? " ✓✓" : ""}
  </div>
);

export const Thread: React.FC = () => {
  const frame = useCurrentFrame();
  const card = useIn(T.card, 22);
  const outro = useOutro();

  const typing =
    (frame >= T.type1[0] && frame < T.type1[1]) ||
    (frame >= T.type2[0] && frame < T.type2[1]);

  // Values resolve rather than appear: they count to their final figure.
  const price = useIn(T.rows[0], 24) * 412;
  const stock = useIn(T.rows[1], 24) * 1340;
  const total = useIn(T.rows[3], 28) * 82400;
  const tail = useIn(T.a1tail, 16);

  return (
    <Backdrop>
      <AbsoluteFill
        style={{
          padding: 54,
          opacity: outro,
          transform: `scale(${0.985 + card * 0.015})`,
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            borderRadius: 40,
            overflow: "hidden",
            border: `1px solid ${C.lineStrong}`,
            background: C.surface,
            boxShadow: "0 1px 2px rgba(12,16,22,.06), 0 40px 90px rgba(12,16,22,.14)",
            opacity: card,
          }}
        >
          {/* header */}
          <div
            style={{
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              gap: 18,
              padding: "22px 28px",
              background: C.ink,
              color: C.surface,
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.16)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 21,
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              AC
            </div>
            <div>
              <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.01em" }}>
                Apex Distributors
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 9,
                  fontSize: 18,
                  fontWeight: 500,
                  opacity: 0.75,
                  marginTop: 3,
                }}
              >
                {typing ? (
                  <>
                    <Dots />
                    <span>typing…</span>
                  </>
                ) : (
                  <>
                    <span
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: C.live,
                      }}
                    />
                    <span>Business account · online</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* thread: mesh and grain as separate layers so the grain can sit low
              enough not to tile into visible blotches at this scale */}
          <div
            style={{
              flex: 1,
              position: "relative",
              overflow: "hidden",
              backgroundColor: C.bg,
            }}
          >
            <AbsoluteFill
              style={{ backgroundImage: MESH, backgroundSize: "100% 100%", opacity: 0.5 }}
            />
            <AbsoluteFill
              style={{ backgroundImage: GRAIN, backgroundSize: "180px 180px", opacity: 0.14 }}
            />
            <AbsoluteFill
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                gap: 12,
                padding: "26px 24px",
              }}
            >
              <Bubble at={T.q1} side="out">
                Need 200 units of SKU-4471 to the Colombo warehouse by Friday
                <Time t="09:14" out />
              </Bubble>

              <Bubble at={T.a1} side="in">
                <strong style={{ fontWeight: 700 }}>200 × SKU-4471</strong>, Hex Bolt
                M12, galvanised. Checked against your account:
                <div
                  style={{
                    marginTop: 14,
                    paddingTop: 14,
                    borderTop: `1px solid ${C.line}`,
                    display: "flex",
                    flexDirection: "column",
                    gap: 9,
                  }}
                >
                  <Row at={T.rows[0]} k="Your tier price" v={`LKR ${money(price)}`} />
                  <Row at={T.rows[1]} k="Available now" v={`Colombo DC · ${int(stock)}`} />
                  <Row at={T.rows[2]} k="Friday delivery" v="Confirmed · 08:00–12:00" />
                  <Row at={T.rows[3]} k="Order total" v={`LKR ${money(total)}`} />
                </div>
                <div style={{ ...rise(tail, 6), marginTop: 14 }}>
                  This is within your credit limit. Shall I place it?
                </div>
                <Time t="09:14" />
              </Bubble>

              <Bubble at={T.q2} side="out">
                Yes please. Same PO reference as last month
                <Time t="09:15" out />
              </Bubble>

              <Bubble at={T.a2} side="in">
                Done. Order <strong style={{ fontWeight: 700 }}>#SO-88213</strong> placed
                against PO <strong style={{ fontWeight: 700 }}>APX-2291</strong>.
                <File at={T.file} />
                <Time t="09:15" />
              </Bubble>
            </AbsoluteFill>
          </div>

          {/* composer */}
          <div
            style={{
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: 18,
              background: C.bg,
              borderTop: `1px solid ${C.line}`,
            }}
          >
            <div
              style={{
                flex: 1,
                padding: "16px 22px",
                borderRadius: 100,
                background: C.surface,
                border: `1px solid ${C.line}`,
                color: C.faint,
                fontSize: 20,
                fontWeight: 500,
              }}
            >
              Message
            </div>
            <div
              style={{
                width: 54,
                height: 54,
                borderRadius: "50%",
                background: C.ink,
                color: C.surface,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 23,
              }}
            >
              →
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </Backdrop>
  );
};

/* Three dots, pulsing on a stagger, the only "playful" motion in the set, and
   it earns it by being the universal signal that a reply is coming. */
const Dots: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <span style={{ display: "inline-flex", gap: 5 }}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: C.surface,
            opacity: 0.35 + 0.65 * (0.5 + 0.5 * Math.sin((frame - i * 3) / 3.2)),
          }}
        />
      ))}
    </span>
  );
};

/* Its own row: inline-flex let it wrap into the sentence and mangled the line
   breaks. */
const File: React.FC<{ at: number }> = ({ at }) => {
  const p = useIn(at, 16);
  return (
    <div style={{ marginTop: 14, ...rise(p, 8) }}>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 11,
          padding: "12px 16px",
          border: `1px solid ${C.line}`,
          borderRadius: 13,
          background: "rgba(255,255,255,0.7)",
          fontSize: 20,
          fontWeight: 600,
          fontFamily,
        }}
      >
        <span style={{ width: 13, height: 17, borderRadius: 3, background: C.ink }} />
        Invoice-SO-88213.pdf
      </div>
    </div>
  );
};
