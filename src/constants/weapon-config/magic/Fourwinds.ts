import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 四风原典 */
export const Fourwinds = createWeapon(
  {
    name: "四风原典",
    enkaId: 14502,
    weaponType: WeaponType.Magic,
    icon: getEnkaUI("UI_EquipIcon_Catalyst_Fourwinds_Awaken"),
    baseAtk: 608,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CRITICAL,
    statValue: 33.1,
  },
  (affix = 1) => {
    let a = [8, 10, 12, 14, 16][affix - 1] + "%";
    return {
      title: "无边际的眷顾",
      text: highlight`移动速度提高10%；在场上每4秒获得${a}元素伤害加成。该效果最多叠加4层，持续直到角色倒下或离场。`,
    };
  },
  (affix = 1) => {
    let a = [8, 10, 12, 14, 16][affix - 1];
    return [
      {
        label: "元素伤害加成提高",
        describe: `在场上每4秒获得${a}%元素伤害加成`,
        effect: [
          { type: BuffType.HydroPrcent, getValue: (_, stack) => stack * a },
          { type: BuffType.PyroPrcent, getValue: (_, stack) => stack * a },
          { type: BuffType.ElectroPrcent, getValue: (_, stack) => stack * a },
          { type: BuffType.AnemoPrcent, getValue: (_, stack) => stack * a },
          { type: BuffType.CryoPrcent, getValue: (_, stack) => stack * a },
          { type: BuffType.DendroPrcent, getValue: (_, stack) => stack * a },
          { type: BuffType.GeoPrcent, getValue: (_, stack) => stack * a },
        ],
        stackable: true,
        limit: 4,
        stack: 4,
        enable: false,
      },
    ];
  }
);
