import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 有乐御簾切 */
export const Needle = createWeapon(
  {
    name: "有乐御簾切",
    enkaId: 11514,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_Needle_Awaken"),
    baseAtk: 542,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CRITICAL_HURT,
    statValue: 88.2,
  },
  (affix = 1) => {
    let add = [16, 20, 24, 28, 32][affix - 1] + "%";
    let add2 = [24, 30, 36, 42, 48][affix - 1] + "%";
    let def = [20, 25, 30, 35, 40][affix - 1] + "%";
    return {
      title: "锦之花与龛中剑",
      text: highlight`普通攻击造成的伤害提升${add}，元素战技造成的伤害提升${add2}；队伍中附近的角色在场上造成岩元素伤害后，上述效果进一步提升100%，持续15秒。此外，装备者的防御力提升${def}。`,
    };
  },
  (affix = 1) => {
    let add = [16, 20, 24, 28, 32][affix - 1];
    let add2 = [24, 30, 36, 42, 48][affix - 1];
    let def = [20, 25, 30, 35, 40][affix - 1];
    return [
      {
        label: "普攻伤害、元素战技伤害提升",
        describe: `普通攻击造成的伤害提升${add}%，元素战技造成的伤害提升${add2}%`,
        effect: [
          { type: BuffType.NormalPrcent, getValue: () => add },
          { type: BuffType.SkillPrcent, getValue: () => add2 },
        ],
        enable: true,
      },
      {
        label: "上述效果提升100%",
        describe: `普通攻击造成的伤害提升${add}%，元素战技造成的伤害提升${add2}%`,
        effect: [
          { type: BuffType.NormalPrcent, getValue: () => add },
          { type: BuffType.SkillPrcent, getValue: () => add2 },
        ],
        enable: true,
      },
      {
        label: "防御力提升",
        describe: `装备者的防御力提升${def}%`,
        effect: [{ type: BuffType.DEFPrcent, getValue: () => def }],
        enable: true,
      },
    ];
  }
);
