import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function FinalCTA() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-zinc-950 px-6 py-20 text-center shadow-2xl shadow-zinc-900/20 sm:px-16 sm:py-24">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-0 h-64 w-[560px] -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-600/40 via-violet-600/40 to-fuchsia-600/40 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]">
                Ready to ship work without the chaos?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-zinc-400">
                Join thousands of teams planning, tracking, and shipping with
                FlowTask. Your first project is minutes away.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="#" variant="inverse" size="lg" className="w-full sm:w-auto">
                  Get Started Free
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  href="#"
                  size="lg"
                  className="w-full border border-white/15 bg-white/5 text-white hover:bg-white/10 sm:w-auto"
                >
                  Talk to Sales
                </Button>
              </div>
              <p className="mt-6 text-sm text-zinc-500">
                Free 14-day trial · No credit card required
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
