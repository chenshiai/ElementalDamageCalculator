import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 天光的纺琴 */
export const Catalyst_SeeliesLute = createWeapon(
  {
    name: "天光的纺琴",
    enkaId: 123123123,
    weaponType: WeaponType.Magic,
    icon: getEnkaUI("UI_EquipIcon_Catalyst_SeeliesLute_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CHARGE_EFFICIENCY,
    statValue: 45.9,
  },
  (affix = 1) => {
    let a = [100, 125, 150, 175, 200][affix - 1];
    return {
      title: "最后的歌者",
      text: highlight`施放元素战技后的20秒内，装备者的元素精通提升${a}点。`,
    };
  },
  (affix = 1) => {
    let a = [100, 125, 150, 175, 200][affix - 1];
    return [
      {
        label: "最后的歌者",
        describe: `施放元素战技后的20秒内，装备者的元素精通提升${a}点。`,
        effect: [{ type: BuffType.MysteryFixed, getValue: () => a }],
        enable: true,
      },
    ];
  }
);
