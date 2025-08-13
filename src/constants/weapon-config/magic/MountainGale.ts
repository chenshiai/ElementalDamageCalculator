import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 鹤鸣余音 */
export const MountainGale = createWeapon(
  {
    name: "鹤鸣余音",
    enkaId: 14515,
    weaponType: WeaponType.Magic,
    icon: getEnkaUI("UI_EquipIcon_Catalyst_MountainGale_Awaken"),
    baseAtk: 741,
    rarity: Rarity.Five,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 16.5,
  },
  (affix = 1) => {
    let add = [28, 41, 54, 67, 80][affix - 1] + "%";
    let c = [2.5, 2.75, 3, 3.25, 3.5][affix - 1];
    return {
      title: "云笈降真要诀",
      text: highlight`装备者下落攻击命中敌人后，队伍中附近的所有角色下落攻击造成的伤害提高${add}，持续20秒；队伍中附近的角色的下落攻击命中敌人时，为装备者恢复${c}点元素能量，每0.7秒至多通过这种方式恢复一次元素能量，装备者处于队伍后台时依然能通过这种方式恢复元素能量。`,
    };
  },
  (affix = 1) => {
    let add = [28, 41, 54, 67, 80][affix - 1];
    return [
      {
        label: "云笈降真要诀",
        describe: `装备者下落攻击命中敌人后，队伍中附近的所有角色下落攻击造成的伤害提高${add}%`,
        effect: [{ type: BuffType.FallingPrcent, getValue: () => add }],
        enable: false,
        shareable: true,
        target: BuffTarget.All,
      },
    ];
  }
);
