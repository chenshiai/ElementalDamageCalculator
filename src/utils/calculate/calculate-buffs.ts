import { ActionOn, BuffType } from "@/types/enum";
import { IBuffBase, ICalculatorValue } from "@/types/interface";

const calculateBuffs = (data: Partial<ICalculatorValue>, buffs: IBuffBase[], actionOn: ActionOn) => {
  const tempData = Object.assign({}, data);

  buffs.forEach((buff: IBuffBase) => {
    if (!buff.enable) return;

    buff.effect.forEach((eff) => {
      // 若未设置actionOn，则默认设置为Direct
      eff.actionOn = eff.actionOn || ActionOn.Direct;
      if (eff.actionOn !== actionOn) return;

      const value = eff.getValue(data, buff.stack);

      switch (eff.type) {
        case BuffType.ATKPrcent:
          eff.transform
            ? (tempData.extraATK_NT += (tempData.baseATK * value) / 100)
            : (tempData.extraATK += (tempData.baseATK * value) / 100);
          break;
        case BuffType.ATKFixed:
          eff.transform ? (tempData.extraATK_NT += value) : (tempData.extraATK += value);
          break;
        // 其他类型的处理
        case BuffType.HPPrcent:
          eff.transform
            ? (tempData.extraHP_NT += (tempData.baseHP * value) / 100)
            : (tempData.extraHP += (tempData.baseHP * value) / 100);
          break;
        case BuffType.HPFixed:
          eff.transform ? (tempData.extraHP_NT += value) : (tempData.extraHP += value);
          break;
        case BuffType.DEFPrcent:
          eff.transform
            ? (tempData.extraDEF_NT += (tempData.baseDEF * value) / 100)
            : (tempData.extraDEF += (tempData.baseDEF * value) / 100);
          break;
        case BuffType.DEFFixed:
          eff.transform ? (tempData.extraDEF_NT += value) : (tempData.extraDEF += value);
          break;
        case BuffType.MysteryFixed:
          eff.transform ? (tempData.elementalMystery_NT += value) : (tempData.elementalMystery += value);
          break;
        case BuffType.ChargeFixed:
          eff.transform ? (tempData.chargeEfficiency_NT += value) : (tempData.chargeEfficiency += value);
          break;
        default:
          tempData[eff.type] += value;
          break;
      }
    });
  });

  return tempData;
};

export default calculateBuffs;
