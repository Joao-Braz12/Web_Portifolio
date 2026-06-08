"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type Direction = "up" | "left" | "right" | "scale";

const offset: Record<Direction, { x?: number; y?: number; scale?: number }> = {
  up: { y: 32 },
  left: { x: -40 },
  right: { x: 40 },
  scale: { scale: 0.94 },
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "span";
}) {
  const reduce = useReducedMotion();
  const from = offset[direction];

  const variants: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, ...from },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </MotionTag>
  );
}

/** Staggered container: children using `RevealChild` animate in sequence. */
export function RevealGroup({
  children,
  className,
  stagger = 0.1,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  as?: "div" | "ul" | "section";
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </MotionTag>
  );
}

export function RevealChild({
  children,
  direction = "up",
  className,
  as = "div",
}: {
  children: ReactNode;
  direction?: Direction;
  className?: string;
  as?: "div" | "li" | "span";
}) {
  const reduce = useReducedMotion();
  const from = offset[direction];
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={{
        hidden: reduce ? { opacity: 0 } : { opacity: 0, ...from },
        show: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}
