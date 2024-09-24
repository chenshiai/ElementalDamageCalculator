import { BuffType } from "@/types/enum";
import { IBuffBase } from "@/types/interface";

/**
 * 一些重复的buff对象
 */
export const A_80_ATK_24P: IBuffBase = {
  label: "80级突破，攻击力+24%",
  describe: "4星角色80级突破后+24%攻击力",
  effect: [{ type: BuffType.ATKPrcent, value: 24 }],
  enable: true,
};
