"use client";

export interface TabSelectorProps {
  tabs: string[];
  active: string;
  onChange: (value: string) => void;
  className?: string;
}

export function TabSelector({
  tabs,
  active,
  onChange,
  className,
}: TabSelectorProps) {
  return (
    <div
      role="tablist"
      aria-label="Tab navigation"
      className={`inline-flex gap-1 rounded-pill border border-border bg-surface/50 px-0.5 py-0.5 backdrop-blur${className ? ` ${className}` : ""}`}
    >
      {tabs.map((tab) => {
        const isActive = active === tab;
        return (
          <button
            type="button"
            key={tab}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab)}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors duration-200${isActive ? " bg-accent-violet text-white shadow-glow" : " text-text-muted hover:text-text-primary hover:bg-surface/50"}`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
