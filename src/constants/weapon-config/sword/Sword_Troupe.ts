import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 笛剑 */
export const Sword_Troupe = createWeapon(
  {
    name: "笛剑",
    enkaId: 11402,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_Troupe_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 41.3,
  },
  (affix = 1) => {
    let a = [100, 125, 150, 175, 200][affix - 1] + "%";
    return {
      title: "和弦",
      text: highlight`普通攻击或重击命中时，会获得一个和音。积攒了5个和音后，释放音律的力量，对周围的敌人造成${a}攻击力的伤害。和音最多存在30秒，每0.5秒至多获得1个和音。`,
    };
  },
  (affix) => [],
  (affix = 1) => {
    let a = [100, 125, 150, 175, 200][affix - 1] / 100;
    return [
      {
        label: "笛剑·和弦",
        rate: {
          atk: [a],
        },
        attackType: AttackType.Other,
        elementType: ElementType.Physical,
      },
    ];
  }
);
