/* CodeREM Labs standard logo (ported from logo-export/logo-animated.svg).
   Brackets draw in via CSS (see .logo-mark in globals.css); the three waves
   morph forever via SMIL — no JavaScript needed, works in server components. */

type LogoProps = {
  size?: number | string;
  animated?: boolean;
  className?: string;
  /** Unique per instance so the glow filter id doesn't collide. */
  id?: string;
};

const WAVES = [
  {
    stroke: "#3b82f6",
    width: 3,
    d: "M20 50 Q35 40 50 50 T80 50",
    dur: "3s",
    values:
      "M20 50 Q35 40 50 50 T80 50;M20 50 Q35 60 50 50 T80 50;M20 50 Q35 40 50 50 T80 50",
  },
  {
    stroke: "#2dd4bf",
    width: 2.5,
    d: "M20 52 Q35 30 50 52 T80 52",
    dur: "3.5s",
    values:
      "M20 52 Q35 30 50 52 T80 52;M20 52 Q35 70 50 52 T80 52;M20 52 Q35 30 50 52 T80 52",
  },
  {
    stroke: "#6366f1",
    width: 2,
    d: "M20 54 Q35 20 50 54 T80 54",
    dur: "4s",
    values:
      "M20 54 Q35 20 50 54 T80 54;M20 54 Q35 80 50 54 T80 54;M20 54 Q35 20 50 54 T80 54",
  },
];

export default function Logo({
  size = 40,
  animated = true,
  className,
  id = "logo",
}: LogoProps) {
  const glowId = `glow-${id}`;
  const classes = ["logo-mark", animated ? "" : "logo-static", className]
    .filter(Boolean)
    .join(" ");

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
      role="img"
      aria-label="CodeREM Labs"
    >
      <g filter={`url(#${glowId})`}>
        {WAVES.map((w) => (
          <path
            key={w.stroke}
            className="logo-wave"
            d={w.d}
            stroke={w.stroke}
            strokeWidth={w.width}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {animated && (
              <animate
                attributeName="d"
                dur={w.dur}
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
                values={w.values}
              />
            )}
          </path>
        ))}
      </g>
      <path
        className="logo-bracket"
        d="M35 20 H20 V80 H35"
        stroke="#0f172a"
        strokeWidth="6"
        strokeLinecap="butt"
      />
      <path
        className="logo-bracket logo-bracket-right"
        d="M65 20 H80 V80 H65"
        stroke="#0f172a"
        strokeWidth="6"
        strokeLinecap="butt"
      />
      <defs>
        <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}
