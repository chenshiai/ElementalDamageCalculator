import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 千夜浮梦 */
export const Ayus = createWeapon(
  {
    name: "千夜浮梦",
    enkaId: 14511,
    weaponType: WeaponType.Magic,
    icon: getEnkaUI("UI_EquipIcon_Catalyst_Ayus_Awaken"),
    baseAtk: 542,
    rarity: Rarity.Five,
    appendPropId: AppendProp.ELEMENT_MASTERY,
    statValue: 265,
  },
  (affix = 1) => {
    let em = 32 + (affix - 1) * 8;
    let add = 10 + (affix - 1) * 4 + "%";
    let enm = 40 + (affix - 1) * 2;
    return {
      title: "千夜的曙歌",
      text: highlight`队伍中每个其他角色，都会依据元素类型与装备者相同与否，为装备者提供提升效果。相同：元素精通提升${em}点；不同：装备者元素类型的元素伤害加成提升${add}。上述提升效果每种至多叠加3层。此外，队伍中装备者以外的附近角色的元素精通提升${enm}点，多件同名武器产生的此效果可以叠加。`,
    };
  },
  (affix = 1) => {
    let em = 32 + (affix - 1) * 8;
    let add = 10 + (affix - 1) * 4;
    let enm = 40 + (affix - 1) * 2;
    let getValue = (_, stack) => {
      return add * (3 - stack);
    };
    let getWeaponEffect = (element: ElementType, type: BuffType) => {
      return {
        label: `千夜的曙歌`,
        describe: `每有1个相同元素角色，元素精通提升${em}；每有1个不同元素角色，元素伤害加成提升${add}%`,
        condition: (data) => data.element === element,
        effect: [
          { type: BuffType.MysteryFixed, getValue: (_, stack) => em * stack },
          { type, getValue },
        ],
        stackText: "同元素角色数量",
        stackable: true,
        limit: 3,
        stack: 0,
        enable: true,
      };
    };
    return [
      {
        label: "装备者以外的角色元素精通提升",
        describe: `装备者以外的角色元素精通提升${enm}`,
        effect: [{ type: BuffType.MysteryFixed, getValue: () => enm }],
        enable: true,
        shareable: true,
        target: BuffTarget.Other,
        repeatable: true,
      },
      getWeaponEffect(ElementType.Anemo, BuffType.AnemoPrcent),
      getWeaponEffect(ElementType.Hydro, BuffType.HydroPrcent),
      getWeaponEffect(ElementType.Electro, BuffType.ElectroPrcent),
      getWeaponEffect(ElementType.Pyro, BuffType.PyroPrcent),
      getWeaponEffect(ElementType.Cryo, BuffType.CryoPrcent),
      getWeaponEffect(ElementType.Dendro, BuffType.DendroPrcent),
      getWeaponEffect(ElementType.Geo, BuffType.GeoPrcent),
    ];
  }
);
