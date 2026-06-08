import { content } from "@/content/en";

export function Footer() {
  const f = content.footer;
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--line)] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 sm:flex-row">
        <div>
          <p className="font-display text-base font-bold">{f.name}</p>
          <p className="font-mono text-xs text-faint">{f.tagline}</p>
        </div>
        <p className="font-mono text-xs text-faint">© {year} · Built with Next.js</p>
      </div>
    </footer>
  );
}
