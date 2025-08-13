import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 暗巷猎手 */
export const Bow_Outlaw = createWeapon(
  {
    name: "暗巷猎手",
    enkaId: 15410,
    weaponType: WeaponType.Bow,
    icon: getEnkaUI("UI_EquipIcon_Bow_Outlaw_Awaken"),
    baseAtk: 565,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 27.6,
  },
  (affix = 1) => {
    let a = [2, 2.5, 3, 3.5, 4][affix - 1] + "%";
    let b = [20, 25, 30, 35, 40][affix - 1] + "%";
    let c = [4, 5, 6, 7, 8][affix - 1] + "%";
    return {
      title: "街巷伏击",
      text: highlight`装备该武器的角色处于队伍后台时，每1秒角色造成的伤害提升${a}，最多通过这种方式获得${b}的伤害提升；在场上超过4秒后，上述伤害提升效果每1秒会流失${c}，直到降低至0%。`,
    };
  },
  (affix = 1) => {
    let a = [2, 2.5, 3, 3.5, 4][affix - 1];
    let b = [20, 25, 30, 35, 40][affix - 1];
    return [
      {
        label: "造成的伤害提升",
        describe: `处于队伍后台时，每1秒角色造成的伤害提升${a}%，最多通过这种方式获得${b}%的伤害提升`,
        effect: [{ type: BuffType.GlobalPrcent, getValue: (_, s) => a * 2 * s }],
        enable: true,
        stackable: true,
        stack: 5,
        limit: 5,
      },
    ];
  }
);
