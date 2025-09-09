import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { Constellation_E_5, Constellation_Q_3, S_80_CRITALHUNT_38P } from "../buffs";

// .replaceAll("%", '').replaceAll(/[\u4e00-\u9fff]+/g, "").replaceAll("\t",",").split(",").map(i=>Math.round(i*100)/10000)

@EnKaId(10000069, "菲林斯")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Electro)
@BaseData(Rarity.Five, [12491, 352, 809], 80, [13379, 431, 866])
@Icons("UI_AvatarIcon_Flins")
class FlinsData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["扈圣魔枪", "古律·孤灯遗秘", "旧仪·夜客致访"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.44726, 0.483665, 0.52007, 0.572077, 0.608482, 0.650068, 0.707295, 0.764503, 0.821711, 0.884119, 0.946527,
        1.008936, 1.071344, 1.133753, 1.196161,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.451483, 0.488231, 0.52498, 0.577478, 0.614227, 0.656225, 0.713973, 0.771721, 0.829468, 0.892466, 0.955464,
        1.018461, 1.081459, 1.144456, 1.207454,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.559198, 0.604714, 0.65023, 0.715253, 0.760769, 0.812787, 0.884313, 0.955838, 1.027363, 1.105391, 1.183419,
        1.261446, 1.339474, 1.417501, 1.495529,
      ],
    }),
    action("四段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.320389, 0.346467, 0.372545, 0.4098, 0.435878, 0.465681, 0.506661, 0.547641, 0.588621, 0.633327, 0.678032,
        0.722737, 0.767443, 0.812148, 0.856853,
      ],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.767946, 0.830453, 0.89296, 1.3178, 1.40166, 1.1162, 1.214426, 1.312651, 1.410877, 1.518032, 1.625187,
        1.732342, 1.839498, 1.946653, 2.053808,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        1.03028, 1.11414, 1.198, 1.3178, 1.40166, 1.4975, 1.62928, 1.76106, 1.89284, 2.0366, 2.18036, 2.32412, 2.46788,
        2.6164, 2.7554,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        0.639324, 0.691362, 0.7434, 0.81774, 0.869778, 0.92925, 1.011024, 1.092798, 1.1174572, 1.26378, 1.352988,
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
      atk: [],
    }),
  ];
  elementSkill = [
    action("一段伤害", AttackType.Normal, ElementType.Electro, {
      atk: [
        0.58248, 0.626166, 0.669852, 0.7281, 0.771786, 0.815472, 0.87372, 0.931968, 0.990216, 1.048464, 1.106712,
        1.16496, 1.23777, 1.31058, 1.38339,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Electro, {
      atk: [
        0.587976, 0.632074, 0.676172, 0.73497, 0.779068, 0.823166, 0.881964, 0.940762, 0.999559, 1.058357, 1.117154,
        1.175952, 1.249449, 1.322946, 1.396443,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Electro, {
      atk: [
        0.728256, 0.792875, 0.837494, 0.91032, 0.964939, 1.019558, 1.092384, 1.16521, 1.238035, 1.383686, 1.456512,
        1.547544, 1.638576, 1.729608,
      ],
    }),
    action("四段伤害·单次", AttackType.Normal, ElementType.Electro, {
      atk: [
        0.417252, 0.448546, 0.47984, 0.521565, 0.552859, 0.584153, 0.625878, 0.667603, 0.709328, 0.792779, 0.834504,
        0.88666, 0.938817, 0.990973,
      ],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Electro, {
      atk: [
        1.000112, 1.07512, 1.150129, 1.25014, 1.325148, 1.400157, 1.500168, 1.600179, 1.70019, 1.900213, 2.00022,
        2.125238, 2.250252, 2.375266,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Electro, {
      atk: [
        1.1496, 1.23582, 1.32204, 1.437, 1.52322, 1.60944, 1.7244, 1.83936, 1.95432, 2.06928, 2.18424, 2.2992, 2.4429,
        2.5866, 2.73,
      ],
    }),
    action("北国枪阵伤害", AttackType.Skill, ElementType.Electro, {
      atk: [
        1.784, 1.9178, 2.0516, 2.23, 2.3638, 2.4976, 2.676, 2.8544, 3.0328, 3.2112, 3.3896, 3.568, 3.791, 4.014, 4.237,
      ],
    }),
  ];
  burstSkill = [
    action("技能初始伤害", AttackType.Burst, ElementType.Electro, {
      atk: [
        2.5984, 2.79328, 2.98816, 3.248, 3.44288, 3.63776, 3.8976, 4.15744, 4.41728, 4.67712, 4.93696, 5.1968, 5.5216,
        5.8464, 6.1712,
      ],
    }),
    action("中间段月感电伤害", AttackType.Moon, ElementType.MoonElectro, {
      atk: [
        0.1624, 0.17458, 0.18676, 0.203, 0.21518, 0.22736, 0.2436, 0.25984, 0.27608, 0.29232, 0.30856, 0.3248, 0.3451,
        0.3654, 0.3857,
      ],
    }),
    action("最终段月感电伤害", AttackType.Moon, ElementType.MoonElectro, {
      atk: [
        1.16928, 1.256976, 1.344672, 1.4616, 1.549296, 1.636992, 1.75392, 1.870848, 1.987776, 2.104704, 2.221632,
        2.33856, 2.48472, 2.63088, 2.77704,
      ],
    }),
    action("雷霆交响伤害", AttackType.Moon, ElementType.MoonElectro, {
      atk: [
        0.71456, 0.768152, 0.821744, 0.8932, 0.946792, 1.000384, 1.07184, 1.143296, 1.214752, 1.286208, 1.357664,
        1.42912, 1.51844, 1.60776, 1.69708,
      ],
    }),
    action("雷霆交响额外伤害", AttackType.Moon, ElementType.MoonElectro, {
      atk: [
        1.03936, 1.117312, 1.195264, 1.2992, 1.377152, 1.455104, 1.55904, 1.662976, 1.766912, 1.870848, 1.974784,
        2.07872, 2.20864, 2.33856, 2.46848,
      ],
    }),
  ];
  otherSkill = [
    action("2命·渡越魍魉之墙伤害", AttackType.Moon, ElementType.MoonElectro, {
      atk: [0.5],
    }),
  ];
  buffs: IBuffBase[] = [
    ...S_80_CRITALHUNT_38P,
    {
      label: "寒冬的交响",
      describe: "月兆·满辉：菲林斯触发的月感电反应造成的伤害提升20%。",
      effect: [
        {
          type: BuffType.MoonElectroPrcent,
          getValue: () => 20,
        },
      ],
      enable: true,
      target: BuffTarget.Self,
    },
    {
      label: "幽焰的呢喃",
      describe: "菲林斯的元素精通提升，提升值相当于菲林斯的攻击力的8%。通过这种方式，至多使菲林斯的元素精通提升160点。",
      effect: [
        {
          type: BuffType.MysteryFixed,
          getValue: (data) => Math.min(160, (data.baseATK + data.extraATK) * 0.08),
          transform: true,
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: true,
      target: BuffTarget.Self,
      condition: ({ constellation }) => constellation < 4,
    },
    {
      label: "幽焰的呢喃",
      describe:
        "菲林斯的元素精通提升，提升值相当于菲林斯的攻击力的10%。通过这种方式，至多使菲林斯的元素精通提升220点。",
      effect: [
        {
          type: BuffType.MysteryFixed,
          getValue: (data) => Math.min(220, (data.baseATK + data.extraATK) * 0.1),
          transform: true,
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: true,
      target: BuffTarget.Self,
      condition: ({ constellation }) => constellation >= 4,
    },
    {
      label: "月兆祝赐·旧世潜藏",
      describe:
        "队伍中的角色触发感电反应时，将转为触发月感电反应，且基于菲林斯的攻击力，提升月感电反应的基础伤害：每100点攻击力都将提升0.7%基础伤害，至多通过这种方式提升14%伤害。",
      effect: [
        {
          type: BuffType.MoonElectroRate,
          getValue: (data) => Math.min(14, ((data.baseATK + data.extraATK + data.extraATK_NT) / 100) * 0.7),
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
      target: BuffTarget.All,
      shareable: true,
    },
    {
      label: "2命·渡越魍魉之墙",
      describe:
        "月兆·满辉：菲林斯在场上时，菲林斯的元素类型为雷元素的攻击命中敌人后，该敌人的雷元素抗性降低25%，持续7秒。",
      effect: [
        {
          type: BuffType.EnemyElectroResistance,
          getValue: () => -25,
        },
      ],
      enable: true,
      target: BuffTarget.All,
      shareable: true,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_Q_3,
    {
      label: "4命·荒山嘶啭之夜",
      describe:
        "菲林斯的攻击力提升20%。此外，突破天赋「幽焰的呢喃」获得强化：菲林斯的元素精通提升，提升值相当于菲林斯的攻击力的10%。通过这种方式，至多使菲林斯的元素精通提升220点。",
      effect: [
        {
          type: BuffType.ATKPrcent,
          getValue: () => 20,
        },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_E_5,
    {
      label: "6命·歌与亡者之舞",
      describe: "菲林斯对敌人造成的月感电反应伤害擢升35%。月兆·满辉：队伍中附近的所有角色造成的月感电反应伤害擢升10%。",
      effect: [
        {
          type: BuffType.MoonElectroPromote,
          getValue: (_, s) => (s > 0 ? 45 : 35),
        },
      ],
      enable: true,
      target: BuffTarget.Self,
      stack: 1,
      limit: 1,
      stackable: true,
      stackText: "月兆·满辉",
      stackType: "switch",
      condition: ({ constellation }) => constellation >= 6,
    },
    {
      label: "6命·歌与亡者之舞",
      describe: "月兆·满辉：队伍中附近的所有角色造成的月感电反应伤害擢升10%。",
      effect: [
        {
          type: BuffType.MoonElectroPromote,
          getValue: () => 10,
        },
      ],
      enable: true,
      target: BuffTarget.Other,
      shareable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![菲林斯](https://enka.network/ui/UI_AvatarIcon_Flins.png) */
export const Flins = new FlinsData();
