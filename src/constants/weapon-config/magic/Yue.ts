import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 遗祀玉珑 */
export const Yue = createWeapon(
  {
    name: "遗祀玉珑",
    enkaId: 14424,
    weaponType: WeaponType.Magic,
    icon: getEnkaUI("UI_EquipIcon_Catalyst_Yue_Awaken"),
    baseAtk: 454,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CRITICAL,
    statValue: 36.8,
  },
  (affix = 1) => {
    let hp = 32 + (affix - 1) * 8 + "%";
    let em = 40 + (affix - 1) * 10;
    return {
      title: "碧玉流转",
      text: highlight`处于队伍后台超过5秒后，生命值上限提升${hp}，元素精通提升${em}点。装备者登场并留在场上10秒后，该效果将失效。`,
    };
  },
  (affix = 1) => {
    let hp = 32 + (affix - 1) * 8;
    let em = 40 + (affix - 1) * 10;
    return [
      {
        label: "碧玉流转",
        describe: `处于队伍后台超过5秒后，生命值上限提升${hp}%，元素精通提升${em}点`,
        effect: [
          { type: BuffType.HPPrcent, getValue: () => hp },
          { type: BuffType.MysteryFixed, getValue: () => em },
        ],
        enable: false,
      },
    ];
  }
);
