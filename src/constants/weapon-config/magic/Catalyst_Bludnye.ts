import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 漩流颂歌 */
export const Catalyst_Bludnye = createWeapon(
  {
    name: "漩流颂歌",
    enkaId: 14524,
    weaponType: WeaponType.Magic,
    icon: getEnkaUI("UI_EquipIcon_Catalyst_Bludnye_Awaken"),
    baseAtk: 542,
    rarity: Rarity.Five,
    appendPropId: AppendProp.HP_PERCENT,
    statValue: 66.2,
  },
  (affix = 1) => {
    let a = [4, 5, 6, 7, 8][affix - 1] + "%";
    let a2 = [0.4, 0.5, 0.6, 0.7, 0.8][affix - 1] + "%";
    let b = [8, 10, 12, 14, 16][affix - 1] + "%";
    return {
      title: "沉眠的回旋曲",
      text: highlight`治疗加成提升${a}；\n
进行治疗时，装备者获得「告真的蜜酿」效果：生命值上限提升${a}，且基于装备者生命值上限超过40000的部分，每1000点生命值上限都会使队伍中自己的当前场上角色的攻击力提升${a2}，通过这种方式至多提升${b}。该效果持续10秒，至多叠加3层。\n
队伍中附近的角色触发冻结反应或星扩散反应后的5秒内，上述效果中生命值上限与攻击力提升的效果额外提高75%。\n
装备者处于队伍后台时，依然能触发上述效果。`,
    };
  },
  (affix = 1) => {
    let a = [4, 5, 6, 7, 8][affix - 1];
    let a2 = [0.4, 0.5, 0.6, 0.7, 0.8][affix - 1];
    let b = [8, 10, 12, 14, 16][affix - 1];
    return [
      {
        label: "治疗加成提升",
        describe: `治疗加成提升${a}%`,
        effect: [
          {
            type: BuffType.HealAdd,
            getValue: () => a,
          },
        ],
        enable: true,
      },
      {
        label: "生命上限提高",
        describe: `生命值上限提高${a}%`,
        effect: [
          {
            type: BuffType.HPPrcent,
            getValue: (_, s) => a + 0.75 * a * s,
          },
        ],
        enable: true,
        stackable: true,
        limit: 1,
        stack: 1,
        stackText: "触发星扩散/冻结",
        stackType: "switch",
      },
      {
        label: "攻击力提升",
        describe: `进行治疗时，基于装备者生命值上限超过40000的部分，每1000点生命值上限都会使队伍中自己的当前场上角色的攻击力提升${a2}%，通过这种方式至多提升${b}%。叠加3层计算`,
        effect: [
          {
            type: BuffType.ATKPrcent,
            getValue: (data, s) => {
              return Math.min(b, (Math.max(0, data.baseHP + data.extraHP - 40000) / 1000) * a2) * (1 + s * 0.75) * 3;
            },
          },
        ],
        limit: 1,
        stack: 1,
        stackText: "触发星扩散/冻结",
        stackType: "switch",
        enable: true,
      },
    ];
  }
);
