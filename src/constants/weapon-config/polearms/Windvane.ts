import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 风信之锋 */
export const Windvane = createWeapon(
  {
    name: "风信之锋",
    enkaId: 13419,
    weaponType: WeaponType.Polearms,
    icon: getEnkaUI("UI_EquipIcon_Pole_Windvane_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 41.3,
  },
  (affix = 1) => {
    let a = 12 + (affix - 1) * 3 + "%";
    let e = 48 + (affix - 1) * 12;
    return {
      title: "不至之风",
      text: highlight`触发元素反应后的10秒内，攻击力提升${a}，元素精通提升${e}点。`,
    };
  },
  (affix = 1) => {
    let a = 12 + (affix - 1) * 3;
    let e = 48 + (affix - 1) * 12;
    return [
      {
        label: "攻击力、元素精通提升",
        describe: `触发元素反应后的10秒内，攻击力提升${a}%，元素精通提升${e}点`,
        effect: [
          { type: BuffType.ATKPrcent, getValue: () => a },
          { type: BuffType.MysteryFixed, getValue: () => e },
        ],
        enable: false,
      },
    ];
  }
);
