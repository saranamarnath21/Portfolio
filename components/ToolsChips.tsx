"use client";

import { motion } from "framer-motion";
import {
  Star,
  Circle,
  Box,
  Wind,
  Mic,
  BarChart2,
  LineChart,
  Activity,
  BarChart3,
  type LucideIcon,
} from "lucide-react";
import { tools } from "@/data/portfolio";
import { staggerContainer, fadeUpItem, viewportOnce } from "@/lib/motion";

// Small inline brand-style marks for tools that don't have a neutral
// line-icon equivalent (MATLAB, Python, AutoCAD). Kept as simple flat
// shapes so they sit well inside a small chip alongside lucide icons.
function MatlabMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path d="M2 17 L7 9 L11 15 L15 5 L19 17 L22 12" fill="none" stroke="#E86B2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PythonMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path d="M12 2c-3 0-4 1.4-4 3v2h4v1H6c-1.7 0-3 1.4-3 4s1.3 4 3 4h1.5v-2.3c0-2 1.6-3.3 3.5-3.3h4c1.7 0 3-1.4 3-3V5c0-1.7-1.4-3-3-3h-3z" fill="#4B8BBE" />
      <path d="M12 22c3 0 4-1.4 4-3v-2h-4v-1h6c1.7 0 3-1.4 3-4s-1.3-4-3-4h-1.5v2.3c0 2-1.6 3.3-3.5 3.3h-4c-1.7 0-3 1.4-3 3v3c0 1.7 1.4 3 3 3h3z" fill="#FFD43B" />
    </svg>
  );
}

function AutoCadMark() {
  return (
    <span className="flex h-4 w-4 items-center justify-center rounded-[3px] bg-[#E1362B] text-[9px] font-bold leading-none text-white">
      A
    </span>
  );
}

const toolIcons: Record<string, LucideIcon | (() => React.JSX.Element)> = {
  MATLAB: MatlabMark,
  Python: PythonMark,
  "STAR-CCM+": Star,
  AutoCAD: AutoCadMark,
  Maxsurf: Circle,
  Rhinoceros: Box,
  "ANSYS Fluent": Wind,
  "Hydrophone + AIS": Mic,
  Spectrograms: BarChart2,
  PSD: LineChart,
  "RMS SPL": Activity,
  "1/3-Octave Bands": BarChart3,
};

export default function ToolsChips() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="card-border rounded-2xl bg-[#091B26]/60 p-6 md:p-7"
    >
      <p className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[#59D2E7]">
        <span className="h-px w-6 bg-[#25B7D3]" aria-hidden="true" />
        Tools &amp; Methods
      </p>
      <div className="flex flex-wrap gap-2.5">
        {tools.map((tool) => {
          const Icon = toolIcons[tool];
          return (
            <motion.span
              key={tool}
              variants={fadeUpItem}
              className="flex items-center gap-2 rounded-full border border-[#25B7D3]/30 bg-[#0B202C] px-3.5 py-2 text-sm text-[#A9B8C1]"
            >
              {Icon && <Icon className="h-4 w-4 text-[#59D2E7]" aria-hidden="true" />}
              {tool}
            </motion.span>
          );
        })}
      </div>
    </motion.div>
  );
}
