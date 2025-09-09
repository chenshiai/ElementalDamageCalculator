import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_MYSTERY_96, Constellation_E_5, Constellation_Q_3 } from "../buffs";

// .replaceAll("%", '').replaceAll(/[\u4e00-\u9fff]+/g, "").replaceAll("\t",",").split(",").map(i=>Math.round(i*100)/10000)

@EnKaId(10000069, "爱诺")
@Weapon(WeaponType.GreatSword)
@Element(ElementType.Hydro)
@BaseData(Rarity.Four, [11201, 242, 607], 50, [11976, 304, 649])
@Icons("UI_AvatarIcon_Aino")
class AinoData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["敲打修理法", "妙思捕手", "精密水冷仪"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.664986, 0.719113, 0.77324, 0.850564, 0.904691, 0.96655, 1.051606, 1.136663, 1.221719, 1.314508, 1.407297,
        1.500086, 1.592874, 1.685663, 1.778452,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.661916, 0.715793, 0.76967, 0.846637, 0.900514, 0.962087, 1.046751, 1.131415, 1.216079, 1.308439, 1.400799,
        1.49316, 1.58552, 1.677881, 1.770241,
      ],
    }),
    action("三段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.492165, 0.532225, 0.572285, 0.629514, 0.669573, 0.715356, 0.778308, 0.841259, 0.90421, 0.972885, 1.041559,
        1.110233, 1.178907, 1.247581, 1.316256,
      ],
    }),
    action("重击循环伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.62522, 0.67611, 0.727, 0.7997, 0.85059, 0.90875, 0.98872, 1.06869, 1.14866, 1.2359, 1.32314, 1.41038, 1.49762,
        1.59496, 1.6721,
      ],
    }),
    action("重击终结伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        1.1309, 1.22295, 1.315, 1.4465, 1.53855, 1.64375, 1.7884, 1.93305, 2.0777, 2.2355, 2.3933, 2.5511, 2.7089,
        2.8667, 3.0245,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        0.745878, 0.806589, 0.8673, 0.95403, 1.014741, 1.084125, 1.179528, 1.274931, 1.370334, 1.47441, 1.578486,
        1.682562, 1.786638, 1.890714, 1.99479,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.49144, 1.612836, 1.734233, 1.907656, 2.029052, 2.167791, 2.358556, 2.549322, 2.740087, 2.948195, 3.156303,
        3.364411, 3.572519, 3.790627, 3.988735,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        1.862889, 2.01452, 2.16615, 2.382765, 2.534396, 2.707688, 2.945964, 3.184241, 3.422517, 3.682455, 3.942393,
        4.202331, 4.462269, 4.722207, 4.982145,
      ],
    }),
  ];
  elementSkill = [
    action("一段伤害", AttackType.Skill, ElementType.Hydro, {
      atk: [
        0.656, 0.7052, 0.7544, 0.82, 0.8692, 0.9184, 0.984, 1.0496, 1.1152, 1.1808, 1.2464, 1.312, 1.394, 1.476, 1.558,
      ],
    }),
    action("二段伤害", AttackType.Skill, ElementType.Hydro, {
      atk: [
        1.888, 2.0296, 2.1712, 2.36, 2.5016, 2.6432, 2.832, 3.0208, 3.2096, 3.3984, 3.5872, 3.776, 4.012, 4.248, 4.484,
      ],
    }),
  ];
  burstSkill = [
    action("水弹伤害", AttackType.Burst, ElementType.Hydro, {
      atk: [
        0.20112, 0.216204, 0.231288, 0.2514, 0.266484, 0.281568, 0.30168, 0.321792, 0.341904, 0.362016, 0.382128,
        0.40224, 0.42738, 0.45252, 0.47766,
      ],
    }),
  ];
  otherSkill = [
    action("2命·水弹伤害", AttackType.Burst, ElementType.Hydro, {
      atk: [0.25],
      em: [1],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_MYSTERY_96,
    {
      label: "结构化功率提升",
      describe: "爱诺元素爆发造成的伤害提升，提升值基于爱诺的元素精通的50%。",
      effect: [
        {
          type: BuffType.BurstFixed,
          getValue: (data) => (data.elementalMystery + data.elementalMystery_NT) * 0.5,
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
      target: BuffTarget.Self,
    },
    {
      label: "1命·灰与力场的平衡理论",
      describe:
        "爱诺施放元素战技妙思捕手或元素爆发精密水冷仪后，爱诺自身的元素精通提升80点，附近的当前场上其他角色的元素精通提升80点",
      effect: [
        {
          type: BuffType.MysteryFixed,
          getValue: () => 80,
        },
      ],
      enable: true,
      target: BuffTarget.All,
      shareable: true,
      condition: ({ constellation }) => constellation >= 1,
    },
    Constellation_Q_3,
    Constellation_E_5,
    {
      label: "6命·天才之为构造之责任",
      describe:
        "施放元素爆发精密水冷仪后的15秒内，附近的当前场上角色触发的月感电、月绽放造成的伤害提升15%。月兆·满辉：上述反应造成的伤害额外提升20%。",
      effect: [
        {
          type: BuffType.MoonElectroPrcent,
          getValue: (_, s) => (s > 0 ? 35 : 15),
        },
        {
          type: BuffType.MoonSwirlPrcent,
          getValue: (_, s) => (s > 0 ? 35 : 15),
        },
      ],
      enable: true,
      target: BuffTarget.All,
      shareable: true,
      stack: 1,
      limit: 1,
      stackable: true,
      stackText: "月兆·满辉",
      stackType: "switch",
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![爱诺](https://enka.network/ui/UI_AvatarIcon_Aino.png) */
export const Aino = new AinoData();
