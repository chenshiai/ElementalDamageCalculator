import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 群王局戏 */
export const SandMemoria = createWeapon(
  {
    name: "群王局戏",
    enkaId: 14435,
    weaponType: WeaponType.Magic,
    icon: getEnkaUI("UI_EquipIcon_Catalyst_SandMemoria_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CRITICAL,
    statValue: 27.6,
  },
  (affix = 1) => {
    let a = [20, 25, 30, 35, 40][affix - 1] + "%";
    let b = [100, 125, 150, 175, 200][affix - 1];
    return {
      title: "被遗忘的昼夜",
      text: highlight`装备者施放元素战技后，获得持续6秒的「棋中法度」：攻击力提升${a}，元素精通提升${b}点，该效果每12秒至多触发一次，无法叠加。持续期间，装备者的重击命中敌人时，还会使上述效果的持续时间延长6秒，至多通过这种方式使持续时间延长6秒。`,
    };
  },
  (affix = 1) => {
    let a = [20, 25, 30, 35, 40][affix - 1];
    let b = [100, 125, 150, 175, 200][affix - 1];
    return [
      {
        label: "元素精通、攻击力提升",
        describe: `装备者施放元素战技后元素精通提升${b}点；攻击力提升${a}%`,
        effect: [
          { type: BuffType.ATKPrcent, getValue: () => a },
          { type: BuffType.MysteryFixed, getValue: () => b },
        ],
        enable: true,
      },
    ];
  }
);
