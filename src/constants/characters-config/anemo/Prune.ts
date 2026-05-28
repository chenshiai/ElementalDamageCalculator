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
import { A_80_ATK_24P, Constellation_Q_3, Constellation_E_5 } from "../buffs";

@EnKaId(10000132, "布伦妮")
@Weapon(WeaponType.Magic)
@Element(ElementType.Anemo, SecondElementType.Magus)
@BaseData(Rarity.Four, [9679, 221, 580], 70, [10348, 277, 620])
@Icons("UI_AvatarIcon_Prune")
export class PruneData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["隆咚咚·破魔之锤", "叮铃铃·猎魔之音", "铃鸣·狩魔之刻"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [
        0.4862, 0.5227, 0.5591, 0.6078, 0.6442, 0.6807, 0.7293, 0.7779, 0.8266, 0.8752, 0.9238, 0.9724, 1.0332, 1.094,
        1.1547,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [
        0.4828, 0.519, 0.5552, 0.6035, 0.6397, 0.6759, 0.7242, 0.7725, 0.8208, 0.8691, 0.9173, 0.9656, 1.026, 1.0863,
        1.1467,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [
        0.6798, 0.7308, 0.7817, 0.8497, 0.9007, 0.9517, 1.0197, 1.0876, 1.1556, 1.2236, 1.2916, 1.3595, 1.4445, 1.5295,
        1.6144,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Anemo, {
      atk: [
        1.3352, 1.4353, 1.5355, 1.669, 1.7691, 1.8693, 2.0028, 2.1363, 2.2698, 2.4034, 2.5369, 2.6704, 2.8373, 3.0042,
        3.1711,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Anemo, {
      atk: [
        0.5683, 0.6145, 0.6608, 0.7269, 0.7731, 0.826, 0.8987, 0.9714, 1.0441, 1.1234, 1.2027, 1.282, 1.3612, 1.4405,
        1.5198,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Anemo, {
      atk: [
        1.1363, 1.2288, 1.3213, 1.4535, 1.5459, 1.6516, 1.797, 1.9423, 2.0877, 2.2462, 2.4048, 2.5634, 2.7219, 2.8805,
        3.039,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Anemo, {
      atk: [
        1.4193, 1.5349, 1.6504, 1.8154, 1.931, 2.063, 2.2445, 2.4261, 2.6076, 2.8057, 3.0037, 3.2018, 3.3998, 3.5979,
        3.7959,
      ],
    }),
  ];
  elementSkill = [
    action("叮铃铃·猎魔之音伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [
        1.6744, 1.8, 1.9256, 2.093, 2.2186, 2.3442, 2.5116, 2.679, 2.8465, 3.0139, 3.1814, 3.3488, 3.5581, 3.7674,
        3.9767,
      ],
    }),
    action("诱巫饵铃伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [
        2.0456, 2.199, 2.3524, 2.557, 2.7104, 2.8638, 3.0684, 3.273, 3.4775, 3.6821, 3.8866, 4.0912, 4.3469, 4.6026,
        4.8583,
      ],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [
        0.9696, 1.0423, 1.115, 1.212, 1.2847, 1.3574, 1.4544, 1.5514, 1.6483, 1.7453, 1.8422, 1.9392, 2.0604, 2.1816,
        2.3028,
      ],
    }),
    action("技能伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [
        0.7044, 0.7572, 0.8101, 0.8805, 0.9333, 0.9862, 1.0566, 1.127, 1.1975, 1.2679, 1.3384, 1.4088, 1.4969, 1.5849,
        1.673,
      ],
    }),
  ];
  otherSkill = [
    action("狩灾誓锤伤害·火", AttackType.Burst, ElementType.Pyro, {
      atk: [1.5],
    }),
    action("狩灾誓锤伤害·水", AttackType.Burst, ElementType.Hydro, {
      atk: [1.5],
    }),
    action("狩灾誓锤伤害·雷", AttackType.Burst, ElementType.Electro, {
      atk: [1.5],
    }),
    action("狩灾誓锤伤害·冰", AttackType.Burst, ElementType.Cryo, {
      atk: [1.5],
    }),
    action("4命·狩灾誓锤伤害·冰", AttackType.Burst, ElementType.Cryo, {
      atk: [0.8],
    }),
    action("4命·狩灾誓锤伤害·水", AttackType.Burst, ElementType.Hydro, {
      atk: [0.8],
    }),
    action("4命·狩灾誓锤伤害·雷", AttackType.Burst, ElementType.Electro, {
      atk: [0.8],
    }),
    action("4命·狩灾誓锤伤害·冰", AttackType.Burst, ElementType.Cryo, {
      atk: [0.8],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_ATK_24P,
    {
      label: "振铃同心",
      describe:
        "基于布伦妮攻击力超过2000的部分，提升攻击造成的伤害：每点攻击力都会使本次攻击造成的伤害提升0.025%，至多提升50%",
      effect: [
        {
          type: BuffType.NormalPrcent,
          getValue: (data) => Math.min(50, Math.max(0, data.baseATK + data.extraATK - 2000) * 0.025),
          actionOn: ActionOn.Indirect,
        },
        {
          type: BuffType.SkillPrcent,
          getValue: (data) => Math.min(50, Math.max(0, data.baseATK + data.extraATK - 2000) * 0.025),
          actionOn: ActionOn.Indirect,
        },
        {
          type: BuffType.StrongPrcent,
          getValue: (data) => Math.min(50, Math.max(0, data.baseATK + data.extraATK - 2000) * 0.025),
          actionOn: ActionOn.Indirect,
        },
        {
          type: BuffType.BurstPrcent,
          getValue: (data) => Math.min(50, Math.max(0, data.baseATK + data.extraATK - 2000) * 0.025),
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: true,
      shareable: true,
      target: BuffTarget.Other,
    },
    {
      label: "魔女的前夜礼·寻魔之誓",
      describe: "魔导·秘仪：队伍中魔导角色对敌人触发任意元素反应后，布伦妮自身的攻击力提高60%",
      effect: [{ type: BuffType.ATKPrcent, getValue: () => 60 }],
      enable: true,
    },
    {
      label: "魔女的前夜礼·寻魔之誓",
      describe: "魔导·秘仪：若该角色触发的元素反应为扩散反应，则其自身的攻击力还将额外提高30%",
      effect: [{ type: BuffType.ATKPrcent, getValue: () => 30 }],
      enable: true,
      shareable: true,
      target: BuffTarget.Other,
    },
    {
      label: "2命·整理杂乱的包袱，元素妙力果然",
      describe:
        "布伦妮的攻击力提升10%；「诱巫饵铃」和经过元素转化的「狩灾誓锤」命中敌人时，还会进一步使攻击力提升5%。通过上述方式，至多使攻击力提升至40%",
      effect: [{ type: BuffType.ATKPrcent, getValue: (_, s) => 10 + s * 5 }],
      enable: true,
      stack: 6,
      limit: 6,
      stackable: true,
      stackText: "寻猎魔女",
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_Q_3,
    Constellation_E_5,
    {
      label: "6命·故事结尾在这儿，念给伙伴听完",
      describe:
        "队伍中处于「振铃鼓舞」效果影响下的角色在对敌人触发任意元素反应后，都会使布伦妮及附近当前场上拥有「振铃鼓舞」效果的其他角色攻击力提升350点",
      effect: [{ type: BuffType.ATKFixed, getValue: () => 350 }],
      enable: true,
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![布伦妮](https://enka.network/ui/UI_AvatarIcon_Prune.png) */
export const Prune = new PruneData();
