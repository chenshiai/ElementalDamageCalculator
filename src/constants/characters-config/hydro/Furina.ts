import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import {
  ActionOn,
  AttackType,
  BuffTarget,
  BuffType,
  ElementType,
  EnchantingType,
  Rarity,
  WeaponType,
} from "@/types/enum";
import { Constellation_E_5, Constellation_Q_3, S_80_CRITAL_19P } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000089, "芙宁娜")
@Weapon(WeaponType.Sword)
@Element(ElementType.Hydro)
@BaseData(Rarity.Five, [15307, 244, 696], 60, [16395, 299, 745])
@Icons("UI_AvatarIcon_Furina")
export class FurinaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["独舞之邀", "孤心沙龙", "万众狂欢"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.483862, 0.523246, 0.56263, 0.618893, 0.658277, 0.703287, 0.765177, 0.827066, 0.888955, 0.956471, 1.023987,
        1.091502, 1.159018, 1.226533, 1.294049,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.437293, 0.472886, 0.50848, 0.559328, 0.594922, 0.6356, 0.691533, 0.747466, 0.803398, 0.864416, 0.925434,
        0.986451, 1.047469, 1.108486, 1.169504,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.5512, 0.596065, 0.64093, 0.705023, 0.749888, 0.801162, 0.871665, 0.942167, 1.012669, 1.089581, 1.166493,
        1.243404, 1.320316, 1.397227, 1.474139,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.732978, 0.792639, 0.8523, 0.93753, 0.997191, 1.065375, 1.159128, 1.252881, 1.346634, 1.44891, 1.551186,
        1.653462, 1.755738, 1.858014, 1.96029,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.74218, 0.80259, 0.863, 0.9493, 1.00971, 1.07875, 1.17368, 1.26861, 1.36354, 1.4671, 1.57066, 1.67422, 1.77778,
        1.88134, 1.9849,
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
    action("灵息之刺/流涌之刃伤害", AttackType.Other, ElementType.Hydro, {
      atk: [
        0.0946, 0.1023, 0.11, 0.121, 0.1287, 0.1375, 0.1496, 0.1617, 0.1738, 0.187, 0.2002, 0.2134, 0.2266, 0.2398,
        0.253,
      ],
    }),
  ];
  elementSkill = [
    action("荒性泡沫伤害", AttackType.Skill, ElementType.Hydro, {
      hp: [
        0.07864, 0.084538, 0.090436, 0.0983, 0.104198, 0.110096, 0.11796, 0.125824, 0.133688, 0.141552, 0.149416,
        0.15728, 0.16711, 0.17694, 0.18677,
      ],
    }),
    action(
      "乌瑟勋爵伤害",
      AttackType.Skill,
      ElementType.Hydro,
      {
        hp: [
          0.0596, 0.06407, 0.06854, 0.0745, 0.07897, 0.08344, 0.0894, 0.09536, 0.10132, 0.10728, 0.11324, 0.1192,
          0.12665, 0.1341, 0.14155,
        ],
      },
      "Furina"
    ),
    action(
      "海薇玛夫人伤害",
      AttackType.Skill,
      ElementType.Hydro,
      {
        hp: [
          0.03232, 0.034744, 0.037168, 0.0404, 0.042824, 0.045248, 0.04848, 0.051712, 0.054944, 0.058176, 0.061408,
          0.06464, 0.06868, 0.07272, 0.07676,
        ],
      },
      "Furina"
    ),
    action(
      "谢贝蕾妲小姐伤害",
      AttackType.Skill,
      ElementType.Hydro,
      {
        hp: [
          0.08288, 0.089096, 0.095312, 0.1036, 0.109816, 0.116032, 0.12432, 0.132608, 0.140896, 0.149184, 0.157472,
          0.16576, 0.17612, 0.18648, 0.19684,
        ],
      },
      "Furina"
    ),
    action("众水的歌者治疗量", AttackType.Heal, ElementType.None, {
      hp: [
        0.048, 0.0516, 0.0552, 0.06, 0.0636, 0.0672, 0.072, 0.0768, 0.0816, 0.0864, 0.0912, 0.096, 0.102, 0.108, 0.114,
      ],
      fixed: [
        462.2253, 508.45425, 558.53564, 612.4694, 670.2556, 731.8942, 797.3852, 866.72864, 939.9245, 1016.9728,
        1097.8734, 1182.6265, 1271.232, 1363.69, 1460,
      ],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Hydro, {
      hp: [
        0.114064, 0.122619, 0.131174, 0.14258, 0.151135, 0.15969, 0.171096, 0.182502, 0.193909, 0.205315, 0.216722,
        0.228128, 0.242386, 0.256644, 0.270902,
      ],
    }),
  ];
  otherSkill = [
    action("6命·荒性治疗量", AttackType.Heal, ElementType.None, {
      hp: [0.04],
    }),
  ];
  buffs: IBuffBase[] = [
    ...S_80_CRITAL_19P,
    {
      label: "元素战技·荒性",
      describe:
        "「沙龙成员」进行攻击时，根据附近的队伍中生命值高于50%的角色数量，提升此次攻击的威力，并消耗这些角色的生命值：满足条件的角色数量为1/2/3/4名或更多时，攻击造成的伤害为原本的110%/120%/130%/140%",
      effect: [{ type: BuffType.SkillRate, getValue: (_, s) => [0, 10, 20, 30, 40][s], special: "Furina" }],
      enable: true,
      stack: 4,
      limit: 4,
      stackable: true,
      stackText: "生命高于50%的角色数",
    },
    {
      label: "无人听的自白",
      describe:
        "每1000点生命值上限都将使「沙龙成员」造成的伤害提升0.7%，通过这种方式至多使「沙龙成员」造成的伤害提升28%",
      effect: [
        {
          type: BuffType.SkillPrcent,
          getValue: (data) => Math.min(28, ((data.baseHP + data.extraHP + data.extraHP_NT) / 1000) * 0.7),
          special: "Furina",
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: true,
    },
    {
      label: "元素爆发·「普世欢腾」",
      describe: "基于芙宁娜持有的「气氛值」，附近的队伍中所有角色造成的伤害提升。0命上限300点，解锁1命后上限为400点",
      effect: [
        {
          type: BuffType.GlobalPrcent,
          getValue: (data, s) => {
            return (
              [0.07, 0.09, 0.11, 0.13, 0.15, 0.17, 0.19, 0.21, 0.23, 0.25, 0.27, 0.29, 0.31][
                data.burstLevel + data.burstLevelAdd - 1
              ] * s
            );
          },
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: true,
      stackable: true,
      stack: 300,
      limit: 400,
      stackText: "「气氛值」",
      stackType: "slider",
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "2命·「女人皆善变，仿若水中萍。」",
      describe:
        "万众狂欢持续期间，基于「气氛值」超过上限的部分，每1点「气氛值」都将使芙宁娜的生命值上限提升0.35%。至多通过这种方式使芙宁娜的生命值上限提升140%",
      effect: [{ type: BuffType.HPPrcent, getValue: (_, s) => Math.min(140, s * 0.35) }],
      enable: true,
      stack: 400,
      limit: 400,
      stackable: true,
      stackText: "超过上限的「气氛值」",
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_Q_3,
    Constellation_E_5,
    {
      label: "6命·「诸君听我颂，共举爱之杯！」",
      describe: `施放孤心沙龙时，芙宁娜将获得「万众瞩目」，持续10秒。
      持续期间，芙宁娜的普通攻击、重击与下落攻击将转为无法被附魔覆盖的水元素伤害，且造成的伤害提升，提升值相当于芙宁娜生命值上限的18%；
      始基力：芒性状态下，本次普通攻击（不包括「始基力：圣俗杂座」的攻击）、重击与下落攻击坠地冲击造成的伤害进一步提高，提升值相当于芙宁娜生命值上限的25%`,
      effect: [
        {
          type: BuffType.NormalFixed,
          getValue: (data) => (data.baseHP + data.extraHP + data.extraHP_NT) * 0.43,
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.FallingFixed,
          getValue: (data) => (data.baseHP + data.extraHP + data.extraHP_NT) * 0.43,
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.StrongFixed,
          getValue: (data) => (data.baseHP + data.extraHP + data.extraHP_NT) * 0.43,
          actionOn: ActionOn.External,
        },
        { type: BuffType.Transform, getValue: () => EnchantingType[ElementType.Hydro] },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![芙宁娜](https://enka.network/ui/UI_AvatarIcon_Furina.png) */
export const Furina = new FurinaData();
