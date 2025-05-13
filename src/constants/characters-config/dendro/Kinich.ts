import Character from "../character-class";
import { ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Constellation_E_3, Constellation_Q_5, S_80_CRITALHUNT_38P } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "../decorator";

@EnKaId(10000101, "基尼奇")
@Weapon(WeaponType.GreatSword)
@Element(ElementType.Dendro)
@BaseData(Rarity.Five, 12858, 332, 802, 70)
@Icons("UI_AvatarIcon_Kinich")
class KinichData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["普通攻击·锐锋攫猎", "音火锻淬", "豹烈律动！"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.99, 1.07, 1.151, 1.266, 1.347, 1.439, 1.565, 1.692, 1.819, 1.957, 2.095],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.829, 0.897, 0.964, 1.06, 1.128, 1.205, 1.311, 1.417, 1.523, 1.639, 1.755],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [1.235, 1.336, 1.436, 1.58, 1.68, 1.795, 1.953, 2.111, 2.269, 2.441, 2.614],
    }),
    action("空中普通攻击伤害", AttackType.Normal, ElementType.Physical, {
      atk: [1.677, 1.814, 1.95, 2.145, 2.282, 2.438, 2.652, 2.867, 3.081, 3.315, 3.549],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [0.484, 0.524, 0.563, 0.619, 0.659, 0.704, 0.766, 0.828, 0.89, 0.957, 1.025].map((i) => i * 3),
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.746, 0.807, 0.867, 0.954, 1.015, 1.084, 1.18, 1.275, 1.37, 1.474, 1.579],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.49, 1.61, 1.73, 1.91, 2.03, 2.17, 2.36, 2.55, 2.74, 2.95, 3.16],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.86, 2.01, 2.17, 2.38, 2.53, 2.71, 2.95, 3.18, 3.42, 3.68, 3.94],
    }),
  ];
  elementSkill = [
    action("环绕射击伤害", AttackType.Skill, ElementType.Dendro, {
      atk: [0.573, 0.616, 0.659, 0.716, 0.759, 0.802, 0.859, 0.916, 0.974, 1.031, 1.088, 1.146, 1.217],
    }),
    action(
      "迴猎贯鳞炮伤害",
      AttackType.Skill,
      ElementType.Dendro,
      {
        atk: [6.874, 7.39, 7.906, 8.593, 9.109, 9.624, 10.312, 10.999, 11.686, 12.374, 13.061, 13.749, 14.607],
      },
      "Kinich"
    ),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Dendro, {
      atk: [1.34, 1.441, 1.541, 1.675, 1.776, 1.876, 2.01, 2.144, 2.278, 2.412, 2.546, 2.68, 2.848],
    }),
    action("龙息伤害", AttackType.Burst, ElementType.Dendro, {
      atk: [1.207, 1.298, 1.388, 1.509, 1.6, 1.69, 1.811, 1.932, 2.053, 2.173, 2.294, 2.415, 2.566],
    }),
  ];
  otherSkill = [
    action(
      "基尼奇·6命弹射",
      AttackType.Skill,
      ElementType.Dendro,
      {
        atk: [7],
      },
      "Kinich"
    ),
  ];
  buffs = [
    ...S_80_CRITALHUNT_38P,
    {
      label: "焰灵的契约",
      describe:
        "队伍中的附近的角色触发「夜魂迸发」后，赋予一层「猎人心得」，至多叠加2层。每层「猎人心得」使迴猎贯鳞炮伤害提高，基于基尼奇攻击力的320%",
      effect: [
        {
          type: BuffType.SkillFixed,
          getValue(data, s) {
            return (data.baseATK + data.extraATK + data.extraATK_NT) * 3.2 * s;
          },
          actionOn: ActionOn.External,
          special: "Kinich",
        },
      ],
      enable: false,
      stackText: "猎人心得",
      limit: 2,
      stack: 2,
      stackable: true,
    },
    {
      label: "1命·七鹦之喙",
      describe: "迴猎贯鳞炮的暴击伤害提升100%",
      effect: [{ type: BuffType.SkillCritcalHurt, getValue: () => 100, special: "Kinich" }],
      condition: ({ constellation }) => constellation >= 1,
      enable: true,
    },
    {
      label: "2命·星虎之掌",
      describe: "迴猎贯鳞炮首次造成的伤害提升100%",
      effect: [{ type: BuffType.SkillPrcent, getValue: () => 100, special: "Kinich" }],
      condition: ({ constellation }) => constellation >= 2,
      enable: true,
    },
    Constellation_E_3,
    Constellation_Q_5,
  ];
}

/**
 * ![基尼奇](https://enka.network/ui/UI_AvatarIcon_Kinich.png)
 */
export const Kinich = new KinichData(); 