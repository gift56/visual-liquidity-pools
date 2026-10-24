"use client";

import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

const palette = [
  { name: "Primary Background", key: "bg-primary", value: "#0D0E12" },
  { name: "Secondary Background", key: "bg-secondary", value: "#14151B" },
  { name: "Surface / Card", key: "surface", value: "#1A1C25" },
  { name: "Border / Stroke", key: "border", value: "#2A2D3A" },
  { name: "Accent Violet", key: "accent-violet", value: "#4F46E5" },
  { name: "Accent Cyan", key: "accent-cyan", value: "#22D3EE" },
  { name: "Accent Green", key: "accent-green", value: "#22C55E" },
  { name: "Accent Gold", key: "accent-gold", value: "#F59E0B" },
  { name: "Accent Pink", key: "accent-pink", value: "#EC4899" },
  { name: "Text Primary", key: "text-primary", value: "#E2E8F0" },
  { name: "Text Secondary", key: "text-secondary", value: "#94A3B8" },
  { name: "Text Muted", key: "text-muted", value: "#64748B" },
];

export function ColorPaletteSection() {
  return (
    <section id="color-palette" className="mb-20 GlassCard padding-lg">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h3 className="text-h2 font-bold mb-1">01. Color Palette</h3>
          <p className="text-text-secondary text-sm">
            The foundation of your design system.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm">
            Copy CSS
          </Button>
          <Button variant="outline" size="sm">
            Copy Tailwind
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {palette.map((swatch) => (
          <GlassCard key={swatch.key} padding="none">
            <div className="p-6">
              <div
                className="h-16 rounded-card border border-border mb-4"
                style={{ backgroundColor: swatch.value }}
              />
              <div className="flex justify-between items-baseline mb-1">
                <span className="text-caption font-medium text-text-secondary">
                  {swatch.name}
                </span>
                <span className="text-micro font-mono text-text-muted">
                  {swatch.key}
                </span>
              </div>
              <code className="block text-micro font-mono text-text-muted break-all">
                {swatch.value}
              </code>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
