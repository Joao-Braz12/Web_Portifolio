"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "motion/react";
import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react";
import { content } from "@/content/en";

export function Hero() {
  const h = content.hero;
  const reduce = useReducedMotion();

  const sectionRef = useRef<HTMLElement>(null);
  // Fade + drift the hero content as it scrolls out of view (skipped if reduced-motion).
  const { scrollY } = useScroll();
  const fade = useTransform(scrollY, [0, 400], [1, 0]);
  const drift = useTransform(scrollY, [0, 400], [0, -40]);
  const contentStyle = reduce ? undefined : { opacity: fade, y: drift };

  const container: Variants = {
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // Paper shaders animate via `speed`; setting it to 0 stops the rAF loop
  // entirely, so reduced-motion users get a still frame at no runtime cost.
  const meshSpeed = reduce ? 0 : 0.3;
  const overlaySpeed = reduce ? 0 : 0.2;

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      {/* Off-screen SVG filters — earthy-tinted glass + a soft text glow */}
      <svg className="absolute inset-0 h-0 w-0">
        <defs>
          <filter id="hero-glass" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.05
                      0 1 0 0 0.04
                      0 0 1 0 0.02
                      0 0 0 0.9 0"
            />
          </filter>
          <filter id="hero-text-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Animated mesh-gradient background in the portfolio's earthy palette */}
      <MeshGradient
        className="absolute inset-0 h-full w-full"
        colors={["#211b1f", "#472421", "#918b40", "#b3ac5a", "#d9c38c"]}
        speed={meshSpeed}
      />
      <MeshGradient
        className="absolute inset-0 h-full w-full opacity-50"
        colors={["#211b1f", "#f1ece1", "#918b40", "#d9c38c"]}
        speed={overlaySpeed}
      />

      {/* Veil so copy stays legible over the moving gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-base via-base/70 to-base/30" />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl px-6"
        style={contentStyle}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={item}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/5 px-4 py-2 backdrop-blur-sm"
          style={{ filter: "url(#hero-glass)" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-olive-bright" />
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-sand">
            {h.label}
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="max-w-4xl text-[clamp(2.8rem,8vw,6.5rem)] font-extrabold leading-[0.95]"
          style={{ filter: "url(#hero-text-glow)" }}
        >
          {h.headlinePre}{" "}
          <span className="bg-gradient-to-br from-sand via-olive-bright to-olive bg-clip-text text-transparent">
            {h.headlineAccent}
          </span>{" "}
          {h.headlinePost}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-xl text-lg leading-relaxed text-muted"
        >
          {h.subhead}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <a href={h.primary.href} className="pill pill-primary px-7 py-3.5">
            {h.primary.label}
          </a>
          <a
            href={h.secondary.href}
            className="pill pill-ghost px-7 py-3.5"
            download
          >
            {h.secondary.label}
          </a>
        </motion.div>
      </motion.div>

      {/* Rotating brand badge — pulsing border with the name on a circular path */}
      <div className="absolute bottom-8 right-8 z-10 hidden sm:block">
        <div className="relative flex h-20 w-20 items-center justify-center">
          <PulsingBorder
            colors={["#918b40", "#b3ac5a", "#d9c38c", "#472421", "#f1ece1"]}
            colorBack="#00000000"
            speed={reduce ? 0 : 1.5}
            roundness={1}
            thickness={0.1}
            softness={0.2}
            intensity={5}
            spots={5}
            spotSize={0.1}
            pulse={0.1}
            smoke={0.5}
            smokeSize={4}
            scale={0.65}
            style={{ width: "60px", height: "60px", borderRadius: "50%" }}
          />
          <motion.svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transform: "scale(1.6)" }}
          >
            <defs>
              <path
                id="brand-circle"
                d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
              />
            </defs>
            <text className="fill-sand/80 font-mono text-[9px] uppercase tracking-[0.2em]">
              <textPath href="#brand-circle" startOffset="0%">
                João Pedro Braz • Backend Developer •
              </textPath>
            </text>
          </motion.svg>
        </div>
      </div>
    </section>
  );
}
