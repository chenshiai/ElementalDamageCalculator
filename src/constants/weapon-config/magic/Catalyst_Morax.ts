import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 碧落之珑 */
export const Catalyst_Morax = createWeapon(
  {
    name: "碧落之珑",
    enkaId: 14505,
    weaponType: WeaponType.Magic,
    icon: getEnkaUI("UI_EquipIcon_Catalyst_Morax_Awaken"),
    baseAtk: 608,
    rarity: Rarity.Five,
    appendPropId: AppendProp.HP_PERCENT,
    statValue: 49.6,
  },
  (affix = 1) => {
    let c = 4.5 + (affix - 1) * 0.5;
    let add = 0.3 + (affix - 1) * 0.2 + "%";
    let limit = 12 + (affix - 1) * 8 + "%";
    return {
      title: "定土玉圭",
      text: highlight`施放元素爆发或创造护盾后的3秒内，将产生「定土玉圭」效果：每2.5秒恢复${c}点元素能量，并基于装备者的生命值上限，每1000点使其对应元素类型的元素伤害加成提高${add}，至多提高${limit}。装备该武器的角色处于队伍后台时，依然能产生「定土玉圭」效果。`,
    };
  },
  (affix = 1) => {
    let add = 0.3 + (affix - 1) * 0.2;
    let limit = 12 + (affix - 1) * 8;
    let getB = (type: BuffType, element: ElementType) => {
      return {
        enable: false,
        stackable: true,
        effect: [
          {
            type,
            getValue: (data) => {
              let hp = data.baseHP + data.extraHP;
              return Math.min(limit, (hp / 1000) * add);
            },
          },
        ],
        condition: (data) => data.element === element,
        stack: 3,
        limit: 3,
        label: "定土玉圭",
        describe: `每1000点生命值使元素伤害加成提高${add}%，至多提高${limit}%`,
      };
    };
    return [
      getB(BuffType.HydroPrcent, ElementType.Hydro),
      getB(BuffType.PyroPrcent, ElementType.Pyro),
      getB(BuffType.AnemoPrcent, ElementType.Anemo),
      getB(BuffType.CryoPrcent, ElementType.Cryo),
      getB(BuffType.ElectroPrcent, ElementType.Electro),
      getB(BuffType.GeoPrcent, ElementType.Geo),
      getB(BuffType.DendroPrcent, ElementType.Dendro),
    ];
  }
);
