import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_MYSTERY_96, Constellation_E_5, Constellation_Q_3 } from "../buffs";

@EnKaId(10000053, "早柚")
@Weapon(WeaponType.GreatSword)
@Element(ElementType.Anemo)
@BaseData(Rarity.Four, 11854, 244, 745, 80)
@Icons("UI_AvatarIcon_Sayu")
export class SayuData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["忍刀·终末番", "呜呼流·风隐急进", "呜呼流·影貉缭乱"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.724, 0.782, 0.84, 0.924, 0.983, 1.05, 1.142, 1.235, 1.327, 1.428, 1.544],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.714, 0.772, 0.83, 0.913, 0.971, 1.038, 1.129, 1.22, 1.311, 1.411, 1.525],
    }),
    action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.434, 0.47, 0.505, 0.556, 0.591, 0.631, 0.689, 0.742, 0.798, 0.859, 0.928],
    }),
    action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.434, 0.47, 0.505, 0.556, 0.591, 0.631, 0.689, 0.742, 0.798, 0.859, 0.928],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.983, 1.061, 1.141, 1.255, 1.335, 1.426, 1.552, 1.677, 1.803, 1.94, 2.097],
    }),
    action("重击循环伤害", AttackType.Strong, ElementType.Physical, {
      atk: [0.626, 0.676, 0.727, 0.8, 0.851, 0.909, 0.989, 1.069, 1.149, 1.239, 1.324],
    }),
    action("重击终结伤害", AttackType.Strong, ElementType.Physical, {
      atk: [1.13, 1.22, 1.32, 1.45, 1.54, 1.64, 1.79, 1.93, 2.08, 2.24, 2.39],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.746, 0.807, 0.867, 0.954, 1.015, 1.084, 1.18, 1.275, 1.37, 1.474, 1.579],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.4, 1.61, 1.73, 1.91, 2.03, 2.17, 2.36, 2.55, 2.74, 2.95, 3.16],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.86, 2.02, 2.17, 2.38, 2.53, 2.71, 2.95, 3.18, 3.42, 3.68, 3.94],
    }),
  ];
  elementSkill = [
    action("风风轮伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [0.36, 0.387, 0.414, 0.45, 0.477, 0.504, 0.54, 0.576, 0.612, 0.648, 0.684, 0.72, 0.765],
    }),
    action(
      "点按伤害",
      AttackType.Skill,
      ElementType.Anemo,
      {
        atk: [1.584, 1.703, 1.822, 1.98, 2.099, 2.218, 2.376, 2.534, 2.693, 2.851, 3.01, 3.168, 3.366],
      },
      "sayo"
    ),
    action(
      "长按伤害",
      AttackType.Skill,
      ElementType.Anemo,
      {
        atk: [2.176, 2.339, 2.502, 2.72, 2.883, 3.046, 3.264, 3.482, 3.699, 3.917, 4.134, 4.352, 4.624],
      },
      "sayo"
    ),
    action("附带元素伤害·火", AttackType.Skill, ElementType.Pyro, {
      atk: [0.168, 0.181, 0.193, 0.21, 0.223, 0.235, 0.252, 0.269, 0.286, 0.302, 0.319, 0.336, 0.357],
    }),
    action(
      "长按附带元素伤害·火",
      AttackType.Skill,
      ElementType.Pyro,
      {
        atk: [0.762, 0.819, 0.876, 0.952, 1.009, 1.066, 1.142, 1.219, 1.295, 1.371, 1.447, 1.523, 1.618],
      },
      "sayo"
    ),
    action("附带元素伤害·水", AttackType.Skill, ElementType.Hydro, {
      atk: [0.168, 0.181, 0.193, 0.21, 0.223, 0.235, 0.252, 0.269, 0.286, 0.302, 0.319, 0.336, 0.357],
    }),
    action(
      "长按附带元素伤害·水",
      AttackType.Skill,
      ElementType.Hydro,
      {
        atk: [0.762, 0.819, 0.876, 0.952, 1.009, 1.066, 1.142, 1.219, 1.295, 1.371, 1.447, 1.523, 1.618],
      },
      "sayo"
    ),
    action("附带元素伤害·冰", AttackType.Skill, ElementType.Cryo, {
      atk: [0.168, 0.181, 0.193, 0.21, 0.223, 0.235, 0.252, 0.269, 0.286, 0.302, 0.319, 0.336, 0.357],
    }),
    action(
      "长按附带元素伤害·冰",
      AttackType.Skill,
      ElementType.Cryo,
      {
        atk: [0.762, 0.819, 0.876, 0.952, 1.009, 1.066, 1.142, 1.219, 1.295, 1.371, 1.447, 1.523, 1.618],
      },
      "sayo"
    ),
    action("附带元素伤害·雷", AttackType.Skill, ElementType.Electro, {
      atk: [0.168, 0.181, 0.193, 0.21, 0.223, 0.235, 0.252, 0.269, 0.286, 0.302, 0.319, 0.336, 0.357],
    }),
    action(
      "长按附带元素伤害·雷",
      AttackType.Skill,
      ElementType.Electro,
      {
        atk: [0.762, 0.819, 0.876, 0.952, 1.009, 1.066, 1.142, 1.219, 1.295, 1.371, 1.447, 1.523, 1.618],
      },
      "sayo"
    ),
  ];
  burstSkill = [
    action("技能发动伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [1.17, 1.26, 1.34, 1.46, 1.55, 1.64, 1.75, 1.87, 1.99, 2.1, 2.22, 2.34, 2.48, 2.63],
    }),
    action("不倒貉貉伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [0.52, 0.56, 0.6, 0.65, 0.69, 0.73, 0.78, 0.83, 0.88, 0.94, 0.99, 1.04, 1.11, 1.17],
    }),
    action("技能发动治疗量", AttackType.Heal, ElementType.None, {
      atk: [0.922, 0.991, 1.06, 1.152, 1.221, 1.29, 1.382, 1.475, 1.567, 1.659, 1.751, 1.843, 1.958, 2.074],
      fixed: [577, 635, 698, 765, 837, 914, 996, 1083, 1174, 1270, 1371, 1477, 1588, 1703],
    }),
    action("不倒貉貉治疗量", AttackType.Heal, ElementType.None, {
      atk: [0.799, 0.859, 0.919, 0.998, 1.058, 1.118, 1.198, 1.278, 1.358, 1.438, 1.518, 1.597, 1.697, 1.797],
      fixed: [500, 550, 605, 663, 726, 792, 863, 938, 1017, 1101, 1188, 1280, 1376, 1476],
    }),
  ];
  otherSkill = [
    action("更加合适的人选", AttackType.Heal, ElementType.None, {
      em: [1.2],
      fixed: [300],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_MYSTERY_96,
    {
      label: "2命·理清逃跑路线",
      describe: `点按施放时，风风轮舞踢造成的伤害提高3.3%。处于长按施放后的风风轮状态下时，每0.5秒，就会使这次施展的风风轮舞造成的伤害提高3.3%。通过这种方式，风风轮舞踢造成的伤害至多可以提高66%。`,
      effect: [{ type: BuffType.SkillPrcent, getValue: (_, s) => 3.3 * s, special: "sayo" }],
      condition: ({ constellation }) => constellation >= 2,
      enable: true,
      stack: 0,
      stackable: true,
      limit: 20,
    },
    Constellation_Q_3,
    Constellation_E_5,
    {
      label: "6命·呼呼大睡时间",
      describe: "早柚每点元素精通能使不倒貉貉的攻击额外造成0.2%攻击力的伤害。通过这种方式至多额外造成400%攻击力的伤害",
      condition: ({ constellation }) => constellation >= 6,
      enable: true,
      effect: [
        {
          type: BuffType.BurstFixed,
          getValue: (data) => {
            return (
              ((data.baseATK + data.extraATK + data.extraATK_NT) *
                Math.min(400, data.elementalMystery + data.elementalMystery_NT * 0.2)) /
              100
            );
          },
          actionOn: ActionOn.External,
        },
      ],
    },
  ];
}

/** ![早柚](https://enka.network/ui/UI_AvatarIcon_Sayu.png) */
export const Sayu = new SayuData();
