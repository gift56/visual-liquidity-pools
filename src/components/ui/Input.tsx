"use client";

import type * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={
        "flex h-10 w-full rounded-lg border border-border bg-surface px-3 py-2 text-text-primary placeholder:text-text-muted transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm" +
        (className ? ` ${className}` : "")
      }
      {...props}
    />
  );
}
