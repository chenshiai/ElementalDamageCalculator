import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Constellation_E_5, Constellation_Q_3, S_80_CRITAL_19P } from "../buffs";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";

@EnKaId(10000060, "夜兰")
@Weapon(WeaponType.Bow)
@Element(ElementType.Hydro)
@BaseData(Rarity.Five, [14450, 244, 548], 70, [15477, 299, 587])
@Icons("UI_AvatarIcon_Yelan")
export class YelanData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["潜形隐曜弓", "萦络纵命索", "渊图玲珑骰"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.40678, 0.43989, 0.473, 0.5203, 0.55341, 0.59125, 0.64328, 0.69531, 0.74734, 0.8041, 0.86086, 0.91762, 0.97438,
        1.03114, 1.0879,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.39044, 0.42222, 0.454, 0.4994, 0.53118, 0.5675, 0.61744, 0.66738, 0.71732, 0.7718, 0.82628, 0.88076, 0.93524,
        0.98972, 1.0442,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.516, 0.558, 0.6, 0.66, 0.702, 0.75, 0.816, 0.882, 0.948, 1.02, 1.092, 1.164, 1.236, 1.308, 1.38],
    }),
    action("四段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.32508, 0.35154, 0.378, 0.4158, 0.44226, 0.4725, 0.51408, 0.55566, 0.59724, 0.6426, 0.68796, 0.73332, 0.77868,
        0.82404, 0.8694,
      ],
    }),
    action("瞄准射击", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.4386, 0.4743, 0.51, 0.561, 0.5967, 0.6375, 0.6936, 0.7497, 0.8058, 0.867, 0.9282, 0.9894, 1.0506, 1.1118,
        1.173,
      ],
    }),
    action("满蓄力瞄准射击", AttackType.Strong, ElementType.Hydro, {
      atk: [1.24, 1.333, 1.426, 1.55, 1.643, 1.736, 1.86, 1.984, 2.108, 2.232, 2.356, 2.48, 2.635, 2.79, 2.945],
    }),
    action(
      "破局矢伤害",
      AttackType.Strong,
      ElementType.Hydro,
      {
        hp: [
          0.11576, 0.124442, 0.133124, 0.1447, 0.153382, 0.162064, 0.17364, 0.185216, 0.196792, 0.208368, 0.219944,
          0.23152, 0.24599, 0.26046, 0.27493,
        ],
      },
      "Yelan"
    ),
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
    action("技能伤害", AttackType.Skill, ElementType.Hydro, {
      hp: [
        0.226136, 0.243096, 0.260056, 0.28267, 0.29963, 0.31659, 0.339204, 0.361818, 0.384431, 0.407045, 0.429658,
        0.452272, 0.480539, 0.508806, 0.537073,
      ],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Hydro, {
      hp: [
        0.07308, 0.078561, 0.084042, 0.09135, 0.096831, 0.102312, 0.10962, 0.116928, 0.124236, 0.131544, 0.138852,
        0.14616, 0.155295, 0.16443, 0.173565,
      ],
    }),
    action("玄掷玲珑伤害·单次", AttackType.Burst, ElementType.Hydro, {
      hp: [
        0.04872, 0.052374, 0.056028, 0.0609, 0.064554, 0.068208, 0.07308, 0.077952, 0.082824, 0.087696, 0.092568,
        0.09744, 0.10353, 0.10962, 0.11571,
      ],
    }),
  ];
  otherSkill = [
    action("2命·入彀者，多多益善", AttackType.Burst, ElementType.Hydro, {
      hp: [0.14],
    }),
  ];
  buffs: IBuffBase[] = [
    ...S_80_CRITAL_19P,
    {
      label: "猜先有方",
      describe: "队伍存在1/2/3/4种元素类型的角色时，夜兰的生命值上限提升6%/12%/18%/30%",
      effect: [
        {
          type: BuffType.HPPrcent,
          getValue: (_, s) => {
            return [6, 12, 18, 30][s - 1] || 6;
          },
        },
      ],
      enable: true,
      stackable: true,
      stack: 3,
      limit: 4,
      stackText: "元素种类",
    },
    {
      label: "妙转随心",
      describe:
        "「玄掷玲珑」存在期间，能使队伍中自己的当前场上角色造成的伤害提高1%，并且每1秒进一步提高3.5%，至多使角色造成的伤害提高50%",
      effect: [
        {
          type: BuffType.GlobalPrcent,
          getValue: (_, s) => {
            return 1 + 3.5 * s;
          },
        },
      ],
      enable: true,
      stackable: true,
      stack: 0,
      limit: 14,
      stackText: "存在时间",
      shareable: true,
      target: BuffTarget.All,
    },
    Constellation_Q_3,
    {
      label: "4命·诓惑者，接树移花",
      describe:
        "依照「络命丝」标记敌人的数量，每次标记将在爆发时使队伍中所有角色的生命值上限提升10%，通过这种方式，生命值上限至多获得40%提升",
      effect: [
        {
          type: BuffType.HPPrcent,
          getValue: (_, s) => {
            return 10 * s;
          },
        },
      ],
      enable: true,
      stackable: true,
      stack: 0,
      limit: 4,
      stackText: "标记数量",
      shareable: true,
      condition: ({ constellation }) => constellation >= 4,
      target: BuffTarget.All,
    },
    Constellation_E_5,
    {
      label: "6命·取胜者，大小通吃",
      describe:
        "施放渊图玲珑骰后，夜兰将进入「运筹帷幄」状态： 夜兰的普通攻击将转为发射特殊的「破局矢」。这种箭矢具有与破局矢近似的特性，造成的伤害视为重击伤害，能造成破局矢156%的伤害",
      effect: [
        {
          type: BuffType.StrongRate,
          getValue: () => 56,
          special: "Yelan",
        },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![夜兰](https://enka.network/ui/UI_AvatarIcon_Yelan.png) */
export const Yelan = new YelanData();
