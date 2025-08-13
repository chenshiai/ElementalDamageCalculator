import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 苍翠猎弓 */
export const Viridescent = createWeapon(
  {
    name: "苍翠猎弓",
    enkaId: 15409,
    weaponType: WeaponType.Bow,
    icon: getEnkaUI("UI_EquipIcon_Bow_Viridescent_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CRITICAL,
    statValue: 27.6,
  },
  (affix = 1) => {
    let a = [40, 50, 60, 70, 80][affix - 1] + "%";
    let b = [14, 13, 12, 11, 10][affix - 1];
    return {
      title: "苍翠之风",
      text: highlight`普通攻击与重击命中时，有50%几率生成一个风之眼，持续吸引周围敌人，并对其中的敌人每0.5秒造成${a}攻击的伤害。该效果持续4秒，每${b}秒至多触发一次。`,
    };
  },
  (affix = 1) => [],
  (affix = 1) => {
    let a = [40, 50, 60, 70, 80][affix - 1] / 100;
    return [
      {
        label: "苍翠猎弓·风之眼",
        rate: {
          atk: [a],
        },
        attackType: AttackType.Other,
        elementType: ElementType.Physical,
      },
    ];
  }
);
