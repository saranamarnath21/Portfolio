"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ProjectEntry } from "@/data/portfolio";
import Icon from "./Icon";
import { fadeUpItem } from "@/lib/motion";

export default function ProjectCard({ project }: { project: ProjectEntry }) {
  return (
    <motion.article
      variants={fadeUpItem}
      whileHover="hover"
      className="card-border group overflow-hidden rounded-2xl bg-[#091B26]/60 transition-colors duration-250 hover:border-[#3AB4D2]/60"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.div
          variants={{ hover: { scale: 1.03 } }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full w-full"
        >
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>
        {project.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-[#25B7D3] px-2.5 py-1 text-[11px] font-semibold text-[#06121B]">
            {project.badge}
          </span>
        )}
      </div>

      <div className="p-5 md:p-6">
        <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-md border border-[#25B7D3]/40 text-[#59D2E7]">
          <Icon name={project.icon} className="h-4 w-4" />
        </span>

        <motion.h3
          variants={{ hover: { x: 2 } }}
          transition={{ duration: 0.25 }}
          className="flex items-start justify-between gap-2 text-base font-semibold leading-snug text-[#F3F6F7]"
        >
          <span>{project.title}</span>
          <motion.span
            variants={{ hover: { opacity: 1, x: 0 } }}
            initial={{ opacity: 0, x: -4 }}
            transition={{ duration: 0.2 }}
            className="mt-0.5 shrink-0 text-[#59D2E7]"
          >
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
          </motion.span>
        </motion.h3>

        <p className="mt-2 text-sm leading-relaxed text-[#A9B8C1]">{project.copy}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#25B7D3]/30 bg-[#0B202C] px-2.5 py-1 text-xs text-[#A9B8C1]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
