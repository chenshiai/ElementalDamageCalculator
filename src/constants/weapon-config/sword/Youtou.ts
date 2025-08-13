import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 笼钓瓶一心 */
export const Youtou = createWeapon(
  {
    name: "笼钓瓶一心",
    enkaId: 11416,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_Youtou_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 41.3,
  },
  () => {
    return {
      title: "澄澄一心传",
      text: highlight`普通攻击、重击或下落攻击命中敌人时，将卷起切落风，造成180%攻击力的范围伤害，并且使攻击力提升15%，持续8秒。该效果每8秒至多触发一次。`,
    };
  },
  () => {
    return [
      {
        label: "攻击力提升",
        describe: `普通攻击、重击或下落攻击命中敌人时，攻击力提升15%`,
        effect: [{ type: BuffType.ATKPrcent, getValue: () => 15 }],
        enable: false,
      },
    ];
  },
  () => {
    return [
      {
        label: "澄澄一心传·切落风",
        rate: {
          atk: [1.8],
        },
        attackType: AttackType.Other,
        elementType: ElementType.Physical,
      },
    ];
  }
);
