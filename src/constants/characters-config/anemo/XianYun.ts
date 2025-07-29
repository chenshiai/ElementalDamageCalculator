import Character from "../character-class";
import { ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Constellation_E_5, Constellation_Q_3, S_80_ATK_28P } from "../buffs";

import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000093, "闲云")
@Weapon(WeaponType.Magic)
@Element(ElementType.Anemo)
@BaseData(Rarity.Five, 10409, 335, 573, 70)
@Icons("UI_AvatarIcon_Liuyun")
export class LiuyunData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["清风散花词", "朝起鹤云", "暮集竹星"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [0.403, 0.433, 0.463, 0.504, 0.534, 0.564, 0.605, 0.645, 0.685, 0.725, 0.766],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [0.389, 0.418, 0.447, 0.486, 0.515, 0.544, 0.583, 0.622, 0.661, 0.699, 0.738],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [0.489, 0.525, 0.562, 0.611, 0.648, 0.684, 0.733, 0.782, 0.831, 0.88, 0.929],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [0.649, 0.698, 0.747, 0.811, 0.86, 0.909, 0.974, 1.039, 1.104, 1.169, 1.233],
    }),
    action("重击", AttackType.Strong, ElementType.Anemo, {
      atk: [1.231, 1.324, 1.416, 1.539, 1.631, 1.724, 1.847, 1.97, 2.093, 2.216, 2.339],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Anemo, {
      atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.2],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Anemo, {
      atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Anemo, {
      atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [0.248, 0.2666, 0.2852, 0.31, 0.3286, 0.3472, 0.372, 0.3968, 0.4216, 0.4464, 0.4712, 0.496, 0.527],
    }),
    action(
      "闲云冲击波伤害·一阶",
      AttackType.Falling,
      ElementType.Anemo,
      {
        atk: [1.16, 1.249, 1.334, 1.45, 1.537, 1.624, 1.74, 1.856, 1.972, 2.088, 2.204, 2.32, 2.465],
      },
      "Liuyun"
    ),
    action(
      "闲云冲击波伤害·二阶",
      AttackType.Falling,
      ElementType.Anemo,
      {
        atk: [1.48, 1.591, 1.702, 1.85, 1.961, 2.072, 2.22, 2.368, 2.516, 2.664, 2.812, 2.96, 3.145],
      },
      "Liuyun"
    ),
    action(
      "闲云冲击波伤害·三阶",
      AttackType.Falling,
      ElementType.Anemo,
      {
        atk: [3.376, 3.629, 3.882, 4.22, 4.473, 4.726, 5.064, 5.402, 5.739, 6.077, 6.414, 6.752, 7.174],
      },
      "Liuyun"
    ),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [1.08, 1.161, 1.242, 1.35, 1.431, 1.512, 1.62, 1.728, 1.836, 1.944, 2.052, 2.16, 2.295],
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
