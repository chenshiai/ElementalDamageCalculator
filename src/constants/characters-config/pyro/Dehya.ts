import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { Constellation_E_5, Constellation_Q_3, S_80_HP_28P } from "../buffs";

@EnKaId(10000079, "迪希雅")
@Weapon(WeaponType.GreatSword)
@Element(ElementType.Pyro)
@BaseData(Rarity.Five, [15678, 266, 628], 70, [16789, 325, 673])
@Icons("UI_AvatarIcon_Dehya")
export class DehyaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["拂金剑斗术", "熔铁流狱", "炎啸狮子咬"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.621178, 0.671739, 0.7223, 0.79453, 0.845091, 0.902875, 0.982328, 1.061781, 1.141234, 1.22791, 1.314586,
        1.401262, 1.487938, 1.574614, 1.66129,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.617102, 0.667331, 0.71756, 0.789316, 0.839545, 0.89695, 0.975882, 1.054813, 1.133745, 1.219852, 1.305959,
        1.392066, 1.478174, 1.564281, 1.650388,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.766312, 0.828686, 0.89106, 0.980166, 1.04254, 1.113825, 1.211842, 1.309858, 1.407875, 1.514802, 1.621729,
        1.728656, 1.835584, 1.942511, 2.049438,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.952914, 1.030477, 1.10804, 1.218844, 1.296407, 1.38505, 1.506934, 1.628819, 1.750703, 1.883668, 2.016633,
        2.149598, 2.282562, 2.415527, 2.548492,
      ],
    }),
    action("重击循环伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.5633, 0.60915, 0.655, 0.7205, 0.76635, 0.81875, 0.8908, 0.96285, 1.0349, 1.1135, 1.1921, 1.2707, 1.3493,
        1.4279, 1.5065,
      ],
    }),
    action("重击终结伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        1.01824, 1.10112, 1.184, 1.3024, 1.38528, 1.48, 1.61024, 1.74048, 1.87072, 2.0128, 2.15488, 2.29696, 2.43904,
        2.58112, 2.7232,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        0.745878, 0.806589, 0.8673, 0.95403, 1.014741, 1.084125, 1.179528, 1.274931, 1.370334, 1.47441, 1.578486,
        1.682562, 1.786638, 1.890714, 1.99479,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.49144, 1.612836, 1.734233, 1.907656, 2.029052, 2.167791, 2.358556, 2.549322, 2.740087, 2.948195, 3.156303,
        3.364411, 3.572519, 3.780627, 3.988735,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.862889, 2.01452, 2.16615, 2.382765, 2.534396, 2.707688, 2.945964, 3.184241, 3.422517, 3.682455, 3.942393,
        4.202331, 4.462269, 4.722207, 4.982145,
      ],
    }),
  ];
  elementSkill = [
    action("净焰昂藏伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [
        1.1288, 1.21346, 1.29812, 1.411, 1.49566, 1.58032, 1.6932, 1.80608, 1.91896, 2.03184, 2.14472, 2.2576, 2.3987,
        2.5398, 2.6809,
      ],
    }),
    action("剑域炽焰伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [
        1.328, 1.4276, 1.5272, 1.66, 1.7596, 1.8592, 1.992, 2.1248, 2.2576, 2.3904, 2.5232, 2.656, 2.822, 2.988, 3.154,
      ],
    }),
    action(
      "领域伤害",
      AttackType.Skill,
      ElementType.Pyro,
      {
        atk: [
          0.602, 0.64715, 0.6923, 0.7525, 0.79765, 0.8428, 0.903, 0.9632, 1.0234, 1.0836, 1.1438, 1.204, 1.27925,
          1.3545, 1.42975,
        ],
        hp: [
          0.01032, 0.011094, 0.011868, 0.0129, 0.013674, 0.014448, 0.01548, 0.016512, 0.017544, 0.018576, 0.019608,
          0.02064, 0.02193, 0.02322, 0.02451,
        ],
      },
      "Dehya"
    ),
  ];
  burstSkill = [
    action("炽鬃拳伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [
        0.987, 1.061025, 1.13505, 1.23375, 1.307775, 1.3818, 1.4805, 1.5792, 1.6779, 1.7766, 1.8753, 1.974, 2.097375,
        2.22075, 2.344125,
      ],
      hp: [
        0.01692, 0.018189, 0.019458, 0.02115, 0.022419, 0.023688, 0.02538, 0.027072, 0.028764, 0.030456, 0.032148,
        0.03384, 0.035955, 0.03807, 0.040185,
      ],
    }),
    action("焚落踢伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [
        1.393, 1.497475, 1.60195, 1.74125, 1.845725, 1.9502, 2.0895, 2.2288, 2.3681, 2.5074, 2.6467, 2.786, 2.960125,
        3.13425, 3.308375,
      ],
      hp: [
        0.02388, 0.025671, 0.027462, 0.02985, 0.031641, 0.033432, 0.03582, 0.038208, 0.040596, 0.042984, 0.045372,
        0.04776, 0.050745, 0.05373, 0.056715,
      ],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_HP_28P,
    {
      label: "1命·皎洁之火铓辉灿漫",
      describe: "迪希雅的生命值上限提升20%；熔铁流狱伤害提高值：生命值上限的3.6%；炎啸狮子咬伤害提高值：生命值上限的6%",
      effect: [
        { type: BuffType.HPPrcent, getValue: () => 20 },
        {
          type: BuffType.SkillFixed,
          getValue: (data) => (data.baseHP + data.extraHP + data.extraHP_NT) * 0.036,
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.BurstFixed,
          getValue: (data) => (data.baseHP + data.extraHP + data.extraHP_NT) * 0.06,
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 1,
    },
    {
      label: "2命·净沙利刃明映万乘",
      describe: "场上存在净焰剑狱领域时，领域内的当前场上角色受到攻击时，将使净焰剑狱下次协同攻击造成的伤害提升50%",
      effect: [{ type: BuffType.SkillPrcent, getValue: () => 50, special: "Dehya" }],
      enable: false,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_Q_3,
    Constellation_E_5,
    {
      label: "6命·燎燃利爪裂帛斫金",
      describe:
        "炎啸狮子咬的暴击率提升10%；炽鬃拳命中敌人并造成暴击后，将使持续期间内炎啸狮子咬的暴击伤害提升15%，至多60%",
      effect: [
        { type: BuffType.BurstCritcal, getValue: () => 10 },
        { type: BuffType.BurstCritcalHurt, getValue: (_, s) => 15 * s },
      ],
      enable: true,
      stack: 4,
      limit: 4,
      stackable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![迪希雅](https://enka.network/ui/UI_AvatarIcon_Dehya.png) */
export const Dehya = new DehyaData();
