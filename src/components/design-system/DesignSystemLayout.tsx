"use client";

import { Button } from "@/components/ui/Button";

interface DesignSystemLayoutProps {
  children: React.ReactNode;
}

export function DesignSystemLayout({ children }: DesignSystemLayoutProps) {
  return (
    <div
      className="min-h-screen bg-bg-primary text-text-primary antialiased selection:bg-accent-violet/30"
      suppressHydrationWarning
    >
      <header className="border-b border-border/40 bg-bg-primary/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-accent-violet shadow-glow flex items-center justify-center">
              <span className="text-[10px] font-bold text-white">V</span>
            </div>
            <span className="text-h1 font-bold tracking-tight">
              Visual Liquidity Pools
            </span>
          </div>
          <nav className="flex gap-6 text-sm font-medium text-text-secondary">
            <a
              href="#overview"
              className="hover:text-accent-cyan transition-colors"
            >
              Overview
            </a>
            <a
              href="#components"
              className="hover:text-accent-cyan transition-colors"
            >
              Components
            </a>
            <a
              href="#tokens"
              className="hover:text-accent-cyan transition-colors"
            >
              Tokens
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">{children}</main>

      <footer className="border-t border-border/40 bg-bg-primary/80 backdrop-blur py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-micro text-text-muted">
            Web3 UI Kit — Design System / v1.0
          </p>
          <p className="text-micro text-text-muted">
            Read-only by default. No wallet required.
          </p>
        </div>
      </footer>
    </div>
  );
}

export function DesignSystemHero() {
  return (
    <section className="mb-20" id="overview">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-display font-bold tracking-tight mb-2">
            Design System
          </h2>
          <p className="text-text-secondary text-body">
            Dark gamified HUD design system for Visual Liquidity Pools.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="primary">View on GitHub</Button>
          <Button variant="outline">Download Kit</Button>
        </div>
      </div>
    </section>
  );
}
