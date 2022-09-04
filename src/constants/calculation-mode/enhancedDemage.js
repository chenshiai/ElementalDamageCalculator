import { ProfilePhoto, ArtifactIcon } from '../profilePhoto';

/** 增伤区间计算公式 */
export const EnhancedDemageCalculationMode = [
  {
    title: "直接增伤",
    fields: [
      {
        name: "number",
        type: "number",
        label: "具体数值",
        placeholder: "输入数值",
      },
    ],
    getResult: ({ number }) => number,
  },
  {
    title: "风物之诗咏",
    img: ProfilePhoto.KaedeharaKazuha,
    fields: [
      {
        name: "atromancy",
        type: "number",
        label: "元素精通",
        placeholder: "输入枫原万叶的元素精通",
      },
    ],
    getResult: ({ atromancy }) => atromancy * 0.04,
  },
  {
    title: "雷罚恶曜之眼",
    img: ProfilePhoto.Beelzebul,
    fields: [
      {
        name: "energy",
        type: "number",
        label: "元素能量",
        placeholder: "输入角色元素爆发的元素能量",
      },
      {
        name: "units",
        label: "每点加成%",
        type: "number",
        placeholder: "雷电将军元素战技的每点元素能量的数值",
      },
    ],
    getResult: ({ energy, units }) => energy * units,
  },
  {
    title: "绝缘之旗印",
    img: ArtifactIcon.EmblemOfSeveredFate,
    fields: [
      {
        name: "charge",
        label: "元素充能",
        type: "number",
        placeholder: "输入角色的元素充能",
      },
    ],
    getResult: ({ charge }) => Math.min(charge * 0.25, 75),
  },
  {
    title: "诸叶变通",
    img: ProfilePhoto.Tighnari,
    fields: [
      {
        name: "energy",
        type: "number",
        label: "元素精通",
        placeholder: "输入提纳里的元素精通",
      },
    ],
    getResult: ({ energy }) => Math.min(energy, 1000) * 0.06,
  },
  {
    title: "启蛰之祝词",
    img: ProfilePhoto.YaeMiko,
    fields: [
      {
        name: "energy",
        type: "number",
        label: "元素精通",
        placeholder: "输入八重神子的元素精通",
      },
    ],
    getResult: ({ energy }) => energy * 0.15,
  },
  {
    title: "草主角·草缘剑",
    img: ProfilePhoto.sora,
    fields: [
      {
        name: "energy",
        type: "number",
        label: "元素精通",
        placeholder: "输入草属性旅行者的元素精通",
      },
    ],
    getResult: ({ energy }) => energy * 0.15,
  },
  {
    title: "草主角·偃草若化",
    img: ProfilePhoto.sora,
    fields: [
      {
        name: "energy",
        type: "number",
        label: "元素精通",
        placeholder: "输入草属性旅行者的元素精通",
      },
    ],
    getResult: ({ energy }) => energy * 0.1,
  },
  {
    title: "驭浪的海祇民",
    fields: [
      {
        name: "energy",
        type: "number",
        label: "元素能量",
        placeholder: "队伍所有角色的元素能量上限的总和",
      },
      {
        name: "units",
        label: "每点加成%",
        type: "number",
        placeholder: "每点元素能量提升的数值，注意上限",
      },
    ],
    getResult: ({ energy, units }) => energy * units,
  },
  {
    title: "血赤叶红",
    img: ProfilePhoto.KaedeharaKazuha,
    fields: [
      {
        name: "energy",
        label: "元素精通",
        type: "number",
        placeholder: "输入六命枫原万叶的元素精通",
      },
    ],
    getResult: ({ energy }) => energy * 0.2,
  },
];
