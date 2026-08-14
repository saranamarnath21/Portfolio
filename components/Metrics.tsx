"use client";

import { motion } from "framer-motion";
import { metrics } from "@/data/portfolio";
import Icon from "./Icon";
import { staggerContainer, fadeUpItem, viewportOnce } from "@/lib/motion";

export default function Metrics() {
  return (
    <section className="container-page pb-10 md:pb-14">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="card-border grid grid-cols-2 divide-y divide-white/5 rounded-2xl bg-[#091B26]/60 md:grid-cols-4 md:divide-x md:divide-y-0"
      >
        {metrics.map((m) => (
          <motion.div
            key={m.label}
            variants={fadeUpItem}
            className="flex flex-col items-start gap-3 p-6 md:items-center md:text-center md:p-8"
          >
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#25B7D3]/40 text-[#59D2E7]">
              <Icon name={m.icon} className="h-6 w-6" />
            </span>
            <div>
              <p className="text-lg font-semibold leading-snug text-[#F3F6F7] md:text-xl">
                {m.value}
              </p>
              <p className="mt-1 text-sm text-[#718692]">{m.label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
