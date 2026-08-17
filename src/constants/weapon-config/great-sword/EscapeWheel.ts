import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 金律铸影 */
export const EscapeWheel = createWeapon(
  {
    name: "金律铸影",
    enkaId: 12435,
    weaponType: WeaponType.GreatSword,
    icon: getEnkaUI("UI_EquipIcon_Claymore_EscapeWheel_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CRITICAL,
    statValue: 27.6,
  },
  (affix = 1) => {
    let a = [18, 22.5, 27, 31.5, 36][affix - 1] + "%";
    let b = [120, 150, 180, 210, 240][affix - 1];
    let c = [28, 35, 42, 49, 56][affix - 1] + "%";
    return {
      title: "交奏的昼与夜",
      text: highlight`每10秒，装备者按照以下顺序，分别奏响对应效果的「谐律乐章」：攻击力提升${a}/元素精通提升${b}点/星烁反应伤害提升${c}，每种乐章效果持续10秒，装备者处于队伍后台时，依然能触发上述效果。
触发星烁反应后，还会额外获得持续12秒的、与触发星烁反应时演奏乐章效果相同的「谐律乐章·复调」，该效果可以与原本的乐章效果叠加，每12秒至多触发一次。`,
    };
  },
  (affix = 1) => {
    let a = [18, 22.5, 27, 31.5, 36][affix - 1];
    let b = [120, 150, 180, 210, 240][affix - 1];
    let c = [28, 35, 42, 49, 56][affix - 1];
    return [
      {
        label: "攻击力提升·三选一",
        describe: `攻击力提升${a}%`,
        effect: [{ type: BuffType.ATKPrcent, getValue: () => a }],
        enable: true,
      },
      {
        label: "元素精通提升·三选一",
        describe: `元素精通提升${b}`,
        effect: [{ type: BuffType.MysteryFixed, getValue: () => b }],
        enable: false,
      },
      {
        label: "星烁反应伤害提升·三选一",
        describe: `星烁反应伤害提升${c}%`,
        effect: [{ type: BuffType.GlobalStartPrcent, getValue: () => c }],
        enable: false,
      },
    ];
  }
);
