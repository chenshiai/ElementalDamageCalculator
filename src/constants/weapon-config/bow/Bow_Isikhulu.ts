import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 碎链 */
export const Bow_Isikhulu = createWeapon(
  {
    name: "碎链",
    enkaId: 15431,
    weaponType: WeaponType.Bow,
    icon: getEnkaUI("UI_EquipIcon_Bow_Isikhulu_Awaken"),
    baseAtk: 565,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 27.6,
  },
  (affix = 1) => {
    const atk = [4.8, 6, 7.2, 8.4, 9.6][affix - 1] + "%";
    const el = [24, 30, 36, 42, 48][affix - 1];
    return {
      title: "花与落羽的长歌",
      text: highlight`队伍中每有一名纳塔角色或与装备者元素类型不同的角色，装备者获得${atk}攻击力提升；上述角色不少于3名时，装备者的元素精通提升${el}点。`,
    };
  },
  (affix = 1) => {
    const atk = [4.8, 6, 7.2, 8.4, 9.6][affix - 1];
    const el = [24, 30, 36, 42, 48][affix - 1];
    return [
      {
        label: "花与落羽的长歌",
        describe: `队伍中每有一名纳塔角色或与装备者元素类型不同的角色，装备者获得${atk}%攻击力提升；上述角色不少于3名时，装备者的元素精通提升${el}点`,
        effect: [
          { type: BuffType.ATKPrcent, getValue: (_, s) => atk * s },
          { type: BuffType.MysteryFixed, getValue: (_, s) => (s >= 3 ? el : 0) },
        ],
        stackable: true,
        limit: 4,
        stack: 3,
        enable: true,
        stackText: "符合条件的角色数量",
      },
    ];
  }
);
