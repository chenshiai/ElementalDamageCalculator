import Character from "../character-class";
import { ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Constellation_E_3, Constellation_Q_5, S_80_MYSTERY_115 } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000109, "梦见月瑞希")
@Weapon(WeaponType.Magic)
@Element(ElementType.Anemo)
@BaseData(Rarity.Five, 12736, 215, 757, 60)
@Icons("UI_AvatarIcon_Mizuki")
export class MizukiData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["梦我梦心", "秋沙歌枕巡礼", "安乐秘汤疗法"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [0.523, 0.562, 0.601, 0.653, 0.693, 0.732, 0.784, 0.836, 0.889, 0.941, 0.993],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [0.469, 0.504, 0.54, 0.586, 0.622, 0.657, 0.704, 0.751, 0.798, 0.844, 0.891],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [0.714, 0.767, 0.821, 0.892, 0.946, 0.999, 1.071, 1.142, 1.213, 1.285, 1.356],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Anemo, {
      atk: [1.3, 1.398, 1.495, 1.625, 1.723, 1.82, 1.95, 2.08, 2.21, 2.34, 2.47],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Anemo, {
      atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.044, 1.123, 1.203],
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
      atk: [0.577, 0.621, 0.664, 0.722, 0.765, 0.808, 0.866, 0.924, 0.982, 1.039, 1.097, 1.155, 1.227],
    }),
    action("持续攻击伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [0.449, 0.483, 0.516, 0.561, 0.595, 0.629, 0.674, 0.719, 0.764, 0.808, 0.853, 0.898, 0.954],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [0.941, 1.011, 1.082, 1.176, 1.247, 1.317, 1.411, 1.505, 1.599, 1.693, 1.788, 1.882, 1.999],
    }),
    action("梦念冲击波伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [0.706, 0.758, 0.811, 0.882, 0.935, 0.988, 1.057, 1.129, 1.2, 1.27, 1.341, 1.411, 1.499],
    }),
    action("拾取点心回复生命值", AttackType.Heal, ElementType.None, {
      em: [1.306, 1.403, 1.501, 1.632, 1.73, 1.828, 1.958, 2.089, 2.22, 2.35, 2.481, 2.611, 2.774],
      fixed: [314, 346, 380, 417, 456, 498, 543, 590, 640, 692, 747, 805, 865],
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
