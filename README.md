# Saran Amarnath — Portfolio

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion

Built from `masterprompt.md` and four reference screenshots (Work / Experience / Research / About).
All real content lives in one file: `data/portfolio.ts`. Nothing is hardcoded into components.

---

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

Production build (what Vercel runs):

```bash
npm run build
npm run start
```

Both commands are verified clean on this project: no TypeScript errors, no ESLint warnings, no build errors, all four routes (`/`, `/experience`, `/research`, `/about`) statically pre-rendered.

---

## Deploy to Vercel

1. Push this repo to GitHub (it's already wired to `github.com/saranamarnath21/Portfolio`, which is currently empty).
2. Import the repo at vercel.com/new. No config needed — Next.js is auto-detected. Default build command (`next build`) and output are already correct.
3. Done. No environment variables are required.

---

## Replacing placeholder images

Every image below is a **placeholder I generated** — dark navy/cyan line-art with a caption telling you what to drop in. None of them are real photos, and none are AI-generated fictional portraits (per your instruction). Replace the file at the exact path below with a real image of the **same filename and extension** and no code changes are needed.

| Path | Used for | Ideal aspect ratio |
|---|---|---|
| `public/images/profile/profile.jpg` | Hero portrait + About portrait | 4:5 (portrait) |
| `public/images/profile/london.jpg` | Contact section banner | wide / 16:9-ish |
| `public/images/projects/shell-crux.jpg` | Shell Crux featured story | 4:3 |
| `public/images/experience/seatrium.jpg` | Experience — Seatrium | 4:3 or taller |
| `public/images/experience/pacmak.jpg` | Experience — PacMaK DB | 4:3 or taller |
| `public/images/experience/drdo.jpg` | Experience — DRDO NSTL | 4:3 or taller |
| `public/images/experience/hsl.jpg` | Experience — Hindustan Shipyard | 4:3 or taller |
| `public/images/research/oil-tanker.jpg` | Project card — LNG tanker | 4:3 |
| `public/images/research/submarine-cfd.jpg` | Project card — submarine CFD | 4:3 |
| `public/images/research/hackathon.jpg` | Project card — SIH 2022 | 4:3 |
| `public/images/research/hull-optimisation.jpg` | Project card — hull optimisation | 4:3 |
| `public/images/research/urn-southampton.jpg` | Spare — not currently placed on any page | 4:3 |
| `public/images/events/seawork.jpg` | About — Seawork 2026 | 16:10 |
| `public/images/events/rina-dinner.jpg` | About — RINA dinner | 16:10 |
| `public/images/events/rina-fuels.jpg` | About — RINA alt-fuels | 16:10 |
| `public/Chandana_Saran_CV.pdf` | "Download CV" button | — file does not exist yet, button will 404 until you add it (path referenced in code as `cvPath` in `data/portfolio.ts`) |

The research charts (spectrogram, waveform, PSD bars) on the Research page are **not images** — they're inline SVG/CSS built from deterministic placeholder data and explicitly labelled "Illustrative visualisation — pending real dissertation data. Not measured results." This was a deliberate call: the master prompt says never present placeholder numbers as real findings. When you have real MATLAB output, tell me the actual PSD/RMS SPL values or send the exported figures and I'll wire them in properly — either as real data driving the same SVG components, or as static exported chart images.

---

## What's real vs. what's placeholder

- **All text content** (roles, dates, bullet points, project descriptions) — real, taken directly from your master prompt. I did not invent anything.
- **All photos** — placeholder graphics, need replacing (table above).
- **All research charts** — illustrative shapes, explicitly labelled as such, not fabricated data.
- **CV** — not included, link will 404 until you add the PDF.

## Known limitations, stated plainly

- I do not have your real photos, so visual "premium recruiter-facing" impact is currently capped by generic placeholder art, not by the code.
- I verified layout against your four reference screenshots using an actual headless-browser screenshot comparison (not just reading code), at desktop (1440px) and mobile (390px) widths, for all four pages. I did not check every intermediate breakpoint (e.g. iPad-width tablets) — the responsive rules are there (`sm:`/`md:`/`lg:` breakpoints throughout) but untested at every size.
- Lighthouse performance was not measured — I don't have a way to run that scoring tool in this environment. The code follows the mechanics that drive good scores (`next/image`, static generation, minimal JS, system font fallback during load) but "excellent Lighthouse performance" is a claim you should verify yourself post-deploy, not one I'm making for you.
