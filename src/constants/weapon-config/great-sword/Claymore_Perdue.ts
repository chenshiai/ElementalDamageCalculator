import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 雨裁 */
export const Claymore_Perdue = createWeapon(
  {
    name: "雨裁",
    enkaId: 12405,
    weaponType: WeaponType.GreatSword,
    icon: getEnkaUI("UI_EquipIcon_Claymore_Perdue_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ELEMENT_MASTERY,
    statValue: 165,
  },
  (affix = 1) => {
    let a = [20, 24, 28, 32, 36][affix - 1] + "%";
    return {
      title: "止水息雷",
      text: highlight`对处于水元素或雷元素影响下的敌人，造成的伤害提高${a}。`,
    };
  },
  (affix = 1) => {
    let a = [20, 24, 28, 32, 36][affix - 1];
    return [
      {
        label: "造成的伤害提高",
        describe: `对处于水元素或雷元素影响下的敌人，造成的伤害提高${a}%`,
        effect: [{ type: BuffType.GlobalPrcent, getValue: () => a }],
        enable: true,
      },
    ];
  }
);
