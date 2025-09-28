import Character from "../character-class";
import { ICharacterInfo } from "@/types/interface";
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
import { A_80_ATK_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000110, "伊安珊")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Electro, SecondElementType.Nightsoul)
@BaseData(Rarity.Four, [10657, 257, 638], 70, [11395, 322, 682])
@Icons("UI_AvatarIcon_Iansan")
export class IansanData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["负重锥击", "电掣雷驰", "力的三原理"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.469758, 0.507994, 0.54623, 0.600853, 0.639089, 0.682787, 0.742873, 0.802958, 0.863043, 0.928591, 0.994139,
        1.059686, 1.125234, 1.190781, 1.256329,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.427644, 0.462452, 0.49726, 0.546986, 0.581794, 0.621575, 0.676274, 0.730972, 0.785671, 0.845342, 0.905013,
        0.964684, 1.024356, 1.084027, 1.143698,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.643882, 0.696291, 0.7487, 0.82357, 0.875979, 0.935875, 1.018232, 1.100589, 1.182946, 1.27279, 1.362634,
        1.452478, 1.542322, 1.632166, 1.72201,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        1.00276, 1.08438, 1.166, 1.2826, 1.36422, 1.4575, 1.58576, 1.71402, 1.84228, 1.9822, 2.12212, 2.26204, 2.40196,
        2.54188, 2.6818,
      ],
    }),
    action("雷霆飞缒伤害", AttackType.Strong, ElementType.Electro, {
      atk: [
        0.84194, 0.91047, 0.979, 1.0769, 1.14543, 1.22375, 1.33144, 1.43913, 1.54682, 1.6643, 1.78178, 1.89926, 2.01674,
        2.13422, 2.2517,
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
    action("技能伤害", AttackType.Skill, ElementType.Electro, {
      atk: [
        2.864, 3.0788, 3.2936, 3.58, 3.7948, 4.0096, 4.296, 4.5824, 4.8688, 5.1552, 5.4416, 5.728, 6.086, 6.444, 6.802,
      ],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Electro, {
      atk: [
        4.304, 4.6268, 4.9496, 5.38, 5.7028, 6.0256, 6.456, 6.8864, 7.3168, 7.7472, 8.1776, 8.608, 9.146, 9.684, 10.222,
      ],
    }),
  ];
  otherSkill = [
    action("「热身效应」治疗量", AttackType.Heal, ElementType.None, {
      atk: [0.6],
    }),
  ];
  buffs = [
    ...A_80_ATK_24P,
    {
      label: "强化抗阻练习",
      describe: "「雷霆飞缒」命中敌人后，伊安珊将获得「标准动作」效果，伊安珊的攻击力提升20%",
      effect: [{ type: BuffType.ATKPrcent, getValue: () => 20 }],
      enable: true,
    },
    {
      label: "元素爆发·力的三原理",
      describe: `
      使队伍中自己的当前场上角色的攻击力提升<br />
      ·若伊安珊的夜魂值少于42点，将基于伊安珊的夜魂值与攻击力，获得攻击力加成；<br />
      ·若伊安珊拥有至少42点夜魂值，动能标示将切换至「炽烈声援！」模式，基于伊安珊的攻击力，获得更高的攻击力加成
      `,
      effect: [
        {
          type: BuffType.ATKFixed,
          getValue: (d, s) => {
            let l = [330, 370, 410, 450, 490, 530, 570, 610, 650, 690, 730, 770, 810];
            return Math.min((d.baseATK + d.extraATK) * (s < 42 ? s * 0.005 : 0.27), l[d.burstLevel + d.burstLevelAdd]);
          },
          actionOn: ActionOn.Indirect,
          transform: true,
        },
      ],
      enable: true,
      stackable: true,
      limit: 60,
      stack: 54,
      stackText: "夜魂值",
    },
    {
      label: "偷懒是健身大忌！",
      describe: "「标准动作」效果持续期间，若伊安珊处于队伍后台，还会使队伍中自己的当前场上角色的攻击力提升30%。",
      effect: [{ type: BuffType.ATKPrcent, getValue: () => 30 }],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_E_3,
    Constellation_Q_5,
    {
      label: "6命·「沃陆之邦」的训教",
      describe:
        "伊安珊触发恢复夜魂值的效果时，若夜魂值恢复量溢出，将获得「极限发力」效果，使队伍中自己的当前场上角色造成的伤害提升25%。",
      effect: [{ type: BuffType.GlobalPrcent, getValue: () => 25 }],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}
/**
 * ![伊安珊](https://enka.network/ui/UI_AvatarIcon_Iansan.png)
 */
export const Iansan = new IansanData();
