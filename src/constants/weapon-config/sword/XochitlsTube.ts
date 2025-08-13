import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { ActionOn, AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 岩峰巡歌 */
export const XochitlsTube = createWeapon(
  {
    name: "岩峰巡歌",
    enkaId: 11516,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_XochitlsTube_Awaken"),
    baseAtk: 542,
    rarity: Rarity.Five,
    appendPropId: AppendProp.DEFENSE_PERCENT,
    statValue: 82.7,
  },
  (affix = 1) => {
    let def = [0, 8, 10, 12, 14, 16][affix] + "%";
    let add = [0, 10, 12.5, 15, 17.5, 20][affix] + "%";
    let add2 = [0, 8, 10, 12, 14, 16][affix] + "%";
    let lim = [0, 25.6, 32, 38.4, 44.8, 51.2][affix] + "%";
    return {
      title: "不凋的盛年",
      text: highlight`普通攻击或下落攻击命中敌人后，将获得「荣花之歌」：防御力提高${def}，并获得${add}所有元素伤害加成，该效果持续6秒，至多叠加2层，每0.1秒至多触发一次。该效果叠加至2层或2层的持续时间刷新时，基于装备者的防御力，每1000点使队伍中附近所有角色的所有元素伤害加成提高${add2}，至多提高${lim}`,
    };
  },
  (affix = 1) => {
    let def = [0, 8, 10, 12, 14, 16][affix];
    let add = [0, 10, 12.5, 15, 17.5, 20][affix];
    let add2 = [0, 8, 10, 12, 14, 16][affix];
    let lim = [0, 25.6, 32, 38.4, 44.8, 51.2][affix];
    return [
      {
        label: "「荣花之歌」",
        describe: `普通攻击或下落攻击命中敌人后，将获得「荣花之歌」：防御力提高${def}%，并获得${add}%所有元素伤害加成，至多叠加2层`,
        effect: [
          { type: BuffType.DEFPrcent, getValue: (_, s) => def * s },
          { type: BuffType.HydroPrcent, getValue: (_, s) => add * s },
          { type: BuffType.PyroPrcent, getValue: (_, s) => add * s },
          { type: BuffType.ElectroPrcent, getValue: (_, s) => add * s },
          { type: BuffType.AnemoPrcent, getValue: (_, s) => add * s },
          { type: BuffType.CryoPrcent, getValue: (_, s) => add * s },
          { type: BuffType.DendroPrcent, getValue: (_, s) => add * s },
          { type: BuffType.GeoPrcent, getValue: (_, s) => add * s },
        ],
        stackable: true,
        limit: 2,
        stack: 2,
        enable: true,
      },
      {
        label: "全队元素伤害提升",
        describe: `基于装备者的防御力，每1000点使队伍中附近所有角色的所有元素伤害加成提高${add2}%，至多提高${lim}%`,
        effect: [
          {
            type: BuffType.HydroPrcent,
            getValue: (data) => Math.min(lim, ((data.baseDEF + data.extraDEF) / 1000) * add2),
            actionOn: ActionOn.External,
            transform: true,
          },
          {
            type: BuffType.PyroPrcent,
            getValue: (data) => Math.min(lim, ((data.baseDEF + data.extraDEF) / 1000) * add2),
            actionOn: ActionOn.External,
            transform: true,
          },
          {
            type: BuffType.ElectroPrcent,
            getValue: (data) => Math.min(lim, ((data.baseDEF + data.extraDEF) / 1000) * add2),
            actionOn: ActionOn.External,
            transform: true,
          },
          {
            type: BuffType.AnemoPrcent,
            getValue: (data) => Math.min(lim, ((data.baseDEF + data.extraDEF) / 1000) * add2),
            actionOn: ActionOn.External,
            transform: true,
          },
          {
            type: BuffType.CryoPrcent,
            getValue: (data) => Math.min(lim, ((data.baseDEF + data.extraDEF) / 1000) * add2),
            actionOn: ActionOn.External,
            transform: true,
          },
          {
            type: BuffType.DendroPrcent,
            getValue: (data) => Math.min(lim, ((data.baseDEF + data.extraDEF) / 1000) * add2),
            actionOn: ActionOn.External,
            transform: true,
          },
          {
            type: BuffType.GeoPrcent,
            getValue: (data) => Math.min(lim, ((data.baseDEF + data.extraDEF) / 1000) * add2),
            actionOn: ActionOn.External,
            transform: true,
          },
        ],
        enable: true,
        shareable: true,
        target: BuffTarget.All,
      },
    ];
  }
);
