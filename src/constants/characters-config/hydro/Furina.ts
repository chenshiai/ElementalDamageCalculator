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
      atk: [0.484, 0.523, 0.563, 0.619, 0.658, 0.703, 0.765, 0.827, 0.889, 0.957, 1.024],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.437, 0.473, 0.509, 0.559, 0.595, 0.636, 0.692, 0.748, 0.803, 0.864, 0.925],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.551, 0.596, 0.641, 0.705, 0.75, 0.801, 0.872, 0.942, 1.013, 1.09, 1.167],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.733, 0.793, 0.852, 0.938, 0.997, 1.065, 1.159, 1.253, 1.347, 1.449, 1.551],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [0.742, 0.803, 0.863, 0.949, 1.01, 1.079, 1.174, 1.269, 1.364, 1.467, 1.571],
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
    action("灵息之刺/流涌之刃伤害", AttackType.Other, ElementType.Hydro, {
      atk: [0.095, 0.102, 0.11, 0.121, 0.129, 0.138, 0.15, 0.162, 0.174, 0.187, 0.2],
    }),
  ];
  elementSkill = [
    action("荒性泡沫伤害", AttackType.Skill, ElementType.Hydro, {
      hp: [0.0786, 0.0845, 0.0904, 0.0983, 0.1042, 0.1101, 0.118, 0.1258, 0.1337, 0.1416, 0.1494, 0.1573, 0.1671],
    }),
    action(
      "乌瑟勋爵伤害",
      AttackType.Skill,
      ElementType.Hydro,
      {
        hp: [0.0596, 0.0641, 0.0685, 0.0745, 0.079, 0.0834, 0.0894, 0.0954, 0.1013, 0.1073, 0.1132, 0.1192, 0.1267],
      },
      "Furina"
    ),
    action(
      "海薇玛夫人伤害",
      AttackType.Skill,
      ElementType.Hydro,
      {
        hp: [0.0323, 0.0347, 0.0372, 0.0404, 0.0428, 0.0452, 0.0485, 0.0517, 0.0549, 0.0582, 0.0614, 0.0646, 0.0687],
      },
      "Furina"
    ),
    action(
      "谢贝蕾妲小姐伤害",
      AttackType.Skill,
      ElementType.Hydro,
      {
        hp: [0.0829, 0.0891, 0.0953, 0.1036, 0.1098, 0.116, 0.1243, 0.1326, 0.1409, 0.1492, 0.1575, 0.1658, 0.1761],
      },
      "Furina"
    ),
    action("众水的歌者治疗量", AttackType.Heal, ElementType.None, {
      hp: [0.048, 0.0516, 0.0552, 0.06, 0.0636, 0.0672, 0.072, 0.0768, 0.0816, 0.0864, 0.0912, 0.096, 0.102],
      fixed: [462, 508, 559, 612, 670, 732, 797, 867, 940, 1017, 1098, 1183, 1271],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Hydro, {
      hp: [0.114, 0.123, 0.131, 0.143, 0.151, 0.16, 0.171, 0.183, 0.194, 0.205, 0.217, 0.228, 0.242],
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
