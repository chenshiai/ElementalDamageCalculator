import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { ActionOn, AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 木棉之环 */
export const Catalyst_Isikhulu = createWeapon(
  {
    name: "木棉之环",
    enkaId: 14431,
    weaponType: WeaponType.Magic,
    icon: getEnkaUI("UI_EquipIcon_Catalyst_Isikhulu_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.HP_PERCENT,
    statValue: 41.3,
  },
  (affix = 1) => {
    const add = [0.6, 0.7, 0.8, 0.9, 1][affix - 1] + "%";
    const limit = [16, 20, 24, 28, 32][affix - 1] + "%";
    return {
      title: "丰沃之陆的回声",
      text: highlight`施放元素战技时，获得「玉锻之冕」效果：每1000点生命值上限都会使普通攻击造成的伤害提升${add}，持续10秒。通过这种方式至多使普通攻击造成的伤害提升${limit}。`,
    };
  },
  (affix = 1) => {
    const add = [0.6, 0.7, 0.8, 0.9, 1][affix - 1];
    const limit = [16, 20, 24, 28, 32][affix - 1];
    return [
      {
        label: "丰沃之陆的回声",
        describe: `每1000点生命值上限都会使普通攻击造成的伤害提升${add}%，至多${limit}%`,
        effect: [
          {
            type: BuffType.NormalPrcent,
            getValue: (data) => {
              return Math.min(limit, ((data.baseHP + data.extraHP + data.extraHP_NT) / 1000) * add);
            },
            actionOn: ActionOn.Indirect,
          },
        ],
        enable: true,
      },
    ];
  }
);
