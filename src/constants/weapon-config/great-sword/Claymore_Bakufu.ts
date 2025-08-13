import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 桂木斩长正 */
export const Claymore_Bakufu = createWeapon(
  {
    name: "桂木斩长正",
    enkaId: 12414,
    weaponType: WeaponType.GreatSword,
    icon: getEnkaUI("UI_EquipIcon_Claymore_Bakufu_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CHARGE_EFFICIENCY,
    statValue: 45.9,
  },
  (affix = 1) => {
    let a = [6, 7.5, 9, 10.5, 12][affix - 1] + "%";
    let b = [3, 3.5, 4, 4.5, 5][affix - 1];
    return {
      title: "名士振舞",
      text: highlight`元素战技造成的伤害提升${a}。元素战技命中后，角色流失3点元素能量，并在此后的6秒内，每2秒恢复${b}点元素能量。该效果每10秒至多触发一次，角色处于队伍后台也能触发。`,
    };
  },
  (affix = 1) => {
    let a = [6, 7.5, 9, 10.5, 12][affix - 1];
    return [
      {
        label: "元素战技造成的伤害提升",
        describe: `元素战技造成的伤害提升${a}%`,
        effect: [{ type: BuffType.SkillPrcent, getValue: () => a }],
        enable: true,
      },
    ];
  }
);
