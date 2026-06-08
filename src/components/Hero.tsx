"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { content } from "@/content/en";

export function Hero() {
  const h = content.hero;
  const reduce = useReducedMotion();

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

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      {/* Aurora atmosphere */}
      <div
        className="aurora aurora-olive"
        style={{ width: 620, height: 620, top: -160, left: -120 }}
      />
      <div
        className="aurora aurora-maroon"
        style={{ width: 520, height: 520, bottom: -180, right: -100, opacity: 0.6 }}
      />
      <div
        className="aurora aurora-sand"
        style={{ width: 320, height: 320, top: "40%", right: "20%", opacity: 0.18 }}
      />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl px-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={item} className="label mb-8">
          {h.label}
        </motion.p>

        <motion.h1
          variants={item}
          className="max-w-4xl text-[clamp(2.8rem,8vw,6.5rem)] font-extrabold leading-[0.95]"
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

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="label flex flex-col items-center gap-2">
          <span>Scroll</span>
          <span className="h-10 w-px bg-gradient-to-b from-faint to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
