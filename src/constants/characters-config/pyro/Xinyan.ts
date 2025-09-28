import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_ATK_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000044, "辛焱")
@Weapon(WeaponType.GreatSword)
@Element(ElementType.Pyro)
@BaseData(Rarity.Four, [11201, 249, 799], 60, [11976, 311, 854])
@Icons("UI_AvatarIcon_Xinyan")
export class XinyanData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["炎舞", "热情拂扫", "叛逆刮弦"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.7654, 0.8277, 0.89, 0.979, 1.0413, 1.1125, 1.2104, 1.3083, 1.4062, 1.513, 1.6198, 1.7266, 1.8334, 1.9402,
        2.047,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.7396, 0.7998, 0.86, 0.946, 1.0062, 1.075, 1.1696, 1.2642, 1.3588, 1.462, 1.5652, 1.6684, 1.7716, 1.8748,
        1.978,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.9546, 1.0323, 1.11, 1.221, 1.2987, 1.3875, 1.5096, 1.6317, 1.7538, 1.887, 2.0202, 2.1534, 2.2866, 2.4198,
        2.553,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        1.15842, 1.25271, 1.347, 1.4817, 1.57599, 1.68375, 1.83192, 1.98009, 2.12826, 2.2899, 2.45154, 2.61318, 2.77482,
        2.93646, 3.0981,
      ],
    }),
    action("重击循环伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.625455, 0.676364, 0.727273, 0.8, 0.850909, 0.909091, 0.989091, 1.069091, 1.149091, 1.236364, 1.323636,
        1.410909, 1.498182, 1.585455, 1.672727,
      ],
    }),
    action("重击终结伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        1.1309, 1.22295, 1.315, 1.4465, 1.53855, 1.64375, 1.7884, 1.93305, 2.0777, 2.2355, 2.3933, 2.5511, 2.7089,
        2.8667, 3.0245,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        0.745878, 0.806589, 0.8673, 0.95403, 1.014741, 1.084125, 1.179528, 1.274931, 1.370334, 1.47441, 1.578486,
        1.682562, 1.786638, 1.890714, 1.99479,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.49144, 1.612836, 1.734233, 1.907656, 2.029052, 2.167791, 2.358556, 2.549322, 2.740087, 2.948195, 3.156303,
        3.364411, 3.572519, 3.780627, 3.988735,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.862889, 2.01452, 2.16615, 2.382765, 2.534396, 2.707688, 2.945964, 3.184241, 3.422517, 3.682455, 3.942393,
        4.202331, 4.462269, 4.722207, 4.982145,
      ],
    }),
  ];
  elementSkill = [
    action("挥舞伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [
        1.696, 1.8232, 1.9504, 2.12, 2.2472, 2.3744, 2.544, 2.7136, 2.8832, 3.0528, 3.2224, 3.392, 3.604, 3.816, 4.028,
      ],
    }),
    action("持续伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [
        0.336, 0.3612, 0.3864, 0.42, 0.4452, 0.4704, 0.504, 0.5376, 0.5712, 0.6048, 0.6384, 0.672, 0.714, 0.756, 0.798,
      ],
    }),
    action("一级护盾吸收量", AttackType.Shield, ElementType.None, {
      def: [
        1.0404, 1.11843, 1.19646, 1.3005, 1.37853, 1.45656, 1.5606, 1.66464, 1.76868, 1.87272, 1.97676, 2.0808, 2.21085,
        2.3409, 2.47095,
      ],
      fixed: [
        500.55273, 550.615, 604.84906, 663.255, 725.83276, 792.58246, 863.5039, 938.5973, 1017.8625, 1101.2996,
        1188.9084, 1280.6892, 1376.6418, 1476.7662, 1581.0626,
      ],
    }),
    action("二级护盾吸收量", AttackType.Shield, ElementType.None, {
      def: [
        1.224, 1.3158, 1.4076, 1.53, 1.6218, 1.7136, 1.836, 1.9584, 2.0808, 2.2032, 2.3256, 2.448, 2.601, 2.754, 2.907,
      ],
      fixed: [
        588.88556, 647.78235, 711.58716, 780.3, 853.92096, 932.44995, 1015.88696, 1104.232, 1197.4852, 1295.6465,
        1398.7158, 1506.6931, 1619.5786, 1737.3721, 1860.0736,
      ],
    }),
    action("三级护盾吸收量", AttackType.Shield, ElementType.None, {
      def: [1.44, 1.548, 1.656, 1.8, 1.908, 2.016, 2.16, 2.304, 2.448, 2.592, 2.736, 2.88, 3.06, 3.24, 3.42],
      fixed: [
        692.8066, 762.09686, 837.1613, 918, 1004.61285, 1097, 1195.1611, 1299.0966, 1408.8062, 1524.29, 1645.548,
        1772.5802, 1905.3866, 2043.9672, 2188.322,
      ],
    }),
  ];
  burstSkill = [
    action(
      "技能伤害",
      AttackType.Burst,
      ElementType.Physical,
      {
        atk: [
          3.408, 3.6636, 3.9192, 4.26, 4.5156, 4.7712, 5.112, 5.4528, 5.7936, 6.1344, 6.4752, 6.816, 7.242, 7.668,
          8.094,
        ],
      },
      "Xinyan"
    ),
    action("火元素持续伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [0.4, 0.43, 0.46, 0.5, 0.53, 0.56, 0.6, 0.64, 0.68, 0.72, 0.76, 0.8, 0.85, 0.9, 0.95],
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
