# FlowTask — Landing Page

A modern, professional, fully responsive landing page for the **FlowTask** SaaS project management platform.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4**, **Lucide React** and **Framer Motion**.

> French version: [README.md](./README.md)

---

## ✨ Overview

A production-grade landing page designed like a real SaaS product:

- **Responsive navbar** — logo, navigation links, CTA, animated mobile menu
- **Hero** — strong headline, dual CTA, dashboard mockup
- **Trusted companies** — infinite scrolling marquee of client logos
- **Features** — 6 cards (task management, collaboration, analytics, automation, notifications, integrations)
- **Interactive demo** — Board / Analytics / Automation tabs with dashboard mockups
- **Workflow** — 4 steps (create a project, assign tasks, track progress, analyze results)
- **Integrations** — 8 tools (GitHub, Slack, Figma, Google Drive, Jira, Notion, Zoom, Loom)
- **Statistics** — scroll-triggered animated counters
- **Testimonials** — 6 customer reviews with ratings
- **Pricing** — 3 plans with monthly / annual toggle
- **FAQ** — interactive accordion
- **Final CTA + Footer** — with GitHub link

## 🛠️ Tech stack

| Tool | Role |
| --- | --- |
| [Next.js 16](https://nextjs.org) | React framework (App Router) |
| [TypeScript](https://www.typescriptlang.org) | Static typing |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first CSS |
| [Lucide React](https://lucide.dev) | Icons |
| [Framer Motion](https://www.framer.com/motion) | Subtle animations |

## 📦 Installation

### Prerequisites

- **Node.js** 20.9.0 or newer (latest LTS recommended)
- **npm**, **pnpm** or **yarn**

### 1. Get the project

```bash
git clone https://github.com/neylorxt/flow-task.git
cd flow-task
```

### 2. Install dependencies

```bash
npm install
# or
pnpm install
# or
yarn install
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
Hot reload is enabled: the page updates automatically as you edit files.

## 🏗️ Project structure

```
flow-task/
├── app/
│   ├── globals.css        # Theme, brand colors, animations
│   ├── layout.tsx         # Root layout (fonts, SEO metadata)
│   └── page.tsx           # Composition of all sections
├── components/
│   ├── ui/                # Reusable primitives
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   └── FadeIn.tsx     # Entrance animation + SectionHeading
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── TrustedBy.tsx
│   ├── Features.tsx
│   ├── Showcase.tsx       # Interactive tabs (product demo)
│   ├── Workflow.tsx
│   ├── Integrations.tsx
│   ├── Stats.tsx          # Animated counters
│   ├── Testimonials.tsx
│   ├── Pricing.tsx
│   ├── FAQ.tsx
│   ├── FinalCTA.tsx
│   ├── Footer.tsx
│   ├── Logo.tsx
│   └── DashboardMockup.tsx  # Reusable mockup (3 views)
└── package.json
```

Each section is an isolated, reusable component: the page content is composed in `app/page.tsx`.

## 🔧 Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm start` | Serve the production build (after `build`) |
| `npm run lint` | Lint the code with ESLint |

## 🎨 Customization

- **Brand color**: the violet/indigo gradient is defined in `app/globals.css` (`--color-brand-*` variables) and used through `bg-brand-*` / `text-brand-*` classes.
- **Content**: each section (`Features`, `Testimonials`, `Pricing`, `FAQ`, etc.) exposes its data as arrays at the top of the file — edit them without touching the JSX.
- **Fonts**: the Inter font is loaded in `app/layout.tsx` via `next/font`.

## 🚀 Deployment

The easiest way is to deploy on [Vercel](https://vercel.com):

1. Import the GitHub repository into Vercel.
2. Vercel detects Next.js automatically (no configuration needed).
3. Deploy.

You can also use any platform that supports Next.js (Netlify, Cloudflare Pages, Node.js / Docker, etc.).

## 📄 License

This project is provided as a demonstration. All product names and trademarks mentioned belong to their respective owners.
