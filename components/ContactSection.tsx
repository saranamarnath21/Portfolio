"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Mail, Briefcase } from "lucide-react";
import { contact, site } from "@/data/portfolio";
import { LinkedInIcon } from "./Footer";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function ContactSection() {
  return (
    <section id="contact" className="container-page scroll-mt-24 pb-20 md:pb-28">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="card-border grid grid-cols-1 overflow-hidden rounded-2xl bg-[#091B26]/60 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="p-8 md:p-10">
          <h2 className="text-3xl font-semibold leading-[1.12] tracking-tight text-[#F3F6F7] md:text-4xl">
            {contact.heading}
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-[#A9B8C1]">
            {contact.copy}
          </p>

          <ul className="mt-7 space-y-3 text-sm text-[#A9B8C1]">
            <li className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 text-[#59D2E7]" strokeWidth={1.7} aria-hidden="true" />
              {contact.location}
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 text-[#59D2E7]" strokeWidth={1.7} aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="focus-ring hover:text-[#F3F6F7]">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <LinkedInIcon className="h-4 w-4 text-[#59D2E7]" />
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring hover:text-[#F3F6F7]"
              >
                {site.linkedinLabel}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Briefcase className="h-4 w-4 text-[#59D2E7]" strokeWidth={1.7} aria-hidden="true" />
              {contact.availability}
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}`}
              className="focus-ring inline-flex items-center gap-2 rounded-lg bg-[#25B7D3] px-5 py-3 text-sm font-medium text-[#06121B] transition-colors hover:bg-[#59D2E7]"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>

        <div className="relative min-h-[240px]">
          <Image
            src={contact.image}
            alt="Tower Bridge, London, at dusk"
            fill
            quality={95}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover object-[50%_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06121B]/60 via-transparent to-transparent lg:bg-gradient-to-l" />
        </div>
      </motion.div>
    </section>
  );
}
