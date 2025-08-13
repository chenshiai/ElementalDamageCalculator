import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 贯月矢 */
export const Pole_Arakalari = createWeapon(
  {
    name: "贯月矢",
    enkaId: 13417,
    weaponType: WeaponType.Polearms,
    icon: getEnkaUI("UI_EquipIcon_Pole_Arakalari_Awaken"),
    baseAtk: 565,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ELEMENT_MASTERY,
    statValue: 110,
  },
  (affix = 1) => {
    let e = 16 + (affix - 1) * 4 + "%";
    return {
      title: "幽林月影",
      text: highlight`触发燃烧、原激化、超激化、蔓激化、绽放、超绽放或烈绽放后，将在角色周围产生至多存在10秒的「苏生之叶」。拾取苏生之叶的角色攻击力提升${e}，持续12秒。每20秒至多通过这种方式产生一枚苏生之叶。角色处于队伍后台时也能触发。`,
    };
  },
  (affix = 1) => {
    let e = 16 + (affix - 1) * 4;
    return [
      {
        label: "苏生之叶",
        describe: `拾取苏生之叶的角色攻击力提升${e}%`,
        effect: [{ type: BuffType.ATKPrcent, getValue: () => e }],
        enable: false,
        shareable: true,
        target: BuffTarget.All,
      },
    ];
  }
);
