import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ExperienceCard from "@/components/ExperienceCard";
import WhatIBring from "@/components/WhatIBring";
import { experience } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Experience | Saran Amarnath",
  description:
    "Offshore project delivery, shipyard engineering and marine research experience across Seatrium, PacMaK DB, DRDO NSTL and Hindustan Shipyard Limited.",
};

export default function ExperiencePage() {
  return (
    <div className="container-page py-8 md:py-12">
      <SectionHeading
        eyebrow="Experience"
        heading="Built from shipyards, marine research and offshore execution."
        copy="My path spans shipyard engineering, alternative-fuels research and large-scale offshore project delivery. Each role strengthened a different part of how I solve complex engineering problems."
        size="lg"
      />

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          {experience.map((entry) => (
            <ExperienceCard key={entry.company} entry={entry} />
          ))}
        </div>
        <WhatIBring />
      </div>
    </div>
  );
}
