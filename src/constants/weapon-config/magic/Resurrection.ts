import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 匣里日月 */
export const Resurrection = createWeapon(
  {
    name: "匣里日月",
    enkaId: 14405,
    weaponType: WeaponType.Magic,
    icon: getEnkaUI("UI_EquipIcon_Catalyst_Resurrection_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CRITICAL,
    statValue: 27.6,
  },
  (affix = 1) => {
    let a = [20, 25, 30, 35, 40][affix - 1] + "%";
    return {
      title: "日月辉",
      text: highlight`普通攻击命中后的6秒内，元素战技与元素爆发的伤害提高${a}；元素战技与元素爆发命中后的6秒内，普通攻击的伤害提高${a}。`,
    };
  },
  (affix = 1) => {
    let a = [20, 25, 30, 35, 40][affix - 1];
    return [
      {
        label: "元素战技与元素爆发的伤害提高",
        describe: `普通攻击命中后，元素战技与元素爆发的伤害提高${a}%`,
        effect: [
          { type: BuffType.SkillPrcent, getValue: () => a },
          { type: BuffType.BurstPrcent, getValue: () => a },
        ],
        enable: false,
      },
      {
        label: "普通攻击的伤害提高",
        describe: `元素战技与元素爆发命中后，普通攻击的伤害提高${a}%`,
        effect: [{ type: BuffType.NormalPrcent, getValue: () => a }],
        enable: false,
      },
    ];
  }
);
