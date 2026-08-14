import { Quote, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn, SectionHeading } from "@/components/ui/FadeIn";

const testimonials = [
  {
    quote:
      "FlowTask replaced three tools for us. The boards are fast, the analytics are actually useful, and our planning meetings went from an hour to fifteen minutes.",
    name: "Sarah Mitchell",
    role: "VP of Product, Northwind",
    initials: "SM",
    color: "bg-brand-500",
  },
  {
    quote:
      "I've used every project tool out there. FlowTask is the first one that feels like it was designed for engineers: fast, keyboard-driven, and zero bloat.",
    name: "David Park",
    role: "Staff Engineer, Lumen Labs",
    initials: "DP",
    color: "bg-sky-500",
  },
  {
    quote:
      "The automation rules alone are worth it. We save around 10 hours a week just on assigning tasks and chasing status updates.",
    name: "Maya Torres",
    role: "Engineering Manager, Acme Corp",
    initials: "MT",
    color: "bg-emerald-500",
  },
  {
    quote:
      "Our remote team is more in sync than when we were all in one office. The live presence and clean notifications make a real difference.",
    name: "Jonas Rivera",
    role: "COO, Orbitworks",
    initials: "JR",
    color: "bg-amber-500",
  },
  {
    quote:
      "Migrating from our old tool took an afternoon. Everything imported cleanly and the team barely noticed the switch, except that things got faster.",
    name: "Leila Sadeghi",
    role: "Head of Delivery, Vertex",
    initials: "LS",
    color: "bg-violet-500",
  },
  {
    quote:
      "The cycle-time reports are the killer feature. We found a bottleneck in two minutes that had been slowing us down for months.",
    name: "Tom Okafor",
    role: "Delivery Lead, Harbor & Co",
    initials: "TO",
    color: "bg-rose-500",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="resources" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by teams that ship"
          description="Don't take our word for it, here's what product and engineering leaders say about working with FlowTask."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={(i % 3) * 0.08}>
              <figure className="relative flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-900/5">
                <Quote
                  aria-hidden="true"
                  className="absolute right-6 top-6 h-8 w-8 text-zinc-100"
                />
                <Stars />
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-zinc-700">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-zinc-100 pt-5">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white ${t.color}`}
                  >
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-zinc-900">
                      {t.name}
                    </p>
                    <p className="text-xs text-zinc-500">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
