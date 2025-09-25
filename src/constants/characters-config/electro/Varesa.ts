import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffType, ElementType, Rarity, SecondElementType, WeaponType } from "@/types/enum";
import { Constellation_A_5, Constellation_Q_3, S_80_CRITAL_19P } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000111, "瓦雷莎")
@Weapon(WeaponType.Magic)
@Element(ElementType.Electro, SecondElementType.Nightsoul)
@BaseData(Rarity.Five, [12699, 356, 782], 70, [13602, 437, 837])
@Icons("UI_AvatarIcon_Varesa")
export class VaresaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["角力搏摔", "夜虹逐跃", "闪烈降临！"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Electro, {
      atk: [
        0.467784, 0.502868, 0.537952, 0.58473, 0.619814, 0.654898, 0.701676, 0.748454, 0.795233, 0.842011, 0.88879,
        0.935568, 0.994041, 1.052514, 1.110987,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Electro, {
      atk: [
        0.40028, 0.430301, 0.460322, 0.50035, 0.530371, 0.560392, 0.60042, 0.640448, 0.680476, 0.720504, 0.760532,
        0.80056, 0.850595, 0.90063, 0.950665,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Electro, {
      atk: [
        0.563128, 0.605363, 0.647597, 0.70391, 0.746145, 0.788379, 0.844692, 0.901005, 0.957318, 1.01363, 1.069943,
        1.126256, 1.196647, 1.267038, 1.337429,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Electro, {
      atk: [
        0.8928, 0.95976, 1.02672, 1.116, 1.18296, 1.24992, 1.3392, 1.42848, 1.51776, 1.60704, 1.69632, 1.7856, 1.8972,
        2.0088, 2.1204,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Electro, {
      atk: [
        0.745878, 0.806589, 0.8673, 0.95403, 1.014741, 1.084125, 1.179528, 1.274931, 1.370334, 1.47441, 1.578486,
        1.682562, 1.786638, 1.890714, 1.99479,
      ],
    }),
    action(
      "低空坠地冲击伤害",
      AttackType.Falling,
      ElementType.Electro,
      {
        atk: [
          1.49144, 1.612836, 1.734233, 1.907656, 2.029052, 2.167791, 2.358556, 2.549322, 2.740087, 2.948195, 3.156303,
          3.364411, 3.572519, 3.780627, 3.988735,
        ],
      },
      "varesa"
    ),
    action(
      "高空坠地冲击伤害",
      AttackType.Falling,
      ElementType.Electro,
      {
        atk: [
          1.862889, 2.01452, 2.16615, 2.382765, 2.534396, 2.707688, 2.945964, 3.184241, 3.422517, 3.682455, 3.942393,
          4.202331, 4.462269, 4.722207, 4.982145,
        ],
      },
      "varesa"
    ),
    action("炽热激情状态一段伤害", AttackType.Normal, ElementType.Electro, {
      atk: [
        0.544072, 0.584877, 0.625683, 0.68009, 0.720895, 0.761701, 0.816108, 0.870515, 0.924922, 0.97933, 1.033737,
        1.088144, 1.156153, 1.224162, 1.292171,
      ],
    }),
    action("炽热激情状态二段伤害", AttackType.Normal, ElementType.Electro, {
      atk: [
        0.520288, 0.55931, 0.598331, 0.65036, 0.689382, 0.728403, 0.780432, 0.832461, 0.88449, 0.936518, 0.988547,
        1.040576, 1.105612, 1.170648, 1.235684,
      ],
    }),
    action("炽热激情状态三段伤害", AttackType.Normal, ElementType.Electro, {
      atk: [
        0.735864, 0.791054, 0.846244, 0.91983, 0.97502, 1.03021, 1.103796, 1.177382, 1.250969, 1.324555, 1.398142,
        1.471728, 1.563711, 1.655694, 1.747677,
      ],
    }),
    action("炽热激情状态重击伤害", AttackType.Strong, ElementType.Electro, {
      atk: [
        0.9264, 0.99588, 1.06536, 1.158, 1.22748, 1.29696, 1.3896, 1.48224, 1.57488, 1.66752, 1.76016, 1.8528, 1.9686,
        2.0844, 2.2002,
      ],
    }),
    action("炽热激情状态下坠期间伤害", AttackType.FallPeriod, ElementType.Electro, {
      atk: [
        0.745878, 0.806589, 0.8673, 0.95403, 1.014741, 1.084125, 1.179528, 1.274931, 1.370334, 1.47441, 1.578486,
        1.682562, 1.786638, 1.890714, 1.99479,
      ],
    }),
    action(
      "炽热激情状态低空坠地冲击伤害",
      AttackType.Falling,
      ElementType.Electro,
      {
        atk: [
          2.23716, 2.419254, 2.601349, 2.861484, 3.043578, 3.251686, 3.537834, 3.823983, 4.110131, 4.422293, 4.734455,
          5.046617, 5.358778, 5.67094, 5.983102,
        ],
      },
      "varesa"
    ),
    action(
      "炽热激情状态高空坠地冲击伤害",
      AttackType.Falling,
      ElementType.Electro,
      {
        atk: [
          2.794334, 3.021779, 3.249225, 3.574148, 3.801593, 4.061531, 4.418946, 4.776361, 5.133776, 5.523683, 5.91359,
          6.303497, 6.693404, 7.083311, 7.473218,
        ],
      },
      "varesa"
    ),
  ];
  elementSkill = [
    action("突进伤害", AttackType.Skill, ElementType.Electro, {
      atk: [
        0.7448, 0.80066, 0.85652, 0.931, 0.98686, 1.04272, 1.1172, 1.19168, 1.26616, 1.34064, 1.41512, 1.4896, 1.5827,
        1.6758, 1.7689,
      ],
    }),
    action("炽热激情状态突进伤害", AttackType.Skill, ElementType.Electro, {
      atk: [
        1.064, 1.1438, 1.2236, 1.33, 1.4098, 1.4896, 1.596, 1.7024, 1.8088, 1.9152, 2.0216, 2.128, 2.261, 2.394, 2.527,
      ],
    }),
  ];
  burstSkill = [
    action("飞踢伤害", AttackType.Burst, ElementType.Electro, {
      atk: [
        3.4512, 3.71004, 3.96888, 4.314, 4.57284, 4.83168, 5.1768, 5.52192, 5.86704, 6.21216, 6.55728, 6.9024, 7.3338,
        7.7652, 8.1966,
      ],
    }),
    action("炽热激情状态飞踢伤害", AttackType.Burst, ElementType.Electro, {
      atk: [
        5.752, 6.1834, 6.6148, 7.19, 7.6214, 8.0528, 8.628, 9.2032, 9.7784, 10.3536, 10.9288, 11.504, 12.223, 12.942,
        13.661,
      ],
    }),
    action("「大火山崩落」伤害", AttackType.Falling, ElementType.Electro, {
      atk: [
        4.0264, 4.32838, 4.63036, 5.033, 5.33498, 5.63696, 6.0396, 6.44224, 6.84488, 7.24752, 7.65016, 8.0528, 8.5561,
        9.0594, 9.5627,
      ],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_CRITAL_19P,
    {
      label: "连势，三重腾跃！",
      describe:
        "施放元素战技夜虹逐跃后，瓦雷莎获得「虹色坠击」，瓦雷莎进行下落攻击时，坠地冲击能额外造成50%攻击力的伤害；若瓦雷莎处于炽热激情状态，则坠地冲击改为能额外造成180%攻击力的伤害。",
      effect: [
        {
          type: BuffType.FallingAdd,
          getValue: (_, s) => {
            return s === 1 ? 1.8 : 0.5;
          },
          special: "varesa",
          actionOn: ActionOn.Direct,
        },
      ],
      enable: true,
      stack: 1,
      limit: 1,
      stackType: "switch",
      stackable: true,
      stackText: "炽热激情状态",
    },
    {
      label: "英雄，二度归来！",
      describe:
        "队伍中的附近的角色触发「夜魂迸发」时，瓦雷莎的攻击力提升35%，持续12秒。该效果至多叠加两层，每层独立计算持续时间。",
      effect: [{ type: BuffType.ATKPrcent, getValue: (_, s) => s * 35 }],
      enable: false,
      stack: 2,
      limit: 2,
      stackable: true,
    },
    Constellation_Q_3,
    Constellation_A_5,
    {
      label: "6命·正义英雄的凯旋",
      describe: "瓦雷莎的下落攻击与元素爆发闪烈降临！的暴击率提升10%，暴击伤害提升100%。",
      effect: [
        { type: BuffType.FallingCritcal, getValue: () => 10 },
        { type: BuffType.FallingCritcalHurt, getValue: () => 100 },
        { type: BuffType.BurstCritcal, getValue: () => 10 },
        { type: BuffType.BurstCritcalHurt, getValue: () => 100 },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![瓦雷莎](https://enka.network/ui/UI_AvatarIcon_Varesa.png) */
export const Varesa = new VaresaData();
