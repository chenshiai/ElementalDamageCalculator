import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import {
  ActionOn,
  AttackType,
  BuffTarget,
  BuffType,
  ElementType,
  Rarity,
  SecondElementType,
  WeaponType,
} from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { Constellation_Q_5, Constellation_E_3, S_80_CRITALHUNT_38P, PolestarField } from "../buffs";

@EnKaId(10000150, "奥黛塔")
@Weapon(WeaponType.Sword)
@Element(ElementType.Cryo, SecondElementType.Start)
@BaseData(Rarity.Five, [12984, 335, 787], 60, [13903, 410, 843])
@Icons("UI_AvatarIcon_Odette")
export class OdetteData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["雪鹄变奏", "柔板·幻灵夜舞", "疾板·苍羽一梦"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.5186, 0.5608, 0.603, 0.6633, 0.7055, 0.7537, 0.8201, 0.8864, 0.9527, 1.0251, 1.0974, 1.1698, 1.2422, 1.3145,
        1.3869,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.5151, 0.557, 0.599, 0.6589, 0.7008, 0.7487, 0.8146, 0.8805, 0.9464, 1.0182, 1.0901, 1.162, 1.2339, 1.3057,
        1.3776,
      ],
    }),
    action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.3261, 0.3527, 0.3792, 0.4171, 0.4437, 0.474, 0.5157, 0.5574, 0.5991, 0.6446, 0.6901, 0.7356, 0.7812, 0.8267,
        0.8722,
      ],
    }),
    action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.3828, 0.4139, 0.4451, 0.4896, 0.5208, 0.5564, 0.6053, 0.6543, 0.7033, 0.7567, 0.8101, 0.8635, 0.9169, 0.9703,
        1.0237,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.7457, 0.8064, 0.8671, 0.9538, 1.0145, 1.0839, 1.1793, 1.2747, 1.3701, 1.4741, 1.5782, 1.6822, 1.7863, 1.8903,
        1.9944,
      ],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.9021, 0.9756, 1.049, 1.1539, 1.2273, 1.3112, 1.4266, 1.542, 1.6574, 1.7833, 1.9091, 2.035, 2.1609, 2.2868,
        2.4127,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        1.0741, 1.1616, 1.249, 1.3739, 1.4613, 1.5612, 1.6986, 1.836, 1.9734, 2.1233, 2.2732, 2.4231, 2.5729, 2.7228,
        2.8727,
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
    action("技能伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [
        1.0808, 1.1619, 1.2429, 1.351, 1.4321, 1.5131, 1.6212, 1.7293, 1.8374, 1.9454, 2.0535, 2.1616, 2.2967, 2.4318,
        2.5669,
      ],
    }),
    action("破晓终奏持续伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [
        0.9584, 1.0303, 1.1022, 1.198, 1.2699, 1.3418, 1.4376, 1.5334, 1.6293, 1.7251, 1.821, 1.9168, 2.0366, 2.1564,
        2.2762,
      ],
    }),
    action("破晓终奏星超导伤害", AttackType.Start, ElementType.StellarConductCryo, {
      atk: [
        3.0576, 3.2869, 3.5162, 3.822, 4.0513, 4.2806, 4.5864, 4.8922, 5.1979, 5.5037, 5.8094, 6.1152, 6.4974, 6.8796,
        7.2618,
      ],
    }),
    action("破晓终奏星扩散伤害", AttackType.Start, ElementType.StellarSwirlCryo, {
      atk: [
        4.5864, 4.9304, 5.2744, 5.733, 6.077, 6.421, 6.8796, 7.3382, 7.7969, 8.2555, 8.7142, 9.1728, 9.7461, 10.3194,
        10.8927,
      ],
    }),
    action("拂羽舞步伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [
        0.4304, 0.4627, 0.495, 0.538, 0.5703, 0.6026, 0.6456, 0.6886, 0.7317, 0.7747, 0.8178, 0.8608, 0.9146, 0.9684,
        1.0222,
      ],
    }),
    action("拂羽舞步星超导伤害", AttackType.Start, ElementType.StellarConductCryo, {
      atk: [
        0.2702, 0.2905, 0.3108, 0.3378, 0.3581, 0.3783, 0.4054, 0.4324, 0.4594, 0.4864, 0.5135, 0.5405, 0.5743, 0.608,
        0.6418,
      ],
    }),
    action("拂羽舞步星扩散伤害", AttackType.Start, ElementType.StellarSwirlCryo, {
      atk: [
        0.4053, 0.4357, 0.4661, 0.5066, 0.537, 0.5674, 0.6079, 0.6484, 0.689, 0.7295, 0.77, 0.8106, 0.8612, 0.9119,
        0.9625,
      ],
    }),
    action("旋翼舞步伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [
        0.5146, 0.5532, 0.5918, 0.6433, 0.6819, 0.7205, 0.772, 0.8234, 0.8749, 0.9264, 0.9778, 1.0293, 1.0936, 1.1579,
        1.2223,
      ],
    }),
    action("旋翼舞步星超导伤害", AttackType.Start, ElementType.StellarConductCryo, {
      atk: [
        0.3231, 0.3474, 0.3716, 0.4039, 0.4281, 0.4524, 0.4847, 0.517, 0.5493, 0.5816, 0.6139, 0.6462, 0.6866, 0.727,
        0.7674,
      ],
    }),
    action("旋翼舞步星扩散伤害", AttackType.Start, ElementType.StellarSwirlCryo, {
      atk: [
        0.4846, 0.521, 0.5573, 0.6058, 0.6421, 0.6785, 0.727, 0.7754, 0.8239, 0.8724, 0.9208, 0.9693, 1.0299, 1.0904,
        1.151,
      ],
    }),
  ];

  burstSkill = [
    action("斩击伤害·单次", AttackType.Burst, ElementType.Cryo, {
      atk: [
        1.1018, 1.1844, 1.267, 1.3772, 1.4598, 1.5425, 1.6526, 1.7628, 1.873, 1.9832, 2.0933, 2.2035, 2.3412, 2.479,
        2.6167,
      ],
    }),
    action("斩击最终段伤害", AttackType.Burst, ElementType.Cryo, {
      atk: [
        1.7027, 1.8304, 1.9581, 2.1284, 2.2561, 2.3838, 2.5541, 2.7244, 2.8946, 3.0649, 3.2352, 3.4054, 3.6183, 3.8311,
        4.044,
      ],
    }),
  ];
  otherSkill = [
    action("1命·共舞结束伤害", AttackType.Start, ElementType.StellarConductCryo, {
      atk: [3],
    }),
    action("1命·共舞结束伤害", AttackType.Start, ElementType.StellarSwirlCryo, {
      atk: [4.5],
    }),
    action("4命·协同伤害", AttackType.Start, ElementType.StellarConductCryo, {
      atk: [0.66],
    }),
    action("4命·协同伤害", AttackType.Start, ElementType.StellarSwirlCryo, {
      atk: [0.99],
    }),
  ];
  buffs: IBuffBase[] = [
    ...S_80_CRITALHUNT_38P,
    {
      label: "雪鹄之梦",
      describe: "星烁反应伤害提升",
      effect: [
        {
          type: BuffType.GlobalStartPrcent,
          getValue: (data) => {
            return [14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58, 62, 66, 70][
              data.burstLevel + data.burstLevelAdd - 1
            ];
          },
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: false,
    },
    {
      label: "赤忱者的悲歌",
      describe:
        "基于奥黛塔攻击力超过1000点的部分，每100点攻击力都将使奥黛塔造成的星烁反应伤害额外造成原本1.5%的伤害，至多通过这种方式额外造成原本30%的伤害",
      effect: [
        {
          type: BuffType.StellarConductRate,
          getValue: (data) => Math.min(((data.baseATK + data.extraATK + data.extraATK_NT) / 100) * 1.5, 30),
        },
        {
          type: BuffType.StellarSwirlRate,
          getValue: (data) => Math.min(((data.baseATK + data.extraATK + data.extraATK_NT) / 100) * 1.5, 30),
        },
      ],
      enable: true,
    },
    {
      label: "获选者的春祭",
      describe: "每层华彩都会使角色造成的星烁反应伤害提升15%",
      effect: [
        {
          type: BuffType.GlobalStartPrcent,
          getValue: (_, s) => s * 15,
        },
      ],
      enable: false,
      shareable: true,
      stackable: true,
      target: BuffTarget.All,
      stack: 4,
      limit: 6,
      stackText: "「华彩」",
    },
    {
      label: "星耀祝礼·银晓之舞",
      describe:
        "基于奥黛塔的攻击力，提升队伍中角色造成的星烁反应的基础伤害：每100点攻击力都将提升0.7%星烁反应的基础伤害，至多通过这种方式提升14%伤害",
      effect: [
        {
          type: BuffType.StellarConductBasePercent,
          getValue: (data) => Math.min(14, (data.baseATK + data.extraATK + data.extraATK_NT) * 0.007),
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.StellarSwirlBasePercent,
          getValue: (data) => Math.min(14, (data.baseATK + data.extraATK + data.extraATK_NT) * 0.007),
          actionOn: ActionOn.External,
        },
      ],
      target: BuffTarget.All,
      shareable: true,
      enable: true,
    },
    PolestarField,
    {
      label: "2命·「她想，我要见证雪鹄未见之梦」",
      describe:
        "每层华彩还会使角色的攻击力提升7%。若奥黛塔处于辉映·星烁状态，独舞倒影附近敌人的对应元素抗性还会降低20%。",
      effect: [
        {
          type: BuffType.GlobalStartPrcent,
          getValue: (_, s) => s * 15,
        },
        {
          type: BuffType.EnemyAnemoResistance,
          getValue: () => -20,
        },
        {
          type: BuffType.EnemyElectroResistance,
          getValue: () => -20,
        },
        {
          type: BuffType.EnemyCryoResistance,
          getValue: () => -20,
        },
      ],
      enable: false,
      shareable: true,
      stackable: true,
      target: BuffTarget.All,
      stack: 4,
      limit: 6,
      stackText: "「华彩」",
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_E_3,
    {
      label: "4命·「向上，坠往恍惚、燃烧的蓝空」",
      describe: "奥黛塔获得雪鹄之梦时，还会使队伍中附近的其他角色造成的星烁反应伤害提升，提升值相当于雪鹄之梦效果的50%",
      effect: [
        {
          type: BuffType.GlobalStartPrcent,
          getValue: (data) => {
            return (
              [14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58, 62, 66, 70][data.burstLevel + data.burstLevelAdd - 1] / 2
            );
          },
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.Other,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_Q_5,
    {
      label: "6命·「伸出手，触及苍穹永恒的面容」",
      describe: "处于华彩影响下的角色，对敌人造成的星烁反应伤害擢升25%",
      effect: [
        {
          type: BuffType.StellarConductPromote,
          getValue: () => 25,
        },
        {
          type: BuffType.StellarSwirlPromote,
          getValue: () => 25,
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.Other,
      condition: ({ constellation }) => constellation >= 6,
    },
    {
      label: "6命·「伸出手，触及苍穹永恒的面容」",
      describe: "处于华彩影响下的角色，对敌人造成的星烁反应伤害擢升25%，且奥黛塔对敌人造成的星烁反应伤害额外擢升20%",
      effect: [
        {
          type: BuffType.StellarConductPromote,
          getValue: () => 45,
        },
        {
          type: BuffType.StellarSwirlPromote,
          getValue: () => 45,
        },
      ],
      enable: true,
      target: BuffTarget.Self,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![奥黛塔](https://enka.network/ui/UI_AvatarIcon_Odette.png) */
export const Odette = new OdetteData();
