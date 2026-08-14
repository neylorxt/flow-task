"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Container } from "@/components/ui/Container";

type Stat = {
  value: number;
  suffix: string;
  decimals?: number;
  label: string;
  sublabel: string;
};

const stats: Stat[] = [
  { value: 98, suffix: "%", label: "Customer retention", sublabel: "of teams stay after year one" },
  { value: 2.4, suffix: "M+", decimals: 1, label: "Tasks shipped", sublabel: "every month on FlowTask" },
  { value: 14, suffix: " hrs", label: "Saved weekly", sublabel: "per team through automation" },
  { value: 4.9, suffix: "/5", decimals: 1, label: "Average rating", sublabel: "across 1,200+ reviews" },
];

function Counter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const formatted = useTransform(motionValue, (v) => {
    const decimals = stat.decimals ?? 0;
    return v.toFixed(decimals);
  });

  useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, stat.value, {
        duration: 1.6,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }
  }, [inView, motionValue, stat.value]);

  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-baseline gap-1">
        <motion.span
          ref={ref}
          className="text-5xl font-semibold tracking-tight text-white sm:text-6xl"
        >
          {formatted}
        </motion.span>
        <span className="text-3xl font-semibold tracking-tight text-brand-300">
          {stat.suffix}
        </span>
      </div>
      <p className="mt-4 text-lg font-semibold text-white">{stat.label}</p>
      <p className="mt-1 text-sm text-zinc-400">{stat.sublabel}</p>
    </div>
  );
}

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-72 w-[720px] -translate-x-1/2 rounded-full bg-brand-600/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-semibold tracking-wide text-brand-300">
            By the numbers
          </span>
          <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            Results your team can feel
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            FlowTask teams don&apos;t just organize work differently, they ship
            faster, with less friction.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <Counter stat={stat} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
