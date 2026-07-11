import { Link } from "@tanstack/react-router";

/**
 * ca5ino Zašto Zato — brand mark v2 (from /mnt/user-uploads/ca5ino-logo_v2_1.html)
 *
 * Variants (mirror the brand identity sheet):
 * - "blue"  → Primary Lockup · Brand Blue  (used in the site header on light surfaces)
 * - "light" → Primary Lockup · Dark / Night (used in the footer on dark surfaces)
 *
 * `light` boolean prop preserved as a shortcut for existing call sites.
 */
type LogoVariant = "blue" | "light";

const PALETTE: Record<LogoVariant, {
  wedgeFill: string;
  wedgeStroke: string;
  primaryText: string;
  fiveStrokeFill: string;
  fiveStroke: string;
  subText: string;
}> = {
  // 03 — Primary Lockup · Brand Blue
  blue: {
    wedgeFill: "#3A4795",
    wedgeStroke: "rgba(255,255,255,0.18)",
    primaryText: "#ffffff",
    fiveStrokeFill: "#3A4795",
    fiveStroke: "#ffffff",
    subText: "rgba(255,255,255,0.6)",
  },
  // 02 — Primary Lockup · Dark / Night
  light: {
    wedgeFill: "#1C2040",
    wedgeStroke: "rgba(255,255,255,0.13)",
    primaryText: "#ffffff",
    fiveStrokeFill: "#1C2040",
    fiveStroke: "#ffffff",
    subText: "rgba(255,255,255,0.55)",
  },
};

export function Logo({
  variant,
  light = false,
  className = "h-12 w-auto",
}: {
  variant?: LogoVariant;
  light?: boolean;
  className?: string;
}) {
  const chosen: LogoVariant = variant ?? (light ? "light" : "blue");
  const c = PALETTE[chosen];

  return (
    <Link to="/" aria-label="ca5ino Zašto Zato" className="inline-flex items-center">
      <svg
        viewBox="0 0 440 340"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        role="img"
      >
        <path
          d="M 0,0 L 440,0 L 210,298 A 56,56 0 0,0 163,340 L 0,340 Z"
          fill={c.wedgeFill}
          stroke={c.wedgeStroke}
          strokeWidth={11}
          strokeLinejoin="miter"
        />
        <text
          x="42"
          y="110"
          fontFamily="Rubik, Inter, sans-serif"
          fontWeight={900}
          fontSize={90}
          letterSpacing="-5"
          fill={c.primaryText}
        >
          ca
          <tspan fill={c.fiveStrokeFill} stroke={c.fiveStroke} strokeWidth={2.5} paintOrder="stroke">
            5
          </tspan>
          ino
        </text>
        <text
          x="42"
          y="193"
          fontFamily="Rubik, Inter, sans-serif"
          fontWeight={900}
          fontSize={70}
          letterSpacing="-4"
          fill={c.subText}
        >
          Zašto
        </text>
        <text
          x="42"
          y="269"
          fontFamily="Rubik, Inter, sans-serif"
          fontWeight={900}
          fontSize={70}
          letterSpacing="-4"
          fill={c.subText}
        >
          Zato
        </text>
      </svg>
    </Link>
  );
}
