"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  LayoutGrid,
  Workflow as WorkflowIcon,
  Check,
  Users,
  Rocket,
  Layers,
  Zap,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/FadeIn";
import { DashboardMockup, type DashboardView } from "@/components/DashboardMockup";

const tabs: {
  id: DashboardView;
  label: string;
  icon: typeof LayoutGrid;
  title: string;
  description: string;
  bullets: { icon: typeof Check; text: string }[];
}[] = [
  {
    id: "board",
    label: "Board",
    icon: LayoutGrid,
    title: "Run projects the way your team works",
    description:
      "Kanban boards with drag-and-drop tasks, custom columns, and dependency tracking keep everyone aligned from kickoff to ship.",
    bullets: [
      { icon: Check, text: "Custom columns for any workflow" },
      { icon: Users, text: "Assign, comment, and tag in real time" },
      { icon: Layers, text: "Group by assignee, sprint, or label" },
    ],
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: BarChart3,
    title: "See exactly where your time goes",
    description:
      "Track velocity, cycle time, and on-time delivery with charts that update as your team ships, with no manual reporting required.",
    bullets: [
      { icon: Rocket, text: "Live velocity and burndown charts" },
      { icon: BarChart3, text: "Cycle-time trends by team and project" },
      { icon: Check, text: "Shareable, export-ready reports" },
    ],
  },
  {
    id: "automation",
    label: "Automation",
    icon: WorkflowIcon,
    title: "Let FlowTask handle the busywork",
    description:
      "Chain simple rules into powerful workflows that assign, sync, and notify, so your team stays focused on the work.",
    bullets: [
      { icon: Zap, text: "No-code rules and recipe templates" },
      { icon: Users, text: "Auto-assign tasks to the right owner" },
      { icon: Check, text: "Cross-tool actions (Slack, GitHub & more)" },
    ],
  },
];

export function Showcase() {
  const [active, setActive] = useState<DashboardView>("board");
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section
      id="showcase"
      className="scroll-mt-24 overflow-hidden bg-zinc-50/60 py-24 sm:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="Product tour"
          title="One workspace, every perspective"
          description="Switch between the views your team actually uses, from day-to-day execution to the big picture."
        />

        <div className="mt-12 flex justify-center">
          <div
            role="tablist"
            aria-label="Dashboard views"
            className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-white p-1.5 shadow-sm"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={active === tab.id}
                onClick={() => setActive(tab.id)}
                className={`relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors sm:px-6 ${
                  active === tab.id
                    ? "text-white"
                    : "text-zinc-500 hover:text-zinc-800"
                }`}
              >
                {active === tab.id && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full bg-zinc-900"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <tab.icon
                  className={`relative z-10 h-4 w-4 ${
                    active === tab.id ? "text-brand-300" : "text-zinc-400"
                  }`}
                />
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[2fr_3fr] lg:gap-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
                {current.title}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-zinc-600">
                {current.description}
              </p>
              <ul className="mt-8 flex flex-col gap-4">
                {current.bullets.map((bullet, i) => (
                  <motion.li
                    key={bullet.text}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 + i * 0.08, duration: 0.4 }}
                    className="flex items-center gap-3 text-[15px] font-medium text-zinc-700"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100">
                      <bullet.icon className="h-3.5 w-3.5" />
                    </span>
                    {bullet.text}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-brand-100/60 via-transparent to-fuchsia-100/60 blur-2xl"
            />
            <div className="relative rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <DashboardMockup view={current.id} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
