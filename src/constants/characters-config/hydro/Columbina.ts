import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { Constellation_E_3, Constellation_Q_5, S_80_CRITAL_19P } from "../buffs";

// .replaceAll("%", '').replaceAll(/[\u4e00-\u9fff]+/g, "").replaceAll("\t",",").split(",").map(i=>Math.round(i*100)/10000)

@EnKaId(10000125, "哥伦比亚")
@Weapon(WeaponType.Magic)
@Element(ElementType.Hydro)
@BaseData(Rarity.Five, [14695, 96, 515], 60, [15740, 117, 552])
@Icons("UI_AvatarIcon_Columbina")
class ColumbinaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["月露泼降", "万古潮汐", "她的乡愁"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [
        0.46792, 0.503014, 0.538108, 0.5849, 0.62, 0.655088, 0.70188, 0.748672, 0.795464, 0.842256, 0.889048, 0.93584,
        0.99433, 1.05282, 1.11131,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [
        0.366256, 0.393725, 0.421194, 0.45782, 0.485289, 0.512758, 0.549384, 0.58601, 0.622635, 0.659261, 0.695886,
        0.732512, 0.778294, 0.824076, 0.869858,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [
        0.58484, 0.628703, 0.672566, 0.73105, 0.774913, 0.818776, 0.87726, 0.935744, 0.994228, 1.052712, 1.111196,
        1.16968, 1.242785, 1.31589, 1.388995,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Hydro, {
      atk: [
        1.1608, 1.24786, 1.33492, 1.451, 1.53806, 1.62512, 1.7412, 1.85728, 1.97336, 2.08944, 2.20552, 2.3216, 2.4667,
        2.6118, 2.7569,
      ],
    }),
    action("月露涤荡伤害·单次", AttackType.Moon, ElementType.MoonSwirl, {
      hp: [
        0.012595, 0.01354, 0.014484, 0.015744, 0.016689, 0.017633, 0.018893, 0.020152, 0.021412, 0.022671, 0.023931,
        0.02519, 0.026765, 0.028339, 0.029914,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Hydro, {
      atk: [
        0.568288, 0.614544, 0.6608, 0.72688, 0.773136, 0.826, 0.898688, 0.971376, 1.044064, 1.12336, 1.202656, 1.281952,
        1.361248, 1.440544, 1.51984,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Hydro, {
      atk: [
        1.136335, 1.228828, 1.32132, 1.453452, 1.545944, 1.65165, 1.796995, 1.94234, 2.087686, 2.246244, 2.404802,
        2.563361, 2.721919, 2.880478, 3.039036,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Hydro, {
      atk: [
        1.419344, 1.534872, 1.6504, 1.81544, 1.930968, 2.063, 2.244544, 2.426088, 2.607632, 2.80568, 3.003728, 3.201776,
        3.399824, 3.597872, 3.79592,
      ],
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Hydro, {
      hp: [
        0.1672, 0.17974, 0.19228, 0.209, 0.22154, 0.23408, 0.2508, 0.26752, 0.28424, 0.30096, 0.31768, 0.3344, 0.3553,
        0.3762, 0.3971,
      ],
    }),
    action("月轮持续伤害", AttackType.Skill, ElementType.Hydro, {
      hp: [
        0.0936, 0.10062, 0.10764, 0.117, 0.12402, 0.13104, 0.1404, 0.14976, 0.15912, 0.16848, 0.17784, 0.1872, 0.1989,
        0.2106, 0.2223,
      ],
    }),
    action("月轮·月感电伤害", AttackType.Moon, ElementType.MoonElectro, {
      hp: [
        0.05552, 0.059684, 0.063848, 0.0694, 0.073564, 0.077728, 0.08328, 0.088832, 0.094384, 0.099936, 0.105488,
        0.11104, 0.11798, 0.12492, 0.13186,
      ],
    }),
    action("月轮·月绽放伤害·单次", AttackType.Moon, ElementType.MoonSwirl, {
      hp: [0.02, 0.0215, 0.023, 0.025, 0.0265, 0.028, 0.03, 0.032, 0.034, 0.036, 0.038, 0.04, 0.0425, 0.045, 0.0475],
    }),
    action("月轮·月结晶伤害", AttackType.Moon, ElementType.MoonCrystal, {
      hp: [
        0.10416, 0.111972, 0.119784, 0.1302, 0.138012, 0.145824, 0.15624, 0.166656, 0.177072, 0.187488, 0.197904,
        0.20832, 0.22134, 0.23436, 0.24738,
      ],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Hydro, {
      hp: [
        0.3224, 0.34658, 0.37076, 0.403, 0.42718, 0.45136, 0.4836, 0.51584, 0.54808, 0.58032, 0.61256, 0.6448, 0.6851,
        0.7254, 0.7657,
      ],
    }),
  ];
  otherSkill = [
    action("1命·雨海护盾", AttackType.Shield, ElementType.None, {
      hp: [0.12],
    }),
  ];
  buffs: IBuffBase[] = [
    ...S_80_CRITAL_19P,
    {
      label: "月亮诱发的疯狂",
      describe: "触发引力干涉时，哥伦比娅将获得月诱效果，使自身的暴击率提升5%，持续10秒。该效果至多叠加3层。",
      effect: [
        {
          type: BuffType.Critcal,
          getValue: (_, s) => s * 5,
        },
      ],
      enable: true,
      stackable: true,
      stack: 3,
      limit: 3,
      stackText: "月诱",
    },
    {
      label: "月兆祝赐·借汝月光",
      describe:
        "基于哥伦比娅的生命值上限，提升队伍中角色造成的月曜反应的基础伤害：每1000点生命值上限都将提升0.2%月曜反应的基础伤害，至多通过这种方式提升7%伤害。",
      effect: [
        {
          type: BuffType.MoonCrystalBasePercent,
          getValue: (data) => Math.min(7, (2 * (data.baseHP + data.extraHP + data.extraHP_NT)) / 1000),
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.MoonElectroBasePercent,
          getValue: (data) => Math.min(7, (2 * (data.baseHP + data.extraHP + data.extraHP_NT)) / 1000),
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.MoonSwirlBasePercent,
          getValue: (data) => Math.min(7, (2 * (data.baseHP + data.extraHP + data.extraHP_NT)) / 1000),
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "元素爆发·她的乡愁",
      describe: "以无秽的新月之名连接山与海，将身边的大地短暂变换为月之领域，队伍内所有角色月曜反应伤害提升。",
      effect: [
        {
          type: BuffType.MoonCrystalPrcent,
          getValue: (data) => {
            return [13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49, 52, 55][
              data.burstLevel + data.burstLevelAdd - 1
            ];
          },
          actionOn: ActionOn.Indirect,
        },
        {
          type: BuffType.MoonElectroPrcent,
          getValue: (data) => {
            return [13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49, 52, 55][
              data.burstLevel + data.burstLevelAdd - 1
            ];
          },
          actionOn: ActionOn.Indirect,
        },
        {
          type: BuffType.MoonSwirlPrcent,
          getValue: (data) => {
            return [13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49, 52, 55][
              data.burstLevel + data.burstLevelAdd - 1
            ];
          },
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: true,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "1命·遍照花海，隐入群山",
      describe: "队伍中附近的所有角色造成的月曜反应伤害擢升1.5%。",
      effect: [
        {
          type: BuffType.MoonCrystalPromote,
          getValue: () => 1.5,
        },
        {
          type: BuffType.MoonElectroPromote,
          getValue: () => 1.5,
        },
        {
          type: BuffType.MoonSwirlPromote,
          getValue: () => 1.5,
        },
      ],
      enable: true,
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 1,
    },
    {
      label: "2命·为夜增辉，与君遥伴",
      describe: `队伍中附近的所有角色造成的月曜反应伤害擢升7%;`,
      effect: [
        {
          type: BuffType.MoonCrystalPromote,
          getValue: () => 7,
        },
        {
          type: BuffType.MoonElectroPromote,
          getValue: () => 7,
        },
        {
          type: BuffType.MoonSwirlPromote,
          getValue: () => 7,
        },
      ],
      enable: true,
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 2,
    },
    {
      label: "2命·为夜增辉，与君遥伴（月感电）",
      describe: `月兆·满辉：队伍中自己的当前场上角色攻击力提升，提升值相当于哥伦比娅生命值上限的1%；`,
      effect: [
        {
          type: BuffType.ATKFixed,
          getValue: (data) => (data.baseHP + data.extraHP) * 0.01,
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 2,
    },
    {
      label: "2命·为夜增辉，与君遥伴（月绽放）",
      describe: `月兆·满辉：队伍中自己的当前场上角色元素精通提升，提升值相当于哥伦比娅生命值上限的0.35%；`,
      effect: [
        {
          type: BuffType.MysteryFixed,
          getValue: (data) => (data.baseHP + data.extraHP) * 0.0035,
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 2,
    },
    {
      label: "2命·为夜增辉，与君遥伴（月结晶）",
      describe: `月兆·满辉：队伍中自己的当前场上角色防御力提升，提升值相当于哥伦比娅生命值上限的1%；`,
      effect: [
        {
          type: BuffType.DEFFixed,
          getValue: (data) => (data.baseHP + data.extraHP) * 0.01,
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_E_3,
    {
      label: `3命·柔光凝露，梦湖起波`,
      describe: `队伍中附近的所有角色造成的月曜反应伤害擢升1.5%。`,
      condition: ({ constellation }) => constellation >= 3,
      effect: [
        {
          type: BuffType.MoonCrystalPromote,
          getValue: () => 1.5,
        },
        {
          type: BuffType.MoonElectroPromote,
          getValue: () => 1.5,
        },
        {
          type: BuffType.MoonSwirlPromote,
          getValue: () => 1.5,
        },
      ],
      enable: true,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: `4命·花岚云翳，山岩树影`,
      describe: `队伍中附近的所有角色造成的月曜反应伤害擢升1.5%。`,
      condition: ({ constellation }) => constellation >= 4,
      effect: [
        {
          type: BuffType.MoonCrystalPromote,
          getValue: () => 1.5,
        },
        {
          type: BuffType.MoonElectroPromote,
          getValue: () => 1.5,
        },
        {
          type: BuffType.MoonSwirlPromote,
          getValue: () => 1.5,
        },
      ],
      enable: true,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: `4命·花岚云翳，山岩树影（月感电）`,
      describe: `引力干涉造成的月感电反应伤害提升，提升值相当于哥伦比娅生命值上限的12.5%。`,
      condition: ({ constellation }) => constellation >= 4,
      effect: [
        {
          type: BuffType.MoonElectroFixed,
          getValue: (data) => (data.baseHP + data.extraHP + data.extraHP_NT) * 0.125,
          actionOn: ActionOn.External,
        },
      ],
      enable: false,
    },
    {
      label: `4命·花岚云翳，山岩树影（月绽放）`,
      describe: `引力干涉造成的月绽放反应伤害提升，提升值相当于哥伦比娅生命值上限的2.5%。`,
      condition: ({ constellation }) => constellation >= 4,
      effect: [
        {
          type: BuffType.MoonSwirlFixed,
          getValue: (data) => (data.baseHP + data.extraHP + data.extraHP_NT) * 0.025,
          actionOn: ActionOn.External,
        },
      ],
      enable: false,
    },
    {
      label: `4命·花岚云翳，山岩树影（月结晶）`,
      describe: `引力干涉造成的月结晶反应伤害提升，提升值相当于哥伦比娅生命值上限的12.5%。`,
      condition: ({ constellation }) => constellation >= 4,
      effect: [
        {
          type: BuffType.MoonCrystalFixed,
          getValue: (data) => (data.baseHP + data.extraHP + data.extraHP_NT) * 0.125,
          actionOn: ActionOn.External,
        },
      ],
      enable: false,
    },
    Constellation_Q_5,
    {
      label: `5命·花岚云翳，山岩树影`,
      describe: `队伍中附近的所有角色造成的月曜反应伤害擢升1.5%。`,
      condition: ({ constellation }) => constellation >= 5,
      effect: [
        {
          type: BuffType.MoonCrystalPromote,
          getValue: () => 1.5,
        },
        {
          type: BuffType.MoonElectroPromote,
          getValue: () => 1.5,
        },
        {
          type: BuffType.MoonSwirlPromote,
          getValue: () => 1.5,
        },
      ],
      enable: true,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: `6命·夜昏且暗，且随月光`,
      describe: `触发月曜反应后的8秒内，依据参与反应的元素类型，使队伍中的所有角色造成的对应元素类型伤害的暴击伤害提升80%;队伍中附近的所有角色造成的月曜反应伤害擢升7%。`,
      condition: ({ constellation }) => constellation >= 5,
      effect: [
        {
          type: BuffType.MoonCrystalPromote,
          getValue: () => 7,
        },
        {
          type: BuffType.MoonElectroPromote,
          getValue: () => 7,
        },
        {
          type: BuffType.MoonSwirlPromote,
          getValue: () => 7,
        },
        {
          type: BuffType.ElectroCritcalHurt,
          getValue: () => 80,
        },
        {
          type: BuffType.GeoCritcalHurt,
          getValue: () => 80,
        },
        {
          type: BuffType.DendroCritcalHurt,
          getValue: () => 80,
        },
      ],
      enable: true,
      shareable: true,
      target: BuffTarget.All,
    },
  ];
}

/** ![哥伦比亚](https://enka.network/ui/UI_AvatarIcon_Columbina.png) */
export const Columbina = new ColumbinaData();
