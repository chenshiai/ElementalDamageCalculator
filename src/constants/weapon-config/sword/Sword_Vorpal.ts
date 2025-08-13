import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 海渊终曲 */
export const Sword_Vorpal = createWeapon(
  {
    name: "海渊终曲",
    enkaId: 11425,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_Vorpal_Awaken"),
    baseAtk: 565,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 27.6,
  },
  (affix = 1) => {
    let atk = [12, 15, 18, 21, 24][affix - 1] + "%";
    let hp = [2.4, 3, 3.6, 4.2, 4.8][affix - 1] + "%";
    let atk2 = [150, 187.5, 225, 262.5, 300][affix - 1] + "%";
    return {
      title: "最终的崇高",
      text: highlight`施放元素战技时，攻击力提升${atk}，持续15秒，并赋予生命值上限25%的生命之契，该效果每10秒至多触发一次。生命之契清除时，基于清除值的${hp}提升至多${atk2}点攻击力，持续15秒。`,
    };
  },
  (affix = 1) => {
    let atk = [12, 15, 18, 21, 24][affix - 1];
    let hp = [2.4, 3, 3.6, 4.2, 4.8][affix - 1];
    let atk2 = [150, 187.5, 225, 262.5, 300][affix - 1];
    return [
      {
        label: "攻击力提升",
        describe: `施放元素战技时，攻击力提升${atk}%`,
        effect: [{ type: BuffType.ATKPrcent, getValue: () => atk }],
        enable: false,
      },
      {
        label: "消除生命之契获得攻击力提升",
        describe: `生命之契清除时，基于清除值的${hp}%提升至多${atk2}点攻击力`,
        effect: [
          {
            type: BuffType.ATKFixed,
            getValue: (data, stack) => {
              // 虽然游戏里不存这种场景，但感觉生命之契应该能吃二次转化
              let allhp = data.baseHP + data.extraHP + data.extraHP_NT;
              return Math.min((allhp * stack * hp) / 10000, atk2);
            },
          },
        ],
        stackable: true,
        stack: 25,
        limit: 200,
        stackText: "生命之契",
        enable: false,
      },
    ];
  }
);
