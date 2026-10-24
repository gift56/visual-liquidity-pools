"use client";

import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function CardsContainersSection() {
  return (
    <section id="cards-containers" className="mb-20 GlassCard padding-lg">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h3 className="text-h2 font-bold mb-1">04. Cards & Containers</h3>
          <p className="text-text-secondary text-sm">
            Glassmorphic surfaces with depth and subtle glow.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard padding="md">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-accent-violet shadow-glow flex items-center justify-center">
              <span className="text-[10px] font-bold text-white">W</span>
            </div>
            <span className="text-body font-semibold">Wallet</span>
          </div>
          <p className="text-caption text-text-muted mb-4">Total Balance</p>
          <div className="text-h1 font-bold text-text-primary">$12,458.32</div>
          <div className="flex items-center gap-1 mt-2">
            <span className="text-accent-green text-sm font-medium">
              ↑ 12.5%
            </span>
            <span className="text-accent-green text-xs">+$1,367.24</span>
          </div>
        </GlassCard>

        <GlassCard padding="md">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-accent-cyan shadow-glow-cyan flex items-center justify-center">
              <span className="text-[10px] font-bold text-white">C</span>
            </div>
            <span className="text-body font-semibold">Connect Wallet</span>
          </div>
          <p className="text-caption text-text-muted mb-4">
            Start your Web3 journey
          </p>
          <Button variant="primary" className="w-full">
            Connect
          </Button>
        </GlassCard>

        <GlassCard padding="md">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-accent-green shadow-glow-green flex items-center justify-center">
              <span className="text-[10px] font-bold text-white">N</span>
            </div>
            <span className="text-body font-semibold">Network Status</span>
          </div>
          <p className="text-caption text-text-muted mb-1">Ethereum Mainnet</p>
          <StatusBadge status="connected" label="Online" />
        </GlassCard>
      </div>
    </section>
  );
}
