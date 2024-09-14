import { WeaponType, Rarity, AppendProp } from "./interface";

export const Weapons = [
  {
    name: "苇海信标",
    enkaId: 12511,
    weaponType: WeaponType.GreatSword,
    rarity: Rarity.Five,
    weaponStats: [
      {
        appendPropId: AppendProp.BASE_ATTACK,
        statValue: 608,
      },
      {
        appendPropId: AppendProp.CRITICAL,
        statValue: 33.1,
      },
    ],
  },
];
