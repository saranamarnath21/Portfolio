import { Anchor, Mail } from "lucide-react";
import { site } from "@/data/portfolio";

function LinkedInIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050f16]">
      <div className="container-page flex flex-col items-center gap-4 py-10 text-center">
        <div className="flex items-center gap-2 text-[#59D2E7]">
          <Anchor className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
          <p className="text-[11px] font-medium tracking-[0.2em] text-[#A9B8C1] md:text-xs">
            {site.tagline}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#718692]">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-1.5 hover:text-[#59D2E7]"
          >
            <LinkedInIcon className="h-3.5 w-3.5" />
            LinkedIn
          </a>
          <a
            href={`mailto:${site.email}`}
            className="focus-ring inline-flex items-center gap-1.5 hover:text-[#59D2E7]"
          >
            <Mail className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden="true" />
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export { LinkedInIcon };
