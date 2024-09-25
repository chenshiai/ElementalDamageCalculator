import { ICalculatorValue } from "./interface";
import { BuffType, AppendProp, ActionOn } from "./enum";

export type BuffCondition = (data: Partial<ICalculatorValue>) => boolean;
export type BuffEffect = {
  type: BuffType;
  getValue(data?: Partial<ICalculatorValue>, stack?: number): number;
  /** 是否基于基础属性转化而来，提供的属性不会被二次转化 */
  transform?: boolean;
  /** buff作用域，分别直接作用在面板上、间接作用在面板上、作用在面板之外  
   * 若未设置actionOn，则默认为Direct
   */
  actionOn?: ActionOn;
};
export type WeaponStats = {
  appendPropId: AppendProp;
  statValue: number;
};