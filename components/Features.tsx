import {
  BarChart3,
  Bell,
  Blocks,
  CheckSquare,
  Users,
  Zap,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn, SectionHeading } from "@/components/ui/FadeIn";

const features = [
  {
    icon: CheckSquare,
    name: "Task management",
    description:
      "Boards, lists, and timelines that adapt to any workflow. Drag-and-drop tasks, set priorities, and never lose track of what's next.",
    accent: "bg-brand-50 text-brand-600 ring-brand-100",
  },
  {
    icon: Users,
    name: "Team collaboration",
    description:
      "Comment directly on tasks, tag teammates, and keep every decision in context with shared boards and real-time presence.",
    accent: "bg-sky-50 text-sky-600 ring-sky-100",
  },
  {
    icon: BarChart3,
    name: "Project analytics",
    description:
      "Live velocity, cycle-time, and burndown reports. Understand where time goes and spot bottlenecks before they slow you down.",
    accent: "bg-emerald-50 text-emerald-600 ring-emerald-100",
  },
  {
    icon: Zap,
    name: "Automation",
    description:
      "Automate the busywork with rules and recipes: auto-assign tasks, sync due dates, and move work forward without lifting a finger.",
    accent: "bg-amber-50 text-amber-600 ring-amber-100",
  },
  {
    icon: Bell,
    name: "Smart notifications",
    description:
      "Get notified only when it matters. Digest-mode summaries and threaded alerts keep you in the loop without the noise.",
    accent: "bg-violet-50 text-violet-600 ring-violet-100",
  },
  {
    icon: Blocks,
    name: "100+ integrations",
    description:
      "Connect GitHub, Slack, Figma, Google Drive, and more. Your tools, synced in both directions, right inside FlowTask.",
    accent: "bg-rose-50 text-rose-600 ring-rose-100",
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Features"
          title={
            <>
              Everything your team needs to{" "}
              <span className="text-gradient">get work done</span>
            </>
          }
          description="FlowTask is built as a single, focused workspace, so you spend less time switching tools and more time shipping."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <FadeIn key={feature.name} delay={(i % 3) * 0.08}>
              <div className="group relative h-full rounded-2xl border border-zinc-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-900/5">
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ring-1 ring-inset transition-transform duration-300 group-hover:scale-110 ${feature.accent}`}
                >
                  <feature.icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 text-lg font-semibold tracking-tight text-zinc-900">
                  {feature.name}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-zinc-600">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
