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
  SecondElementType,
  WeaponType,
} from "@/types/enum";
import { Constellation_E_3, Constellation_Q_5, S_80_CRITALHUNT_38P } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000126, "兹白")
@Weapon(WeaponType.Sword)
@Element(ElementType.Geo, SecondElementType.Moon)
@BaseData(Rarity.Five, [12919, 225, 957], 60, [13838, 275, 1025])
@Icons("UI_AvatarIcon_Zibai")
export class ZibaiData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["金铗点桂", "天地忽然身", "三垣威仪法"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.505542, 0.546691, 0.58784, 0.646624, 0.687773, 0.7348, 0.799462, 0.864125, 0.928787, 0.999328, 1.069869,
        1.14041, 1.21095, 1.281491, 1.352032,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.465527, 0.503418, 0.54131, 0.595441, 0.633333, 0.676638, 0.736182, 0.795726, 0.85527, 0.920227, 0.985184,
        1.050141, 1.115099, 1.180056, 1.245013,
      ],
    }),
    action("三段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.308882, 0.33423, 0.359165, 0.395082, 0.420223, 0.448956, 0.488464, 0.527973, 0.567481, 0.61058, 0.65368,
        0.69678, 0.73988, 0.78298, 0.826079,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.7789, 0.842357, 0.90576, 0.996336, 1.059739, 1.1322, 1.231834, 1.331467, 1.431101, 1.539792, 1.648483,
        1.757174, 1.865866, 1.974557, 2.083248,
      ],
    }),
    action("重击伤害·单次", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.73659, 0.796545, 0.8565, 0.94215, 1.002105, 1.070625, 1.16484, 1.259055, 1.35327, 1.45605, 1.55883, 1.66161,
        1.76439, 1.86717, 1.96995,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        0.639324, 0.691362, 0.7434, 0.81774, 0.869778, 0.92925, 1.011024, 1.092798, 1.174572, 1.26378, 1.352988,
        1.442196, 1.531404, 1.620612, 1.70982, 1.86717,
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
    action("月转时隙一段伤害", AttackType.Normal, ElementType.Geo, {
      def: [
        0.565792, 0.608226, 0.650661, 0.70724, 0.749674, 0.792109, 0.848688, 0.905267, 0.961846, 1.018426, 1.075005,
        1.131584, 1.202308, 1.273032, 1.343756,
      ],
    }),
    action("月转时隙二段伤害", AttackType.Normal, ElementType.Geo, {
      def: [
        0.521007, 0.560083, 0.599158, 0.651259, 0.690335, 0.72941, 0.781511, 0.833612, 0.885712, 0.937813, 0.989914,
        1.042014, 1.10714, 1.172266, 1.237392,
      ],
    }),
    action("月转时隙三段伤害·单次", AttackType.Normal, ElementType.Geo, {
      def: [
        0.345694, 0.371621, 0.397548, 0.432117, 0.458044, 0.483971, 0.51854, 0.55311, 0.587679, 0.622248, 0.656818,
        0.691387, 0.734599, 0.777811, 0.821022,
      ],
    }),
    action("月转时隙四段伤害", AttackType.Normal, ElementType.Geo, {
      def: [
        0.871788, 0.937172, 1.002556, 1.089735, 1.155119, 1.220503, 1.307682, 1.394861, 1.48204, 1.569218, 1.656397,
        1.743576, 1.852549, 1.961523, 2.070496,
      ],
    }),
    action("月转时隙重击伤害·单次", AttackType.Strong, ElementType.Geo, {
      def: [
        0.6595, 0.708962, 0.758425, 0.824375, 0.873838, 0.9233, 0.98925, 1.0552, 1.12115, 1.1871, 1.25305, 1.319,
        1.401437, 1.483875, 1.566312,
      ],
    }),
    action("灵驹飞踏第一段伤害", AttackType.Skill, ElementType.Geo, {
      def: [
        1.72528, 1.854676, 1.984072, 2.1566, 2.285996, 2.415392, 2.58792, 2.760448, 2.932976, 3.105504, 3.278032,
        3.45056, 3.66622, 3.88188, 4.09754,
      ],
    }),
    action(
      "灵驹飞踏第二段伤害",
      AttackType.Moon,
      ElementType.MoonCrystal,
      {
        def: [
          1.40968, 1.515406, 1.621132, 1.7621, 1.867826, 1.973552, 2.11452, 2.255488, 2.396456, 2.537424, 2.678392,
          2.81936, 2.99557, 3.17178, 3.34799,
        ],
      },
      "zibai"
    ),
    action(
      "月转时隙第四段额外伤害",
      AttackType.Moon,
      ElementType.MoonCrystal,
      {
        def: [
          0.29456, 0.316652, 0.338744, 0.3682, 0.390292, 0.412384, 0.44184, 0.471296, 0.500752, 0.530208, 0.559664,
          0.58912, 0.62594, 0.66276, 0.69958,
        ],
      },
      "zibai2"
    ),
  ];
  burstSkill = [
    action("技能第一段伤害", AttackType.Burst, ElementType.Geo, {
      def: [
        1.2696, 1.36482, 1.46004, 1.587, 1.68222, 1.77744, 1.9044, 2.03136, 2.15832, 2.28528, 2.41224, 2.5392, 2.6979,
        2.8566, 3.0153,
      ],
    }),
    action("技能第一段伤害", AttackType.Moon, ElementType.MoonCrystal, {
      def: [
        1.77744, 1.910748, 2.044056, 2.2218, 2.355108, 2.488416, 2.66616, 2.843904, 3.021648, 3.199392, 3.377136,
        3.55488, 3.77706, 3.99924, 4.22142,
      ],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_CRITALHUNT_38P,
    {
      label: "月下素娥降仙",
      describe: "灵驹飞踏第二段攻击造成的伤害提升，提升值相当于兹白防御力的60%。",
      effect: [
        {
          type: BuffType.MoonCrystalFixed,
          getValue: (data) => (data.baseDEF + data.extraDEF + data.extraDEF_NT) * 0.6,
          actionOn: ActionOn.External,
          special: "zibai",
        },
      ],
      enable: true,
    },
    {
      label: "叠嶂峦岫出云(岩)",
      describe: "队伍中每存在一名元素类型为岩元素的其他角色，都会使兹白的防御力提升15%；",
      effect: [{ type: BuffType.DEFPrcent, getValue: (_, s) => 15 * s }],
      enable: true,
      stack: 2,
      limit: 3,
      stackable: true,
      stackText: "岩角色数量",
    },
    {
      label: "叠嶂峦岫出云(水)",
      describe: "队伍中每存在一名元素类型为水元素的其他角色，都会使兹白的元素精通提升60点。",
      effect: [{ type: BuffType.MysteryFixed, getValue: (_, s) => 60 * s }],
      enable: true,
      stack: 1,
      limit: 3,
      stackable: true,
      stackText: "水角色数量",
    },
    {
      label: "月兆祝赐·浮明若流",
      describe:
        "基于兹白的防御力，提升队伍中角色造成的月结晶反应的基础伤害：每100点防御力都将提升0.7%月结晶反应的基础伤害，至多通过这种方式提升14%伤害。",
      effect: [
        {
          type: BuffType.MoonCrystalBasePercent,
          getValue: (data) => Math.min(((data.baseDEF + data.extraDEF + data.extraDEF_NT) / 100) * 0.7, 14),
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
      shareable: true,
    },
    {
      label: "1命·出勃然而入寥然",
      describe: "初次施放灵驹飞踏时，第二段攻击造成的月结晶反应伤害提升220%。",
      effect: [{ type: BuffType.MoonCrystalPrcent, getValue: () => 220, special: "zibai" }],
      enable: true,
      condition: ({ constellation }) => constellation >= 1,
    },
    {
      label: "2命·化于生而死于尸",
      describe:
        "处于「月转时隙」模式下时，队伍中附近的所有角色造成的月结晶反应伤害提升30%。<br />月兆·满辉：灵驹飞踏第二段攻击造成的伤害进一步提升，提升值相当于兹白防御力的550%。",
      effect: [
        { type: BuffType.MoonCrystalPrcent, getValue: () => 30 },
        {
          type: BuffType.MoonCrystalFixed,
          getValue: (data, s) => s * (data.baseDEF + data.extraDEF + data.extraDEF_NT) * 5.5,
          actionOn: ActionOn.External,
          special: "zibai",
        },
      ],
      enable: true,
      stackable: true,
      stackText: "月兆·满辉",
      limit: 1,
      stack: 1,
      condition: ({ constellation }) => constellation >= 2,
      target: BuffTarget.Self,
    },
    {
      label: "2命·化于生而死于尸",
      describe: "处于「月转时隙」模式下时，队伍中附近的所有角色造成的月结晶反应伤害提升30%。",
      effect: [{ type: BuffType.MoonCrystalPrcent, getValue: () => 30 }],
      enable: false,
      shareable: true,
      target: BuffTarget.Other,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_E_3,
    {
      label: "4命·魂魄往而身从之",
      describe:
        "灵驹飞踏命中敌人时，兹白将获得「月涣华」效果：下一次进行普通攻击时，第四段额外攻击将造成相当于原本250%的月结晶反应伤害。",
      effect: [{ type: BuffType.MoonCrystalRate, getValue: () => 150, special: "zibai2" }],
      enable: true,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_Q_5,
    {
      label: "6命·天地忽如一远行",
      describe:
        "基于消耗的「时隙浮光」超过70点的部分，每额外消耗1点「时隙浮光」，都会使本次灵驹飞踏与接下来3秒内兹白造成的月结晶反应伤害擢升1.6%。",
      effect: [{ type: BuffType.MoonCrystalPromote, getValue: (_, s) => 1.6 * s }],
      enable: true,
      stack: 30,
      limit: 30,
      stackable: true,
      stackText: "额外消耗",
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![兹白](https://enka.network/ui/UI_AvatarIcon_Zibai.png) */
export const Zibai = new ZibaiData();
