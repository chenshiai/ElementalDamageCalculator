import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 黎明破晓之史 */
export const Bow_Arianna = createWeapon(
  {
    name: "黎明破晓之史",
    enkaId: 15515,
    weaponType: WeaponType.Bow,
    icon: getEnkaUI("UI_EquipIcon_Bow_Arianna_Awaken"),
    baseAtk: 674,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CRITICAL_HURT,
    statValue: 44.1,
  },
  (affix = 1) => {
    const a = [60, 75, 90, 105, 120][affix - 1] + "%";
    const b = [10, 12.5, 15, 17.5, 20][affix - 1] + "%";
    const c = [20, 25, 30, 35, 40][affix - 1] + "%";
    return {
      title: "悠远的流颂之歌",
      text: highlight`装备者获得「渐起的晓风」：脱离战斗状态3秒后，普通攻击、元素战技和元素爆发造成的伤害提升${a}。在战斗状态下，上述伤害提升效果每秒降低${b}，直到降低至0%；装备者的普通攻击、元素战技或元素爆发命中敌人时，对应类别的伤害提升效果提升${b}，直到提升至${a}，上述每种类别的攻击每0.1秒至多触发一次该效果。装备者处于队伍后台时，依然能触发上述效果。<br />此外，队伍拥有「魔导·秘仪」效果时，装备者的普通攻击、元素战技或元素爆发命中敌人时，改为使所有类别的伤害提升效果提升${c}。`,
    };
  },
  (affix = 1) => {
    const a = [60, 75, 90, 105, 120][affix - 1];
    const b = [10, 12.5, 15, 17.5, 20][affix - 1];
    const c = [20, 25, 30, 35, 40][affix - 1];
    return [
      {
        label: `普攻伤害提升`,
        describe: `普通攻击命中敌人时伤害提升${b}%，至多${a}%`,
        effect: [{ type: BuffType.NormalPrcent, getValue: (_, s) => b * s }],
        stack: 6,
        limit: 6,
        stackable: true,
        stackText: "「渐起的晓风」",
        enable: true,
      },
      {
        label: `元素战技伤害提升`,
        describe: `元素战技命中敌人时伤害提升${b}%，至多${a}%`,
        effect: [{ type: BuffType.SkillPrcent, getValue: (_, s) => b * s }],
        stack: 6,
        limit: 6,
        stackable: true,
        stackText: "「渐起的晓风」",
        enable: true,
      },
      {
        label: `元素爆发伤害提升`,
        describe: `元素爆发命中敌人时伤害提升${b}%，至多${a}%`,
        effect: [{ type: BuffType.BurstPrcent, getValue: (_, s) => b * s }],
        stack: 6,
        limit: 6,
        stackable: true,
        stackText: "「渐起的晓风」",
        enable: true,
      },
    ];
  }
);
