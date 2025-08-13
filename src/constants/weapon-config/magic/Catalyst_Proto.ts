import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 试作金珀 */
export const Catalyst_Proto = createWeapon(
  {
    name: "试作金珀",
    enkaId: 14406,
    weaponType: WeaponType.Magic,
    icon: getEnkaUI("UI_EquipIcon_Catalyst_Proto_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.HP_PERCENT,
    statValue: 41.3,
  },
  (affix = 1) => {
    let a = [4, 4.5, 5, 5.5, 6][affix - 1];
    return {
      title: "炊金",
      text: highlight`施放元素爆发后6秒内，每2秒恢复${a}点元素能量；此外，队伍中的所有角色每2秒恢复${a}%生命值。`,
    };
  },
  () => [],
  (affix = 1) => {
    let a = [4, 4.5, 5, 5.5, 6][affix - 1] / 100;
    return [
      {
        label: "试作金珀·回复量",
        rate: {
          hp: [a],
        },
        attackType: AttackType.Heal,
        elementType: ElementType.None,
      },
    ];
  }
);
