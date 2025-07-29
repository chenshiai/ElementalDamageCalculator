import Character from "../character-class";
import { ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import {
  Constellation_E_3,
  Constellation_Q_5,
  S_80_CRITAL_19P,
} from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000112, "爱可菲")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Cryo)
@BaseData(Rarity.Five, 13348, 370, 732, 60)
@Icons("UI_AvatarIcon_Escoffier")
export class EscoffierData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["后厨手艺", "低温烹饪", "花刀技法"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.516, 0.557, 0.599, 0.659, 0.701, 0.749, 0.815, 0.881, 0.947, 1.019, 1.091],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.476, 0.515, 0.559, 0.609, 0.647, 0.692, 0.753, 0.814, 0.874, 0.941, 1.007],
    }),
    action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.33, 0.357, 0.384, 0.422, 0.449, 0.48, 0.522, 0.564, 0.606, 0.652, 0.698],
    }),
    action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.403, 0.436, 0.469, 0.516, 0.549, 0.586, 0.638, 0.689, 0.741, 0.797, 0.854],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [1.154, 1.248, 1.342, 1.476, 1.57, 1.678, 1.825, 1.973, 2.12, 2.281, 2.442],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.28, 1.38, 1.48, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [0.504, 0.542, 0.58, 0.63, 0.668, 0.706, 0.756, 0.806, 0.857, 0.907, 0.958, 1.008, 1.071],
    }),
    action("冻霜芭菲伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [1.2, 1.29, 1.38, 1.5, 1.59, 1.68, 1.8, 1.92, 2.04, 2.16, 2.28, 2.4, 2.55],
    }),
    action("流涌之刃伤害", AttackType.Other, ElementType.Cryo, {
      atk: [0.336, 0.361, 0.386, 0.42, 0.445, 0.47, 0.504, 0.538, 0.571, 0.605, 0.638, 0.672, 0.714],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Cryo, {
      atk: [5.928, 6.373, 6.817, 7.41, 7.855, 8.299, 8.892, 9.485, 10.078, 10.67, 11.263, 11.856, 12.597],
    }),
    action("治疗量", AttackType.Heal, ElementType.None, {
      atk: [1.72, 1.849, 1.978, 2.15, 2.279, 2.408, 2.58, 2.753, 2.925, 3.097, 3.226, 3.441, 3.656],
      fixed: [1079, 1186, 1303, 1429, 1564, 1708, 1861, 2022, 2193, 2373, 2562, 2759, 2966],
    }),
  ];
  otherSkill = [
    action("美食胜过良药", AttackType.Heal, ElementType.None, {
      atk: [1.3824],
    }),
    action("6命·特级冻霜芭菲伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [5],
    }),
  ];
  buffs = [
    ...S_80_CRITAL_19P,
    {
      label: "灵感浸入调味",
      describe:
        "当队伍中存在1/2/3/4名水元素或冰元素角色时，爱可菲的元素战技低温烹饪或元素爆发花刀技法命中敌人时，将使该敌人的水元素抗性与冰元素抗性降低5%/10%/15%/55%。",
      stackable: true,
      shareable: true,
      limit: 4,
      stack: 4,
      stackText: "水/冰元素角色数量",
      effect: [
        {
          type: BuffType.EnemyCryoResistance,
          getValue: (_, s) => {
            return [-5, -10, -15, -55][s - 1] || 0;
          },
        },
        {
          type: BuffType.EnemyHydroResistance,
          getValue: (_, s) => {
            return [-5, -10, -15, -55][s - 1] || 0;
          },
        },
      ],
      enable: true,
      target: BuffTarget.Enemy,
    },
    {
      label: "1命·味蕾绽放的餐前旋舞",
      describe:
        "队伍中4名角色的元素类型均为水元素或冰元素时，爱可菲施放元素战技低温烹饪或元素爆发花刀技法后的15秒内，队伍中附近的所有角色造成冰元素伤害时的暴击伤害提升60%。",
      shareable: true,
      effect: [
        {
          type: BuffType.CryoCritcalHurt,
          getValue: () => 60,
        },
      ],
      enable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 1,
    },
    {
      label: "2命·鲜香味腴的炖煮艺术",
      describe:
        "爱可菲以低温冷藏模式启动厨艺机关时，将获得「现制名肴」效果，持续15秒：持续期间，爱可菲获得5层「冷煮」，除爱可菲外的附近的当前场上角色普通攻击、重击、下落攻击、元素战技和元素爆发对敌人造成冰元素伤害时，将消耗1层「冷煮」，提升造成的伤害，提升值相当于爱可菲攻击力的240%。",
      shareable: true,
      effect: [
        {
          type: BuffType.CryoFixed,
          getValue: (d) => (d.baseATK + d.extraATK + d.extraATK_NT) * 2.4,
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
      target: BuffTarget.Other,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_E_3,
    Constellation_Q_5,
  ];
}
/** ![爱可菲](https://enka.network/ui/UI_AvatarIcon_Escoffier.png) */
export const Escoffier = new EscoffierData();