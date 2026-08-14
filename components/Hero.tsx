"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowUpRight, MessageCircle } from "lucide-react";
import { hero } from "@/data/portfolio";
import BackgroundGrid from "./BackgroundGrid";
import { fadeUp, staggerContainer, fadeUpItem } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <BackgroundGrid variant="hero" />

      <div className="container-page relative grid grid-cols-1 items-center gap-12 pb-6 pt-10 md:pb-8 md:pt-14 lg:grid-cols-[1.3fr_0.85fr] lg:gap-10 lg:pt-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="order-1 lg:order-1"
        >
          <motion.p
            variants={fadeUpItem}
            className="mb-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[#A9B8C1]"
          >
            <MapPin className="h-3.5 w-3.5 text-[#59D2E7]" strokeWidth={1.6} aria-hidden="true" />
            {hero.meta}
          </motion.p>

          <motion.h1
            variants={fadeUpItem}
            className="text-[42px] font-semibold leading-[1.07] tracking-tight text-[#F3F6F7] sm:text-5xl md:text-6xl lg:whitespace-nowrap lg:text-[56px] xl:text-[64px]"
          >
            {hero.headline.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={fadeUpItem}
            className="mt-6 max-w-xl text-base leading-relaxed text-[#A9B8C1] md:text-lg"
          >
            {hero.paragraph}
          </motion.p>

          <motion.div variants={fadeUpItem} className="mt-8 flex flex-wrap gap-3">
            <Link
              href={hero.primaryCta.href}
              className="focus-ring group inline-flex items-center gap-2 rounded-lg bg-[#25B7D3] px-5 py-3 text-sm font-medium text-[#06121B] transition-colors hover:bg-[#59D2E7]"
            >
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="focus-ring card-border inline-flex items-center gap-2 rounded-lg bg-[#091B26] px-5 py-3 text-sm font-medium text-[#F3F6F7] transition-colors hover:border-[#3AB4D2]/70"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
              {hero.secondaryCta.label}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="order-2 flex justify-center lg:order-2 lg:justify-end lg:-mr-4 xl:-mr-8"
        >
          {/*
            No card border / rounded rectangle here on purpose: the source
            photo already has the offshore rig + turbine background baked
            in, so the goal is to let it dissolve into the page rather than
            sit on top of it as a framed photo. The mask is a single radial
            gradient (max browser support, no mask-composite needed) centred
            slightly above middle so the face/shoulders stay fully opaque
            and the fade is concentrated on the bottom, left and side edges.
          */}
          <div
            className="relative aspect-[4/5] w-full max-w-[480px]"
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 68% 76% at 54% 30%, #000 42%, transparent 90%)",
              maskImage:
                "radial-gradient(ellipse 68% 76% at 54% 30%, #000 42%, transparent 90%)",
            }}
          >
            <Image
              src={hero.portrait}
              alt="Saran Amarnath, Project Engineer"
              fill
              priority
              sizes="(min-width: 1024px) 480px, 85vw"
              className="object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
