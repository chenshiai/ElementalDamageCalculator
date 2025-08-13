import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 弓藏 */
export const Recluse = createWeapon(
  {
    name: "弓藏",
    enkaId: 15405,
    weaponType: WeaponType.Bow,
    icon: getEnkaUI("UI_EquipIcon_Bow_Recluse_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 41.3,
  },
  (affix = 1) => {
    let a = [40, 50, 60, 70, 80][affix - 1] + "%";
    return {
      title: "速射弓斗",
      text: highlight`普通攻击造成的伤害提升${a}，重击造成的伤害下降10%。`,
    };
  },
  (affix = 1) => {
    let a = [40, 50, 60, 70, 80][affix - 1];
    return [
      {
        label: "普通攻击伤害提升，重击伤害下降",
        describe: `普通攻击造成的伤害提升${a}%，重击造成的伤害下降10%`,
        effect: [
          { type: BuffType.NormalPrcent, getValue: () => a },
          { type: BuffType.StrongPrcent, getValue: () => -10 },
        ],
        enable: true,
      },
    ];
  }
);
