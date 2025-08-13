import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 嘟嘟可故事集 */
export const Ludiharpastum = createWeapon(
  {
    name: "嘟嘟可故事集",
    enkaId: 14413,
    weaponType: WeaponType.Magic,
    icon: getEnkaUI("UI_EquipIcon_Catalyst_Ludiharpastum_Awaken"),
    baseAtk: 454,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 55.1,
  },
  (affix = 1) => {
    let a = [16, 20, 24, 28, 32][affix - 1] + "%";
    let b = [8, 10, 12, 14, 16][affix - 1] + "%";
    return {
      title: "嘟嘟！大冒险",
      text: highlight`普通攻击命中敌人后的6秒内，重击造成的伤害提升${a}；重击命中敌人后的6秒内，攻击力提升${b}。`,
    };
  },
  (affix = 1) => {
    let a = [16, 20, 24, 28, 32][affix - 1];
    let b = [8, 10, 12, 14, 16][affix - 1];
    return [
      {
        label: "重击造成的伤害提升",
        describe: `普通攻击命中敌人后的6秒内，重击造成的伤害提升${a}%`,
        effect: [{ type: BuffType.StrongPrcent, getValue: () => a }],
        enable: false,
      },
      {
        label: "攻击力提升",
        describe: `重击命中敌人后，攻击力提升${b}%`,
        effect: [{ type: BuffType.ATKPrcent, getValue: () => b }],
        enable: false,
      },
    ];
  }
);
