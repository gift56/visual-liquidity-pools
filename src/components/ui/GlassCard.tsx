"use client";

import type * as React from "react";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: "none" | "sm" | "md" | "lg";
}

export function GlassCard({
  children,
  className,
  padding = "md",
  ...props
}: GlassCardProps) {
  const paddingClasses: Record<string, string> = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={
        "relative rounded-card border border-border/50 bg-surface/80 backdrop-blur-md shadow-glow transition-all duration-300 hover:border-accent-cyan/50" +
        " " +
        paddingClasses[padding] +
        (className ? ` ${className}` : "")
      }
      {...props}
    >
      {children}
    </div>
  );
}
