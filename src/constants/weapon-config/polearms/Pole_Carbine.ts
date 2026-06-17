import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { ActionOn, AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 灾悔 */
export const Carbine = createWeapon(
  {
    name: "灾悔",
    enkaId: 13517,
    weaponType: WeaponType.Polearms,
    icon: getEnkaUI("UI_EquipIcon_Pole_Carbine_Awaken"),
    baseAtk: 674,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CRITICAL,
    statValue: 22.1,
  },
  (affix = 1) => {
    let a = [40, 50, 60, 70, 80][affix - 1] + "%";
    return {
      title: "祸咎一击",
      text: highlight`装备者施放元素战技后，获得持续17秒的「纷争之途」，和分别持续3秒的「无赦」与「无愈」效果，每18秒至多触发一次。<br/>
无赦：装备者的普通攻击与重击伤害提升${a}。<br/>
无愈：装备者的元素战技与元素爆发伤害提升${a}。<br/>
「纷争之途」期间，装备者的普通攻击与重击命中敌人时，将延长1秒「无愈」；装备者的元素战技与元素爆发命中敌人时，将延长1秒「无赦」。上述效果每0.1秒分别至多触发一次。「纷争之途」结束或装备者退场将解除「无赦」与「无愈」。<br/>
魔导·秘仪：上述所有伤害提升效果提升75%。`,
    };
  },
  (affix = 1) => {
    let a = [40, 50, 60, 70, 80][affix - 1];
    return [
      {
        label: "无赦",
        describe: `普通攻击与重击伤害提升${a}%`,
        effect: [
          { type: BuffType.NormalPrcent, getValue: (_, s) => a * (1 + s * 0.75) },
          { type: BuffType.StrongPrcent, getValue: (_, s) => a * (1 + s * 0.75) },
        ],
        enable: true,
        stackable: true,
        stackText: "魔导·秘仪",
        stackType: "switch",
        stack: 1,
        limit: 1,
      },
      {
        label: "无愈",
        describe: `元素战技与元素爆发伤害提升${a}%`,
        effect: [
          { type: BuffType.SkillPrcent, getValue: (_, s) => a * (1 + s * 0.75) },
          { type: BuffType.BurstPrcent, getValue: (_, s) => a * (1 + s * 0.75) },
        ],
        enable: true,
        stackable: true,
        stackText: "魔导·秘仪",
        stackType: "switch",
        stack: 1,
        limit: 1,
      },
    ];
  }
);
