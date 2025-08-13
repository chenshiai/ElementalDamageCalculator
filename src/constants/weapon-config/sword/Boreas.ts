import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 狼牙 */
export const Boreas = createWeapon(
  {
    name: "狼牙",
    enkaId: 11424,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_Boreas_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CRITICAL,
    statValue: 27.6,
  },
  (affix = 1) => {
    let ad = 16 + (affix - 1) * 4 + "%";
    let cr = 2 + (affix - 1) * 0.5 + "%";
    return {
      title: "苍狼北风",
      text: highlight`元素战技与元素爆发造成的伤害提升${ad}。元素战技命中敌人时，元素战技的暴击率提升${cr}；元素爆发命中敌人时，元素爆发的暴击率提升${cr}。上述两种效果各自持续10秒，至多叠加4次，每0.1秒至多触发一次。`,
    };
  },
  (affix = 1) => {
    let ad = 16 + (affix - 1) * 4;
    let cr = 2 + (affix - 1) * 0.5;
    return [
      {
        label: "元素战技与元素爆发造成的伤害提升",
        describe: `元素战技与元素爆发造成的伤害提升${ad}%`,
        effect: [
          { type: BuffType.SkillPrcent, getValue: () => ad },
          { type: BuffType.BurstPrcent, getValue: () => ad },
        ],
        enable: true,
      },
      {
        label: "元素战技暴击率提升",
        describe: `元素战技命中敌人时，元素战技的暴击率提升${cr}%，至多叠加4层`,
        effect: [{ type: BuffType.SkillCritcal, getValue: (_, stack) => cr * stack }],
        enable: false,
        stackable: true,
        stack: 4,
        limit: 4,
      },
      {
        label: "元素爆发暴击率提升",
        describe: `元素爆发命中敌人时，元素爆发的暴击率提升${cr}%，至多叠加4层`,
        effect: [{ type: BuffType.BurstCritcal, getValue: (_, stack) => cr * stack }],
        enable: false,
        stackable: true,
        stack: 4,
        limit: 4,
      },
    ];
  }
);
