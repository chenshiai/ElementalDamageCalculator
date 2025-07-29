import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { Constellation_E_3, Constellation_Q_5, S_80_MYSTERY_115 } from "../buffs";

@EnKaId(10000073, "纳西妲")
@Weapon(WeaponType.Magic)
@Element(ElementType.Dendro)
@BaseData(Rarity.Five, 10360, 299, 630, 50)
@Icons("UI_AvatarIcon_Nahida")
export class NahidaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["行相", "所闻遍计", "心景幻成"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Dendro, {
      atk: [0.403, 0.433, 0.464, 0.504, 0.534, 0.564, 0.605, 0.645, 0.685, 0.726, 0.766],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Dendro, {
      atk: [0.37, 0.398, 0.425, 0.462, 0.49, 0.518, 0.555, 0.592, 0.629, 0.666, 0.703],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Dendro, {
      atk: [0.459, 0.493, 0.528, 0.573, 0.608, 0.642, 0.688, 0.734, 0.78, 0.826, 0.872],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Dendro, {
      atk: [0.584, 0.628, 0.672, 0.73, 0.774, 0.818, 0.876, 0.935, 0.993, 1.051, 1.11],
    }),
    action("重击", AttackType.Strong, ElementType.Dendro, {
      atk: [1.32, 1.419, 1.518, 1.65, 1.749, 1.848, 1.98, 2.112, 2.244, 2.376, 2.508],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Dendro, {
      atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.2],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Dendro, {
      atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Dendro, {
      atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
    }),
  ];
  elementSkill = [
    action("点按伤害", AttackType.Skill, ElementType.Dendro, {
      atk: [0.984, 1.058, 1.132, 1.23, 1.304, 1.378, 1.476, 1.574, 1.673, 1.771, 1.87, 1.968, 2.091],
    }),
    action("长按伤害", AttackType.Skill, ElementType.Dendro, {
      atk: [1.304, 1.402, 1.5, 1.63, 1.728, 1.826, 1.956, 2.086, 2.217, 2.347, 2.478, 2.608, 2.771],
    }),
    action(
      "灭净三业伤害",
      AttackType.Skill,
      ElementType.Dendro,
      {
        atk: [1.032, 1.109, 1.187, 1.29, 1.367, 1.445, 1.548, 1.651, 1.754, 1.858, 1.961, 2.064, 2.193],
        em: [2.064, 2.219, 2.374, 2.58, 2.735, 2.89, 3.096, 3.302, 3.509, 3.715, 3.922, 4.128, 4.386],
      },
      "nahida"
    ),
  ];
  burstSkill = [];
  otherSkill = [
    action(
      "6命·灭净三业·业障除",
      AttackType.Skill,
      ElementType.Dendro,
      {
        atk: [2],
        em: [4],
      },
      "nahida"
    ),
  ];
  buffs: IBuffBase[] = [
    ...S_80_MYSTERY_115,
    {
      label: "元素爆发·心景幻成",
      describe: "根据队伍中火元素角色的数量，提升纳西妲元素战技「所闻遍计」的灭净三业造成的伤害；",
      effect: [
        {
          type: BuffType.SkillPrcent,
          getValue: (data, s) => {
            return [
              [14.9, 22.3],
              [16, 24],
              [17.1, 25.7],
              [18.6, 27.9],
              [19.7, 29.6],
              [20.8, 31.3],
              [22.3, 33.5],
              [23.8, 35.7],
              [25.3, 37.9],
              [26.8, 40.2],
              [28.3, 42.4],
              [29.8, 44.6],
              [31.6, 47.4],
            ][data.burstLevel + data.burstLevelAdd - 1][s - 1];
          },
        },
      ],
      enable: true,
      stack: 0,
      stackable: true,
      limit: 2,
      stackText: "火元素角色数量",
    },
    {
      label: "净善摄受明论",
      describe:
        "依据队伍中元素精通最高的角色的元素精通数值的25%，提高领域内当前场上角色的元素精通。通过这种方式，至多提升250点元素精通",
      effect: [
        {
          type: BuffType.MysteryFixed,
          getValue: (_, s) => {
            return Math.min(250, s * 0.25);
          },
          transform: true,
        },
      ],
      enable: true,
      stack: 0,
      stackable: true,
      limit: 1000,
      shareable: true,
      target: BuffTarget.All,
      stackText: "队伍中元素精通最高值",
    },
    {
      label: "慧明缘觉智论",
      describe:
        "基于纳西妲总元素精通超过200点的部分，每1点元素精通能使所闻遍计的灭净三业造成的伤害提升0.1%，暴击率提升0.03%。通过这种方式，至多使灭净三业造成的伤害提升80%，暴击率提升24%",
      effect: [
        {
          type: BuffType.SkillPrcent,
          getValue: (data) => {
            return Math.min(80, Math.max(0, data.elementalMystery + data.elementalMystery_NT - 200) * 0.1);
          },
          actionOn: ActionOn.Indirect,
          special: "nahida",
        },
        {
          type: BuffType.SkillCritcal,
          getValue: (data) => {
            return Math.min(24, Math.max(0, data.elementalMystery + data.elementalMystery_NT - 200) * 0.03);
          },
          special: "nahida",
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: true,
    },
    {
      label: "2命·正等善见之根",
      describe: "处于纳西妲自身施加的蕴种印状态下的敌人受到原激化、超激化、蔓激化反应影响后的8秒内，防御力降低30%",
      effect: [
        {
          type: BuffType.ReduceArmour,
          getValue: () => 30,
        },
      ],
      enable: false,
      shareable: true,
      condition: ({ constellation }) => constellation >= 2,
      target: BuffTarget.Enemy,
    },
    Constellation_E_3,
    {
      label: "4命·比量现行之茎",
      describe: "附近处于所闻遍计的蕴种印状态下的敌人数量为1/2/3/4或更多时，纳西妲的元素精通提升100/120/140/160点",
      effect: [
        {
          type: BuffType.MysteryFixed,
          getValue: (_, s) => [0, 100, 120, 140, 160][s],
        },
      ],
      enable: true,
      stack: 0,
      limit: 4,
      condition: ({ constellation }) => constellation >= 4,
      stackable: true,
    },
    Constellation_Q_5,
  ];
}

/** ![纳西妲](https://enka.network/ui/UI_AvatarIcon_Nahida.png) */
export const Nahida = new NahidaData();
