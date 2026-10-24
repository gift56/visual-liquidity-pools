"use client";

import { Droplets } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

export function IllustrationsSection() {
  return (
    <section id="3d-illustrations" className="mb-20 GlassCard padding-lg">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h3 className="text-h2 font-bold mb-1">
            06. 3D Illustration Elements
          </h3>
          <p className="text-text-secondary text-sm">
            Use for hero sections, empty states, and feature highlights.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center min-h-[300px]">
        <GlassCard
          padding="none"
          className="w-full max-w-md h-64 flex items-center justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent-violet/20 to-accent-cyan/20 rounded-card" />
          <div className="relative z-10 p-8">
            <div className="w-24 h-24 rounded-2xl bg-accent-violet/30 border border-accent-violet/50 shadow-glow flex items-center justify-center mb-4">
              <Droplets className="text-4xl text-accent-violet" />
            </div>
            <h4 className="text-h2 font-bold text-center text-text-primary mb-2">
              Liquid Simulation
            </h4>
            <p className="text-body text-center text-text-secondary">
              Interactive 3D WebGL liquid simulation of connected tanks.
            </p>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
