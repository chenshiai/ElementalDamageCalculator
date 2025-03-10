import { ActionOn, BuffTarget, BuffType } from "@/types/enum";
import { IBuffBase } from "@/types/interface";

function createBuff(type: BuffType, value: number, star: "A" | "S", descSuffix: string): IBuffBase {
  return {
    label: `80级突破6阶，${descSuffix}+${value}${type !== BuffType.MysteryFixed ? "%" : ""}`,
    describe: `${star === "A" ? "4星角色" : "5星角色"}突破到6阶后+${value}${
      type !== BuffType.MysteryFixed ? "%" : ""
    }${descSuffix}`,
    effect: [{ type, getValue: () => value }],
    enable: true,
    condition: ({ overshoot }) => overshoot === 6
  };
}

export const A_80_ATK_24P = createBuff(BuffType.ATKPrcent, 24, "A", "攻击力");
export const A_80_HP_24P = createBuff(BuffType.HPPrcent, 24, "A", "生命值上限");
export const A_80_DEF_24P = createBuff(BuffType.DEFPrcent, 24, "A", "防御力");
export const A_80_MYSTERY_96 = createBuff(BuffType.MysteryFixed, 96, "A", "元素精通");
export const A_80_CHARGE_26P = createBuff(BuffType.ChargeFixed, 26.7, "A", "元素充能效率");

export const A_80_GEO_24P = createBuff(BuffType.GeoPrcent, 24, "A", "岩元素伤害加成");
export const A_80_CRYO_24P = createBuff(BuffType.CryoPrcent, 24, "A", "冰元素伤害加成");
export const A_80_PYRO_24P = createBuff(BuffType.PyroPrcent, 24, "A", "火元素伤害加成");
export const A_80_HYDRO_24P = createBuff(BuffType.HydroPrcent, 24, "A", "水元素伤害加成");
export const A_80_ELECTRO_24P = createBuff(BuffType.ElectroPrcent, 24, "A", "雷元素伤害加成");
export const A_80_ANEMO_24P = createBuff(BuffType.AnemoPrcent, 24, "A", "风元素伤害加成");
export const A_80_DENDRO_24P = createBuff(BuffType.DendroPrcent, 24, "A", "草元素伤害加成");
export const A_80_PHYSICAL_30P = createBuff(BuffType.PhysicalPrcent, 30, "A", "物理伤害加成");

// 五星角色的buff
export const S_80_HP_28P = createBuff(BuffType.HPPrcent, 28.8, "S", "生命值上限");
export const S_80_ATK_28P = createBuff(BuffType.ATKPrcent, 28.8, "S", "攻击力");
export const S_80_DEF_28P = createBuff(BuffType.DEFPrcent, 28.8, "S", "防御力");
export const S_80_CHARGE_32P = createBuff(BuffType.ChargeFixed, 32, "S", "元素充能效率");
export const S_80_MYSTERY_115 = createBuff(BuffType.MysteryFixed, 115, "S", "元素精通");
export const S_80_CRITAL_19P = createBuff(BuffType.Critcal, 19.2, "S", "暴击率");
export const S_80_CRITALHUNT_38P = createBuff(BuffType.CritcalHurt, 38.4, "S", "暴击伤害");
export const S_80_HEALADD_22P = createBuff(BuffType.HealAdd, 22.2, "S", "治疗加成");

export const S_80_GEO_28P = createBuff(BuffType.GeoPrcent, 28.8, "S", "岩元素伤害加成");
export const S_80_CRYO_28P = createBuff(BuffType.CryoPrcent, 28.8, "S", "冰元素伤害加成");
export const S_80_PYRO_28P = createBuff(BuffType.PyroPrcent, 28.8, "S", "火元素伤害加成");
export const S_80_HYDRO_28P = createBuff(BuffType.HydroPrcent, 28.8, "S", "水元素伤害加成");
export const S_80_ELECTRO_28P = createBuff(BuffType.ElectroPrcent, 28.8, "S", "雷元素伤害加成");
export const S_80_ANEMO_28P = createBuff(BuffType.AnemoPrcent, 28.8, "S", "风元素伤害加成");
export const S_80_DENDRO_28P = createBuff(BuffType.DendroPrcent, 28.8, "S", "草元素伤害加成");
export const S_80_PHYSICAL_36P = createBuff(BuffType.PhysicalPrcent, 36, "S", "物理伤害加成");

const skillTypeLabel = {
  [BuffType.NormalLevel]: "普通攻击",
  [BuffType.SkillLevel]: "元素战技",
  [BuffType.BurstLevel]: "元素爆发",
};
// 创建 Constellation 对象的函数
function createConstellationBuff(constellation: number, skillType: BuffType): IBuffBase {
  return {
    label: `${constellation}命·${skillTypeLabel[skillType]}天赋等级提高3级`,
    describe: `${skillTypeLabel[skillType]}天赋等级提高3级`,
    condition({ constellation: currentConstellation }) {
      return currentConstellation >= constellation;
    },
    effect: [{ type: skillType, getValue: () => 3, actionOn: ActionOn.Front }],
    enable: true,
  };
}

// 使用函数创建不同的 命座buff 对象
export const Constellation_A_3 = createConstellationBuff(3, BuffType.NormalLevel);
export const Constellation_E_3 = createConstellationBuff(3, BuffType.SkillLevel);
export const Constellation_Q_3 = createConstellationBuff(3, BuffType.BurstLevel);

export const Constellation_A_5 = createConstellationBuff(5, BuffType.NormalLevel);
export const Constellation_E_5 = createConstellationBuff(5, BuffType.SkillLevel);
export const Constellation_Q_5 = createConstellationBuff(5, BuffType.BurstLevel);

// 元素共鸣的增益
export const PyroResonance = {
  label: "元素共鸣·热诚之火",
  describe: "攻击力提高25%",
  effect: [{ type: BuffType.ATKPrcent, getValue: () => 25 }],
  enable: true,
  target: BuffTarget.All,
  source: "元素共鸣",
};

export const CryoResonance = {
  label: "元素共鸣·粉碎之冰",
  describe: "攻击冰元素附着或冻结状态下的敌人时，暴击率提高15%",
  effect: [{ type: BuffType.GlobalCritcal, getValue: () => 15 }],
  enable: false,
  target: BuffTarget.All,
  source: "元素共鸣",
};

export const HydroResonance = {
  label: "元素共鸣·愈疗之水",
  describe: "生命值上限提高25%",
  effect: [{ type: BuffType.HPPrcent, getValue: () => 25 }],
  enable: true,
  target: BuffTarget.All,
  source: "元素共鸣",
};

export const DendroResonance = {
  label: "元素共鸣·蔓生之草1",
  describe: "元素精通提升50点",
  effect: [{ type: BuffType.MysteryFixed, getValue: () => 50 }],
  enable: true,
  target: BuffTarget.All,
  source: "元素共鸣",
};
export const DendroResonance1 = {
  label: "元素共鸣·蔓生之草2",
  describe: "触发燃烧、原激化、绽放反应后，元素精通提升30点",
  effect: [{ type: BuffType.MysteryFixed, getValue: () => 30 }],
  enable: false,
  target: BuffTarget.All,
  source: "元素共鸣",
};
export const DendroResonance2 = {
  label: "元素共鸣·蔓生之草3",
  describe: "触发超激化、蔓激化、超绽放、烈绽放反应后，元素精通提升20",
  effect: [{ type: BuffType.MysteryFixed, getValue: () => 20 }],
  enable: false,
  target: BuffTarget.All,
  source: "元素共鸣",
};

export const GeoResonance = {
  label: "元素共鸣·坚定之岩",
  describe:
    "护盾强效提高15%。角色处于护盾庇护下时：造成的伤害提升15%；角色对敌人造成伤害时，会使敌人的岩元素抗性降低20%",
  effect: [
    { type: BuffType.ShieldStrong, getValue: () => 15 },
    { type: BuffType.EnemyGeoResistance, getValue: () => -20 },
  ],
  enable: true,
  target: BuffTarget.All,
  source: "元素共鸣",
};
