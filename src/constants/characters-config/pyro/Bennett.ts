import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import {
  ActionOn,
  AttackType,
  BuffTarget,
  BuffType,
  ElementType,
  EnchantingType,
  Rarity,
  WeaponType,
} from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_CHARGE_26P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000032, "班尼特")
@Weapon(WeaponType.Sword)
@Element(ElementType.Pyro)
@BaseData(Rarity.Four, [12397, 191, 771], 60, [13255, 239, 825])
@Icons("UI_AvatarIcon_Bennett")
export class BennettData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["好运剑", "热情过载", "美妙旅程"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.445, 0.482, 0.518, 0.57, 0.606, 0.648, 0.704, 0.762, 0.819, 0.881, 0.943],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.427, 0.462, 0.497, 0.547, 0.581, 0.621, 0.676, 0.731, 0.785, 0.845, 0.905],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.546, 0.591, 0.635, 0.699, 0.743, 0.794, 0.864, 0.934, 1.003, 1.08, 1.156],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.597, 0.645, 0.694, 0.763, 0.812, 0.868, 0.944, 1.02, 1.097, 1.18, 1.263],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.719, 0.777, 0.836, 0.92, 0.978, 1.05, 1.14, 1.23, 1.32, 1.42, 1.52],
    }),
    action("重击伤害·1", AttackType.Strong, ElementType.Physical, {
      atk: [0.559, 0.605, 0.65, 0.715, 0.76, 0.813, 0.884, 0.956, 1.027, 1.105, 1.183],
    }),
    action("重击伤害·2", AttackType.Strong, ElementType.Physical, {
      atk: [0.607, 0.657, 0.706, 0.777, 0.826, 0.883, 0.96, 1.038, 1.116, 1.2, 1.285],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
    }),
  ];
  elementSkill = [
    action("点按伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [1.38, 1.48, 1.58, 1.72, 1.82, 1.93, 2.06, 2.2, 2.34, 2.48, 2.61, 2.75, 2.92],
    }),
    action("一段蓄力伤害·前段", AttackType.Skill, ElementType.Pyro, {
      atk: [0.84, 0.903, 0.966, 1.05, 1.11, 1.18, 1.26, 1.34, 1.43, 1.51, 1.6, 1.68, 1.79],
    }),
    action("一段蓄力伤害·后段", AttackType.Skill, ElementType.Pyro, {
      atk: [0.92, 0.989, 1.06, 1.15, 1.22, 1.29, 1.38, 1.47, 1.56, 1.66, 1.75, 1.84, 1.96],
    }),
    action("二段蓄力伤害·前段", AttackType.Skill, ElementType.Pyro, {
      atk: [0.88, 0.946, 1.01, 1.1, 1.17, 1.23, 1.32, 1.41, 1.5, 1.58, 1.67, 1.76, 1.87],
    }),
    action("二段蓄力伤害·后段", AttackType.Skill, ElementType.Pyro, {
      atk: [0.96, 1.03, 1.1, 1.2, 1.27, 1.34, 1.44, 1.54, 1.63, 1.73, 1.82, 1.92, 2.04],
    }),
    action("爆炸伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [1.32, 1.42, 1.52, 1.65, 1.75, 1.85, 1.98, 2.11, 2.24, 2.38, 2.51, 2.64, 2.81],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [2.33, 2.5, 2.68, 2.91, 3.08, 3.26, 3.49, 3.72, 3.96, 4.19, 4.42, 4.66, 4.95, 5.24],
    }),
    action("持续治疗", AttackType.Heal, ElementType.None, {
      hp: [0.06, 0.0645, 0.069, 0.075, 0.0795, 0.084, 0.09, 0.096, 0.102, 0.108, 0.114, 0.12, 0.1275, 0.135],
      fixed: [577, 635, 698, 765, 837, 914, 996, 1083, 1174, 1270, 1371, 1477, 1588, 1703],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...A_80_CHARGE_26P,
    {
      label: "元素爆发·美妙旅程",
      describe: "基于班尼特的基础攻击力，以一定比例获得非基础攻击力加成；1命后，提升比例增加20%；6命后，提供15%火元素伤害加成，同时提供火元素附魔。",
      effect: [
        {
          type: BuffType.ATKFixed,
          getValue(data) {
            let a = [0.56, 0.6, 0.64, 0.7, 0.74, 0.78, 0.84, 0.9, 0.95, 1.01, 1.06, 1.12, 1.19, 1.26][
              data.burstLevel + data.burstLevelAdd - 1
            ];
            if (data.constellation >= 1) {
              a += 0.2;
            }
            return data.baseATK * a;
          },
          transform: true,
        },
        {
          type: BuffType.PyroPrcent,
          getValue: ({ constellation }) => {
            return constellation >= 6 ? 15 : 0;
          },
        },
        {
          type: BuffType.Enchanting,
          getValue: ({ constellation }) => {
            return constellation >= 6 ? EnchantingType[ElementType.Pyro] : EnchantingType[ElementType.Physical];
          },
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "2命·踏破绝境",
      describe: "班尼特的生命值低于70%时，元素充能效率提高30%",
      effect: [{ type: BuffType.ChargeFixed, getValue: () => 30 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_E_3,
    Constellation_Q_5,
  ];
}

/** ![班尼特](https://enka.network/ui/UI_AvatarIcon_Bennett.png) */
export const Bennett = new BennettData();
