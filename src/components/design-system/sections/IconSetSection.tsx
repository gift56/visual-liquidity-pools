"use client";

import {
  Image as ImageIcon,
  Link2,
  RefreshCw,
  Search,
  Settings,
  Shield,
  TrendingUp,
  Wallet,
  Zap,
} from "lucide-react";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { GlassCard } from "@/components/ui/GlassCard";

const icons = [
  {
    name: "Wallet",
    color: "accent-violet",
    lucide: <Wallet className="w-4 h-4" />,
    react: <FaEthereum className="text-xl" />,
  },
  {
    name: "Swap",
    color: "accent-cyan",
    lucide: <RefreshCw className="w-4 h-4" />,
    react: <FaBitcoin className="text-xl" />,
  },
  {
    name: "Bridge",
    color: "accent-green",
    lucide: <Link2 className="w-4 h-4" />,
    react: null,
  },
  {
    name: "Stake",
    color: "accent-gold",
    lucide: <TrendingUp className="w-4 h-4" />,
    react: null,
  },
  {
    name: "NFT",
    color: "accent-pink",
    lucide: <ImageIcon className="w-4 h-4" />,
    react: null,
  },
  {
    name: "DAO",
    color: "accent-violet",
    lucide: <Shield className="w-4 h-4" />,
    react: null,
  },
  {
    name: "Settings",
    color: "accent-cyan",
    lucide: <Settings className="w-4 h-4" />,
    react: null,
  },
  {
    name: "Search",
    color: "accent-green",
    lucide: <Search className="w-4 h-4" />,
    react: null,
  },
  {
    name: "Fire / Gas",
    color: "accent-pink",
    lucide: <Zap className="w-4 h-4" />,
    react: null,
  },
  {
    name: "Shield",
    color: "accent-cyan",
    lucide: <Shield className="w-4 h-4" />,
    react: null,
  },
  {
    name: "Growth",
    color: "accent-green",
    lucide: <TrendingUp className="w-4 h-4" />,
    react: null,
  },
  {
    name: "Link",
    color: "accent-gold",
    lucide: <Link2 className="w-4 h-4" />,
    react: null,
  },
];

const shadowMap: Record<string, string> = {
  "accent-violet": "shadow-glow",
  "accent-cyan": "shadow-glow-cyan",
  "accent-green": "shadow-glow-green",
  "accent-gold": "shadow-glow-gold",
  "accent-pink": "shadow-glow-pink",
};

export function IconSetSection() {
  return (
    <section id="icon-set" className="mb-20 GlassCard padding-lg">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h3 className="text-h2 font-bold mb-1">05. Icon Set</h3>
          <p className="text-text-secondary text-sm">
            Custom 3D-styled icons with neon lighting.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
        {icons.map((icon) => (
          <GlassCard key={icon.name} padding="sm">
            <div className="flex flex-col items-center justify-center gap-2 h-24">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center bg-surface border border-border ${shadowMap[icon.color]}`}
              >
                {icon.lucide}
                {icon.react && <span className="absolute">{icon.react}</span>}
              </div>
              <span className="text-micro text-text-secondary">
                {icon.name}
              </span>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
