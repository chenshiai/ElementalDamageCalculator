import { CalculatorData } from "./interface";
import { BuffType, AppendProp } from "./enum";

export type BuffCondition = (data: CalculatorData) => boolean;
export type BuffEffect = {
  type: BuffType;
  value: number;
  // 是否基于基础属性转化而来，若为真，则该buff提供的属性不会被二次转化
  transform?: boolean;
};

export type WeaponStats = {
  appendPropId: AppendProp;
  statValue: number;
};