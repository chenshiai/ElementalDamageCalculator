import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import {
  ActionOn,
  AttackType,
  BuffTarget,
  BuffType,
  ElementType,
  EnchantingType,
  Rarity,
  WeaponType,
} from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "../decorator";
import { Constellation_E_3, Constellation_Q_5, S_80_CRITAL_19P } from "../buffs";

@EnKaId(10000049, "宵宫")
@Weapon(WeaponType.Bow)
@Element(ElementType.Pyro)
@BaseData(Rarity.Five, 10164, 323, 615, 60)
@Icons("UI_AvatarIcon_Yoimiya")
class YoimiyaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["烟火打扬", "焰硝庭火舞", "琉金云间草"];
  normalAttack = [
    action("一段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.356, 0.381, 0.405, 0.437, 0.462, 0.49, 0.527, 0.563, 0.599, 0.636, 0.672],
    }),
    action("一段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.356, 0.381, 0.405, 0.437, 0.462, 0.49, 0.527, 0.563, 0.599, 0.636, 0.672],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.684, 0.73, 0.777, 0.839, 0.886, 0.94, 1.01, 1.08, 1.15, 1.22, 1.29],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.889, 0.95, 1.01, 1.091, 1.154, 1.222, 1.313, 1.404, 1.495, 1.586, 1.677],
    }),
    action("四段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.464, 0.496, 0.528, 0.57, 0.601, 0.638, 0.686, 0.733, 0.781, 0.828, 0.876],
    }),
    action("四段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.464, 0.496, 0.528, 0.57, 0.601, 0.638, 0.686, 0.733, 0.781, 0.828, 0.876],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [1.059, 1.131, 1.203, 1.299, 1.371, 1.456, 1.564, 1.672, 1.78, 1.889, 1.997],
    }),
    action("瞄准射击", AttackType.Strong, ElementType.Physical, {
      atk: [0.439, 0.474, 0.51, 0.561, 0.597, 0.638, 0.694, 0.75, 0.806, 0.867, 0.928],
    }),
    action("满蓄力瞄准射击", AttackType.Strong, ElementType.Pyro, {
      atk: [1.24, 1.33, 1.43, 1.55, 1.64, 1.74, 1.86, 1.98, 2.11, 2.23, 2.36],
    }),
    action("焰硝矢伤害", AttackType.Strong, ElementType.Pyro, {
      atk: [0.16, 0.18, 0.19, 0.21, 0.22, 0.23, 0.25, 0.26, 0.28, 0.3, 0.31],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.2],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
    }),
  ];
  elementSkill = [];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [1.27, 1.38, 1.46, 1.59, 1.69, 1.78, 1.91, 2.04, 2.16, 2.29, 2.42, 2.54, 2.7],
    }),
    action("琉金火光爆炸伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [1.22, 1.31, 1.4, 1.53, 1.62, 1.71, 1.83, 1.95, 2.07, 2.2, 2.32, 2.44, 2.59],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_CRITAL_19P,
    {
      label: "元素战技·焰硝庭火舞",
      describe: "将宵宫的普通攻击发射的箭矢转为炽焰箭，造成的伤害转为火元素伤害，并提高普通攻击造成的伤害",
      effect: [
        { type: BuffType.Transform, getValue: () => EnchantingType[ElementType.Pyro] },
        {
          type: BuffType.NormalRate,
          getValue: (data) => {
            return [37.9, 40.2, 42.5, 45.4, 47.7, 49.9, 52.9, 55.8, 58.8, 61.7, 64.7, 67.7, 70.6][
              data.skillLevel + data.skillLevelAdd - 1
            ];
          },
        },
      ],
      enable: true,
    },
    {
      label: "袖火百景图",
      describe: "在焰硝庭火舞的持续期间内，宵宫的普通攻击命中后，将为宵宫提供2%火元素伤害加成。至多叠加10次",
      effect: [{ type: BuffType.PyroPrcent, getValue: (_, s) => s * 2 }],
      enable: true,
      stackable: true,
      stack: 10,
      limit: 10,
    },
    {
      label: "炎昼风物诗",
      describe:
        "施放琉金云间草后，附近的队伍中所有其它角色（不包括宵宫自己）攻击力提高10%。此外，依据宵宫自己施放琉金云间草时固有天赋「袖火百景图」的叠加层数，将额外提升上述的攻击力效果，每层提升1%攻击力",
      effect: [{ type: BuffType.ATKPrcent, getValue: (_, s) => 10 + s }],
      enable: false,
      shareable: true,
      stackable: true,
      stack: 10,
      limit: 10,
      stackText: "「袖火百景图」",
      target: BuffTarget.Other,
    },
    {
      label: "1命·赤玉琉金",
      describe: "琉金火光影响下的敌人在持续期间内被击败时，宵宫的攻击力提高20%",
      effect: [{ type: BuffType.ATKPrcent, getValue: () => 20 }],
      enable: false,
      condition: ({ constellation }) => constellation >= 1,
    },
    {
      label: "2命·万灯送火",
      describe: "宵宫的火元素伤害造成暴击后的6秒内，宵宫获得25%火元素伤害加成",
      effect: [{ type: BuffType.PyroPrcent, getValue: () => 25 }],
      enable: false,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_E_3,
    Constellation_Q_5,
  ];
}

/** ![宵宫](https://enka.network/ui/UI_AvatarIcon_Yoimiya.png) */
export const Yoimiya = new YoimiyaData();
