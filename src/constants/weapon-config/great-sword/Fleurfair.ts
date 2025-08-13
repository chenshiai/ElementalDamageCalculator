import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 饰铁之花 */
export const Fleurfair = createWeapon(
  {
    name: "饰铁之花",
    enkaId: 12418,
    weaponType: WeaponType.GreatSword,
    icon: getEnkaUI("UI_EquipIcon_Claymore_Fleurfair_Awaken"),
    baseAtk: 565,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ELEMENT_MASTERY,
    statValue: 110,
  },
  (affix = 1) => {
    let atk = 12 + (affix - 1) * 3 + "%";
    let em = 48 + (affix - 1) * 12;
    return {
      title: "风与花的密语",
      text: highlight`元素战技命中敌人或触发元素反应后的8秒内，攻击力提升${atk}，元素精通提升${em}点。`,
    };
  },
  (affix = 1) => {
    let atk = 12 + (affix - 1) * 3;
    let em = 48 + (affix - 1) * 12;
    return [
      {
        label: "攻击力、元素精通提升",
        describe: `元素战技命中敌人或触发元素反应后，攻击力提升${atk}%，元素精通提升${em}点`,
        effect: [
          { type: BuffType.ATKPrcent, getValue: () => atk },
          { type: BuffType.MysteryFixed, getValue: () => em },
        ],
        enable: false,
      },
    ];
  }
);
