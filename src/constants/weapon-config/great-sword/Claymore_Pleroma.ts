import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { ActionOn, AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 玛海菈的水色 */
export const Claymore_Pleroma = createWeapon(
  {
    name: "玛海菈的水色",
    enkaId: 12415,
    weaponType: WeaponType.GreatSword,
    icon: getEnkaUI("UI_EquipIcon_Claymore_Pleroma_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ELEMENT_MASTERY,
    statValue: 165,
  },
  (affix = 1) => {
    let a = 24 + (affix - 1) * 6 + "%";
    return {
      title: "沙上楼阁",
      text: highlight`每10秒，产生如下效果：基于装备者的元素精通的${a}，提升该角色的攻击力，并基于该提升的30%为队伍中附近的其他角色提升攻击力，持续12秒，多件同名武器产生的此效果可以叠加。角色处于队伍后台时也能触发效果。`,
    };
  },
  (affix = 1) => {
    let a = 24 + (affix - 1) * 6;
    return [
      {
        label: "攻击力提升",
        describe: `基于装备者的元素精通的${a}%，提升角色的攻击力`,
        effect: [
          {
            type: BuffType.ATKFixed,
            getValue: (data) => (data.elementalMystery * a) / 100,
            actionOn: ActionOn.Indirect,
            transform: true,
          },
        ],
        enable: true,
      },
      {
        label: "全队攻击力提升",
        describe: `基于装备者的元素精通的${a}，提升攻击力，并基于该提升的30%为队伍中附近的其他角色提升攻击力`,
        effect: [
          {
            type: BuffType.ATKFixed,
            getValue: (data) => (data.elementalMystery * a * 0.3) / 100,
            actionOn: ActionOn.Indirect,
            transform: true,
          },
        ],
        enable: true,
        shareable: true,
        target: BuffTarget.All,
      },
    ];
  }
);
