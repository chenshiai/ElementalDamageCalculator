import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 绝弦 */
export const Bow_Troupe = createWeapon(
  {
    name: "绝弦",
    enkaId: 15402,
    weaponType: WeaponType.Bow,
    icon: getEnkaUI("UI_EquipIcon_Bow_Troupe_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ELEMENT_MASTERY,
    statValue: 165,
  },
  (affix = 1) => {
    let a = [24, 30, 36, 42, 48][affix - 1] + "%";
    return {
      title: "无矢之歌",
      text: highlight`元素战技与元素爆发的伤害提高${a}。`,
    };
  },
  (affix = 1) => {
    let a = [24, 30, 36, 42, 48][affix - 1];
    return [
      {
        label: "元素战技与元素爆发的伤害提高",
        describe: `元素战技与元素爆发的伤害提高${a}%`,
        effect: [
          { type: BuffType.SkillPrcent, getValue: () => a },
          { type: BuffType.BurstPrcent, getValue: () => a },
        ],
        enable: true,
      },
    ];
  }
);
