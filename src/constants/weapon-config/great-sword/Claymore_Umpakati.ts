import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 硕果钩 */
export const Claymore_Umpakati = createWeapon(
  {
    name: "硕果钩",
    enkaId: 12430,
    weaponType: WeaponType.GreatSword,
    icon: getEnkaUI("UI_EquipIcon_Claymore_Umpakati_Awaken"),
    baseAtk: 565,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 27.6,
  },
  (affix = 1) => {
    let c = [0, 16, 20, 24, 28, 32][affix] + "%";
    return {
      title: "坠枝之重",
      text: highlight`下落攻击的暴击率提升${c}，下落攻击命中敌人后，普通攻击、重击、下落攻击造成的伤害提升${c}，持续10秒。`,
    };
  },
  (affix = 1) => {
    let c = [0, 16, 20, 24, 28, 32][affix];
    return [
      {
        label: "下落攻击的暴击率提升",
        describe: `下落攻击的暴击率提升${c}%`,
        effect: [{ type: BuffType.FallingCritcal, getValue: () => c }],
        enable: true,
      },
      {
        label: "普攻、重击、下落攻击伤害提升",
        describe: `普通攻击、重击、下落攻击造成的伤害提升${c}%`,
        effect: [
          { type: BuffType.NormalPrcent, getValue: () => c },
          { type: BuffType.StrongPrcent, getValue: () => c },
          { type: BuffType.FallingPrcent, getValue: () => c },
        ],
        enable: true,
      },
    ];
  }
);
