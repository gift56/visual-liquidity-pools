"use client";

type Status =
  | "connected"
  | "pending"
  | "failed"
  | "completed"
  | "live"
  | "coming-soon";

export interface StatusBadgeProps {
  status: Status;
  label?: string;
  className?: string;
}

const dotStyles: Record<Status, string> = {
  connected: "bg-accent-green shadow-glow-green",
  pending: "bg-accent-gold shadow-glow-gold",
  failed: "bg-accent-pink shadow-glow-pink",
  completed: "bg-accent-violet shadow-glow",
  live: "bg-accent-cyan shadow-glow-cyan",
  "coming-soon": "bg-text-muted",
};

const labels: Record<Status, string> = {
  connected: "Connected",
  pending: "Pending",
  failed: "Failed",
  completed: "Completed",
  live: "Live",
  "coming-soon": "Coming Soon",
};

export function StatusBadge({ status, label, className }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/80 px-2.5 py-1 text-text-secondary text-[0.75em] backdrop-blur${className ? ` ${className}` : ""}`}
    >
      <span
        className={`inline-block h-2 w-2 rounded-full ${dotStyles[status]}`}
        aria-hidden="true"
      />
      <span>{label ?? labels[status]}</span>
    </span>
  );
}
