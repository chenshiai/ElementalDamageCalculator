import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 峡湾长歌 */
export const Shanty = createWeapon(
  {
    name: "峡湾长歌",
    enkaId: 13424,
    weaponType: WeaponType.Polearms,
    icon: getEnkaUI("UI_EquipIcon_Pole_Shanty_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CRITICAL,
    statValue: 27.6,
  },
  (affix = 1) => {
    return {
      title: "冰原的诸多故事",
      text: highlight`队伍中存在至少三种不同元素类型的角色时，元素精通提升${120 + (affix - 1) * 30}点。`,
    };
  },
  (affix = 1) => {
    return [
      {
        label: "元素精通提升",
        describe: `队伍中存在至少三种不同元素类型的角色时，元素精通提升${120 + (affix - 1) * 30}点`,
        effect: [{ type: BuffType.MysteryFixed, getValue: () => 120 + (affix - 1) * 30 }],
        enable: false,
      },
    ];
  }
);
