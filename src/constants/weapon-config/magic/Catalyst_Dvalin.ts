import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 天空之卷 */
export const Catalyst_Dvalin = createWeapon(
  {
    name: "天空之卷",
    enkaId: 14501,
    weaponType: WeaponType.Magic,
    icon: getEnkaUI("UI_EquipIcon_Catalyst_Dvalin_Awaken"),
    baseAtk: 674,
    rarity: Rarity.Five,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 33.1,
  },
  (affix = 1) => {
    let a = [12, 15, 18, 21, 24][affix - 1] + "%";
    let b = [160, 200, 240, 280, 320][affix - 1] + "%";
    return {
      title: "浮游四方的灵云",
      text: highlight`元素伤害加成提升${a}；普通攻击命中时，有50%的概率获得高天流云的青睐，在15秒内主动攻击附近的敌人，造成等同于${b}攻击力的伤害。该效果每30秒只能触发一次。`,
    };
  },
  (affix = 1) => {
    let a = [12, 15, 18, 21, 24][affix - 1];
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
    ];
  },
  (affix = 1) => {
    let b = [160, 200, 240, 280, 320][affix - 1] / 100;
    return [
      {
        label: "天空之卷",
        rate: {
          atk: [b],
        },
        attackType: AttackType.Other,
        elementType: ElementType.Physical,
      },
    ];
  }
);
