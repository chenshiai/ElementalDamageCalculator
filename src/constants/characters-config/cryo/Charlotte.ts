import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_ATK_24P, Constellation_E_5, Constellation_Q_3 } from "../buffs";

@EnKaId(10000088, "夏洛蒂")
@Weapon(WeaponType.Magic)
@Element(ElementType.Cryo)
@BaseData(Rarity.Four, [10766, 173, 546], 80, [11511, 217, 584])
@Icons("UI_AvatarIcon_Charlotte")
export class CharlotteData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["冷色摄影律", "取景·冰点构图法", "定格·全方位确证"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Cryo, {
      atk: [0.499, 0.536, 0.573, 0.623, 0.661, 0.698, 0.748, 0.798, 0.847, 0.897, 0.947],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Cryo, {
      atk: [0.434, 0.466, 0.499, 0.542, 0.575, 0.607, 0.651, 0.694, 0.737, 0.781, 0.824],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Cryo, {
      atk: [0.646, 0.695, 0.743, 0.808, 0.856, 0.904, 0.969, 1.034, 1.098, 1.163, 1.227],
    }),
    action("重击", AttackType.Strong, ElementType.Cryo, {
      atk: [1.005, 1.081, 1.156, 1.256, 1.332, 1.407, 1.508, 1.608, 1.709, 1.809, 1.91],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Cryo, {
      atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.203],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Cryo, {
      atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Cryo, {
      atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
    }),
    action("灵息之刺伤害", AttackType.Other, ElementType.Cryo, {
      atk: [0.112, 0.12, 0.128, 0.14, 0.148, 0.156, 0.168, 0.179, 0.19, 0.201, 0.212],
    }),
  ];
  elementSkill = [
    action("点按拍照伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [0.672, 0.722, 0.773, 0.84, 0.89, 0.941, 1.008, 1.075, 1.142, 1.21, 1.277, 1.344, 1.428],
    }),
    action("长按拍照伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [1.392, 1.496, 1.601, 1.74, 1.844, 1.949, 2.088, 2.227, 2.366, 2.506, 2.645, 2.784, 2.958],
    }),
    action("「瞬时剪影」印记伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [0.392, 0.421, 0.451, 0.49, 0.519, 0.549, 0.588, 0.627, 0.666, 0.706, 0.745, 0.784, 0.833],
    }),
    action("「聚焦印象」印记伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [0.406, 0.437, 0.467, 0.508, 0.538, 0.568, 0.609, 0.65, 0.69, 0.731, 0.771, 0.812, 0.863],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Cryo, {
      atk: [0.776, 0.834, 0.893, 0.97, 1.028, 1.087, 1.164, 1.242, 1.32, 1.397, 1.475, 1.552, 1.649],
    }),
    action("相机伤害", AttackType.Burst, ElementType.Cryo, {
      atk: [0.065, 0.07, 0.074, 0.081, 0.086, 0.091, 0.097, 0.104, 0.11, 0.116, 0.123, 0.129, 0.137],
    }),
    action("施放治疗量", AttackType.Heal, ElementType.None, {
      atk: [2.566, 2.758, 2.951, 3.207, 3.4, 3.592, 3.849, 4.105, 4.362, 4.618, 4.875, 5.131, 5.452],
      fixed: [1608, 1769, 1944, 2131, 2332, 2547, 2775, 3016, 3271, 3539, 3820, 4115, 4424],
    }),
    action("相机治疗量", AttackType.Heal, ElementType.None, {
      atk: [0.092, 0.099, 0.106, 0.115, 0.122, 0.129, 0.138, 0.147, 0.157, 0.166, 0.175, 0.184, 0.196],
      fixed: [57, 63, 69, 76, 83, 91, 99, 108, 117, 126, 136, 147, 158],
    }),
  ];
  otherSkill = [
    action("6命·「温亨廷先生」协同攻击伤害", AttackType.Burst, ElementType.Cryo, {
      atk: [1.8],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_ATK_24P,
    {
      label: "多样性调查",
      describe:
        "除夏洛蒂自己以外，队伍中每存在1/2/3位枫丹角色，夏洛蒂自己获得5%/10%/15%治疗加成；队伍中每存在1/2/3位非枫丹的角色，都将使夏洛蒂自己获得5%/10%/15%冰元素伤害加成",
      effect: [
        { type: BuffType.HealAdd, getValue: (_, s) => [5, 10, 15][s - 1] || 0 },
        { type: BuffType.CryoPrcent, getValue: (_, s) => [5, 10, 15][3 - s - 1] || 0 },
      ],
      enable: true,
      stackable: true,
      limit: 3,
      stack: 0,
      stackText: "枫丹角色数量",
    },
    {
      label: "2命·以求真为职守",
      describe:
        "施放取景·冰点构图法时，「温亨廷先生」的攻击命中了1/2/3及以上名敌人时，夏洛蒂自身的攻击力提升10%/20%/30%",
      effect: [{ type: BuffType.ATKPrcent, getValue: (_, s) => [10, 20, 30][s - 1] || 0 }],
      enable: false,
      stackable: true,
      limit: 3,
      stack: 3,
      stackText: "命中敌人数量",
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_Q_3,
    {
      label: "4命·以督促为责任",
      describe: "定格·全方位确证命中附有「瞬时剪影」或「聚焦印象」印记的敌人时，造成的伤害提升10%",
      effect: [{ type: BuffType.BurstPrcent, getValue: () => 10 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_E_5,
  ];
}

/** ![夏洛蒂](https://enka.network/ui/UI_AvatarIcon_Charlotte.png) */
export const Charlotte = new CharlotteData();
