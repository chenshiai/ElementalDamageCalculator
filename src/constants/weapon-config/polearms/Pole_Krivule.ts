import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 圣祭者的辉杖 */
export const Pole_Krivule = createWeapon(
  {
    name: "圣祭者的辉杖",
    enkaId: 13434,
    weaponType: WeaponType.Polearms,
    icon: getEnkaUI("UI_EquipIcon_Pole_Krivule_Awaken"),
    baseAtk: 620,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CRITICAL,
    statValue: 9.2,
  },
  (affix = 1) => {
    const a = [8, 10, 12, 14, 16][affix - 1] + "%";
    const b = [6, 7.5, 9, 10.5, 12][affix - 1] + "%";
    return {
      title: "未染的觖望",
      text: highlight`元素战技命中敌人后的6秒内，攻击力提升${a}，元素充能效率提升${b}。该效果至多叠加3层，装备者处于队伍后台时依然能触发。`,
    };
  },
  (affix = 1) => {
    const a = [8, 10, 12, 14, 16][affix - 1];
    const b = [6, 7.5, 9, 10.5, 12][affix - 1];
    return [
      {
        label: "未染的觖望",
        describe: `元素战技命中敌人后的6秒内，攻击力提升${a}%，元素充能效率提升${b}%。该效果至多叠加3层，装备者处于队伍后台时依然能触发。`,
        effect: [
          { type: BuffType.ATKPrcent, getValue: (_, s) => a * s },
          { type: BuffType.ChargeFixed, getValue: (_, s) => b * s },
        ],
        enable: true,
        stack: 3,
        limit: 3,
        stackable: true,
      },
    ];
  }
);
