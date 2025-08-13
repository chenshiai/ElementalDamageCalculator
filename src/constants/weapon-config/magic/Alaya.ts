import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 图莱杜拉的回忆 */
export const Alaya = createWeapon(
  {
    name: "图莱杜拉的回忆",
    enkaId: 14512,
    weaponType: WeaponType.Magic,
    icon: getEnkaUI("UI_EquipIcon_Catalyst_Alaya_Awaken"),
    baseAtk: 674,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CRITICAL_HURT,
    statValue: 44.1,
  },
  (affix = 1) => {
    let sp = 10 + (affix - 1) * 2.5 + "%";
    let add = 4.8 + (affix - 1) * 1.2 + "%";
    let add2 = 9.6 + (affix - 1) * 2.4 + "%";
    let lim = 48 + (affix - 1) * 12 + "%";
    return {
      title: "堙没的蓝宝石泪滴",
      text: highlight`普通攻击速度提升${sp}；施放元素战技后的14秒内：普通攻击造成的伤害每1秒提升${add}；普通攻击命中敌人后，普通攻击造成的伤害提升${add2}，该效果每0.3秒至多触发1次。持续期间内，普通攻击造成的伤害至多通过上述效果提升至${lim}。角色退场时将移除效果，再次施放元素战技时会先移除原有的效果。`,
    };
  },
  (affix = 1) => {
    let lim = 48 + (affix - 1) * 12;
    return [
      {
        label: "堙没的蓝宝石泪滴",
        describe: `普通攻击造成的伤害至多提升至${lim}%`,
        effect: [{ type: BuffType.NormalPrcent, getValue: () => lim }],
        enable: false,
      },
    ];
  }
);
