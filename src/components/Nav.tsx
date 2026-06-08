"use client";

import { useEffect, useState } from "react";
import { content } from "@/content/en";

export function Nav() {
  const { links, cta } = content.nav;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--line)] bg-[rgba(33,27,31,0.8)] backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-display text-lg font-extrabold tracking-tight text-text"
        >
          JB<span className="text-olive">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-sand"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/joao_braz_en_cv.pdf"
            className="pill pill-primary px-5 py-2 text-sm"
          >
            {cta}
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-text md:hidden"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-current transition-all ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-0.5 w-6 bg-current transition-all ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-current transition-all ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-[var(--line)] bg-[rgba(33,27,31,0.96)] px-6 py-4 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-muted transition-colors hover:text-sand"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/joao_braz_en_cv.pdf"
              onClick={() => setOpen(false)}
              className="pill pill-primary px-5 py-2 text-center text-sm"
            >
              {cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
