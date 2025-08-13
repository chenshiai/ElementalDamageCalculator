import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 恶王丸 */
export const Claymore_Maria = createWeapon(
  {
    name: "恶王丸",
    enkaId: 12416,
    weaponType: WeaponType.GreatSword,
    icon: getEnkaUI("UI_EquipIcon_Claymore_Maria_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 41.3,
  },
  (affix = 1) => {
    let a = [0.12, 0.15, 0.18, 0.21, 0.24][affix - 1] + "%";
    let b = [40, 50, 60, 70, 80][affix - 1] + "%";
    return {
      title: "驭浪的海祇民",
      text: highlight`队伍中所有角色的元素能量上限的总和，每1点能使装备此武器的角色的元素爆发造成的伤害提高${a}，通过这种方式，元素爆发造成的伤害至多提高${b}。`,
    };
  },
  (affix = 1) => {
    let a = [0.12, 0.15, 0.18, 0.21, 0.24][affix - 1];
    let b = [40, 50, 60, 70, 80][affix - 1];
    return [
      {
        label: "元素爆发造成的伤害提高",
        describe: `所有角色的元素能量上限的总和，每1点能使装备此武器的角色的元素爆发造成的伤害提高${a}%，至多提高${b}%`,
        effect: [
          {
            type: BuffType.BurstPrcent,
            getValue: (_, stack) => {
              return Math.min(stack * a, b);
            },
          },
        ],
        stackable: true,
        limit: 340,
        stackText: "能量上限总和",
        stack: 0,
        enable: false,
      },
    ];
  }
);
