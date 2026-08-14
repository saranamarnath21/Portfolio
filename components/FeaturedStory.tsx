"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { shellCrux } from "@/data/portfolio";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function FeaturedStory() {
  return (
    <section className="container-page pb-20 md:pb-28">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="card-border overflow-hidden rounded-2xl bg-[#091B26]/60"
      >
        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr_1.2fr]">
          <div className="flex flex-row items-center justify-center gap-3 p-6 md:flex-col md:justify-center md:gap-3 md:border-r md:border-white/5">
            <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white md:h-14 md:w-14">
              <Image
                src={shellCrux.logoImage}
                alt=""
                fill
                aria-hidden="true"
                sizes="56px"
                className="object-contain p-1.5"
              />
            </span>
            <span className="text-base font-semibold leading-snug text-[#F3F6F7] md:text-center md:text-lg">
              {shellCrux.logoLabel}
            </span>
          </div>

          <div className="relative min-h-[160px] md:min-h-[180px]">
            <Image
              src={shellCrux.image}
              alt={`${shellCrux.company} offshore platform`}
              fill
              sizes="(min-width: 768px) 30vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center p-6 md:p-8 md:pl-8">
            <div className="mb-1 flex items-center justify-between gap-3">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#59D2E7]">
                {shellCrux.tag}
              </p>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#25B7D3]/40 text-[#59D2E7]">
                <Award className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
              </span>
            </div>
            <h3 className="text-lg font-semibold leading-snug text-[#F3F6F7] md:text-xl">
              {shellCrux.heading}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#A9B8C1]">
              {shellCrux.copy}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
