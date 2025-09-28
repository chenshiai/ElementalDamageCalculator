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
      atk: [
        0.44548, 0.48174, 0.518, 0.5698, 0.60606, 0.6475, 0.70448, 0.76146, 0.81844, 0.8806, 0.94276, 1.00492, 1.06708,
        1.12924, 1.1914,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.42742, 0.46221, 0.497, 0.5467, 0.58149, 0.62125, 0.67592, 0.73059, 0.78526, 0.8449, 0.90454, 0.96418, 1.02382,
        1.08346, 1.1431,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.5461, 0.59055, 0.635, 0.6985, 0.74295, 0.79375, 0.8636, 0.93345, 1.0033, 1.0795, 1.1557, 1.2319, 1.3081,
        1.3843, 1.4605,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.59684, 0.64542, 0.694, 0.7634, 0.81198, 0.8675, 0.94384, 1.02018, 1.09652, 1.1798, 1.26308, 1.34636, 1.42964,
        1.51292, 1.5962,
      ],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.71896, 0.77748, 0.836, 0.9196, 0.97812, 1.045, 1.13696, 1.22892, 1.32088, 1.4212, 1.52152, 1.62184, 1.72216,
        1.82248, 1.9228,
      ],
    }),
    action("重击伤害·1", AttackType.Strong, ElementType.Physical, {
      atk: [0.559, 0.6045, 0.65, 0.715, 0.7605, 0.8125, 0.884, 0.9555, 1.027, 1.105, 1.183, 1.261, 1.339, 1.417, 1.495],
    }),
    action("重击伤害·2", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.60716, 0.65658, 0.706, 0.7766, 0.82602, 0.8825, 0.96016, 1.03782, 1.11548, 1.2002, 1.28492, 1.36964, 1.45436,
        1.53908, 1.6238,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        0.639324, 0.691362, 0.7434, 0.81774, 0.869778, 0.92925, 1.011024, 1.092798, 1.174572, 1.26378, 1.352988,
        1.442196, 1.531404, 1.620612, 1.70982,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.278377, 1.382431, 1.486485, 1.635134, 1.739187, 1.858106, 2.02162, 2.185133, 2.348646, 2.527025, 2.705403,
        2.883781, 3.062159, 3.240537, 3.418915,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.596762, 1.726731, 1.8567, 2.04237, 2.172339, 2.320875, 2.525112, 2.729349, 2.933586, 3.15639, 3.379194,
        3.601998, 3.824802, 4.047606, 4.27041,
      ],
    }),
  ];
  elementSkill = [
    action("点按伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [
        1.376, 1.4792, 1.5824, 1.72, 1.8232, 1.9264, 2.064, 2.2016, 2.3392, 2.4768, 2.6144, 2.752, 2.924, 3.096, 3.268,
      ],
    }),
    action("一段蓄力伤害·前段", AttackType.Skill, ElementType.Pyro, {
      atk: [0.84, 0.903, 0.966, 1.05, 1.113, 1.176, 1.26, 1.344, 1.428, 1.512, 1.596, 1.68, 1.785, 1.89, 1.995],
    }),
    action("一段蓄力伤害·后段", AttackType.Skill, ElementType.Pyro, {
      atk: [0.92, 0.989, 1.058, 1.15, 1.219, 1.288, 1.38, 1.472, 1.564, 1.656, 1.748, 1.84, 1.955, 2.07, 2.185],
    }),
    action("二段蓄力伤害·前段", AttackType.Skill, ElementType.Pyro, {
      atk: [0.88, 0.946, 1.012, 1.1, 1.166, 1.232, 1.32, 1.408, 1.496, 1.584, 1.672, 1.76, 1.87, 1.98, 2.09],
    }),
    action("二段蓄力伤害·后段", AttackType.Skill, ElementType.Pyro, {
      atk: [0.96, 1.032, 1.104, 1.2, 1.272, 1.344, 1.44, 1.536, 1.632, 1.728, 1.824, 1.92, 2.04, 2.16, 2.28],
    }),
    action("爆炸伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [1.32, 1.419, 1.518, 1.65, 1.749, 1.848, 1.98, 2.112, 2.244, 2.376, 2.508, 2.64, 2.805, 2.97, 3.135],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [
        2.328, 2.5026, 2.6772, 2.91, 3.0846, 3.2592, 3.492, 3.7248, 3.9576, 4.1904, 4.4232, 4.656, 4.947, 5.238, 5.529,
      ],
    }),
    action("持续治疗", AttackType.Heal, ElementType.None, {
      hp: [0.06, 0.0645, 0.069, 0.075, 0.0795, 0.084, 0.09, 0.096, 0.102, 0.108, 0.114, 0.12, 0.1275, 0.135, 0.1425],
      fixed: [
        577.3388, 635.0807, 697.63446, 765, 837.17737, 914.16656, 995.96765, 1082.5804, 1174.0051, 1270.2417, 1371.29,
        1477.1501, 1587.8221, 1703.3059, 1823.6016,
      ],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...A_80_CHARGE_26P,
    {
      label: "元素爆发·美妙旅程",
      describe:
        "基于班尼特的基础攻击力，以一定比例获得非基础攻击力加成；1命后，提升比例增加20%；6命后，提供15%火元素伤害加成，同时提供火元素附魔。",
      effect: [
        {
          type: BuffType.ATKFixed,
          getValue(data) {
            let a = [0.56, 0.602, 0.644, 0.7, 0.742, 0.784, 0.84, 0.896, 0.952, 1.008, 1.064, 1.12, 1.19, 1.26, 1.33][
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
