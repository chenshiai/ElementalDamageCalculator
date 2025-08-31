import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_HP_24P, Constellation_E_5, Constellation_Q_3 } from "../buffs";

@EnKaId(10000080, "米卡")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Cryo)
@BaseData(Rarity.Four, [12506, 223, 713], 70, [13371, 279, 763])
@Icons("UI_AvatarIcon_Mika")
export class MikaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["西风枪术·镝传", "星霜的流旋", "苍翎的颂愿"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.433, 0.468, 0.503, 0.553, 0.589, 0.629, 0.684, 0.74, 0.795, 0.855, 0.916],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.415, 0.449, 0.483, 0.531, 0.565, 0.603, 0.656, 0.709, 0.763, 0.82, 0.878],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.545, 0.589, 0.634, 0.697, 0.742, 0.792, 0.862, 0.932, 1.001, 1.077, 1.154],
    }),
    action("四段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.276, 0.299, 0.321, 0.353, 0.376, 0.401, 0.437, 0.472, 0.507, 0.546, 0.584],
    }),
    action("四段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.276, 0.299, 0.321, 0.353, 0.376, 0.401, 0.437, 0.472, 0.507, 0.546, 0.584],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.709, 0.766, 0.824, 0.907, 0.964, 1.03, 1.121, 1.212, 1.302, 1.401, 1.5],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [1.128, 1.219, 1.311, 1.442, 1.534, 1.639, 1.783, 1.927, 2.071, 2.229, 2.386],
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
    action("霜流矢伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [0.672, 0.722, 0.773, 0.84, 0.89, 0.941, 1.008, 1.075, 1.142, 1.21, 1.277, 1.344, 1.428],
    }),
    action("冰星信标伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [0.84, 0.903, 0.966, 1.05, 1.113, 1.176, 1.26, 1.344, 1.428, 1.512, 1.596, 1.68, 1.785],
    }),
    action("冰星破片伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [0.252, 0.271, 0.29, 0.315, 0.334, 0.353, 0.378, 0.403, 0.428, 0.454, 0.479, 0.504, 0.536],
    }),
  ];
  burstSkill = [
    action("施放回复量", AttackType.Heal, ElementType.None, {
      hp: [0.122, 0.131, 0.14, 0.152, 0.161, 0.17, 0.183, 0.195, 0.207, 0.219, 0.231, 0.243, 0.259],
      fixed: [1172, 1289, 1416, 1553, 1700, 1856, 2022, 2198, 2383, 2579, 2784, 2999, 3223],
    }),
    action("鹰翎回复量", AttackType.Heal, ElementType.None, {
      hp: [0.024, 0.026, 0.028, 0.03, 0.032, 0.034, 0.036, 0.039, 0.041, 0.044, 0.046, 0.049, 0.052],
      fixed: [234, 257, 283, 310, 339, 370, 404, 439, 476, 515, 556, 599, 643],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...A_80_HP_24P,
    {
      label: "速射牵制",
      describe:
        "星霜的流旋的灵风状态将获得侦明效果强化，使角色处于场上时，造成的物理伤害提升10%(普通情况最高3层，开启元素爆发后最高4层，解锁6命后最高5层)",
      effect: [{ type: BuffType.PhysicalPrcent, getValue: (_, s) => s * 10 }],
      stack: 0,
      limit: 5,
      stackText: "侦明",
      stackable: true,
      shareable: true,
      target: BuffTarget.All,
      enable: true,
    },
    Constellation_Q_3,
    Constellation_E_5,
    {
      label: "6命·依随的策援",
      describe: "处于灵风状态下的当前场上角色，其物理伤害的暴击伤害提高60%",
      effect: [{ type: BuffType.PhysicalCritcalHurt, getValue: () => 60 }],
      shareable: true,
      condition: ({ constellation }) => constellation >= 6,
      target: BuffTarget.All,
      enable: false,
    },
  ];
}

/** ![米卡](https://enka.network/ui/UI_AvatarIcon_Mika.png) */
export const Mika = new MikaData();
