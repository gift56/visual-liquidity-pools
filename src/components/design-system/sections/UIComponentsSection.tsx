"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TabSelector } from "@/components/ui/TabSelector";

export function UIComponentsSection() {
  return (
    <section id="ui-components" className="mb-20 GlassCard padding-lg">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h3 className="text-h2 font-bold mb-1">03. UI Components</h3>
          <p className="text-text-secondary text-sm">
            Reusable components for consistent and scalable design.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h4 className="text-section font-bold mb-4">Buttons</h4>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Primary (Default)</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
            <p className="text-micro text-text-muted mt-2">
              Primary / Outline / Ghost + hover, focus, active states.
            </p>
          </div>

          <div>
            <h4 className="text-section font-bold mb-4">Input Fields</h4>
            <div className="space-y-3">
              <Input placeholder="Search assets, wallet, or address..." />
              <Input placeholder="Enter your email address" type="email" />
              <Input placeholder="Select network" disabled />
            </div>
            <p className="text-micro text-text-muted mt-2">
              Surface bg, border-border, focus ring accent-cyan.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h4 className="text-section font-bold mb-4">Status Badges</h4>
            <div className="flex flex-wrap gap-3">
              <StatusBadge status="connected" />
              <StatusBadge status="pending" />
              <StatusBadge status="failed" />
              <StatusBadge status="completed" />
              <StatusBadge status="live" />
              <StatusBadge status="coming-soon" />
            </div>
            <p className="text-micro text-text-muted mt-2">
              Pill-shaped with colored dot indicator.
            </p>
          </div>

          <div>
            <h4 className="text-section font-bold mb-4">Tab Selector</h4>
            <TabSelector
              tabs={["All", "DeFi", "NFTs", "DAO", "Bridge"]}
              active="All"
              onChange={() => {}}
            />
            <p className="text-micro text-text-muted mt-2">
              Segmented pills, active state uses accent-violet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
