"use client";

import { GlassCard } from "@/components/ui/GlassCard";

const typeScale = [
  {
    label: "Display",
    className: "text-display",
    sample: "Aa",
    desc: "64/72 — Bold",
  },
  {
    label: "H1 Heading",
    className: "text-h1",
    sample: "H1 Heading",
    desc: "48/56 — Semibold",
  },
  {
    label: "H2 Heading",
    className: "text-h2",
    sample: "H2 Heading",
    desc: "32/40 — Semibold",
  },
  {
    label: "Section Title",
    className: "text-section",
    sample: "Section Title",
    desc: "24/32 — Semibold",
  },
  {
    label: "Body Text",
    className: "text-body",
    sample: "Body Text",
    desc: "16/24 — Regular",
  },
  {
    label: "Caption / Label",
    className: "text-caption",
    sample: "Caption / Label",
    desc: "14/20 — Medium",
  },
  {
    label: "Micro Text",
    className: "text-micro",
    sample: "Micro Text",
    desc: "12/16 — Regular",
  },
];

export function TypographySection() {
  return (
    <section id="typography" className="mb-20 GlassCard padding-lg">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h3 className="text-h2 font-bold mb-1">02. Typography</h3>
          <p className="text-text-secondary text-sm">
            Inter / Plus Jakarta Sans (Geometric Sans-serif)
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {typeScale.map((item) => (
          <GlassCard key={item.label} padding="md">
            <div className="p-6">
              <div className={`${item.className} mb-2 font-bold`}>
                {item.sample}
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-caption font-medium text-text-secondary block">
                    {item.label}
                  </span>
                  <span className="text-micro font-mono text-text-muted">
                    {item.desc}
                  </span>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
