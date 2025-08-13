import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 冬极白星 */
export const Worldbane = createWeapon(
  {
    name: "冬极白星",
    enkaId: 15507,
    weaponType: WeaponType.Bow,
    icon: getEnkaUI("UI_EquipIcon_Bow_Worldbane_Awaken"),
    baseAtk: 608,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CRITICAL,
    statValue: 33.1,
  },
  (affix = 1) => {
    let sk = [12, 15, 18, 21, 24][affix - 1] + "%";
    let at = ["10/20/30/48", "12.5/25/37.5/60", "15/30/45/72", "17.5/35/52.5/84", "20/40/60/96"][affix - 1] + "%";
    return {
      title: "极昼的先兆者",
      text: highlight`元素战技和元素爆发造成的伤害提高${sk}；普通攻击、重击、元素战技或元素爆发命中敌人后，将产生1层持续12秒的「白夜极星」效果。处于1/2/3/4层「白夜极星」效果下时，攻击力将提高${at}。由普通攻击、重击、元素战技或元素爆发产生的「白夜极星」将分别独立存在。`,
    };
  },
  (affix = 1) => {
    let sk = [12, 15, 18, 21, 24][affix - 1];
    let at = [
      [10, 20, 30, 48],
      [12.5, 25, 37.5, 60],
      [15, 30, 45, 72],
      [17.5, 35, 52.5, 84],
      [20, 40, 60, 96],
    ][affix - 1];
    return [
      {
        label: "元素战技和元素爆发造成的伤害提高",
        describe: `元素战技和元素爆发造成的伤害提高${sk}%`,
        effect: [
          { type: BuffType.SkillPrcent, getValue: () => sk },
          { type: BuffType.BurstPrcent, getValue: () => sk },
        ],
        enable: true,
      },
      {
        label: "攻击力提高",
        describe: `处于1/2/3/4层「白夜极星」效果下时，攻击力将提高${at.join("/")}%`,
        effect: [{ type: BuffType.ATKPrcent, getValue: (_, stack) => at[stack - 1] || 0 }],
        enable: false,
        stackable: true,
        stackText: "白夜极星",
        limit: 4,
        stack: 4,
      },
    ];
  }
);
