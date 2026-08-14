import type { CSSProperties } from "react";
import { Container } from "@/components/ui/Container";

const companies = [
  "Northwind",
  "Acme Corp",
  "Lumen Labs",
  "Vertex",
  "Harbor & Co",
  "Nimbus",
  "Cascade",
  "Orbitworks",
  "Brightpath",
  "Ferro",
];

function CompanyWordmark({ name }: { name: string }) {
  return (
    <span className="inline-flex shrink-0 select-none items-center gap-2.5 px-10 text-zinc-400">
      <span className="h-2 w-2 rounded-[3px] bg-current opacity-60" />
      <span className="text-lg font-semibold tracking-tight">{name}</span>
    </span>
  );
}

export function TrustedBy() {
  return (
    <section className="border-y border-zinc-100 bg-zinc-50/50 py-14">
      <Container>
        <p className="text-center text-sm font-medium tracking-wide text-zinc-500">
          Trusted by 4,000+ product teams at companies like
        </p>
      </Container>

      <div className="mask-fade-x mt-8 overflow-hidden">
        <div
          className="animate-marquee flex w-max items-center"
          style={{ "--marquee-duration": "40s" } as CSSProperties}
        >
          {[...companies, ...companies].map((name, i) => (
            <CompanyWordmark key={`${name}-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
