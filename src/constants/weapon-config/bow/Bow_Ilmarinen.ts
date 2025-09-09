import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 罗网勾针 */
export const Bow_Ilmarinen = createWeapon(
  {
    name: "罗网勾针",
    enkaId: 15123123124414,
    weaponType: WeaponType.Bow,
    icon: getEnkaUI("UI_EquipIcon_Bow_Ilmarinen_Awaken"),
    baseAtk: 454,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CHARGE_EFFICIENCY,
    statValue: 61.3,
  },
  (affix = 1) => {
    let a = [60, 75, 90, 105, 120][affix - 1];
    return {
      title: "矫捷无影",
      text: highlight`触发元素反应后的12秒内，元素精通提升${a}点。月兆·满辉：该效果中的元素精通额外提升${a}点。装备者处于队伍后台时，依然能触发上述效果。`,
    };
  },
  (affix = 1) => {
    let a = [60, 75, 90, 105, 120][affix - 1];
    return [
      {
        label: "矫捷无影",
        describe: `触发元素反应后元素精通提升${a}点。月兆·满辉：该效果中的元素精通额外提升${a}点。`,
        effect: [{ type: BuffType.MysteryFixed, getValue: (_, s) => (s > 0 ? a * 2 : a) }],
        enable: true,
        stack: 0,
        limit: 1,
        stackText: "月兆·满辉",
        target: BuffTarget.Self,
        stackType: "switch",
        stackable: true,
      },
    ];
  }
);
