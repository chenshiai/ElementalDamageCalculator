import { IRelicItem, MainstatType, SubstatType } from "@/constants/characters-config/relic-class";
import { AppendProp } from "@/types/enum";
import { ICalculatorValue, IWeaponInfo } from "@/types/interface";

function handleProp(stat: Partial<MainstatType & SubstatType>, tempData: ICalculatorValue): void {
  switch (stat.mainPropId || stat.appendPropId) {
    case AppendProp.HP:
      tempData.extraHP += stat.statValue;
      break;
    case AppendProp.ATTACK:
      tempData.extraATK += stat.statValue;
      break;
    case AppendProp.DEFENSE:
      tempData.extraDEF += stat.statValue;
      break;
    case AppendProp.HP_PERCENT:
      tempData.extraHP += stat.statValue * tempData.baseHP / 100;
      break;
    case AppendProp.ATTACK_PERCENT:
      tempData.extraATK += stat.statValue * tempData.baseATK / 100;
      break;
    case AppendProp.DEFENSE_PERCENT:
      tempData.extraDEF += stat.statValue * tempData.baseDEF / 100;
      break;
    case AppendProp.CRITICAL:
      tempData.critcal += stat.statValue;
      break;
    case AppendProp.CRITICAL_HURT:
      tempData.critcalHurt += stat.statValue;
      break;
    case AppendProp.CHARGE_EFFICIENCY:
      tempData.chargeEfficiency += stat.statValue;
      break;
    case AppendProp.HEAL_ADD:
      tempData.healAdd += stat.statValue;
      break;
    case AppendProp.ELEMENT_MASTERY:
      tempData.elementalMystery += stat.statValue;
      break;
    case AppendProp.PHYSICAL_ADD_HURT:
      tempData.physicalAddHunt += stat.statValue;
      break;
    case AppendProp.FIRE_ADD_HURT:
      tempData.pyroAddHunt += stat.statValue;
      break;
    case AppendProp.ELEC_ADD_HURT:
      tempData.electroAddHunt += stat.statValue;
      break;
    case AppendProp.WATER_ADD_HURT:
      tempData.hydroAddHunt += stat.statValue;
      break;
    case AppendProp.WIND_ADD_HURT:
      tempData.anemoAddHunt += stat.statValue;
      break;
    case AppendProp.ICE_ADD_HURT:
      tempData.cryoAddHunt += stat.statValue;
      break;
    case AppendProp.ROCK_ADD_HURT:
      tempData.geoAddHunt += stat.statValue;
      break;
    case AppendProp.GRASS_ADD_HURT:
      tempData.dendroAddHunt += stat.statValue;
      break;
    default:
      break;
  }
}

export function calculateRelicStat(data: ICalculatorValue, relics: IRelicItem[]): Partial<ICalculatorValue> {
  const tempData = Object.assign({}, data);

  relics.forEach((relic) => {
    if (!relic) return;
    handleProp(relic.reliquaryMainstat, tempData);

    if (relic.reliquarySubstats.length <= 0) return;
    relic.reliquarySubstats.forEach((substat) => {
      handleProp(substat, tempData);
    });
  });

  return tempData;
}

export function calculateWeaponSubStat(data: ICalculatorValue, weapon: IWeaponInfo): Partial<ICalculatorValue> {
  const tempData = Object.assign({}, data);
  const substat = weapon.weaponStats.filter((i) => i.appendPropId !== AppendProp.BASE_ATTACK)[0];

  handleProp(substat, tempData);
  return tempData;
}
