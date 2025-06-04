import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "../decorator";
import { A_80_GEO_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000055, "五郎")
@Weapon(WeaponType.Bow)
@Element(ElementType.Geo)
@BaseData(Rarity.Four, 9570, 183, 648, 80)
@Icons("UI_AvatarIcon_Gorou")
class GorouData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["呲牙裂扇箭", "犬坂吠吠方圆阵", "兽牙逐突形胜战法"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.378, 0.408, 0.439, 0.483, 0.514, 0.549, 0.597, 0.645, 0.694, 0.746, 0.799],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.372, 0.402, 0.432, 0.475, 0.505, 0.54, 0.588, 0.635, 0.683, 0.734, 0.786],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.495, 0.535, 0.575, 0.633, 0.673, 0.719, 0.782, 0.845, 0.909, 0.978, 1.047],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.59, 0.638, 0.686, 0.755, 8.03, 0.858, 0.933, 1.008, 1.084, 1.166, 1.249],
    }),
    action("瞄准射击", AttackType.Strong, ElementType.Physical, {
      atk: [0.439, 0.474, 0.51, 0.561, 0.597, 0.638, 0.694, 0.75, 0.806, 0.867, 0.928],
    }),
    action("满蓄力瞄准射击", AttackType.Strong, ElementType.Geo, {
      atk: [1.24, 1.33, 1.43, 1.55, 1.64, 1.74, 1.86, 1.98, 2.11, 2.23, 2.36],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.2],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
    }),
  ];
  elementSkill = [
    action(
      "技能伤害",
      AttackType.Skill,
      ElementType.Geo,
      {
        atk: [1.072, 1.152, 1.233, 1.34, 1.42, 1.501, 1.608, 1.715, 1.822, 1.93, 2.037, 2.144, 2.278],
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
        def: [0.98, 1.06, 1.13, 1.23, 1.3, 1.38, 1.47, 1.57, 1.67, 1.77, 1.87, 1.96, 2.09],
      },
      "Gorou"
    ),
    action(
      "岩晶崩破伤害",
      AttackType.Burst,
      ElementType.Geo,
      {
        def: [0.62, 0.66, 0.7, 0.77, 0.81, 0.86, 0.92, 0.98, 1.04, 1.1, 1.16, 1.23, 1.3],
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
            return [206, 222, 237, 258, 273, 289, 309, 330, 350, 371, 392, 412, 438][
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
