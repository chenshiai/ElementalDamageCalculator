import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 山王长牙 */
export const EmeraldSword = createWeapon(
    {
      name: "山王长牙",
      enkaId: 12513,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_EmeraldSword_Awaken"),
      baseAtk: 741,
      rarity: Rarity.Five,
      appendPropId: AppendProp.CRITICAL,
      statValue: 11,
    },
    (affix = 1) => {
      const add = [10, 12.5, 15, 17.5, 20][affix - 1] + "%";
      return {
        title: "绿松石之狩",
        text: highlight`元素战技命中敌人后，会获得1层「悬木祝赐」，该效果每0.5秒至多触发1次；队伍中附近的角色触发了燃烧或烈绽放反应后，装备者会获得3层悬木祝赐，该效果每2秒至多触发1次，队伍中的角色处于队伍后台时也能触发。悬木祝赐：元素战技伤害和元素爆发伤害提升${add}，持续6秒，至多叠加六层，每层持续时间独立计算。`,
      };
    },
    (affix = 1) => {
      const add = [10, 12.5, 15, 17.5, 20][affix - 1];
      return [
        {
          label: "绿松石之狩",
          describe: `元素战技伤害和元素爆发伤害提升${add}%，至多叠加六层`,
          effect: [
            { type: BuffType.SkillPrcent, getValue: (_, stack) => add * stack },
            { type: BuffType.BurstPrcent, getValue: (_, stack) => add * stack },
          ],
          stackable: true,
          stackText: "悬木祝赐",
          limit: 6,
          stack: 6,
          enable: true,
        },
      ];
    }
  )