import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 证誓之明瞳 */
export const Jyanome = createWeapon(
  {
    name: "证誓之明瞳",
    enkaId: 14415,
    weaponType: WeaponType.Magic,
    icon: getEnkaUI("UI_EquipIcon_Catalyst_Jyanome_Awaken"),
    baseAtk: 565,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 27.6,
  },
  (affix = 1) => {
    let a = [24, 30, 36, 42, 48][affix - 1] + "%";
    return {
      title: "微光的海渊民",
      text: highlight`施放元素战技后，元素充能效率提升${a}，持续10秒。`,
    };
  },
  (affix = 1) => {
    let a = [24, 30, 36, 42, 48][affix - 1];
    return [
      {
        label: "元素充能效率提升",
        describe: `施放元素战技后，元素充能效率提升${a}%`,
        effect: [{ type: BuffType.ChargeFixed, getValue: () => a }],
        enable: false,
      },
    ];
  }
);
