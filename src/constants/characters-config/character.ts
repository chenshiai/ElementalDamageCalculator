import { AttackType, ElementType, BuffType, WeaponType, Rarity, ICharacterInfo } from "./interface.d";
import { A_80_ATK_24P } from "./buffs";
function getEnkaUI(name: string): string {
  return `https://enka.network/ui/${name}.png`;
}
function getEnkaUIs(name: string[]): string[] {
  return name.map(getEnkaUI);
}

// @TODO ICharacterInfo 定义待完善，暂时先用any绕过检测
export const Character: (ICharacterInfo & Record<any, any>)[] = [
  {
    name: "嘉明",
    enkaId: 10000092,
    weapon: WeaponType.GreatSword,
    element: ElementType.Pyro,
    rarity: Rarity.Four,
    level: 90,
    baseHP: 11419,
    baseATK: 302,
    baseDEF: 703,
    icons: {
      avatarIcon: getEnkaUI("UI_AvatarIcon_Gaming"),
      constsIcon: getEnkaUIs([
        "UI_Talent_S_Gaming_01",
        "UI_Talent_S_Gaming_02",
        "UI_Talent_U_Gaming_01",
        "UI_Talent_S_Gaming_03",
        "UI_Talent_U_Gaming_02",
        "UI_Talent_S_Gaming_04"
      ]),
      skillsIcon: getEnkaUIs(["Skill_A_04", "Skill_S_Gaming_01", "Skill_E_Gaming_01"]),
    },
    talentNames: ["普通攻击·刃爪悬星", "瑞兽登高楼", "璨焰金猊舞"],

    normalAttack: [
      {
        label: "一段",
        rate: {
          atk: [0.839, 0.907, 0.975, 1.073, 1.141, 1.219, 1.326, 1.433, 1.541, 1.658, 1.775],
        },
        attackType: AttackType.Normal,
        elementType: ElementType.Physical,
      },
      {
        label: "二段",
        rate: {
          atk: [0.79, 0.855, 0.919, 1.011, 1.075, 1.149, 1.250, 1.351, 1.452, 1.563, 1.673],
        },
        attackType: AttackType.Normal,
        elementType: ElementType.Physical,
      },
      {
        label: "三段",
        rate: {
          atk: [1.066, 1.153, 1.240, 1.364, 1.451, 1.550, 1.686, 1.823, 1.959, 2.108, 2.257],
        },
        attackType: AttackType.Normal,
        elementType: ElementType.Physical,
      },
      {
        label: "四段",
        rate: {
          atk: [1.279, 1.384, 1.488, 1.637, 1.741, 1.860, 2.023, 2.187, 2.351, 2.529, 2.708],
        },
        attackType: AttackType.Normal,
        elementType: ElementType.Physical,
      },
    ],
    strongAttack: [
      {
        label: "循环",
        rate: {
          atk: [0.625, 0.676, 0.727, 0.8, 0.851, 0.909, 0.989, 1.069, 1.149, 123.6, 1.323],
        },
        attackType: AttackType.Strong,
        elementType: ElementType.Physical,
      },
      {
        label: "终结",
        rate: {
          atk: [1.13, 1.22, 1.32, 1.45, 1.54, 1.64, 1.79, 1.93, 2.08, 2.24, 2.39],
        },
        attackType: AttackType.Strong,
        elementType: ElementType.Physical,
      },
    ],
    fallingAttack: [
      {
        label: "下落期间",
        rate: {
          atk: [0.641, 0.694, 0.746, 0.82, 0.873, 0.932, 1.014, 1.096, 1.178, 1.268, 1.358],
        },
        attackType: AttackType.Other,
        elementType: ElementType.Physical,
      },
      {
        label: "低空下落",
        rate: {
          atk: [1.28, 1.39, 1.49, 1.64, 1.74, 1.86, 2.03, 2.19, 2.36, 2.54, 2.71],
        },
        attackType: AttackType.Falling,
        elementType: ElementType.Physical,
      },
      {
        label: "高空下落",
        rate: {
          atk: [1.6, 1.73, 1.86, 2.05, 2.18, 2.33, 2.53, 2.74, 2.94, 3.17, 3.39],
        },
        attackType: AttackType.Falling,
        elementType: ElementType.Physical,
      },
    ],
    elementSkill: [
      {
        label: "下落攻击·踏云献瑞",
        rate: {
          atk: [2.304, 2.477, 2.65, 2.88, 3.053, 3.226, 3.456, 3.686, 3.917, 4.147, 4.378, 4.608, 4.896]
        },
        attackType: AttackType.Falling,
        elementType: ElementType.Pyro,
      }
    ],
    burstSkill: [
      {
        label: "猊兽·文仔砸击",
        rate: {
          atk: [3.704, 3.982, 4.26, 4.63, 4.908, 5.186, 5.556, 5.926, 6.297, 6.667, 7.038, 7.408, 7.871],
        },
        attacktType: AttackType.Burst,
        elementType: ElementType.Pyro,
      }
    ],

    buffs: [
      A_80_ATK_24P,
      {
        label: "祥烟瑞气",
        describe: "嘉明的生命值高于或等于50%时，下落攻击·踏云献瑞造成的伤害提升20%",
        type: BuffType.FallingPrcent,
        value: 20,
      },
      {
        label: "二命·步踏梅花",
        describe: "嘉明受到治疗时，若此次治疗回复量溢出，嘉明的攻击力将提升20%",
        type: BuffType.ATKPrcent,
        value: 20,
        condition: (data) => data.conts >= 2
      },
      {
        label: "六命·百兽俱驯1",
        describe: "下落攻击·踏云献瑞的暴击率提升20%",
        type: BuffType.Critcal,
        value: 20,
        condition: (data) => data.conts === 6
      },
      {
        label: "六命·百兽俱驯2",
        describe: "下落攻击·踏云献瑞的暴击伤害提升40%",
        type: BuffType.CritcalHurt,
        value: 40,
        condition: (data) => data.conts === 6
      },
    ]
  },
];
