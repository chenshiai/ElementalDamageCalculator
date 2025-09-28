import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_GEO_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000055, "五郎")
@Weapon(WeaponType.Bow)
@Element(ElementType.Geo)
@BaseData(Rarity.Four, [9570, 183, 648], 80, [10232, 229, 693])
@Icons("UI_AvatarIcon_Gorou")
export class GorouData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["呲牙裂扇箭", "犬坂吠吠方圆阵", "兽牙逐突形胜战法"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.37754, 0.40827, 0.439, 0.4829, 0.51363, 0.54875, 0.59704, 0.64533, 0.69362, 0.7463, 0.79898, 0.85166, 0.90434,
        0.95702, 1.0097,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.37152, 0.40176, 0.432, 0.4752, 0.50544, 0.54, 0.58752, 0.63504, 0.68256, 0.7344, 0.78624, 0.83808, 0.88992,
        0.94176, 0.9936,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.4945, 0.53475, 0.575, 0.6325, 0.67275, 0.71875, 0.782, 0.84525, 0.9085, 0.9775, 1.0465, 1.1155, 1.1845,
        1.2535, 1.3225,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.58996, 0.63798, 0.686, 0.7546, 0.80262, 0.8575, 0.93296, 1.00842, 1.08388, 1.1662, 1.24852, 1.33084, 1.41316,
        1.49548, 1.5778,
      ],
    }),
    action("瞄准射击", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.4386, 0.4743, 0.51, 0.561, 0.5967, 0.6375, 0.6936, 0.7497, 0.8058, 0.867, 0.9282, 0.9894, 1.0506, 1.1118,
        1.173,
      ],
    }),
    action("满蓄力瞄准射击", AttackType.Strong, ElementType.Geo, {
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
    action(
      "技能伤害",
      AttackType.Skill,
      ElementType.Geo,
      {
        atk: [
          1.072, 1.1524, 1.2328, 1.34, 1.4204, 1.5008, 1.608, 1.7152, 1.8224, 1.9296, 2.0368, 2.144, 2.278, 2.412,
          2.546,
        ],
      },
      "Gorou"
    ),
  ];
  burstSkill = [
    action(
      "技能伤害",
      AttackType.Burst,
      ElementType.Geo,
      {
        def: [
          0.98216, 1.055822, 1.129484, 1.2277, 1.301362, 1.375024, 1.47324, 1.571456, 1.669672, 1.767888, 1.866104,
          1.96432, 2.08709, 2.20986, 2.33263,
        ],
      },
      "Gorou"
    ),
    action(
      "岩晶崩破伤害",
      AttackType.Burst,
      ElementType.Geo,
      {
        def: [
          0.613, 0.658975, 0.70495, 0.76625, 0.812225, 0.8582, 0.9195, 0.9808, 1.0421, 1.1034, 1.1647, 1.226, 1.302625,
          1.37925, 1.455875,
        ],
      },
      "Gorou"
    ),
  ];
  otherSkill = [
    action("4命·犬舐·温如水", AttackType.Heal, ElementType.None, {
      def: [0.5],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_GEO_24P,
    {
      label: "大将旗指物",
      describe: "领域内的当前场上角色防御力提升，队伍中存在3名及以上岩元素角色时，岩元素伤害增加15%",
      effect: [
        {
          type: BuffType.DEFFixed,
          getValue: (data) => {
            return [206, 222, 237, 258, 273, 289, 309, 330, 350, 371, 392, 412, 438, 464, 490][
              data.skillLevel + data.skillLevelAdd - 1
            ];
          },
          actionOn: ActionOn.Indirect,
        },
        { type: BuffType.GeoPrcent, getValue: (_, s) => (s >= 3 ? 15 : 0) },
      ],
      enable: false,
      stackable: true,
      stackText: "岩元素角色数量",
      stack: 0,
      limit: 3,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "不畏风雨",
      describe: "施放兽牙逐突形胜战法后的12秒内，附近的队伍中所有角色的防御力提升25%",
      effect: [{ type: BuffType.DEFPrcent, getValue: () => 25 }],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "报恩之守",
      describe:
        "基于防御力，五郎的以下攻击造成的伤害提高，犬坂吠吠方圆阵的技能伤害提高值：防御力的156%；兽牙逐突形胜战法的技能伤害与岩晶崩破伤害提高值：防御力的15.6%",
      effect: [
        {
          type: BuffType.SkillFixed,
          getValue: (data) => (data.baseDEF + data.extraDEF + data.extraDEF_NT) * 1.56,
          actionOn: ActionOn.External,
          special: "Gorou",
        },
        {
          type: BuffType.BurstFixed,
          getValue: (data) => (data.baseDEF + data.extraDEF + data.extraDEF_NT) * 0.156,
          actionOn: ActionOn.External,
          special: "Gorou",
        },
      ],
      enable: true,
    },
    Constellation_E_3,
    Constellation_Q_5,
    {
      label: "6命·犬勇•忠如山",
      describe:
        "施放犬坂吠吠方圆阵或兽牙逐突形胜战法后的12秒内，依据施放时的领域等级，提高附近的队伍中所有角色岩元素伤害的暴击伤害【10，20，40】",
      effect: [{ type: BuffType.GeoPrcent, getValue: (_, s) => [10, 20, 40][s - 1] || 0 }],
      enable: false,
      stackable: true,
      stackText: "岩元素角色数量",
      stack: 0,
      limit: 3,
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![五郎](https://enka.network/ui/UI_AvatarIcon_Gorou.png) */
export const Gorou = new GorouData();
