"use client";

import type * as React from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const base =
  "inline-flex items-center justify-center gap-2 font-medium text-text-primary transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan rounded-lg";

const sizeStyles: Record<Size, string> = {
  sm: "px-2.5 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-accent-violet text-white shadow-glow hover:bg-accent-cyan hover:text-bg-primary active:scale-95",
  outline:
    "border border-border bg-transparent hover:bg-surface hover:border-accent-cyan active:scale-95",
  ghost: "bg-transparent hover:bg-surface/50 active:scale-95",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${base} ${sizeStyles[size]} ${variants[variant]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}
