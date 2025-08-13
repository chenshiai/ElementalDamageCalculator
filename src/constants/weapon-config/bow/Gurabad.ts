import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 烈阳之嗣 */
export const Gurabad = createWeapon(
  {
    name: "烈阳之嗣",
    enkaId: 15424,
    weaponType: WeaponType.Bow,
    icon: getEnkaUI("UI_EquipIcon_Bow_Gurabad_Awaken"),
    baseAtk: 565,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CRITICAL,
    statValue: 18.4,
  },
  (affix = 1) => {
    let atk = 60 + (affix - 1) * 15 + "%";
    let add = 28 + (affix - 1) * 7 + "%";
    return {
      title: "阳炎古道",
      text: highlight`重击命中敌人后，会向命中的敌人降下阳炎矢，造成攻击力${atk}的伤害，并为受到阳炎矢伤害的敌人施加持续10秒的灼心效果。装备者的重击对处于灼心状态下的敌人造成的伤害提升${add}。阳炎矢每10秒至多触发一次。`,
    };
  },
  (affix = 1) => {
    let add = 28 + (affix - 1) * 7;
    return [
      {
        label: "阳炎古道",
        describe: `重击对处于灼心状态下的敌人造成的伤害提升${add}%`,
        effect: [{ type: BuffType.StrongPrcent, getValue: () => add }],
        enable: false,
      },
    ];
  },
  (affix = 1) => {
    let atk = (60 + (affix - 1) * 15) / 100;
    return [
      {
        label: "阳炎古道·阳炎矢",
        rate: {
          atk: [atk],
        },
        attackType: AttackType.Other,
        elementType: ElementType.Physical,
      },
    ];
  }
);
