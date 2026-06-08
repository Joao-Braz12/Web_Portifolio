import Image from "next/image";
import { content } from "@/content/en";
import { Reveal, RevealGroup, RevealChild } from "./Reveal";

export function About() {
  const a = content.about;
  return (
    <section id="about" className="relative scroll-mt-20 py-28">
      <div
        className="aurora aurora-maroon"
        style={{ width: 460, height: 460, top: 120, left: -180, opacity: 0.4 }}
      />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1fr]">
          {/* Left: photo + intro */}
          <div>
            <Reveal direction="left">
              <p className="label">{a.label}</p>
              <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight">
                {a.title}
              </h2>
            </Reveal>

            <Reveal direction="left" delay={0.1} className="mt-8">
              <div className="relative w-fit">
                <div
                  className="aurora aurora-olive"
                  style={{ width: 280, height: 280, inset: 0, opacity: 0.35 }}
                />
                <Image
                  src="/headshot.jpg"
                  alt={a.photoAlt}
                  width={360}
                  height={360}
                  className="relative z-10 rounded-3xl border border-[var(--line)] object-cover grayscale-[0.15] transition-all duration-500 hover:grayscale-0"
                  priority
                />
              </div>
            </Reveal>

            <div className="mt-8 space-y-4">
              {a.bio.map((para, i) => (
                <Reveal key={i} direction="left" delay={0.15 + i * 0.05}>
                  <p className="max-w-md leading-relaxed text-muted">{para}</p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: timeline */}
          <div className="lg:pt-2">
            <Reveal direction="right">
              <p className="label mb-8">{a.timelineLabel}</p>
            </Reveal>
            <RevealGroup as="ul" className="space-y-0" stagger={0.08}>
              {a.timeline.map((t, i) => (
                <RevealChild key={i} direction="right" as="li">
                  <div className="group relative border-l border-[var(--line)] pb-8 pl-8 last:pb-0">
                    <span
                      className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full transition-colors ${
                        t.kind === "work"
                          ? "bg-olive"
                          : "bg-card-2 group-hover:bg-sand"
                      }`}
                    />
                    <span className="font-mono text-xs text-faint">{t.when}</span>
                    <h3 className="mt-1 text-lg font-semibold text-text">
                      {t.role}
                    </h3>
                    <p className="text-sm text-sand/90">{t.org}</p>
                    {"note" in t && t.note ? (
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                        {t.note}
                      </p>
                    ) : null}
                  </div>
                </RevealChild>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
