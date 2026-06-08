import { content } from "@/content/en";
import { Reveal } from "./Reveal";

export function Contact() {
  const c = content.contact;
  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden py-28">
      <div
        className="aurora aurora-olive"
        style={{ width: 600, height: 600, bottom: -260, left: "50%", marginLeft: -300, opacity: 0.3 }}
      />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal direction="scale">
          <p className="label">{c.label}</p>
          <h2 className="mt-4 text-[clamp(2.4rem,7vw,5.5rem)] font-extrabold leading-[0.95]">
            {c.title}
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted">{c.subtitle}</p>
        </Reveal>

        <Reveal delay={0.12} className="mt-10">
          <a
            href={`mailto:${c.email}`}
            className="group inline-flex items-center gap-3 font-display text-[clamp(1.4rem,4vw,2.6rem)] font-bold text-sand transition-colors hover:text-olive-bright"
          >
            {c.email}
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.2} className="mt-10">
          <div className="flex flex-wrap items-center gap-4">
            <a href={c.cta.href} download className="pill pill-primary px-7 py-3.5">
              {c.cta.label}
            </a>
            {c.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="pill pill-ghost px-7 py-3.5"
              >
                {l.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
