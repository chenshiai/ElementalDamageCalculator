export const WITCH = "witch";
export const THUNDER = "thunder";
export const EMERALD = "emerald";
export const PERCENT = "percent";
export const EDEN = "eden";

/** 反应类型 */
export enum ElementalReactionType {
  /** 超激化 */
  Aggravate = "Aggravate",
  /** 蔓激化 */
  Spread = "Spread",
  /** 2倍增幅 */
  Rate = "evaporation",
  /** 1.5倍增幅 */
  Rate2 = "evaporation2",
  /** 无反应 */
  None = "none"
}

export const ElementalReaction = {
  Aggravate: "Aggravate", // 超激化
  Spread: "Spread", // 蔓激化
  Rate: "evaporation", // 2倍增幅
  Rate2: "evaporation2", // 1.5倍增幅
};

/** 元素反应类型文本 */
export const AtkTypeText = {
  [ElementalReactionType.Rate]: "2.0倍增幅",
  [ElementalReactionType.Rate2]: "1.5倍增幅",
  [ElementalReactionType.Aggravate]: "超激化",
  [ElementalReactionType.Spread]: "蔓激化",
  [ElementalReactionType.None]: "无反应",
};

/** 元素反应类型倍率 */
export const ReactionRate = {
  [ElementalReactionType.None]: 0,
  [ElementalReactionType.Rate]: 1,
  [ElementalReactionType.Rate2]: 0.5,
  [ElementalReactionType.Aggravate]: 0,
  [ElementalReactionType.Spread]: 0,
};

/** 基础属性文本 */
export const basicPanelSelectType = {
  ATK: "攻击力",
  DEF: "防御力",
  HP: "生命值",
  EM: "元素精通",
};
