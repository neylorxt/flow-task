import {
  Bell,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Circle,
  Clock,
  Command,
  FileBarChart,
  FolderKanban,
  Gauge,
  Inbox,
  LayoutGrid,
  MessageSquare,
  Plus,
  RefreshCw,
  Search,
  Settings,
  Sparkles,
  TrendingUp,
  Users,
  Workflow as WorkflowIcon,
  Zap,
} from "lucide-react";

export type DashboardView = "board" | "analytics" | "automation";

const accents = [
  { bg: "bg-rose-100", text: "text-rose-600", dot: "bg-rose-500" },
  { bg: "bg-amber-100", text: "text-amber-600", dot: "bg-amber-500" },
  { bg: "bg-emerald-100", text: "text-emerald-600", dot: "bg-emerald-500" },
  { bg: "bg-sky-100", text: "text-sky-600", dot: "bg-sky-500" },
  { bg: "bg-violet-100", text: "text-violet-600", dot: "bg-violet-500" },
  { bg: "bg-fuchsia-100", text: "text-fuchsia-600", dot: "bg-fuchsia-500" },
];

const avatars = [
  { initials: "AK", color: "bg-sky-500" },
  { initials: "MT", color: "bg-emerald-500" },
  { initials: "JR", color: "bg-amber-500" },
  { initials: "LS", color: "bg-violet-500" },
  { initials: "DP", color: "bg-rose-500" },
];

function Avatar({
  initials,
  color,
  size = "sm",
}: {
  initials: string;
  color: string;
  size?: "sm" | "xs";
}) {
  const dims = size === "sm" ? "h-6 w-6 text-[9px]" : "h-5 w-5 text-[8px]";
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full font-semibold text-white ring-2 ring-white ${color} ${dims}`}
    >
      {initials}
    </span>
  );
}

function Sidebar() {
  const items = [
    { icon: LayoutGrid, label: "Overview", active: false },
    { icon: FolderKanban, label: "Projects", active: true, badge: "8" },
    { icon: CheckCircle2, label: "My Tasks", active: false, badge: "3" },
    { icon: Calendar, label: "Calendar", active: false },
    { icon: FileBarChart, label: "Reports", active: false },
    { icon: Inbox, label: "Inbox", active: false, badge: "12" },
  ];

  return (
    <div className="flex h-full w-44 shrink-0 flex-col border-r border-zinc-200/80 bg-zinc-50/80 p-3">
      <div className="flex items-center gap-2 px-2 py-1">
        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-zinc-900">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 6.5c0-.6.4-1 1-1h4.6c.6 0 1 .4 1 1V11c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V6.5Z"
              fill="#818cf8"
            />
            <path
              d="M13.4 12c0-.6.4-1 1-1H19c.6 0 1 .4 1 1v5.5c0 .6-.4 1-1 1h-4.6c-.6 0-1-.4-1-1V12Z"
              fill="#fff"
            />
          </svg>
        </span>
        <span className="text-xs font-semibold text-zinc-800">FlowTask</span>
      </div>

      <nav className="mt-4 flex flex-col gap-0.5">
        {items.map(({ icon: Icon, label, active, badge }) => (
          <div
            key={label}
            className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-[11px] font-medium ${
              active
                ? "bg-white text-zinc-900 shadow-sm ring-1 ring-zinc-200/70"
                : "text-zinc-500"
            }`}
          >
            <Icon className="h-3.5 w-3.5" />
            <span className="flex-1">{label}</span>
            {badge ? (
              <span className="rounded-md bg-brand-100 px-1.5 py-0.5 text-[9px] font-semibold text-brand-700">
                {badge}
              </span>
            ) : null}
          </div>
        ))}
      </nav>

      <div className="mt-auto space-y-3">
        <div className="rounded-xl border border-dashed border-zinc-300 bg-white p-2.5">
          <p className="text-[9px] font-semibold text-zinc-800">Pro tip</p>
          <p className="mt-0.5 text-[8.5px] leading-snug text-zinc-500">
            Press <kbd className="rounded bg-zinc-100 px-1 font-mono">⌘K</kbd> to
            jump anywhere
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-lg px-2 py-1">
          <Avatar initials="AK" color="bg-sky-500" />
          <div className="min-w-0">
            <p className="truncate text-[10px] font-semibold text-zinc-800">
              Alex Kim
            </p>
            <p className="text-[8.5px] text-zinc-500">Workspace · Acme</p>
          </div>
          <Settings className="ml-auto h-3 w-3 text-zinc-400" />
        </div>
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="flex items-center gap-3 border-b border-zinc-200/80 bg-white px-4 py-2.5">
      <span className="flex h-3 w-1.5 flex-col gap-1">
        <span className="h-0.5 w-1.5 rounded-full bg-rose-400" />
        <span className="h-0.5 w-1.5 rounded-full bg-amber-400" />
        <span className="h-0.5 w-1.5 rounded-full bg-emerald-400" />
      </span>
      <div className="hidden items-center gap-1.5 rounded-lg bg-zinc-100 px-3 py-1.5 text-[10px] text-zinc-400 sm:flex">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        app.flowtask.io
      </div>
      <div className="ml-auto flex items-center gap-2">
        <span className="hidden rounded-lg bg-zinc-100 p-1.5 text-zinc-500 md:block">
          <Search className="h-3 w-3" />
        </span>
        <span className="relative hidden rounded-lg bg-zinc-100 p-1.5 text-zinc-500 md:block">
          <Bell className="h-3 w-3" />
          <span className="absolute right-1 top-1 h-1 w-1 rounded-full bg-rose-500" />
        </span>
        <span className="hidden items-center gap-1.5 rounded-lg bg-brand-600 px-2.5 py-1.5 text-[9px] font-medium text-white sm:flex">
          <Command className="h-2.5 w-2.5" />
          Share
        </span>
        <div className="flex -space-x-1.5">
          {avatars.slice(0, 3).map((a) => (
            <Avatar key={a.initials} initials={a.initials} color={a.color} size="xs" />
          ))}
        </div>
      </div>
    </div>
  );
}

function BoardColumn({
  title,
  count,
  color,
  cards,
}: {
  title: string;
  count: string;
  color: string;
  cards: {
    tag: string;
    accent: (typeof accents)[number];
    title: string;
    time?: string;
    check?: boolean;
  }[];
}) {
  return (
    <div className="flex min-w-0 flex-1 basis-0 flex-col gap-2">
      <div className="flex items-center gap-1.5 px-0.5">
        <span className={`h-1.5 w-1.5 rounded-full ${color}`} />
        <span className="text-[10px] font-semibold text-zinc-700">{title}</span>
        <span className="text-[9px] text-zinc-400">{count}</span>
      </div>
      <div className="flex flex-col gap-2">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-xl border border-zinc-200/80 bg-white p-2.5 shadow-sm"
          >
            <span
              className={`inline-flex rounded-md px-1.5 py-0.5 text-[8px] font-semibold ${card.accent.bg} ${card.accent.text}`}
            >
              {card.tag}
            </span>
            <p className="mt-1.5 text-[10px] font-medium leading-snug text-zinc-800">
              {card.title}
            </p>
            <div className="mt-2 flex items-center gap-1 text-zinc-400">
              {card.check ? (
                <CheckCircle2 className="h-2.5 w-2.5 text-emerald-500" />
              ) : (
                <Circle className="h-2.5 w-2.5" />
              )}
              {card.time ? (
                <span className="flex items-center gap-0.5 text-[8px]">
                  <Clock className="h-2 w-2" /> {card.time}
                </span>
              ) : null}
              <div className="ml-auto flex -space-x-1">
                {card.accent.dot === "bg-rose-500" ? (
                  <Avatar initials="DP" color="bg-rose-500" size="xs" />
                ) : (
                  <Avatar initials="AK" color="bg-sky-500" size="xs" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BoardView() {
  return (
    <div className="flex h-full flex-col bg-zinc-50/70">
      <div className="flex items-center gap-3 border-b border-zinc-200/80 bg-white px-4 py-3">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold text-zinc-900">
              Q3 Product Launch
            </h3>
            <span className="rounded-md bg-emerald-50 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-600 ring-1 ring-inset ring-emerald-200/70">
              On track
            </span>
          </div>
          <p className="text-[10px] text-zinc-500">
            Marketing · Updated 2 min ago
          </p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="hidden items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-2 py-1 text-[9px] font-medium text-zinc-600 sm:flex">
            <WorkflowIcon className="h-2.5 w-2.5" /> Board
            <ChevronDown className="h-2 w-2" />
          </span>
          <span className="hidden items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-2 py-1 text-[9px] font-medium text-zinc-600 sm:flex">
            <Users className="h-2.5 w-2.5" /> 5
          </span>
          <span className="flex items-center gap-1 rounded-lg bg-zinc-900 px-2 py-1 text-[9px] font-medium text-white">
            <Plus className="h-2.5 w-2.5" /> New task
          </span>
        </div>
      </div>

      <div className="flex flex-1 gap-3 overflow-hidden p-4">
        <BoardColumn
          title="Backlog"
          count="4"
          color="bg-zinc-400"
          cards={[
            { tag: "Research", accent: accents[0], title: "Competitor benchmark deep dive" },
            { tag: "Design", accent: accents[3], title: "Onboarding flow wireframes", time: "Due Fri" },
          ]}
        />
        <BoardColumn
          title="In Progress"
          count="3"
          color="bg-amber-400"
          cards={[
            { tag: "Growth", accent: accents[1], title: "Pricing page A/B test, variant B", time: "2d left", check: true },
            { tag: "Design", accent: accents[3], title: "Empty state illustrations", time: "Due Mon" },
          ]}
        />
        <BoardColumn
          title="Review"
          count="2"
          color="bg-sky-400"
          cards={[
            { tag: "Copy", accent: accents[4], title: "Changelog for v2.4 release" },
          ]}
        />
        <BoardColumn
          title="Done"
          count="5"
          color="bg-emerald-400"
          cards={[
            { tag: "Growth", accent: accents[1], title: "Waitlist → signup activation flow", check: true },
            { tag: "Product", accent: accents[2], title: "Task dependency graph", check: true },
          ]}
        />
      </div>
    </div>
  );
}

function AnalyticsView() {
  const stats = [
    { label: "Tasks completed", value: "284", delta: "+12%", up: true },
    { label: "Cycle time", value: "2.4d", delta: "-18%", up: true },
    { label: "On-time rate", value: "94%", delta: "+4%", up: true },
    { label: "Open tasks", value: "37", delta: "+3", up: false },
  ];

  return (
    <div className="flex h-full flex-col gap-3 overflow-hidden bg-zinc-50/70 p-4">
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-zinc-200/80 bg-white p-2.5 shadow-sm">
            <p className="text-[9px] font-medium text-zinc-500">{s.label}</p>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="text-base font-semibold tracking-tight text-zinc-900">
                {s.value}
              </span>
              <span
                className={`rounded-md px-1 py-0.5 text-[8px] font-semibold ${
                  s.up
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-amber-50 text-amber-600"
                }`}
              >
                {s.delta}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex-1 rounded-xl border border-zinc-200/80 bg-white p-3 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold text-zinc-800">Velocity</p>
            <p className="text-[8.5px] text-zinc-400">Completed points / week</p>
          </div>
          <span className="flex items-center gap-1 rounded-lg border border-zinc-200 px-2 py-1 text-[9px] text-zinc-500">
            Last 8 weeks <ChevronDown className="h-2 w-2" />
          </span>
        </div>
        <svg viewBox="0 0 400 130" className="mt-3 h-full max-h-28 w-full" aria-hidden="true">
          <defs>
            <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="lineStroke" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
          </defs>
          {[20, 45, 70, 95].map((y) => (
            <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#f1f5f9" strokeWidth="1" />
          ))}
          <path
            d="M0,100 C30,94 45,78 70,82 C95,86 108,64 135,66 C162,68 178,44 205,48 C232,52 246,36 272,38 C298,40 314,24 340,26 C356,27 384,16 400,14 L400,130 L0,130 Z"
            fill="url(#areaFill)"
          />
          <path
            d="M0,100 C30,94 45,78 70,82 C95,86 108,64 135,66 C162,68 178,44 205,48 C232,52 246,36 272,38 C298,40 314,24 340,26 C356,27 384,16 400,14"
            fill="none"
            stroke="url(#lineStroke)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="400" cy="14" r="3.5" fill="#8b5cf6" stroke="#fff" strokeWidth="1.5" />
        </svg>
        <div className="flex justify-between text-[8px] text-zinc-400">
          {["Wk 1", "Wk 2", "Wk 3", "Wk 4", "Wk 5", "Wk 6", "Wk 7", "Wk 8"].map((w) => (
            <span key={w}>{w}</span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-xl border border-zinc-200/80 bg-white p-2.5 shadow-sm">
          <p className="text-[10px] font-semibold text-zinc-800">By status</p>
          <div className="mt-2 flex h-1.5 w-full overflow-hidden rounded-full">
            <span className="h-full w-[42%] bg-brand-500" />
            <span className="h-full w-[27%] bg-amber-400" />
            <span className="h-full w-[19%] bg-sky-400" />
            <span className="h-full w-[12%] bg-emerald-400" />
          </div>
          <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-0.5 text-[8px] text-zinc-500">
            {[
              ["Done", "42%"],
              ["Active", "27%"],
              ["Review", "19%"],
              ["Backlog", "12%"],
            ].map(([label, pct]) => (
              <span key={label} className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-sm bg-current" />
                {label} {pct}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-zinc-200/80 bg-white p-2.5 shadow-sm">
          <p className="text-[10px] font-semibold text-zinc-800">Top contributor</p>
          <div className="mt-2 flex items-center gap-2">
            <Avatar initials="MT" color="bg-emerald-500" />
            <div className="min-w-0">
              <p className="text-[10px] font-semibold text-zinc-800">Maya Torres</p>
              <p className="text-[8px] text-zinc-400">48 tasks shipped</p>
            </div>
            <span className="ml-auto flex items-center gap-0.5 text-[9px] font-semibold text-emerald-600">
              <TrendingUp className="h-3 w-3" /> 32%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AutomationView() {
  const rules = [
    {
      icon: Zap,
      color: "bg-amber-100 text-amber-600",
      name: "Auto-assign on creation",
      desc: "When a task is created in Design → assign to Maya Torres",
      runs: "312 runs",
      on: true,
    },
    {
      icon: MessageSquare,
      color: "bg-sky-100 text-sky-600",
      name: "Ship announcements",
      desc: "When a task moves to Done → post to #ship-it on Slack",
      runs: "89 runs",
      on: true,
    },
    {
      icon: RefreshCw,
      color: "bg-emerald-100 text-emerald-600",
      name: "Sync due dates",
      desc: "When a task is delayed → extend the milestone due date",
      runs: "156 runs",
      on: false,
    },
  ];

  return (
    <div className="flex h-full flex-col gap-3 overflow-hidden bg-zinc-50/70 p-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-zinc-900">Automations</h3>
          <p className="text-[10px] text-zinc-500">
            7 automations active this month
          </p>
        </div>
        <span className="flex items-center gap-1.5 rounded-lg bg-zinc-900 px-2.5 py-1.5 text-[9px] font-medium text-white">
          <Sparkles className="h-2.5 w-2.5" /> New automation
        </span>
      </div>

      <div className="flex flex-col gap-2 overflow-y-auto">
        {rules.map(({ icon: Icon, color, name, desc, runs, on }) => (
          <div
            key={name}
            className="flex items-start gap-3 rounded-xl border border-zinc-200/80 bg-white p-3 shadow-sm"
          >
            <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${color}`}>
              <Icon className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-[11px] font-semibold text-zinc-800">{name}</p>
                <span className="rounded bg-zinc-100 px-1.5 py-0.5 text-[8px] font-medium text-zinc-500">
                  {runs}
                </span>
              </div>
              <p className="mt-0.5 text-[9.5px] leading-snug text-zinc-500">{desc}</p>
            </div>
            <span
              className={`relative ml-auto mt-0.5 inline-flex h-4 w-7 shrink-0 items-center rounded-full transition-colors ${
                on ? "bg-brand-600" : "bg-zinc-200"
              }`}
            >
              <span
                className={`h-3 w-3 rounded-full bg-white shadow transition-transform ${
                  on ? "translate-x-3.5" : "translate-x-0.5"
                }`}
              />
            </span>
          </div>
        ))}
      </div>

      <div className="mt-auto rounded-xl bg-gradient-to-r from-brand-50 to-violet-50 p-3 ring-1 ring-inset ring-brand-100">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-brand-600 text-white">
            <Gauge className="h-3 w-3" />
          </span>
          <p className="text-[10px] font-semibold text-brand-800">
            ~14 hrs saved every week
          </p>
        </div>
        <p className="mt-1 text-[9px] leading-snug text-brand-700/80">
          Your team is on track to save 730+ hours this quarter with automation.
        </p>
      </div>
    </div>
  );
}

export function DashboardMockup({ view }: { view: DashboardView }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-2xl shadow-zinc-900/10 ring-1 ring-black/5">
      <TopBar />
      <div className="flex h-[340px] sm:h-[380px]">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        {view === "board" && <BoardView />}
        {view === "analytics" && <AnalyticsView />}
        {view === "automation" && <AutomationView />}
      </div>
    </div>
  );
}
