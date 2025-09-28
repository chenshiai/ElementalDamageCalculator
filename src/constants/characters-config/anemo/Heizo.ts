import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_ANEMO_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000059, "鹿野院平藏")
@Weapon(WeaponType.Magic)
@Element(ElementType.Anemo)
@BaseData(Rarity.Four, [10657, 225, 684], 40, [11395, 282, 731])
@Icons("UI_AvatarIcon_Heizo")
export class HeizoData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["不动流格斗术", "勠心拳", "聚风蹴"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [
        0.374736, 0.402841, 0.430946, 0.46842, 0.496525, 0.52463, 0.562104, 0.599578, 0.637051, 0.674525, 0.711998,
        0.749472, 0.796314, 0.843156, 0.89,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [
        0.36852, 0.396159, 0.423798, 0.46065, 0.488289, 0.515928, 0.55278, 0.589632, 0.626484, 0.663336, 0.700188,
        0.73704, 0.783105, 0.82917, 0.875235,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [
        0.5106, 0.548895, 0.58719, 0.63825, 0.676545, 0.71484, 0.7659, 0.81696, 0.86802, 0.91908, 0.97014, 1.0212,
        1.085025, 1.14885, 1.212675,
      ],
    }),
    action("四段伤害·1", AttackType.Normal, ElementType.Anemo, {
      atk: [
        0.147824, 0.158911, 0.17, 0.18478, 0.195867, 0.206954, 0.221736, 0.236518, 0.251301, 0.266083, 0.280866,
        0.295648, 0.314126, 0.332604, 0.351082,
      ],
    }),
    action("四段伤害·2", AttackType.Normal, ElementType.Anemo, {
      atk: [
        0.162608, 0.174804, 0.187, 0.20326, 0.215456, 0.227651, 0.243912, 0.260173, 0.276434, 0.292694, 0.308955,
        0.325216, 0.345542, 0.365868, 0.386194,
      ],
    }),
    action("四段伤害·3", AttackType.Normal, ElementType.Anemo, {
      atk: [
        0.192176, 0.206589, 0.221002, 0.24022, 0.254633, 0.269046, 0.288264, 0.307482, 0.326699, 0.345917, 0.365134,
        0.384352, 0.408374, 0.432396, 0.456418,
      ],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [
        0.614496, 0.660583, 0.70667, 0.76812, 0.814207, 0.860294, 0.921744, 0.983194, 1.044643, 1.106093, 1.167542,
        1.228992, 1.305804, 1.382616, 1.459428,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Anemo, {
      atk: [
        0.73, 0.78475, 0.8395, 0.9125, 0.96725, 1.022, 1.095, 1.168, 1.241, 1.314, 1.387, 1.46, 1.55125, 1.6425,
        1.73375,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Anemo, {
      atk: [
        0.568288, 0.614544, 0.6608, 0.72688, 0.773136, 0.826, 0.898688, 0.971376, 1.044064, 1.12336, 1.202656, 1.281952,
        1.361248, 1.440544, 1.51984,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Anemo, {
      atk: [
        1.136335, 1.228828, 1.32132, 1.453452, 1.545944, 1.65165, 1.796995, 1.94234, 2.087686, 2.246244, 2.404802,
        2.563361, 2.721919, 2.880478, 3.039036,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Anemo, {
      atk: [
        1.419344, 1.534872, 1.6504, 1.81544, 1.930968, 2.063, 2.244544, 2.426088, 2.607632, 2.80568, 3.003728, 3.201776,
        3.399824, 3.597872, 3.79592,
      ],
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [
        2.2752, 2.44584, 2.61648, 2.844, 3.01464, 3.18528, 3.4128, 3.64032, 3.86784, 4.09536, 4.32288, 4.5504, 4.8348,
        5.1192, 5.4036,
      ],
    }),
  ];
  burstSkill = [
    action("不动流·真空弹伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [
        3.14688, 3.382896, 3.618912, 3.9336, 4.169616, 4.405632, 4.72032, 5.035008, 5.349696, 5.664384, 5.979072,
        6.29376, 6.68712, 7.08048, 7.47384,
      ],
    }),
    action("聚风真眼伤害·火", AttackType.Burst, ElementType.Pyro, {
      atk: [
        0.21456, 0.230652, 0.246744, 0.2682, 0.284292, 0.300384, 0.32184, 0.343296, 0.364752, 0.386208, 0.407664,
        0.42912, 0.45594, 0.48276, 0.50958,
      ],
    }),
    action("聚风真眼伤害·水", AttackType.Burst, ElementType.Hydro, {
      atk: [
        0.21456, 0.230652, 0.246744, 0.2682, 0.284292, 0.300384, 0.32184, 0.343296, 0.364752, 0.386208, 0.407664,
        0.42912, 0.45594, 0.48276, 0.50958,
      ],
    }),
    action("聚风真眼伤害·冰", AttackType.Burst, ElementType.Cryo, {
      atk: [
        0.21456, 0.230652, 0.246744, 0.2682, 0.284292, 0.300384, 0.32184, 0.343296, 0.364752, 0.386208, 0.407664,
        0.42912, 0.45594, 0.48276, 0.50958,
      ],
    }),
    action("聚风真眼伤害·雷", AttackType.Burst, ElementType.Electro, {
      atk: [
        0.21456, 0.230652, 0.246744, 0.2682, 0.284292, 0.300384, 0.32184, 0.343296, 0.364752, 0.386208, 0.407664,
        0.42912, 0.45594, 0.48276, 0.50958,
      ],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...A_80_ANEMO_24P,
    {
      label: "元素战技·变格",
      describe:
        "提升下一次勠心拳造成的伤害，至多叠加4层，拥有4层「变格」时，将产生「正论」效果，使下一次勠心拳造成的伤害进一步提高。",
      effect: [
        {
          type: BuffType.SkillAdd,
          getValue: (data, s) => {
            let a =
              [
                0.5688, 0.61146, 0.65412, 0.711, 0.75366, 0.79632, 0.8532, 0.91008, 0.96696, 1.02384, 1.08072, 1.1376,
                1.2087, 1.2798, 1.3509,
              ][data.skillLevel + data.skillLevelAdd - 1] * s;
            let b = [
              1.1376, 1.22292, 1.30824, 1.422, 1.50732, 1.59264, 1.7064, 1.82016, 1.93392, 2.04768, 2.16144, 2.2752,
              2.4174, 2.5596, 2.7018,
            ][data.skillLevel + data.skillLevelAdd - 1];
            if (s === 4) return a + b;
            return a;
          },
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: true,
      stackable: true,
      stack: 4,
      limit: 4,
      stackText: "变格",
      target: BuffTarget.Self,
    },
    {
      label: "因由勘破",
      describe: "勠心拳命中敌人后，队伍中所有角色（不包括鹿野院平藏自己）的元素精通提升80点",
      effect: [{ type: BuffType.MysteryFixed, getValue: () => 80 }],
      enable: false,
      shareable: true,
      target: BuffTarget.Other,
    },
    Constellation_E_3,
    Constellation_Q_5,
    {
      label: "6命·奇想天开捕物帐",
      describe: "施放勠心拳时，每层「变格」都将为本次勠心拳提升4%暴击率。拥有「正论」时，本次勠心拳的暴击伤害将提升32%",
      effect: [
        { type: BuffType.SkillCritcal, getValue: (_, s) => 4 * s },
        { type: BuffType.SkillCritcalHurt, getValue: (_, s) => (s === 4 ? 32 : 0) },
      ],
      enable: false,
      stackable: true,
      stack: 0,
      limit: 4,
      stackText: "变格",
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![鹿野院平藏](https://enka.network/ui/UI_AvatarIcon_Heizo.png) */
export const Heizo = new HeizoData();
