import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import {
  ActionOn,
  AttackType,
  BuffTarget,
  BuffType,
  ElementType,
  EnchantingType,
  Rarity,
  WeaponType,
} from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "../decorator";
import { Constellation_E_3, Constellation_Q_5, S_80_CRITAL_19P } from "../buffs";

@EnKaId(10000057, "荒泷一斗")
@Weapon(WeaponType.GreatSword)
@Element(ElementType.Geo)
@BaseData(Rarity.Five, 12858, 227, 959, 70)
@Icons("UI_AvatarIcon_Itto")
class IttoData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["喧哗屋传说", "魔杀绝技·赤牛发破！", "最恶鬼王·一斗轰临！！"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.792, 0.857, 0.921, 1.013, 1.078, 1.152, 1.253, 1.354, 1.456, 1.566, 1.693],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.764, 0.826, 0.888, 0.977, 1.039, 1.11, 1.208, 1.305, 1.403, 1.51, 1.632],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.916, 0.991, 1.066, 1.172, 1.247, 1.332, 1.449, 1.566, 1.6836, 1.8115, 1.958],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [1.172, 1.268, 1.363, 1.499, 1.595, 1.704, 1.854, 2.004, 2.154, 2.317, 2.505],
    }),
    action(
      "荒泷逆袈裟连斩伤害",
      AttackType.Strong,
      ElementType.Physical,
      {
        atk: [0.912, 0.986, 1.06, 1.166, 1.24, 1.325, 1.442, 1.558, 1.675, 1.802, 1.948],
      },
      "Itto"
    ),
    action(
      "荒泷逆袈裟终结伤害",
      AttackType.Strong,
      ElementType.Physical,
      {
        atk: [1.909, 2.065, 2.22, 2.442, 2.597, 2.775, 3.019, 3.263, 3.508, 3.774, 4.079],
      },
      "Itto"
    ),
    action("左一文字斩伤害", AttackType.Strong, ElementType.Physical, {
      atk: [0.905, 0.978, 1.052, 1.157, 1.231, 1.315, 1.431, 1.546, 1.662, 1.788, 1.933],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.818, 0.885, 0.952, 1.047, 1.113, 1.189, 1.294, 1.398, 1.504, 1.618, 1.732],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.64, 1.77, 1.91, 2.1, 2.23, 2.38, 2.59, 2.8, 3.01, 3.24, 3.47],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [2.05, 2.22, 2.38, 2.62, 2.79, 2.98, 3.24, 3.5, 3.76, 4.05, 4.34],
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Geo, {
      atk: [3.07, 3.3, 3.53, 3.84, 4.07, 4.3, 4.61, 4.92, 5.22, 5.53, 5.84, 6.14, 6.53],
    }),
  ];
  burstSkill = [];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_CRITAL_19P,
    {
      label: "元素爆发·「怒目鬼王」",
      describe: `普通攻击、重击与下落攻击造成的伤害转为无法被附魔覆盖的岩元素伤害；
      提高荒泷一斗普通攻击的攻击速度，并基于其防御力，提高攻击力； `,
      effect: [
        {
          type: BuffType.ATKFixed,
          getValue: (data) => {
            let a = [0.576, 0.619, 0.662, 0.72, 0.763, 0.806, 0.864, 0.922, 0.979, 1.037, 1.094, 1.152, 1.224, 1.296][
              data.burstLevel + data.burstLevelAdd - 1
            ];
            return (data.baseDEF + data.extraDEF) * a;
          },
          actionOn: ActionOn.Indirect,
        },
        {
          type: BuffType.Transform,
          getValue: () => EnchantingType[ElementType.Geo],
        },
      ],
      enable: false,
    },
    {
      label: "赤鬼之血",
      describe: `「荒泷逆袈裟」造成的伤害提高，伤害提高值基于荒泷一斗防御力的35% `,
      effect: [
        {
          type: BuffType.StrongFixed,
          getValue: (data) => {
            return (data.baseDEF + data.extraDEF + data.extraDEF_NT) * 0.35;
          },
          actionOn: ActionOn.External,
          special: "Itto",
        },
      ],
      enable: true,
    },
    Constellation_E_3,
    {
      label: "4命·奉行牢狱，茶饭之所",
      describe: `最恶鬼王•一斗轰临！！施加的「怒目鬼王」状态结束后，附近的队伍中所有角色的防御力提升20%，攻击力提升20%`,
      effect: [
        { type: BuffType.ATKPrcent, getValue: () => 20 },
        { type: BuffType.DEFPrcent, getValue: () => 20 },
      ],
      enable: true,
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_Q_5,
  ];
}

/** ![荒泷一斗](https://enka.network/ui/UI_AvatarIcon_Itto.png) */
export const Itto = new IttoData();
