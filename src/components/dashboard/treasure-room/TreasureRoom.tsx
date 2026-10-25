"use client";

import { ArrowLeft, Clock3 } from "lucide-react";
import { useEffect, useState } from "react";
import { LiveFeed } from "./LiveFeed";
import { RewardCards } from "./RewardCards";
import { chestRewards } from "./rewards";
import { SpinWheel } from "./SpinWheel";

const SPIN_COOLDOWN_SECONDS = 24 * 60 + 18;

function formatCountdown(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return [hours, minutes, remainingSeconds]
    .map((unit) => unit.toString().padStart(2, "0"))
    .join(":");
}

export function TreasureRoom() {
  const [cooldownSeconds, setCooldownSeconds] = useState(0);
  const cooldownActive = cooldownSeconds > 0;

  useEffect(() => {
    if (!cooldownActive) {
      return;
    }

    const interval = window.setInterval(() => {
      setCooldownSeconds((seconds) => Math.max(seconds - 1, 0));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [cooldownActive]);

  return (
    <section className="min-h-0 min-w-0 overflow-y-auto overscroll-contain bg-dashboard-center">
      <div className="flex min-h-full flex-col px-3 py-3 sm:px-4 lg:px-5">
        <div className="flex shrink-0 items-center justify-between">
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded text-[11px] text-text-secondary transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to market
          </button>
          <span
            role="timer"
            aria-label={
              cooldownActive
                ? `Next spin available in ${formatCountdown(cooldownSeconds)}`
                : "Spin is available"
            }
            className="flex items-center gap-1 rounded-full border border-white/[0.07] bg-white/4 px-2 py-1 text-[10px] text-text-secondary"
          >
            <Clock3 className="h-3 w-3 text-accent-cyan" />
            {formatCountdown(cooldownSeconds)}
          </span>
        </div>

        <SpinWheel
          cooldownSeconds={cooldownSeconds}
          onSpinStart={() => setCooldownSeconds(SPIN_COOLDOWN_SECONDS)}
        />
        <RewardCards rewards={chestRewards} />
        <LiveFeed />
      </div>
    </section>
  );
}
