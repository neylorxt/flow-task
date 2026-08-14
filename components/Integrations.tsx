import {
  ArrowUpRight,
  PenTool,
  GitBranch,
  HardDrive,
  GitMerge,
  Files,
  Video,
  MonitorPlay,
  MessageSquare,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn, SectionHeading } from "@/components/ui/FadeIn";

const integrations = [
  { icon: GitBranch, name: "GitHub", color: "text-zinc-900", desc: "Link PRs and issues to tasks" },
  { icon: MessageSquare, name: "Slack", color: "text-[#E01E5A]", desc: "Share updates and alerts" },
  { icon: PenTool, name: "Figma", color: "text-[#F24E1E]", desc: "Attach designs to tasks" },
  { icon: HardDrive, name: "Google Drive", color: "text-emerald-600", desc: "Keep docs in context" },
  { icon: GitMerge, name: "Jira", color: "text-[#0052CC]", desc: "Import and migrate projects" },
  { icon: Files, name: "Notion", color: "text-zinc-900", desc: "Sync docs and databases" },
  { icon: Video, name: "Zoom", color: "text-[#2D8CFF]", desc: "Join calls from tasks" },
  { icon: MonitorPlay, name: "Loom", color: "text-[#FF3D4A]", desc: "Share async video updates" },
];

export function Integrations() {
  return (
    <section className="border-y border-zinc-100 bg-zinc-50/60 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Integrations"
          title="Plays nicely with your stack"
          description="FlowTask connects with the tools you already use, so nothing falls through the cracks."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {integrations.map((integration, i) => (
            <FadeIn key={integration.name} delay={(i % 4) * 0.06}>
              <a
                href="#"
                className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-900/5"
              >
                <div className="flex items-start justify-between">
                  <integration.icon
                    className={`h-8 w-8 ${integration.color}`}
                    strokeWidth={1.5}
                  />
                  <ArrowUpRight className="h-4 w-4 text-zinc-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-500" />
                </div>
                <h3 className="mt-4 text-base font-semibold tracking-tight text-zinc-900">
                  {integration.name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                  {integration.desc}
                </p>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12 text-center" delay={0.1}>
          <p className="text-sm text-zinc-500">
            Plus 100+ more via Zapier, Make, and the FlowTask API.{" "}
            <a
              href="#"
              className="font-medium text-brand-600 transition-colors hover:text-brand-700"
            >
              Browse the marketplace →
            </a>
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
