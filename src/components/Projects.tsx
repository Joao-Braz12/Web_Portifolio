import { content } from "@/content/en";
import { projects, moreRepos } from "@/lib/projects";
import { Reveal, RevealGroup, RevealChild } from "./Reveal";

const accentVar: Record<string, string> = {
  olive: "var(--olive)",
  sand: "var(--sand)",
  maroon: "var(--depth)",
};

const ArrowIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    className="transition-transform duration-300 group-hover/card:translate-x-1 group-hover/card:-translate-y-1"
  >
    <path
      d="M7 17L17 7M17 7H8M17 7V16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function Projects() {
  const w = content.work;

  return (
    <section id="work" className="relative scroll-mt-20 py-28">
      <div
        className="aurora aurora-olive"
        style={{ width: 480, height: 480, top: 80, right: -160, opacity: 0.25 }}
      />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="label">{w.label}</p>
          <h2 className="mt-4 max-w-2xl text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight">
            {w.title}
          </h2>
          <p className="mt-5 max-w-xl text-muted">{w.subtitle}</p>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-5 md:grid-cols-2" stagger={0.09}>
          {projects.map((p, i) => (
            <RevealChild
              key={p.id}
              className={i === 0 ? "md:col-span-2" : ""}
            >
              <a
                href={p.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="glass group/card relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)]"
                style={{ ["--accent" as string]: accentVar[p.accent] }}
              >
                {/* accent glow */}
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover/card:opacity-40"
                  style={{ background: accentVar[p.accent] }}
                />
                <div className="relative z-10 flex items-start justify-between">
                  <span className="font-mono text-sm text-faint">{p.no}</span>
                  <span
                    className="text-faint transition-colors group-hover/card:text-[color:var(--accent)]"
                    style={{ ["--accent" as string]: accentVar[p.accent] }}
                  >
                    <ArrowIcon />
                  </span>
                </div>

                <h3 className="relative z-10 mt-6 text-2xl font-bold">{p.title}</h3>
                <p
                  className="relative z-10 mt-1 font-mono text-sm"
                  style={{ color: accentVar[p.accent] }}
                >
                  {p.tagline}
                </p>
                <p className="relative z-10 mt-4 max-w-xl text-sm leading-relaxed text-muted">
                  {p.description}
                </p>

                <ul className="relative z-10 mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-[var(--line)] px-3 py-1 font-mono text-xs text-muted"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </a>
            </RevealChild>
          ))}
        </RevealGroup>

        {/* More on GitHub */}
        <Reveal className="mt-14" delay={0.1}>
          <div className="glass flex flex-col gap-5 rounded-3xl p-7 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="label">{w.moreLabel}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {moreRepos.map((r) => (
                  <li key={r.name}>
                    <a
                      href={r.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-[var(--line)] px-3 py-1 font-mono text-xs text-muted transition-colors hover:border-sand hover:text-sand"
                    >
                      {r.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={w.moreHref}
              target="_blank"
              rel="noopener noreferrer"
              className="pill pill-ghost shrink-0 px-6 py-3 text-sm"
            >
              See all on GitHub →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
