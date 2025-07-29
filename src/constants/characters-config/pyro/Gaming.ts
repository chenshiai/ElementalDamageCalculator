import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_ATK_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000092, "嘉明")
@Weapon(WeaponType.GreatSword)
@Element(ElementType.Pyro)
@BaseData(Rarity.Four, 11419, 302, 703, 60)
@Icons("UI_AvatarIcon_Gaming")
export class GamingData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["刃爪悬星", "瑞兽登高楼", "璨焰金猊舞"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.839, 0.907, 0.975, 1.073, 1.141, 1.219, 1.326, 1.433, 1.541, 1.658, 1.775],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.79, 0.855, 0.919, 1.011, 1.075, 1.149, 1.25, 1.351, 1.452, 1.563, 1.673],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [1.066, 1.153, 1.24, 1.364, 1.451, 1.55, 1.686, 1.823, 1.959, 2.108, 2.257],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [1.279, 1.384, 1.488, 1.637, 1.741, 1.86, 2.023, 2.187, 2.351, 2.529, 2.708],
    }),
    action("重击循环伤害", AttackType.Strong, ElementType.Physical, {
      atk: [0.625, 0.676, 0.727, 0.8, 0.851, 0.909, 0.989, 1.069, 1.149, 1.236, 1.323],
    }),
    action("重击终结伤害", AttackType.Strong, ElementType.Physical, {
      atk: [1.13, 1.22, 1.32, 1.45, 1.54, 1.64, 1.79, 1.93, 2.08, 2.24, 2.39],
    }),
    action("下落期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.641, 0.694, 0.746, 0.82, 0.873, 0.932, 1.014, 1.096, 1.178, 1.268, 1.358],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.28, 1.39, 1.49, 1.64, 1.74, 1.86, 2.03, 2.19, 2.36, 2.54, 2.71],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.6, 1.73, 1.86, 2.05, 2.18, 2.33, 2.53, 2.74, 2.94, 3.17, 3.39],
    }),
  ];
  elementSkill = [
    action(
      "下落攻击·踏云献瑞",
      AttackType.Falling,
      ElementType.Pyro,
      {
        atk: [2.304, 2.477, 2.65, 2.88, 3.053, 3.226, 3.456, 3.686, 3.917, 4.147, 4.378, 4.608, 4.896],
      },
      "Gaming"
    ),
  ];
  burstSkill = [
    action("猊兽·文仔砸击", AttackType.Burst, ElementType.Pyro, {
      atk: [3.704, 3.982, 4.26, 4.63, 4.908, 5.186, 5.556, 5.926, 6.297, 6.667, 7.038, 7.408, 7.871],
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
