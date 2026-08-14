"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AudioWaveform, Mic, Radar, Activity, ShieldCheck } from "lucide-react";
import { featuredResearch } from "@/data/portfolio";
import { fadeUp, viewportOnce } from "@/lib/motion";

const chipIcons = [Mic, Radar, Activity, ShieldCheck];

// Deterministic pseudo-values (not Math.random) so server/client markup matches exactly.
// These exist purely to render an illustrative chart shape; they are not measurements.
function wave(n: number, seedA: number, seedB: number) {
  return Array.from({ length: n }, (_, i) => {
    const v =
      0.5 +
      0.28 * Math.sin(i * seedA + seedB) +
      0.18 * Math.sin(i * seedA * 2.3 + seedB * 1.7);
    // Round to a fixed precision so server and client render identical
    // strings — tiny floating-point differences between JS engines were
    // causing a hydration mismatch on the SVG `points` attribute.
    return Math.round(v * 10000) / 10000;
  });
}

// 240 points (up from 120) plus a third, higher-frequency low-amplitude
// harmonic gives a visibly denser "signal" line instead of a smooth sine —
// closer to the density in the original reference — while staying fully
// deterministic (still not Math.random) so server/client markup matches.
function denseWave(n: number, seedA: number, seedB: number) {
  return Array.from({ length: n }, (_, i) => {
    const v =
      0.5 +
      0.26 * Math.sin(i * seedA + seedB) +
      0.16 * Math.sin(i * seedA * 2.3 + seedB * 1.7) +
      0.07 * Math.sin(i * seedA * 6.1 + seedB * 0.4);
    return Math.round(v * 10000) / 10000;
  });
}

const waveformPoints = denseWave(240, 0.55, 2.1);

const octaveBands = [
  20, 25, 31.5, 40, 50, 63, 80, 100, 125, 160, 200, 250, 315, 400, 500, 630,
  800, 1000, 1250, 1600, 2000, 2500, 3150, 4000, 5000, 6300, 8000, 10000,
  12500, 16000, 20000,
];
const octaveValues = wave(octaveBands.length, 0.4, 1.3).map((v) => 0.35 + v * 0.5);

export default function ResearchFeatured() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="card-border overflow-hidden rounded-2xl bg-[#091B26]/60"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr]">
        {/* Left: text + icon strip */}
        <div className="flex flex-col p-6 md:p-8">
          <p className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[#59D2E7]">
            <AudioWaveform className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
            {featuredResearch.tag}
          </p>
          <h3 className="text-xl font-semibold leading-snug text-[#F3F6F7] md:text-2xl">
            {featuredResearch.heading}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[#A9B8C1] md:text-base">
            {featuredResearch.copy}
          </p>

          <div className="mt-auto grid grid-cols-2 gap-x-2 gap-y-5 pt-8 sm:grid-cols-4">
            {featuredResearch.chips.map((label, i) => {
              const IconComp = chipIcons[i] ?? Mic;
              return (
                <div
                  key={label}
                  className={`flex flex-col items-center gap-2 px-2 text-center ${
                    i > 0 ? "sm:border-l sm:border-white/10" : ""
                  }`}
                >
                  <IconComp className="h-5 w-5 text-[#59D2E7]" strokeWidth={1.6} aria-hidden="true" />
                  <span className="text-[11px] leading-snug text-[#A9B8C1]">{label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: charts */}
        <div className="space-y-px bg-white/5 lg:border-l lg:border-white/5">
          {/* Spectrogram */}
          <div className="bg-[#06121B] p-5">
            <div className="mb-2 flex items-center justify-between text-[11px] text-[#718692]">
              <span>Spectrogram (0–20 kHz)</span>
              <span>dB re 1 µPa</span>
            </div>
            <div className="relative h-32 w-full overflow-hidden rounded-md md:h-40">
              <Image
                src="/images/research/spectrogram.jpg"
                alt="Spectrogram of hydrophone recording, 0–20 kHz"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Hydrophone Signal + Vessel Passage Summary */}
          <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-[1.4fr_1fr]">
            <div className="flex flex-col bg-[#06121B] p-5">
              <div className="mb-2 flex items-center justify-between text-[11px] text-[#718692]">
                <span>Hydrophone Signal</span>
                <span>Amplitude (Pa)</span>
              </div>
              <div className="flex flex-1 items-stretch gap-2">
                <div className="flex flex-col justify-between py-1 text-[9px] leading-none text-[#4d6675]">
                  <span>+1</span>
                  <span>0</span>
                  <span>-1</span>
                </div>
                <svg
                  viewBox="0 0 480 96"
                  className="h-24 w-full sm:h-28"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="hydrophoneFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#25B7D3" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#25B7D3" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* zero-line + top/bottom guides */}
                  <line x1="0" y1="8" x2="480" y2="8" stroke="#1E4B5C" strokeWidth="0.5" />
                  <line x1="0" y1="48" x2="480" y2="48" stroke="#1E4B5C" strokeWidth="0.5" />
                  <line x1="0" y1="88" x2="480" y2="88" stroke="#1E4B5C" strokeWidth="0.5" />
                  <polygon
                    fill="url(#hydrophoneFill)"
                    points={`0,96 ${waveformPoints
                      .map((v, i) => {
                        const x = Math.round(((i / (waveformPoints.length - 1)) * 480) * 100) / 100;
                        const y = Math.round((1 - v) * 96 * 100) / 100;
                        return `${x},${y}`;
                      })
                      .join(" ")} 480,96`}
                  />
                  <polyline
                    fill="none"
                    stroke="#59D2E7"
                    strokeWidth="1.25"
                    strokeLinejoin="round"
                    points={waveformPoints
                      .map((v, i) => {
                        const x = Math.round(((i / (waveformPoints.length - 1)) * 480) * 100) / 100;
                        const y = Math.round((1 - v) * 96 * 100) / 100;
                        return `${x},${y}`;
                      })
                      .join(" ")}
                  />
                </svg>
              </div>
              <div className="mt-1.5 text-right text-[9px] text-[#4d6675]">Time →</div>
            </div>

            <div className="bg-[#06121B] p-5">
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em] text-[#718692]">
                Vessel Passage Summary
              </p>
              <dl className="space-y-2">
                {featuredResearch.passageSummary.map((row) => (
                  <div key={row.label} className="flex items-center justify-between">
                    <dt className="text-xs text-[#A9B8C1]">{row.label}</dt>
                    <dd className="text-xs font-semibold text-[#F3F6F7]">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* 1/3-octave PSD */}
          <div className="bg-[#06121B] p-5">
            <div className="mb-3 text-[11px] text-[#718692]">
              1/3-Octave PSD (dB re 1 µPa²/Hz)
            </div>
            <div className="flex h-28 items-end gap-[2px] md:h-32">
              {octaveValues.map((v, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm bg-gradient-to-t from-[#124a58] to-[#59D2E7]"
                  style={{ height: `${v * 100}%` }}
                />
              ))}
            </div>
            <div className="mt-2 flex justify-between text-[10px] text-[#718692]">
              <span>20 Hz</span>
              <span>1.25 kHz</span>
              <span>20 kHz</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
