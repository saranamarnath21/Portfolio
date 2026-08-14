"use client";

import { motion } from "framer-motion";
import { whatIBring } from "@/data/portfolio";
import Icon from "./Icon";
import { staggerContainer, fadeUpItem, viewportOnce } from "@/lib/motion";

export default function WhatIBring() {
  return (
    <motion.aside
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="card-border h-fit rounded-2xl bg-[#091B26]/60 p-6 md:sticky md:top-24 md:p-7"
    >
      <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-[#F3F6F7]">
        What I bring
      </h3>
      <ul className="divide-y divide-white/5">
        {whatIBring.map((item) => (
          <motion.li key={item.title} variants={fadeUpItem} className="flex gap-3.5 py-4 first:pt-0 last:pb-0">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#25B7D3]/40 text-[#59D2E7]">
              <Icon name={item.icon} className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold text-[#F3F6F7]">{item.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-[#A9B8C1]">{item.copy}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.aside>
  );
}
