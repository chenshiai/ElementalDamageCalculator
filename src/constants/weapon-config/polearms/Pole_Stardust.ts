import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 匣里灭辰 */
export const Pole_Stardust = createWeapon(
  {
    name: "匣里灭辰",
    enkaId: 13401,
    weaponType: WeaponType.Polearms,
    icon: getEnkaUI("UI_EquipIcon_Pole_Stardust_Awaken"),
    baseAtk: 454,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ELEMENT_MASTERY,
    statValue: 221,
  },
  (affix = 1) => {
    let a = [20, 24, 28, 32, 36][affix - 1] + "%";
    return {
      title: "踏火止水",
      text: highlight`对处于水元素或火元素影响下的敌人，造成的伤害提高${a}。`,
    };
  },
  (affix = 1) => {
    let a = [20, 24, 28, 32, 36][affix - 1];
    return [
      {
        label: "造成的伤害提高",
        describe: `对处于水元素或火元素影响下的敌人，造成的伤害提高${a}%`,
        effect: [{ type: BuffType.GlobalPrcent, getValue: () => a }],
        enable: true,
      },
    ];
  }
);
