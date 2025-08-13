import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 静谧之曲 */
export const Bow_Vorpal = createWeapon(
  {
    name: "静谧之曲",
    enkaId: 15425,
    weaponType: WeaponType.Bow,
    icon: getEnkaUI("UI_EquipIcon_Bow_Vorpal_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 41.3,
  },
  (affix = 1) => {
    let a = 16 + (affix - 1) * 4 + "%";
    return {
      title: "深海弦振",
      text: highlight`受到治疗后，造成的伤害提升${a}，持续8秒。角色处于队伍后台也能触发。`,
    };
  },
  (affix = 1) => {
    let a = 16 + (affix - 1) * 4;
    return [
      {
        label: "深海弦振",
        describe: `受到治疗后，造成的伤害提升${a}%，持续8秒`,
        effect: [{ type: BuffType.GlobalPrcent, getValue: () => a }],
        enable: false,
      },
    ];
  }
);
