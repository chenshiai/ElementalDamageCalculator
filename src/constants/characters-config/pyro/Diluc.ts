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
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { Constellation_E_3, Constellation_Q_5, S_80_CRITAL_19P } from "../buffs";

@EnKaId(10000016, "迪卢克")
@Weapon(WeaponType.GreatSword)
@Element(ElementType.Pyro)
@BaseData(Rarity.Five, 12981, 335, 784, 40)
@Icons("UI_AvatarIcon_Diluc")
export class DilucData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["淬炼之剑", "逆焰之刃", "黎明"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.897, 0.97, 1.04, 1.15, 1.22, 1.3, 1.42, 1.53, 1.65, 1.77, 1.92],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.876, 0.948, 1.02, 1.12, 1.19, 1.27, 1.39, 1.5, 1.61, 1.73, 1.87],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.988, 1.07, 1.15, 1.26, 1.34, 1.44, 1.56, 1.69, 1.82, 1.95, 2.11],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [1.34, 1.45, 1.56, 1.71, 1.82, 1.95, 2.12, 2.29, 2.46, 2.65, 2.86],
    }),
    action("重击循环伤害", AttackType.Strong, ElementType.Physical, {
      atk: [0.688, 0.744, 0.8, 0.88, 0.94, 1, 1.09, 1.18, 1.26, 1.36, 1.47],
    }),
    action("重击终结伤害", AttackType.Strong, ElementType.Physical, {
      atk: [1.25, 1.35, 1.45, 1.6, 1.7, 1.81, 1.97, 2.13, 2.29, 2.47, 2.66],
    }),
    action("下落期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.895, 0.968, 1.04, 1.14, 1.22, 1.3, 1.42, 1.53, 1.64, 1.77, 1.89],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.79, 1.94, 2.08, 2.29, 2.43, 2.6, 2.83, 3.06, 3.29, 3.54, 3.79],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [2.24, 2.42, 2.6, 2.86, 3.04, 3.25, 3.54, 3.82, 4.11, 4.42, 4.73],
    }),
  ];
  elementSkill = [
    action("一段伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [0.944, 1.01, 1.09, 1.18, 1.25, 1.32, 1.42, 1.51, 1.6, 1.7, 1.79, 1.89, 2.01],
    }),
    action(
      "二段伤害",
      AttackType.Skill,
      ElementType.Pyro,
      {
        atk: [0.976, 1.05, 1.12, 1.22, 1.29, 1.37, 1.46, 1.56, 1.66, 1.76, 1.85, 1.95, 2.07],
      },
      "Diluc"
    ),
    action(
      "三段伤害",
      AttackType.Skill,
      ElementType.Pyro,
      {
        atk: [1.29, 1.38, 1.48, 1.61, 1.71, 1.8, 1.93, 2.06, 2.19, 2.32, 2.45, 2.58, 2.74],
      },
      "Diluc"
    ),
  ];
  burstSkill = [
    action("斩击伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [2.04, 2.19, 2.35, 2.55, 2.7, 2.86, 3.06, 3.26, 3.47, 3.67, 3.88, 4.08, 4.34, 4.59],
    }),
    action("持续伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [1.29, 1.38, 1.48, 1.61, 1.71, 1.8, 1.93, 2.06, 2.19, 2.32, 2.45, 2.58, 2.74],
    }),
    action("爆裂伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [1.29, 1.38, 1.48, 1.61, 1.71, 1.8, 1.93, 2.06, 2.19, 2.32, 2.45, 2.58, 2.74],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_CRITAL_19P,
    {
      label: "元素爆发·熔毁之翼",
      describe: "黎明提供的火元素附魔持续时间延长4秒；此外，在效果持续期间，迪卢克获得20%火元素伤害加成",
      effect: [
        { type: BuffType.PyroPrcent, getValue: () => 20 },
        { type: BuffType.Enchanting, getValue: () => EnchantingType[ElementType.Pyro], actionOn: ActionOn.Front },
      ],
      enable: false,
    },
    {
      label: "1命·罪罚裁断",
      describe: "对生命值高于50%的敌人，迪卢克造成的伤害提高15%",
      effect: [{ type: BuffType.GlobalPrcent, getValue: () => 15 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 1,
    },
    {
      label: "2命·炙热余烬",
      describe: "迪卢克受到伤害时，攻击力提高10%，攻击速度提高5%， 该效果至多叠加3层",
      effect: [{ type: BuffType.ATKPrcent, getValue: (_, s) => 10 * s }],
      enable: false,
      stackable: true,
      stack: 3,
      limit: 3,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_E_3,
    {
      label: "4命·流火焦灼",
      describe: "施放逆焰之刃的2秒后，下一段逆焰之刃的伤害提高40%",
      effect: [{ type: BuffType.SkillPrcent, getValue: () => 40, special: "Diluc" }],
      enable: false,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_Q_5,
    {
      label: "6命·清算黑暗的炎之剑",
      describe: "施放逆焰之刃后，接下来6秒内的2次普通攻击的攻击速度提升30%，造成伤害提高30%",
      effect: [{ type: BuffType.NormalPrcent, getValue: () => 30 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![迪卢克](https://enka.network/ui/UI_AvatarIcon_Diluc.png) */
export const Diluc = new DilucData();
