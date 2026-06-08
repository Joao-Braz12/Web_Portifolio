import { content } from "@/content/en";
import { Reveal, RevealGroup, RevealChild } from "./Reveal";

const tagStyle: Record<string, string> = {
  focus: "border-olive text-olive",
  learning: "border-sand text-sand",
};

export function Skills() {
  const s = content.skills;
  return (
    <section id="skills" className="relative scroll-mt-20 py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="label">{s.label}</p>
          <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight">
            {s.title}
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-5 md:grid-cols-2" stagger={0.09}>
          {s.groups.map((g) => (
            <RevealChild key={g.name}>
              <div className="glass h-full rounded-3xl p-7">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold">{g.name}</h3>
                  {g.tag ? (
                    <span
                      className={`rounded-full border px-2.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider ${
                        tagStyle[g.tag] ?? "border-[var(--line)] text-muted"
                      }`}
                    >
                      {g.tag}
                    </span>
                  ) : null}
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-full border border-[var(--line)] bg-card/30 px-3.5 py-1.5 text-sm text-muted"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealChild>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
