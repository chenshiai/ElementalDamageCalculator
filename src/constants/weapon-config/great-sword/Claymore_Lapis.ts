import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 千岩古剑 */
export const Claymore_Lapis = createWeapon(
  {
    name: "千岩古剑",
    enkaId: 12410,
    weaponType: WeaponType.GreatSword,
    icon: getEnkaUI("UI_EquipIcon_Claymore_Lapis_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 41.3,
  },
  (affix = 1) => {
    const atk = [7, 8, 9, 10, 11][affix - 1] + "%";
    const cri = [3, 4, 5, 6, 7][affix - 1] + "%";
    return {
      title: "千岩诀·同心",
      text: highlight`队伍中每有一位璃月角色，装备该武器的角色便获得${atk}攻击力提升与${cri}暴击率提升。至多获得4层提升效果。`,
    };
  },
  (affix = 1) => {
    const atk = [7, 8, 9, 10, 11][affix - 1];
    const cri = [3, 4, 5, 6, 7][affix - 1];
    return [
      {
        label: "千岩诀·同心",
        describe: `角色获得${atk}%攻击力提升与${cri}%暴击率提升。至多获得4层提升效果`,
        effect: [
          { type: BuffType.ATKPrcent, getValue: (_, s) => atk * s },
          { type: BuffType.Critcal, getValue: (_, s) => cri * s },
        ],
        stackable: true,
        stackText: "璃月角色数量",
        limit: 4,
        stack: 0,
        enable: false,
      },
    ];
  }
);
