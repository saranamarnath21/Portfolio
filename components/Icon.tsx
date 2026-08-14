import {
  User,
  DollarSign,
  Ship,
  GraduationCap,
  HardHat,
  Leaf,
  Activity,
  Users,
  ShieldCheck,
  BarChart3,
  Sailboat,
  Waves,
  Code2,
  Presentation,
  Compass,
  type LucideProps,
} from "lucide-react";

export const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  user: User,
  dollar: DollarSign,
  ship: Ship,
  graduation: GraduationCap,
  platform: Compass,
  hardhat: HardHat,
  leaf: Leaf,
  pulse: Activity,
  coordination: Users,
  shield: ShieldCheck,
  chart: BarChart3,
  tanker: Sailboat,
  sub: Waves,
  code: Code2,
  presentation: Presentation,
};

export default function Icon({
  name,
  className = "h-5 w-5",
  strokeWidth = 1.6,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = iconMap[name] ?? Compass;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
