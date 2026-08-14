"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DashboardMockup } from "@/components/DashboardMockup";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_45%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[-240px] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-brand-100 via-violet-100 to-fuchsia-100 opacity-70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-120px] left-[-120px] h-72 w-72 rounded-full bg-brand-100/50 blur-3xl"
      />

      <Container className="relative pb-20 pt-20 sm:pt-28 lg:pb-28 lg:pt-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <motion.div variants={item}>
            <a
              href="#features"
              className="group inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 py-1.5 pl-2 pr-4 text-sm font-medium text-zinc-600 shadow-sm backdrop-blur transition-colors hover:border-brand-200 hover:bg-brand-50/60 hover:text-brand-700"
            >
              <span className="flex items-center gap-1 rounded-full bg-gradient-to-r from-brand-600 to-violet-600 px-2.5 py-0.5 text-xs font-semibold text-white">
                <Sparkles className="h-3 w-3" />
                New
              </span>
              AI-assisted project planning
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-8 text-balance text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl lg:leading-[1.1]"
          >
            Plan, track, and ship work{" "}
            <span className="text-gradient">without the chaos</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-zinc-600 sm:text-xl"
          >
            FlowTask brings your tasks, roadmaps, and analytics into one calm,
            fast workspace, so your team can focus on the work that matters,
            not the tools managing it.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
          >
            <Button href="#pricing" size="lg" className="w-full sm:w-auto">
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href="#showcase"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <PlayCircle className="h-5 w-5 text-brand-600" />
              Watch Demo
            </Button>
          </motion.div>

          <motion.p variants={item} className="mt-6 text-sm text-zinc-500">
            Free 14-day trial · No credit card required · Cancel anytime
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.5,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="relative mx-auto mt-16 max-w-5xl lg:mt-24"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-x-8 -top-8 bottom-0 rounded-[2rem] bg-gradient-to-tr from-brand-500/20 via-violet-500/10 to-fuchsia-500/20 blur-2xl"
          />
          <div className="relative">
            <DashboardMockup view="board" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="absolute -right-6 top-14 hidden animate-float-slow rounded-2xl border border-zinc-200 bg-white p-4 shadow-xl shadow-zinc-900/10 xl:block"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M4 12.5 9 17l11-11"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold text-zinc-900">
                  Sprint shipped early
                </p>
                <p className="text-[11px] text-zinc-500">2 days ahead of plan</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="absolute -left-8 bottom-24 hidden animate-float-slow rounded-2xl border border-zinc-200 bg-white p-4 shadow-xl shadow-zinc-900/10 [animation-delay:1.5s] xl:block"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-1.5">
                {["bg-amber-500", "bg-violet-500", "bg-sky-500"].map((c) => (
                  <span
                    key={c}
                    className={`h-6 w-6 rounded-full ring-2 ring-white ${c}`}
                  />
                ))}
              </div>
              <div>
                <p className="text-xs font-semibold text-zinc-900">
                  12 teammates online
                </p>
                <p className="text-[11px] text-zinc-500">across 3 timezones</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
