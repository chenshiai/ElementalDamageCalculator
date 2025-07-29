import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Constellation_E_5, Constellation_Q_3, S_80_CRITAL_19P } from "../buffs";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";

@EnKaId(10000060, "夜兰")
@Weapon(WeaponType.Bow)
@Element(ElementType.Hydro)
@BaseData(Rarity.Five, 14450, 244, 548, 70)
@Icons("UI_AvatarIcon_Yelan")
export class YelanData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["潜形隐曜弓", "萦络纵命索", "渊图玲珑骰"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.407, 0.44, 0.473, 0.52, 0.553, 0.591, 0.643, 0.695, 0.747, 0.804, 0.861],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.39, 0.422, 0.454, 0.499, 0.531, 0.568, 0.617, 0.667, 0.717, 0.772, 0.826],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.516, 0.558, 0.6, 0.66, 0.702, 0.75, 0.816, 0.882, 0.948, 1.02, 1.092],
    }),
    action("四段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.325, 0.352, 0.378, 0.416, 0.442, 0.473, 0.514, 0.556, 0.597, 0.643, 0.688],
    }),
    action("四段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.325, 0.352, 0.378, 0.416, 0.442, 0.473, 0.514, 0.556, 0.597, 0.643, 0.688],
    }),
    action("瞄准射击", AttackType.Strong, ElementType.Physical, {
      atk: [0.439, 0.474, 0.51, 0.561, 0.597, 0.638, 0.694, 0.75, 0.806, 0.867, 0.928],
    }),
    action("满蓄力瞄准射击", AttackType.Strong, ElementType.Hydro, {
      atk: [1.24, 1.33, 1.43, 1.55, 1.64, 1.74, 1.86, 1.98, 2.11, 2.23, 2.36],
    }),
    action(
      "破局矢伤害",
      AttackType.Strong,
      ElementType.Hydro,
      {
        hp: [0.1158, 0.1244, 0.1331, 0.1447, 0.1534, 0.1621, 0.1736, 0.1852, 0.1968, 0.2084, 0.2199],
      },
      "Yelan"
    ),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.2],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Hydro, {
      hp: [0.226, 0.243, 0.26, 0.283, 0.3, 0.317, 0.339, 0.362, 0.384, 0.407, 0.43, 0.452, 0.481],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Hydro, {
      hp: [0.0731, 0.0786, 0.084, 0.0914, 0.0968, 0.1023, 0.1096, 0.1169, 0.1242, 0.1315, 0.1389, 0.1462, 0.1553],
    }),
    action("玄掷玲珑伤害·单次", AttackType.Burst, ElementType.Hydro, {
      hp: [0.0487, 0.0524, 0.056, 0.0609, 0.0648, 0.0682, 0.0731, 0.078, 0.0828, 0.0877, 0.0926, 0.0974, 0.1035],
    }),
  ];
  otherSkill = [
    action("2命·入彀者，多多益善", AttackType.Burst, ElementType.Hydro, {
      hp: [0.14],
    }),
  ];
  buffs: IBuffBase[] = [
    ...S_80_CRITAL_19P,
    {
      label: "猜先有方",
      describe: "队伍存在1/2/3/4种元素类型的角色时，夜兰的生命值上限提升6%/12%/18%/30%",
      effect: [
        {
          type: BuffType.HPPrcent,
          getValue: (_, s) => {
            return [6, 12, 18, 30][s - 1] || 6;
          },
        },
      ],
      enable: true,
      stackable: true,
      stack: 3,
      limit: 4,
      stackText: "元素种类",
    },
    {
      label: "妙转随心",
      describe:
        "「玄掷玲珑」存在期间，能使队伍中自己的当前场上角色造成的伤害提高1%，并且每1秒进一步提高3.5%，至多使角色造成的伤害提高50%",
      effect: [
        {
          type: BuffType.GlobalPrcent,
          getValue: (_, s) => {
            return 1 + 3.5 * s;
          },
        },
      ],
      enable: true,
      stackable: true,
      stack: 0,
      limit: 14,
      stackText: "存在时间",
      shareable: true,
      target: BuffTarget.All,
    },
    Constellation_Q_3,
    {
      label: "4命·诓惑者，接树移花",
      describe:
        "依照「络命丝」标记敌人的数量，每次标记将在爆发时使队伍中所有角色的生命值上限提升10%，通过这种方式，生命值上限至多获得40%提升",
      effect: [
        {
          type: BuffType.HPPrcent,
          getValue: (_, s) => {
            return 10 * s;
          },
        },
      ],
      enable: true,
      stackable: true,
      stack: 0,
      limit: 4,
      stackText: "标记数量",
      shareable: true,
      condition: ({ constellation }) => constellation >= 4,
      target: BuffTarget.All,
    },
    Constellation_E_5,
    {
      label: "6命·取胜者，大小通吃",
      describe:
        "施放渊图玲珑骰后，夜兰将进入「运筹帷幄」状态： 夜兰的普通攻击将转为发射特殊的「破局矢」。这种箭矢具有与破局矢近似的特性，造成的伤害视为重击伤害，能造成破局矢156%的伤害",
      effect: [
        {
          type: BuffType.StrongRate,
          getValue: () => 56,
          special: "Yelan",
        },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![夜兰](https://enka.network/ui/UI_AvatarIcon_Yelan.png) */
export const Yelan = new YelanData();
