import { Link } from "@tanstack/react-router";

export function Logo({ light = false, className = "h-12 w-auto" }: { light?: boolean; className?: string }) {
  const wedgeFill = light ? "#ffffff" : "#3A4795";
  const accentBar = "#FFC53D";
  const primaryText = light ? "#3A4795" : "#ffffff";
  const subText = light ? "#5F6470" : "rgba(255,255,255,0.52)";
  return (
    <Link to="/" aria-label="ca5ino Zašto Zato" className="inline-flex items-center">
      <svg viewBox="0 0 440 301" xmlns="http://www.w3.org/2000/svg" className={className} role="img">
        <path d="M 0,0 L 440,0 L 209,267 Q 180,301 135,301 L 0,301 Z" fill={wedgeFill} />
        <rect x="16" y="38" width="7" height="222" rx="3.5" fill={accentBar} />
        <text x="42" y="105" fontFamily="Rubik, Inter, sans-serif" fontWeight={900} fontSize={90} letterSpacing="-3" fill={primaryText}>
          ca<tspan fill="#FFC53D">5</tspan>ino
        </text>
        <text x="42" y="182" fontFamily="Rubik, Inter, sans-serif" fontWeight={900} fontSize={70} letterSpacing="1" fill={subText}>Zašto</text>
        <text x="42" y="255" fontFamily="Rubik, Inter, sans-serif" fontWeight={900} fontSize={70} letterSpacing="-3" fill={subText}>Zato</text>
      </svg>
    </Link>
  );
}
