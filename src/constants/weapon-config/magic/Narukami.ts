import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 神乐之真意 */
export const Narukami = createWeapon(
  {
    name: "神乐之真意",
    enkaId: 14509,
    weaponType: WeaponType.Magic,
    icon: getEnkaUI("UI_EquipIcon_Catalyst_Narukami_Awaken"),
    baseAtk: 608,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CRITICAL_HURT,
    statValue: 66.2,
  },
  (affix = 1) => {
    let a = [12, 15, 18, 21, 24][affix - 1] + "%";
    return {
      title: "神樱神游神乐舞",
      text: highlight`施放元素战技时，将获得「神乐舞」的效果，使装备该武器的角色的元素战技造成的伤害提高${a}，该效果持续16秒，至多叠加3层。持有3层时，该角色获得${a}所有元素伤害加成。`,
    };
  },
  (affix = 1) => {
    let a = [12, 15, 18, 21, 24][affix - 1];
    return [
      {
        label: "元素战技伤害提高",
        describe: `使装备该武器的角色的元素战技造成的伤害提高${a}%，至多叠加3层`,
        effect: [{ type: BuffType.SkillPrcent, getValue: (_, stack) => a * stack }],
        stackable: true,
        stackText: "神乐舞",
        limit: 3,
        stack: 3,
        enable: false,
      },
      {
        label: "元素伤害加成",
        describe: `「神乐舞」叠加到3层后，获得${a}%所有元素伤害加成`,
        effect: [
          { type: BuffType.HydroPrcent, getValue: () => a },
          { type: BuffType.PyroPrcent, getValue: () => a },
          { type: BuffType.ElectroPrcent, getValue: () => a },
          { type: BuffType.AnemoPrcent, getValue: () => a },
          { type: BuffType.CryoPrcent, getValue: () => a },
          { type: BuffType.DendroPrcent, getValue: () => a },
          { type: BuffType.GeoPrcent, getValue: () => a },
        ],
        enable: false,
      },
    ];
  }
);
