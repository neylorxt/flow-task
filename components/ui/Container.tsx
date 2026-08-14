import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
};

export function Container({
  children,
  className = "",
  size = "default",
}: ContainerProps) {
  const widths = {
    default: "max-w-6xl",
    wide: "max-w-7xl",
    narrow: "max-w-3xl",
  };

  return (
    <div className={`mx-auto w-full px-5 sm:px-8 ${widths[size]} ${className}`}>
      {children}
    </div>
  );
}
