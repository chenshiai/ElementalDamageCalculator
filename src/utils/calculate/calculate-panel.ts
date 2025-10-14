import { ActionOn, AppendProp } from "@/types/enum";
import calculateBuffs from "./calculate-buffs";
import { calculateRelicStat, calculateWeaponSubStat } from "./calculate-equip";
import { IBuffBase, ICalculatorValue, ICharacterInfo, IWeaponInfo } from "@/types/interface";
import CalculatorValueClass from "@/constants/characters-config/calculator-value-class";
import { IRelicItem } from "@/constants/relics-config/relic-class";

interface ICalculatorPanelArgs {
  /** 角色数据 */
  characterInfo: ICharacterInfo;
  /** 命之座 */
  constellation: number;
  /** 角色增益 */
  characterBuffs: IBuffBase[];
  /** 武器数据 */
  weapon: IWeaponInfo;
  /** 武器增益 */
  weaponBuffs: IBuffBase[];
  /** 队伍增益 */
  buffs: IBuffBase[];
  /** 圣遗物增益 */
  relicBuffs: IBuffBase[];
  /** 普攻等级 */
  normalLevel: number;
  /** 元素战技等级 */
  skillLevel: number;
  /** 元素爆发等级 */
  burstLevel: number;
  /** 圣遗物数据 */
  relicList: IRelicItem[];
}
/** 加成角色所有属性 */
function calculationPanel({
  relicBuffs,
  characterBuffs,
  weaponBuffs,
  buffs,
  characterInfo,
  weapon,
  relicList,
  constellation,
  normalLevel,
  skillLevel,
  burstLevel,
}: ICalculatorPanelArgs): ICalculatorValue {
  const allBuffs = [...relicBuffs, ...characterBuffs, ...weaponBuffs, ...buffs];
  const characterBaseAtk = characterInfo.baseATK;
  const weaponBaseAtk = weapon.weaponStats.find((i) => i.appendPropId === AppendProp.BASE_ATTACK).statValue;

  return [
    (data: ICalculatorValue) => calculateBuffs(data, allBuffs, ActionOn.Front),
    (data: ICalculatorValue) => calculateWeaponSubStat(data, weapon),
    (data: ICalculatorValue) => calculateRelicStat(data, relicList),
    (data: ICalculatorValue) => calculateBuffs(data, allBuffs, ActionOn.Direct), // 计算直接提升面板的buff
    (data: ICalculatorValue) => calculateBuffs(data, allBuffs, ActionOn.Indirect), // 计算间接提升面板的buff
    (data: ICalculatorValue) => calculateBuffs(data, allBuffs, ActionOn.External), // 计算不作用于面板的buff
  ].reduce(
    (accumulator, currentFunction) => {
      return {
        ...accumulator,
        ...currentFunction(accumulator),
      };
    },
    new CalculatorValueClass({
      level: characterInfo.level,
      element: characterInfo.element,
      weapon: characterInfo.weapon,
      overshoot: characterInfo.overshoot,
      constellation: constellation,
      burstCharge: characterInfo.burstCharge,

      baseATK: characterBaseAtk + weaponBaseAtk,
      baseDEF: characterInfo.baseDEF,
      baseHP: characterInfo.baseHP,

      normalLevel,
      skillLevel,
      burstLevel,
    })
  );
}
export default calculationPanel;
