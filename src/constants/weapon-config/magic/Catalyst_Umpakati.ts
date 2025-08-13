import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 乘浪的回旋 */
export const Catalyst_Umpakati = createWeapon(
  {
    name: "乘浪的回旋",
    enkaId: 14430,
    weaponType: WeaponType.Magic,
    icon: getEnkaUI("UI_EquipIcon_Catalyst_Umpakati_Awaken"),
    baseAtk: 454,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CHARGE_EFFICIENCY,
    statValue: 61.3,
  },
  (affix = 1) => {
    let a = [20, 25, 30, 35, 40][affix - 1] + "%";
    let b = [12, 15, 18, 21, 24][affix - 1] + "%";
    let c = [24, 30, 36, 42, 48][affix - 1] + "%";
    return {
      title: "长牙飞去来",
      text: highlight`游泳消耗的体力降低15%。此外，施放元素战技后的10秒内，生命值上限提升${a}，队伍中每存在一位水元素类型的角色，生命值上限将进一步提升${b}，至多通过这种方式提升${c}，该效果每15秒至多触发一次。`,
    };
  },
  (affix = 1) => {
    let a = [20, 25, 30, 35, 40][affix - 1];
    let b = [12, 15, 18, 21, 24][affix - 1];
    return [
      {
        label: `生命值上限提升${a}%`,
        describe: `施放元素战技后的10秒内，生命值上限提升${a}%`,
        effect: [{ type: BuffType.HPPrcent, getValue: (_, s) => a + b * s }],
        enable: false,
        stackable: true,
        limit: 2,
        stack: 2,
        stackText: "队伍中水元素类型的角色数量",
      },
    ];
  }
);
