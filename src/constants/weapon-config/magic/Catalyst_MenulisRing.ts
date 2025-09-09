import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 纺夜天镜 */
export const Catalyst_MenulisRing = createWeapon(
  {
    name: "纺夜天镜",
    enkaId: 14520,
    weaponType: WeaponType.Magic,
    icon: getEnkaUI("UI_EquipIcon_Catalyst_MenulisRing_Awaken"),
    baseAtk: 542,
    rarity: Rarity.Five,
    appendPropId: AppendProp.ELEMENT_MASTERY,
    statValue: 265,
  },
  (affix = 1) => {
    let a = [60, 75, 90, 105, 120][affix - 1];
    let add = [120, 150, 180, 210, 240][affix - 1] + "%";
    let add2 = [80, 100, 120, 140, 160][affix - 1] + "%";
    let add3 = [40, 50, 60, 70, 80][affix - 1] + "%";

    return {
      title: "千年的祷咏歌",
      text: highlight`元素战技造成水元素或草元素伤害时，装备者获得「终北圣言」效果：元素精通提升${a}点，持续4.5秒；队伍中附近的角色触发月绽放反应时，装备者获得「朔月诗篇」效果：元素精通提升${a}点，持续10秒；「终北圣言」效果与「朔月诗篇」效果同时存在时，队伍中附近的所有角色触发的绽放反应造成的伤害提升${add}，超绽放、烈绽放反应造成的伤害提升${add2}，月绽放反应伤害提升${add3}，该效果无法叠加。装备者处于队伍后台时，依然能触发上述效果。`,
    };
  },
  (affix = 1) => {
    let a = [60, 75, 90, 105, 120][affix - 1];
    let add3 = [40, 50, 60, 70, 80][affix - 1];

    return [
      {
        label: "「终北圣言」",
        describe: `元素战技造成水元素或草元素伤害时，元素精通提升${a}点`,
        effect: [
          {
            type: BuffType.MysteryFixed,
            getValue: () => a,
          },
        ],
        enable: true,
      },
      {
        label: "「朔月诗篇」",
        describe: `队伍中附近的角色触发月绽放反应时，元素精通提升${a}点`,
        effect: [
          {
            type: BuffType.MysteryFixed,
            getValue: () => a,
          },
        ],
        enable: true,
      },
      {
        label: "月绽放反应伤害提升",
        describe: `「终北圣言」效果与「朔月诗篇」效果同时存在时，队伍中附近的所有角色触发的月绽放反应伤害提升${add3}%`,
        effect: [
          {
            type: BuffType.MoonSwirlPrcent,
            getValue: () => add3,
          },
        ],
        enable: true,
        shareable: true,
        target: BuffTarget.All,
      },
    ];
  }
);
