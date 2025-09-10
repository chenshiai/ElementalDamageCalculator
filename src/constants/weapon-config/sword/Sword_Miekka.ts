import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 织月者的曙色 */
export const Sword_Miekka = createWeapon(
  {
    name: "织月者的曙色",
    enkaId: 11434,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_Miekka_Awaken"),
    baseAtk: 565,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 27.3,
  },
  (affix = 1) => {
    let a = [20, 25, 30, 35, 40][affix - 1] + "%";
    let b = [16, 20, 24, 28, 32][affix - 1] + "%";
    let c = [28, 35, 42, 49, 56][affix - 1] + "%";
    return {
      title: "秘银的血告",
      text: highlight`元素爆发造成的伤害提高${a}；装备者的元素能量上限不超过60/40点时，元素爆发造成的伤害额外提高${b}/${c}。`,
    };
  },
  (affix = 1) => {
    let a = [20, 25, 30, 35, 40][affix - 1];
    let b = [16, 20, 24, 28, 32][affix - 1];
    let c = [28, 35, 42, 49, 56][affix - 1];
    return [
      {
        label: "高亢止语（40能量及以下）",
        describe: `元素爆发造成的伤害提高${a}%；装备者的元素能量上限不超过40点时，元素爆发造成的伤害额外提高${c}%。`,
        effect: [{ type: BuffType.BurstPrcent, getValue: () => a + c }],
        enable: false,
        target: BuffTarget.Self,
        condition: ({ burstCharge }) => burstCharge <= 40,
      },
      {
        label: "高亢止语（60能量及以下）",
        describe: `元素爆发造成的伤害提高${a}%；装备者的元素能量上限不超过60点时，元素爆发造成的伤害额外提高${b}%。`,
        effect: [{ type: BuffType.BurstPrcent, getValue: () => a + b }],
        enable: false,
        target: BuffTarget.Self,
        condition: ({ burstCharge }) => burstCharge <= 60 && burstCharge > 40,
      },
      {
        label: "高亢止语（60能量以上）",
        describe: `元素爆发造成的伤害提高${a}%；`,
        effect: [{ type: BuffType.BurstPrcent, getValue: () => a }],
        enable: false,
        target: BuffTarget.Self,
        condition: ({ burstCharge }) => burstCharge > 60,
      },
    ];
  }
);
