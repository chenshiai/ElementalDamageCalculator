import { AppendProp, EquipType } from "@/types/enum";

export const appendPropMap = {
  [AppendProp.BASE_ATTACK]: "基础攻击力",
  [AppendProp.HP]: "生命值",
  [AppendProp.ATTACK]: "攻击力",
  [AppendProp.DEFENSE]: "防御力",
  [AppendProp.HP_PERCENT]: "生命值(%)",
  [AppendProp.ATTACK_PERCENT]: "攻击力(%)",
  [AppendProp.DEFENSE_PERCENT]: "防御力(%)",
  [AppendProp.CRITICAL]: "暴击率(%)",
  [AppendProp.CRITICAL_HURT]: "暴击伤害(%)",
  [AppendProp.CHARGE_EFFICIENCY]: "元素充能效率(%)",
  [AppendProp.HEAL_ADD]: "治疗加成(%)",
  [AppendProp.ELEMENT_MASTERY]: "元素精通",
  [AppendProp.PHYSICAL_ADD_HURT]: "物理伤害加成(%)",
  [AppendProp.FIRE_ADD_HURT]: "火元素伤害加成(%)",
  [AppendProp.ELEC_ADD_HURT]: "雷元素伤害加成(%)",
  [AppendProp.WATER_ADD_HURT]: "水元素伤害加成(%)",
  [AppendProp.WIND_ADD_HURT]: "风元素伤害加成(%)",
  [AppendProp.ICE_ADD_HURT]: "冰元素伤害加成(%)",
  [AppendProp.ROCK_ADD_HURT]: "岩元素伤害加成(%)",
  [AppendProp.GRASS_ADD_HURT]: "草元素伤害加成(%)",
};

export const appendPropMap2 = {
  [AppendProp.BASE_ATTACK]: "基础攻击力",
  [AppendProp.HP]: "生命值",
  [AppendProp.ATTACK]: "攻击力",
  [AppendProp.DEFENSE]: "防御力",
  [AppendProp.HP_PERCENT]: "生命值",
  [AppendProp.ATTACK_PERCENT]: "攻击力",
  [AppendProp.DEFENSE_PERCENT]: "防御力",
  [AppendProp.CRITICAL]: "暴击率",
  [AppendProp.CRITICAL_HURT]: "暴击伤害",
  [AppendProp.CHARGE_EFFICIENCY]: "元素充能效率",
  [AppendProp.HEAL_ADD]: "治疗加成",
  [AppendProp.ELEMENT_MASTERY]: "元素精通",
  [AppendProp.PHYSICAL_ADD_HURT]: "物理伤害加成",
  [AppendProp.FIRE_ADD_HURT]: "火元素伤害加成",
  [AppendProp.ELEC_ADD_HURT]: "雷元素伤害加成",
  [AppendProp.WATER_ADD_HURT]: "水元素伤害加成",
  [AppendProp.WIND_ADD_HURT]: "风元素伤害加成",
  [AppendProp.ICE_ADD_HURT]: "冰元素伤害加成",
  [AppendProp.ROCK_ADD_HURT]: "岩元素伤害加成",
  [AppendProp.GRASS_ADD_HURT]: "草元素伤害加成",
};

export const percentProps = [
  AppendProp.HP_PERCENT,
  AppendProp.ATTACK_PERCENT,
  AppendProp.DEFENSE_PERCENT,
  AppendProp.CRITICAL,
  AppendProp.CRITICAL_HURT,
  AppendProp.CHARGE_EFFICIENCY,
  AppendProp.HEAL_ADD,
  AppendProp.PHYSICAL_ADD_HURT,
  AppendProp.FIRE_ADD_HURT,
  AppendProp.ELEC_ADD_HURT,
  AppendProp.WATER_ADD_HURT,
  AppendProp.WIND_ADD_HURT,
  AppendProp.ICE_ADD_HURT,
  AppendProp.ROCK_ADD_HURT,
  AppendProp.GRASS_ADD_HURT,
];
export const RelicText = ["生之花", "死之羽", "时之沙", "空之杯", "理之冠"];
export const EquipTypeText = {
  [EquipType.EQUIP_BRACER]: "生之花",
  [EquipType.EQUIP_NECKLACE]: "死之羽",
  [EquipType.EQUIP_SHOES]: "时之沙",
  [EquipType.EQUIP_RING]: "空之杯",
  [EquipType.EQUIP_DRESS]: "理之冠",
};

/** 各个部位对应的主属性列表 */
export const EquipTypeMainstats = {
  [EquipType.EQUIP_BRACER]: [AppendProp.HP],
  [EquipType.EQUIP_NECKLACE]: [AppendProp.ATTACK],
  [EquipType.EQUIP_SHOES]: [
    AppendProp.HP_PERCENT,
    AppendProp.ATTACK_PERCENT,
    AppendProp.DEFENSE_PERCENT,
    AppendProp.ELEMENT_MASTERY,
    AppendProp.CHARGE_EFFICIENCY,
  ],
  [EquipType.EQUIP_RING]: [
    AppendProp.HP_PERCENT,
    AppendProp.ATTACK_PERCENT,
    AppendProp.DEFENSE_PERCENT,
    AppendProp.ELEMENT_MASTERY,
    AppendProp.PHYSICAL_ADD_HURT,
    AppendProp.FIRE_ADD_HURT,
    AppendProp.WATER_ADD_HURT,
    AppendProp.WIND_ADD_HURT,
    AppendProp.ELEC_ADD_HURT,
    AppendProp.GRASS_ADD_HURT,
    AppendProp.ROCK_ADD_HURT,
    AppendProp.ICE_ADD_HURT,
  ],
  [EquipType.EQUIP_DRESS]: [
    AppendProp.HP_PERCENT,
    AppendProp.ATTACK_PERCENT,
    AppendProp.DEFENSE_PERCENT,
    AppendProp.ELEMENT_MASTERY,
    AppendProp.CRITICAL,
    AppendProp.HEAL_ADD,
    AppendProp.CRITICAL_HURT,
  ],
};

export const EquipTypeSubstats = [
  AppendProp.HP,
  AppendProp.ATTACK,
  AppendProp.DEFENSE,
  AppendProp.HP_PERCENT,
  AppendProp.ATTACK_PERCENT,
  AppendProp.DEFENSE_PERCENT,
  AppendProp.ELEMENT_MASTERY,
  AppendProp.CHARGE_EFFICIENCY,
  AppendProp.CRITICAL,
  AppendProp.CRITICAL_HURT
];

export function getAppendPropName(appendProp: AppendProp) {
  return appendPropMap[appendProp];
}

export function getAppendPropName2(appendProp: AppendProp) {
  return appendPropMap2[appendProp];
}

export function getEnkaUI(name: string): string {
  return `https://enka.network/ui/${name}.png`;
}
