import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "../decorator";
import { Constellation_E_5, Constellation_Q_3, S_80_CHARGE_32P } from "../buffs";

@EnKaId(10000041, "莫娜")
@Weapon(WeaponType.Magic)
@Element(ElementType.Hydro)
@BaseData(Rarity.Five, 10409, 287, 653, 60)
@Icons("UI_AvatarIcon_Mona")
class MonaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["因果点破", "水中幻愿", "星命定轨"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [0.376, 0.404, 0.432, 0.47, 0.498, 0.526, 0.564, 0.602, 0.639, 0.677, 0.714],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [0.36, 0.387, 0.414, 0.45, 0.477, 0.504, 0.54, 0.576, 0.612, 0.648, 0.684],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [0.448, 0.482, 0.515, 0.56, 0.594, 0.627, 0.672, 0.717, 0.762, 0.806, 0.851],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [0.562, 0.604, 0.646, 0.702, 0.744, 0.786, 0.842, 0.899, 0.955, 1.01, 1.07],
    }),
    action("重击", AttackType.Strong, ElementType.Hydro, {
      atk: [1.5, 1.61, 1.72, 1.87, 1.98, 2.1, 2.25, 2.4, 2.55, 2.69, 2.85],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Hydro, {
      atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.203],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Hydro, {
      atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Hydro, {
      atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
    }),
  ];
  elementSkill = [
    action("持续伤害", AttackType.Skill, ElementType.Hydro, {
      atk: [0.32, 0.344, 0.368, 0.4, 0.424, 0.448, 0.48, 0.512, 0.544, 0.576, 0.608, 0.64, 0.68],
    }),
    action("爆裂伤害", AttackType.Skill, ElementType.Hydro, {
      atk: [1.33, 1.43, 1.53, 1.66, 1.76, 1.86, 1.99, 2.12, 2.26, 2.39, 2.52, 2.66, 2.82],
    }),
  ];
  burstSkill = [
    action("泡影破裂伤害", AttackType.Burst, ElementType.Hydro, {
      atk: [4.42, 4.76, 5.09, 5.53, 5.86, 6.19, 6.64, 7.08, 7.52, 7.96, 8.41, 8.85, 9.4, 9.95],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_CHARGE_32P,
    {
      label: "「托付于命运吧!」",
      describe: "莫娜的水元素伤害加成获得额外提升，提升程度相当于她的元素充能效率的20%",
      effect: [
        { type: BuffType.HydroPrcent, getValue: (data) => data.chargeEfficiency * 0.2, actionOn: ActionOn.Indirect },
      ],
      enable: true,
    },
    {
      label: "元素爆发·星命定轨",
      describe: "星异持续时间内，提高目标对象受到的伤害",
      effect: [
        {
          type: BuffType.GlobalPrcent,
          getValue: (data) => {
            return [42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 60, 60, 60, 60][data.burstLevel + data.burstLevelAdd - 1];
          },
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "1命·沉没的预言",
      describe: "队伍中自己的角色攻击命中处于星异状态下的敌人后，蒸发反应造成的伤害提升15%",
      effect: [{ type: BuffType.AmplifiedRate, getValue: () => 15 }],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 1,
    },
    Constellation_Q_3,
    {
      label: "4命·沉没的预言",
      describe: "队伍中所有角色攻击处于星异状态下的敌人时，暴击率提升15%",
      effect: [{ type: BuffType.GlobalCritcal, getValue: () => 15 }],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_E_5,
    {
      label: "6命·厄运的修辞",
      describe:
        "进入虚实流动状态后，每移动1秒，莫娜的下一次重击伤害就增加60%， 通过这种方式至多可以获得180%重击伤害加成",
      effect: [{ type: BuffType.StrongPrcent, getValue: (_, s) => 60 * s }],
      enable: true,
      stack: 3,
      limit: 3,
      stackable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![莫娜](https://enka.network/ui/UI_AvatarIcon_Mona.png) */
export const Mona = new MonaData();
