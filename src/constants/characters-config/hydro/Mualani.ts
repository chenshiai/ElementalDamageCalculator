import Character from "../character-class";
import { ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Constellation_E_3, Constellation_Q_5, S_80_CRITAL_19P } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "../decorator";

@EnKaId(10000102, "玛拉妮")
@Weapon(WeaponType.Magic)
@Element(ElementType.Hydro)
@BaseData(Rarity.Five, 15185, 182, 570, 60)
@Icons("UI_AvatarIcon_Mualani")
class MualaniData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["普通攻击·降温处理", "踏鲨破浪", "爆瀑飞弹"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [0.514, 0.553, 0.591, 0.642, 0.681, 0.72, 0.771, 0.822, 0.874, 0.925, 1.221],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [0.446, 0.48, 0.513, 0.558, 0.591, 0.625, 0.669, 0.714, 0.759, 0.803, 1.06],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [0.7, 0.753, 0.805, 0.875, 0.928, 0.98, 1.051, 1.121, 1.191, 1.261, 1.663],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Hydro, {
      atk: [1.43, 1.54, 1.64, 1.79, 1.89, 2, 2.14, 2.29, 2.43, 2.57, 3.39],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Hydro, {
      atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.044, 1.123, 1.203],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Hydro, {
      atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Hydro, {
      atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
    }),
  ];
  elementSkill = [
    action("鲨鲨撕咬基础伤害", AttackType.Normal, ElementType.Hydro, {
      hp: [0.0868, 0.0933, 0.0998, 0.1085, 0.115, 0.1215, 0.1302, 0.1389, 0.1476, 0.1562, 0.1649, 0.1736, 0.1845],
    }),
    action(
      "巨浪鲨鲨撕咬伤害",
      AttackType.Normal,
      ElementType.Hydro,
      {
        hp: [0.434, 0.4667, 0.4991, 0.5427, 0.575, 0.6077, 0.651, 0.6953, 0.7379, 0.7811, 0.8247, 0.868, 0.9222],
      },
      "Mualani"
    ),
  ];
  burstSkill = [
    action("爆瀑飞弹", AttackType.Burst, ElementType.Hydro, {
      hp: [0.584, 0.628, 0.672, 0.73, 0.774, 0.818, 0.877, 0.935, 0.993, 1.05, 1.11, 1.169, 1.242],
    }),
  ];
  otherSkill = [];
  buffs = [
    ...S_80_CRITAL_19P,
    {
      label: "1命·悠闲的「梅兹特利」",
      describe:
        "进入夜魂加持状态后的第一次巨浪鲨鲨撕咬及它所触发的鲨鲨飞弹造成的伤害提升，提升值相当于玛拉妮生命值上限的66%",
      effect: [
        {
          type: BuffType.NormalFixed,
          getValue: (data) => {
            return (data.baseHP + data.extraHP + data.extraHP_NT) * 0.66;
          },
          special: "Mualani",
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 1,
    },
    Constellation_E_3,
    {
      label: "4命·鲨鲨主食是豚豚。",
      describe: "爆瀑飞弹造成的伤害提升75%",
      effect: [{ type: BuffType.BurstPrcent, getValue: () => 75 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_Q_5,
    {
      label: "6命·「流泉之众」的精神",
      describe: "1命效果没有次数限制",
      effect: [],
      enable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/**
 * ![玛拉妮](https://enka.network/ui/UI_AvatarIcon_Mualani.png)
 */
export const Mualani = new MualaniData();
