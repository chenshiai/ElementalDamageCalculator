import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { ActionOn, AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 裁叶萃光 */
export const Ayus = createWeapon(
  {
    name: "裁叶萃光",
    enkaId: 11512,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_Ayus_Awaken"),
    baseAtk: 542,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CRITICAL_HURT,
    statValue: 88.2,
  },
  (affix = 1) => {
    const crt = [4, 5, 6, 7, 8][affix - 1] + "%";
    const add = [120, 150, 180, 210, 240][affix - 1] + "%";
    return {
      title: "白月枝芒",
      text: highlight`暴击率提升${crt}；普通攻击造成元素伤害后，获得「裁叶」效果：普通攻击和元素战技造成的伤害提高，提高值相当于元素精通的${add}。该效果在生效28次或12秒后消失，每12秒至多获得一次「裁叶」效果。`,
    };
  },
  (affix = 1) => {
    const crt = [4, 5, 6, 7, 8][affix - 1];
    const add = [120, 150, 180, 210, 240][affix - 1];
    return [
      {
        label: "暴击率提升",
        describe: `暴击率提升${crt}%`,
        effect: [{ type: BuffType.Critcal, getValue: () => crt }],
        enable: true,
      },
      {
        label: "普通攻击和元素战技造成的伤害提高",
        describe: `普通攻击和元素战技造成的伤害提高，提高值相当于元素精通的${add}%`,
        effect: [
          {
            type: BuffType.NormalFixed,
            getValue: (data) => {
              return ((data.elementalMystery + data.elementalMystery_NT) * add) / 100;
            },
            actionOn: ActionOn.Indirect,
          },
          {
            type: BuffType.SkillFixed,
            getValue: (data) => {
              return ((data.elementalMystery + data.elementalMystery_NT) * add) / 100;
            },
            actionOn: ActionOn.Indirect,
          },
        ],
        enable: true,
      },
    ];
  }
);
