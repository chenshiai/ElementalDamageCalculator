import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 决斗之枪 */
export const Gladiator = createWeapon(
  {
    name: "决斗之枪",
    enkaId: 13405,
    weaponType: WeaponType.Polearms,
    icon: getEnkaUI("UI_EquipIcon_Pole_Gladiator_Awaken"),
    baseAtk: 454,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CRITICAL,
    statValue: 36.8,
  },
  (affix = 1) => {
    let a = [16, 20, 24, 28, 32][affix - 1] + "%";
    let b = [24, 30, 36, 42, 48][affix - 1] + "%";
    return {
      title: "角斗士",
      text: highlight`身边至少有2个敌人时，获得${a}攻击力提升与${a}防御力提升；身边的敌人少于2个时，获得${b}攻击力提升。`,
    };
  },
  (affix = 1) => {
    let a = [16, 20, 24, 28, 32][affix - 1];
    let b = [24, 30, 36, 42, 48][affix - 1];
    return [
      {
        label: "攻击力提升与防御力提升",
        describe: `至少有2个敌人时，获得${a}%攻击力提升与${a}%防御力提升`,
        effect: [
          { type: BuffType.ATKPrcent, getValue: () => a },
          { type: BuffType.DEFPrcent, getValue: () => a },
        ],
        enable: false,
      },
      {
        label: "攻击力提升",
        describe: `少于2个敌人时，获得${b}%攻击力提升`,
        effect: [{ type: BuffType.ATKPrcent, getValue: () => b }],
        enable: true,
      },
    ];
  }
);
