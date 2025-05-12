import Character from "../character-class";
import { ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Constellation_E_3, Constellation_Q_5, S_80_CRITALHUNT_38P } from "../buffs";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "../decorator";

@EnKaId(10000066, "神里绫人")
@Weapon(WeaponType.Sword)
@Element(ElementType.Hydro)
@BaseData(Rarity.Five, 13715, 299, 769, 80)
@Icons("UI_AvatarIcon_Ayato")
class AyatoData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["普通攻击·神里流·转", "神里流·镜花", "神里流·水囿"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.45, 0.486, 0.523, 0.575, 0.612, 0.654, 0.711, 0.769, 0.826, 0.889, 0.952],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.472, 0.51, 0.548, 0.603, 0.642, 0.685, 0.746, 0.806, 0.866, 0.932, 0.998],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.586, 0.634, 0.682, 0.74, 0.797, 0.852, 0.927, 1.002, 1.077, 1.159, 1.24],
    }),
    action("四段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.295, 0.319, 0.342, 0.377, 0.401, 0.428, 0.466, 0.503, 0.541, 0.582, 0.623],
    }),
    action("四段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.295, 0.319, 0.342, 0.377, 0.401, 0.428, 0.466, 0.503, 0.541, 0.582, 0.623],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.756, 0.818, 0.879, 0.967, 1.029, 1.099, 1.196, 1.292, 1.389, 1.495, 1.6],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [1.295, 1.401, 1.516, 1.657, 1.762, 1.883, 2.048, 2.214, 2.38, 2.561, 2.741],
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
    action("水影伤害", AttackType.Skill, ElementType.Hydro, {
      atk: [1.015, 1.097, 1.18, 1.298, 1.381, 1.475, 1.605, 1.735, 1.864, 2.006, 2.148, 2.289, 2.431],
    }),
    action(
      "一段瞬水剑伤害",
      AttackType.Normal,
      ElementType.Hydro,
      {
        atk: [0.529, 0.572, 0.615, 0.677, 0.72, 0.769, 0.836, 0.904, 0.972, 1.046, 1.119, 1.193, 1.267],
      },
      "Ayato"
    ),
    action(
      "二段瞬水剑伤害",
      AttackType.Normal,
      ElementType.Hydro,
      {
        atk: [0.589, 0.637, 0.685, 0.754, 0.802, 0.856, 0.932, 1.007, 1.082, 1.165, 1.247, 1.329, 1.411],
      },
      "Ayato"
    ),
    action(
      "三段瞬水剑伤害",
      AttackType.Normal,
      ElementType.Hydro,
      {
        atk: [0.649, 0.702, 0.755, 0.831, 0.883, 0.944, 1.027, 1.11, 1.193, 1.284, 1.374, 1.468, 1.555],
      },
      "Ayato"
    ),
  ];
  burstSkill = [
    action("水花剑伤害", AttackType.Burst, ElementType.Hydro, {
      atk: [0.665, 0.714, 0.764, 0.831, 0.881, 0.93, 0.997, 1.063, 1.13, 1.196, 1.263, 1.329, 1.412],
    }),
  ];
  otherSkill = [
    action("6命·滥觞无底", AttackType.Normal, ElementType.Hydro, {
      atk: [4.5],
    }),
  ];
  buffs = [
    ...S_80_CRITALHUNT_38P,
    {
      label: "泷廻鉴花·浪闪",
      describe: "「浪闪」效果，基于神里绫人自己当前的生命值上限，提升瞬水剑造成的伤害。浪闪初始至多叠4层，2命解锁5层",
      effect: [
        {
          type: BuffType.NormalFixed,
          getValue: (data, s) => {
            let a = [
              0.0056, 0.0061, 0.0065, 0.0072, 0.0076, 0.0082, 0.0089, 0.0096, 0.0103, 0.0111, 0.0119, 0.0127, 0.0134,
            ][data.skillLevel + data.skillLevelAdd - 1];
            return (data.baseHP + data.extraHP + data.extraHP_NT) * a * s;
          },
          special: "Ayato",
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
      stackable: true,
      stack: 4,
      limit: 5,
      stackText: "浪闪",
    },
    {
      label: "元素爆发·神里流·水囿",
      describe: "展开清净之园囿，熄灭其中一切嚣闹，并提高其中的角色的普通攻击伤害",
      effect: [
        {
          type: BuffType.NormalPrcent,
          getValue: (data) => {
            return [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 20, 20, 20][data.burstLevel + data.burstLevelAdd - 1];
          },
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "1命·镜华风姿",
      describe: `对于生命值低于或等于50%的敌人，瞬水剑造成的伤害提升40%`,
      effect: [{ type: BuffType.NormalPrcent, getValue: () => 40, special: "Ayato" }],
      enable: true,
      condition: ({ constellation }) => constellation >= 1,
    },
    {
      label: "2命·世有源泉",
      describe: `神里绫人处于至少3层浪闪状态下时，将提升50%生命上限`,
      effect: [{ type: BuffType.HPPrcent, getValue: () => 50 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_E_3,
    Constellation_Q_5,
  ];
}

/** ![神里绫人](https://enka.network/ui/UI_AvatarIcon_Ayato.png) */
export const Ayato = new AyatoData();
