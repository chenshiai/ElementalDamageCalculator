import { ProfilePhoto } from '../profilePhoto';
import { Magnification } from '../magnification';
import { ICalculationMode } from '@/types/interface/calculation-mode';

/** 防御力%buff计算公式 */
export const DefPercentCalculationMode: ICalculationMode[] = [
  {
    title: "通用加防%",
    children: [
      {
        title: "自定义加防%",
        fields: [
          {
            name: "number",
            label: "具体数值",
            type: "number",
            placeholder: "输入数值（支持一位小数）",
          },
        ],
        getResult: ({ number }) => number,
      }
    ],
  }
];

export const DefFixedCalculationMode: ICalculationMode[] = [
  {
    title: "直接加防",
    children: [
      {
        title: "自定义加防",
        fields: [
          {
            name: "number",
            label: "具体数值",
            type: "digit",
            placeholder: "输入数值",
          },
        ],
        getResult: ({ number }) => number,
      }
    ],
  },
  {
    title: "五郎",
    img: ProfilePhoto.Gorou,
    children: [
      {
        title: "犬坂吠吠方圆阵",
        fields: [
          {
            name: "lv",
            label: "天赋等级",
            type: "digit",
            placeholder: "输入五郎元素战技等级",
          },
        ],
        getResult: ({ lv}) => {
          lv = Math.min(13, lv);
          lv = Math.max(1, lv);
          return Magnification.Gorou[lv - 1];
        },
      }
    ],
  },
];