import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { Constellation_E_3, Constellation_Q_5, S_80_MYSTERY_115 } from "../buffs";

@EnKaId(10000073, "纳西妲")
@Weapon(WeaponType.Magic)
@Element(ElementType.Dendro)
@BaseData(Rarity.Five, [10360, 299, 630], 50, [11096, 366, 675])
@Icons("UI_AvatarIcon_Nahida")
export class NahidaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["行相", "所闻遍计", "心景幻成"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Dendro, {
      atk: [
        0.403048, 0.433277, 0.463505, 0.50381, 0.534039, 0.564267, 0.604572, 0.644877, 0.685182, 0.725486, 0.765791,
        0.806096, 0.856477, 0.906858, 0.957239,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Dendro, {
      atk: [
        0.369744, 0.397475, 0.425206, 0.46218, 0.489911, 0.517642, 0.554616, 0.59159, 0.628565, 0.665539, 0.702514,
        0.739488, 0.785706, 0.831924, 0.878142,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Dendro, {
      atk: [
        0.458744, 0.49315, 0.527556, 0.57343, 0.607836, 0.642242, 0.688116, 0.73399, 0.779865, 0.825739, 0.871614,
        0.917488, 0.974831, 1.032174, 1.089517,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Dendro, {
      atk: [
        0.584064, 0.627869, 0.671674, 0.73008, 0.773885, 0.81769, 0.876096, 0.934502, 0.992909, 1.051315, 1.109722,
        1.168128, 1.241136, 1.314144, 1.387152,
      ],
    }),
    action("重击", AttackType.Strong, ElementType.Dendro, {
      atk: [1.32, 1.419, 1.518, 1.65, 1.749, 1.848, 1.98, 2.112, 2.244, 2.376, 2.508, 2.64, 2.805, 2.97, 3.135],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Dendro, {
      atk: [
        0.568288, 0.614544, 0.6608, 0.72688, 0.773136, 0.826, 0.898688, 0.971376, 1.044064, 1.12336, 1.202656, 1.281952,
        1.361248, 1.440544, 1.51984,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Dendro, {
      atk: [
        1.136335, 1.228828, 1.32132, 1.453452, 1.545944, 1.65165, 1.796995, 1.94234, 2.087686, 2.246244, 2.404802,
        2.563361, 2.721919, 2.880478, 3.039036,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Dendro, {
      atk: [
        1.419344, 1.534872, 1.6504, 1.81544, 1.930968, 2.063, 2.244544, 2.426088, 2.607632, 2.80568, 3.003728, 3.201776,
        3.399824, 3.597872, 3.79592,
      ],
    }),
  ];
  elementSkill = [
    action("点按伤害", AttackType.Skill, ElementType.Dendro, {
      atk: [
        0.984, 1.0578, 1.1316, 1.23, 1.3038, 1.3776, 1.476, 1.5744, 1.6728, 1.7712, 1.8696, 1.968, 2.091, 2.214, 2.337,
      ],
    }),
    action("长按伤害", AttackType.Skill, ElementType.Dendro, {
      atk: [
        1.304, 1.4018, 1.4996, 1.63, 1.7278, 1.8256, 1.956, 2.0864, 2.2168, 2.3472, 2.4776, 2.608, 2.771, 2.934, 3.097,
      ],
    }),
    action(
      "灭净三业伤害",
      AttackType.Skill,
      ElementType.Dendro,
      {
        atk: [
          1.032, 1.1094, 1.1868, 1.29, 1.3674, 1.4448, 1.548, 1.6512, 1.7544, 1.8576, 1.9608, 2.064, 2.193, 2.322,
          2.451,
        ],
        em: [
          2.064, 2.2188, 2.3736, 2.58, 2.7348, 2.8896, 3.096, 3.3024, 3.5088, 3.7152, 3.9216, 4.128, 4.386, 4.644,
          4.902,
        ],
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
