import { BarChart3, CheckCircle2, FolderPlus, UserPlus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn, SectionHeading } from "@/components/ui/FadeIn";

const steps = [
  {
    number: "01",
    icon: FolderPlus,
    title: "Create a project",
    description:
      "Start from a blank board or a ready-made template. Invite your team and set goals in under a minute.",
  },
  {
    number: "02",
    icon: UserPlus,
    title: "Assign tasks",
    description:
      "Break work into tasks, set due dates, and assign owners. Everyone knows exactly what's theirs to do.",
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "Track progress",
    description:
      "Watch work move across your board in real time. Statuses, priorities, and dependencies stay perfectly in sync.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Analyze results",
    description:
      "Turn shipped work into insight. Measure velocity, spot trends, and make your next sprint even better.",
  },
];

export function Workflow() {
  return (
    <section id="solutions" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From idea to insight in four steps"
          description="A workflow simple enough to adopt today and powerful enough to scale with you."
        />

        <div className="relative mt-20">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent lg:block"
          />

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.1}>
                <div className="relative flex flex-col lg:items-start">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-200 bg-white shadow-sm">
                    <step.icon className="h-6 w-6 text-brand-600" strokeWidth={1.75} />
                  </div>
                  <div className="mt-5 flex items-center gap-2">
                    <span className="text-sm font-semibold text-zinc-400">
                      {step.number}
                    </span>
                    <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-zinc-600">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
