import { Coins } from "lucide-react";
import Image from "next/image";
import type { ChestReward } from "./rewards";

interface RewardCardsProps {
  rewards: ChestReward[];
}

export function RewardCards({ rewards }: RewardCardsProps) {
  return (
    <section aria-labelledby="chest-items-title" className="mt-2 shrink-0">
      <h2
        id="chest-items-title"
        className="mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-text-muted"
      >
        Items from the chest
      </h2>
      <div className="grid grid-cols-4 gap-1.5 sm:grid-cols-8">
        {rewards.map((reward, index) => (
          <article
            key={`${reward.name}-${index}`}
            className="flex min-w-0 flex-col items-center rounded-lg border border-white/[0.07] bg-dashboard-card px-1.5 py-2 text-center"
          >
            <Image
              src={reward.image}
              alt={reward.name}
              width={52}
              height={52}
              className="h-12 w-12 object-contain drop-shadow-md sm:h-14 sm:w-14"
            />
            <span className="mt-1 w-full truncate text-[10px] text-text-secondary">
              {reward.name}
            </span>
            <span className="mt-1 flex items-center gap-1 text-[10px] font-semibold text-accent-gold">
              <Coins className="h-2.5 w-2.5" />
              {reward.value}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
