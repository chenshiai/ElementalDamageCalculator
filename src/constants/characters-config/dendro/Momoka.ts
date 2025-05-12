import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "../decorator";
import { A_80_HP_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000061, "绮良良")
@Weapon(WeaponType.Sword)
@Element(ElementType.Dendro)
@BaseData(Rarity.Four, 12180, 223, 546, 60)
@Icons("UI_AvatarIcon_Momoka")
class MomokaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["普通攻击·箱纸切削术", "呜喵町飞足", "秘法·惊喜特派"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.479, 0.518, 0.557, 0.613, 0.652, 0.696, 0.758, 0.819, 0.88, 0.947, 1.014],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.464, 0.501, 0.539, 0.593, 0.631, 0.674, 0.733, 0.792, 0.852, 0.916, 0.981],
    }),
    action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.254, 0.275, 0.296, 0.325, 0.346, 0.37, 0.402, 0.435, 0.467, 0.503, 0.538],
    }),
    action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.381, 0.412, 0.443, 0.488, 0.519, 0.554, 0.603, 0.652, 0.701, 0.754, 0.807],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.733, 0.792, 0.852, 0.937, 0.997, 1.065, 1.159, 1.252, 1.346, 1.448, 1.551],
    }),
    action("重击伤害·1", AttackType.Strong, ElementType.Physical, {
      atk: [0.224, 0.242, 0.26, 0.286, 0.304, 0.325, 0.354, 0.382, 0.411, 0.442, 0.474],
    }),
    action("重击伤害·2", AttackType.Strong, ElementType.Physical, {
      atk: [0.448, 0.484, 0.52, 0.572, 0.609, 0.651, 0.708, 0.765, 0.822, 0.885, 0.947],
    }),
    action("重击伤害·3", AttackType.Strong, ElementType.Physical, {
      atk: [0.448, 0.484, 0.52, 0.572, 0.609, 0.651, 0.708, 0.765, 0.822, 0.885, 0.947],
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
  ];
  elementSkill = [
    action("甩尾飞踢伤害", AttackType.Skill, ElementType.Dendro, {
      atk: [1.04, 1.118, 1.196, 1.3, 1.378, 1.456, 1.56, 1.664, 1.758, 1.872, 1.976, 2.08, 2.21],
    }),
    action("猫箱急件冲撞伤害", AttackType.Skill, ElementType.Dendro, {
      atk: [0.336, 0.361, 0.386, 0.42, 0.445, 0.47, 0.504, 0.538, 0.571, 0.605, 0.638, 0.672, 0.714],
    }),
    action("护盾吸收量", AttackType.Shield, ElementType.None, {
      hp: [0.1, 0.108, 0.115, 0.125, 0.132, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2, 0.213],
      fixed: [962, 1058, 1163, 1275, 1395, 1524, 1660, 1804, 1957, 2117, 2285, 2462, 2646],
    }),
    action("护盾吸收量上限", AttackType.Shield, ElementType.None, {
      hp: [0.16, 0.172, 0.184, 0.2, 0.212, 0.224, 0.24, 0.256, 0.272, 0.288, 0.304, 0.32, 0.34],
      fixed: [1541, 1695, 1862, 2042, 2235, 2440, 2659, 2890, 3134, 3391, 3660, 3943, 4238],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Dendro, {
      atk: [5.702, 6.13, 6.558, 7.128, 7.556, 7.983, 8.554, 9.124, 9.694, 10.264, 10.835, 11.405, 12.118],
    }),
    action("猫草豆蔻爆炸伤害", AttackType.Burst, ElementType.Dendro, {
      atk: [0.356, 0.383, 0.41, 0.446, 0.472, 0.499, 0.535, 0.57, 0.606, 0.642, 0.677, 0.713, 0.757],
    }),
  ];
  otherSkill = [
    action("4命·韦驮骏足", AttackType.Burst, ElementType.Dendro, {
      atk: [2],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_HP_24P,
    {
      label: "应时惑目之灵",
      describe:
        "基于绮良良的生命值上限，每1000点生命值上限将使呜喵町飞足造成的伤害提升0.4%，秘法·惊喜特派造成的伤害提升0.3%",
      effect: [
        {
          type: BuffType.SkillPrcent,
          getValue: (data) => ((data.baseHP + data.extraHP + data.extraHP_NT) * 0.4) / 1000,
          actionOn: ActionOn.Indirect,
        },
        {
          type: BuffType.BurstPrcent,
          getValue: (data) => ((data.baseHP + data.extraHP + data.extraHP_NT) * 0.3) / 1000,
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: true,
    },
    Constellation_E_3,
    Constellation_Q_5,
    {
      label: "6命·沿途百景会心",
      describe: "绮良良施放元素战技或元素爆发后的15秒内，附近的队伍中所有角色获得12%所有元素伤害加成",
      effect: [
        { type: BuffType.PyroPrcent, getValue: () => 12 },
        { type: BuffType.HydroPrcent, getValue: () => 12 },
        { type: BuffType.ElectroPrcent, getValue: () => 12 },
        { type: BuffType.CryoPrcent, getValue: () => 12 },
        { type: BuffType.AnemoPrcent, getValue: () => 12 },
        { type: BuffType.GeoPrcent, getValue: () => 12 },
        { type: BuffType.DendroPrcent, getValue: () => 12 },
      ],
      shareable: true,
      condition: ({ constellation }) => constellation >= 6,
      target: BuffTarget.All,
      enable: false,
    },
  ];
}

/** ![绮良良](https://enka.network/ui/UI_AvatarIcon_Momoka.png) */
export const Momoka = new MomokaData();
