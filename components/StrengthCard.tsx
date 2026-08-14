"use client";

import { motion } from "framer-motion";
import Icon from "./Icon";
import { fadeUpItem } from "@/lib/motion";

export default function StrengthCard({
  icon,
  title,
  copy,
}: {
  icon: string;
  title: string;
  copy: string;
}) {
  return (
    <motion.div
      variants={fadeUpItem}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="card-border rounded-2xl bg-[#091B26]/60 p-6 transition-colors hover:border-[#3AB4D2]/50"
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#25B7D3]/40 text-[#59D2E7]">
          <Icon name={icon} className="h-6 w-6" />
        </span>
        <h3 className="text-base font-semibold leading-snug text-[#F3F6F7] md:text-lg">{title}</h3>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-[#A9B8C1]">{copy}</p>
    </motion.div>
  );
}
