import Character from "../character-class";
import { ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Constellation_E_3, Constellation_Q_5, S_80_MYSTERY_115 } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000109, "梦见月瑞希")
@Weapon(WeaponType.Magic)
@Element(ElementType.Anemo)
@BaseData(Rarity.Five, [12736, 215, 757], 60, [13641, 264, 811])
@Icons("UI_AvatarIcon_Mizuki")
export class MizukiData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["梦我梦心", "秋沙歌枕巡礼", "安乐秘汤疗法"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [
        0.522768, 0.561976, 0.601183, 0.65346, 0.692668, 0.731875, 0.784152, 0.836429, 0.888706, 0.940982, 0.993259,
        1.045536, 1.110882, 1.176228, 1.241574,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [
        0.469144, 0.50433, 0.539516, 0.58643, 0.621616, 0.656802, 0.703716, 0.75063, 0.797545, 0.844459, 0.891374,
        0.938288, 0.996931, 1.055574, 1.114217,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [
        0.713688, 0.767215, 0.820741, 0.89211, 0.945637, 0.999163, 1.070532, 1.141901, 1.21327, 1.284638, 1.356007,
        1.427376, 1.516587, 1.605798, 1.695009,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Anemo, {
      atk: [1.3, 1.3975, 1.495, 1.625, 1.7225, 1.82, 1.95, 2.08, 2.21, 2.34, 2.47, 2.6, 2.7625, 2.925, 3.0875],
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
        0.57744, 0.620748, 0.664056, 0.7218, 0.765108, 0.808416, 0.86616, 0.923904, 0.981648, 1.039392, 1.097136,
        1.15488, 1.22706, 1.29924, 1.37142,
      ],
    }),
    action("持续攻击伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [
        0.44912, 0.482804, 0.516488, 0.5614, 0.595084, 0.628768, 0.67368, 0.718592, 0.763504, 0.808416, 0.853328,
        0.89824, 0.95438, 1.01052, 1.06666,
      ],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [
        0.9408, 1.01136, 1.08192, 1.176, 1.24656, 1.31712, 1.4112, 1.50528, 1.59936, 1.69344, 1.78752, 1.8816, 1.9992,
        2.1168, 2.2344,
      ],
    }),
    action("梦念冲击波伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [
        0.7056, 0.75852, 0.81144, 0.882, 0.93492, 0.98784, 1.0584, 1.12896, 1.19952, 1.27008, 1.34064, 1.4112, 1.4994,
        1.5876, 1.6758,
      ],
    }),
    action("拾取点心回复生命值", AttackType.Heal, ElementType.None, {
      em: [
        1.3056, 1.40352, 1.50144, 1.632, 1.72992, 1.82784, 1.9584, 2.08896, 2.21952, 2.35008, 2.48064, 2.6112, 2.7744,
        2.9376, 3.1008,
      ],
      fixed: [
        314.57, 346.03137, 380.11453, 416.81946, 456.14618, 498.09467, 542.6649, 589.857, 639.67084, 692.10645,
        747.1639, 804.843, 865.144, 928.0668, 993.61127,
      ],
    }),
  ];
  otherSkill = [];
  buffs = [
    ...S_80_MYSTERY_115,
    {
      label: "昼想夜梦",
      describe:
        "梦见月瑞希处于梦浮状态下时，队伍中附近的其他角色的元素类型为火元素、水元素、冰元素或雷元素的攻击命中敌人时，梦见月瑞希的元素精通提升100点。",
      effect: [
        {
          type: BuffType.MysteryFixed,
          getValue: () => 100,
        },
      ],
      enable: true,
    },
    {
      label: "2命·「缠忆君影梦相见」",
      describe:
        "进入梦浮状态时，梦见月瑞希的每点元素精通，会为附近的队伍中所有其他角色提供0.04%火元素、水元素、冰元素与雷元素伤害加成，效果持续至梦浮状态结束。",
      effect: [
        {
          type: BuffType.PyroPrcent,
          getValue: (data) => data.elementalMystery * 0.04,
          transform: true,
          actionOn: ActionOn.Indirect,
        },
        {
          type: BuffType.HydroPrcent,
          getValue: (data) => data.elementalMystery * 0.04,
          transform: true,
          actionOn: ActionOn.Indirect,
        },
        {
          type: BuffType.CryoPrcent,
          getValue: (data) => data.elementalMystery * 0.04,
          transform: true,
          actionOn: ActionOn.Indirect,
        },
        {
          type: BuffType.ElectroPrcent,
          getValue: (data) => data.elementalMystery * 0.04,
          transform: true,
          actionOn: ActionOn.Indirect,
        },
      ],
      shareable: true,
      enable: false,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_E_3,
    Constellation_Q_5,
  ];
}
/**
 * ![梦见月瑞希](https://enka.network/ui/UI_AvatarIcon_Mizuki.png)
 */
export const Mizuki = new MizukiData();
