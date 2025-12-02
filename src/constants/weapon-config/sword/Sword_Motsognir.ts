import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 黑蚀 */
export const Sword_Motsognir = createWeapon(
  {
    name: "黑蚀",
    enkaId: 11518,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_Motsognir_Awaken"),
    baseAtk: 608,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CRITICAL,
    statValue: 33.1,
  },
  (affix = 1) => {
    let a = [16, 20, 24, 28, 32][affix - 1] + "%";
    let b = [20, 25, 30, 35, 40][affix - 1] + "%";
    return {
      title: "白日王的灼辉",
      text: highlight`元素爆发造成的暴击伤害提升${a}；元素爆发命中敌人时，将获得「白昼之刃」效果：攻击力提升${b}，除装备者以外，队伍中附近的当前场上角色攻击力提升${a}，持续3秒。此外，队伍拥有「魔导·秘仪」效果时，「白昼之刃」的效果额外提升75%。装备者处于队伍后台时，依然能触发上述效果。`,
    };
  },
  (affix = 1) => {
    let a = [16, 20, 24, 28, 32][affix - 1];
    let b = [20, 25, 30, 35, 40][affix - 1];
    return [
      {
        label: "元素爆发造成的暴击伤害提升",
        describe: `元素爆发造成的暴击伤害提升${a}%`,
        effect: [{ type: BuffType.BurstCritcalHurt, getValue: () => a }],
        enable: true,
      },
      {
        label: "「白昼之刃」",
        describe: `攻击力提升${b}%。队伍拥有「魔导·秘仪」效果时，「白昼之刃」的效果额外提升75%`,
        effect: [{ type: BuffType.ATKPrcent, getValue: (_, s) => b + s * b * 0.75 }],
        enable: true,
        stack: 1,
        limit: 1,
        stackable: true,
        stackText: "魔导·秘仪",
        stackType: "switch",
      },
      {
        label: "「白昼之刃」",
        describe: `攻击力提升${a}%。队伍拥有「魔导·秘仪」效果时，「白昼之刃」的效果额外提升75%`,
        effect: [{ type: BuffType.ATKPrcent, getValue: (_, s) => a + s * a * 0.75 }],
        enable: true,
        shareable: true,
        stack: 1,
        limit: 1,
        stackable: true,
        stackText: "魔导·秘仪",
        stackType: "switch",
        target: BuffTarget.Other,
      },
    ];
  }
);
