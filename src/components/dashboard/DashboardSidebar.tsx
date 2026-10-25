"use client";

import {
  Bell,
  ClipboardList,
  Compass,
  Gift,
  Home,
  MessageCircle,
  Shield,
  Swords,
  Trophy,
  Users,
} from "lucide-react";

const royalGames = [
  { label: "Home page", icon: Home },
  { label: "Duel Arena", icon: Swords },
  { label: "Royal Roulette", icon: Trophy },
  { label: "Chest Battle", icon: Shield },
];

const features = [
  { label: "Friends", icon: Users, badge: "0" },
  { label: "Notifications", icon: Bell },
  { label: "Rewards", icon: Gift },
];

interface DashboardSidebarProps {
  activeNav: string;
  onNavChange: (item: string) => void;
}

export function DashboardSidebar({
  activeNav,
  onNavChange,
}: DashboardSidebarProps) {
  return (
    <aside className="hidden min-h-0 flex-col border-r border-white/6 bg-dashboard-sidebar px-3 py-4 md:flex">
      <div className="mb-2 flex items-center justify-between px-2">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.13em] text-text-muted">
          Royal Games
        </h2>
        <button
          type="button"
          aria-label="Collapse Royal Games menu"
          className="rounded p-1 text-text-muted hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
        >
          <Compass className="h-3 w-3" />
        </button>
      </div>
      <nav aria-label="Royal games" className="space-y-1">
        {royalGames.map(({ label, icon: Icon }) => (
          <button
            type="button"
            key={label}
            aria-current={activeNav === label ? "page" : undefined}
            onClick={() => onNavChange(label)}
            className={`flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan ${
              activeNav === label
                ? "bg-accent-violet text-white shadow-glow"
                : "text-text-secondary hover:bg-white/5 hover:text-white"
            }`}
          >
            <Icon className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">{label}</span>
          </button>
        ))}
      </nav>

      <div className="mb-2 mt-6 flex items-center justify-between px-2">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.13em] text-text-muted">
          Custom Features
        </h2>
        <span className="text-[9px] text-text-muted">•</span>
      </div>
      <nav aria-label="Custom features" className="space-y-1">
        {features.map(({ label, icon: Icon, badge }) => (
          <button
            type="button"
            key={label}
            onClick={() => onNavChange(label)}
            aria-current={activeNav === label ? "page" : undefined}
            className={`flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan ${
              activeNav === label
                ? "bg-accent-violet text-white"
                : "text-text-secondary hover:bg-white/5 hover:text-white"
            }`}
          >
            <Icon className="h-3.5 w-3.5 shrink-0" />
            <span className="min-w-0 truncate">{label}</span>
            {badge && (
              <span className="rounded bg-surface px-1 py-0.5 text-[10px] text-text-secondary">
                {badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      <div className="mt-6 border-t border-white/6 pt-4">
        <h2 className="mb-3 px-2 text-[11px] font-semibold uppercase tracking-[0.13em] text-text-muted">
          Additional Information
        </h2>
        <div className="space-y-2 px-2">
          <div className="flex items-center gap-2 text-[11px] text-text-secondary">
            <ClipboardList className="h-3 w-3 text-accent-gold" />
            <span>Daily Tasks</span>
            <span className="ml-auto text-accent-gold">1/5</span>
          </div>
          <div className="h-1 overflow-hidden rounded-full bg-white/8">
            <div className="h-full w-1/5 rounded-full bg-accent-gold" />
          </div>
          <div className="flex items-center gap-2 pt-1 text-[11px] text-text-muted">
            <MessageCircle className="h-3 w-3" />
            <span>Royal community</span>
          </div>
        </div>
      </div>
      <p className="mt-auto px-2 pt-5 text-[10px] leading-relaxed text-text-muted">
        Fair play. Good luck.
        <br />
        Built for the royal few.
      </p>
    </aside>
  );
}
