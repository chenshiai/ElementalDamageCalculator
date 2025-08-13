import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 腐殖之剑 */
export const Magnum = createWeapon(
  {
    name: "腐殖之剑",
    enkaId: 11413,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_Magnum_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CHARGE_EFFICIENCY,
    statValue: 45.9,
  },
  (affix = 1) => {
    let a = [16, 20, 24, 28, 32][affix - 1] + "%";
    let b = [6, 7.5, 9, 10.5, 12][affix - 1] + "%";
    return {
      title: "无尽的渴慕",
      text: highlight`元素战技造成的伤害增加${a}，元素战技的暴击率提升${b}。`,
    };
  },
  (affix = 1) => {
    let a = [16, 20, 24, 28, 32][affix - 1];
    let b = [6, 7.5, 9, 10.5, 12][affix - 1];
    return [
      {
        label: "元素战技伤害增加、暴击率提升",
        describe: `元素战技造成的伤害增加${a}%，元素战技的暴击率提升${b}%`,
        effect: [
          { type: BuffType.SkillPrcent, getValue: () => a },
          { type: BuffType.SkillCritcal, getValue: () => b },
        ],
        enable: true,
      },
    ];
  }
);
