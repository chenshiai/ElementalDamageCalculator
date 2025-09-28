import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_HP_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000090, "夏沃蕾")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Pyro)
@BaseData(Rarity.Four, [11962, 193, 605], 60, [12790, 242, 647])
@Icons("UI_AvatarIcon_Chevreuse")
export class ChevreuseData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["线列枪刺·改", "近迫式急促拦射", "圆阵掷弹爆轰术"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.531299, 0.574545, 0.61779, 0.679569, 0.722814, 0.772237, 0.840194, 0.908151, 0.976108, 1.050243, 1.124378,
        1.198513, 1.272647, 1.346782, 1.420917,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.493107, 0.533243, 0.57338, 0.630718, 0.670855, 0.716725, 0.779797, 0.842869, 0.90594, 0.974746, 1.043552,
        1.112357, 1.181163, 1.249968, 1.318774,
      ],
    }),
    action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.276449, 0.298951, 0.321453, 0.353598, 0.3761, 0.401816, 0.437176, 0.472535, 0.507895, 0.546469, 0.585044,
        0.623618, 0.662192, 0.700767, 0.739341,
      ],
    }),
    action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.324527, 0.350942, 0.377357, 0.415093, 0.441508, 0.471697, 0.513206, 0.554715, 0.596225, 0.641508, 0.68679,
        0.732073, 0.777356, 0.822639, 0.867922,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.772615, 0.835503, 0.89839, 0.988229, 1.051116, 1.122988, 1.22181, 1.320633, 1.419456, 1.527263, 1.63507,
        1.742877, 1.850683, 1.95849, 2.066297,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        1.2169, 1.31595, 1.415, 1.5565, 1.65555, 1.76875, 1.9244, 2.08005, 2.2357, 2.4055, 2.5753, 2.7451, 2.9149,
        3.0847, 3.2545,
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
        1.152, 1.2384, 1.3248, 1.44, 1.5264, 1.6128, 1.728, 1.8432, 1.9584, 2.0736, 2.1888, 2.304, 2.448, 2.592, 2.736,
      ],
    }),
    action("长按伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [
        1.728, 1.8576, 1.9872, 2.16, 2.2896, 2.4192, 2.592, 2.7648, 2.9376, 3.1104, 3.2832, 3.456, 3.672, 3.888, 4.104,
      ],
    }),
    action("「超量装药弹头」伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [
        2.824, 3.0358, 3.2476, 3.53, 3.7418, 3.9536, 4.236, 4.5184, 4.8008, 5.0832, 5.3656, 5.648, 6.001, 6.354, 6.707,
      ],
    }),
    action("流涌之刃伤害", AttackType.Other, ElementType.Pyro, {
      atk: [
        0.288, 0.3096, 0.3312, 0.36, 0.3816, 0.4032, 0.432, 0.4608, 0.4896, 0.5184, 0.5472, 0.576, 0.612, 0.648, 0.684,
      ],
    }),
    action("持续治疗量", AttackType.Heal, ElementType.None, {
      hp: [
        0.026667, 0.028667, 0.030667, 0.033333, 0.035333, 0.037333, 0.04, 0.042667, 0.045333, 0.048, 0.050667, 0.053333,
        0.056667, 0.06, 0.063333,
      ],
      fixed: [
        256.79184, 282.47458, 310.29758, 340.26077, 372.36423, 406.60788, 442.9918, 481.51593, 522.1803, 564.98486,
        609.9297, 657.0147, 706.24, 757.6055, 811.11127,
      ],
    }),
  ];
  burstSkill = [
    action("爆轰榴弹伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [
        3.6816, 3.95772, 4.23384, 4.602, 4.87812, 5.15424, 5.5224, 5.89056, 6.25872, 6.62688, 6.99504, 7.3632, 7.8234,
        8.2836, 8.7438,
      ],
    }),
    action("二重毁伤弹伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [
        0.49088, 0.527696, 0.564512, 0.6136, 0.650416, 0.687232, 0.73632, 0.785408, 0.834496, 0.883584, 0.932672,
        0.98176, 1.04312, 1.10448, 1.16584,
      ],
    }),
  ];
  otherSkill = [
    action("2命·连锁殉爆", AttackType.Skill, ElementType.Pyro, {
      atk: [1.2],
    }),
    action("6命·终结罪恶的追缉治疗量", AttackType.Heal, ElementType.None, {
      hp: [0.1],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_HP_24P,
    {
      label: "尖兵协同战法",
      describe: `队伍中所有角色的元素类型均为火元素与雷元素，并且至少有一名火元素角色、一名雷元素角色时；
        夏沃蕾将为队伍中附近的角色施加「协同战法」：角色触发超载反应后，受本次反应影响的敌人的火元素与雷元素抗性降低40%，持续6秒。
        当队伍中角色的元素类型不满足本固有天赋的条件时，将移除已有的协同战法效果`,
      effect: [
        { type: BuffType.EnemyElectroResistance, getValue: () => -40 },
        { type: BuffType.EnemyPyroResistance, getValue: () => -40 },
      ],
      enable: true,
      shareable: true,
      target: BuffTarget.Enemy,
    },
    {
      label: "纵阵武力统筹",
      describe: `夏沃蕾发射近迫式急促拦射的「超量装药弹头」后，基于夏沃蕾的生命值上限，每1000点生命值上限都将使队伍中附近的所有火元素与雷元素角色的攻击力提升1%，持续30秒，至多通过这种方式提升40%的攻击力`,
      effect: [
        {
          type: BuffType.ATKPrcent,
          getValue: (data) => Math.min(40, (data.baseHP + data.extraHP + data.extraHP_NT) / 1000),
        },
      ],
      enable: true,
      shareable: true,
      target: BuffTarget.Enemy,
    },
    Constellation_E_3,
    Constellation_Q_5,
    {
      label: "6命·终结罪恶的追缉",
      describe: `队伍中的角色受到近迫式急促拦射的治疗后，获得20%火元素伤害加成与雷元素伤害加成，此效果至多叠加3层`,
      effect: [
        {
          type: BuffType.ElectroPrcent,
          getValue: (_, s) => 20 * s,
        },
        {
          type: BuffType.PyroPrcent,
          getValue: (_, s) => 20 * s,
        },
      ],
      enable: false,
      shareable: true,
      stackable: true,
      stack: 3,
      limit: 3,
      target: BuffTarget.Enemy,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![夏沃蕾](https://enka.network/ui/UI_AvatarIcon_Chevreuse.png) */
export const Chevreuse = new ChevreuseData();
