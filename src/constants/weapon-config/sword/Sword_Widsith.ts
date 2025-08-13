import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 苍古自由之誓 */
export const Sword_Widsith = createWeapon(
    {
      name: "苍古自由之誓",
      enkaId: 11503,
      weaponType: WeaponType.Sword,
      rarity: Rarity.Five,
      icon: getEnkaUI("UI_EquipIcon_Sword_Widsith_Awaken"),
      baseAtk: 608,
      appendPropId: AppendProp.ELEMENT_MASTERY,
      statValue: 198,
    },
    (affix = 1) => {
      const add = [10, 12.5, 15, 17.5, 20][affix - 1] + "%";
      const num = [16, 20, 24, 28, 32][affix - 1] + "%";
      const atk = [20, 25, 30, 35, 40][affix - 1] + "%";
      return {
        title: "抗争的践行之歌",
        text: highlight`飘游风中的「千年的大乐章」的一部分。造成的伤害提高${add}。触发元素反应时，角色获得一枚奋起之符，每0.5秒内至多触发一次，角色处于队伍后台也能触发。拥有2枚奋起之符时，将消耗所有奋起之符，使附近的队伍中所有角色获得持续12秒的「千年的大乐章·抗争之歌」效果：普通攻击、重击、下落攻击造成的伤害提高${num}，攻击力提升${atk}。触发后20秒内，无法再次获得奋起之符。「千年的大乐章」触发的多种数值效果中，同类数值效果不可叠加。`,
      };
    },
    (affix = 1) => {
      const add = [10, 12.5, 15, 17.5, 20][affix - 1];
      const num = [16, 20, 24, 28, 32][affix - 1];
      const atk = [20, 25, 30, 35, 40][affix - 1];
      return [
        {
          label: "伤害提升",
          describe: `造成的伤害提高${add}%`,
          effect: [{ type: BuffType.GlobalPrcent, getValue: () => add }],
          enable: true,
        },
        {
          label: "抗争之歌·攻击力提升",
          describe: `攻击力提升${atk}%`,
          effect: [{ type: BuffType.ATKPrcent, getValue: () => atk }],
          enable: true,
          shareable: true,
          target: BuffTarget.All,
        },
        {
          label: "抗争之歌·普攻、重击、下落",
          describe: `普通攻击、重击、下落攻击伤害提升${num}%`,
          effect: [
            { type: BuffType.NormalPrcent, getValue: () => num },
            { type: BuffType.StrongPrcent, getValue: () => num },
            { type: BuffType.FallingPrcent, getValue: () => num },
          ],
          enable: false,
          shareable: true,
          target: BuffTarget.All,
        },
      ];
    }
  )