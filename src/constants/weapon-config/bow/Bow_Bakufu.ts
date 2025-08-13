import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 破魔之弓 */
export const Bow_Bakufu = createWeapon(
  {
    name: "破魔之弓",
    enkaId: 15414,
    weaponType: WeaponType.Bow,
    icon: getEnkaUI("UI_EquipIcon_Bow_Bakufu_Awaken"),
    baseAtk: 454,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 55.1,
  },
  (affix = 1) => {
    let a = [16, 20, 24, 28, 32][affix - 1] + "%";
    let b = [12, 15, 18, 21, 24][affix - 1] + "%";
    return {
      title: "浅濑之弭",
      text: highlight`普通攻击造成的伤害提升${a}，重击造成的伤害提升${b}。当装备该武器的角色元素能量等于100%时，这个效果提升100%。`,
    };
  },
  (affix = 1) => {
    let a = [16, 20, 24, 28, 32][affix - 1];
    let b = [12, 15, 18, 21, 24][affix - 1];
    return [
      {
        label: "普通攻击、重击造成的伤害提升",
        describe: `普通攻击造成的伤害提升${a}%，重击造成的伤害提升${b}%`,
        effect: [
          { type: BuffType.NormalPrcent, getValue: () => a },
          { type: BuffType.StrongPrcent, getValue: () => b },
        ],
        enable: true,
      },
      {
        label: "能量等于100%时，上述效果提升100%",
        describe: `普通攻击造成的伤害提升${a}%，重击造成的伤害提升${b}%`,
        effect: [
          { type: BuffType.NormalPrcent, getValue: () => a },
          { type: BuffType.StrongPrcent, getValue: () => b },
        ],
        enable: false,
      },
    ];
  }
);
