import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_ATK_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000076, "珐露珊")
@Weapon(WeaponType.Bow)
@Element(ElementType.Anemo)
@BaseData(Rarity.Four, [9570, 196, 628], 80, [10232, 246, 671])
@Icons("UI_AvatarIcon_Faruzan")
export class FaruzanData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["迴身箭术", "非想风天", "抟风秘道"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.447295, 0.483702, 0.52011, 0.572121, 0.608529, 0.650137, 0.70735, 0.764562, 0.821774, 0.884187, 0.9466,
        1.009013, 1.071427, 1.13384, 1.196253,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.421864, 0.456202, 0.49054, 0.539594, 0.573932, 0.613175, 0.667134, 0.721094, 0.775053, 0.833918, 0.892783,
        0.951648, 1.010512, 1.069377, 1.128242,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.531635, 0.574907, 0.61818, 0.68, 0.723271, 0.772725, 0.840725, 0.908725, 0.976724, 1.050906, 1.125088,
        1.199269, 1.273451, 1.347632, 1.421814,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.706206, 0.763688, 0.82117, 0.903287, 0.960769, 1.026463, 1.116791, 1.20712, 1.297449, 1.395989, 1.494529,
        1.59307, 1.69161, 1.790151, 1.888691,
      ],
    }),
    action("瞄准射击", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.4386, 0.4743, 0.51, 0.561, 0.5967, 0.6375, 0.6936, 0.7497, 0.8058, 0.867, 0.9282, 0.9894, 1.0506, 1.1118,
        1.173,
      ],
    }),
    action("满蓄力瞄准射击", AttackType.Strong, ElementType.Anemo, {
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
    action("技能伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [
        1.488, 1.5996, 1.7112, 1.86, 1.9716, 2.0832, 2.232, 2.3808, 2.5296, 2.6784, 2.8272, 2.976, 3.162, 3.348, 3.534,
      ],
    }),
    action("风压塌陷风涡伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [1.08, 1.161, 1.242, 1.35, 1.431, 1.512, 1.62, 1.728, 1.836, 1.944, 2.052, 2.16, 2.295, 2.43, 2.565],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [
        3.776, 4.0592, 4.3424, 4.72, 5.0032, 5.2864, 5.664, 6.0416, 6.4192, 6.7968, 7.1744, 7.552, 8.024, 8.496, 8.968,
      ],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...A_80_ATK_24P,
    {
      label: "元素爆发·烈风波",
      describe: "降低敌人的风元素抗性30%；所有角色获得风元素伤害加成。",
      effect: [
        {
          type: BuffType.EnemyAnemoResistance,
          getValue: () => -30,
        },
        {
          type: BuffType.AnemoPrcent,
          getValue: (data) => {
            let a = [18, 19.4, 20.7, 22.5, 23.9, 25.2, 27, 28.8, 30.6, 32.4, 34.2, 36, 38.25, 40.5, 42.75];
            return a[data.burstLevel + data.burstLevelAdd - 1];
          },
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: false,
      shareable: true,
    },
    {
      label: "七窟遗智",
      describe:
        "处于抟风秘道的「祈风之赐」效果下的角色的普通攻击、重击、下落攻击、元素战技或元素爆发对敌人造成风元素伤害时，会产生烈风护持效果：基于珐露珊基础攻击力的32%，提高造成的伤害",
      effect: [{ type: BuffType.AnemoFixed, getValue: (data) => data.baseATK * 0.32, actionOn: ActionOn.External }],
      enable: false,
      shareable: true,
    },
    Constellation_E_3,
    Constellation_Q_5,
    {
      label: "6命·妙道合真",
      describe: "处于抟风秘道的「祈风之赐」效果影响下的角色，造成风元素伤害时的暴击伤害提升40%",
      effect: [{ type: BuffType.AnemoCritcalHurt, getValue: () => 40 }],
      enable: false,
      shareable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![珐露珊](https://enka.network/ui/UI_AvatarIcon_Faruzan.png) */
export const Faruzan = new FaruzanData();
