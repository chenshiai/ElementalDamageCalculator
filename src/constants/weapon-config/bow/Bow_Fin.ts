import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 竭泽 */
export const Bow_Fin = createWeapon(
  {
    name: "竭泽",
    enkaId: 15418,
    weaponType: WeaponType.Bow,
    icon: getEnkaUI("UI_EquipIcon_Bow_Fin_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CHARGE_EFFICIENCY,
    statValue: 45.9,
  },
  (affix = 1) => {
    let a = [80, 100, 120, 140, 160][affix - 1] + "%";
    return {
      title: "网破",
      text: highlight`施放元素战技后，将触发「沿洄」效果，在攻击命中敌人时造成${
        a[affix - 1]
      }攻击力的范围伤害，该效果将在15秒或触发3次范围伤害后移除。每2秒至多通过这种方式造成一次范围伤害，每12秒至多触发一次沿洄。`,
    };
  },
  () => [],
  (affix = 1) => {
    let a = [80, 100, 120, 140, 160][affix - 1] / 100;
    return [
      {
        label: "网破·沿洄",
        rate: {
          atk: [a],
        },
        attackType: AttackType.Other,
        elementType: ElementType.Physical,
      },
    ];
  }
);
