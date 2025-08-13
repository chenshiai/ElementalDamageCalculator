import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 万国诸海图谱 */
export const Catalyst_Exotic = createWeapon(
  {
    name: "万国诸海图谱",
    enkaId: 14407,
    weaponType: WeaponType.Magic,
    icon: getEnkaUI("UI_EquipIcon_Catalyst_Exotic_Awaken"),
    baseAtk: 565,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ELEMENT_MASTERY,
    statValue: 110,
  },
  (affix = 1) => {
    let a = [8, 10, 12, 14, 16][affix - 1] + "%";
    return {
      title: "注能之卷",
      text: highlight`触发元素反应后的10秒内，获得${a}元素伤害加成，该效果最多可以叠加2层。`,
    };
  },
  (affix = 1) => {
    let a = [8, 10, 12, 14, 16][affix - 1];
    return [
      {
        label: "元素伤害加成",
        describe: `触发元素反应后，获得${a}%所有元素伤害加成，最多可以叠加2层`,
        effect: [
          { type: BuffType.HydroPrcent, getValue: (_, s) => a * s },
          { type: BuffType.PyroPrcent, getValue: (_, s) => a * s },
          { type: BuffType.ElectroPrcent, getValue: (_, s) => a * s },
          { type: BuffType.AnemoPrcent, getValue: (_, s) => a * s },
          { type: BuffType.CryoPrcent, getValue: (_, s) => a * s },
          { type: BuffType.DendroPrcent, getValue: (_, s) => a * s },
          { type: BuffType.GeoPrcent, getValue: (_, s) => a * s },
        ],
        enable: false,
        stackable: true,
        stack: 2,
        limit: 2,
      },
    ];
  }
);
