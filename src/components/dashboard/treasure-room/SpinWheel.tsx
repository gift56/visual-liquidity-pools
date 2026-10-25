"use client";

import { Coins, Sparkles } from "lucide-react";
import Image from "next/image";
import { type CSSProperties, useEffect, useRef, useState } from "react";
import { chestRewards, rewardSegmentDegrees } from "./rewards";

const SPIN_DURATION_MS = 4_800;
const COMPLETE_ROTATIONS = 6;

interface SpinWheelProps {
  cooldownSeconds: number;
  onSpinStart: () => void;
}

function formatCountdown(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
}

export function SpinWheel({ cooldownSeconds, onSpinStart }: SpinWheelProps) {
  const [rotation, setRotation] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const finishTimer = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (finishTimer.current !== null) {
        window.clearTimeout(finishTimer.current);
      }
    },
    [],
  );

  function spin() {
    if (isSpinning || cooldownSeconds > 0) {
      return;
    }

    const winner = Math.floor(Math.random() * chestRewards.length);
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    setSelectedIndex(null);
    onSpinStart();

    if (reducedMotion) {
      setRotation((current) => {
        const currentAngle = ((current % 360) + 360) % 360;
        const targetAngle = (360 - winner * rewardSegmentDegrees) % 360;
        const alignment = (targetAngle - currentAngle + 360) % 360;
        return current + COMPLETE_ROTATIONS * 360 + alignment;
      });
      setSelectedIndex(winner);
      return;
    }

    setIsSpinning(true);
    setRotation((current) => {
      const currentAngle = ((current % 360) + 360) % 360;
      const targetAngle = (360 - winner * rewardSegmentDegrees) % 360;
      const alignment = (targetAngle - currentAngle + 360) % 360;
      return current + COMPLETE_ROTATIONS * 360 + alignment;
    });

    finishTimer.current = window.setTimeout(() => {
      setSelectedIndex(winner);
      setIsSpinning(false);
      finishTimer.current = null;
    }, SPIN_DURATION_MS);
  }

  const selectedReward =
    selectedIndex === null ? null : chestRewards[selectedIndex];
  const spinDisabled = isSpinning || cooldownSeconds > 0;
  const spinLabel = isSpinning
    ? "SPINNING..."
    : selectedReward
      ? spinDisabled
        ? `SPIN AGAIN · ${formatCountdown(cooldownSeconds)}`
        : "SPIN AGAIN"
      : "SPIN TO WIN";

  return (
    <div className="flex min-h-[min(74vh,680px)] flex-1 items-center justify-center py-5">
      <div className="prize-wheel-shell">
        <div
          className="prize-wheel absolute inset-0 overflow-hidden rounded-full border border-white/16 shadow-prize-wheel"
          style={
            {
              transform: `rotate(${rotation}deg)`,
              "--wheel-angle": `${rotation}deg`,
            } as CSSProperties
          }
          aria-hidden="true"
        >
          <div className="absolute inset-[5%] rounded-full border border-white/13" />
          {chestRewards.map((reward, index) => (
            <div
              key={`${reward.name}-${index}`}
              className="prize-wheel__item"
              style={
                {
                  "--prize-angle": `${index * rewardSegmentDegrees}deg`,
                  "--label-angle": `${reward.labelAngle}deg`,
                } as CSSProperties
              }
            >
              <div
                className={`prize-wheel__art ${
                  selectedIndex === index
                    ? "scale-110 rounded-xl border border-accent-gold bg-accent-gold/15 p-1 shadow-prize-highlight"
                    : ""
                }`}
              >
                <Image
                  src={reward.image}
                  alt=""
                  width={88}
                  height={88}
                  className="prize-wheel__image object-contain drop-shadow-lg"
                />
                <span className="prize-wheel__label">{reward.name}</span>
              </div>
            </div>
          ))}
          <div className="absolute inset-[24%] rounded-full border border-white/10 bg-dashboard-inner/80 shadow-center-panel" />
        </div>

        <div
          className="prize-wheel-center absolute left-1/2 top-1/2 z-20 flex w-[56%] -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-2xl border border-white/12 bg-dashboard-inner/95 px-3 py-2.5 text-center shadow-center-panel sm:px-5 sm:py-4"
          aria-live="polite"
          aria-atomic="true"
        >
          <div className="relative h-[clamp(64px,14vh,128px)] w-[clamp(76px,18vh,156px)] shrink-0">
            <Image
              src={selectedReward?.image ?? "/images/liquid-token.png"}
              alt={selectedReward ? selectedReward.name : ""}
              fill
              sizes="156px"
              className="object-contain drop-shadow-lg"
              priority
            />
          </div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-text-primary sm:text-sm">
            <Coins className="h-3.5 w-3.5 text-accent-gold" />
            66.60
          </div>
          <h1 className="mt-1 text-sm font-bold tracking-tight text-white sm:text-lg">
            {isSpinning
              ? "Spinning..."
              : selectedReward
                ? selectedReward.name
                : "Witch Chest"}
          </h1>
          {selectedReward ? (
            <p className="mt-1 text-[11px] font-semibold text-accent-gold sm:text-xs">
              You won · {selectedReward.value} coins
            </p>
          ) : (
            <p className="mt-1 text-[10px] leading-relaxed text-text-muted sm:text-xs">
              {isSpinning
                ? "The wheel is choosing your reward."
                : "Spin to reveal a reward from the chest."}
            </p>
          )}
          <div className="mt-2 flex w-full flex-col gap-1.5">
            <button
              type="button"
              onClick={spin}
              disabled={spinDisabled}
              className="inline-flex min-h-9 w-full items-center justify-center gap-1.5 rounded-md bg-accent-violet px-2 text-[10px] font-bold tracking-wide text-white shadow-glow transition-all hover:bg-accent-cyan hover:text-bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 sm:px-4 sm:text-xs"
            >
              <Sparkles className="h-3.5 w-3.5 shrink-0" />
              {spinLabel}
            </button>
            {selectedReward && !isSpinning && (
              <button
                type="button"
                className="inline-flex min-h-9 w-full items-center justify-center gap-1.5 rounded-md border border-accent-violet/60 bg-surface px-2 text-[10px] font-bold tracking-wide text-white transition-colors hover:border-accent-cyan hover:text-accent-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan sm:px-4 sm:text-xs"
              >
                <Sparkles className="h-3.5 w-3.5 shrink-0" />
                BUY A CHEST X1
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
