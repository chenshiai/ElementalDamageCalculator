import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 钟剑 */
export const Claymore_Troupe = createWeapon(
  {
    name: "钟剑",
    enkaId: 12402,
    weaponType: WeaponType.GreatSword,
    icon: getEnkaUI("UI_EquipIcon_Claymore_Troupe_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.HP_PERCENT,
    statValue: 41.3,
  },
  (affix = 1) => {
    let a = [20, 23, 26, 29, 32][affix - 1] + "%";
    let b = [12, 15, 18, 21, 24][affix - 1] + "%";
    return {
      title: "叛逆的守护者",
      text: highlight`受到伤害时，生成一个伤害吸收量等同于生命值上限${a}的护盾，持续10秒或直到护盾失效,每45秒只能触发一次。角色处于护盾庇护下时，造成的伤害提升${b}`,
    };
  },
  (affix = 1) => {
    let b = [12, 15, 18, 21, 24][affix - 1];
    return [
      {
        label: "造成的伤害提升",
        describe: `角色处于护盾庇护下时，造成的伤害提升${b}%`,
        effect: [{ type: BuffType.GlobalPrcent, getValue: () => b }],
        enable: false,
      },
    ];
  },
  (affix = 1) => {
    let a = [20, 23, 26, 29, 32][affix - 1] / 100;
    return [
      {
        label: "叛逆的守护者·护盾吸收量",
        rate: {
          hp: [a],
        },
        attackType: AttackType.Heal,
        elementType: ElementType.None,
      },
    ];
  }
);
