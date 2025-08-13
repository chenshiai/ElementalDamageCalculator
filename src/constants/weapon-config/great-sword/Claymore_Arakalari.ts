import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 森林王器 */
export const Claymore_Arakalari = createWeapon(
  {
    name: "森林王器",
    enkaId: 12417,
    weaponType: WeaponType.GreatSword,
    icon: getEnkaUI("UI_EquipIcon_Claymore_Arakalari_Awaken"),
    baseAtk: 565,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CHARGE_EFFICIENCY,
    statValue: 30.6,
  },
  (affix = 1) => {
    let e = 60 + (affix - 1) * 15;
    return {
      title: "森林的瑞佑",
      text: highlight`触发燃烧、原激化、超激化、蔓激化、绽放、超绽放或烈绽放后，将在角色周围产生至多存在10秒的「种识之叶」。拾取种识之叶的角色元素精通提升${e}点，持续12秒。每20秒至多通过这种方式产生一枚种识之叶。角色处于队伍后台时也能触发。种识之叶的效果无法叠加。`,
    };
  },
  (affix = 1) => {
    let e = 60 + (affix - 1) * 15;
    return [
      {
        label: "种识之叶",
        describe: `拾取种识之叶的角色元素精通提升${e}点`,
        effect: [{ type: BuffType.MysteryFixed, getValue: () => e }],
        enable: false,
        shareable: true,
        target: BuffTarget.All,
      },
    ];
  }
);
