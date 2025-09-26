import Character from "../character-class";
import { ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Constellation_E_3, Constellation_Q_5, S_80_CRITALHUNT_38P } from "../buffs";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";

@EnKaId(10000066, "神里绫人")
@Weapon(WeaponType.Sword)
@Element(ElementType.Hydro)
@BaseData(Rarity.Five, [13715, 299, 769], 80, [14690, 366, 823])
@Icons("UI_AvatarIcon_Ayato")
export class AyatoData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["神里流·转", "神里流·镜花", "神里流·水囿"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.449617, 0.486213, 0.52281, 0.575091, 0.611688, 0.653512, 0.711022, 0.768531, 0.82604, 0.888777, 0.951514,
        1.014251, 1.076989, 1.139726, 1.202463,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.471572, 0.509956, 0.54834, 0.603174, 0.641558, 0.685425, 0.745742, 0.80606, 0.866377, 0.932178, 0.997979,
        1.06378, 1.12958, 1.195381, 1.261182,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.586124, 0.633832, 0.68154, 0.749694, 0.797402, 0.851925, 0.926894, 1.001864, 1.076833, 1.158618, 1.240403,
        1.322188, 1.403972, 1.485757, 1.567542,
      ],
    }),
    action("四段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.294485, 0.318455, 0.342425, 0.376667, 0.400637, 0.428031, 0.465698, 0.503365, 0.541031, 0.582122, 0.623213,
        0.664304, 0.705395, 0.746487, 0.787577,
      ],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.756043, 0.817582, 0.87912, 0.967032, 1.02857, 1.0989, 1.195603, 1.292306, 1.38901, 1.494504, 1.6, 1.705493,
        1.810987, 1.916482, 2.021976,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        1.295297, 1.400728, 1.506159, 1.656775, 1.762206, 1.882699, 2.048376, 2.214054, 2.379731, 2.56047, 2.741209,
        2.921948, 3.102688, 3.283427, 3.464166,
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
    action("水影伤害", AttackType.Skill, ElementType.Hydro, {
      atk: [
        1.0148, 1.0974, 1.18, 1.298, 1.3806, 1.475, 1.6048, 1.7346, 1.8644, 2.006, 2.1476, 2.2892, 2.4308, 2.5724,
        2.714,
      ],
    }),
    action(
      "一段瞬水剑伤害",
      AttackType.Normal,
      ElementType.Hydro,
      {
        atk: [
          0.5289, 0.57195, 0.615, 0.6765, 0.71955, 0.76875, 0.8364, 0.90405, 0.9717, 1.0455, 1.1193, 1.1931, 1.2669,
          1.3407, 1.4145,
        ],
      },
      "Ayato"
    ),
    action(
      "二段瞬水剑伤害",
      AttackType.Normal,
      ElementType.Hydro,
      {
        atk: [
          0.5891, 0.63705, 0.685, 0.7535, 0.80145, 0.85625, 0.9316, 1.00695, 1.0823, 1.1645, 1.2467, 1.3289, 1.4111,
          1.4933, 1.5755,
        ],
      },
      "Ayato"
    ),
    action(
      "三段瞬水剑伤害",
      AttackType.Normal,
      ElementType.Hydro,
      {
        atk: [
          0.6493, 0.70215, 0.755, 0.8305, 0.88335, 0.94375, 1.0268, 1.10985, 1.1929, 1.2835, 1.3741, 1.4647, 1.5553,
          1.6459, 1.7365,
        ],
      },
      "Ayato"
    ),
  ];
  burstSkill = [
    action("水花剑伤害", AttackType.Burst, ElementType.Hydro, {
      atk: [
        0.66456, 0.714402, 0.764244, 0.8307, 0.880542, 0.930384, 0.99684, 1.063296, 1.129752, 1.196208, 1.262664,
        1.32912, 1.41219, 1.49526, 1.57833,
      ],
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
              0.005611, 0.006067, 0.006524, 0.007176, 0.007633, 0.008155, 0.008873, 0.00959, 0.010308, 0.011091,
              0.011874, 0.012657, 0.013439, 0.014222, 0.015005,
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
