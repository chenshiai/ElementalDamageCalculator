import { ActionOn, AppendProp } from "@/types/enum";
import calculateBuffs from "./calculate-buffs";
import { calculateRelicStat, calculateWeaponSubStat } from "./calculate-equip";
import { IBuffBase, ICalculatorValue, ICharacterInfo, IWeaponInfo } from "@/types/interface";
import CalculatorValueClass from "@/constants/characters-config/calculator-value-class";
import { IRelicItem } from "@/constants/characters-config/relic-class";

interface ICalculatorPanelArgs {
  characterInfo: ICharacterInfo;
  constellation: number;
  characterBuffs: IBuffBase[];
  weapon: IWeaponInfo;
  weaponBuffs: IBuffBase[];
  buffs: IBuffBase[];
  relicBuffs: IBuffBase[];
  baseResistance: number;
  enemyLevel: number;
  normalLevel: number;
  skillLevel: number;
  burstLevel: number;
  relicList: IRelicItem[];
}
function calculationPanel({
  relicBuffs,
  characterBuffs,
  weaponBuffs,
  buffs,
  characterInfo,
  weapon,
  relicList,
  constellation,
  baseResistance = 10,
  enemyLevel = 90,
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
      constellation: constellation,

      baseATK: characterBaseAtk + weaponBaseAtk,
      baseDEF: characterInfo.baseDEF,
      baseHP: characterInfo.baseHP,

      normalLevel: normalLevel,
      skillLevel: skillLevel,
      burstLevel: burstLevel,

      enemyLevel: enemyLevel,
      enemyPhysicalResistance: baseResistance,
      enemyPyroResistance: baseResistance,
      enemyElectroResistance: baseResistance,
      enemyHydroResistance: baseResistance,
      enemyAnemoResistance: baseResistance,
      enemyCryoResistance: baseResistance,
      enemyGeoResistance: baseResistance,
      enemyDendroResistance: baseResistance,
    })
  );
}
export default calculationPanel;
