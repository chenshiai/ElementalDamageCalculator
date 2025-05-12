import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "../decorator";
import { A_80_ATK_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000031, "菲谢尔")
@Weapon(WeaponType.Bow)
@Element(ElementType.Electro)
@BaseData(Rarity.Four, 9189, 244, 594, 60)
@Icons("UI_AvatarIcon_Fischl")
class FischlData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["普通攻击·罪灭之矢", "夜巡影翼", "至夜幻现"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.441, 0.477, 0.513, 0.564, 0.6, 0.641, 0.698, 0.754, 0.811, 0.872, 0.934],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.468, 0.506, 0.544, 0.598, 0.636, 0.68, 0.74, 0.8, 0.86, 0.925, 0.99],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.581, 0.629, 0.676, 0.744, 0.791, 0.845, 0.919, 0.994, 1.07, 1.15, 1.23],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.577, 0.624, 0.671, 0.738, 0.785, 0.839, 0.913, 0.986, 1.06, 1.14, 1.22],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.721, 0.779, 0.838, 0.922, 0.98, 1.05, 1.14, 1.23, 1.32, 1.42, 1.53],
    }),
    action("瞄准射击", AttackType.Strong, ElementType.Physical, {
      atk: [0.439, 0.474, 0.51, 0.561, 0.597, 0.638, 0.694, 0.75, 0.806, 0.867, 0.928],
    }),
    action("满蓄力瞄准射击", AttackType.Strong, ElementType.Electro, {
      atk: [1.24, 1.33, 1.43, 1.55, 1.64, 1.74, 1.86, 1.98, 2.11, 2.23, 2.36],
    }),
    action("噬星魔鸦", AttackType.Strong, ElementType.Electro, {
      atk: [1.24, 1.33, 1.43, 1.55, 1.64, 1.74, 1.86, 1.98, 2.11, 2.23, 2.36].map((i) => i * 1.527),
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.123, 1.203],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
    }),
  ];
  elementSkill = [
    action("奥兹攻击伤害", AttackType.Skill, ElementType.Electro, {
      atk: [0.888, 0.955, 1.02, 1.11, 1.18, 1.24, 1.33, 1.42, 1.51, 1.6, 1.69, 1.78, 1.89],
    }),
    action("召唤伤害", AttackType.Skill, ElementType.Electro, {
      atk: [1.15, 1.24, 1.33, 1.44, 1.53, 1.62, 1.73, 1.85, 1.96, 2.08, 2.19, 2.31, 2.45],
    }),
  ];
  burstSkill = [
    action("落雷伤害", AttackType.Burst, ElementType.Electro, {
      atk: [2.08, 2.24, 2.39, 2.6, 2.76, 2.91, 3.12, 3.33, 3.54, 3.74, 3.95, 4.16, 4.42, 4.68],
    }),
  ];
  otherSkill = [
    action("断罪雷影", AttackType.Skill, ElementType.Electro, {
      atk: [0.8],
    }),
    action("1命·幽邃鸦眼", AttackType.Normal, ElementType.Physical, {
      atk: [0.22],
    }),
    action("4命·皇女幻绮谭", AttackType.Burst, ElementType.Electro, {
      atk: [2.22],
    }),
    action("6命·永夜之禽", AttackType.Skill, ElementType.Electro, {
      atk: [0.3],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_ATK_24P,
    {
      label: "2命·圣裁影羽",
      describe: "施放夜巡影翼时，能额外造成200%攻击力的伤害",
      effect: [
        {
          type: BuffType.SkillFixed,
          getValue: (data) => (data.baseATK + data.extraATK + data.extraATK_NT) * 2,
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_E_3,
    Constellation_Q_5,
  ];
}

/** ![菲谢尔](https://enka.network/ui/UI_AvatarIcon_Fischl.png) */
export const Fischl = new FischlData();
