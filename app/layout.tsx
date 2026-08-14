import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "FlowTask | Project management for high-performing teams",
    template: "%s · FlowTask",
  },
  description:
    "FlowTask is the modern project management platform that helps teams plan, track, and ship work faster with task boards, real-time analytics, and powerful automation.",
  keywords: [
    "project management",
    "task management",
    "team collaboration",
    "kanban",
    "workflow automation",
    "SaaS",
  ],
  openGraph: {
    title: "FlowTask | Project management for high-performing teams",
    description:
      "Plan, track, and ship work faster. FlowTask brings tasks, analytics, and automation into one workspace.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-dvh bg-white text-zinc-900 antialiased">
        {children}
      </body>
    </html>
  );
}
