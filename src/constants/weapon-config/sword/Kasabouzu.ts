import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 东花坊时雨 */
export const Kasabouzu = createWeapon(
  {
    name: "东花坊时雨",
    enkaId: 11422,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_Kasabouzu_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ELEMENT_MASTERY,
    statValue: 165,
  },
  (affix = 1) => {
    let add = 16 + (affix - 1) * 4 + "%";
    return {
      title: "怪谭·时雨心地一本足",
      text: highlight`攻击命中敌人后，会为命中的一名敌人施加「纸伞作祟」状态，持续10秒。该效果每15秒至多触发一次；持续期间该敌人被击败时，将清除该效果的冷却时间。装备者对处于「纸伞作祟」状态下的敌人造成的伤害提升${add}。`,
    };
  },
  (affix = 1) => {
    let add = 16 + (affix - 1) * 4;
    return [
      {
        label: "纸伞作祟",
        describe: `装备者对处于「纸伞作祟」状态下的敌人造成的伤害提升${add}%`,
        effect: [{ type: BuffType.GlobalPrcent, getValue: () => add }],
        enable: false,
      },
    ];
  }
);
