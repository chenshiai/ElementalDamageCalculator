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
import { Constellation_E_3, Constellation_Q_5, S_80_DENDRO_28P } from "../buffs";

@EnKaId(10000078, "艾尔海森")
@Weapon(WeaponType.Sword)
@Element(ElementType.Dendro)
@BaseData(Rarity.Five, [13348, 313, 782], 70, [14297, 384, 837])
@Icons("UI_AvatarIcon_Alhatham")
export class AlhathamData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["溯因反绎法", "共相·理式摹写", "殊境·显象缚结"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.495257, 0.535568, 0.57588, 0.633468, 0.67378, 0.71985, 0.783197, 0.846544, 0.90989, 0.978996, 1.048102,
        1.117207, 1.186313, 1.255418, 1.324524,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.507495, 0.548802, 0.59011, 0.649121, 0.690429, 0.737638, 0.80255, 0.867462, 0.932374, 1.003187, 1.074,
        1.144813, 1.215627, 1.28644, 1.357253,
      ],
    }),
    action("三段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.341785, 0.369605, 0.397425, 0.437167, 0.464987, 0.496781, 0.540498, 0.584215, 0.627931, 0.675622, 0.723313,
        0.771004, 0.818696, 0.866387, 0.914077,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.667678, 0.722024, 0.77637, 0.854007, 0.908353, 0.970463, 1.055863, 1.141264, 1.226665, 1.319829, 1.412993,
        1.506158, 1.599322, 1.692487, 1.785651,
      ],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.838509, 0.906759, 0.97501, 1.072511, 1.140762, 1.218762, 1.326014, 1.433265, 1.540516, 1.657517, 1.774518,
        1.891519, 2.008521, 2.125522, 2.242523,
      ],
    }),
    action("重击伤害·单次", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.55255, 0.597525, 0.6425, 0.70675, 0.751725, 0.803125, 0.8738, 0.944475, 1.01515, 1.09225, 1.16935, 1.24645,
        1.32355, 1.40065, 1.47775,
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
    action("突进攻击伤害", AttackType.Skill, ElementType.Dendro, {
      atk: [
        1.936, 2.0812, 2.2264, 2.42, 2.5652, 2.7104, 2.904, 3.0976, 3.2912, 3.4848, 3.6784, 3.872, 4.114, 4.356, 4.598,
      ],
      em: [
        1.5488, 1.66496, 1.78112, 1.936, 2.05216, 2.16832, 2.3232, 2.47808, 2.63296, 2.78784, 2.94272, 3.0976, 3.2912,
        3.4848, 3.6784,
      ],
    }),
    action(
      "光幕攻击伤害",
      AttackType.Skill,
      ElementType.Dendro,
      {
        atk: [
          0.672, 0.7224, 0.7728, 0.84, 0.8904, 0.9408, 1.008, 1.0752, 1.1424, 1.2096, 1.2768, 1.344, 1.428, 1.512,
          1.596,
        ],
        em: [
          1.344, 1.4448, 1.5456, 1.68, 1.7808, 1.8816, 2.016, 2.1504, 2.2848, 2.4192, 2.5536, 2.688, 2.856, 3.024,
          3.192,
        ],
      },
      "Alhatham"
    ),
  ];
  burstSkill = [
    action(
      "单次伤害",
      AttackType.Burst,
      ElementType.Dendro,
      {
        atk: [
          1.216, 1.3072, 1.3984, 1.52, 1.6112, 1.7024, 1.824, 1.9456, 2.0672, 2.1888, 2.3104, 2.432, 2.584, 2.736,
          2.888,
        ],
        em: [
          0.9728, 1.04576, 1.11872, 1.216, 1.28896, 1.36192, 1.4592, 1.55648, 1.65376, 1.75104, 1.84832, 1.9456, 2.0672,
          2.1888, 2.3104,
        ],
      },
      "Alhatham"
    ),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_DENDRO_28P,
    {
      label: "元素战技·琢光镜",
      describe: "持有琢光镜时，艾尔海森的普通攻击、重击与下落攻击将转为无法被附魔覆盖的草元素伤害",
      effect: [{ type: BuffType.Transform, getValue: () => EnchantingType[ElementType.Dendro] }],
      enable: true,
    },
    {
      label: "谜林道破",
      describe:
        "艾尔海森的每点元素精通，都会使光幕伤害与殊境·显象缚结造成的伤害提升0.1%。通过这种方式，至多使光幕伤害与殊境·显象缚结造成的伤害提升100%",
      effect: [
        {
          type: BuffType.GlobalPrcent,
          getValue: (data) => Math.min((data.elementalMystery + data.elementalMystery_NT) * 0.1, 100),
          special: "Alhatham",
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: true,
    },
    {
      label: "2命·辩章",
      describe: "艾尔海森产生琢光镜时，每1枚产生的琢光镜将使元素精通提升50点，该效果最多叠加4层",
      effect: [{ type: BuffType.MysteryFixed, getValue: (_, s) => 50 * s }],
      enable: false,
      stack: 0,
      stackable: true,
      limit: 4,
      stackText: "琢光镜",
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_E_3,
    {
      label: "4命·义贯",
      describe:
        "施放殊境·显象缚结时，每消耗1枚琢光镜，使队伍中附近的其他角色元素精通提升30点；每产生1枚琢光镜，使艾尔海森获得10%草元素伤害加成",
      effect: [
        { type: BuffType.MysteryFixed, getValue: (_, s) => 30 * s },
        {
          type: BuffType.DendroPrcent,
          getValue: (data, s) => {
            return data.constellation >= 6 ? 30 : 10 * (3 - s);
          },
        },
      ],
      enable: false,
      stack: 0,
      stackable: true,
      limit: 3,
      stackText: "消耗琢光镜数量",
      condition: ({ constellation }) => constellation >= 4,
    },
    {
      label: "4命·义贯",
      describe: "施放殊境·显象缚结时，每消耗1枚琢光镜，使队伍中附近的其他角色元素精通提升30点",
      effect: [{ type: BuffType.MysteryFixed, getValue: (_, s) => 30 * s }],
      enable: false,
      stack: 0,
      stackable: true,
      shareable: true,
      target: BuffTarget.Other,
      limit: 3,
      stackText: "消耗琢光镜数量",
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_Q_5,
    {
      label: "6命·正理",
      describe:
        "殊境·显象缚结施放完成2秒后，将无视消耗琢光镜的个数，固定产生3枚琢光镜；艾尔海森产生琢光镜时，若琢光镜数量已达到上限，艾尔海森的暴击率提升10%，暴击伤害提升70%",
      effect: [
        { type: BuffType.Critcal, getValue: () => 10 },
        { type: BuffType.CritcalHurt, getValue: () => 70 },
      ],
      enable: false,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![艾尔海森](https://enka.network/ui/UI_AvatarIcon_Alhatham.png) */
export const Alhatham = new AlhathamData();
