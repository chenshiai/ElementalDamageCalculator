import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 衔珠海皇 */
export const MillenniaTuna = createWeapon(
  {
    name: "衔珠海皇",
    enkaId: 12412,
    weaponType: WeaponType.GreatSword,
    icon: getEnkaUI("UI_EquipIcon_Claymore_MillenniaTuna_Awaken"),
    baseAtk: 454,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 55.1,
  },
  (affix = 1) => {
    let a = [12, 15, 18, 21, 24][affix - 1] + "%";
    let b = [100, 125, 150, 175, 200][affix - 1] + "%";
    return {
      title: "海洋的胜利",
      text: highlight`元素爆发造成的伤害提升${a}。元素爆发命中敌人时，有100%概率召唤大鲔冲击，造成${b}攻击力的范围伤害。该效果每15秒至多触发一次。`,
    };
  },
  (affix = 1) => {
    let a = [12, 15, 18, 21, 24][affix - 1];
    let b = [100, 125, 150, 175, 200][affix - 1];
    return [
      {
        label: "元素爆发的伤害提升",
        describe: `元素爆发造成的伤害提升${a}%`,
        effect: [{ type: BuffType.BurstPrcent, getValue: () => a }],
        enable: true,
      },
    ];
  },

  (affix = 1) => {
    let b = [100, 125, 150, 175, 200][affix - 1] / 100;
    return [
      {
        label: "海洋的胜利·大鲔冲击",
        rate: {
          atk: [b],
        },
        attackType: AttackType.Other,
        elementType: ElementType.Physical,
      },
    ];
  }
);
