import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 暗巷的酒与诗 */
export const Catalyst_Outlaw = createWeapon(
  {
    name: "暗巷的酒与诗",
    enkaId: 14410,
    weaponType: WeaponType.Magic,
    icon: getEnkaUI("UI_EquipIcon_Catalyst_Outlaw_Awaken"),
    baseAtk: 565,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CHARGE_EFFICIENCY,
    statValue: 30.6,
  },
  (affix = 1) => {
    let a = [14, 16, 18, 20, 22][affix - 1] + "%";
    let b = [20, 25, 30, 35, 40][affix - 1] + "%";
    return {
      title: "变化万端",
      text: highlight`普通攻击命中敌人后，冲刺或替代冲刺的能力消耗的体力降低${a}，持续5秒。此外，使用冲刺或替代冲刺的能力后，攻击力提升${b}，持续5秒。`,
    };
  },
  (affix = 1) => {
    let b = [20, 25, 30, 35, 40][affix - 1];
    return [
      {
        label: "攻击力提升",
        describe: `使用冲刺或替代冲刺的能力后，攻击力提升${b}%`,
        effect: [{ type: BuffType.ATKPrcent, getValue: () => b }],
        enable: false,
      },
    ];
  }
);
