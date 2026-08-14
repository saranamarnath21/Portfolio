"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { positioning } from "@/data/portfolio";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function Positioning() {
  return (
    <section className="relative overflow-hidden py-6 md:py-8">
      <div className="container-page relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1fr]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="flex items-start gap-3">
            <span className="mt-3 h-px w-12 shrink-0 bg-[#25B7D3] md:w-16" aria-hidden="true" />
            <h2 className="text-3xl font-semibold leading-[1.15] tracking-tight text-[#F3F6F7] md:text-4xl">
              {positioning.eyebrow}
              <br />
              {positioning.heading}
            </h2>
          </div>

          <div className="mt-6 flex items-center gap-6">
            <svg
              aria-hidden="true"
              viewBox="0 0 120 120"
              className="h-24 w-24 shrink-0 opacity-70 md:h-28 md:w-28"
            >
              <circle cx="60" cy="60" r="57" stroke="#1E4B5C" strokeWidth="1" fill="none" />
              <circle cx="60" cy="60" r="40" stroke="#1E4B5C" strokeWidth="1" fill="none" />
              <circle cx="60" cy="60" r="22" stroke="#25B7D3" strokeWidth="1" fill="none" />
              <circle cx="60" cy="60" r="6" fill="#59D2E7" />
            </svg>
            <p className="max-w-xl text-base leading-relaxed text-[#A9B8C1] md:text-lg">
              {positioning.copy}
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative h-[220px] w-full md:h-[300px]"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 58% 60% at 60% 45%, #000 30%, transparent 88%)",
            maskImage:
              "radial-gradient(ellipse 58% 60% at 60% 45%, #000 30%, transparent 88%)",
          }}
        >
          <Image
            src="/images/hero/ship-lineart.jpg"
            alt=""
            fill
            aria-hidden="true"
            className="object-contain object-right"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
