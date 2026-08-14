import type { Metadata } from "next";
import Image from "next/image";
import { Landmark, Calendar, Users, Star, Trophy, Presentation } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import EventsGrid from "@/components/EventsGrid";
import ContactSection from "@/components/ContactSection";
import BackgroundGrid from "@/components/BackgroundGrid";
import { about, education, leadership, achievements } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "About | Saran Amarnath",
  description:
    "Naval architecture background, MSc at UCL, industry events and leadership behind the offshore project engineering work.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <BackgroundGrid variant="turbine" />
        <div className="container-page relative grid grid-cols-1 items-center gap-10 py-6 md:py-8 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionHeading eyebrow="About" heading={about.heading} copy={about.copy} size="lg" />
          <div className="relative order-first mx-auto aspect-[4/5] w-full max-w-[380px] overflow-hidden rounded-2xl card-border lg:order-last">
            <Image
              src={about.portrait}
              alt="Saran Amarnath"
              fill
              sizes="(min-width: 1024px) 380px, 70vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container-page pb-8 md:pb-10">
        <p className="mb-5 flex items-center gap-2 text-lg font-semibold text-[#F3F6F7]">
          <Landmark className="h-5 w-5 text-[#59D2E7]" strokeWidth={1.7} aria-hidden="true" />
          Education
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {education.map((e) => (
            <div key={e.school} className="card-border rounded-2xl bg-[#091B26]/60 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#25B7D3]/40 text-[#59D2E7]">
                  <Landmark className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold leading-snug text-[#F3F6F7]">{e.school}</h3>
              </div>
              <p className="mt-3 text-sm text-[#59D2E7]">{e.degree}</p>
              <p className="mt-1 text-sm text-[#718692]">{e.dates}</p>
              <p className="mt-2 text-sm text-[#A9B8C1]">{e.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-8 md:pb-10">
        <p className="mb-5 flex items-center gap-2 text-lg font-semibold text-[#F3F6F7]">
          <Calendar className="h-5 w-5 text-[#59D2E7]" strokeWidth={1.7} aria-hidden="true" />
          Events &amp; Industry Exposure
        </p>
        <EventsGrid />
      </section>

      <section className="container-page grid grid-cols-1 gap-4 pb-8 md:grid-cols-2 md:pb-10">
        <div className="card-border rounded-2xl bg-[#091B26]/60 p-6">
          <p className="mb-5 flex items-center gap-2 text-lg font-semibold text-[#F3F6F7]">
            <Users className="h-5 w-5 text-[#59D2E7]" strokeWidth={1.7} aria-hidden="true" />
            Leadership &amp; Service
          </p>
          <ul className="space-y-4">
            {leadership.map((item) => (
              <li key={item.label} className="text-sm text-[#A9B8C1]">
                <span className="font-semibold text-[#F3F6F7]">{item.label}</span>
                {item.label !== "Training" ? " · " : ": "}
                {item.detail}
              </li>
            ))}
          </ul>
        </div>

        <div className="card-border rounded-2xl bg-[#091B26]/60 p-6">
          <p className="mb-5 flex items-center gap-2 text-lg font-semibold text-[#F3F6F7]">
            <Star className="h-5 w-5 text-[#59D2E7]" strokeWidth={1.7} aria-hidden="true" />
            Achievements
          </p>
          <ul className="space-y-4">
            {achievements.map((item) => (
              <li key={item.label} className="flex items-start gap-3 text-sm text-[#A9B8C1]">
                {item.label === "Finalist" ? (
                  <Trophy className="mt-0.5 h-4 w-4 shrink-0 text-[#59D2E7]" strokeWidth={1.7} aria-hidden="true" />
                ) : (
                  <Presentation className="mt-0.5 h-4 w-4 shrink-0 text-[#59D2E7]" strokeWidth={1.7} aria-hidden="true" />
                )}
                <span>
                  <span className="font-semibold text-[#F3F6F7]">{item.label}</span> · {item.detail}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
