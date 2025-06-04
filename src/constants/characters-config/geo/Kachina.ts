import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "../decorator";
import { A_80_GEO_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";


@EnKaId(10000100, "卡齐娜")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Geo)
@BaseData(Rarity.Four,11799, 217, 792, 70)
@Icons("UI_AvatarIcon_Kachina")
class KachinaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["嵴之啮咬", "出击，冲天转转！", "现在，认真时间！"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.494, 0.534, 0.574, 0.632, 0.672, 0.718, 0.781, 0.844, 0.908, 0.976, 1.045],
    }),
    action("二段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.276, 0.298, 0.321, 0.353, 0.375, 0.401, 0.436, 0.471, 0.506, 0.545, 0.583],
    }),
    action("二段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.306, 0.331, 0.356, 0.392, 0.417, 0.445, 0.484, 0.524, 0.563, 0.606, 0.648],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.704, 0.762, 0.819, 0.901, 0.958, 1.024, 1.114, 1.204, 1.294, 1.392, 1.49],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.774, 0.837, 0.9, 0.99, 1.053, 1.126, 1.225, 1.324, 1.423, 1.531, 1.639],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [1.127, 1.218, 1.31, 1.441, 1.533, 1.638, 1.782, 1.926, 2.07, 2.227, 2.384],
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
  ]
  elementSkill = [
    action("冲天转转搭乘伤害", AttackType.Skill, ElementType.Geo, {
      def: [0.878, 0.943, 1.009, 1.097, 1.163, 1.229, 1.316, 1.404, 1.492, 1.58, 1.667, 1.755, 1.865],
    }),
    action("冲天转转独立伤害", AttackType.Skill, ElementType.Geo, {
      def: [0.638, 0.685, 0.733, 0.797, 0.845, 0.893, 0.956, 1.02, 1.084, 1.148, 1.211, 1.275, 1.355],
    }),
  ]
  burstSkill = [
    action("现在，认真时间！", AttackType.Burst, ElementType.Geo, {
      def: [3.806, 4.137, 4.425, 4.81, 5.099, 5.387, 5.772, 6.157, 6.542, 6.926, 7.311, 7.696, 8.177],
    }),
  ]
  otherSkill = [
    action("6命·这一次，我一定要赢", AttackType.Other, ElementType.Geo, {
      def: [2],
    }),
  ]
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
  ]
}

/** ![卡齐娜](https://enka.network/ui/UI_AvatarIcon_Kachina.png) */
export const Kachina = new KachinaData();
