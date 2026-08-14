"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ExperienceEntry } from "@/data/portfolio";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="card-border overflow-hidden rounded-2xl bg-[#091B26]/60"
    >
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr]">
        <div className="relative aspect-[4/3] md:aspect-auto">
          <Image
            src={entry.image}
            alt={entry.imageAlt}
            fill
            sizes="(min-width: 768px) 280px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="p-6 md:p-7">
          <div className="mb-3 flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-md border border-[#25B7D3]/40 text-xs font-semibold text-[#59D2E7]">
              {entry.index}
            </span>
            <h3 className="text-lg font-semibold text-[#F3F6F7] md:text-xl">
              {entry.company}
            </h3>
          </div>

          <p className="text-sm text-[#59D2E7]">
            {entry.role}
            {entry.dates && <span className="text-[#718692]"> · {entry.dates}</span>}
          </p>

          {entry.meta && (
            <p className="mt-2 text-sm text-[#718692]">{entry.meta}</p>
          )}

          <ul className="mt-4 space-y-2.5">
            {entry.bullets.map((b, i) => (
              <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-[#A9B8C1] md:text-[15px]">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#25B7D3]" aria-hidden="true" />
                {b}
              </li>
            ))}
          </ul>

          {entry.chips && entry.chips.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {entry.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-[#25B7D3]/30 bg-[#0B202C] px-3 py-1.5 text-xs text-[#A9B8C1]"
                >
                  {chip}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
