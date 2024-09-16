import { BuffType, IBuffBase } from "./interface.d";

/**
 * 一些重复的buff对象
 */
export const A_80_ATK_24P: IBuffBase = {
  label: "80级突破",
  describe: "角色80级突破后提供的属性",
  effect: [{ type: BuffType.ATKPrcent, value: 24 }],
};
