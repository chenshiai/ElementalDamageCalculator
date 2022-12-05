import { ProfilePhoto, ArtifactIcon } from '../profilePhoto';
import { Magnification } from '../magnification';

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
    title: "枫原万叶",
    img: ProfilePhoto.KaedeharaKazuha,
    fields: [
      {
        name: "tips",
        label: "",
        placeholder: "风物之诗咏：全队元素增伤",
        type: "number",
        disabled: true,
      },
      {
        name: "atromancy",
        type: "number",
        label: "元素精通",
        required: true,
        placeholder: "输入枫原万叶的元素精通",
      },
    ],
    getResult: ({ atromancy }) => atromancy * 0.04,
  },
  {
    title: "纳西达",
    img: ProfilePhoto.Nahida,
    fields: [
      {
        name: "tips",
        label: "",
        placeholder: "惠明缘觉智论：自身元素战技增伤",
        type: "number",
        disabled: true,
      },
      {
        name: "energy",
        type: "number",
        label: "元素精通",
        required: true,
        placeholder: "输入纳西达的元素精通",
      },
    ],
    getResult: ({ energy }) => Math.min(energy - 200, 800) * 0.1,
  },
  {
    title: "雷电将军",
    img: ProfilePhoto.Beelzebul,
    fields: [
      {
        name: "tips",
        label: "",
        placeholder: "雷罚恶曜之眼：全队元素爆发增伤",
        type: "number",
        disabled: true,
      },
      {
        name: "energy",
        type: "number",
        label: "元素能量",
        required: true,
        placeholder: "输入角色元素爆发的元素能量",
      },
      {
        name: "lv",
        label: "天赋等级",
        type: "number",
        required: true,
        placeholder: "雷电将军元素战技的等级",
      },
    ],
    getResult: ({ energy, lv }) => {
      lv = Math.max(0, lv);
      lv = Math.min(9, lv);
      return energy * Magnification.Beelzebul[lv -1];
    },
  },
  {
    title: "绝缘之旗印",
    img: ArtifactIcon.EmblemOfSeveredFate,
    fields: [
      {
        name: "tips",
        label: "",
        placeholder: "元素爆发增伤",
        type: "number",
        disabled: true,
      },
      {
        name: "charge",
        label: "元素充能",
        type: "number",
        required: true,
        placeholder: "输入角色的元素充能",
      },
    ],
    getResult: ({ charge }) => Math.min(charge * 0.25, 75),
  },
  {
    title: "提纳里",
    img: ProfilePhoto.Tighnari,
    fields: [
      {
        name: "tips",
        label: "",
        placeholder: "诸叶变通：自身重击、元素爆发增伤",
        type: "number",
        disabled: true,
      },
      {
        name: "energy",
        type: "number",
        required: true,
        label: "元素精通",
        placeholder: "输入提纳里的元素精通",
      },
    ],
    getResult: ({ energy }) => Math.min(energy, 1000) * 0.06,
  },
  {
    title: "坎蒂丝",
    img: ProfilePhoto.Candace,
    fields: [
      {
        name: "tips",
        label: "",
        placeholder: "漫沙陨穹：全队普攻增伤",
        type: "number",
        disabled: true,
      },
      {
        name: "hp",
        type: "number",
        required: true,
        label: "生命值",
        placeholder: "输入坎蒂丝的生命值",
      },
    ],
    getResult: ({ hp }) => {
      return 20 + Math.floor(hp / 1000) * 0.5;
    },
  },
  {
    title: "八重神子",
    img: ProfilePhoto.YaeMiko,
    fields: [
      {
        name: "tips",
        label: "",
        placeholder: "启蛰之祝词：自身元素战技增伤",
        type: "number",
        disabled: true,
      },
      {
        name: "energy",
        type: "number",
        label: "元素精通",
        required: true,
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
        required: true,
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
        required: true,
        placeholder: "输入草属性旅行者的元素精通",
      },
    ],
    getResult: ({ energy }) => energy * 0.1,
  },
  {
    title: "武器·驭浪的海祇民",
    fields: [
      {
        name: "energy",
        type: "number",
        label: "元素能量",
        required: true,
        placeholder: "队伍所有角色的元素能量上限的总和",
      },
      {
        name: "units",
        label: "每点加成%",
        type: "number",
        required: true,
        placeholder: "每点元素能量提升的数值，注意上限",
      },
    ],
    getResult: ({ energy, units }) => energy * units,
  },
  {
    title: "枫原万叶",
    img: ProfilePhoto.KaedeharaKazuha,
    fields: [
      {
        name: "tips",
        label: "",
        placeholder: "血赤叶红：自身六命增伤",
        type: "number",
        disabled: true,
      },
      {
        name: "energy",
        label: "元素精通",
        type: "number",
        required: true,
        placeholder: "输入六命枫原万叶的元素精通",
      },
    ],
    getResult: ({ energy }) => energy * 0.2,
  },
];
