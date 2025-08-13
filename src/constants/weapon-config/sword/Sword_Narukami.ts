import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 雾切之回光 */
export const Sword_Narukami = createWeapon(
  {
    name: "雾切之回光",
    enkaId: 11509,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_Narukami_Awaken"),
    baseAtk: 674,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CRITICAL_HURT,
    statValue: 44.1,
  },
  (affix = 1) => {
    let a = [12, 15, 18, 21, 24][affix - 1] + "%";
    let b =
      [
        [8, 16, 28],
        [10, 20, 35],
        [12, 24, 42],
        [14, 28, 49],
        [16, 32, 56],
      ][affix - 1].join("/") + "%";
    return {
      title: "雾切御腰物",
      text: highlight`获得${a}所有元素伤害加成，并能获得「雾切之巴印」的威势。
        雾切之巴印：持有1/2/3层雾切之巴印时,获得${b}自己的元素类型的元素伤害加成。
        
        在下列情况下，角色将各获得1层雾切之巴印：
          普通攻击造成元素伤害时，持续5秒；
          施放元素爆发时，持续10秒；
          此外，角色元素能量低于100%时，将获得1层雾切之巴印，此雾切之巴印会在角色的元素能量充满时消失。
        每层雾切之巴印的持续时间独立计算。`,
    };
  },
  (affix = 1) => {
    let a = [12, 15, 18, 21, 24][affix - 1];
    let b = [
      [8, 16, 28],
      [10, 20, 35],
      [12, 24, 42],
      [14, 28, 49],
      [16, 32, 56],
    ][affix - 1];

    let getB = (type: BuffType, element: ElementType) => {
      return {
        enable: false,
        stackable: true,
        effect: [
          {
            type,
            getValue: (_, stack) => {
              return b[stack - 1] || 0;
            },
          },
        ],
        condition: (data) => data.element === element,
        stack: 3,
        limit: 3,
        label: "元素伤害进一步加成",
        describe: `持有1/2/3层雾切之巴印时,获得${b}%自己的元素类型的元素伤害加成`,
        stackText: "雾切之巴印",
      };
    };
    return [
      {
        label: "元素伤害加成",
        describe: `获得${a}%所有元素伤害加成`,
        effect: [
          { type: BuffType.HydroPrcent, getValue: () => a },
          { type: BuffType.PyroPrcent, getValue: () => a },
          { type: BuffType.ElectroPrcent, getValue: () => a },
          { type: BuffType.AnemoPrcent, getValue: () => a },
          { type: BuffType.CryoPrcent, getValue: () => a },
          { type: BuffType.DendroPrcent, getValue: () => a },
          { type: BuffType.GeoPrcent, getValue: () => a },
        ],
        enable: true,
      },
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
