import { ProfilePhoto, ArtifactIcon } from '../profilePhoto';
import { Magnification } from '../magnification';

/** 增伤区间计算公式 */
export const EnhancedDemageCalculationMode = [
  {
    title: "通用增伤",
    children: [
      {
        title: "自定义增伤",
        fields: [
          {
            name: "number",
            type: "number",
            label: "具体数值",
            placeholder: "输入数值",
          },
        ],
        getResult: ({ number }) => number,
      }
    ],
  },
  {
    title: "枫原万叶",
    img: ProfilePhoto.KaedeharaKazuha,
    children: [
      {
        title: "风物之诗咏",
        fields: [
          {
            name: "atromancy",
            type: "number",
            label: "元素精通",
            required: true,
            placeholder: "输入枫原万叶的元素精通",
          },
        ],
        getResult: ({ atromancy }) => atromancy * 0.04,
      }
    ],
  },
  {
    title: "纳西达",
    img: ProfilePhoto.Nahida,
    children: [
      {
        title: "惠明缘觉智论",
        fields: [
          {
            name: "energy",
            type: "number",
            label: "元素精通",
            required: true,
            placeholder: "输入纳西达的元素精通",
          },
        ],
        getResult: ({ energy }) => Math.min(energy - 200, 800) * 0.1,
      }
    ],
  },
  {
    title: "雷电将军",
    img: ProfilePhoto.Beelzebul,
    children: [
      {
        title: "雷罚恶曜之眼",
        fields: [
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
      }
    ],
  },
  {
    title: "绝缘之旗印",
    img: ArtifactIcon.EmblemOfSeveredFate,
    children: [
      {
        title: "元素爆发增伤",
        fields: [
          {
            name: "charge",
            label: "元素充能",
            type: "number",
            required: true,
            placeholder: "输入角色的元素充能",
          },
        ],
        getResult: ({ charge }) => Math.min(charge * 0.25, 75),
      }
    ],
  },
  {
    title: "提纳里",
    img: ProfilePhoto.Tighnari,
    children: [
      {
        title: "诸叶变通",
        fields: [
          {
            name: "energy",
            type: "number",
            required: true,
            label: "元素精通",
            placeholder: "输入提纳里的元素精通",
          },
        ],
        getResult: ({ energy }) => Math.min(energy, 1000) * 0.06,
      }
    ],
  },
  {
    title: "坎蒂丝",
    img: ProfilePhoto.Candace,
    children: [
      {
        title: "漫沙陨穹",
        fields: [
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
      }
    ],
  },
  {
    title: "八重神子",
    img: ProfilePhoto.YaeMiko,
    children: [
      {
        title: "启蛰之祝词",
        fields: [
          {
            name: "energy",
            type: "number",
            label: "元素精通",
            required: true,
            placeholder: "输入八重神子的元素精通",
          },
        ],
        getResult: ({ energy }) => energy * 0.15,
      }
    ],
    
  },
  {
    title: "旅行者·草",
    img: ProfilePhoto.sora,
    children: [
      {
        title: "草缘剑",
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
        title: "偃草若化",
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
    ],
  },
  {
    title: "稻妻限定四星武器",
    children: [
      {
        title: "驭浪的海祇民",
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
      }
    ],
  },
  {
    title: "枫原万叶·六命",
    img: ProfilePhoto.KaedeharaKazuha,
    children: [
      {
        title: "血赤叶红",
        fields: [
          {
            name: "energy",
            label: "元素精通",
            type: "number",
            required: true,
            placeholder: "输入六命枫原万叶的元素精通",
          },
        ],
        getResult: ({ energy }) => energy * 0.2,
      }
    ],
  },
];
