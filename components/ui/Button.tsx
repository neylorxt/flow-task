import type { ReactNode } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost" | "inverse";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-zinc-900 text-white shadow-sm hover:bg-zinc-800 hover:shadow-md hover:shadow-zinc-900/15",
  secondary:
    "bg-white text-zinc-800 ring-1 ring-inset ring-zinc-200 hover:ring-zinc-300 hover:bg-zinc-50",
  ghost: "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/70",
  inverse:
    "bg-white text-zinc-900 shadow-sm hover:bg-zinc-100 hover:shadow-md",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm gap-1.5",
  md: "h-11 px-5 text-sm gap-2",
  lg: "h-12 px-7 text-base gap-2",
};

type ButtonProps = {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
  target?: string;
  onClick?: () => void;
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  target,
  onClick,
}: ButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      onClick={onClick}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-all duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
