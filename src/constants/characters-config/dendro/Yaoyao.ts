import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_HP_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000077, "瑶瑶")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Dendro)
@BaseData(Rarity.Four, [12289, 212, 751], 80, [13139, 266, 803])
@Icons("UI_AvatarIcon_Yaoyao")
export class YaoyaoData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["颠扑连环枪", "云台团团降芦菔", "玉颗珊珊月中落"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.510014, 0.551527, 0.59304, 0.652344, 0.693857, 0.7413, 0.806534, 0.871769, 0.937003, 1.008168, 1.079333,
        1.150498, 1.221662, 1.292827, 1.363992,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.474428, 0.513044, 0.55166, 0.606826, 0.645442, 0.689575, 0.750258, 0.81094, 0.871623, 0.937822, 1.004021,
        1.07022, 1.13642, 1.202619, 1.268818,
      ],
    }),
    action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.313771, 0.339311, 0.36485, 0.401335, 0.426874, 0.456063, 0.496196, 0.53633, 0.576463, 0.620245, 0.664027,
        0.707809, 0.751591, 0.795373, 0.839155,
      ],
    }),
    action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.329457, 0.356274, 0.38309, 0.421399, 0.448215, 0.478862, 0.521002, 0.563142, 0.605282, 0.651253, 0.697224,
        0.743195, 0.789165, 0.835136, 0.881107,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.779315, 0.842747, 0.90618, 0.996798, 1.060231, 1.132725, 1.232405, 1.332085, 1.431764, 1.540506, 1.649248,
        1.757989, 1.866731, 1.975472, 2.084214,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        1.1266, 1.2183, 1.31, 1.441, 1.5327, 1.6375, 1.7816, 1.9257, 2.0698, 2.227, 2.3842, 2.5414, 2.6986, 2.8558,
        3.013,
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
    action("白玉萝卜伤害", AttackType.Skill, ElementType.Dendro, {
      atk: [
        0.2992, 0.32164, 0.34408, 0.374, 0.39644, 0.41888, 0.4488, 0.47872, 0.50864, 0.53856, 0.56848, 0.5984, 0.6358,
        0.6732, 0.7106,
      ],
    }),
    action("白玉萝卜治疗量", AttackType.Heal, ElementType.None, {
      hp: [
        0.017143, 0.018429, 0.019714, 0.021428, 0.022714, 0.024, 0.025714, 0.027428, 0.029143, 0.030857, 0.032571,
        0.034286, 0.036428, 0.038571, 0.040714,
      ],
      fixed: [
        165.07991, 181.5902, 199.47635, 218.73834, 239.3762, 261.38992, 284.77948, 309.54492, 335.6862, 363.20334,
        392.09634, 422.3652, 454.00992, 487.0305, 521.42694,
      ],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Dendro, {
      atk: [
        1.1456, 1.23152, 1.31744, 1.432, 1.51792, 1.60384, 1.7184, 1.83296, 1.94752, 2.06208, 2.17664, 2.2912, 2.4344,
        2.5776, 2.7208,
      ],
    }),
    action("桂子仙机白玉萝卜伤害", AttackType.Burst, ElementType.Dendro, {
      atk: [
        0.7216, 0.77572, 0.82984, 0.902, 0.95612, 1.01024, 1.0824, 1.15456, 1.22672, 1.29888, 1.37104, 1.4432, 1.5334,
        1.6236, 1.7138,
      ],
    }),
    action("桂子仙机白玉萝卜治疗量", AttackType.Heal, ElementType.None, {
      hp: [
        0.020168, 0.021681, 0.023193, 0.02521, 0.026723, 0.028235, 0.030252, 0.032269, 0.034286, 0.036303, 0.038319,
        0.040336, 0.042857, 0.045378, 0.047899,
      ],
      fixed: [
        194.21231, 213.63625, 234.67883, 257.3401, 281.62, 307.5186, 335.0358, 364.1717, 394.92627, 427.29947,
        461.29135, 496.9019, 534.1311, 572.97894, 613.4455,
      ],
    }),
  ];
  otherSkill = [
    action("6命·超厉害·大萝卜", AttackType.Skill, ElementType.Dendro, {
      atk: [0.75],
    }),
    action("6命·超厉害·大萝卜治疗量", AttackType.Heal, ElementType.None, {
      hp: [0.075],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_HP_24P,
    {
      label: "1命·妙受琼阁",
      describe: "白玉萝卜炸裂时，处在其影响范围内的当前场上角色获得15%草元素伤害加成",
      effect: [{ type: BuffType.DendroPrcent, getValue: () => 15 }],
      enable: true,
      shareable: true,
      condition: ({ constellation }) => constellation >= 1,
    },
    Constellation_E_3,
    {
      label: "4命·爰爰可亲",
      describe:
        "施放云台团团降芦菔或玉颗珊珊月中落后，基于瑶瑶生命值上限的0.3%，提升瑶瑶的元素精通，至多提升120点元素精通",
      effect: [
        {
          type: BuffType.MysteryFixed,
          getValue: (data) => Math.min(120, (data.baseHP + data.extraHP) * 0.003),
          transform: true,
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: false,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_Q_5,
  ];
}

/** ![nnn](https://enka.network/ui/UI_AvatarIcon_Yaoyao.png) */
export const Yaoyao = new YaoyaoData();
