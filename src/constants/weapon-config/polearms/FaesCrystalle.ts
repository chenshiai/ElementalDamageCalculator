import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 寒息 */
export const FaesCrystalle = createWeapon(
  {
    name: "寒息",
    enkaId: 13435,
    weaponType: WeaponType.GreatSword,
    icon: getEnkaUI("UI_EquipIcon_Pole_FaesCrystalle_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CHARGE_EFFICIENCY,
    statValue: 45.9,
  },
  (affix = 1) => {
    let a = [20, 25, 30, 35, 40][affix - 1] + "%";
    let b = [6, 7.5, 9, 10.5, 12][affix - 1];
    return {
      title: "万顷一掷",
      text: highlight`触发冰元素或水元素相关反应后的15秒内，装备者的攻击力提升${a}，并为队伍中自己的其他角色恢复${b}点元素能量。该效果每16秒至多触发一次。`,
    };
  },
  (affix = 1) => {
    let a = [20, 25, 30, 35, 40][affix - 1];
    return [
      {
        label: "攻击力提升",
        describe: `攻击力提升${a}%`,
        effect: [{ type: BuffType.ATKPrcent, getValue: () => a }],
        enable: true,
      },
    ];
  }
);
