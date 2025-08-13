import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 风花之颂 */
export const Bow_Fleurfair = createWeapon(
  {
    name: "风花之颂",
    enkaId: 15413,
    weaponType: WeaponType.Bow,
    icon: getEnkaUI("UI_EquipIcon_Bow_Fleurfair_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ELEMENT_MASTERY,
    statValue: 165,
  },
  (affix = 1) => {
    let a = [16, 20, 24, 28, 32][affix - 1] + "%";
    return {
      title: "风花之愿",
      text: highlight`施放元素战技时，获得风之花的悠古愿望加持，攻击力提升${a}，持续6秒。`,
    };
  },
  (affix = 1) => {
    let a = [16, 20, 24, 28, 32][affix - 1];
    return [
      {
        label: "攻击力提升",
        describe: `施放元素战技时，攻击力提升${a}%`,
        effect: [{ type: BuffType.ATKPrcent, getValue: () => a }],
        enable: false,
      },
    ];
  }
);
