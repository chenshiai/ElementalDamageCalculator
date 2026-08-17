import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 悬黎千钧 */
export const ShatteredMirror = createWeapon(
  {
    name: "悬黎千钧",
    enkaId: 15435,
    weaponType: WeaponType.Bow,
    icon: getEnkaUI("UI_EquipIcon_Bow_ShatteredMirror_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CRITICAL,
    statValue: 27.6,
  },
  (affix = 1) => {
    let a = [64, 80, 96, 112, 128][affix - 1];
    let b = [12, 15, 18, 21, 24][affix - 1] + "%";
    return {
      title: "缀夜为烛",
      text: highlight`除装备者外，队伍中每有一名角色：元素类型与装备者相同：装备者的元素精通提升${a}点；元素类型与装备者不同：装备者的攻击力提升${b}。上述两种效果总共至多叠加3层，元素类型相同的效果优先生效。`,
    };
  },
  (affix = 1) => {
    let a = [64, 80, 96, 112, 128][affix - 1];
    let b = [12, 15, 18, 21, 24][affix - 1];
    return [
      {
        label: "元素精通、攻击力提升",
        describe: `队友元素类型与装备者相同：装备者的元素精通提升${a}点；队友元素类型与装备者不同：装备者的攻击力提升${b}%`,
        effect: [
          { type: BuffType.ATKPrcent, getValue: (_, s) => b * (3 - s) },
          { type: BuffType.MysteryFixed, getValue: (_, s) => a * s },
        ],
        enable: true,
        stack: 0,
        limit: 3,
        stackable: true,
        stackText: "元素类型相同",
      },
    ];
  }
);
