import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 昭心 */
export const Truelens = createWeapon(
  {
    name: "昭心",
    enkaId: 14409,
    weaponType: WeaponType.Magic,
    icon: getEnkaUI("UI_EquipIcon_Catalyst_Truelens_Awaken"),
    baseAtk: 454,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 55.1,
  },
  (affix = 1) => {
    let a = [240, 270, 300, 330, 360][affix - 1] + "%";
    let b = [12, 11, 10, 9, 8][affix - 1];
    return {
      title: "回响",
      text: highlight`普通攻击与重击命中时，有50%几率发射一枚昭心法球，造成${a}攻击力伤害，至多在敌人之间弹射4次。该效果每${b}秒至多触发一次。`,
    };
  },
  () => [],
  (affix = 1) => {
    let a = [240, 270, 300, 330, 360][affix - 1] / 100;
    return [
      {
        label: "昭心·回响",
        rate: {
          atk: [a],
        },
        attackType: AttackType.Other,
        elementType: ElementType.Physical,
      },
    ];
  }
);
