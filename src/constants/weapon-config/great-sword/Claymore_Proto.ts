import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 试作古华 */
export const Claymore_Proto = createWeapon(
  {
    name: "试作古华",
    enkaId: 12406,
    weaponType: WeaponType.GreatSword,
    icon: getEnkaUI("UI_EquipIcon_Claymore_Proto_Awaken"),
    baseAtk: 565,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 27.6,
  },
  (affix = 1) => {
    let a = [240, 300, 360, 420, 480][affix - 1] + "%";
    return {
      title: "粉碎",
      text: highlight`普通攻击和重击命中时，有50%的概率对小范围内的敌人造成${a}攻击力的额外伤害。该效果每15秒只能触发一次。`,
    };
  },
  () => [],
  (affix = 1) => {
    let a = [240, 300, 360, 420, 480][affix - 1] / 100;
    return [
      {
        label: "试作古华·粉碎",
        rate: {
          atk: [a],
        },
        attackType: AttackType.Other,
        elementType: ElementType.Physical,
      },
    ];
  }
);
