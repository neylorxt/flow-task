import { Link2, GitBranch, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui/Container";

const columns = [
  {
    heading: "Product",
    links: ["Features", "Integrations", "Pricing", "Changelog", "Roadmap", "Security"],
  },
  {
    heading: "Solutions",
    links: ["Engineering", "Product", "Marketing", "Agencies", "Startups", "Enterprise"],
  },
  {
    heading: "Resources",
    links: ["Documentation", "API Reference", "Blog", "Community", "Templates", "Help Center"],
  },
  {
    heading: "Company",
    links: ["About", "Careers", "Customers", "Contact", "Press Kit", "Status"],
  },
];

const socials = [
  { icon: X, label: "FlowTask on X", href: "#" },
  { icon: GitBranch, label: "FlowTask on GitHub", href: "#" },
  { icon: Link2, label: "FlowTask on LinkedIn", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50/60">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-zinc-500">
              The calm, focused workspace where teams plan, track, and ship
              their best work.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-500 transition-all duration-200 hover:border-zinc-300 hover:text-zinc-900"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.heading}>
                <h3 className="text-sm font-semibold text-zinc-900">
                  {col.heading}
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-8 sm:flex-row">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} FlowTask, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Cookies"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
