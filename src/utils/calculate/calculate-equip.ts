import { IRelicItem, MainstatType, SubstatType } from "@/constants/characters-config/relic-class";
import { AppendProp } from "@/types/enum";
import { ICalculatorValue, IWeaponInfo } from "@/types/interface";

function handleProp(stat: Partial<MainstatType & SubstatType>, data: ICalculatorValue): void {
  switch (stat.mainPropId || stat.appendPropId) {
    case AppendProp.HP:
      data.extraHP += stat.statValue;
      break;
    case AppendProp.ATTACK:
      data.extraATK += stat.statValue;
      break;
    case AppendProp.DEFENSE:
      data.extraDEF += stat.statValue;
      break;
    case AppendProp.HP_PERCENT:
      data.extraHP += stat.statValue * data.baseHP / 100;
      break;
    case AppendProp.ATTACK_PERCENT:
      data.extraATK += stat.statValue * data.baseATK / 100;
      break;
    case AppendProp.DEFENSE_PERCENT:
      data.extraDEF += stat.statValue * data.baseDEF / 100;
      break;
    case AppendProp.CRITICAL:
      data.critcal += stat.statValue;
      break;
    case AppendProp.CRITICAL_HURT:
      data.critcalHurt += stat.statValue;
      break;
    case AppendProp.CHARGE_EFFICIENCY:
      data.chargeEfficiency += stat.statValue;
      break;
    case AppendProp.HEAL_ADD:
      data.healAdd += stat.statValue;
      break;
    case AppendProp.ELEMENT_MASTERY:
      data.elementalMystery += stat.statValue;
      break;
    case AppendProp.PHYSICAL_ADD_HURT:
      data.physicalAddHunt += stat.statValue;
      break;
    case AppendProp.FIRE_ADD_HURT:
      data.pyroAddHunt += stat.statValue;
      break;
    case AppendProp.ELEC_ADD_HURT:
      data.electroAddHunt += stat.statValue;
      break;
    case AppendProp.WATER_ADD_HURT:
      data.hydroAddHunt += stat.statValue;
      break;
    case AppendProp.WIND_ADD_HURT:
      data.anemoAddHunt += stat.statValue;
      break;
    case AppendProp.ICE_ADD_HURT:
      data.cryoAddHunt += stat.statValue;
      break;
    case AppendProp.ROCK_ADD_HURT:
      data.geoAddHunt += stat.statValue;
      break;
    case AppendProp.GRASS_ADD_HURT:
      data.dendroAddHunt += stat.statValue;
      break;
    default:
      break;
  }
}

export function calculateRelicStat(data: ICalculatorValue, relics: IRelicItem[]): Partial<ICalculatorValue> {
  // const data = Object.assign({}, data);

  relics.forEach((relic) => {
    if (!relic) return;
    handleProp(relic.reliquaryMainstat, data);

    if (relic.reliquarySubstats.length <= 0) return;
    relic.reliquarySubstats.forEach((substat) => {
      handleProp(substat, data);
    });
  });

  return data;
}

export function calculateWeaponSubStat(data: ICalculatorValue, weapon: IWeaponInfo): Partial<ICalculatorValue> {
  const substat = weapon.weaponStats.find((i) => i?.appendPropId !== AppendProp.BASE_ATTACK);
  // 低星武器没有副属性
  if (substat)
    handleProp(substat, data);
  return data;
}
