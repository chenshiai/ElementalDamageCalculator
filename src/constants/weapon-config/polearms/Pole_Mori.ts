import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 「渔获」 */
export const Pole_Mori = createWeapon(
  {
    name: "「渔获」",
    enkaId: 13415,
    weaponType: WeaponType.Polearms,
    icon: getEnkaUI("UI_EquipIcon_Pole_Mori_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CHARGE_EFFICIENCY,
    statValue: 45.9,
  },
  (affix = 1) => {
    let a = [16, 20, 24, 28, 32][affix - 1] + "%";
    let b = [6, 7.5, 9, 10.5, 12][affix - 1] + "%";
    return {
      title: "船歌",
      text: highlight`元素爆发造成的伤害提升${a}，元素爆发的暴击率提升${b}。`,
    };
  },
  (affix = 1) => {
    let a = [16, 20, 24, 28, 32][affix - 1];
    let b = [6, 7.5, 9, 10.5, 12][affix - 1];
    return [
      {
        label: "元素爆发的伤害、暴击率提升",
        describe: `元素爆发造成的伤害提升${a}%，元素爆发的暴击率提升${b}%`,
        effect: [
          { type: BuffType.BurstPrcent, getValue: () => a },
          { type: BuffType.BurstCritcal, getValue: () => b },
        ],
        enable: true,
      },
    ];
  }
);
