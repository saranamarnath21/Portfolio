"use client";

import { motion } from "framer-motion";
import StrengthCard from "./StrengthCard";
import { strengths } from "@/data/portfolio";
import { staggerContainer, viewportOnce } from "@/lib/motion";

export default function SelectedStrengths() {
  return (
    <section className="container-page pb-8 md:pb-10">
      <p className="mb-6 text-xs font-medium uppercase tracking-[0.18em] text-[#59D2E7]">
        Selected Strengths
      </p>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {strengths.map((s) => (
          <StrengthCard key={s.title} icon={s.icon} title={s.title} copy={s.copy} />
        ))}
      </motion.div>
    </section>
  );
}
