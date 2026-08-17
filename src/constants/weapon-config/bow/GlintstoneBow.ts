import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 霜雪誓约 */
export const GlintstoneBow = createWeapon(
  {
    name: "霜雪誓约",
    enkaId: 15436,
    weaponType: WeaponType.Bow,
    icon: getEnkaUI("UI_EquipIcon_Bow_GlintstoneBow_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.DEFENSE_PERCENT,
    statValue: 51.7,
  },
  (affix = 1) => {
    let a = [120, 150, 180, 210, 240][affix - 1];
    return {
      title: "法度的制衡",
      text: highlight`装备者施放元素战技后的12秒内，元素精通提升${a}点。`,
    };
  },
  (affix = 1) => {
    let a = [120, 150, 180, 210, 240][affix - 1];
    return [
      {
        label: "元素精通提升",
        describe: `装备者施放元素战技后的12秒内，元素精通提升${a}点`,
        effect: [{ type: BuffType.MysteryFixed, getValue: () => a }],
        enable: true,
      },
    ];
  }
);
