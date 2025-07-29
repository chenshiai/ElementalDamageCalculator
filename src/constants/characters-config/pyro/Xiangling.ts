import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_MYSTERY_96, Constellation_E_5, Constellation_Q_3 } from "../buffs";

@EnKaId(10000023, "香菱")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Pyro)
@BaseData(Rarity.Four, 10875, 225, 669, 80)
@Icons("UI_AvatarIcon_Xiangling")
export class XianglingData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["白案功夫", "锅巴出击", "旋火轮"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.421, 0.455, 0.489, 0.538, 0.572, 0.611, 0.665, 0.719, 0.773, 0.831, 0.899],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.421, 0.456, 0.49, 0.539, 0.573, 0.613, 0.666, 0.72, 0.774, 0.833, 0.9],
    }),
    action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.261, 0.282, 0.303, 0.333, 0.355, 0.379, 0.412, 0.445, 0.479, 0.515, 0.557],
    }),
    action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.261, 0.282, 0.303, 0.333, 0.355, 0.379, 0.412, 0.445, 0.479, 0.515, 0.557],
    }),
    action("四段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [0.141, 0.153, 0.164, 0.18, 0.192, 0.205, 0.223, 0.241, 0.259, 0.279, 0.301],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.71, 0.768, 0.826, 0.909, 0.966, 1.03, 1.12, 1.21, 1.31, 1.4, 1.52],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [1.22, 1.32, 1.42, 1.56, 1.66, 1.77, 1.92, 2.08, 2.24, 2.41, 2.6],
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
    action("喷火伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [1.11, 1.2, 1.28, 1.39, 1.47, 1.56, 1.67, 1.78, 1.89, 2, 2.11, 2.23, 2.36],
    }),
  ];
  burstSkill = [
    action("一段挥舞伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [0.72, 0.774, 0.828, 0.9, 0.954, 1.01, 1.08, 1.15, 1.22, 1.3, 1.37, 1.44, 1.53, 1.62],
    }),
    action("二段挥舞伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [0.88, 0.946, 1.01, 1.1, 1.17, 1.23, 1.32, 1.41, 1.5, 1.58, 1.67, 1.76, 1.87, 1.98],
    }),
    action("三段挥舞伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [1.1, 1.18, 1.26, 1.37, 1.45, 1.53, 1.64, 1.75, 1.86, 1.97, 2.08, 2.19, 2.33, 2.47],
    }),
    action("旋火轮伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [1.12, 1.2, 1.29, 1.4, 1.48, 1.57, 1.68, 1.79, 1.9, 2.02, 2.13, 2.24, 2.38, 2.52],
    }),
  ];
  otherSkill = [
    action("2命·大火宽油·内爆", AttackType.Other, ElementType.Pyro, {
      atk: [0.75],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_MYSTERY_96,
    {
      label: "绝云朝天椒",
      describe: "锅巴会在消失的位置留下辣椒。拾取辣椒会提高10%攻击力",
      effect: [{ type: BuffType.ATKPrcent, getValue: () => 10 }],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "1命·外酥里嫩",
      describe: "受到锅巴攻击的敌人，火元素抗性降低15%",
      effect: [{ type: BuffType.EnemyPyroResistance, getValue: () => -15 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 1,
      shareable: true,
      target: BuffTarget.Enemy,
    },
    Constellation_Q_3,
    Constellation_E_5,
    {
      label: "6命·大龙卷旋火轮",
      describe: "旋火轮持续期间，队伍中所有角色获得15%火元素伤害加成",
      effect: [{ type: BuffType.PyroPrcent, getValue: () => 15 }],
      enable: false,
      condition: ({ constellation }) => constellation >= 6,
      shareable: true,
      target: BuffTarget.All,
    },
  ];
}

/** ![香菱](https://enka.network/ui/UI_AvatarIcon_Xiangling.png) */
export const Xiangling = new XianglingData();
