import Image from "next/image";

const feed = [
  { name: "RoyalM", item: "Potion", image: "/images/potion.png", time: "now" },
  {
    name: "Witchy",
    item: "Crown",
    image: "/images/witch-crown.png",
    time: "1m",
  },
  {
    name: "DarkLord",
    item: "Crow Skull",
    image: "/images/crow-skull.png",
    time: "2m",
  },
  {
    name: "Alchemist",
    item: "Crystal",
    image: "/images/fly-agaric-crystal.png",
    time: "3m",
  },
  {
    name: "Nova",
    item: "Rocket",
    image: "/images/flying-rocket.png",
    time: "5m",
  },
  {
    name: "Midas",
    item: "Token",
    image: "/images/liquid-token.png",
    time: "6m",
  },
];

export function LiveFeed() {
  return (
    <section aria-labelledby="live-feed-title" className="mt-4 shrink-0 pb-2">
      <div className="mb-2 flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-green shadow-glow-green" />
        <h2
          id="live-feed-title"
          className="text-[10px] font-semibold uppercase tracking-[0.14em] text-text-muted"
        >
          Live feed
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 xl:grid-cols-6">
        {feed.map((entry) => (
          <article
            key={entry.name}
            className="flex min-w-0 items-center gap-1 rounded-lg border border-white/[0.06] bg-dashboard-card px-1.5 py-1"
          >
            <Image
              src={entry.image}
              alt=""
              width={28}
              height={28}
              className="h-7 w-7 shrink-0 object-contain"
            />
            <div className="min-w-0">
              <p className="truncate text-[10px] font-medium text-text-secondary">
                {entry.name}
              </p>
              <p className="truncate text-[9px] text-text-muted">
                {entry.item} · {entry.time}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
