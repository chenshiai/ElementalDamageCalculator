import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 水仙十字之剑 */
export const Purewill = createWeapon(
  {
    name: "水仙十字之剑",
    enkaId: 11428,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_Purewill"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 41.3,
  },
  (affix = 1) => {
    let rat = [160, 200, 240, 280, 320][affix - 1] + "%";
    return {
      title: "勇者之剑",
      text: highlight`装备者不具备「始基力」时：普通攻击、重击、下落攻击命中时，会释放芒性或荒性的能量冲击，造成${rat}攻击力的伤害。该效果每12秒至多触发一次，能量冲击的类型由水仙十字之剑当前的属性决定。`,
    };
  },
  () => [],
  (affix = 1) => {
    let rat = [160, 200, 240, 280, 320][affix - 1] / 100;
    return [
      {
        label: "勇者之剑·能量冲击",
        rate: {
          atk: [rat],
        },
        attackType: AttackType.Other,
        elementType: ElementType.Physical,
      },
    ];
  }
);
