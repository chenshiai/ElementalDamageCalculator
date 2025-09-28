import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_ATK_24P, Constellation_E_5, Constellation_Q_3 } from "../buffs";

@EnKaId(10000021, "安柏")
@Weapon(WeaponType.Bow)
@Element(ElementType.Pyro)
@BaseData(Rarity.Four, [9461, 223, 601], 40, [10116, 279, 642])
@Icons("UI_AvatarIcon_Ambor")
export class AmborData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["神射手", "爆弹玩偶", "箭雨"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.3612, 0.3906, 0.42, 0.462, 0.4914, 0.525, 0.5712, 0.6174, 0.6636, 0.714, 0.7644, 0.8148, 0.8652, 0.9156,
        0.966,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.3612, 0.3906, 0.42, 0.462, 0.4914, 0.525, 0.5712, 0.6174, 0.6636, 0.714, 0.7644, 0.8148, 0.8652, 0.9156,
        0.966,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.4644, 0.5022, 0.54, 0.594, 0.6318, 0.675, 0.7344, 0.7938, 0.8532, 0.918, 0.9828, 1.0476, 1.1124, 1.1772,
        1.242,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.473, 0.5115, 0.55, 0.605, 0.6435, 0.6875, 0.748, 0.8085, 0.869, 0.935, 1.001, 1.067, 1.133, 1.199, 1.265],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.5934, 0.6417, 0.69, 0.759, 0.8073, 0.8625, 0.9384, 1.0143, 1.0902, 1.173, 1.2558, 1.3386, 1.4214, 1.5042,
        1.587,
      ],
    }),
    action("瞄准射击", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.4386, 0.4743, 0.51, 0.561, 0.5967, 0.6375, 0.6936, 0.7497, 0.8058, 0.867, 0.9282, 0.9894, 1.0506, 1.1118,
        1.173,
      ],
    }),
    action("满蓄力瞄准射击", AttackType.Strong, ElementType.Pyro, {
      atk: [1.24, 1.333, 1.426, 1.55, 1.643, 1.736, 1.86, 1.984, 2.108, 2.232, 2.356, 2.48, 2.635, 2.79, 2.945],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        0.568288, 0.614544, 0.6608, 0.72688, 0.773136, 0.826, 0.898688, 0.971376, 1.044064, 1.12336, 1.202656, 1.281952,
        1.361248, 1.440544, 1.51984,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.136335, 1.228828, 1.32132, 1.453452, 1.545944, 1.65165, 1.796995, 1.94234, 2.087686, 2.246244, 2.404802,
        2.563361, 2.721919, 2.880478, 3.039036,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.419344, 1.534872, 1.6504, 1.81544, 1.930968, 2.063, 2.244544, 2.426088, 2.607632, 2.80568, 3.003728, 3.201776,
        3.399824, 3.597872, 3.79592,
      ],
    }),
  ];
  elementSkill = [
    action("爆炸伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [
        1.232, 1.3244, 1.4168, 1.54, 1.6324, 1.7248, 1.848, 1.9712, 2.0944, 2.2176, 2.3408, 2.464, 2.618, 2.772, 2.926,
      ],
    }),
  ];
  burstSkill = [
    action("箭雨单次伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [
        0.2808, 0.30186, 0.32292, 0.351, 0.37206, 0.39312, 0.4212, 0.44928, 0.47736, 0.50544, 0.53352, 0.5616, 0.5967,
        0.6318, 0.6669,
      ],
    }),
    action("箭雨总伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [
        5.0544, 5.43348, 5.81256, 6.318, 6.69708, 7.07616, 7.5816, 8.08704, 8.59248, 9.09792, 9.60336, 10.1088, 10.7406,
        11.3724, 12.0042,
      ],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...A_80_ATK_24P,
    {
      label: "百发百中！",
      describe: "箭雨的暴击率提高10%",
      effect: [
        {
          type: BuffType.BurstCritcal,
          getValue: () => 10,
        },
      ],
      enable: true,
    },
    {
      label: "压制射击",
      describe: "瞄准射击命中弱点时，攻击力提高15%",
      effect: [
        {
          type: BuffType.ATKPrcent,
          getValue: () => 15,
        },
      ],
      enable: false,
    },
    {
      label: "2命·一触即发",
      describe: "主动引爆兔兔伯爵时，会额外造成200%伤害（此增益作用于增伤乘区）",
      effect: [{ type: BuffType.SkillPrcent, getValue: () => 200 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_Q_3,
    Constellation_E_5,
    {
      label: "6命·疾如野火",
      describe: "使用箭雨后的10秒内，队伍中所有角色的移动速度提升15%，攻击力提升15%",
      effect: [{ type: BuffType.ATKPrcent, getValue: () => 15 }],
      enable: false,
      condition: ({ constellation }) => constellation >= 6,
      shareable: true,
      target: BuffTarget.All,
    },
  ];
}

/** ![安柏](https://enka.network/ui/UI_AvatarIcon_Ambor.png) */
export const Ambor = new AmborData();
