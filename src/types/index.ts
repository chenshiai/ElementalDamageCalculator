import { ICalculatorValue } from "./interface";
import { BuffType, AppendProp } from "./enum";

export type BuffCondition = (data: Partial<ICalculatorValue>) => boolean;
export type BuffEffect = {
  type: BuffType;
  getValue(data?: Partial<ICalculatorValue>, stack?: number): number;
  // 是否基于基础属性转化而来，若为真，则该buff提供的属性不会被二次转化
  transform?: boolean;
};

export type WeaponStats = {
  appendPropId: AppendProp;
  statValue: number;
};