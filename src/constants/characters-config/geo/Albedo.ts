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
import { Constellation_E_3, Constellation_Q_5, S_80_GEO_28P } from "../buffs";

@EnKaId(10000038, "阿贝多")
@Weapon(WeaponType.Sword)
@Element(ElementType.Geo, SecondElementType.Magus)
@BaseData(Rarity.Five, [13226, 251, 876], 40, [14166, 308, 938])
@Icons("UI_AvatarIcon_Albedo")
export class AlbedoData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["西风剑术·白", "创生法·拟造阳华", "诞生式·大地之潮"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.367392, 0.397296, 0.4272, 0.46992, 0.499824, 0.534, 0.580992, 0.627984, 0.674976, 0.72624, 0.78498, 0.854058,
        0.923136, 0.992215, 1.067573,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.367392, 0.397296, 0.4272, 0.46992, 0.499824, 0.534, 0.580992, 0.627984, 0.674976, 0.72624, 0.78498, 0.854058,
        0.923136, 0.992215, 1.067573,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.474548, 0.513174, 0.5518, 0.60698, 0.645606, 0.68975, 0.750448, 0.811146, 0.871844, 0.93806, 1.013932,
        1.103159, 1.192385, 1.281611, 1.378948,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.49751, 0.538005, 0.5785, 0.63635, 0.676845, 0.723125, 0.78676, 0.850395, 0.91403, 0.98345, 1.062994, 1.156537,
        1.250081, 1.343624, 1.445671,
      ],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.620739, 0.671265, 0.72179, 0.793969, 0.844494, 0.902238, 0.981634, 1.061031, 1.140428, 1.227043, 1.326289,
        1.443003, 1.559716, 1.676429, 1.803753,
      ],
    }),
    action("重击伤害·1", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.473, 0.5115, 0.55, 0.605, 0.6435, 0.6875, 0.748, 0.8085, 0.869, 0.935, 1.010625, 1.09956, 1.188495, 1.27743,
        1.37445,
      ],
    }),
    action("重击伤害·2", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.602, 0.651, 0.7, 0.77, 0.819, 0.875, 0.952, 1.029, 1.106, 1.19, 1.28625, 1.39944, 1.51263, 1.62582, 1.7493,
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
    action("技能伤害", AttackType.Skill, ElementType.Geo, {
      atk: [
        1.304, 1.4018, 1.4996, 1.63, 1.7278, 1.8256, 1.956, 2.0864, 2.2168, 2.3472, 2.4776, 2.608, 2.771, 2.934, 3.097,
      ],
    }),
    action(
      "刹那之花伤害",
      AttackType.Skill,
      ElementType.Geo,
      {
        def: [
          1.336, 1.4362, 1.5364, 1.67, 1.7702, 1.8704, 2.004, 2.1376, 2.2712, 2.4048, 2.5384, 2.672, 2.839, 3.006,
          3.173,
        ],
      },
      "Albedo"
    ),
  ];
  burstSkill = [
    action("爆发伤害", AttackType.Burst, ElementType.Geo, {
      atk: [
        3.672, 3.9474, 4.2228, 4.59, 4.8654, 5.1408, 5.508, 5.8752, 6.2424, 6.6096, 6.9768, 7.344, 7.803, 8.262, 8.721,
      ],
    }),
    action("生灭之花", AttackType.Burst, ElementType.Geo, {
      atk: [0.72, 0.774, 0.828, 0.9, 0.954, 1.008, 1.08, 1.152, 1.224, 1.296, 1.368, 1.44, 1.53, 1.62, 1.71],
    }, 'Albedo'),
  ];
  otherSkill = [
    action("2命·生灭之花", AttackType.Burst, ElementType.Geo, {
      def: [3],
    }, 'Albedo'),
  ];
  buffs: IBuffBase[] = [
    ...S_80_GEO_28P,
    {
      label: "白垩色的威压",
      describe:
        "创生法·拟造阳华的刹那之花对生命值低于50%的敌人造成的伤害提高25%。此外，若场上存在由阿贝多自己创造的瑰银，还会提升本次造成的伤害，提升值相当于阿贝多防御力的240%。",
      effect: [
        { type: BuffType.SkillPrcent, getValue: (_, s) => s * 25, special: "Albedo" },
        {
          type: BuffType.SkillFixed,
          getValue: (data) => (data.baseDEF + data.extraDEF + data.extraDEF_NT) * 2.4,
          special: "Albedo",
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
      stack: 1,
      limit: 1,
      stackable: true,
      stackText: "敌人生命低于50%",
      stackType: "switch",
    },
    {
      label: "瓶中人的天慧",
      describe: "施放诞生式·大地之潮时，使附近的队伍中角色的元素精通提高125点",
      effect: [{ type: BuffType.MysteryFixed, getValue: () => 125 }],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "魔女的前夜礼·白芒之书",
      describe:
        "炼成阳华后的20秒内，基于阿贝多的防御力，提升队伍中附近的角色的普通攻击、重击、下落攻击、元素战技和元素爆发造成的伤害：每1000点防御力都将提升4%伤害，至多通过这种方式提升12%伤害。",
      effect: [
        {
          type: BuffType.NormalPrcent,
          getValue: (data) => Math.max(12, ((data.baseDEF + data.extraDEF + data.extraDEF_NT) / 1000) * 4),
          actionOn: ActionOn.Indirect,
        },
        {
          type: BuffType.StrongPrcent,
          getValue: (data) => Math.max(12, ((data.baseDEF + data.extraDEF + data.extraDEF_NT) / 1000) * 4),
          actionOn: ActionOn.Indirect,
        },
        {
          type: BuffType.FallingPrcent,
          getValue: (data) => Math.max(12, ((data.baseDEF + data.extraDEF + data.extraDEF_NT) / 1000) * 4),
          actionOn: ActionOn.Indirect,
        },
        {
          type: BuffType.SkillPrcent,
          getValue: (data) => Math.max(12, ((data.baseDEF + data.extraDEF + data.extraDEF_NT) / 1000) * 4),
          actionOn: ActionOn.Indirect,
        },
        {
          type: BuffType.BurstPrcent,
          getValue: (data) => Math.max(12, ((data.baseDEF + data.extraDEF + data.extraDEF_NT) / 1000) * 4),
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "魔女的前夜礼·白芒之书·魔导",
      describe:
        "炼成瑰银后的20秒内，基于阿贝多的防御力，提升队伍中附近的魔导角色的普通攻击、重击、下落攻击、元素战技和元素爆发造成的伤害：每1000点防御力都将提升10%伤害，至多通过这种方式提升30%伤害。",
      effect: [
        {
          type: BuffType.NormalPrcent,
          getValue: (data) => Math.max(30, ((data.baseDEF + data.extraDEF + data.extraDEF_NT) / 1000) * 10),
          actionOn: ActionOn.Indirect,
        },
        {
          type: BuffType.StrongPrcent,
          getValue: (data) => Math.max(30, ((data.baseDEF + data.extraDEF + data.extraDEF_NT) / 1000) * 10),
          actionOn: ActionOn.Indirect,
        },
        {
          type: BuffType.FallingPrcent,
          getValue: (data) => Math.max(30, ((data.baseDEF + data.extraDEF + data.extraDEF_NT) / 1000) * 10),
          actionOn: ActionOn.Indirect,
        },
        {
          type: BuffType.SkillPrcent,
          getValue: (data) => Math.max(30, ((data.baseDEF + data.extraDEF + data.extraDEF_NT) / 1000) * 10),
          actionOn: ActionOn.Indirect,
        },
        {
          type: BuffType.BurstPrcent,
          getValue: (data) => Math.max(30, ((data.baseDEF + data.extraDEF + data.extraDEF_NT) / 1000) * 10),
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
      shareCondition: ({ secondElement }) => secondElement === SecondElementType.Magus,
    },
    {
      label: "1命·伊甸之花",
      describe: "阿贝多施放元素战技创生法·拟造阳华后的20秒内，自身的防御力提升50%。",
      effect: [{ type: BuffType.DEFPrcent, getValue: () => 50 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 1,
    },
    {
      label: "2命·显生之宙",
      describe:
        "创生法·拟造阳华的刹那之花绽放时，会为阿贝多赋予生灭计数效果，每消耗一层生灭计数，诞生式·大地之潮与生灭之花会提高等同于阿贝多防御力的30%的伤害",
      effect: [
        {
          type: BuffType.BurstFixed,
          getValue: (data, s) => (data.baseDEF + data.extraDEF + data.extraDEF_NT) * 0.3 * s,
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
      stackable: true,
      stack: 4,
      limit: 4,
      condition: ({ constellation }) => constellation >= 2,
      stackText: "生灭计数",
    },
    Constellation_E_3,
    {
      label: "4命·神性之陨",
      describe:
        "处于阳华的领域中的队伍中当前场上角色，造成的下落攻击伤害提高30%。此外，队伍中附近的当前场上角色在瑰银附近跳跃时，将会摧毁瑰银，使该角色的下落攻击坠地冲击造成的伤害提升30%。",
      effect: [
        { type: BuffType.FallingPrcent, getValue: () => 30 },
        { type: BuffType.FallingGroundPrcent, getValue: (_, s) => 30 * s },
      ],
      enable: true,
      shareable: true,
      stack: 1,
      limit: 1,
      stackable: true,
      stackText: "存在瑰银",
      stackType: "switch",
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_Q_5,
    {
      label: "6命·无垢之土",
      describe: "处在阳华的领域中的队伍中当前场上角色，若处于结晶反应产生的护盾庇护下，造成的伤害提高17%。",
      effect: [{ type: BuffType.GlobalPrcent, getValue: () => 17 }],
      enable: false,
      shareable: true,
      target: BuffTarget.Other,
      condition: ({ constellation }) => constellation >= 6,
    },
    {
      label: "6命·无垢之土",
      describe:
        "处在阳华的领域中的队伍中当前场上角色，若处于结晶反应产生的护盾庇护下，造成的伤害提高17%。此外，施放元素爆发诞生式·大地之潮后的20s内，使生灭之花造成的伤害提升，提升值相当于阿贝多防御力的250%。",
      effect: [
        { type: BuffType.GlobalPrcent, getValue: (_, s) => 17 * s },
        {
          type: BuffType.BurstFixed,
          getValue: (data) => (data.baseDEF + data.extraDEF + data.extraDEF_NT) * 2.5,
          actionOn: ActionOn.External,
          special: "Albedo",
        },
      ],
      enable: true,
      stack: 1,
      limit: 1,
      stackable: true,
      stackText: "结晶盾庇护",
      stackType: "switch",
      target: BuffTarget.Self,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![阿贝多](https://enka.network/ui/UI_AvatarIcon_Albedo.png) */
export const Albedo = new AlbedoData();
