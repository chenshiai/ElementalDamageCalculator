import { ICalculatorValue } from "./interface";
import { BuffType, AppendProp, ActionOn } from "./enum";

export type BuffCondition = (data: Partial<ICalculatorValue>) => boolean;
export type BuffEffect = {
  type: BuffType;
  /**
   * Buff数值效果获取函数
   * @param data 当前角色的面板数据，主要用于计算数值
   * @param stack 设置的层数，用于叠层的buff计算数值总和
   * @param receiverData 在共享Buff时，被共享者的面板数据，作为第三方变量参与数值计算
   */
  getValue(data?: Partial<ICalculatorValue>, stack?: number, receiverData?: Partial<ICalculatorValue>): number;
  /** 是否基于基础属性转化而来，提供的属性不会被二次转化 */
  transform?: boolean;
  /** buff作用域，分别直接作用在面板上、间接作用在面板上、作用在面板之外  
   * 若未设置actionOn，则在计算时应该默认视为Direct
   */
  actionOn?: ActionOn;
  /** 独特buff标识，设置该字段后，该buff效果只会作用在相同独特标识的技能上 */
  special?: string;
};
export type WeaponStats = {
  appendPropId: AppendProp;
  statValue: number;
};

export type NodeType = [string, number];
