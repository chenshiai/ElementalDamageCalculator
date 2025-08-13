import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { ActionOn, AppendProp, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 降临之剑 */
export const Psalmus = createWeapon(
  {
    name: "降临之剑",
    enkaId: 12513,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_Psalmus_Awaken"),
    baseAtk: 440,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 35.2,
  },
  (affix = 1) => {
    return {
      title: "降世",
      text: highlight`仅在"PlayStation Network"游玩时生效。
        <br />普通攻击与重击命中敌人后有50%概率在小范围内造成200%攻击力的伤害。该效果每10秒只能触发一次；此外，旅行者装备降临之剑时，攻击力提升66点。`,
    };
  },
  (affix = 1) => {
    return [
      {
        label: "旅行者基础攻击力提升66点",
        describe: `旅行者基础攻击力提升66点`,
        effect: [{ type: BuffType.ATKBase, getValue: () => 66, actionOn: ActionOn.Front }],
        enable: false,
      },
    ];
  },
  (affix = 1) => {
    return [
      {
        label: "降临之剑·降世",
        rate: {
          atk: [2],
        },
        attackType: AttackType.Other,
        elementType: ElementType.Physical,
      },
    ];
  }
);
