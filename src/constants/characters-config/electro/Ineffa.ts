import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "../decorator";
import { S_80_CRITAL_19P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000116, "伊涅芙")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Electro)
@BaseData(Rarity.Five, 12613, 330, 828, 60)
@Icons("UI_AvatarIcon_Ineffa")
class IneffaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["除尘旋刃", "涤净模式 · 稳态载频", "至高律令 · 全域扫灭"];
  normalAttack = [];
  elementSkill = [];
  burstSkill = [];
  otherSkill = [
    action("频率超限回路伤害", AttackType.Moon, ElementType.MoonElectro, {
      atk: [0.65],
    }),
    action("2命·「惩戒敕谕」伤害", AttackType.Moon, ElementType.MoonElectro, {
      atk: [3],
    }),
    action("6命·献予你的明晨伤害", AttackType.Moon, ElementType.MoonElectro, {
      atk: [1.35],
    }),
  ];
  buffs: IBuffBase[] = [
    ...S_80_CRITAL_19P,
    {
      label: "全相重构协议",
      describe:
        "施放元素爆发至高律令 · 全域扫灭时，将为队伍中自己的所有角色赋予「参数重构」效果：基于伊涅芙攻击力的6%，提升伊涅芙与队伍中自己当前场上角色的元素精通，持续20秒。",
      effect: [
        {
          type: BuffType.MysteryFixed,
          getValue: (data) => (data.baseATK + data.extraATK + data.extraATK_NT) * 0.06,
          transform: true,
        },
      ],
      enable: true,
      target: BuffTarget.All,
      shareable: true,
    },
    {
      label: "月兆祝赐·象拟中继",
      describe:
        "队伍中的角色触发感电反应时，将转为触发月感电反应，且基于伊涅芙的攻击力，提升月感电反应的基础伤害：每100点攻击力都将提升0.7%基础伤害，至多通过这种方式提升14%伤害。",
      effect: [
        {
          type: BuffType.MoonElectroRate,
          getValue: (data) => Math.min(14, ((data.baseATK + data.extraATK + data.extraATK_NT) / 100) * 0.7),
        },
      ],
      enable: true,
      target: BuffTarget.All,
      shareable: true,
    },
    {
      label: "1命·循环整流引擎",
      describe:
        "伊涅芙展开光流屏障护盾时，将为队伍中附近的所有角色赋予持续20秒的「载流复合」效果，使月感电反应造成的伤害提升，提升值基于伊涅芙的攻击力：每100点攻击力都将提升2.5%伤害，至多通过这种方式提升50%伤害。",
      effect: [
        {
          type: BuffType.MoonElectroPrcent,
          getValue: (data) => Math.min(50, ((data.baseATK + data.extraATK + data.extraATK_NT) / 100) * 2.5),
        },
      ],
      enable: true,
      target: BuffTarget.All,
      shareable: true,
      condition: ({ constellation }) => constellation >= 1,
    },
    Constellation_E_3,
    Constellation_Q_5
  ];
}

/** ![伊涅芙](https://enka.network/ui/UI_AvatarIcon_Ineffa.png) */
export const Ineffa = new IneffaData();
