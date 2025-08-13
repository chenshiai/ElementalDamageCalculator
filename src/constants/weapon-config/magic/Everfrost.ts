import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 忍冬之果 */
export const Everfrost = createWeapon(
  {
    name: "忍冬之果",
    enkaId: 14412,
    weaponType: WeaponType.Magic,
    icon: getEnkaUI("UI_EquipIcon_Catalyst_Everfrost_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 41.3,
  },
  (affix = 1) => {
    let a = [60, 70, 80, 90, 100][affix - 1] + "%";
    let b = [80, 95, 110, 125, 140][affix - 1] + "%";
    let c = [200, 240, 280, 320, 360][affix - 1] + "%";
    return {
      title: "霜葬",
      text: highlight`普通攻击与重击命中敌人时，有${a}概率在敌人上方生成恒冰晶核并坠落，造成${b}攻击力的范围伤害。若敌人处于冰元素影响下，则造成${c}攻击力的伤害。该效果每10秒至多触发一次。`,
    };
  },
  (affix = 1) => [],
  (affix = 1) => {
    let b = [80, 95, 110, 125, 140][affix - 1] / 100;
    let c = [200, 240, 280, 320, 360][affix - 1] / 100;
    return [
      {
        label: "忍冬之果·恒冰晶核",
        rate: {
          atk: [b],
        },
        attackType: AttackType.Other,
        elementType: ElementType.Physical,
      },
      {
        label: "冰元素影响·恒冰晶核",
        rate: {
          atk: [c],
        },
        attackType: AttackType.Other,
        elementType: ElementType.Physical,
      },
    ];
  }
);
