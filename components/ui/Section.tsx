import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  showDivider?: boolean;
  variant?: "default" | "tonal";
}

export const Section = ({
  children,
  className,
  showDivider = false,
  variant = "default",
  ...props
}: SectionProps) => {
  return (
    <section
      {...props}   // 👈 forwards style, id, etc.
      className={cn(
        "relative py-24",
        variant === "tonal" && "bg-white/[0.01]",
        showDivider && "border-b border-white/[0.03]",
        className
      )}
    >
      {showDivider && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      )}
      {children}
    </section>
  );
};