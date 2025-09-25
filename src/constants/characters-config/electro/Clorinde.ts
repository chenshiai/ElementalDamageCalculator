import Character from "../character-class";
import { ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Constellation_E_3, Constellation_Q_5, S_80_CRITAL_19P } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000098, "克洛琳德")
@Weapon(WeaponType.Sword)
@Element(ElementType.Electro)
@BaseData(Rarity.Five, [12956, 337, 784], 60, [13877, 413, 840])
@Icons("UI_AvatarIcon_Clorinde")
export class ClorindeData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["逐影之誓", "狩夜之巡", "残光将终"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.540596, 0.584598, 0.6286, 0.69146, 0.735462, 0.78575, 0.854896, 0.924042, 0.993188, 1.06862, 1.144052,
        1.219484, 1.294916, 1.370348, 1.44578,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.516284, 0.558307, 0.60033, 0.660363, 0.702386, 0.750413, 0.816449, 0.882485, 0.948521, 1.020561, 1.092601,
        1.16464, 1.23668, 1.308719, 1.380759,
      ],
    }),
    action("三段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.34185, 0.369675, 0.3975, 0.43725, 0.465075, 0.496875, 0.5406, 0.584325, 0.62805, 0.67575, 0.72345, 0.77115,
        0.81885, 0.86655, 0.91425,
      ],
    }),
    action("四段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.23134, 0.25017, 0.269, 0.2959, 0.31473, 0.33625, 0.36584, 0.39543, 0.42502, 0.4573, 0.48958, 0.52186, 0.55414,
        0.58642, 0.6187,
      ],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.900102, 0.973366, 1.04663, 1.151293, 1.224557, 1.308288, 1.423417, 1.538546, 1.653675, 1.779271, 1.904867,
        2.030462, 2.156058, 2.281653, 2.407249,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        1.2814, 1.3857, 1.49, 1.639, 1.7433, 1.8625, 2.0264, 2.1903, 2.3542, 2.533, 2.7118, 2.8906, 3.0694, 3.2482,
        3.427,
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
    action("驰猎伤害", AttackType.Normal, ElementType.Electro, {
      atk: [
        0.267632, 0.289416, 0.3112, 0.34232, 0.364104, 0.389, 0.423232, 0.457464, 0.491696, 0.52904, 0.566384, 0.603728,
        0.641072, 0.678416, 0.71576,
      ],
    }),
    action("驰猎伤害·强化", AttackType.Normal, ElementType.Electro, {
      atk: [
        0.38786, 0.41943, 0.451, 0.4961, 0.52767, 0.56375, 0.61336, 0.66297, 0.71258, 0.7667, 0.82082, 0.87494, 0.92906,
        0.98318, 1.0373,
      ],
    }),
    action("贯夜伤害·基础", AttackType.Normal, ElementType.Electro, {
      atk: [
        0.329724, 0.356562, 0.3834, 0.42174, 0.448578, 0.47925, 0.521424, 0.563598, 0.605772, 0.65178, 0.697788,
        0.743796, 0.789804, 0.835812, 0.88182,
      ],
    }),
    action("贯夜伤害·普通", AttackType.Normal, ElementType.Electro, {
      atk: [
        0.439632, 0.475416, 0.5112, 0.56232, 0.598104, 0.639, 0.695232, 0.751464, 0.807696, 0.86904, 0.930384, 0.991728,
        1.053072, 1.114416, 1.17576,
      ],
    }),
    action("贯夜伤害·强化单次", AttackType.Normal, ElementType.Electro, {
      atk: [
        0.25112, 0.27156, 0.292, 0.3212, 0.34164, 0.365, 0.39712, 0.42924, 0.46136, 0.4964, 0.53144, 0.56648, 0.60152,
        0.63656, 0.6716,
      ],
    }),
    action("流涌之刃伤害", AttackType.Other, ElementType.Electro, {
      atk: [
        0.432, 0.4644, 0.4968, 0.54, 0.5724, 0.6048, 0.648, 0.6912, 0.7344, 0.7776, 0.8208, 0.864, 0.918, 0.972, 1.026,
      ],
    }),
  ];
  burstSkill = [
    action("技能伤害·单次", AttackType.Burst, ElementType.Electro, {
      atk: [
        1.2688, 1.36396, 1.45912, 1.586, 1.68116, 1.77632, 1.9032, 2.03008, 2.15696, 2.28384, 2.41072, 2.5376, 2.6962,
        2.8548, 3.0134,
      ],
    }),
  ];
  otherSkill = [
    action("1命·夜巡之影伤害", AttackType.Normal, ElementType.Electro, {
      atk: [0.3],
    }),
    action("6命·夜巡之影伤害", AttackType.Normal, ElementType.Electro, {
      atk: [2],
    }),
  ];
  buffs = [
    ...S_80_CRITAL_19P,
    {
      label: "破夜的明焰",
      describe:
        "队伍中附近的角色对敌人触发雷元素相关反应后，将基于克洛琳德攻击力的20%，提升克洛琳德的普通攻击与残光将终造成的雷元素伤害。至多叠加3层，每层独立计时。通过这种方式至多使克洛琳德的上述攻击造成的伤害提升1800；解锁2命后效果提升50%",
      effect: [
        {
          type: BuffType.NormalFixed,
          getValue: (data, s) =>
            data.constellation >= 2
              ? Math.min(2700, (data.baseATK + data.extraATK + data.extraATK_NT) * 0.3 * s)
              : Math.min(1800, (data.baseATK + data.extraATK + data.extraATK_NT) * 0.2 * s),
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.BurstFixed,
          getValue: (data, s) =>
            data.constellation >= 2
              ? Math.min(2700, (data.baseATK + data.extraATK + data.extraATK_NT) * 0.3 * s)
              : Math.min(1800, (data.baseATK + data.extraATK + data.extraATK_NT) * 0.2 * s),
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
      stackable: true,
      stack: 3,
      limit: 3,
    },
    {
      label: "契令的酬偿",
      describe:
        "如果克洛琳德的生命之契大于或等于生命值上限的100%，生命之契的数值提升或降低时，克洛琳德的暴击率提升10%，至多叠加2层",
      effect: [{ type: BuffType.Critcal, getValue: (_, s) => 10 * s }],
      enable: true,
      stackable: true,
      stack: 2,
      limit: 2,
    },
    Constellation_E_3,
    {
      label: "4命·「铭记泪，生命与仁爱」",
      describe:
        "残光将终对敌人造成伤害时，将根据克洛琳德的当前生命之契百分比提升此次伤害，每1%生命之契都将使此次残光将终造成的伤害提升2%；通过这种方式，至多使残光将终造成的伤害提升200%",
      effect: [{ type: BuffType.BurstPrcent, getValue: (_, s) => 2 * s }],
      enable: true,
      stackable: true,
      stack: 100,
      limit: 100,
      condition: ({ constellation }) => constellation >= 4,
      stackText: "生命之契%",
    },
    Constellation_Q_5,
    {
      label: "6命·「为此，勿将希望弃扬」",
      describe: "施放狩夜之巡后的12秒内，克洛琳德的暴击率提升10%，暴击伤害提升70%",
      effect: [
        { type: BuffType.Critcal, getValue: () => 10 },
        { type: BuffType.CritcalHurt, getValue: () => 70 },
      ],
      condition: ({ constellation }) => constellation >= 6,
      enable: true,
    },
  ];
}

/** ![克洛琳德](https://enka.network/ui/UI_AvatarIcon_Clorinde.png) */
export const Clorinde = new ClorindeData();
