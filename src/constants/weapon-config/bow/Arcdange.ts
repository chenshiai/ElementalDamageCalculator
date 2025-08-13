import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 白雨心弦 */
export const Arcdange = createWeapon(
  {
    name: "白雨心弦",
    enkaId: 15513,
    weaponType: WeaponType.Bow,
    icon: getEnkaUI("UI_EquipIcon_Bow_Arcdange_Awaken"),
    baseAtk: 542,
    rarity: Rarity.Five,
    appendPropId: AppendProp.HP_PERCENT,
    statValue: 66.2,
  },
  (affix = 1) => {
    const hp1 = [12, 15, 18, 21, 24][affix - 1];
    const hp2 = [24, 30, 36, 42, 48][affix - 1];
    const hp3 = [40, 50, 60, 70, 80][affix - 1];
    const res = `${hp1}/${hp2}/${hp3}%`;
    const cri = [28, 35, 42, 49, 56][affix - 1] + "%";
    return {
      title: "德吕阿的夜曲",
      text: highlight`装备者能获得「疗护」效果，持有1/2/3层疗护时，生命值上限提升${res}。
          <br />在下列情况下，装备者将各获得1层疗护：
          <br /> · 施放元素战技时，持续25秒；
          <br /> · 进行治疗时，持续20秒，装备者处于队伍后台时依然能触发。
          <br />每层疗护的持续时间独立计算。
          <br />此外，处于3层疗护状态下时，元素爆发的暴击率提升${cri}，该效果将在疗护不足3层4秒后移除。
          `,
    };
  },
  (affix = 1) => {
    const hp1 = [12, 15, 18, 21, 24][affix - 1];
    const hp2 = [24, 30, 36, 42, 48][affix - 1];
    const hp3 = [40, 50, 60, 70, 80][affix - 1];
    const res = `${hp1}/${hp2}/${hp3}%`;
    const cri = [28, 35, 42, 49, 56][affix - 1];
    return [
      {
        label: "生命值上限提升",
        describe: `持有1/2/3层疗护时，生命值上限提升${res}`,
        effect: [{ type: BuffType.HPPrcent, getValue: (_, s) => [hp1, hp2, hp3][s - 1] || 0 }],
        stackable: true,
        stackText: "疗护",
        limit: 3,
        stack: 3,
        enable: true,
      },
      {
        label: "元素爆发暴击率提升",
        describe: `处于3层疗护状态下时，元素爆发的暴击率提升${cri}%`,
        effect: [{ type: BuffType.BurstCritcal, getValue: () => cri }],
        enable: true,
      },
    ];
  }
);
