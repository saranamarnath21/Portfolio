"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/data/portfolio";

function isActive(pathname: string, href: string) {
  // Anchor links (e.g. Contact -> /about#contact) are never treated as the
  // active page — only real routes get the underline.
  if (href.includes("#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href;
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#06121B]/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          className="focus-ring text-lg font-semibold tracking-tight text-[#F3F6F7] md:text-xl"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`focus-ring relative pb-1 text-sm transition-colors ${
                  active
                    ? "text-[#F3F6F7]"
                    : "text-[#A9B8C1] hover:text-[#F3F6F7]"
                }`}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-[#25B7D3]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="focus-ring inline-flex items-center justify-center rounded-md p-2 text-[#F3F6F7] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/5 md:hidden"
            aria-label="Primary mobile"
          >
            <ul className="container-page flex flex-col gap-1 py-3">
              {nav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`focus-ring block rounded-md px-2 py-3 text-base ${
                        active
                          ? "text-[#59D2E7]"
                          : "text-[#A9B8C1] hover:text-[#F3F6F7]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
