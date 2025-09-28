import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_GEO_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000100, "卡齐娜")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Geo)
@BaseData(Rarity.Four, [11799, 217, 792], 70, [12615, 271, 847])
@Icons("UI_AvatarIcon_Kachina")
export class KachinaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["嵴之啮咬", "出击，冲天转转！", "现在，认真时间！"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.493984, 0.534192, 0.5744, 0.63184, 0.672048, 0.718, 0.781184, 0.844368, 0.907552, 0.97648, 1.045408, 1.114336,
        1.183264, 1.252192, 1.32112,
      ],
    }),
    action("二段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.27569, 0.29813, 0.32057, 0.352627, 0.375067, 0.400713, 0.435975, 0.471238, 0.506501, 0.544969, 0.583437,
        0.621906, 0.660374, 0.698843, 0.737311,
      ],
    }),
    action("二段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.306323, 0.331257, 0.35619, 0.391809, 0.416742, 0.445238, 0.484418, 0.523599, 0.56278, 0.605523, 0.648266,
        0.691009, 0.733751, 0.776494, 0.819237,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.704271, 0.761596, 0.81892, 0.900812, 0.958136, 1.02365, 1.113731, 1.203812, 1.293894, 1.392164, 1.490434,
        1.588705, 1.686975, 1.785246, 1.883516,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.774361, 0.837391, 0.90042, 0.990462, 1.053491, 1.125525, 1.224571, 1.323617, 1.422664, 1.530714, 1.638764,
        1.746815, 1.854865, 1.962916, 2.070966,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        1.1266, 1.2183, 1.31, 1.441, 1.5327, 1.6375, 1.7816, 1.9257, 2.0698, 2.227, 2.3842, 2.5414, 2.6986, 2.8558,
        3.013,
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
    action("冲天转转搭乘伤害", AttackType.Skill, ElementType.Geo, {
      def: [
        0.8776, 0.94342, 1.00924, 1.097, 1.16282, 1.22864, 1.3164, 1.40416, 1.49192, 1.57968, 1.66744, 1.7552, 1.8649,
        1.9746, 2.0843,
      ],
    }),
    action("冲天转转独立伤害", AttackType.Skill, ElementType.Geo, {
      def: [
        0.6376, 0.68542, 0.73324, 0.797, 0.84482, 0.89264, 0.9564, 1.02016, 1.08392, 1.14768, 1.21144, 1.2752, 1.3549,
        1.4346, 1.5143,
      ],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Geo, {
      def: [
        3.805672, 4.1366, 4.4252, 4.81, 5.0986, 5.3872, 5.772, 6.1568, 6.5416, 6.9264, 7.3112, 7.696, 8.177, 8.658,
        9.139,
      ],
    }),
  ];
  otherSkill = [
    action("6命·这一次，我一定要赢", AttackType.Other, ElementType.Geo, {
      def: [2],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_GEO_24P,
    {
      label: "山的回声",
      describe: "队伍中的附近的角色触发「夜魂迸发」后，卡齐娜的岩元素伤害加成提升20%",
      effect: [{ type: BuffType.GeoPrcent, getValue: () => 20 }],
      enable: true,
    },
    {
      label: "坚岩之重",
      describe: "冲天转转造成的伤害提升，提升值相当于卡齐娜的防御力的20%",
      effect: [
        {
          type: BuffType.SkillFixed,
          getValue: (data) => (data.baseDEF + data.extraDEF + data.extraDEF_NT) * 0.2,
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
    },
    Constellation_E_3,
    {
      label: "4命·敌人越多，越要小心",
      describe:
        "现在，认真时间！的超级钻钻领域中，存在的敌人数量为1/2/3/4名或更多时，领域中的队伍中当前场上角色的防御力提升8%/12%/16%/20%",
      effect: [{ type: BuffType.DEFPrcent, getValue: (_, s) => [8, 12, 16, 20][s - 1] || 0 }],
      enable: true,
      stackable: true,
      stack: 4,
      limit: 4,
      shareable: true,
      target: BuffTarget.All,
      stackText: "敌人数量",
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_Q_5,
  ];
}

/** ![卡齐娜](https://enka.network/ui/UI_AvatarIcon_Kachina.png) */
export const Kachina = new KachinaData();
