import { Link } from "@tanstack/react-router";

/**
 * ca5ino Zašto Zato — brand mark v2
 * Wedge shape with rounded bottom-left corner and stroke outline.
 * `light={true}` → variant intended for dark surfaces (e.g. footer).
 * `light={false}` (default) → variant intended for light surfaces (e.g. header).
 */
export function Logo({ light = false, className = "h-12 w-auto" }: { light?: boolean; className?: string }) {
  const wedgeFill = light ? "#1C2040" : "#ffffff";
  const wedgeStroke = light ? "rgba(255,255,255,0.16)" : "#3A4795";
  const primaryText = light ? "#ffffff" : "#3A4795";
  const fiveStrokeFill = light ? "#1C2040" : "#ffffff";
  const fiveStroke = light ? "#ffffff" : "#3A4795";
  const subText = light ? "rgba(255,255,255,0.55)" : "#5F6470";

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
          fill={wedgeFill}
          stroke={wedgeStroke}
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
          fill={primaryText}
        >
          ca
          <tspan fill={fiveStrokeFill} stroke={fiveStroke} strokeWidth={2.5} paintOrder="stroke">
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
          fill={subText}
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
          fill={subText}
        >
          Zato
        </text>
      </svg>
    </Link>
  );
}
