import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 落霞 */
export const Fallensun = createWeapon(
  {
    name: "落霞",
    enkaId: 15411,
    weaponType: WeaponType.Bow,
    icon: getEnkaUI("UI_EquipIcon_Bow_Fallensun_Awaken"),
    baseAtk: 565,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CHARGE_EFFICIENCY,
    statValue: 30.6,
  },
  (affix = 1) => {
    let a = ["6%/10%/14%", "7.5%/12.5%/17.5%", "9%/15%/21%", "10.5%/17.5%/24.5%", "12%/20%/28%"][affix - 1];
    return {
      title: "渊中霞彩",
      text: highlight`具有夕暮、流霞、朝晖三种状态，分别能使造成的伤害提升${a}。攻击命中敌人后，将转换为下一种状态，每7秒至多转换一次状态。装备该武器的角色处于队伍后台时该效果依旧能触发转换。`,
    };
  },
  (affix = 1) => {
    let a = ["6%/10%/14%", "7.5%/12.5%/17.5%", "9%/15%/21%", "10.5%/17.5%/24.5%", "12%/20%/28%"][affix - 1];
    let b = [
      [6, 10, 14],
      [7.5, 12.5, 17.5],
      [9, 15, 21],
      [10.5, 17.5, 24.5],
      [12, 20, 28],
    ][affix - 1];
    return [
      {
        label: "造成伤害提升",
        describe: `夕暮(0)、流霞(1)、朝晖(2)三种状态，分别能使造成的伤害提升${a}（分别用0~2层表示）`,
        effect: [
          {
            type: BuffType.GlobalPrcent,
            getValue: (_, stack) => {
              return b[stack];
            },
          },
        ],
        stackable: true,
        stackText: "状态",
        stack: 0,
        limit: 2,
        enable: true,
      },
    ];
  }
);
