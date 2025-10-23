import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 霜辰 */
export const Catalyst_Ziedas = createWeapon(
  {
    name: "霜辰",
    enkaId: 14434,
    weaponType: WeaponType.Magic,
    icon: getEnkaUI("UI_EquipIcon_Catalyst_Ziedas_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CRITICAL_HURT,
    statValue: 55.1,
  },
  (affix = 1) => {
    let a = [72, 90, 108, 126, 144][affix - 1];
    let b = [48, 60, 72, 84, 96][affix - 1];
    return {
      title: "深宵的胎梦",
      text: highlight`重击命中敌人后的10秒内，元素精通提升${a}点；元素战技命中敌人后的10秒内，元素精通提升${b}点。`,
    };
  },
  (affix = 1) => {
    let a = [72, 90, 108, 126, 144][affix - 1];
    let b = [48, 60, 72, 84, 96][affix - 1];
    return [
      {
        label: "重击命中敌人，元素精通提升",
        describe: `重击命中敌人后的10秒内，元素精通提升${a}点。`,
        effect: [{ type: BuffType.MysteryFixed, getValue: () => a }],
        enable: true,
      },
      {
        label: "元素战技命中敌人，元素精通提升",
        describe: `元素战技命中敌人后的10秒内，元素精通提升${b}点。`,
        effect: [{ type: BuffType.MysteryFixed, getValue: () => b }],
        enable: true,
      },
    ];
  }
);
