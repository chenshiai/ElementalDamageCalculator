import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 猎人之径 */
export const Bow_Ayus = createWeapon(
    {
      name: "猎人之径",
      enkaId: 15511,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Ayus_Awaken"),
      baseAtk: 542,
      rarity: Rarity.Five,
      appendPropId: AppendProp.CRITICAL,
      statValue: 44.2,
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1] + "%";
      let e = [160, 200, 240, 280, 320][affix - 1] + "%";
      return {
        title: "兽径的终点",
        text: highlight`获得${a}所有元素伤害加成。重击命中敌人后，将获得「无休止的狩猎」：重击造成的伤害值提高，提高值相当于元素精通数值的${e}。该效果将在生效12次或10秒后消失，每12秒至多获得一次无休止的狩猎。`,
      };
    },
    (affix = 1) => {
      let a = [12, 15, 18, 21, 24][affix - 1];
      let e = [160, 200, 240, 280, 320][affix - 1];
      return [
        {
          label: "元素伤害加成",
          describe: `获得${a}%所有元素伤害加成`,
          effect: [
            { type: BuffType.HydroPrcent, getValue: () => a },
            { type: BuffType.PyroPrcent, getValue: () => a },
            { type: BuffType.ElectroPrcent, getValue: () => a },
            { type: BuffType.AnemoPrcent, getValue: () => a },
            { type: BuffType.CryoPrcent, getValue: () => a },
            { type: BuffType.DendroPrcent, getValue: () => a },
            { type: BuffType.GeoPrcent, getValue: () => a },
          ],
          enable: true,
        },
        {
          label: "无休止的狩猎",
          describe: `重击造成的伤害值提高，提高值相当于元素精通数值的${e}%`,
          effect: [
            {
              type: BuffType.StrongFixed,
              getValue: (data) => ((data.elementalMystery + data.elementalMystery_NT) * e) / 100,
            },
          ],
          enable: true,
        },
      ];
    }
  )