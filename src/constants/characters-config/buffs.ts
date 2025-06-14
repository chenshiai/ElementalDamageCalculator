import { ActionOn, BuffTarget, BuffType } from "@/types/enum";
import { IBuffBase } from "@/types/interface";

function createBuff(type: BuffType, value: number, star: "A" | "S", descSuffix: string, shoot): IBuffBase {
  return {
    label: `角色突破${shoot}阶，${descSuffix}+${value}${type !== BuffType.MysteryFixed ? "%" : ""}`,
    describe: `${star === "A" ? "4星角色" : "5星角色"}突破到${shoot}阶后+${value}${
      type !== BuffType.MysteryFixed ? "%" : ""
    }${descSuffix}`,
    effect: [{ type, getValue: () => value }],
    enable: true,
    condition: ({ overshoot }) => overshoot === shoot,
  };
}
export const A_80_ATK_24P = [6, 12, 12, 18, 24].map((value, index) =>
  createBuff(BuffType.ATKPrcent, value, "A", "攻击力", index + 2)
);
export const A_80_HP_24P = [6, 12, 12, 18, 24].map((value, index) =>
  createBuff(BuffType.HPPrcent, value, "A", "生命值上限", index + 2)
);
export const A_80_DEF_24P = [6, 12, 12, 18, 24].map((value, index) =>
  createBuff(BuffType.DEFPrcent, value, "A", "防御力", index + 2)
);
export const A_80_MYSTERY_96 = [24, 48, 48, 72, 96].map((value, index) =>
  createBuff(BuffType.MysteryFixed, value, "A", "元素精通", index + 2)
);
export const A_80_CHARGE_26P = [6.7, 13.3, 13.3, 20, 26.7].map((value, index) =>
  createBuff(BuffType.ChargeFixed, value, "A", "元素充能效率", index + 2)
);

export const A_80_GEO_24P = [6, 12, 12, 18, 24].map((value, index) =>
  createBuff(BuffType.GeoPrcent, value, "A", "岩元素伤害加成", index + 2)
);
export const A_80_CRYO_24P = [6, 12, 12, 18, 24].map((value, index) =>
  createBuff(BuffType.CryoPrcent, value, "A", "冰元素伤害加成", index + 2)
);
export const A_80_PYRO_24P = [6, 12, 12, 18, 24].map((value, index) =>
  createBuff(BuffType.PyroPrcent, value, "A", "火元素伤害加成", index + 2)
);
export const A_80_HYDRO_24P = [6, 12, 12, 18, 24].map((value, index) =>
  createBuff(BuffType.HydroPrcent, value, "A", "水元素伤害加成", index + 2)
);
export const A_80_ELECTRO_24P = [6, 12, 12, 18, 24].map((value, index) =>
  createBuff(BuffType.ElectroPrcent, value, "A", "雷元素伤害加成", index + 2)
);
export const A_80_ANEMO_24P = [6, 12, 12, 18, 24].map((value, index) =>
  createBuff(BuffType.AnemoPrcent, value, "A", "风元素伤害加成", index + 2)
);
export const A_80_DENDRO_24P = [6, 12, 12, 18, 24].map((value, index) =>
  createBuff(BuffType.DendroPrcent, value, "A", "草元素伤害加成", index + 2)
);
export const A_80_PHYSICAL_30P = [7.5, 15, 15, 22.5, 30].map((value, index) =>
  createBuff(BuffType.PhysicalPrcent, value, "A", "物理伤害加成", index + 2)
);

// 五星角色的buff
export const S_80_HP_28P = [7.2, 14.4, 14.4, 21.6, 28.8].map((value, index) =>
  createBuff(BuffType.HPPrcent, value, "S", "生命值上限", index + 2)
);
export const S_80_ATK_28P = [7.2, 14.4, 14.4, 21.6, 28.8].map((value, index) =>
  createBuff(BuffType.ATKPrcent, value, "S", "攻击力", index + 2)
);
export const S_80_DEF_28P = [7.2, 14.4, 14.4, 21.6, 28.8].map((value, index) =>
  createBuff(BuffType.DEFPrcent, value, "S", "防御力", index + 2)
);
export const S_80_CHARGE_32P = [8, 16, 16, 24, 32].map((value, index) =>
  createBuff(BuffType.ChargeFixed, value, "S", "元素充能效率", index + 2)
);
export const S_80_MYSTERY_115 = [29, 58, 58, 86, 115].map((value, index) =>
  createBuff(BuffType.MysteryFixed, value, "S", "元素精通", index + 2)
);
export const S_80_CRITAL_19P = [4.8, 9.6, 9.6, 14.4, 19.2].map((value, index) =>
  createBuff(BuffType.Critcal, value, "S", "暴击率", index + 2)
);
export const S_80_CRITALHUNT_38P = [9.6, 19.2, 19.2, 28.8, 38.4].map((value, index) =>
  createBuff(BuffType.CritcalHurt, value, "S", "暴击伤害", index + 2)
);

export const S_80_HEALADD_22P = [5.5, 11.1, 11.1, 16.6, 22.2].map((value, index) =>
  createBuff(BuffType.HealAdd, value, "S", "治疗加成", index + 2)
);

export const S_80_GEO_28P = [7.2, 14.4, 14.4, 21.6, 28.8].map((value, index) =>
  createBuff(BuffType.GeoPrcent, value, "S", "岩元素伤害加成", index + 2)
);
export const S_80_CRYO_28P = [7.2, 14.4, 14.4, 21.6, 28.8].map((value, index) =>
  createBuff(BuffType.CryoPrcent, value, "S", "冰元素伤害加成", index + 2)
);
export const S_80_PYRO_28P = [7.2, 14.4, 14.4, 21.6, 28.8].map((value, index) =>
  createBuff(BuffType.PyroPrcent, value, "S", "火元素伤害加成", index + 2)
);
export const S_80_HYDRO_28P = [7.2, 14.4, 14.4, 21.6, 28.8].map((value, index) =>
  createBuff(BuffType.HydroPrcent, value, "S", "水元素伤害加成", index + 2)
);
export const S_80_ELECTRO_28P = [7.2, 14.4, 14.4, 21.6, 28.8].map((value, index) =>
  createBuff(BuffType.ElectroPrcent, value, "S", "雷元素伤害加成", index + 2)
);
export const S_80_ANEMO_28P = [7.2, 14.4, 14.4, 21.6, 28.8].map((value, index) =>
  createBuff(BuffType.AnemoPrcent, value, "S", "风元素伤害加成", index + 2)
);
export const S_80_DENDRO_28P = [7.2, 14.4, 14.4, 21.6, 28.8].map((value, index) =>
  createBuff(BuffType.DendroPrcent, value, "S", "草元素伤害加成", index + 2)
);
export const S_80_PHYSICAL_36P = [9, 18, 18, 27, 36].map((value, index) =>
  createBuff(BuffType.PhysicalPrcent, value, "S", "物理伤害加成", index + 2)
);

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
    { type: BuffType.GlobalPrcent, getValue: () => 15 },
    { type: BuffType.ShieldStrong, getValue: () => 15 },
    { type: BuffType.EnemyGeoResistance, getValue: () => -20 },
  ],
  enable: true,
  target: BuffTarget.All,
  source: "元素共鸣",
};
