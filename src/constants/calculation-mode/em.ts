import { ICalculationMode } from '@/types/interface/calculation-mode';

// @ts-ignore
const ProfilePhoto = __global__.ProfilePhoto;
/** 元素精通buff计算公式 */
export const EmFixedCalculationMode: ICalculationMode[] = [
  {
    title: "通用加精通",
    children: [
      {
        title: "自定义加精通",
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
    title: "砂糖",
    img: ProfilePhoto.Sucrose,
    children: [
      {
        title: "小小的彗风",
        fields: [
          {
            name: "em",
            label: "元素精通",
            type: "digit",
            placeholder: "输入砂糖的元素精通",
          },
        ],
        getResult: ({ em }) => {
          return Math.round(em * 0.2);
        },
      }
    ],
  },
  {
    title: "纳西达",
    img: ProfilePhoto.Nahida,
    children: [
      {
        title: "净善摄受明论",
        fields: [
          {
            name: "em",
            label: "元素精通",
            type: "digit",
            placeholder: "输入队伍中最高的元素精通",
          },
        ],
        getResult: ({ em }) => {
          return Math.min(Math.round(em * 0.25), 250);
        },
      }
    ],
  },
];