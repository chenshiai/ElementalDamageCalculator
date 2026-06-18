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
  WeaponType,
} from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { Constellation_Q_5, Constellation_E_3, S_80_CRITALHUNT_38P } from "../buffs";

@EnKaId(10000129, "洛恩")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Cryo)
@BaseData(Rarity.Five, [12858, 344, 784], 60, [13772, 422, 840])
@Icons("UI_AvatarIcon_Lohen")
export class LohenData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["西风枪术·破誓", "奇兵诡出", "裁罚遂成"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.5399, 0.5839, 0.6278, 0.6906, 0.7345, 0.7848, 0.8538, 0.9229, 0.9919, 1.0673, 1.1426, 1.218, 1.2933, 1.3686,
        1.444,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.5644, 0.6104, 0.6563, 0.7219, 0.7679, 0.8204, 0.8926, 0.9648, 1.037, 1.1157, 1.1945, 1.2732, 1.352, 1.4308,
        1.5095,
      ],
    }),
    action("三段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.2542, 0.2749, 0.2956, 0.3251, 0.3458, 0.3695, 0.402, 0.4345, 0.467, 0.5025, 0.538, 0.5734, 0.6089, 0.6444,
        0.6798,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.7523, 0.8135, 0.8747, 0.9622, 1.0234, 1.0934, 1.1896, 1.2858, 1.3821, 1.487, 1.592, 1.697, 1.8019, 1.9069,
        2.0119,
      ],
    }),
    action("五段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.3686, 0.3986, 0.4286, 0.4714, 0.5014, 0.5357, 0.5829, 0.63, 0.6772, 0.7286, 0.78, 0.8314, 0.8829, 0.9343,
        0.9857,
      ],
    }),
    action("五段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.5529, 0.5979, 0.6429, 0.7072, 0.7522, 0.8036, 0.8743, 0.945, 1.0157, 1.0929, 1.17, 1.2472, 1.3243, 1.4015,
        1.4786,
      ],
    }),
    action("重击伤害·单次", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.6588, 0.7124, 0.766, 0.8426, 0.8962, 0.9575, 1.0418, 1.126, 1.2103, 1.3022, 1.3941, 1.486, 1.578, 1.6699,
        1.7618,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        0.6393, 0.6914, 0.7434, 0.8177, 0.8698, 0.9293, 1.011, 1.0928, 1.1746, 1.2638, 1.353, 1.4422, 1.5314, 1.6206,
        1.7098,
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
    action("一段伤害", AttackType.Normal, ElementType.Cryo, {
      atk: [
        0.8099, 0.8758, 0.9417, 1.0359, 1.1018, 1.1771, 1.2807, 1.3843, 1.4879, 1.6009, 1.7139, 1.8269, 1.9399, 2.0529,
        2.1659,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Cryo, {
      atk: [
        0.8466, 0.9156, 0.9845, 1.0829, 1.1518, 1.2306, 1.3389, 1.4472, 1.5555, 1.6736, 1.7917, 1.9099, 2.028, 2.1461,
        2.2643,
      ],
    }),
    action("三段伤害·单次", AttackType.Normal, ElementType.Cryo, {
      atk: [
        0.3813, 0.4123, 0.4434, 0.4877, 0.5187, 0.5542, 0.603, 0.6518, 0.7005, 0.7537, 0.8069, 0.8601, 0.9133, 0.9665,
        1.0198,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Cryo, {
      atk: [
        1.1284, 1.2202, 1.3121, 1.4433, 1.5351, 1.6401, 1.7844, 1.9288, 2.0731, 2.2305, 2.388, 2.5454, 2.7029, 2.8603,
        3.0178,
      ],
    }),
    action("五段伤害·1", AttackType.Normal, ElementType.Cryo, {
      atk: [
        0.5529, 0.5979, 0.6429, 0.7072, 0.7522, 0.8036, 0.8743, 0.945, 1.0157, 1.0929, 1.17, 1.2472, 1.3243, 1.4015,
        1.4786,
      ],
    }),
    action("五段伤害·2", AttackType.Normal, ElementType.Cryo, {
      atk: [
        0.8293, 0.8968, 0.9643, 1.0607, 1.1282, 1.2054, 1.3115, 1.4175, 1.5236, 1.6393, 1.755, 1.8708, 1.9865, 2.1022,
        2.2179,
      ],
    }),
    action("重击伤害·单次", AttackType.Strong, ElementType.Cryo, {
      atk: [
        0.9881, 1.0686, 1.149, 1.2639, 1.3443, 1.4362, 1.5626, 1.689, 1.8154, 1.9533, 2.0912, 2.2291, 2.3669, 2.5048,
        2.6427,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Cryo, {
      atk: [
        0.6393, 0.6914, 0.7434, 0.8177, 0.8698, 0.9293, 1.011, 1.0928, 1.1746, 1.2638, 1.353, 1.4422, 1.5314, 1.6206,
        1.7098,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Cryo, {
      atk: [
        1.278377, 1.382431, 1.486485, 1.635134, 1.739187, 1.858106, 2.02162, 2.185133, 2.348646, 2.527025, 2.705403,
        2.883781, 3.062159, 3.240537, 3.418915,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Cryo, {
      atk: [
        1.596762, 1.726731, 1.8567, 2.04237, 2.172339, 2.320875, 2.525112, 2.729349, 2.933586, 3.15639, 3.379194,
        3.601998, 3.824802, 4.047606, 4.27041,
      ],
    }),
    action("镂骨彻心伤害·单次", AttackType.Skill, ElementType.Cryo, {
      atk: [0.6, 0.645, 0.69, 0.75, 0.795, 0.84, 0.9, 0.96, 1.02, 1.08, 1.14, 1.2, 1.275, 1.35, 1.425],
    }),
  ];
  burstSkill = [
    action("技能伤害·单次", AttackType.Burst, ElementType.Cryo, {
      atk: [
        1.188, 1.2771, 1.3662, 1.485, 1.5741, 1.6632, 1.782, 1.9008, 2.0196, 2.1384, 2.2572, 2.376, 2.5245, 2.673,
        2.8215,
      ],
    }),
  ];
  otherSkill = [
    action("2命·破邪之刃伤害", AttackType.Other, ElementType.Cryo, {
      atk: [5],
    }),
  ];
  buffs: IBuffBase[] = [
    ...S_80_CRITALHUNT_38P,
    {
      label: "争胜",
      describe: "并依据消耗的争胜，提升元素战技与元素爆发的伤害",
      effect: [
        { type: BuffType.SkillRate, getValue: (_, s) => s * 0.4 },
        { type: BuffType.BurstRate, getValue: (_, s) => s * 0.4 },
      ],
      enable: false,
      stackable: true,
      stackText: "层数",
      stack: 100,
      limit: 100,
      condition: ({ constellation }) => constellation < 1,
    },
    {
      label: "争胜",
      describe: "并依据消耗的争胜，提升元素战技与元素爆发的伤害",
      effect: [
        { type: BuffType.SkillRate, getValue: (_, s) => s * 0.4 },
        { type: BuffType.BurstRate, getValue: (_, s) => s * 0.4 },
      ],
      enable: false,
      stackable: true,
      stackText: "层数",
      stack: 300,
      limit: 300,
      condition: ({ constellation }) => constellation >= 1,
    },
    {
      label: "戏言的杰作",
      describe:
        "在奇谋状态下，队伍中附近的其他角色对敌人触发冰元素相关反应后的8秒内，该角色的攻击力提升15%，洛恩的攻击力提升15%",
      effect: [{ type: BuffType.ATKPrcent, getValue: () => 15 }],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "兴尽且去来",
      describe: "施放元素战技奇兵诡出后，洛恩还会获得9秒的「乘兴」效果：持续期间，元素战技奇兵诡出的技能等级提高1级",
      effect: [{ type: BuffType.SkillLevel, getValue: () => 1, actionOn: ActionOn.Front }],
      enable: true,
    },
    {
      label: "魔女的前夜礼·不愈之刺",
      describe: "若争胜至少为上限的50%，则洛恩的普通攻击与重击造成的伤害提升40%",
      effect: [
        { type: BuffType.NormalPrcent, getValue: () => 40 },
        { type: BuffType.StrongPrcent, getValue: () => 40 },
      ],
      enable: true,
    },
    {
      label: "2命·凡飞翔者，皆为靶标",
      describe: "洛恩将获得「破邪之刃」效果，使队伍中附近的其他角色的元素精通提升200点",
      effect: [{ type: BuffType.MysteryFixed, getValue: () => 200 }],
      enable: false,
      shareable: true,
      target: BuffTarget.Other,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_E_3,
    Constellation_Q_5,
    {
      label: "6命·身沦魂销，唯余欢悦",
      describe: "元素战技、元素爆发的暴击伤害提升175%",
      effect: [
        { type: BuffType.SkillCritcalHurt, getValue: () => 175 },
        { type: BuffType.BurstCritcalHurt, getValue: () => 175 },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![洛恩](https://enka.network/ui/UI_AvatarIcon_Lohen.png) */
export const Lohen = new LohenData();
