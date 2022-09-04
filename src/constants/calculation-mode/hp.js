/** HP%buff计算公式 */
export const HpPercentCalculationMode = [
  {
    title: "直接加血%",
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
];