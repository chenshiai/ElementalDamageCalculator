import { AppendProp } from "./interface.d";

export const appendPropMap = {
  [AppendProp.BASE_ATTACK]: '基础攻击力',
  [AppendProp.HP]: '生命值',
  [AppendProp.ATTACK]: '攻击力',
  [AppendProp.DEFENSE]: '防御力',
  [AppendProp.HP_PERCENT]: '生命值',
  [AppendProp.ATTACK_PERCENT]: '攻击力',
  [AppendProp.DEFENSE_PERCENT]: '防御力',
  [AppendProp.CRITICAL]: '暴击率',
  [AppendProp.CRITICAL_HURT]: '暴击伤害',
  [AppendProp.CHARGE_EFFICIENCY]: '元素充能效率',
  [AppendProp.HEAL_ADD]: '治疗加成',
  [AppendProp.ELEMENT_MASTERY]: '元素精通',
  [AppendProp.PHYSICAL_ADD_HURT]: '物理伤害加成',
  [AppendProp.FIRE_ADD_HURT]: '火元素伤害加成',
  [AppendProp.ELEC_ADD_HURT]: '雷元素伤害加成',
  [AppendProp.WATER_ADD_HURT]: '水元素伤害加成',
  [AppendProp.WIND_ADD_HURT]: '风元素伤害加成',
  [AppendProp.ICE_ADD_HURT]: '冰元素伤害加成',
  [AppendProp.ROCK_ADD_HURT]: '岩元素伤害加成',
  [AppendProp.GRASS_ADD_HURT]: '草元素伤害加成'
};

export function getAppendPropName(appendProp: AppendProp) {
  return appendPropMap[appendProp];
}

export function getEnkaUI(name: string): string {
  return `https://enka.network/ui/${name}.png`;
}