import { BuffEffect, BuffCondition, WeaponStats } from "../index";
import { ElementType, AttackType, Rarity, WeaponType, EquipType, BuffType, BuffTarget, SecondElementType } from "../enum";
import { IUserSavedCalculationData } from "@/constants/db";

export interface IBuffBase {
  /** Buff展示名称 */
  label: string;
  /** Buff细节描述 */
  describe: string;
  /** Buff是否启用 */
  enable: boolean;
  /** Buff的具体效果 */
  effect: BuffEffect[];

  /** Buff数值是否可叠层 */
  stackable?: boolean;
  /** BUff层数别名 */
  stackText?: string;
  /** BUff层数控件类型 */
  stackType?: "slider" | "switch";
  /** 最大叠加层数 */
  limit?: number;
  /** 当前叠加层数 */
  stack?: number;
  /** 个人增益展示条件判断函数，返回为true即可以展示，false不可展示。不设置则默认展示 */
  condition?: BuffCondition;

  /** Buff的生效对象 */
  target?: BuffTarget;

  /** Buff是否可共享，为true则该增益会被纳入团队增益 */
  shareable?: boolean;
  /** 给队友使用的团队增益条件判断函数，入参为队友的面板属性，返回为true即可以展示，false不可展示。不设置则默认展示 */
  shareCondition?: BuffCondition;

  /** 同名Buff是否可以重复生效 */
  repeatable?: boolean;
}

/** Buff对象的拓展属性，用于处理部分场景 */
export interface IBuffExtra extends IBuffBase {
  /** buff来源 对应用户保存的面板名称 */
  source: string;
}
export interface ISkillRate {
  label: string;
  rate: IRate;
  attackType: AttackType;
  elementType: ElementType;
  /** 独特技能标识，设置该字段后，拥有相同独特标识的buff可以作用在这个技能上 */
  special?: string;
}
export interface IRate {
  /** 攻击倍率 */
  atk?: number[];
  /** 生命倍率 */
  hp?: number[];
  /** 防御倍率 */
  def?: number[];
  /** 元素精通倍率 */
  em?: number[];
  /** 固定数值 */
  fixed?: number[];
}
export interface LimitDataType {
  baseHP: number;
  baseATK: number;
  baseDEF: number;
}
/** 角色数据类型 */
export interface ICharacterInfo {
  enkaId: number;
  name: string;
  rarity: Rarity;
  element: ElementType;
  secondElement?: SecondElementType;
  weapon: WeaponType;
  burstCharge: number;
  icons: {
    avatarIcon: string;
    constsIcon: string[];
    gachaImage: string;
  };
  buffs?: IBuffBase[];
  talentNames: string[];
  normalAttack: ISkillRate[];
  elementSkill: ISkillRate[];
  burstSkill: ISkillRate[];
  otherSkill: ISkillRate[];
  limitData: LimitDataType[];

  /** 变量属性，根据实际数据来自动调整 */
  baseATK: number;
  baseHP: number;
  baseDEF: number;
  level: number;
  overshoot: number;
}

export interface IWeaponInfo {
  level: number;
  name: string;
  enkaId: number;
  weaponType: WeaponType;
  rarity: Rarity;
  affix: number;
  weaponStats: WeaponStats[];
  icon: string;
  getSkillDescribe: (affix: number) => {
    title: string;
    text: string;
  };
  getBuffs?: (affix: number) => IBuffBase[];
  getSkill?: (affix: number) => ISkillRate[];
}

export interface IRelicBase {
  setNameTextMapHash: number;
  /** 圣遗物的部位类型 */
  equipType: EquipType;
  name: string;
  icon: string;
  rankLevel: number;
  level: number;
}

/** 用于计算的所有属性 */
export interface ICalculatorValue {
  /** 角色等级 */
  level: number;
  /** 角色突破阶段 */
  overshoot: number;
  /** 命之座 */
  constellation: number;
  /** 基础生命值 */
  baseHP: number;
  /** 角色基础攻击力+武器基础攻击力 */
  baseATK: number;
  /** 基础防御力 */
  baseDEF: number;
  /** 角色元素类型 */
  element: ElementType;
  /** 角色的第二类型 芒、荒、月兆、夜魂 */
  secondElement?: SecondElementType;
  /** 角色武器类型 */
  weapon: WeaponType;
  /** 元素爆发能量 */
  burstCharge: number;
  normalLevel: number;
  skillLevel: number;
  burstLevel: number;

  // 额外面板属性
  /** 额外生命值 */
  extraHP: number;
  /** 额外攻击力 */
  extraATK: number;
  /** 额外防御力 */
  extraDEF: number;
  /** 元素精通 */
  elementalMystery: number;
  /** 元素充能效率 */
  chargeEfficiency: number;

  // 由面板属性转化而来的属性，不可用于二次面板转化。统一用 _NT 结尾
  /** 额外生命值，不可被二次转化 */
  extraHP_NT: number;
  /** 额外攻击力。不可被二次转化 */
  extraATK_NT: number;
  /** 额外防御力，不可被二次转化 */
  extraDEF_NT: number;
  /** 额外元素精通，不可被二次转化 */
  elementalMystery_NT: number;
  /** 额外充能效率，不可被二次转化 */
  chargeEfficiency_NT: number;
  // 进阶属性
  /** 暴击率 */
  [BuffType.Critcal]: number;
  /** 暴击伤害 */
  [BuffType.CritcalHurt]: number;
  /** 治疗加成 */
  [BuffType.HealAdd]: number;
  /** 受治疗加成 */
  [BuffType.BeHealAdd]: number;
  /** 护盾强效 */
  [BuffType.ShieldStrong]: number;
  /** 护盾构建 */
  [BuffType.ShieldAdd]: number;
  /** 冷却缩减 */
  [BuffType.CoolDown]: number;
  // 元素增伤
  /** 物理伤害加成 */
  [BuffType.PhysicalPrcent]: number;
  /** 火元素伤害加成 */
  [BuffType.PyroPrcent]: number;
  /** 雷元素伤害加成 */
  [BuffType.ElectroPrcent]: number;
  /** 水元素伤害加成 */
  [BuffType.HydroPrcent]: number;
  /** 风元素伤害加成 */
  [BuffType.AnemoPrcent]: number;
  /** 冰元素伤害加成 */
  [BuffType.CryoPrcent]: number;
  /** 岩元素伤害加成 */
  [BuffType.GeoPrcent]: number;
  /** 草元素伤害加成 */
  [BuffType.DendroPrcent]: number;
  /** 月感电伤害加成 - 与精通乘区加算 */
  [BuffType.MoonElectroPrcent]: number;
  /** 月绽放伤害加成 - 与精通乘区加算 */
  [BuffType.MoonSwirlPrcent]: number;

  // 各种隐式暴击率
  /** 全局暴击率提升 */
  [BuffType.GlobalCritcal]: number;
  /** 普通攻击暴击率加成 */
  [BuffType.NormalCritcal]: number;
  /** 重击暴击率加成 */
  [BuffType.StrongCritcal]: number;
  /** 下落攻击暴击率加成 */
  [BuffType.FallingCritcal]: number;
  /** 元素战技暴击率加成 */
  [BuffType.SkillCritcal]: number;
  /** 元素爆发暴击率加成 */
  [BuffType.BurstCritcal]: number;
  /** 物理伤害暴击率加成 */
  [BuffType.PhysicalCritcal]: number;
  /** 火元素伤害暴击率加成 */
  [BuffType.PyroCritcal]: number;
  /** 雷元素伤害暴击率加成 */
  [BuffType.ElectroCritcal]: number;
  /** 水元素伤害暴击率加成 */
  [BuffType.HydroCritcal]: number;
  /** 风元素伤害暴击率加成 */
  [BuffType.AnemoCritcal]: number;
  /** 冰元素伤害暴击率加成 */
  [BuffType.CryoCritcal]: number;
  /** 岩元素伤害暴击率加成 */
  [BuffType.GeoCritcal]: number;
  /** 草元素伤害暴击率加成 */
  [BuffType.DendroCritcal]: number;
  /** 月感电伤害暴击率加成 */
  [BuffType.MoonElectroCritcal]: number;
  /** 月绽放伤害暴击率加成 */
  [BuffType.MoonSwirlCritcal]: number;

  // 各种隐式爆伤
  /** 全局暴击伤害提升 */
  [BuffType.GlobalCritcalHunt]: number;
  /** 普攻暴击伤害加成 */
  [BuffType.NormalCritcalHurt]: number;
  /** 重击暴击伤害加成 */
  [BuffType.StrongCritcalHurt]: number;
  /** 下落攻击暴击伤害加成 */
  [BuffType.FallingCritcalHurt]: number;
  /** 元素战技暴击伤害加成 */
  [BuffType.SkillCritcalHurt]: number;
  /** 元素爆发暴击伤害加成 */
  [BuffType.BurstCritcalHurt]: number;
  /** 物理伤害暴击伤害加成 */
  [BuffType.PhysicalCritcalHurt]: number;
  /** 火元素伤害暴击伤害加成 */
  [BuffType.PyroCritcalHurt]: number;
  /** 雷元素伤害暴击伤害加成 */
  [BuffType.ElectroCritcalHurt]: number;
  /** 水元素伤害暴击伤害加成 */
  [BuffType.HydroCritcalHurt]: number;
  /** 风元素伤害暴击伤害加成 */
  [BuffType.AnemoCritcalHurt]: number;
  /** 冰元素伤害暴击伤害加成 */
  [BuffType.CryoCritcalHurt]: number;
  /** 岩元素伤害暴击伤害加成 */
  [BuffType.GeoCritcalHurt]: number;
  /** 草元素伤害暴击伤害加成 */
  [BuffType.DendroCritcalHurt]: number;
  /** 月感电伤害暴击伤害加成 */
  [BuffType.MoonElectroCritcalHurt]: number;
  /** 月绽放伤害暴击伤害加成 */
  [BuffType.MoonSwirlCritcalHurt]: number;

  // 攻击增伤
  /** 普通攻击伤害加成 */
  [BuffType.NormalPrcent]: number;
  /** 重击伤害加成 */
  [BuffType.StrongPrcent]: number;
  /** 下落攻击伤害加成 */
  [BuffType.FallingPrcent]: number;
  /** 元素战技伤害加成 */
  [BuffType.SkillPrcent]: number;
  /** 元素爆发伤害加成 */
  [BuffType.BurstPrcent]: number;
  /** 全局伤害加成 */
  [BuffType.GlobalPrcent]: number;
  /** 全局月伤害加成 */
  [BuffType.GlobalMoonPrcent]: number;

  // 攻击伤害提高
  /** 普攻伤害提高 */
  [BuffType.NormalFixed]: number;
  /** 重击伤害提高 */
  [BuffType.StrongFixed]: number;
  /** 下落攻击伤害提高 */
  [BuffType.FallingFixed]: number;
  /** 元素战技伤害提高 */
  [BuffType.SkillFixed]: number;
  /** 元素爆发伤害提高 */
  [BuffType.BurstFixed]: number;
  /** 全局伤害提高 */
  [BuffType.GlobalFixed]: number;
  /** 全局月伤害提高 */
  [BuffType.GlobalMoonFixed]: number;

  // 元素伤害提高
  /** 物理伤害提高 */
  [BuffType.PhysicalFixed]: number;
  /** 火元素伤害提高 */
  [BuffType.PyroFixed]: number;
  /** 雷元素伤害提高 */
  [BuffType.ElectroFixed]: number;
  /** 水元素伤害提高 */
  [BuffType.HydroFixed]: number;
  /** 风元素伤害提高 */
  [BuffType.AnemoFixed]: number;
  /** 冰元素伤害提高 */
  [BuffType.CryoFixed]: number;
  /** 岩元素伤害提高 */
  [BuffType.GeoFixed]: number;
  /** 草元素伤害提高 */
  [BuffType.DendroFixed]: number;
  /** 月感电伤害提高 */
  [BuffType.MoonElectroFixed]: number;
  /** 月绽放伤害提高 */
  [BuffType.MoonSwirlFixed]: number;

  /** 生命之契 */
  [BuffType.LifeContract]: number;

  /** 普攻倍率最终提升% */
  [BuffType.NormalRate]: number;
  /** 重击倍率最终提升% */
  [BuffType.StrongRate]: number;
  /** 下落攻击倍率最终提升% */
  [BuffType.FallingRateAdd]: number;
  /** 元素战技倍率最终提升% */
  [BuffType.SkillRate]: number;
  /** 元素爆发倍率最终提升% */
  [BuffType.BurstRate]: number;
  /** 月感电倍率最终提升% */
  [BuffType.MoonElectroRate]: number;
  /** 月绽放倍率最终提升% */
  [BuffType.MoonSwirlRate]: number;

  /** 普攻倍率加成 */
  [BuffType.NormalAdd]: number;
  /** 重击倍率加成 */
  [BuffType.StrongAdd]: number;
  /** 下落攻击倍率加成 */
  [BuffType.FallingAdd]: number;
  /** 元素战技倍率加成 */
  [BuffType.SkillAdd]: number;
  /** 元素爆发倍率加成 */
  [BuffType.BurstAdd]: number;
  /** 攻击力倍率加成 - 该buff需要指定为独特buff，否则全技能生效 */
  [BuffType.AtkAdd]: number;
  /** 防御力倍率加成 - 该buff需要指定为独特buff，否则全技能生效  */
  [BuffType.DefAdd]: number;
  /** 生命值倍率加成 - 该buff需要指定为独特buff，否则全技能生效  */
  [BuffType.HPAdd]: number;
  /** 元素精通倍率加成 - 该buff需要指定为独特buff，否则全技能生效  */
  [BuffType.EmAdd]: number;

  /** 月感电擢升% */
  [BuffType.MoonElectroPromote]: number;
  /** 月绽放擢升% */
  [BuffType.MoonSwirlPromote]: number;
  /** 月感电基础伤害提升% */
  [BuffType.MoonElectroBasePercent]: number;
  /** 月绽放基础伤害提升% */
  [BuffType.MoonSwirlBasePercent]: number;

  /** 普攻天赋等级加成 */
  [BuffType.NormalLevel]: number;
  /** 元素战技天赋等级加成 */
  [BuffType.SkillLevel]: number;
  /** 元素爆发天赋等级加成 */
  [BuffType.BurstLevel]: number;

  /** 增幅反应系数提升 */
  [BuffType.AmplifiedRate]: number;
  /** 普攻附魔属性 */
  [BuffType.Enchanting]: number;
  /** 元素转化属性 */
  [BuffType.Transform]: number;
  /** 激化反应系数提升 */
  [BuffType.CatalyzeRate]: number;

  /** 敌人的等级 */
  enemyLevel: number;
  /** 敌人的物理抗性% */
  [BuffType.EnemyPhysicalResistance]: number;
  /** 敌人的火元素抗性% */
  [BuffType.EnemyPyroResistance]: number;
  /** 敌人的雷元素抗性% */
  [BuffType.EnemyElectroResistance]: number;
  /** 敌人的水元素抗性% */
  [BuffType.EnemyHydroResistance]: number;
  /** 敌人的冰元素抗性% */
  [BuffType.EnemyCryoResistance]: number;
  /** 敌人的风元素抗性% */
  [BuffType.EnemyAnemoResistance]: number;
  /** 敌人的岩元素抗性% */
  [BuffType.EnemyGeoResistance]: number;
  /** 敌人的草元素抗性% */
  [BuffType.EnemyDendroResistance]: number;
  /** 敌人的防御减少% */
  [BuffType.ReduceArmour]: number;
  /** 无视敌人的防御% */
  [BuffType.DefensePenetration]: number;

  /** 独特数据面板 */
  specialValue?: {
    [key: string]: Partial<ICalculatorValue>;
  };
}

export interface ITeamItem {
  calculation: IUserSavedCalculationData;
  buffMap: Map<string, IBuffExtra[]>;
  name: string;
}
