type Variant = "hero" | "radar" | "ship" | "turbine" | "grid";

export default function BackgroundGrid({
  variant = "grid",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.07]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={`grid-${variant}`} width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#59D2E7" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${variant})`} />
      </svg>

      {(variant === "hero" || variant === "radar") && (
        <svg
          className="absolute -right-24 -top-24 h-[560px] w-[560px] opacity-[0.14] md:h-[720px] md:w-[720px]"
          viewBox="0 0 720 720"
          fill="none"
        >
          {[110, 190, 270, 350].map((r) => (
            <circle
              key={r}
              cx="360"
              cy="360"
              r={r}
              stroke="#25B7D3"
              strokeWidth="1"
            />
          ))}
          <line x1="0" y1="360" x2="720" y2="360" stroke="#25B7D3" strokeWidth="1" />
          <line x1="360" y1="0" x2="360" y2="720" stroke="#25B7D3" strokeWidth="1" />
          <circle cx="360" cy="360" r="4" fill="#59D2E7" />
        </svg>
      )}

      {variant === "ship" && (
        <svg
          className="absolute bottom-0 left-1/2 h-[220px] w-[900px] -translate-x-1/2 opacity-[0.1]"
          viewBox="0 0 900 220"
          fill="none"
        >
          <path
            d="M60 150 L840 150 L780 210 L120 210 Z"
            stroke="#59D2E7"
            strokeWidth="1.4"
          />
          <line x1="450" y1="150" x2="450" y2="30" stroke="#59D2E7" strokeWidth="1.4" />
          <path d="M450 40 L620 95 L450 130" stroke="#59D2E7" strokeWidth="1.2" />
          <line x1="0" y1="180" x2="900" y2="180" stroke="#25B7D3" strokeWidth="0.8" strokeDasharray="2 10" />
        </svg>
      )}

      {variant === "turbine" && (
        <svg
          className="absolute right-10 top-10 h-[260px] w-[160px] opacity-[0.12]"
          viewBox="0 0 160 260"
          fill="none"
        >
          <line x1="80" y1="260" x2="80" y2="60" stroke="#59D2E7" strokeWidth="1.4" />
          <circle cx="80" cy="60" r="4" fill="#59D2E7" />
          <line x1="80" y1="60" x2="30" y2="20" stroke="#59D2E7" strokeWidth="1.2" />
          <line x1="80" y1="60" x2="130" y2="30" stroke="#59D2E7" strokeWidth="1.2" />
          <line x1="80" y1="60" x2="90" y2="120" stroke="#59D2E7" strokeWidth="1.2" />
        </svg>
      )}
    </div>
  );
}
