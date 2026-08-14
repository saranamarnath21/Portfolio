"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import type { ProjectEntry } from "@/data/portfolio";
import { staggerContainer, viewportOnce } from "@/lib/motion";

export default function ProjectsGrid({ projects }: { projects: ProjectEntry[] }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      {projects.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </motion.div>
  );
}
