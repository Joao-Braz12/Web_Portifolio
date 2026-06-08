import { content } from "@/content/en";

export function TechStrip() {
  const { items, label } = content.tech;
  const track = [...items, ...items];

  return (
    <section className="relative border-y border-[var(--line)] bg-surface/60 py-8">
      <div className="mx-auto mb-5 max-w-6xl px-6">
        <p className="label">{label}</p>
      </div>

      <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <ul className="marquee flex w-max items-center gap-4 px-4">
          {track.map((t, i) => (
            <li
              key={`${t}-${i}`}
              className="whitespace-nowrap rounded-full border border-[var(--line)] bg-card/40 px-5 py-2 font-mono text-sm text-muted transition-colors hover:border-sand hover:text-sand"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
