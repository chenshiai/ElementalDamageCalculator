import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { Constellation_E_5, Constellation_Q_3, S_80_HP_28P } from "../buffs";

@EnKaId(10000070, "妮露")
@Weapon(WeaponType.Sword)
@Element(ElementType.Hydro)
@BaseData(Rarity.Five, [15185, 230, 729], 70, [16264, 281, 780])
@Icons("UI_AvatarIcon_Nilou")
export class NilouData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["弦月舞步", "七域舞步", "浮莲舞步·远梦聆泉"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.503, 0.544, 0.585, 0.644, 0.684, 0.731, 0.796, 0.86, 0.924, 0.994, 1.065],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.454, 0.491, 0.528, 0.581, 0.618, 0.66, 0.719, 0.777, 0.835, 0.898, 0.962],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.704, 0.761, 0.818, 0.9, 0.957, 1.023, 1.113, 1.203, 1.293, 1.391, 1.489],
    }),
    action("重击伤害·1", AttackType.Strong, ElementType.Physical, {
      atk: [0.502, 0.543, 0.584, 0.642, 0.683, 0.73, 0.794, 0.859, 0.923, 0.993, 1.063],
    }),
    action("重击伤害·2", AttackType.Strong, ElementType.Physical, {
      atk: [0.544, 0.589, 0.633, 0.696, 0.741, 0.791, 0.861, 0.931, 1, 1.076, 1.152],
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
    action("技能伤害", AttackType.Skill, ElementType.Hydro, {
      hp: [0.0334, 0.0359, 0.0384, 0.0417, 0.0442, 0.0467, 0.0501, 0.0534, 0.0568, 0.0601, 0.0634, 0.0668, 0.071],
    }),
    action("剑舞步一段伤害", AttackType.Skill, ElementType.Hydro, {
      hp: [0.0455, 0.0489, 0.0524, 0.0569, 0.0603, 0.0637, 0.0683, 0.0728, 0.0774, 0.0819, 0.0865, 0.091, 0.0967],
    }),
    action("剑舞步二段伤害", AttackType.Skill, ElementType.Hydro, {
      hp: [0.0514, 0.0553, 0.0592, 0.0643, 0.0682, 0.072, 0.0772, 0.0823, 0.0875, 0.0926, 0.0977, 0.1029, 0.1093],
    }),
    action(
      "水月伤害",
      AttackType.Skill,
      ElementType.Hydro,
      {
        hp: [0.0717, 0.0771, 0.0824, 0.0896, 0.095, 0.1004, 0.1075, 0.1147, 0.1219, 0.129, 0.1362, 0.1434, 0.1523],
      },
      "nilou"
    ),
    action("旋舞步一段伤害", AttackType.Skill, ElementType.Hydro, {
      hp: [0.0326, 0.0351, 0.0375, 0.0408, 0.042, 0.0457, 0.0489, 0.0522, 0.0555, 0.0587, 0.062, 0.0652, 0.0693],
    }),
    action("旋舞步二段伤害", AttackType.Skill, ElementType.Hydro, {
      hp: [0.0396, 0.0426, 0.0455, 0.0495, 0.0525, 0.0554, 0.0594, 0.0634, 0.0673, 0.0713, 0.0752, 0.0792, 0.0842],
    }),
    action("水轮伤害", AttackType.Skill, ElementType.Hydro, {
      hp: [0.0506, 0.0544, 0.0582, 0.0633, 0.0671, 0.0709, 0.0759, 0.081, 0.086, 0.0911, 0.0962, 0.1012, 0.1076],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Hydro, {
      hp: [0.184, 0.198, 0.212, 0.23, 0.244, 0.258, 0.277, 0.295, 0.313, 0.332, 0.35, 0.369, 0.392],
    }),
    action("永世流沔伤害", AttackType.Burst, ElementType.Hydro, {
      hp: [0.225, 0.242, 0.259, 0.282, 0.299, 0.315, 0.338, 0.36, 0.383, 0.406, 0.428, 0.451, 0.479],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_HP_28P,
    {
      label: "折旋落英之庭",
      describe: "处于金杯的丰馈状态下的角色受到草元素攻击会使附近的所有角色元素精通提升100点",
      effect: [
        {
          type: BuffType.MysteryFixed,
          getValue: () => 100,
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "1命·却月的轻舞",
      describe: "水月造成的伤害提升65%",
      effect: [
        {
          type: BuffType.SkillPrcent,
          getValue: () => 65,
          special: "nilou",
        },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 1,
    },
    {
      label: "2命·星天的花雨",
      describe:
        "处于「金杯的丰馈」状态下的角色对敌人造成水元素伤害后，该敌人的水元素抗性降低35%，触发绽放反应对敌人造成伤害后，该敌人的草元素抗性降低35%",
      effect: [
        {
          type: BuffType.EnemyHydroResistance,
          getValue: () => -35,
        },
        {
          type: BuffType.EnemyDendroResistance,
          getValue: () => -35,
        },
      ],
      enable: true,
      target: BuffTarget.Enemy,
      shareable: true,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_Q_3,
    {
      label: "4命·挽漪的节音",
      describe: "七域舞步的翩转状态下的第三段舞步命中敌人后，使妮露的浮莲舞步·远梦聆泉造成的伤害提升50%",
      effect: [
        {
          type: BuffType.BurstPrcent,
          getValue: () => 50,
        },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_E_5,
    {
      label: "6命·断霜的弦歌",
      describe:
        "每1000点生命值上限，将使妮露的暴击率提升0.6%，暴击伤害提升1.2%。通过这种方式，妮露的暴击率至多提升30%，暴击伤害至多提升60%",
      effect: [
        {
          type: BuffType.Critcal,
          getValue: (data) => Math.min(30, (data.baseHP + data.extraHP) * 0.6),
        },
        {
          type: BuffType.CritcalHurt,
          getValue: (data) => Math.min(60, (data.baseHP + data.extraHP) * 1.2),
        },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![妮露](https://enka.network/ui/UI_AvatarIcon_Nilou.png) */
export const Nilou = new NilouData();
