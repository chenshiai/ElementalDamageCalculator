import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 流浪乐章 */
export const Catalyst_Troupe = createWeapon(
  {
    name: "流浪乐章",
    enkaId: 14402,
    weaponType: WeaponType.Magic,
    icon: getEnkaUI("UI_EquipIcon_Catalyst_Troupe_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CRITICAL_HURT,
    statValue: 55.1,
  },
  (affix = 1) => {
    let a = [60, 75, 90, 105, 120][affix - 1] + "%";
    let b = [48, 60, 72, 84, 96][affix - 1] + "%";
    let c = [240, 300, 360, 420, 480][affix - 1];
    return {
      title: "登场乐",
      text: highlight`角色登场时，随机获得一个主题曲，持续10秒。每30秒只能触发一次。
        宣叙调：攻击力提升${a}；
        咏叹调：全元素伤害提升${b}。
        间奏曲：元素精通提升${c}；
        `,
    };
  },
  (affix = 1) => {
    let a = [60, 75, 90, 105, 120][affix - 1];
    let b = [48, 60, 72, 84, 96][affix - 1];
    let c = [240, 300, 360, 420, 480][affix - 1];
    return [
      {
        label: "宣叙调：攻击力提升",
        describe: `宣叙调：攻击力提升${a}%`,
        effect: [{ type: BuffType.ATKPrcent, getValue: () => a }],
        enable: false,
      },
      {
        label: "咏叹调：全元素伤害提升",
        describe: `咏叹调：全元素伤害提升${b}%`,
        effect: [
          { type: BuffType.HydroPrcent, getValue: () => b },
          { type: BuffType.PyroPrcent, getValue: () => b },
          { type: BuffType.ElectroPrcent, getValue: () => b },
          { type: BuffType.AnemoPrcent, getValue: () => b },
          { type: BuffType.CryoPrcent, getValue: () => b },
          { type: BuffType.DendroPrcent, getValue: () => b },
          { type: BuffType.GeoPrcent, getValue: () => b },
        ],
        enable: false,
      },
      {
        label: "间奏曲：元素精通提升",
        describe: `间奏曲：元素精通提升${c}点`,
        effect: [{ type: BuffType.MysteryFixed, getValue: () => c }],
        enable: false,
      },
    ];
  }
);
