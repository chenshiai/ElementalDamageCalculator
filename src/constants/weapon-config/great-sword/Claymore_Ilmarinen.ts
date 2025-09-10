import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 万能钥匙 */
export const Claymore_Ilmarinen = createWeapon(
  {
    name: "万能钥匙",
    enkaId: 12433,
    weaponType: WeaponType.GreatSword,
    icon: getEnkaUI("UI_EquipIcon_Claymore_Ilmarinen_Awaken"),
    baseAtk: 454,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CHARGE_EFFICIENCY,
    statValue: 61.3,
  },
  (affix = 1) => {
    const a = [60, 75, 90, 105, 120][affix - 1];
    return {
      title: "迎刃而解",
      text: highlight`触发元素反应后的12秒内，元素精通提升${a}点。月兆·满辉：该效果中的元素精通额外提升${a}点。装备者处于队伍后台时，依然能触发上述效果。`,
    };
  },
  (affix = 1) => {
    const a = [60, 75, 90, 105, 120][affix - 1];
    return [
      {
        label: "高亢止语",
        describe: `触发元素反应后的12秒内，元素精通提高${a}。月兆·满辉：该效果中的元素精通额外提高${a}。`,
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
