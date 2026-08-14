import { featuredResearch } from "@/data/portfolio";

// All values below are fixed (not random) so server and client markup
// always match exactly — this is a purely illustrative radar/AIS graphic,
// not real vessel-tracking data.

const radarRadii = [40, 80, 120, 160];

// Radiating dashed "vessel track" lines from the radar centre, each ending
// in a small triangular vessel marker. angle in degrees, length in px,
// typeIndex maps into featuredResearch.vesselTypes (Cargo/Tanker/Tug/Pilot).
const tracks = [
  { angle: 200, length: 210, typeIndex: 0 },
  { angle: 172, length: 170, typeIndex: 0 },
  { angle: 150, length: 130, typeIndex: 0 },
  { angle: 230, length: 150, typeIndex: 0 },
  { angle: 258, length: 190, typeIndex: 3 },
  { angle: 110, length: 140, typeIndex: 0 },
  { angle: 20, length: 120, typeIndex: 1 },
  { angle: 50, length: 160, typeIndex: 2 },
  { angle: 245, length: 90, typeIndex: 2 },
  { angle: 285, length: 110, typeIndex: 0 },
];

// A handful of loose, deterministic polygons standing in for a harbour /
// coastline silhouette on the right-hand side of the radar.
const landShapes = [
  "M430,40 L520,10 L610,60 L640,140 L560,180 L520,150 L470,180 L440,120 Z",
  "M470,180 L520,150 L560,180 L600,230 L560,300 L500,320 L460,270 Z",
  "M600,60 L680,30 L760,70 L780,160 L700,220 L640,180 L610,120 Z",
  "M500,320 L560,300 L620,340 L600,390 L520,400 L480,360 Z",
];

const dockLines = [
  "M540,120 L610,100",
  "M560,160 L640,150",
  "M520,230 L590,260",
  "M540,280 L610,300",
];

function Triangle({
  x,
  y,
  angle,
  color,
}: {
  x: number;
  y: number;
  angle: number;
  color: string;
}) {
  return (
    <polygon
      points="-5,-4 6,0 -5,4"
      fill={color}
      opacity={0.9}
      transform={`translate(${x}, ${y}) rotate(${angle})`}
    />
  );
}

export default function ResearchHeroMap() {
  const cx = 260;
  const cy = 190;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <svg
        className="absolute right-0 top-0 hidden h-full w-full max-w-[640px] opacity-80 sm:block"
        viewBox="0 0 800 400"
        fill="none"
        preserveAspectRatio="xMaxYMin meet"
      >
        {/* Harbour / coastline silhouette */}
        {landShapes.map((d, i) => (
          <path key={i} d={d} fill="#0F2733" stroke="#1B3644" strokeWidth="1" />
        ))}
        {dockLines.map((d, i) => (
          <path key={i} d={d} stroke="#1B3644" strokeWidth="1" />
        ))}

        {/* Radar rings + crosshair */}
        {radarRadii.map((r) => (
          <circle key={r} cx={cx} cy={cy} r={r} stroke="#1E4B5C" strokeWidth="1" fill="none" opacity="0.6" />
        ))}
        <line x1={cx - 200} y1={cy} x2={cx + 200} y2={cy} stroke="#1E4B5C" strokeWidth="1" opacity="0.5" />
        <line x1={cx} y1={cy - 190} x2={cx} y2={cy + 190} stroke="#1E4B5C" strokeWidth="1" opacity="0.5" />
        <circle cx={cx} cy={cy} r="14" stroke="#59D2E7" strokeWidth="1.5" fill="none" />
        <circle cx={cx} cy={cy} r="3" fill="#59D2E7" />

        {/* Radiating vessel tracks */}
        {tracks.map((t, i) => {
          const rad = (t.angle * Math.PI) / 180;
          const ex = cx + Math.cos(rad) * t.length;
          const ey = cy + Math.sin(rad) * t.length;
          const color = featuredResearch.vesselTypes[t.typeIndex].color;
          return (
            <g key={i}>
              <line
                x1={cx}
                y1={cy}
                x2={ex}
                y2={ey}
                stroke={color}
                strokeWidth="1"
                strokeDasharray="3 4"
                opacity="0.7"
              />
              <Triangle x={ex} y={ey} angle={t.angle} color={color} />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
