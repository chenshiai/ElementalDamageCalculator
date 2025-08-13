import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 灰河渡手 */
export const Machination = createWeapon(
  {
    name: "灰河渡手",
    enkaId: 11426,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_Machination_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CHARGE_EFFICIENCY,
    statValue: 45.9,
  },
  (affix = 1) => {
    let cr = 8 + (affix - 1) * 2 + "%";
    let c = 16 + (affix - 1) * 4 + "%";
    return {
      title: "铁骨",
      text: highlight`元素战技暴击率提升${cr}；此外，施放元素战技后的5秒内，元素充能效率提升${c}。`,
    };
  },
  (affix = 1) => {
    let cr = 8 + (affix - 1) * 2;
    let c = 16 + (affix - 1) * 4;
    return [
      {
        label: "元素战技暴击率提升",
        describe: `元素战技暴击率提升${cr}%`,
        effect: [{ type: BuffType.SkillCritcal, getValue: () => cr }],
        enable: true,
      },
      {
        label: "元素充能效率提升",
        describe: `施放元素战技后的5秒内，元素充能效率提升${c}%`,
        effect: [{ type: BuffType.ChargeFixed, getValue: () => c }],
        enable: false,
      },
    ];
  }
);
