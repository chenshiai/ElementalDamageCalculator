import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_GEO_24P, Constellation_E_5, Constellation_Q_3 } from "../buffs";

@EnKaId(10000027, "凝光")
@Weapon(WeaponType.Magic)
@Element(ElementType.Geo)
@BaseData(Rarity.Four, [9787, 212, 573], 40, [10464, 266, 613])
@Icons("UI_AvatarIcon_Ningguang")
export class NingguangData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["千金掷", "璇玑屏", "天权崩玉"];
  normalAttack = [
    action("普通攻击伤害", AttackType.Normal, ElementType.Geo, {
      atk: [
        0.28, 0.301, 0.322, 0.35, 0.371, 0.392, 0.42, 0.448, 0.476, 0.504, 0.53312, 0.5712, 0.60928, 0.64736, 0.68544,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Geo, {
      atk: [
        1.7408, 1.87136, 2.00192, 2.176, 2.30656, 2.43712, 2.6112, 2.78528, 2.95936, 3.13344, 3.314483, 3.551232,
        3.787981, 4.02473, 4.261478,
      ],
    }),
    action("星璇伤害", AttackType.Strong, ElementType.Geo, {
      atk: [
        0.496, 0.5332, 0.5704, 0.62, 0.6572, 0.6944, 0.744, 0.7936, 0.8432, 0.8928, 0.944384, 1.01184, 1.079296,
        1.146752, 1.214208,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Geo, {
      atk: [
        0.568288, 0.614544, 0.6608, 0.72688, 0.773136, 0.826, 0.898688, 0.971376, 1.044064, 1.12336, 1.202656, 1.281952,
        1.361248, 1.440544, 1.51984,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Normal, ElementType.Geo, {
      atk: [
        1.136335, 1.228828, 1.32132, 1.453452, 1.545944, 1.65165, 1.796995, 1.94234, 2.087686, 2.246244, 2.404802,
        2.563361, 2.721919, 2.880478, 3.039036,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Geo, {
      atk: [
        1.419344, 1.534872, 1.6504, 1.81544, 1.930968, 2.063, 2.244544, 2.426088, 2.607632, 2.80568, 3.003728, 3.201776,
        3.399824, 3.597872, 3.79592,
      ],
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Geo, {
      atk: [
        2.304, 2.4768, 2.6496, 2.88, 3.0528, 3.2256, 3.456, 3.6864, 3.9168, 4.1472, 4.3776, 4.608, 4.896, 5.184, 5.472,
      ],
    }),
  ];
  burstSkill = [
    action("每颗宝石伤害", AttackType.Skill, ElementType.Geo, {
      atk: [
        0.8696, 0.93482, 1.00004, 1.087, 1.15222, 1.21744, 1.3044, 1.39136, 1.47832, 1.56528, 1.65224, 1.7392, 1.8479,
        1.9566, 2.0653,
      ],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...A_80_GEO_24P,
    {
      label: "储之千日，用之一刻",
      describe: "穿过璇玑屏的角色会获得12%岩元素伤害加成",
      effect: [{ type: BuffType.GeoPrcent, getValue: () => 12 }],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
    },
    Constellation_Q_3,
    Constellation_E_5,
  ];
}

/** ![凝光](https://enka.network/ui/UI_AvatarIcon_Ningguang.png) */
export const Ningguang = new NingguangData();
