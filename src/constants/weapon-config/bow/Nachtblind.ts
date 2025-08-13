import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 幽夜华尔兹 */
export const Nachtblind = createWeapon(
  {
    name: "幽夜华尔兹",
    enkaId: 15412,
    weaponType: WeaponType.Bow,
    icon: getEnkaUI("UI_EquipIcon_Bow_Nachtblind_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.PHYSICAL_ADD_HURT,
    statValue: 51.7,
  },
  (affix = 1) => {
    let a = [20, 25, 30, 35, 40][affix - 1] + "%";
    return {
      title: "极夜二重奏",
      text: highlight`普通攻击命中敌人后的5秒内，元素战技造成的伤害提升${a}；元素战技命中敌人后的5秒内，普通攻击造成的伤害提升${a}。`,
    };
  },
  (affix = 1) => {
    let a = [20, 25, 30, 35, 40][affix - 1];
    return [
      {
        label: "元素战技造成的伤害提升",
        describe: `普通攻击命中敌人后，元素战技造成的伤害提升${a}%`,
        effect: [{ type: BuffType.SkillPrcent, getValue: () => a }],
        enable: false,
      },
      {
        label: "普通攻击造成的伤害提升",
        describe: `元素战技命中敌人后，普通攻击造成的伤害提升${a}%`,
        effect: [{ type: BuffType.NormalPrcent, getValue: () => a }],
        enable: false,
      },
    ];
  }
);
