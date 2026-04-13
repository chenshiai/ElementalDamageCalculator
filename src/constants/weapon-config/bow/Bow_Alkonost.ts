
import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 霜结的誓金枝 */
export const Alkonost = createWeapon(
  {
    name: "霜结的誓金枝",
    enkaId: 15516,
    weaponType: WeaponType.Bow,
    icon: getEnkaUI("UI_EquipIcon_Bow_Alkonost_Awaken"),
    baseAtk: 542,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CRITICAL_HURT,
    statValue: 88.2,
  },
  (affix = 1) => {
    const a = [16, 20, 24, 28, 32][affix - 1] + "%";
    const b = [40, 50, 60, 70, 80][affix - 1] + "%";
    const c = [20, 25, 30, 35, 40][affix - 1] + "%";
    return {
      title: "与君致意的黎明",
      text: highlight`防御力提高${a}。装备者的元素战技或月结晶攻击命中敌人时，将获得持续6秒的「霜妖精的报恩」效果：
      </br>装备者造成的岩元素伤害提升${b}，月结晶反应伤害提升${b}；
      </br>持续期间，若装备者附近存在月笼，则队伍中附近的所有其他角色还会获得「霜妖精的恶戏」效果：
      </br>造成的岩元素伤害提升${c}，月结晶反应伤害提升${c}。装备者处于队伍后台时，依然能触发上述效果。`,
    };
  },
  (affix = 1) => {
    const a = [16, 20, 24, 28, 32][affix - 1];
    const b = [40, 50, 60, 70, 80][affix - 1];
    const c = [20, 25, 30, 35, 40][affix - 1];
    return [
      {
        label: "防御力提高",
        describe: `防御力提高${a}%`,
        effect: [{ type: BuffType.DEFPrcent, getValue: () => a }],
        enable: true,
      },
      {
        label: "岩元素伤害提升",
        describe: `装备者造成的岩元素伤害提升${b}%`,
        effect: [{ type: BuffType.GeoPrcent, getValue: () => b }],
        enable: true,
      },
      {
        label: "月结晶反应伤害提升",
        describe: `月结晶反应伤害提升${b}%`,
        effect: [{ type: BuffType.MoonCrystalPrcent, getValue: () => b }],
        enable: true,
      },
      {
        label: "岩元素伤害提升",
        describe: `装备者造成的岩元素伤害提升${c}%`,
        effect: [{ type: BuffType.GeoPrcent, getValue: () => c }],
        enable: true,
        shareable: true,
        target: BuffTarget.Other,
      },
      {
        label: "月结晶反应伤害提升",
        describe: `月结晶反应伤害提升${c}%`,
        effect: [{ type: BuffType.MoonCrystalPrcent, getValue: () => c }],
        enable: true,
        shareable: true,
        target: BuffTarget.Other,
      },
    ];
  }
);
