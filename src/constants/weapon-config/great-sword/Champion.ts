import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 「究极霸王超级魔剑」 */
export const Champion = createWeapon(
  {
    name: "「究极霸王超级魔剑」",
    enkaId: 12426,
    weaponType: WeaponType.GreatSword,
    icon: getEnkaUI("UI_EquipIcon_Claymore_Champion_Awaken"),
    baseAtk: 565,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CHARGE_EFFICIENCY,
    statValue: 30.6,
  },
  (affix = 1) => {
    let atk = [12, 15, 18, 21, 24][affix - 1] + "%";
    return {
      title: "加油！",
      text: highlight`攻击力提升${atk}。不仅如此！海沫村中曾蒙你帮助的美露莘们的声援心意充满了力量，依照她们的数目，攻击力至多进一步提升${atk}。`,
    };
  },
  (affix = 1) => {
    let atk = [12, 15, 18, 21, 24][affix - 1];
    return [
      {
        label: "加油！",
        describe: `攻击力提升${atk}%`,
        effect: [{ type: BuffType.ATKPrcent, getValue: () => atk }],
        enable: true,
      },
      {
        label: "加油！！！",
        describe: `攻击力提升${atk}%`,
        effect: [{ type: BuffType.ATKPrcent, getValue: () => atk }],
        enable: false,
      },
    ];
  }
);
