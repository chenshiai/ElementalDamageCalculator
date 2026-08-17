import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 救赎之斩 */
export const GlintstoneClaymore = createWeapon(
  {
    name: "救赎之斩",
    enkaId: 12436,
    weaponType: WeaponType.GreatSword,
    icon: getEnkaUI("UI_EquipIcon_Claymore_GlintstoneClaymore_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 27.6,
  },
  (affix = 1) => {
    let a = [16, 20, 24, 28, 32][affix - 1] + "%";
    let b = [64, 80, 96, 112, 128][affix - 1];

    return {
      title: "罪责的悔赎",
      text: highlight`触发元素反应的12秒内，装备者的元素精通提升${b}点；触发星烁反应的12秒内，装备者的攻击力提升${a}。装备者处于队伍后台时，依然能触发上述效果。`,
    };
  },
  (affix = 1) => {
    let a = [16, 20, 24, 28, 32][affix - 1];
    let b = [64, 80, 96, 112, 128][affix - 1];
    return [
      {
        label: "攻击力提升",
        describe: `攻击力提升${a}%`,
        effect: [{ type: BuffType.ATKPrcent, getValue: () => a }],
        enable: true,
      },
      {
        label: "元素精通提升",
        describe: `元素精通提升${b}`,
        effect: [{ type: BuffType.MysteryFixed, getValue: () => b }],
        enable: true,
      },
    ];
  }
);
