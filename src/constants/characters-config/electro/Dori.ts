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
import { A_80_HP_24P, Constellation_E_5, Constellation_Q_3 } from "../buffs";

@EnKaId(10000068, "多莉")
@Weapon(WeaponType.GreatSword)
@Element(ElementType.Electro)
@BaseData(Rarity.Four, 12397, 223, 723, 80)
@Icons("UI_AvatarIcon_Dori")
class DoriData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["妙显剑舞·改", "镇灵之灯·烦恼解决炮", "卡萨扎莱宫的无微不至"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.902, 0.976, 1.049, 1.154, 1.227, 1.311, 1.427, 1.542, 1.657, 1.783, 1.909],
    }),
    action("二段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.411, 0.444, 0.478, 0.525, 0.559, 0.597, 0.65, 0.702, 0.755, 0.812, 0.859],
    }),
    action("二段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.431, 0.466, 0.501, 0.552, 0.587, 0.627, 0.682, 0.737, 0.792, 0.852, 0.913],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [1.284, 1.388, 1.493, 1.642, 1.747, 1.866, 2.03, 2.195, 2.359, 2.538, 2.717],
    }),
    action("重击循环伤害", AttackType.Strong, ElementType.Physical, {
      atk: [0.625, 0.676, 0.727, 0.8, 0.851, 0.909, 0.989, 1.069, 1.149, 1.236, 1.336],
    }),
    action("重击终结伤害", AttackType.Strong, ElementType.Physical, {
      atk: [1.13, 1.22, 1.32, 1.45, 1.54, 1.64, 1.79, 1.93, 2.08, 2.24, 2.42],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.746, 0.807, 0.867, 0.954, 1.015, 1.084, 1.18, 1.275, 1.37, 1.474, 1.579],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.4, 1.61, 1.73, 1.91, 2.03, 2.17, 2.36, 2.55, 2.74, 2.95, 3.16],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.86, 2.02, 2.17, 2.38, 2.53, 2.71, 2.95, 3.18, 3.42, 3.68, 3.94],
    }),
  ];
  elementSkill = [
    action("断除烦恼炮伤害", AttackType.Skill, ElementType.Electro, {
      atk: [1.473, 1.583, 1.694, 1.841, 1.951, 2.062, 2.209, 2.356, 2.504, 2.651, 2.798, 2.946, 3.13],
    }),
    action("售后服务弹伤害", AttackType.Skill, ElementType.Electro, {
      atk: [0.316, 0.339, 0.363, 0.395, 0.418, 0.442, 0.473, 0.505, 0.537, 0.568, 0.6, 0.631, 0.671],
    }),
  ];
  burstSkill = [
    action("连接伤害", AttackType.Burst, ElementType.Electro, {
      atk: [0.16, 0.17, 0.18, 0.2, 0.21, 0.22, 0.24, 0.25, 0.27, 0.29, 0.3, 0.32, 0.34],
    }),
    action("持续治疗量", AttackType.Heal, ElementType.None, {
      hp: [0.067, 0.072, 0.077, 0.083, 0.088, 0.093, 0.1, 0.107, 0.113, 0.12, 0.127, 0.133, 0.142],
      fixed: [642, 706, 776, 851, 931, 1017, 1107, 1204, 1305, 1412, 1525, 1643, 1766],
    }),
  ];
  otherSkill = [
    action("2命·特许经营", AttackType.Skill, ElementType.Electro, {
      atk: [0.5],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_HP_24P,
    Constellation_Q_3,
    {
      label: "4命·酌盈剂虚",
      describe: "与灯中幽精相连的角色元素能量低于50%时，提升30%元素充能效率",
      effect: [{ type: BuffType.ChargeFixed, getValue: () => 30 }],
      enable: false,
      shareable: true,
      condition: ({ constellation }) => constellation >= 4,
      target: BuffTarget.All,
    },
    Constellation_E_5,
    {
      label: "6命·漫掷万镒",
      describe: "多莉施放镇灵之灯·烦恼解决炮后获得雷元素附魔",
      effect: [{ type: BuffType.Enchanting, getValue: () => EnchantingType[ElementType.Electro] }],
      enable: false,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![多莉](https://enka.network/ui/UI_AvatarIcon_Dori.png) */
export const Dori = new DoriData();
