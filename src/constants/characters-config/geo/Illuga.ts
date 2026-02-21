import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, SecondElementType, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_MYSTERY_96, Constellation_E_5, Constellation_Q_3 } from "../buffs";

// .replaceAll("%", '').replaceAll(/[\u4e00-\u9fff]+/g, "").replaceAll("\t",",").split(",").map(i=>Math.round(i*100)/10000)

@EnKaId(10000127, "叶洛亚")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Geo, SecondElementType.Moon)
@BaseData(Rarity.Four, [11962, 191, 814], 60, [12790, 240, 870])
@Icons("UI_AvatarIcon_Illuga")
class IllugaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["守誓枪术", "衔莺破晓", "鉴照无影"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.473662, 0.512216, 0.55077, 0.605847, 0.644401, 0.688462, 0.749047, 0.809632, 0.870217, 0.936309, 1.002401,
        1.068494, 1.134586, 1.200679, 1.266771,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.485255, 0.524753, 0.56425, 0.620675, 0.660172, 0.705313, 0.76738, 0.829448, 0.891515, 0.959225, 1.026935,
        1.094645, 1.162355, 1.230065, 1.297775,
      ],
    }),
    action("三段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.31433, 0.339915, 0.3655, 0.40205, 0.427635, 0.456875, 0.49708, 0.537285, 0.57749, 0.62135, 0.66521, 0.70907,
        0.75293, 0.79679, 0.84065,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.762786, 0.824873, 0.88696, 0.975656, 1.037743, 1.1087, 1.206266, 1.303831, 1.401397, 1.507832, 1.614267,
        1.720702, 1.827138, 1.933573, 2.040008,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        1.11026, 1.20063, 1.291, 1.4201, 1.51047, 1.61375, 1.75576, 1.89777, 2.03978, 2.1947, 2.34962, 2.50454, 2.65946,
        2.81438, 2.9693,
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
    action("点按伤害", AttackType.Skill, ElementType.Geo, {
      em: [
        4.8256, 5.18752, 5.54944, 6.032, 6.39392, 6.75584, 7.2384, 7.72096, 8.20352, 8.68608, 9.16864, 9.6512, 10.2544,
        10.8576, 11.4608,
      ],
      def: [
        2.4128, 2.59376, 2.77472, 3.016, 3.19696, 3.37792, 3.6192, 3.86048, 4.10176, 4.34304, 4.58432, 4.8256, 5.1272,
        5.4288, 5.7304,
      ],
    }),
    action("长按伤害", AttackType.Skill, ElementType.Geo, {
      em: [
        6.032, 6.4844, 6.9368, 7.54, 7.9924, 8.4448, 9.048, 9.6512, 10.2544, 10.8576, 11.4608, 12.064, 12.818, 13.572,
        14.326,
      ],
      def: [
        3.016, 3.2422, 3.4684, 3.77, 3.9962, 4.2224, 4.524, 4.8256, 5.1272, 5.4288, 5.7304, 6.032, 6.409, 6.786, 7.163,
      ],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Geo, {
      em: [
        8.272, 8.8924, 9.5128, 10.34, 10.9604, 11.5808, 12.408, 13.2352, 14.0624, 14.8896, 15.7168, 16.544, 17.578,
        18.612, 19.646,
      ],
      def: [
        4.136, 4.4462, 4.7564, 5.17, 5.4802, 5.7904, 6.204, 6.6176, 7.0312, 7.4448, 7.8584, 8.272, 8.789, 9.306, 9.823,
      ],
    }),
  ];
  otherSkill = [
    action("2命·噬枝之麋伤害", AttackType.Burst, ElementType.Geo, {
      em: [4],
      def: [2],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_MYSTERY_96,
    {
      label: "铸灯者的盟约",
      describe:
        "其他角色将获得持续20秒的「执灯之誓」效果：对敌人造成的岩元素伤害，暴击率提升5%，暴击伤害提升10%。<br />月兆·满辉处于「执灯之誓」效果影响下的角色，元素精通提升50点。",
      effect: [
        {
          type: BuffType.GeoCritcal,
          getValue: () => 5,
        },
        {
          type: BuffType.GeoCritcalHurt,
          getValue: () => 10,
        },
        {
          type: BuffType.MysteryFixed,
          getValue: (_, s) => s * 50,
        },
      ],
      shareable: true,
      enable: true,
      stack: 1,
      limit: 1,
      stackable: true,
      stackType: 'switch',
      stackText: "月兆·满辉",
      target: BuffTarget.Other,
      condition: ({ constellation }) => constellation < 6,
    },
    {
      label: "鉴照无影·「夜莺之歌」",
      describe:
        "当前场上角色的普通攻击、重击、下落攻击、元素战技或元素爆发对敌人造成岩元素伤害时，将消耗1层「夜莺之歌」，提升造成的伤害，提升值基于叶洛亚的元素精通；若该伤害为月结晶反应造成的伤害，还会进一步提升造成的伤害。",
      effect: [
        {
          type: BuffType.GeoFixed,
          getValue: (data) => {
            const a = [
              0.336, 0.3612, 0.3864, 0.42, 0.4452, 0.4704, 0.504, 0.5376, 0.5712, 0.6048, 0.6384, 0.672, 0.714, 0.756,
              0.798,
            ][data.burstLevelAdd + data.burstLevel - 1];
            return (data.elementalMystery + data.elementalMystery_NT) * a;
          },
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.MoonCrystalFixed,
          getValue: (data) => {
            const a = [
              2.2592, 2.42864, 2.59808, 2.824, 2.99344, 3.16288, 3.3888, 3.61472, 3.84064, 4.06656, 4.29248, 4.5184,
              4.8008, 5.0832, 5.3656,
            ][data.burstLevelAdd + data.burstLevel - 1];
            return (data.elementalMystery + data.elementalMystery_NT) * a;
          },
          actionOn: ActionOn.External,
        },
      ],
      shareable: true,
      enable: true,
      target: BuffTarget.All,
    },
    {
      label: "狩魔者的黄昏",
      describe:
        "当队伍中存在1/2/3名水元素或岩元素角色时，「夜莺之歌」会进一步提升造成的伤害，提升值相当于叶洛亚元素精通的7%/14%/24%；若上述伤害为月结晶反应造成的伤害，提升值则相当于叶洛亚元素精通的48%/96%/160%。",
      effect: [
        {
          type: BuffType.GeoFixed,
          getValue: (data, s) => {
            const a = [0, 0.07, 0.14, 0.24][s];
            return (data.elementalMystery + data.elementalMystery_NT) * a;
          },
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.MoonCrystalFixed,
          getValue: (data, s) => {
            const a = [0, 0.48, 0.96, 1.60][s];
            return (data.elementalMystery + data.elementalMystery_NT) * a;
          },
          actionOn: ActionOn.External,
        },
      ],
      shareable: true,
      enable: true,
      stack: 3,
      limit: 3,
      stackable: true,
      stackText: "水岩角色数量",
      target: BuffTarget.All,
    },
    Constellation_Q_3,
    {
      label: "4命·逐日之狼",
      describe: "元素爆发鉴照无影中的「魇夜的莺歌」效果持续期间，队伍中附近的当前场上角色防御力提升200点。",
      effect: [{ type: BuffType.DEFFixed, getValue: () => 200 }],
      enable: true,
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_E_5,
    {
      label: "6命·铸灯者的盟约·强化",
      describe:
        "其他角色将获得持续20秒的「执灯之誓」效果：对敌人造成的岩元素伤害，暴击率提升10%，暴击伤害提升30%。<br />月兆·满辉处于「执灯之誓」效果影响下的角色，元素精通提升80点。",
      effect: [
        {
          type: BuffType.GeoCritcal,
          getValue: () => 10,
        },
        {
          type: BuffType.GeoCritcalHurt,
          getValue: () => 30,
        },
        {
          type: BuffType.MysteryFixed,
          getValue: (_, s) => s * 80,
        },
      ],
      shareable: true,
      enable: true,
      stack: 1,
      limit: 1,
      stackable: true,
      stackType: 'switch',
      stackText: "月兆·满辉",
      target: BuffTarget.Other,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![叶洛亚](https://enka.network/ui/UI_AvatarIcon_Illuga.png) */
export const Illuga = new IllugaData();
