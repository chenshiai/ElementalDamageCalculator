/** HP%buff计算公式 */
export const HpPercentCalculationMode = [
  {
    title: "通用加生命%",
    children: [
      {
        title: "自定义加生命",
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