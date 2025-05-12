import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "../decorator";
import { A_80_ATK_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000044, "辛焱")
@Weapon(WeaponType.GreatSword)
@Element(ElementType.Pyro)
@BaseData(Rarity.Four, 11201, 249, 799, 60)
@Icons("UI_AvatarIcon_Xinyan")
class XinyanData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["普通攻击·炎舞", "热情拂扫", "叛逆刮弦"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.765, 0.828, 0.89, 0.979, 1.041, 1.113, 1.21, 1.308, 1.406, 1.513, 1.62],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.74, 0.8, 0.86, 0.946, 1.006, 1.075, 1.17, 1.264, 1.359, 1.462, 1.565],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.955, 1.032, 1.11, 1.211, 1.3, 1.388, 1.51, 1.632, 1.754, 1.887, 2.02],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [1.158, 1.253, 1.347, 1.482, 1.576, 1.684, 1.832, 1.98, 2.128, 2.29, 2.452],
    }),
    action("重击循环伤害", AttackType.Strong, ElementType.Physical, {
      atk: [0.626, 0.676, 0.727, 0.8, 0.851, 0.909, 0.989, 1.069, 1.149, 1.239, 1.324],
    }),
    action("重击终结伤害", AttackType.Strong, ElementType.Physical, {
      atk: [1.13, 1.22, 1.32, 1.45, 1.54, 1.64, 1.79, 1.93, 2.08, 2.24, 2.39],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.746, 0.807, 0.867, 0.954, 1.015, 1.084, 1.18, 1.275, 1.37, 1.474, 1.579],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.4, 1.61, 1.73, 1.91, 2.03, 2.17, 2.36, 2.55, 2.74, 2.95, 3.16],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.86, 2.02, 2.17, 2.38, 2.53, 2.71, 2.95, 3.18, 3.42, 3.68, 3.94],
    }),
  ];
  elementSkill = [
    action("挥舞伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [1.7, 1.82, 1.95, 2.12, 2.25, 2.37, 2.54, 2.71, 2.88, 3.05, 3.22, 3.39, 3.6],
    }),
    action("持续伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [0.336, 0.361, 0.386, 0.42, 0.445, 0.474, 0.504, 0.538, 0.571, 0.605, 0.638, 0.672, 0.714],
    }),
    action("一级护盾吸收量", AttackType.Shield, ElementType.None, {
      def: [1.04, 1.118, 1.196, 1.301, 1.379, 1.457, 1.561, 1.665, 1.769, 1.873, 1.977, 2.081, 2.211, 2.341],
      fixed: [501, 551, 605, 663, 726, 793, 864, 939, 1018, 1101, 1189, 1281, 1377, 1477],
    }),
    action("二级护盾吸收量", AttackType.Shield, ElementType.None, {
      def: [1.224, 1.316, 1.408, 1.53, 1.622, 1.714, 1.836, 1.958, 2.081, 2.203, 2.326, 2.448, 2.601, 2.754],
      fixed: [589, 648, 712, 780, 854, 932, 116, 1104, 1197, 1296, 1399, 1507, 1620, 1737],
    }),
    action("三级护盾吸收量", AttackType.Shield, ElementType.None, {
      def: [1.44, 1.548, 1.656, 1.8, 1.908, 2.016, 2.16, 2.304, 2.448, 2.592, 2.736, 2.88, 3.06, 3.24],
      fixed: [693, 762, 837, 918, 1005, 1097, 1195, 1299, 1409, 1524, 1646, 1773, 1905, 2044],
    }),
  ];
  burstSkill = [
    action(
      "技能伤害",
      AttackType.Burst,
      ElementType.Physical,
      {
        atk: [3.4, 3.66, 3.92, 4.26, 4.52, 4.77, 5.11, 5.45, 5.79, 6.13, 6.48, 6.82, 7.24, 7.67],
      },
      "Xinyan"
    ),
    action("火元素持续伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [0.4, 0.43, 0.46, 0.5, 0.53, 0.56, 0.6, 0.64, 0.68, 0.72, 0.76, 0.8, 0.85, 0.9],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...A_80_ATK_24P,
    {
      label: "「这才是摇滚！」",
      describe: "处于热情拂扫的护盾保护下的角色造成的物理伤害提高15%",
      effect: [{ type: BuffType.PhysicalPrcent, getValue: () => 15 }],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "2命·开场即兴段",
      describe: "叛逆刮弦造成的物理伤害暴击率提升100%",
      effect: [{ type: BuffType.BurstCritcal, getValue: () => 100, special: "Xinyan" }],
      enable: true,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_E_3,
    {
      label: "4命·节奏的传染",
      describe: "热情拂扫的伤害，会使敌人的物理抗性降低15%",
      effect: [{ type: BuffType.EnemyPhysicalResistance, getValue: () => -15 }],
      enable: false,
      condition: ({ constellation }) => constellation >= 4,
      shareable: true,
      target: BuffTarget.Enemy,
    },
    Constellation_Q_5,
    {
      label: "6命·地狱里摇摆",
      describe: "重击时，将基于防御力的50%加成获得攻击力加成",
      effect: [
        {
          type: BuffType.ATKFixed,
          getValue: (data) => {
            return (data.baseDEF + data.extraDEF) * 0.5;
          },
          actionOn: ActionOn.Indirect,
          transform: true,
        },
      ],
      enable: false,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![辛焱](https://enka.network/ui/UI_AvatarIcon_Xinyan.png) */
export const Xinyan = new XinyanData();
