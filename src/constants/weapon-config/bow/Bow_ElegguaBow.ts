import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 虹蛇的雨弦 */
export const Bow_ElegguaBow = createWeapon(
  {
    name: "虹蛇的雨弦",
    enkaId: 15434,
    weaponType: WeaponType.Bow,
    icon: getEnkaUI("UI_EquipIcon_Bow_ElegguaBow_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CHARGE_EFFICIENCY,
    statValue: 45.9,
  },
  (affix = 1) => {
    let a = [28, 35, 42, 49, 56][affix - 1] + "%";
    return {
      title: "圣座外的星语",
      text: highlight`装备者处于队伍后台时，装备者的攻击命中敌人后的8秒内，攻击力提升${a}。`,
    };
  },
  (affix = 1) => {
    let a = [28, 35, 42, 49, 56][affix - 1];
    return [
      {
        label: "圣座外的星语",
        describe: `装备者处于队伍后台时，装备者的攻击命中敌人后的8秒内，攻击力提升${a}%`,
        effect: [{ type: BuffType.ATKPrcent, getValue: () => a }],
        enable: true,
      },
    ];
  }
);
