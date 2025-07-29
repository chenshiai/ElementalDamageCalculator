import Character from "../character-class";
import { ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Constellation_E_3, Constellation_Q_5, S_80_CRITAL_19P } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000098, "克洛琳德")
@Weapon(WeaponType.Sword)
@Element(ElementType.Electro)
@BaseData(Rarity.Five, 12956, 337, 784, 60)
@Icons("UI_AvatarIcon_Clorinde")
export class ClorindeData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["逐影之誓", "狩夜之巡", "残光将终"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.541, 0.585, 0.629, 0.691, 0.735, 0.786, 0.855, 0.924, 0.993, 1.069, 1.144],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.516, 0.558, 0.6, 0.66, 0.702, 0.75, 0.816, 0.882, 0.949, 1.021, 1.093],
    }),
    action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.342, 0.37, 0.398, 0.437, 0.465, 0.497, 0.541, 0.584, 0.628, 0.676, 0.723],
    }),
    action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.342, 0.37, 0.398, 0.437, 0.465, 0.497, 0.541, 0.584, 0.628, 0.676, 0.723],
    }),
    action("四段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [0.231, 0.25, 0.269, 0.296, 0.315, 0.336, 0.366, 0.395, 0.425, 0.457, 0.49],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.9, 0.973, 1.047, 1.151, 1.225, 1.308, 1.423, 1.539, 1.654, 1.779, 1.905],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [1.281, 1.386, 1.49, 1.639, 1.743, 1.863, 2.026, 2.19, 2.354, 2.533, 2.712],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
    }),
  ];
  elementSkill = [
    action("驰猎伤害", AttackType.Normal, ElementType.Electro, {
      atk: [0.268, 0.289, 0.311, 0.342, 0.364, 0.389, 0.423, 0.457, 0.492, 0.529, 0.566, 0.604, 0.641],
    }),
    action("驰猎伤害·强化", AttackType.Normal, ElementType.Electro, {
      atk: [0.388, 0.419, 0.451, 0.496, 0.528, 0.564, 0.613, 0.663, 0.713, 0.767, 0.821, 0.875, 0.929],
    }),
    action("贯夜伤害·基础", AttackType.Normal, ElementType.Electro, {
      atk: [0.33, 0.357, 0.383, 0.422, 0.449, 0.479, 0.521, 0.564, 0.606, 0.652, 0.698, 0.744, 0.79],
    }),
    action("贯夜伤害·普通", AttackType.Normal, ElementType.Electro, {
      atk: [0.44, 0.475, 0.511, 0.562, 0.598, 0.639, 0.695, 0.751, 0.808, 0.869, 0.93, 0.992, 1.053],
    }),
    action("贯夜伤害·强化单次", AttackType.Normal, ElementType.Electro, {
      atk: [0.251, 0.272, 0.292, 0.321, 0.342, 0.365, 0.397, 0.429, 0.461, 0.496, 0.531, 0.566, 0.602],
    }),
    action("流涌之刃伤害", AttackType.Other, ElementType.Electro, {
      atk: [0.432, 0.464, 0.497, 0.54, 0.572, 0.605, 0.648, 0.691, 0.734, 0.778, 0.821, 0.864, 0.918],
    }),
  ];
  burstSkill = [
    action("技能伤害·单次", AttackType.Burst, ElementType.Electro, {
      atk: [1.269, 1.364, 1.459, 1.586, 1.681, 1.776, 1.903, 2.03, 2.157, 2.284, 2.411, 2.538, 2.696],
    }),
  ];
  otherSkill = [
    action("1命·夜巡之影伤害", AttackType.Normal, ElementType.Electro, {
      atk: [0.3],
    }),
    action("6命·夜巡之影伤害", AttackType.Normal, ElementType.Electro, {
      atk: [2],
    }),
  ];
  buffs = [
    ...S_80_CRITAL_19P,
    {
      label: "破夜的明焰",
      describe:
        "队伍中附近的角色对敌人触发雷元素相关反应后，将基于克洛琳德攻击力的20%，提升克洛琳德的普通攻击与残光将终造成的雷元素伤害。至多叠加3层，每层独立计时。通过这种方式至多使克洛琳德的上述攻击造成的伤害提升1800；解锁2命后效果提升50%",
      effect: [
        {
          type: BuffType.NormalFixed,
          getValue: (data, s) =>
            data.constellation >= 2
              ? Math.min(2700, (data.baseATK + data.extraATK + data.extraATK_NT) * 0.3 * s)
              : Math.min(1800, (data.baseATK + data.extraATK + data.extraATK_NT) * 0.2 * s),
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.BurstFixed,
          getValue: (data, s) =>
            data.constellation >= 2
              ? Math.min(2700, (data.baseATK + data.extraATK + data.extraATK_NT) * 0.3 * s)
              : Math.min(1800, (data.baseATK + data.extraATK + data.extraATK_NT) * 0.2 * s),
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
      stackable: true,
      stack: 3,
      limit: 3,
    },
    {
      label: "契令的酬偿",
      describe:
        "如果克洛琳德的生命之契大于或等于生命值上限的100%，生命之契的数值提升或降低时，克洛琳德的暴击率提升10%，至多叠加2层",
      effect: [{ type: BuffType.Critcal, getValue: (_, s) => 10 * s }],
      enable: true,
      stackable: true,
      stack: 2,
      limit: 2,
    },
    Constellation_E_3,
    {
      label: "4命·「铭记泪，生命与仁爱」",
      describe:
        "残光将终对敌人造成伤害时，将根据克洛琳德的当前生命之契百分比提升此次伤害，每1%生命之契都将使此次残光将终造成的伤害提升2%；通过这种方式，至多使残光将终造成的伤害提升200%",
      effect: [{ type: BuffType.BurstPrcent, getValue: (_, s) => 2 * s }],
      enable: true,
      stackable: true,
      stack: 100,
      limit: 100,
      condition: ({ constellation }) => constellation >= 4,
      stackText: "生命之契%",
    },
    Constellation_Q_5,
    {
      label: "6命·「为此，勿将希望弃扬」",
      describe: "施放狩夜之巡后的12秒内，克洛琳德的暴击率提升10%，暴击伤害提升70%",
      effect: [
        { type: BuffType.Critcal, getValue: () => 10 },
        { type: BuffType.CritcalHurt, getValue: () => 70 },
      ],
      condition: ({ constellation }) => constellation >= 6,
      enable: true,
    },
  ];
}

/** ![克洛琳德](https://enka.network/ui/UI_AvatarIcon_Clorinde.png) */
export const Clorinde = new ClorindeData();
