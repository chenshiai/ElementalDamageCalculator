import { IRelicItem } from "@/constants/characters-config/relic-class";
import { AppendProp } from "@/types/enum";
import { ICalculatorValue, IWeaponInfo } from "@/types/interface";

export function calculateRelic(data: ICalculatorValue, relics: IRelicItem[]): Partial<ICalculatorValue> {
  let extraATK = data.extraATK;
  relics.forEach((relic) => {
    if (!relic) return;
    if (relic.reliquaryMainstat.mainPropId === AppendProp.ATTACK_PERCENT) {
      extraATK += (data.baseATK * relic.reliquaryMainstat.statValue) / 100;
    }
    if (relic.reliquaryMainstat.mainPropId === AppendProp.ATTACK) {
      extraATK += relic.reliquaryMainstat.statValue;
    }

    if (relic.reliquarySubstats.length <= 0) return;
    relic.reliquarySubstats.forEach((substat) => {
      if (substat.appendPropId === AppendProp.ATTACK_PERCENT) {
        extraATK += (data.baseATK * substat.statValue) / 100;
      }
      if (substat.appendPropId === AppendProp.ATTACK) {
        extraATK += substat.statValue;
      }
    });
  });

  return {
    extraATK
  }
}

export function calculateWeaponSubStat(data: ICalculatorValue, weapon: IWeaponInfo): Partial<ICalculatorValue> {
  return data;
} 