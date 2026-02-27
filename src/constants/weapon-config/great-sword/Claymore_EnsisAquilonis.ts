import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 狼的武功歌 */
export const Claymore_EnsisAquilonis = createWeapon(
  {
    name: "狼的武功歌",
    enkaId: 12515,
    weaponType: WeaponType.GreatSword,
    icon: getEnkaUI("UI_EquipIcon_Claymore_EnsisAquilonis_Awaken"),
    baseAtk: 608,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CRITICAL,
    statValue: 33.1,
  },
  (affix = 1) => {
    let a = [7.5, 9.5, 11.5, 13.5, 15.5][affix - 1] + "%";
    return {
      title: "不灭的骑士道",
      text: highlight`攻击速度提升10%。普通攻击命中敌人/施放元素战技/开始重击时，装备者将分别获得1/2/2层「四风诗系」：造成的伤害提升${a}，该效果持续4秒，至多叠加4次，每0.01秒至多触发一次。
此外，队伍拥有「魔导·秘仪」效果时，每层「四风诗系」还会使装备者的暴击伤害提高${a}。`,
    };
  },
  (affix = 1) => {
    let a = [7.5, 9.5, 11.5, 13.5, 15.5][affix - 1];
    return [
      {
        label: "造成的伤害提高",
        describe: `每层「四风诗系」，造成的伤害提高${a}%。`,
        effect: [{ type: BuffType.GlobalPrcent, getValue: (_, s) => s * a }],
        enable: true,
        stackable: true,
        stack: 4,
        limit: 4,
        stackText: "四风诗系",
      },
      {
        label: "魔导·秘仪，暴击伤害提高",
        describe: `队伍拥有「魔导·秘仪」效果时，每层「四风诗系」还会使装备者的暴击伤害提高${a}%。`,
        effect: [{ type: BuffType.CritcalHurt, getValue: (_, s) => s * a }],
        enable: true,
        stackable: true,
        stack: 4,
        limit: 4,
        stackText: "四风诗系",
      },
    ];
  }
);
