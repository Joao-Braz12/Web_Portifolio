import { content } from "@/content/en";
import { CountUp } from "./CountUp";
import { Reveal, RevealGroup, RevealChild } from "./Reveal";

export function Stats() {
  const s = content.stats;
  return (
    <section className="relative border-y border-[var(--line)] bg-surface/40 py-24">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="label">{s.label}</p>
          <h2 className="mt-4 text-[clamp(1.8rem,4vw,3rem)] font-bold">{s.title}</h2>
        </Reveal>

        <RevealGroup
          className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4"
          stagger={0.1}
        >
          {s.items.map((item) => (
            <RevealChild key={item.label}>
              <div className="border-l border-[var(--line)] pl-5">
                <div className="font-display text-[clamp(2.8rem,6vw,4.5rem)] font-extrabold leading-none text-sand">
                  <CountUp to={item.value} suffix={item.suffix} />
                </div>
                <p className="mt-3 text-sm leading-snug text-muted">{item.label}</p>
              </div>
            </RevealChild>
          ))}
        </RevealGroup>

        <Reveal delay={0.15}>
          <p className="mt-12 font-mono text-sm text-faint">{s.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
