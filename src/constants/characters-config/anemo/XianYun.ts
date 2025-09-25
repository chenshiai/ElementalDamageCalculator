import Character from "../character-class";
import { ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Constellation_E_5, Constellation_Q_3, S_80_ATK_28P } from "../buffs";

import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000093, "闲云")
@Weapon(WeaponType.Magic)
@Element(ElementType.Anemo)
@BaseData(Rarity.Five, [10409, 335, 573], 70, [11149, 410, 613])
@Icons("UI_AvatarIcon_Liuyun")
export class LiuyunData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["清风散花词", "朝起鹤云", "暮集竹星"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [
        0.403024, 0.433251, 0.463478, 0.50378, 0.534007, 0.564234, 0.604536, 0.644838, 0.685141, 0.725443, 0.765746,
        0.806048, 0.856426, 0.906804, 0.957182,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [
        0.388552, 0.417693, 0.446835, 0.48569, 0.514831, 0.543973, 0.582828, 0.621683, 0.660538, 0.699394, 0.738249,
        0.777104, 0.825673, 0.874242, 0.922811,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [
        0.488776, 0.525434, 0.562092, 0.61097, 0.647628, 0.684286, 0.733164, 0.782042, 0.830919, 0.879797, 0.928674,
        0.977552, 1.038649, 1.099746, 1.160843,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [
        0.649168, 0.697856, 0.746543, 0.81146, 0.860148, 0.908835, 0.973752, 1.038669, 1.103586, 1.168502, 1.233419,
        1.298336, 1.379482, 1.460628, 1.541774,
      ],
    }),
    action("重击", AttackType.Strong, ElementType.Anemo, {
      atk: [
        1.2312, 1.32354, 1.41588, 1.539, 1.63134, 1.72368, 1.8468, 1.96992, 2.09304, 2.21616, 2.33928, 2.4624, 2.6163,
        2.7702, 2.9241,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Anemo, {
      atk: [
        0.568288, 0.614544, 0.6608, 0.72688, 0.773136, 0.826, 0.898688, 0.971376, 1.044064, 1.12336, 1.202656, 1.281952,
        1.361248, 1.440544, 1.51984,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Anemo, {
      atk: [
        1.136335, 1.228828, 1.32132, 1.453452, 1.545944, 1.65165, 1.796995, 1.94234, 2.087686, 2.246244, 2.404802,
        2.563361, 2.721919, 2.880478, 3.039036,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Anemo, {
      atk: [
        1.419344, 1.534872, 1.6504, 1.81544, 1.930968, 2.063, 2.244544, 2.426088, 2.607632, 2.80568, 3.003728, 3.201776,
        3.399824, 3.597872, 3.79592,
      ],
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [
        0.248, 0.2666, 0.2852, 0.31, 0.3286, 0.3472, 0.372, 0.3968, 0.4216, 0.4464, 0.4712, 0.496, 0.527, 0.558, 0.589,
      ],
    }),
    action(
      "闲云冲击波伤害·一阶",
      AttackType.Falling,
      ElementType.Anemo,
      {
        atk: [1.16, 1.247, 1.334, 1.45, 1.537, 1.624, 1.74, 1.856, 1.972, 2.088, 2.204, 2.32, 2.465, 2.61, 2.755],
      },
      "Liuyun"
    ),
    action(
      "闲云冲击波伤害·二阶",
      AttackType.Falling,
      ElementType.Anemo,
      {
        atk: [1.48, 1.591, 1.702, 1.85, 1.961, 2.072, 2.22, 2.368, 2.516, 2.664, 2.812, 2.96, 3.145, 3.33, 3.515],
      },
      "Liuyun"
    ),
    action(
      "闲云冲击波伤害·三阶",
      AttackType.Falling,
      ElementType.Anemo,
      {
        atk: [
          3.376, 3.6292, 3.8824, 4.22, 4.4732, 4.7264, 5.064, 5.4016, 5.7392, 6.0768, 6.4144, 6.752, 7.174, 7.596,
          8.018,
        ],
      },
      "Liuyun"
    ),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [1.08, 1.161, 1.242, 1.35, 1.431, 1.512, 1.62, 1.728, 1.836, 1.944, 2.052, 2.16, 2.295, 2.43, 2.565],
    }),
    action("竹星伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [
        0.392, 0.4214, 0.4508, 0.49, 0.5194, 0.5488, 0.588, 0.6272, 0.6664, 0.7056, 0.7448, 0.784, 0.833, 0.882, 0.931,
      ],
    }),
    action("治疗量", AttackType.Heal, ElementType.None, {
      atk: [0.922, 0.991, 1.06, 1.152, 1.221, 1.29, 1.382, 1.475, 156.7, 1.659, 1.751, 1.843, 1.958],
      fixed: [577, 636, 698, 766, 838, 915, 997, 1083, 1175, 1271, 1372, 1478, 1589],
    }),
    action("持续治疗量", AttackType.Heal, ElementType.None, {
      atk: [0.43, 0.462, 0.495, 0.538, 0.57, 0.602, 0.645, 0.688, 0.731, 0.774, 0.817, 0.86, 0.914],
      fixed: [269, 297, 326, 357, 391, 427, 465, 506, 548, 593, 640, 690, 742],
    }),
  ];
  otherSkill = [
    action("4命·1次步天梯治疗量", AttackType.Heal, ElementType.None, {
      atk: [0.5],
    }),
    action("4命·2次步天梯治疗量", AttackType.Heal, ElementType.None, {
      atk: [0.8],
    }),
    action("4命·3次步天梯治疗量", AttackType.Heal, ElementType.None, {
      atk: [1.5],
    }),
  ];
  buffs = [
    ...S_80_ATK_28P,
    {
      label: "霜翎高逐祥风势",
      describe:
        "闲云冲击波每命中一个敌人，都将为队伍中附近的所有角色产生一层持续20秒，至多叠加4层的「风翎」效果，使角色的下落攻击的暴击率提升4%/6%/8%/10%",
      effect: [{ type: BuffType.FallingCritcal, getValue: (_, s) => [0, 4, 6, 8, 10][s] }],
      enable: true,
      stack: 4,
      limit: 4,
      stackable: true,
      shareable: true,
      target: BuffTarget.All,
      stackText: "命中敌人数",
    },
    {
      label: "细想应是洞中仙",
      describe:
        "暮集竹星的竹星拥有仙力助推时，附近的当前场上角色的下落攻击坠地冲击造成的伤害提升，提升值相当于闲云的攻击力的200%。通过这种方式，至多使附近的当前场上角色的下落攻击坠地冲击伤害提升9000",
      effect: [
        {
          type: BuffType.FallingFixed,
          getValue: (data) => Math.min(9000, (data.baseATK + data.extraATK + data.extraATK_NT) * 2),
          actionOn: ActionOn.External,
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "2命·鹤唳远人间",
      describe: "施放朝起鹤云的步天梯后，闲云的攻击力提升20%；",
      effect: [{ type: BuffType.ATKPrcent, getValue: () => 20 }],
      enable: false,
      target: BuffTarget.Self,
      condition: ({ constellation }) => constellation >= 2,
    },
    {
      label: "2命·鹤唳远人间",
      describe: "「细想应是洞中仙」的效果翻倍",
      effect: [
        {
          type: BuffType.FallingFixed,
          getValue: (data) => Math.min(9000, (data.baseATK + data.extraATK + data.extraATK_NT) * 2),
          actionOn: ActionOn.External,
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_Q_3,
    Constellation_E_5,
    {
      label: "6命·知是留云僊",
      describe:
        "在一次朝起鹤云的鹤云幻化期间施放了1/2/3次步天梯后，该次鹤云幻化期间的闲云冲击波的暴击伤害提升15%/35%/70%",
      effect: [
        {
          type: BuffType.FallingCritcalHurt,
          getValue: (_, s) => [0, 15, 35, 70][s],
          special: "Liuyun",
        },
      ],
      enable: false,
      stack: 3,
      limit: 3,
      stackable: true,
      stackText: "步天梯次数",
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![闲云](https://enka.network/ui/UI_AvatarIcon_Liuyun.png) */
export const Liuyun = new LiuyunData();
