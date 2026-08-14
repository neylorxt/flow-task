"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn, SectionHeading } from "@/components/ui/FadeIn";

const faqs = [
  {
    question: "Do I need a credit card to try FlowTask?",
    answer:
      "No. You can start a 14-day free trial with full access to the Pro plan, with no credit card required. If you don't upgrade, your workspace just drops back to the free Starter plan.",
  },
  {
    question: "Can I migrate from another project management tool?",
    answer:
      "Yes. We offer free one-click importers for Asana, Trello, Jira, Notion, and Monday.com, plus a CSV importer for everything else. Most teams are fully migrated in under an afternoon.",
  },
  {
    question: "How does the annual pricing work?",
    answer:
      "Choosing annual billing saves you 25% compared to monthly. You're charged once per year per seat, and you can add or remove seats at any time, with adjustments prorated automatically.",
  },
  {
    question: "Is FlowTask secure enough for our organization?",
    answer:
      "Absolutely. FlowTask is SOC 2 Type II certified, encrypts data in transit and at rest, and supports SSO/SAML, advanced permissions, and audit logs on the Enterprise plan. We also offer custom data-retention policies.",
  },
  {
    question: "Does FlowTask work with our existing tools?",
    answer:
      "FlowTask ships with 100+ native integrations including GitHub, Slack, Figma, Google Drive, and Jira, plus a full REST API and webhooks for anything custom. Our Zapier and Make integrations cover the long tail.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "Every plan includes access to our help center and community. Pro and Enterprise customers get priority email support, and Enterprise adds a dedicated success manager and 99.9% uptime SLA.",
  },
];

function FaqItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`rounded-2xl border transition-colors duration-200 ${
        open ? "border-zinc-300 bg-white shadow-sm" : "border-zinc-200 bg-white"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-base font-semibold tracking-tight text-zinc-900">
          {question}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
            open ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-600"
          }`}
        >
          <Plus className="h-4 w-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-[15px] leading-relaxed text-zinc-600">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 sm:py-32">
      <Container size="narrow">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know before getting started. Can't find an answer? Reach out to our team."
        />

        <FadeIn className="mt-12 flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </FadeIn>
      </Container>
    </section>
  );
}
