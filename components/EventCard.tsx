"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUpItem } from "@/lib/motion";

export default function EventCard({
  title,
  location,
  copy,
  image,
  imageAlt,
}: {
  title: string;
  location?: string;
  copy: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <motion.article
      variants={fadeUpItem}
      className="card-border overflow-hidden rounded-2xl bg-[#091B26]/60"
    >
      <div className="relative aspect-[16/10]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-base font-semibold text-[#F3F6F7]">
          {title}
          {location && <span className="text-[#718692]"> · {location}</span>}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#A9B8C1]">{copy}</p>
      </div>
    </motion.article>
  );
}
