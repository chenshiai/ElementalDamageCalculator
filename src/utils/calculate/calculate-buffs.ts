import { BuffType } from "@/types/enum";
import { IBuffBase, ICalculatorValue } from "@/types/interface";

const calculateBuffs = (data: Partial<ICalculatorValue>, buffs: IBuffBase[]) => {
  let extraATK = data.extraATK;
  let extraATK_NT = data.extraATK_NT;
  
  buffs.forEach((buff: IBuffBase) => {
    console.log(buff);
    
    if (!buff.enable) return;
    buff.effect.forEach((eff) => {
      const value = eff.getValue(data, buff.stack);
      if (eff.type === BuffType.ATKPrcent) {
        eff.transform ? (extraATK_NT += (data.baseATK * value / 100)) : (extraATK += (data.baseATK * value / 100));
      }
      if (eff.type === BuffType.ATKFixed) {
        eff.transform ? (extraATK_NT += value) : (extraATK += value);
      }
    });
  });

  return {
    extraATK,
    extraATK_NT,
  };
};

export default calculateBuffs;
