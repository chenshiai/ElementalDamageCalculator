import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 阿莫斯之弓 */
export const Amos = createWeapon(
  {
    name: "阿莫斯之弓",
    enkaId: 15502,
    weaponType: WeaponType.Bow,
    icon: getEnkaUI("UI_EquipIcon_Bow_Amos_Awaken"),
    baseAtk: 608,
    rarity: Rarity.Five,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 49.6,
  },
  (affix = 1) => {
    let a = [12, 15, 18, 21, 24][affix - 1] + "%";
    let b = [8, 10, 12, 14, 16][affix - 1] + "%";
    return {
      title: "矢志不忘",
      text: highlight`普通攻击与重击造成的伤害提升${a}；普通攻击与重击的箭矢发射后每经过0.1秒，伤害还会提升${b}，至多提升5次。`,
    };
  },
  (affix = 1) => {
    let a = [12, 15, 18, 21, 24][affix - 1];
    let b = [8, 10, 12, 14, 16][affix - 1];
    return [
      {
        label: "普通攻击与重击造成的伤害提升",
        describe: `普通攻击与重击造成的伤害提升${a}%`,
        effect: [
          { type: BuffType.NormalPrcent, getValue: () => a },
          { type: BuffType.StrongPrcent, getValue: () => a },
        ],
        enable: true,
      },
      {
        label: "普通攻击与重击的箭矢造成的伤害提升",
        describe: `发射后每经过0.1秒，伤害还会提升${b}%，至多提升5次`,
        effect: [
          { type: BuffType.NormalPrcent, getValue: (_, stack) => stack * b },
          { type: BuffType.StrongPrcent, getValue: (_, stack) => stack * b },
        ],
        enable: false,
        stackable: true,
        stack: 5,
        limit: 5,
      },
    ];
  }
);
