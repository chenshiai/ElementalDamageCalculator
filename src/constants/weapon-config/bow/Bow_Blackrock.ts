import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 黑岩战弓 */
export const Bow_Blackrock = createWeapon(
  {
    name: "黑岩战弓",
    enkaId: 15408,
    weaponType: WeaponType.Bow,
    icon: getEnkaUI("UI_EquipIcon_Bow_Blackrock_Awaken"),
    baseAtk: 565,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CRITICAL_HURT,
    statValue: 36.8,
  },
  (affix = 1) => {
    let a = [12, 15, 18, 21, 24][affix - 1] + "%";
    return {
      title: "乘胜追击",
      text: highlight`击败敌人后，攻击力提升${a}，持续30秒。该效果至多叠加三层，每层持续时间独立。`,
    };
  },
  (affix = 1) => {
    let a = [12, 15, 18, 21, 24][affix - 1];
    return [
      {
        label: "攻击力提升",
        describe: `击败敌人后，攻击力提升${a}%，持续30秒。该效果至多叠加三层`,
        effect: [{ type: BuffType.ATKPrcent, getValue: (_, s) => s * a }],
        enable: false,
        stackable: true,
        stack: 3,
        limit: 3,
      },
    ];
  }
);
