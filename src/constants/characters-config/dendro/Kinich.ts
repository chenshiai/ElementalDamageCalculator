import Character from "../character-class";
import { ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffType, ElementType, Rarity, SecondElementType, WeaponType } from "@/types/enum";
import { Constellation_E_3, Constellation_Q_5, S_80_CRITALHUNT_38P } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000101, "基尼奇")
@Weapon(WeaponType.GreatSword)
@Element(ElementType.Dendro, SecondElementType.Nightsoul)
@BaseData(Rarity.Five, [12858, 332, 802], 70, [13772, 408, 859])
@Icons("UI_AvatarIcon_Kinich")
export class KinichData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["锐锋攫猎", "音火锻淬", "豹烈律动！"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.98986, 1.07043, 1.151, 1.2661, 1.34667, 1.43875, 1.56536, 1.69197, 1.81858, 1.9567, 2.09482, 2.23294, 2.37106,
        2.50918, 2.6473,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.82904, 0.89652, 0.964, 1.0604, 1.12788, 1.205, 1.31104, 1.41708, 1.52312, 1.6388, 1.75448, 1.87016, 1.98584,
        2.10152, 2.2172,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        1.23496, 1.33548, 1.436, 1.5796, 1.68012, 1.795, 1.95296, 2.11092, 2.26888, 2.4412, 2.61352, 2.78584, 2.95816,
        3.13048, 3.3028,
      ],
    }),
    action("空中普通攻击伤害", AttackType.Normal, ElementType.Physical, {
      atk: [1.677, 1.8135, 1.95, 2.145, 2.2815, 2.4375, 2.652, 2.8665, 3.081, 3.315, 3.549, 3.783, 4.017, 4.251, 4.485],
    }),
    action("重击伤害·单次", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.48418, 0.52359, 0.563, 0.6193, 0.65871, 0.70375, 0.76568, 0.82761, 0.88954, 0.9571, 1.02466, 1.09222, 1.15978,
        1.22734, 1.2949,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        0.745878, 0.806589, 0.8673, 0.95403, 1.014741, 1.084125, 1.179528, 1.274931, 1.370334, 1.47441, 1.578486,
        1.682562, 1.786638, 1.890714, 1.99479,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.49144, 1.612836, 1.734233, 1.907656, 2.029052, 2.167791, 2.358556, 2.549322, 2.740087, 2.948195, 3.156303,
        3.364411, 3.572519, 3.780627, 3.988735,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.862889, 2.01452, 2.16615, 2.382765, 2.534396, 2.707688, 2.945964, 3.184241, 3.422517, 3.682455, 3.942393,
        4.202331, 4.462269, 4.722207, 4.982145,
      ],
    }),
  ];
  elementSkill = [
    action("环绕射击伤害·单次", AttackType.Skill, ElementType.Dendro, {
      atk: [
        0.5728, 0.61576, 0.65872, 0.716, 0.75896, 0.80192, 0.8592, 0.91648, 0.97376, 1.03104, 1.08832, 1.1456, 1.2172,
        1.2888, 1.3604,
      ],
    }),
    action(
      "迴猎贯鳞炮伤害",
      AttackType.Skill,
      ElementType.Dendro,
      {
        atk: [
          6.8744, 7.38998, 7.90556, 8.593, 9.10858, 9.62416, 10.3116, 10.99904, 11.68648, 12.37392, 13.06136, 13.7488,
          14.6081, 15.4674, 16.3267,
        ],
      },
      "Kinich"
    ),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Dendro, {
      atk: [1.34, 1.4405, 1.541, 1.675, 1.7755, 1.876, 2.01, 2.144, 2.278, 2.412, 2.546, 2.68, 2.8475, 3.015, 3.1825],
    }),
    action("龙息伤害", AttackType.Burst, ElementType.Dendro, {
      atk: [
        1.20736, 1.297912, 1.388464, 1.5092, 1.599752, 1.690304, 1.81104, 1.931776, 2.052512, 2.173248, 2.293984,
        2.41472, 2.56564, 2.71656, 2.86748,
      ],
    }),
  ];
  otherSkill = [
    action(
      "基尼奇·6命弹射",
      AttackType.Skill,
      ElementType.Dendro,
      {
        atk: [7],
      },
      "Kinich"
    ),
  ];
  buffs = [
    ...S_80_CRITALHUNT_38P,
    {
      label: "焰灵的契约",
      describe:
        "队伍中的附近的角色触发「夜魂迸发」后，赋予一层「猎人心得」，至多叠加2层。每层「猎人心得」使迴猎贯鳞炮伤害提高，基于基尼奇攻击力的320%",
      effect: [
        {
          type: BuffType.SkillFixed,
          getValue(data, s) {
            return (data.baseATK + data.extraATK + data.extraATK_NT) * 3.2 * s;
          },
          actionOn: ActionOn.External,
          special: "Kinich",
        },
      ],
      enable: false,
      stackText: "猎人心得",
      limit: 2,
      stack: 2,
      stackable: true,
    },
    {
      label: "1命·七鹦之喙",
      describe: "迴猎贯鳞炮的暴击伤害提升100%",
      effect: [{ type: BuffType.SkillCritcalHurt, getValue: () => 100, special: "Kinich" }],
      condition: ({ constellation }) => constellation >= 1,
      enable: true,
    },
    {
      label: "2命·星虎之掌",
      describe: "迴猎贯鳞炮首次造成的伤害提升100%",
      effect: [{ type: BuffType.SkillPrcent, getValue: () => 100, special: "Kinich" }],
      condition: ({ constellation }) => constellation >= 2,
      enable: true,
    },
    Constellation_E_3,
    Constellation_Q_5,
  ];
}

/**
 * ![基尼奇](https://enka.network/ui/UI_AvatarIcon_Kinich.png)
 */
export const Kinich = new KinichData();
