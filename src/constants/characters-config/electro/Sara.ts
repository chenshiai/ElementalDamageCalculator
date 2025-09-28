import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_ATK_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000056, "九条裟罗")
@Weapon(WeaponType.Bow)
@Element(ElementType.Electro)
@BaseData(Rarity.Four, [9570, 195, 628], 80, [10232, 245, 671])
@Icons("UI_AvatarIcon_Sara")
export class SaraData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["天狗传弓术", "鸦羽天狗霆雷召咒", "煌煌千道镇式"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.36894, 0.39897, 0.429, 0.4719, 0.50193, 0.53625, 0.58344, 0.63063, 0.67782, 0.7293, 0.78078, 0.83226, 0.88374,
        0.93522, 0.9867,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.387, 0.4185, 0.45, 0.495, 0.5265, 0.5625, 0.612, 0.6615, 0.711, 0.765, 0.819, 0.873, 0.927, 0.981, 1.035],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.48504, 0.52452, 0.564, 0.6204, 0.65988, 0.705, 0.76704, 0.82908, 0.89112, 0.9588, 1.02648, 1.09416, 1.16184,
        1.22952, 1.2972,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.50396, 0.54498, 0.586, 0.6446, 0.68562, 0.7325, 0.79696, 0.86142, 0.92588, 0.9962, 1.06652, 1.13684, 1.20716,
        1.27748, 1.3478,
      ],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.5805, 0.62775, 0.675, 0.7425, 0.78975, 0.84375, 0.918, 0.99225, 1.0665, 1.1475, 1.2285, 1.3095, 1.3905,
        1.4715, 1.5525,
      ],
    }),
    action("瞄准射击", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.4386, 0.4743, 0.51, 0.561, 0.5967, 0.6375, 0.6936, 0.7497, 0.8058, 0.867, 0.9282, 0.9894, 1.0506, 1.1118,
        1.173,
      ],
    }),
    action("满蓄力瞄准射击", AttackType.Strong, ElementType.Electro, {
      atk: [1.24, 1.333, 1.426, 1.55, 1.643, 1.736, 1.86, 1.984, 2.108, 2.232, 2.356, 2.48, 2.635, 2.79, 2.945],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        0.568288, 0.614544, 0.6608, 0.72688, 0.773136, 0.826, 0.898688, 0.971376, 1.044064, 1.12336, 1.202656, 1.281952,
        1.361248, 1.440544, 1.51984,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.136335, 1.228828, 1.32132, 1.453452, 1.545944, 1.65165, 1.796995, 1.94234, 2.087686, 2.246244, 2.404802,
        2.563361, 2.721919, 2.880478, 3.039036,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.419344, 1.534872, 1.6504, 1.81544, 1.930968, 2.063, 2.244544, 2.426088, 2.607632, 2.80568, 3.003728, 3.201776,
        3.399824, 3.597872, 3.79592,
      ],
    }),
  ];
  elementSkill = [
    action("天狗咒雷•伏伤害", AttackType.Skill, ElementType.Electro, {
      atk: [
        1.2576, 1.35192, 1.44624, 1.572, 1.66632, 1.76064, 1.8864, 2.01216, 2.13792, 2.26368, 2.38944, 2.5152, 2.6724,
        2.8296, 2.9868,
      ],
    }),
    action("2命·鸦羽", AttackType.Skill, ElementType.Electro, {
      atk: [
        1.2576, 1.35192, 1.44624, 1.572, 1.66632, 1.76064, 1.8864, 2.01216, 2.13792, 2.26368, 2.38944, 2.5152, 2.6724,
        2.8296, 2.9868,
      ].map((i) => i * 0.3),
    }),
  ];
  burstSkill = [
    action("天狗咒雷•金刚坏伤害", AttackType.Burst, ElementType.Electro, {
      atk: [
        4.096, 4.4032, 4.7104, 5.12, 5.4272, 5.7344, 6.144, 6.5536, 6.9632, 7.3728, 7.7824, 8.192, 8.704, 9.216, 9.728,
      ],
    }),
    action("天狗咒雷•雷砾伤害", AttackType.Burst, ElementType.Electro, {
      atk: [
        0.3412, 0.36679, 0.39238, 0.4265, 0.45209, 0.47768, 0.5118, 0.54592, 0.58004, 0.61416, 0.64828, 0.6824, 0.72505,
        0.7677, 0.81035,
      ],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...A_80_ATK_24P,
    {
      label: "天狗咒雷•伏",
      describe: "对范围内当前场上当前角色基于九条裟罗的基础攻击力，以一定比例获得攻击力加成",
      effect: [
        {
          type: BuffType.ATKFixed,
          getValue: (data) => {
            let a = [
              0.4296, 0.46182, 0.49404, 0.537, 0.56922, 0.60144, 0.6444, 0.68736, 0.73032, 0.77328, 0.81624, 0.8592,
              0.9129, 0.9666, 1.0203,
            ][data.skillLevel + data.skillLevelAdd - 1];
            return data.baseATK * a;
          },
          actionOn: ActionOn.Indirect,
          transform: true,
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
    },
    Constellation_E_3,
    Constellation_Q_5,
    {
      label: "6命·我界",
      describe: "处于天狗咒雷带来的攻击力提升效果状态下的角色，其雷元素伤害的暴击伤害提高60%",
      effect: [
        {
          type: BuffType.ElectroCritcalHurt,
          getValue: () => 60,
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![九条裟罗](https://enka.network/ui/UI_AvatarIcon_Sara.png) */
export const Sara = new SaraData();
