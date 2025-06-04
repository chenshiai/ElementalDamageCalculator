import Character from "../character-class";
import { ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { A_80_ATK_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "../decorator";

@EnKaId(10000110, "伊安珊")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Electro)
@BaseData(Rarity.Four, 10657, 257, 638, 70)
@Icons("UI_AvatarIcon_Iansan")
class IansanData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["负重锥击", "电掣雷驰", "力的三原理"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.47, 0.508, 0.546, 0.601, 0.639, 0.683, 0.743, 0.803, 0.863, 0.929, 0.994],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.428, 0.462, 0.497, 0.547, 0.582, 0.622, 0.676, 0.731, 0.786, 0.845, 0.905],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.644, 0.696, 0.749, 0.824, 0.876, 0.936, 1.018, 1.101, 1.183, 1.273, 1.363],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [1.003, 1.084, 1.166, 1.283, 1.364, 1.458, 1.586, 1.714, 1.842, 1.982, 2.122],
    }),
    action("雷霆飞缒伤害", AttackType.Strong, ElementType.Electro, {
      atk: [0.842, 0.91, 0.979, 1.077, 1.145, 1.224, 1.331, 1.439, 1.547, 1.664, 1.782],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Electro, {
      atk: [2.864, 3.079, 3.294, 3.58, 3.795, 4.01, 4.296, 4.582, 4.869, 5.155, 5.442, 5.728, 6.086],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Electro, {
      atk: [4.304, 4.627, 4.95, 5.38, 5.703, 6.026, 6.456, 6.886, 7.317, 7.747, 8.178, 8.608, 9.146],
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
