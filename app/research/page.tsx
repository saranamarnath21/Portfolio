import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ResearchFeatured from "@/components/ResearchFeatured";
import ResearchHeroMap from "@/components/ResearchHeroMap";
import ProjectsGrid from "@/components/ProjectsGrid";
import ToolsChips from "@/components/ToolsChips";
import { researchIntro, projects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Research & Projects | Saran Amarnath",
  description:
    "Design, simulation, acoustic analysis and applied problem-solving across shipping, offshore engineering and sustainable maritime systems.",
};

export default function ResearchPage() {
  return (
    <div className="container-page py-8 md:py-12">
      <div className="relative min-h-[200px] md:min-h-[260px]">
        <ResearchHeroMap />
        <div className="relative max-w-xl">
          <SectionHeading
            eyebrow="Projects & Research"
            heading={researchIntro.heading}
            copy={researchIntro.copy}
            size="lg"
          />
        </div>
      </div>

      <div className="mt-6">
        <ResearchFeatured />
      </div>

      <div className="mt-8">
        <ProjectsGrid projects={projects} />
      </div>

      <div className="mt-8">
        <ToolsChips />
      </div>
    </div>
  );
}
