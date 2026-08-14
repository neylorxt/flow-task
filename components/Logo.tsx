type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <a
      href="#"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="FlowTask home"
    >
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 shadow-sm transition-transform duration-200 group-hover:scale-105">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 6.5c0-.6.4-1 1-1h4.6c.6 0 1 .4 1 1V11c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V6.5Z"
            fill="#818cf8"
          />
          <path
            d="M13.4 12c0-.6.4-1 1-1H19c.6 0 1 .4 1 1v5.5c0 .6-.4 1-1 1h-4.6c-.6 0-1-.4-1-1V12Z"
            fill="#fff"
            opacity="0.9"
          />
          <path
            d="M4 15.5c0-.6.4-1 1-1h6.4c.6 0 1 .4 1 1V17c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1v-1.5Z"
            fill="#c7d2fe"
          />
          <path
            d="M16 6h2.5c.6 0 1 .4 1 1v.6c0 .6-.4 1-1 1H16c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1Z"
            fill="#fff"
            opacity="0.9"
          />
        </svg>
      </span>
      <span className="text-xl font-semibold tracking-tight text-zinc-900">
        FlowTask
      </span>
    </a>
  );
}
