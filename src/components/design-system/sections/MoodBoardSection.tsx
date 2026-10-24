"use client";

import { Globe, Zap } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

export function MoodBoardSection() {
  return (
    <section id="style-mood-board" className="mb-20 GlassCard padding-lg">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h3 className="text-h2 font-bold mb-1">10. Style / Mood Board</h3>
          <p className="text-text-secondary text-sm">
            The overall visual direction and vibe.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <GlassCard
          padding="md"
          className="h-80 flex flex-col justify-between relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-20 blur-md" />
          <div className="relative z-10 p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-accent-pink shadow-glow-pink" />
              <span className="text-caption font-medium text-text-secondary">
                <Zap className="w-3 h-3 inline mr-1" /> Futuristic
              </span>
            </div>
            <h4 className="text-h2 font-bold text-text-primary mb-2">
              Decentralized Finance for a Borderless World.
            </h4>
            <p className="text-body text-text-secondary">
              Neon accents on deep dark backdrop, glass surfaces, glowing UI.
            </p>
          </div>
        </GlassCard>
        <GlassCard
          padding="md"
          className="h-80 flex flex-col justify-between relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-20 blur-md" />
          <div className="relative z-10 p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-accent-cyan shadow-glow-cyan" />
              <span className="text-caption font-medium text-text-secondary">
                <Globe className="w-3 h-3 inline mr-1" /> Global
              </span>
            </div>
            <h4 className="text-h2 font-bold text-text-primary mb-2">
              Web3 UI Kit / Design System / v1.0
            </h4>
            <p className="text-body text-text-secondary">
              A modern, futuristic and professional UI kit for Web3 dApps.
            </p>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
