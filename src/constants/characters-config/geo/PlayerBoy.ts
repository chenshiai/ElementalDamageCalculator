import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action, getEnkaUI } from "../decorator";
import { A_80_ATK_24P, Constellation_E_5, Constellation_Q_3 } from "../buffs";

@EnKaId(1000000506, "空·岩")
@Weapon(WeaponType.Sword)
@Element(ElementType.Geo)
@BaseData(Rarity.Five, 10875, 213, 683, 60)
@Icons("UI_AvatarIcon_PlayerBoy", "PlayerRock")
class PlayerBoyData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["普通攻击·异邦岩峰", "星陨剑", "岩潮叠嶂"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.445, 0.481, 0.517, 0.569, 0.605, 0.646, 0.704, 0.76, 0.817, 0.879, 0.941],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.434, 0.47, 0.505, 0.556, 0.591, 0.631, 0.687, 0.742, 0.798, 0.859, 0.919],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.53, 0.573, 0.616, 0.678, 0.721, 0.77, 0.838, 0.906, 0.973, 1.05, 1.12],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.583, 0.631, 0.678, 0.746, 0.793, 0.848, 0.922, 0.997, 1.07, 1.15, 1.23],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.708, 0.765, 0.823, 0.905, 0.963, 1.03, 1.12, 1.21, 1.3, 1.4, 1.5],
    }),
    action("重击伤害·1", AttackType.Strong, ElementType.Physical, {
      atk: [0.559, 0.605, 0.65, 0.715, 0.76, 0.813, 0.884, 0.956, 1.03, 1.1, 1.18],
    }),
    action("重击伤害·2", AttackType.Strong, ElementType.Physical, {
      atk: [0.607, 0.657, 0.706, 0.777, 0.826, 0.883, 0.96, 1.038, 1.116, 1.2, 1.29],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.01, 1.09, 1.17, 1.26, 1.35],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Geo, {
      atk: [2.48, 2.67, 2.85, 3.1, 3.29, 3.47, 3.72, 3.97, 4.22, 4.46, 4.71, 4.96, 5.27, 5.58],
    }),
  ];
  burstSkill = [
    action("地震波单次伤害", AttackType.Burst, ElementType.Geo, {
      atk: [1.48, 1.59, 1.7, 1.85, 1.96, 2.07, 2.22, 2.37, 2.52, 2.66, 2.81, 2.96, 3.15, 3.33],
    }),
  ];
  otherSkill = [
    action("狂乱的崩岩", AttackType.Normal, ElementType.Geo, {
      atk: [0.6],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_ATK_24P,
    {
      label: "1命·巍然的青岩",
      describe: "队伍中角色处于岩潮叠嶂的岩嶂包围中时，暴击率提升10%",
      effect: [{ type: BuffType.Critcal, getValue: () => 10 }],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 1,
    },
    Constellation_Q_3,
    Constellation_E_5,
  ];
}

/** ![空·岩](https://enka.network/ui/UI_AvatarIcon_PlayerBoy.png) */
export const PlayerBoy = new PlayerBoyData();
