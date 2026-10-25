export interface ChestReward {
  name: string;
  image: string;
  value: string;
  labelAngle: number;
}

export const chestRewards: ChestReward[] = [
  {
    name: "Potion of Oblivion",
    image: "/images/potion.png",
    value: "1,250",
    labelAngle: 0,
  },
  {
    name: "Crow Skull",
    image: "/images/crow-skull.png",
    value: "660",
    labelAngle: -45,
  },
  {
    name: "Red Agaric",
    image: "/images/fly-agaric-crystal.png",
    value: "850",
    labelAngle: -90,
  },
  {
    name: "Flying Broom",
    image: "/images/flying-rocket.png",
    value: "940",
    labelAngle: -45,
  },
  {
    name: "Rare Relic",
    image: "/images/liquid-token.png",
    value: "3,400",
    labelAngle: 45,
  },
  {
    name: "Red Agaric",
    image: "/images/fly-agaric-crystal.png",
    value: "720",
    labelAngle: 0,
  },
  {
    name: "Witch's Cap",
    image: "/images/witch-crown.png",
    value: "2,000",
    labelAngle: 90,
  },
  {
    name: "Magic Shard",
    image: "/images/fly-agaric-crystal.png",
    value: "1,100",
    labelAngle: 45,
  },
];

export const rewardSegmentDegrees = 360 / chestRewards.length;
