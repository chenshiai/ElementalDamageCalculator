import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 天空之刃 */
export const Sword_Dvalin = createWeapon(
  {
    name: "天空之刃",
    enkaId: 11502,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_Dvalin_Awaken"),
    baseAtk: 608,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CHARGE_EFFICIENCY,
    statValue: 55.1,
  },
  (affix = 1) => {
    let a = [4, 5, 6, 7, 8][affix - 1] + "%";
    let b = [20, 25, 30, 35, 40][affix - 1] + "%";
    return {
      title: "穿刺高天的利齿",
      text: highlight`暴击率提升${a};施放元素爆发时，获得破空之势：移动速度提升10%，攻击速度提升10%，普通攻击与重击命中时，额外造成${b}攻击力的伤害，持续12秒。`,
    };
  },
  (affix = 1) => {
    let a = [4, 5, 6, 7, 8][affix - 1];
    return [
      {
        label: "暴击率提升",
        describe: `暴击率提升${a}%`,
        effect: [{ type: BuffType.Critcal, getValue: () => a }],
        enable: true,
      },
    ];
  },
  (affix = 1) => {
    let b = [20, 25, 30, 35, 40][affix - 1] / 100;
    return [
      {
        label: "天空之刃·破空之势",
        rate: {
          atk: [b],
        },
        attackType: AttackType.Other,
        elementType: ElementType.Physical,
      },
    ];
  }
);
