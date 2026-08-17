import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import {
  ActionOn,
  AttackType,
  BuffTarget,
  BuffType,
  ElementType,
  Rarity,
  SecondElementType,
  WeaponType,
} from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_CHARGE_26P, A_80_ELECTRO_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000148, "阿罗夏")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Electro, SecondElementType.Start)
@BaseData(Rarity.Four, [11962, 265, 703], 70, [12790, 333, 752])
@Icons("UI_AvatarIcon_Alyosha")
export class AlyoshaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["角枪驰弋", "伏袭霆击", "守猎进踞"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.4782, 0.5171, 0.556, 0.6116, 0.6505, 0.695, 0.7562, 0.8173, 0.8785, 0.9452, 1.0119, 1.0786, 1.1454, 1.2121,
        1.2788,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.4816, 0.5208, 0.56, 0.616, 0.6552, 0.7, 0.7616, 0.8232, 0.8848, 0.952, 1.0192, 1.0864, 1.1536, 1.2208, 1.288,
      ],
    }),
    action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.3423, 0.3701, 0.398, 0.4378, 0.4657, 0.4975, 0.5413, 0.5851, 0.6288, 0.6766, 0.7244, 0.7721, 0.8199, 0.8676,
        0.9154,
      ],
    }),
    action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.3182, 0.3441, 0.37, 0.407, 0.4329, 0.4625, 0.5032, 0.5439, 0.5846, 0.629, 0.6734, 0.7178, 0.7622, 0.8066,
        0.851,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.7585, 0.8203, 0.882, 0.9702, 1.0319, 1.1025, 1.1995, 1.2965, 1.3936, 1.4994, 1.6052, 1.7111, 1.8169, 1.9228,
        2.0286,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        1.1103, 1.2006, 1.291, 1.4201, 1.5105, 1.6137, 1.7558, 1.8978, 2.0398, 2.1947, 2.3496, 2.5045, 2.6595, 2.8144,
        2.9693,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        0.6393, 0.6914, 0.7434, 0.8177, 0.8698, 0.9293, 1.011, 1.0928, 1.1746, 1.2638, 1.353, 1.4422, 1.5314, 1.6206,
        1.7098,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.2784, 1.3824, 1.4865, 1.6351, 1.7392, 1.8581, 2.0216, 2.1851, 2.3486, 2.527, 2.7054, 2.8838, 3.0622, 3.2405,
        3.4189,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.5968, 1.7267, 1.8567, 2.0424, 2.1723, 2.3209, 2.5251, 2.7293, 2.9336, 3.1564, 3.3792, 3.602, 3.8248, 4.0476,
        4.2704,
      ],
    }),
  ];
  elementSkill = [
    action("点按伤害", AttackType.Skill, ElementType.Electro, {
      atk: [
        2.8672, 3.0822, 3.2973, 3.584, 3.799, 4.0141, 4.3008, 4.5875, 4.8742, 5.161, 5.4477, 5.7344, 6.0928, 6.4512,
        6.8096,
      ],
    }),
    action("长按伤害", AttackType.Skill, ElementType.Electro, {
      atk: [
        3.584, 3.8528, 4.1216, 4.48, 4.7488, 5.0176, 5.376, 5.7344, 6.0928, 6.4512, 6.8096, 7.168, 7.616, 8.064, 8.512,
      ],
    }),
  ];
  burstSkill = [
    action("轰霆猎场伤害", AttackType.Burst, ElementType.Electro, {
      atk: [
        0.7496, 0.8058, 0.862, 0.937, 0.9932, 1.0494, 1.1244, 1.1994, 1.2743, 1.3493, 1.4242, 1.4992, 1.5929, 1.6866,
        1.7803,
      ],
    }),
    action("图加林伤害", AttackType.Burst, ElementType.Electro, {
      atk: [
        0.5022, 0.5399, 0.5776, 0.6278, 0.6655, 0.7031, 0.7533, 0.8036, 0.8538, 0.904, 0.9542, 1.0045, 1.0672, 1.13,
        1.1928,
      ],
    }),
  ];
  otherSkill = [
    action("惊醒沉睡的林线", AttackType.Heal, ElementType.None, {
      atk: [1.2],
    }),
    action("4命·衔取猎品", AttackType.Heal, ElementType.None, {
      atk: [0.6],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_CHARGE_26P,
    {
      label: "猎者之准",
      describe: "处于场上时，攻击力提升",
      effect: [
        {
          type: BuffType.ATKPrcent,
          getValue: (data) => {
            const a = [
              11.66, 12.72, 13.78, 14.84, 15.9, 16.96, 18.02, 19.08, 20.14, 21.2, 22.47, 23.74, 25.02, 26.29, 27.56,
            ][data.skillLevel + data.skillLevelAdd - 1];
            if (data.constellation >= 6) return a * 2;
            return a;
          },
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "告别冬麦与残叶",
      describe:
        "基于阿罗夏的元素充能效率，提升阿罗夏的元素战技与元素爆发造成的伤害：每1%元素充能效率都会使上述伤害提升0.35%，至多提升至70%。",
      effect: [
        {
          type: BuffType.SkillPrcent,
          getValue: (data) => Math.min(70, (data.chargeEfficiency + data.chargeEfficiency_NT) * 0.35),
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.BurstPrcent,
          getValue: (data) => Math.min(70, (data.chargeEfficiency + data.chargeEfficiency_NT) * 0.35),
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
    },
    {
      label: "星赴险域",
      describe: "辉映·星超导：激活弋猎印记时获得的猎者之准效果还会使角色处于场上时造成的星超导反应伤害提升20%。",
      effect: [
        {
          type: BuffType.StellarConductPrcent,
          getValue: () => 20,
        },
      ],
      enable: true,
      shareable: true,
      target: BuffTarget.All,
    },
    Constellation_E_3,
    Constellation_Q_5,
    {
      label: "6命·复夺旌幡",
      describe:
        "激活弋猎印记时获得的猎者之准效果可以叠加。该效果至多叠加2层，叠加至2层时，还会使处于该效果影响下的当前场上角色的元素精通提升100点。",
      effect: [{ type: BuffType.MysteryFixed, getValue: () => 100 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 6,
      shareable: true,
    },
  ];
}

/** ![阿罗夏](https://enka.network/ui/UI_AvatarIcon_Alyosha.png) */
export const Alyosha = new AlyoshaData();
