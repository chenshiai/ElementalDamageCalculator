import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 千岩长枪 */
export const Pole_Lapis = createWeapon(
  {
    name: "千岩长枪",
    enkaId: 13406,
    weaponType: WeaponType.Polearms,
    icon: getEnkaUI("UI_EquipIcon_Pole_Lapis_Awaken"),
    baseAtk: 565,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 27.6,
  },
  (affix = 1) => {
    const atk = 7 + (affix - 1) + "%";
    const cri = 3 + (affix - 1) + "%";
    return {
      title: "千岩诀·同心",
      text: highlight`队伍中每有一位璃月角色，装备该武器的角色便获得${atk}攻击力提升与${cri}暴击率提升。至多获得4层提升效果。`,
    };
  },
  (affix = 1) => {
    const atk = 7 + (affix - 1);
    const cri = 3 + (affix - 1);
    return [
      {
        label: "攻击力与暴击率提升",
        describe: `角色获得${atk}%攻击力提升与${cri}%暴击率提升。至多获得4层提升效果`,
        effect: [
          { type: BuffType.ATKPrcent, getValue: (_, stack) => atk * stack },
          { type: BuffType.Critcal, getValue: (_, stack) => cri * stack },
        ],
        stackable: true,
        limit: 4,
        stack: 4,
        enable: false,
      },
    ];
  }
);
