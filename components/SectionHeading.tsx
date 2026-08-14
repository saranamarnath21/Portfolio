"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function SectionHeading({
  eyebrow,
  heading,
  copy,
  align = "left",
  size = "md",
}: {
  eyebrow?: string;
  heading: string;
  copy?: string;
  align?: "left" | "center";
  size?: "md" | "lg";
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[#59D2E7]">
          <span className="h-px w-6 bg-[#25B7D3]" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-semibold tracking-tight text-[#F3F6F7] ${
          size === "lg"
            ? "text-4xl leading-[1.08] md:text-5xl lg:text-[56px]"
            : "text-3xl leading-[1.12] md:text-4xl"
        }`}
      >
        {heading}
      </h2>
      {copy && (
        <p className="mt-4 text-base leading-relaxed text-[#A9B8C1] md:text-lg">
          {copy}
        </p>
      )}
    </motion.div>
  );
}
