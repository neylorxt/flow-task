"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn, SectionHeading } from "@/components/ui/FadeIn";

type Billing = "monthly" | "annual";

const plans = [
  {
    name: "Starter",
    tagline: "For small teams getting organized",
    monthly: 0,
    annual: 0,
    cta: "Start for free",
    popular: false,
    features: [
      "Up to 5 members",
      "Unlimited tasks & projects",
      "2 active boards",
      "Basic integrations (10)",
      "Community support",
    ],
  },
  {
    name: "Pro",
    tagline: "For growing teams that ship fast",
    monthly: 12,
    annual: 9,
    cta: "Start 14-day trial",
    popular: true,
    features: [
      "Unlimited members",
      "Unlimited boards & views",
      "Advanced analytics & reports",
      "Automations (50/mo)",
      "All integrations",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For organizations with big needs",
    monthly: null,
    annual: null,
    cta: "Talk to sales",
    popular: false,
    features: [
      "Everything in Pro",
      "SSO & SAML",
      "Advanced permissions",
      "Audit logs & data export",
      "Dedicated success manager",
      "99.9% uptime SLA",
    ],
  },
];

export function Pricing() {
  const [billing, setBilling] = useState<Billing>("annual");

  return (
    <section
      id="pricing"
      className="scroll-mt-24 border-y border-zinc-100 bg-zinc-50/60 py-24 sm:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing that scales with you"
          description="Start free, upgrade when you're ready. No hidden fees, no surprises."
        />

        <FadeIn className="mt-10 flex items-center justify-center gap-3">
          <div
            role="tablist"
            aria-label="Billing period"
            className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-white p-1.5 shadow-sm"
          >
            {(["monthly", "annual"] as Billing[]).map((period) => (
              <button
                key={period}
                role="tab"
                aria-selected={billing === period}
                onClick={() => setBilling(period)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium capitalize transition-colors ${
                  billing === period ? "text-white" : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                {billing === period && (
                  <motion.span
                    layoutId="billing-pill"
                    className="absolute inset-0 rounded-full bg-zinc-900"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">
                  {period}
                  {period === "annual" && (
                    <span
                      className={`ml-1.5 rounded-full px-1.5 py-0.5 text-[10px] font-semibold ${
                        billing === "annual"
                          ? "bg-brand-500 text-white"
                          : "bg-brand-100 text-brand-700"
                      }`}
                    >
                      −25%
                    </span>
                  )}
                </span>
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan, i) => {
            const price = billing === "monthly" ? plan.monthly : plan.annual;
            const isCustom = price === null;

            return (
              <FadeIn key={plan.name} delay={i * 0.08} className="h-full">
                <div
                  className={`relative flex h-full flex-col rounded-3xl p-8 ${
                    plan.popular
                      ? "bg-zinc-950 text-white shadow-2xl shadow-zinc-900/30 ring-1 ring-zinc-900 lg:scale-[1.04]"
                      : "border border-zinc-200 bg-white"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-gradient-to-r from-brand-600 to-violet-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg shadow-brand-600/30">
                      <Sparkles className="h-3 w-3" />
                      Most popular
                    </span>
                  )}

                  <h3
                    className={`text-lg font-semibold tracking-tight ${
                      plan.popular ? "text-white" : "text-zinc-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`mt-1 text-sm ${
                      plan.popular ? "text-zinc-400" : "text-zinc-500"
                    }`}
                  >
                    {plan.tagline}
                  </p>

                  <div className="mt-6 flex items-baseline gap-2">
                    {isCustom ? (
                      <span className="text-4xl font-semibold tracking-tight">
                        Custom
                      </span>
                    ) : (
                      <>
                        <span className="text-5xl font-semibold tracking-tight">
                          ${price}
                        </span>
                        <span
                          className={`text-sm ${
                            plan.popular ? "text-zinc-400" : "text-zinc-500"
                          }`}
                        >
                          / user / mo
                        </span>
                      </>
                    )}
                  </div>

                  <div className="mt-7 flex-1">
                    <ul className="flex flex-col gap-3.5">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm">
                          <span
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                              plan.popular
                                ? "bg-brand-500/20 text-brand-300"
                                : "bg-brand-50 text-brand-600"
                            }`}
                          >
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                          <span
                            className={
                              plan.popular ? "text-zinc-300" : "text-zinc-600"
                            }
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    href="#"
                    variant={plan.popular ? "inverse" : "secondary"}
                    className={`mt-8 w-full ${
                      plan.popular ? "" : "ring-zinc-200"
                    }`}
                  >
                    {plan.cta}
                    {plan.popular && <ArrowRight className="h-4 w-4" />}
                  </Button>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn className="mt-12 text-center" delay={0.15}>
          <p className="text-sm text-zinc-500">
            All plans include unlimited viewers, free migration, and a 30-day
            money-back guarantee.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
