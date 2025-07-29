import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_HP_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000090, "夏沃蕾")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Pyro)
@BaseData(Rarity.Four, 11962, 193, 605, 60)
@Icons("UI_AvatarIcon_Chevreuse")
export class ChevreuseData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["线列枪刺·改", "近迫式急促拦射", "圆阵掷弹爆轰术"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.531, 0.575, 0.618, 0.68, 0.723, 0.772, 0.84, 0.908, 0.976, 1.05, 1.124],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.493, 0.533, 0.573, 0.631, 0.671, 0.717, 0.78, 0.843, 0.906, 0.975, 1.044],
    }),
    action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.276, 0.299, 0.322, 0.354, 0.376, 0.402, 0.437, 0.473, 0.508, 0.547, 0.585],
    }),
    action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.325, 0.351, 0.377, 0.415, 0.442, 0.472, 0.513, 0.555, 0.596, 0.642, 0.687],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.773, 0.836, 0.898, 0.988, 1.051, 1.123, 1.222, 1.321, 1.42, 1.527, 1.635],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [1.217, 1.316, 1.415, 1.557, 1.656, 1.769, 1.924, 2.08, 2.236, 2.406, 2.575],
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
      atk: [1.152, 1.238, 1.325, 1.44, 1.526, 1.613, 1.728, 1.843, 1.958, 2.074, 2.189, 2.304, 2.448],
    }),
    action("长按伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [1.728, 1.858, 1.987, 2.16, 2.29, 2.419, 2.592, 2.765, 2.938, 3.11, 3.283, 3.456, 3.672],
    }),
    action("「超量装药弹头」伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [2.824, 3.036, 3.248, 3.53, 3.742, 3.954, 4.236, 4.518, 4.801, 5.083, 5.366, 5.648, 6.001],
    }),
    action("流涌之刃伤害", AttackType.Other, ElementType.Pyro, {
      atk: [0.288, 0.31, 0.331, 0.36, 0.382, 0.403, 0.432, 0.461, 0.49, 0.518, 0.547, 0.576, 0.612],
    }),
    action("持续治疗量", AttackType.Heal, ElementType.None, {
      hp: [0.0267, 0.0287, 0.0307, 0.0333, 0.0353, 0.0373, 0.04, 0.0427, 0.0453, 0.048, 0.0507, 0.0533, 0.0567],
      fixed: [257, 282, 310, 340, 372, 407, 443, 482, 522, 565, 610, 657, 706],
    }),
  ];
  burstSkill = [
    action("爆轰榴弹伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [3.682, 3.958, 4.234, 4.602, 4.878, 5.154, 5.522, 5.891, 6.259, 6.627, 6.995, 7.363, 7.823],
    }),
    action("二重毁伤弹伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [0.491, 0.528, 0.565, 0.614, 0.65, 0.687, 0.736, 0.785, 0.835, 0.884, 0.933, 0.982, 1.043],
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
