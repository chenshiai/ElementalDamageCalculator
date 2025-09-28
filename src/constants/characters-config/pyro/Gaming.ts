import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_ATK_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000092, "嘉明")
@Weapon(WeaponType.GreatSword)
@Element(ElementType.Pyro)
@BaseData(Rarity.Four, [11419, 302, 703], 60, [12208, 378, 752])
@Icons("UI_AvatarIcon_Gaming")
export class GamingData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["刃爪悬星", "瑞兽登高楼", "璨焰金猊舞"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.83856, 0.906815, 0.97507, 1.072577, 1.140832, 1.218838, 1.326095, 1.433353, 1.540611, 1.657619, 1.774627,
        1.891636, 2.008644, 2.125653, 2.242661,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.790443, 0.854782, 0.91912, 1.011032, 1.07537, 1.1489, 1.25, 1.351106, 1.45221, 1.562504, 1.672798, 1.783093,
        1.893387, 2.003682, 2.113976,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        1.06646, 1.153265, 1.24007, 1.364077, 1.450882, 1.550088, 1.686495, 1.822903, 1.959311, 2.108119, 2.256927,
        2.405736, 2.554544, 2.703353, 2.852161,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        1.279491, 1.383635, 1.48778, 1.636558, 1.740703, 1.859725, 2.023381, 2.187037, 2.350692, 2.529226, 2.70776,
        2.886293, 3.064827, 3.24336, 3.421894,
      ],
    }),
    action("重击循环伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.62522, 0.67611, 0.727, 0.7997, 0.85059, 0.90875, 0.98872, 1.06869, 1.14866, 1.2359, 1.32314, 1.41038, 1.49762,
        1.58486, 1.6721,
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
        0.641457, 0.693668, 0.74588, 0.820468, 0.87268, 0.93235, 1.014397, 1.096444, 1.17849, 1.267996, 1.357502,
        1.447007, 1.536513, 1.626018, 1.715524,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.282638, 1.387039, 1.49144, 1.640584, 1.744985, 1.8643, 2.028358, 2.192417, 2.356475, 2.535448, 2.714421,
        2.893394, 3.072366, 3.251339, 3.430312,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.602085, 1.732488, 1.86289, 2.049179, 2.179581, 2.328612, 2.53353, 2.738448, 2.943366, 3.166913, 3.39046,
        3.614007, 3.837553, 4.0611, 4.284647,
      ],
    }),
  ];
  elementSkill = [
    action(
      "下落攻击·踏云献瑞伤害",
      AttackType.Falling,
      ElementType.Pyro,
      {
        atk: [
          2.304, 2.4768, 2.6496, 2.88, 3.0528, 3.2256, 3.456, 3.6864, 3.9168, 4.1472, 4.3776, 4.608, 4.896, 5.184,
          5.472,
        ],
      },
      "Gaming"
    ),
  ];
  burstSkill = [
    action("猊兽·文仔砸击伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [
        3.704, 3.9818, 4.2596, 4.63, 4.9078, 5.1856, 5.556, 5.9264, 6.2968, 6.6672, 7.0376, 7.408, 7.871, 8.334, 8.797,
      ],
    }),
  ];
  otherSkill = [
    action("舞起升平治疗量", AttackType.Heal, ElementType.None, {
      hp: [0.015],
    }),
    action("1命·通明庇佑治疗量", AttackType.Heal, ElementType.None, {
      hp: [0.15],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_ATK_24P,
    {
      label: "祥烟瑞气",
      describe: "嘉明的生命值高于或等于50%时，下落攻击·踏云献瑞造成的伤害提升20%",
      effect: [{ type: BuffType.FallingPrcent, getValue: () => 20, special: "Gaming" }],
      enable: true,
    },
    {
      label: "2命·步踏梅花",
      describe: "嘉明受到治疗时，若此次治疗回复量溢出，嘉明的攻击力将提升20%",
      effect: [{ type: BuffType.ATKPrcent, getValue: () => 20 }],
      condition: (data) => data.constellation >= 2,
      enable: true,
    },
    Constellation_E_3,
    Constellation_Q_5,
    {
      label: "6命·百兽俱驯",
      describe: "下落攻击·踏云献瑞的暴击率提升20%、暴击伤害提升40%",
      effect: [
        { type: BuffType.FallingCritcal, getValue: () => 20, special: "Gaming" },
        { type: BuffType.FallingCritcalHurt, getValue: () => 40, special: "Gaming" },
      ],
      condition: (data) => data.constellation === 6,
      enable: true,
    },
  ];
}

/** ![嘉明](https://enka.network/ui/UI_AvatarIcon_Gaming.png) */
export const Gaming = new GamingData();
