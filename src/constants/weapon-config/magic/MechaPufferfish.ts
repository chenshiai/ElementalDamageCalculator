import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 冲浪时光 */
export const MechaPufferfish = createWeapon(
    {
      name: "冲浪时光",
      enkaId: 14516,
      weaponType: WeaponType.Magic,
      rarity: Rarity.Five,
      icon: getEnkaUI("UI_EquipIcon_Catalyst_MechaPufferfish_Awaken"),
      baseAtk: 542,
      appendPropId: AppendProp.CRITICAL_HURT,
      statValue: 88.2,
    },
    (affix = 1) => {
      const hp = [20, 25, 30, 35, 40][affix - 1] + "%";
      const add = [12, 15, 18, 21, 24][affix - 1] + "%";
      return {
        title: "水色回忆",
        text: highlight`生命值上限提高${hp}。每15秒一次，施放元素战技后的14秒内，产生如下效果：获得4层「炽夏」，每层使普通攻击造成的伤害提升${add}。持续期间内，每1.5秒一次：普通攻击命中敌人后，移除1层；每1.5秒一次：对敌人触发蒸发反应后，增加1层。「炽夏」效果至多叠加4层。`,
      };
    },
    (affix = 1) => {
      const hp = [20, 25, 30, 35, 40][affix - 1];
      const add = [12, 15, 18, 21, 24][affix - 1];
      return [
        {
          label: "生命值上限提高",
          describe: `生命值上限提高${hp}%`,
          effect: [{ type: BuffType.HPPrcent, getValue: () => hp }],
          enable: true,
        },
        {
          label: "普通攻击伤害提升",
          describe: `每层「炽夏」使普通攻击伤害提升${add}%， 至多叠加四层`,
          effect: [{ type: BuffType.NormalPrcent, getValue: (_, s) => add * s }],
          stackable: true,
          stackText: "炽夏",
          limit: 4,
          stack: 4,
          enable: true,
        },
      ];
    }
  )