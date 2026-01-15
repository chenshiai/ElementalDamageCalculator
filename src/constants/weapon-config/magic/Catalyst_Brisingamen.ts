import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 帷间夜曲 */
export const Catalyst_Brisingamen = createWeapon(
  {
    name: "帷间夜曲",
    enkaId: 14522,
    weaponType: WeaponType.Magic,
    icon: getEnkaUI("UI_EquipIcon_Catalyst_Brisingamen_Awaken"),
    baseAtk: 542,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CRITICAL_HURT,
    statValue: 88.2,
  },
  (affix = 1) => {
    let a = [10, 12, 14, 16, 18][affix - 1] + "%";
    let a2 = [10, 12, 14, 16, 18][affix - 1];
    let b = [14, 16, 18, 20, 22][affix - 1] + "%";
    let c = [60, 80, 100, 120, 140][affix - 1] + "%";
    return {
      title: "十字路的旅歌",
      text: highlight`生命值上限提高${a}。装备者触发月曜反应或对敌人造成月曜反应伤害时，将为装备者恢复${a2}点元素能量，并获得持续12秒的「丰饶海的神酒」效果：生命值上限进一步提高${b}，月曜反应伤害的暴击伤害提升${c}。恢复元素能量效果每18秒至多触发一次，装备者处于队伍后台时，依然能触发上述效果。`,
    };
  },
  (affix = 1) => {
    let a = [10, 12, 14, 16, 18][affix - 1];
    let b = [14, 16, 18, 20, 22][affix - 1];
    let c = [60, 80, 100, 120, 140][affix - 1];
    return [
      {
        label: "生命上限提高",
        describe: `生命值上限提高${a}%`,
        effect: [
          {
            type: BuffType.HPPrcent,
            getValue: () => a,
          },
        ],
        enable: true,
      },
      {
        label: "生命上限进一步提高",
        describe: `装备者触发月曜反应或对敌人造成月曜反应伤害时，生命值上限提高${b}%`,
        effect: [
          {
            type: BuffType.HPPrcent,
            getValue: () => b,
          },
        ],
        enable: true,
      },
      {
        label: "月曜反应伤害的暴击伤害提升",
        describe: `月曜反应伤害的暴击伤害提升${c}%`,
        effect: [
          {
            type: BuffType.MoonCrystalCritcalHurt,
            getValue: () => c,
          },
          {
            type: BuffType.MoonElectroCritcalHurt,
            getValue: () => c,
          },
          {
            type: BuffType.MoonSwirlCritcalHurt,
            getValue: () => c,
          },
        ],
        enable: true,
      },
    ];
  }
);
