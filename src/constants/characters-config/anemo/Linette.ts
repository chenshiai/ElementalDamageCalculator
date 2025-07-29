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
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_ATK_24P, Constellation_E_5, Constellation_Q_3 } from "../buffs";

@EnKaId(10000083, "琳妮特")
@Weapon(WeaponType.Sword)
@Element(ElementType.Anemo)
@BaseData(Rarity.Four, 12397, 232, 712, 70)
@Icons("UI_AvatarIcon_Linette")
export class LinetteData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["迅捷礼刺剑", "谜影障身法", "魔术·运变惊奇"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.431, 0.466, 0.501, 0.551, 0.586, 0.626, 0.681, 0.736, 0.792, 0.852, 0.912],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.376, 0.407, 0.437, 0.481, 0.512, 0.547, 0.595, 0.643, 0.691, 0.743, 0.796],
    }),
    action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.279, 0.301, 0.324, 0.356, 0.379, 0.405, 0.441, 0.476, 0.512, 0.551, 0.59],
    }),
    action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.216, 0.234, 0.251, 0.276, 0.294, 0.314, 0.341, 0.369, 0.397, 0.427, 0.457],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.632, 0.683, 0.734, 0.808, 0.859, 0.918, 0.999, 1.079, 1.16, 1.248, 1.337],
    }),
    action("重击伤害·1", AttackType.Strong, ElementType.Physical, {
      atk: [0.442, 0.478, 0.514, 0.565, 0.601, 0.643, 0.699, 0.756, 0.812, 0.874, 0.936],
    }),
    action("重击伤害·2", AttackType.Strong, ElementType.Physical, {
      atk: [0.614, 0.664, 0.714, 0.785, 0.835, 0.893, 0.971, 1.05, 1.128, 1.214, 1.3],
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
    action("谜影突刺伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [2.68, 2.881, 3.082, 3.35, 3.551, 3.752, 4.02, 4.288, 4.556, 4.824, 5.092, 5.36, 5.695],
    }),
    action("流涌之刃伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [0.312, 0.335, 0.359, 0.39, 0.413, 0.437, 0.468, 0.499, 0.53, 0.562, 0.593, 0.624, 0.663],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [0.832, 0.894, 0.957, 1.04, 1.102, 1.165, 1.248, 1.331, 1.414, 1.498, 1.581, 1.664, 1.768],
    }),
    action("惊奇猫猫盒伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [0.512, 0.55, 0.589, 0.64, 0.678, 0.717, 0.768, 0.819, 0.87, 0.922, 0.973, 1.024, 1.088],
    }),
    action("彩练术弹伤害·水", AttackType.Burst, ElementType.Hydro, {
      atk: [0.456, 0.49, 0.524, 0.57, 0.604, 0.638, 0.684, 0.73, 0.775, 0.821, 0.866, 0.912, 0.969],
    }),
    action("彩练术弹伤害·火", AttackType.Burst, ElementType.Pyro, {
      atk: [0.456, 0.49, 0.524, 0.57, 0.604, 0.638, 0.684, 0.73, 0.775, 0.821, 0.866, 0.912, 0.969],
    }),
    action("彩练术弹伤害·雷", AttackType.Burst, ElementType.Electro, {
      atk: [0.456, 0.49, 0.524, 0.57, 0.604, 0.638, 0.684, 0.73, 0.775, 0.821, 0.866, 0.912, 0.969],
    }),
    action("彩练术弹伤害·冰", AttackType.Burst, ElementType.Cryo, {
      atk: [0.456, 0.49, 0.524, 0.57, 0.604, 0.638, 0.684, 0.73, 0.775, 0.821, 0.866, 0.912, 0.969],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...A_80_ATK_24P,
    {
      label: "巧施协同",
      describe:
        "施放魔术·运变惊奇后，队伍中分别存在1/2/3/4种元素类型的角色时，队伍中所有角色的攻击力分别提升8%/12%/16%/20%",
      effect: [{ type: BuffType.ATKPrcent, getValue: (_, s) => [8, 12, 16, 20][s - 1] || 0 }],
      stackable: true,
      stack: 1,
      limit: 4,
      enable: true,
      shareable: true,
      stackText: "元素类型数量",
      target: BuffTarget.All,
    },
    {
      label: "道具完备",
      describe: "魔术·运变惊奇召唤的惊奇猫猫盒发生了元素转化后，琳妮特元素爆发造成的伤害提升15%",
      effect: [{ type: BuffType.BurstPrcent, getValue: () => 15 }],
      enable: true,
    },
    Constellation_Q_3,
    Constellation_E_5,
    {
      label: "6命·示辨真意的眼",
      describe: "琳妮特施放谜影障身法的谜影突刺时，将获得风元素附魔，风元素伤害加成提升20%",
      effect: [
        { type: BuffType.AnemoPrcent, getValue: () => 20 },
        { type: BuffType.Enchanting, getValue: () => EnchantingType[ElementType.Anemo] },
      ],
      enable: false,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![琳妮特](https://enka.network/ui/UI_AvatarIcon_Linette.png) */
export const Linette = new LinetteData();
