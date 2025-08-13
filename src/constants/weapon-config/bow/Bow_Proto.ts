import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 试作澹月 */
export const Bow_Proto = createWeapon(
  {
    name: "试作澹月",
    enkaId: 15406,
    weaponType: WeaponType.Bow,
    icon: getEnkaUI("UI_EquipIcon_Bow_Proto_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 41.3,
  },
  (affix = 1) => {
    let a = [36, 45, 54, 63, 72][affix - 1] + "%";
    return {
      title: "离簇不归",
      text: highlight`重击若命中要害，则提升10%移动速度与${a}攻击力，持续10秒。`,
    };
  },
  (affix = 1) => {
    let a = [36, 45, 54, 63, 72][affix - 1];
    return [
      {
        label: "攻击力提高",
        describe: `重击若命中要害，则提升10%移动速度与${a}%攻击力`,
        effect: [{ type: BuffType.ATKPrcent, getValue: () => a }],
        enable: false,
      },
    ];
  }
);
