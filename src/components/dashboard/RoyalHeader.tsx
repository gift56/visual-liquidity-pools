"use client";

import { Bell, ChevronDown, Search } from "lucide-react";
import { FaEthereum } from "react-icons/fa";

const categories = ["Royal", "Battles"];

interface RoyalHeaderProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function RoyalHeader({
  activeCategory,
  onCategoryChange,
}: RoyalHeaderProps) {
  return (
    <header className="flex h-[58px] shrink-0 items-center gap-3 border-b border-white/[0.06] bg-dashboard-header px-4 sm:px-5">
      <a
        href="/"
        aria-label="Wager home"
        className="flex shrink-0 items-center gap-2 rounded-md font-bold tracking-wide text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
      >
        <span className="text-base text-accent-gold">♛</span>
        <span className="text-[15px]">WAGER</span>
      </a>

      <nav
        aria-label="Game categories"
        className="hidden items-center gap-1 sm:flex"
      >
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            aria-pressed={activeCategory === category}
            onClick={() => onCategoryChange(category)}
            className={`rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan ${
              activeCategory === category
                ? "bg-white/[0.08] text-white"
                : "text-text-muted hover:bg-white/[0.05] hover:text-text-primary"
            }`}
          >
            {category}
          </button>
        ))}
      </nav>

      <label className="relative ml-auto hidden min-w-28 max-w-48 flex-1 sm:block">
        <span className="sr-only">Search games</span>
        <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-text-muted" />
        <input
          type="search"
          placeholder="Search for games"
          className="h-8 w-full rounded-lg border border-white/[0.06] bg-white/[0.035] pl-8 pr-2 text-xs text-text-primary outline-none placeholder:text-text-muted focus-visible:ring-2 focus-visible:ring-accent-cyan"
        />
      </label>

      <div className="ml-auto flex items-center gap-2 sm:ml-0">
        <div className="flex h-8 items-center gap-1.5 rounded-lg border border-white/[0.07] bg-white/[0.04] px-2 text-xs">
          <FaEthereum
            className="text-[13px] text-accent-cyan"
            aria-hidden="true"
          />
          <span className="text-text-secondary">0.0000</span>
        </div>
        <button
          type="button"
          aria-label="Notifications"
          className="relative grid h-8 w-8 place-items-center rounded-lg text-text-secondary transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-accent-pink" />
        </button>
        <button
          type="button"
          aria-label="Account menu"
          className="flex h-8 items-center gap-1 rounded-full border border-white/10 bg-surface px-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
        >
          <span className="grid h-5 w-5 place-items-center rounded-full bg-gradient-to-br from-accent-cyan to-accent-violet text-[9px] font-bold text-white">
            V
          </span>
          <ChevronDown className="h-3 w-3 text-text-muted" />
        </button>
      </div>
    </header>
  );
}
