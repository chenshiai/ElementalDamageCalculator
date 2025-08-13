import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 白辰之环 */
export const Catalyst_Bakufu = createWeapon(
  {
    name: "白辰之环",
    enkaId: 14414,
    weaponType: WeaponType.Magic,
    icon: getEnkaUI("UI_EquipIcon_Catalyst_Bakufu_Awaken"),
    baseAtk: 565,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CHARGE_EFFICIENCY,
    statValue: 30.6,
  },
  (affix = 1) => {
    let a = [10, 12.5, 15, 17.5, 20][affix - 1] + "%";
    return {
      title: "樱之斋宫",
      text: highlight`装备该武器的角色触发雷元素相关反应后，队伍中附近的与该元素反应相关的元素类型的角色，获得${a}对应元素的元素伤害加成，持续6秒。通过这种方式，角色获得的元素伤害加成无法叠加。`,
    };
  },
  (affix = 1) => {
    let a = [10, 12.5, 15, 17.5, 20][affix - 1];
    return [
      {
        label: "激化，草雷增伤",
        describe: `触发雷元素相关反应后，获得${a}%相关反应元素的伤害加成`,
        effect: [
          { type: BuffType.DendroPrcent, getValue: () => a },
          { type: BuffType.ElectroPrcent, getValue: () => a },
        ],
        enable: false,
        shareable: true,
        target: BuffTarget.All,
      },
      {
        label: "扩散，风雷增伤",
        describe: `触发雷元素相关反应后，获得${a}%相关反应元素的伤害加成`,
        effect: [
          { type: BuffType.AnemoPrcent, getValue: () => a },
          { type: BuffType.ElectroPrcent, getValue: () => a },
        ],
        enable: false,
        shareable: true,
        target: BuffTarget.All,
      },
      {
        label: "超载，火雷增伤",
        describe: `触发雷元素相关反应后，获得${a}%相关反应元素的伤害加成`,
        effect: [
          { type: BuffType.PyroPrcent, getValue: () => a },
          { type: BuffType.ElectroPrcent, getValue: () => a },
        ],
        enable: false,
        shareable: true,
        target: BuffTarget.All,
      },
      {
        label: "感电，水雷增伤",
        describe: `触发雷元素相关反应后，获得${a}%相关反应元素的伤害加成`,
        effect: [
          { type: BuffType.HydroPrcent, getValue: () => a },
          { type: BuffType.ElectroPrcent, getValue: () => a },
        ],
        enable: false,
        shareable: true,
        target: BuffTarget.All,
      },
    ];
  }
);
