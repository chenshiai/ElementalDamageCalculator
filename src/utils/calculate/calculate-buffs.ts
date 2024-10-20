import { ActionOn, BuffType } from "@/types/enum";
import { IBuffBase, ICalculatorValue } from "@/types/interface";

/** 计算buff的数值，累加在面板数据上 */
const calculateBuffs = (data: Partial<ICalculatorValue>, buffs: IBuffBase[], actionOn: ActionOn) => {
  // const data = Object.assign({}, data);

  buffs.forEach((buff: IBuffBase) => {
    if (!buff.enable) return;

    buff.effect.forEach((eff) => {
      // 若未设置actionOn，则默认设置为Direct
      eff.actionOn = eff.actionOn || ActionOn.Direct;
      if (eff.actionOn !== actionOn) return;

      const value = eff.getValue(data, buff.stack);

      // 若buff存在独特标识，则单独处理
      if (eff.special) {
        if (!data.specialValue) data.specialValue = {};
        data.specialValue[eff.special] = {
          ...(data.specialValue[eff.special] || {}),
          [eff.type]: value,
        };
      } else {
        switch (eff.type) {
          case BuffType.ATKPrcent:
            eff.transform
              ? (data.extraATK_NT += (data.baseATK * value) / 100)
              : (data.extraATK += (data.baseATK * value) / 100);
            break;
          case BuffType.ATKFixed:
            eff.transform ? (data.extraATK_NT += value) : (data.extraATK += value);
            break;
          case BuffType.HPPrcent:
            eff.transform
              ? (data.extraHP_NT += (data.baseHP * value) / 100)
              : (data.extraHP += (data.baseHP * value) / 100);
            break;
          case BuffType.HPFixed:
            eff.transform ? (data.extraHP_NT += value) : (data.extraHP += value);
            break;
          case BuffType.DEFPrcent:
            eff.transform
              ? (data.extraDEF_NT += (data.baseDEF * value) / 100)
              : (data.extraDEF += (data.baseDEF * value) / 100);
            break;
          case BuffType.DEFFixed:
            eff.transform ? (data.extraDEF_NT += value) : (data.extraDEF += value);
            break;
          case BuffType.MysteryFixed:
            eff.transform ? (data.elementalMystery_NT += value) : (data.elementalMystery += value);
            break;
          case BuffType.ChargeFixed:
            eff.transform ? (data.chargeEfficiency_NT += value) : (data.chargeEfficiency += value);
            break;
            // @TODO 各类元素附魔的优先级顺序待定
          case BuffType.Enchanting:
            data.enchanting = value;
            break;
          case BuffType.Transform:
            data.transform = value;
            break;
          default:
            data[eff.type] += value;
            break;
        }
      }
    });
  });

  return data;
};

export default calculateBuffs;
