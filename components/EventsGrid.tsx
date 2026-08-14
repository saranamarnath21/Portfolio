"use client";

import { motion } from "framer-motion";
import EventCard from "./EventCard";
import { events } from "@/data/portfolio";
import { staggerContainer, viewportOnce } from "@/lib/motion";

export default function EventsGrid() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {events.map((e) => (
        <EventCard
          key={e.title}
          title={e.title}
          location={e.location}
          copy={e.copy}
          image={e.image}
          imageAlt={e.imageAlt}
        />
      ))}
    </motion.div>
  );
}
