import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 波乱月白经津 */
export const Amenoma = createWeapon(
  {
    name: "波乱月白经津",
    enkaId: 11510,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_Amenoma_Awaken"),
    baseAtk: 608,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CRITICAL,
    statValue: 33.1,
  },
  (affix = 1) => {
    let a = [12, 15, 18, 21, 24][affix - 1] + "%";
    let v = [20, 25, 30, 35, 40][affix - 1] + "%";
    return {
      title: "白刃流转",
      text: highlight`获得${a}所有元素伤害加成；队伍中附近的其他角色在施放元素战技时，会为装备该武器的角色产生1层「波穗」效果，至多叠加2层，每0.3秒最多触发1次。装备该武器的角色施放元素战技时，如果有积累的「波穗」效果，则将消耗已有的「波穗」，获得「波乱」：根据消耗的层数，每层提升${v}普通攻击伤害，持续8秒。`,
    };
  },
  (affix = 1) => {
    let a = [12, 15, 18, 21, 24][affix - 1];
    let v = [20, 25, 30, 35, 40][affix - 1];
    return [
      {
        label: "元素伤害加成",
        describe: `获得${a}%所有元素伤害加成`,
        effect: [
          { type: BuffType.HydroPrcent, getValue: () => a },
          { type: BuffType.PyroPrcent, getValue: () => a },
          { type: BuffType.ElectroPrcent, getValue: () => a },
          { type: BuffType.AnemoPrcent, getValue: () => a },
          { type: BuffType.CryoPrcent, getValue: () => a },
          { type: BuffType.DendroPrcent, getValue: () => a },
          { type: BuffType.GeoPrcent, getValue: () => a },
        ],
        enable: true,
      },
      {
        label: "普通攻击伤害提高",
        describe: `消耗已有的「波穗」，获得「波乱」：根据消耗的层数，每层提升${v}%普通攻击伤害`,
        effect: [{ type: BuffType.NormalPrcent, getValue: (_, stack) => v * stack }],
        enable: false,
        stackable: true,
        stackText: "波穗",
        stack: 2,
        limit: 2,
      },
    ];
  }
);
