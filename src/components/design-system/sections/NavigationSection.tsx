"use client";

import { Search } from "lucide-react";
import Image from "next/image";
import { GlassCard } from "@/components/ui/GlassCard";
import { Input } from "@/components/ui/Input";

export function NavigationSection() {
  return (
    <section id="navigation" className="mb-20 GlassCard padding-lg">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h3 className="text-h2 font-bold mb-1">07. Navigation & Sidebar</h3>
          <p className="text-text-secondary text-sm">
            Clean, minimal and functional navigation patterns.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <GlassCard padding="md" className="w-full lg:w-80">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-6 h-6 rounded-lg bg-accent-violet shadow-glow flex items-center justify-center">
              <span className="text-[9px] font-bold text-white">V</span>
            </div>
            <span className="text-body font-bold">Web3D App</span>
          </div>
          <div className="relative">
            <Input placeholder="Search..." className="pr-10" />
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-text-muted hover:text-accent-cyan"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
          <nav className="mt-6 space-y-1">
            {[
              { name: "Home", active: true },
              { name: "Swap" },
              { name: "Bridge" },
              { name: "NFTs" },
              { name: "Portfolio" },
              { name: "DAO" },
              { name: "Settings" },
            ].map((item) => (
              <button
                type="button"
                key={item.name}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  item.active
                    ? "bg-accent-violet text-white shadow-glow"
                    : "text-text-secondary hover:text-text-primary hover:bg-surface/50"
                }`}
              >
                <span className="w-5 text-center">
                  {item.active ? "▸" : "•"}
                </span>
                {item.name}
              </button>
            ))}
          </nav>
        </GlassCard>

        <GlassCard padding="md" className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full border border-border overflow-hidden">
              <Image
                className="w-full h-full object-cover"
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Builder"
                alt="Builder"
                width={32}
                height={32}
                priority
              />
            </div>
            <div>
              <p className="text-body font-semibold">Good morning, Builder</p>
              <p className="text-caption text-text-muted">
                Keep building. The future is decentralized.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 rounded-xl border border-border bg-surface/50 mb-6">
            <div>
              <p className="text-caption text-text-muted">Your Portfolio</p>
              <p className="text-h1 font-bold text-text-primary">$12,458.32</p>
              <p className="text-accent-green text-sm font-medium">↑ 12.5%</p>
            </div>
            <div className="flex gap-3">
              {["Deposit", "Swap", "Bridge", "Earn"].map((label) => (
                <button
                  type="button"
                  key={label}
                  className="p-2 rounded-lg hover:bg-accent-violet/20 text-text-secondary hover:text-accent-cyan transition-colors"
                >
                  <span className="text-[14px]">
                    {label === "Deposit"
                      ? "💰"
                      : label === "Swap"
                        ? "🔄"
                        : label === "Bridge"
                          ? "🌉"
                          : "📈"}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
