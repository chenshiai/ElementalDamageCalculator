import Character from "../character-class";
import { ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Constellation_E_3, Constellation_Q_5, S_80_CRITAL_19P } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000112, "爱可菲")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Cryo)
@BaseData(Rarity.Five, [13348, 370, 732], 60, [14297, 425, 784])
@Icons("UI_AvatarIcon_Escoffier")
export class EscoffierData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["后厨手艺", "低温烹饪", "花刀技法"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.51551, 0.55747, 0.59943, 0.659373, 0.701333, 0.749287, 0.815225, 0.881162, 0.947099, 1.019031, 1.090963,
        1.162894, 1.234826, 1.306757, 1.378689,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.475933, 0.514671, 0.55341, 0.608751, 0.64749, 0.691762, 0.752638, 0.813513, 0.874388, 0.940797, 1.007206,
        1.073615, 1.140025, 1.206434, 1.272843,
      ],
    }),
    action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.33, 0.356855, 0.383715, 0.422087, 0.448947, 0.479644, 0.521852, 0.564061, 0.60627, 0.652316, 0.698361,
        0.744407, 0.790453, 0.836499, 0.882544,
      ],
    }),
    action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.403327, 0.436156, 0.468985, 0.515884, 0.548712, 0.586231, 0.63782, 0.689408, 0.740996, 0.797274, 0.853553,
        0.909831, 0.966109, 1.022387, 1.078666,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        1.15412, 1.24806, 1.342, 1.4762, 1.57014, 1.6775, 1.82512, 1.97274, 2.12036, 2.2814, 2.44244, 2.60348, 2.76452,
        2.92556, 3.0866,
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
    action("技能伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [
        0.504, 0.5418, 0.5796, 0.63, 0.6678, 0.7056, 0.756, 0.8064, 0.8568, 0.9072, 0.9576, 1.008, 1.071, 1.134, 1.197,
      ],
    }),
    action("冻霜芭菲伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [1.2, 1.29, 1.38, 1.5, 1.59, 1.68, 1.8, 1.92, 2.04, 2.16, 2.28, 2.4, 2.55, 2.7, 2.85],
    }),
    action("流涌之刃伤害", AttackType.Other, ElementType.Cryo, {
      atk: [
        0.336, 0.3612, 0.3864, 0.42, 0.4452, 0.4704, 0.504, 0.5376, 0.5712, 0.6048, 0.6384, 0.672, 0.714, 0.756, 0.798,
      ],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Cryo, {
      atk: [
        5.928, 6.3726, 6.8172, 7.41, 7.8546, 8.2992, 8.892, 9.4848, 10.0776, 10.6704, 11.2632, 11.856, 12.597, 13.338,
        14.079,
      ],
    }),
    action("治疗量", AttackType.Heal, ElementType.None, {
      atk: [
        1.72032, 1.849344, 1.978368, 2.1504, 2.279424, 2.408448, 2.58048, 2.752512, 2.924544, 3.096576, 3.268608,
        3.44064, 3.65568, 3.87072, 4.08576,
      ],
      fixed: [
        1078.5255, 1186.3931, 1303.2495, 1429.095, 1563.9294, 1707.7528, 1860.5652, 2022.3665, 2193.1567, 2372.936,
        2561.704, 2759.4614, 2966.2075, 3181.9426, 3406.6665,
      ],
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
