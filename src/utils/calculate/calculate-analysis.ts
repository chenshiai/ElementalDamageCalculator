export type CalculateAnalysisType = {
  RESULT_DMG: number;
  CRITICAL_DMG: number;
  EVA_DMG: number;
  REACTION_DMG: number;
  MAGNIFICATION_DMG: number;
  BONUS_DMG: number;
  ADDITIONAL_DMG: number;
  BASE_DMG: number;
}
const CalculateAnalysis = (compositionAnalysis: CalculateAnalysisType) => {
  function calculateHeight(target) {
    return (target / (compositionAnalysis.RESULT_DMG + compositionAnalysis.CRITICAL_DMG)) * 520 + "px";
  }
  return [
    {
      title: "暴伤提升值",
      number: Math.round(compositionAnalysis.CRITICAL_DMG),
      style: {
        height: calculateHeight(compositionAnalysis.CRITICAL_DMG),
        backgroundColor: "#ffb61e",
      },
    },
    {
      title: "精通提升值",
      number: Math.round(compositionAnalysis.EVA_DMG),
      style: {
        height: calculateHeight(compositionAnalysis.EVA_DMG),
        backgroundColor: "#44cef6",
      },
    },
    {
      title: "增幅提升值",
      number: Math.round(compositionAnalysis.REACTION_DMG),
      style: {
        height: calculateHeight(compositionAnalysis.REACTION_DMG),
        backgroundColor: "#dc3023",
      },
    },
    {
      title: "增伤提升值",
      number: Math.round(compositionAnalysis.MAGNIFICATION_DMG),
      style: {
        height: calculateHeight(compositionAnalysis.MAGNIFICATION_DMG),
        backgroundColor: "#9966cc",
      },
    },
    {
      title: "激化提高值",
      number: Math.round(compositionAnalysis.BONUS_DMG),
      style: {
        height: calculateHeight(compositionAnalysis.BONUS_DMG),
        backgroundColor: "#00e09e",
      },
    },
    {
      title: "伤害提高值",
      number: Math.round(compositionAnalysis.ADDITIONAL_DMG),
      style: {
        height: calculateHeight(compositionAnalysis.ADDITIONAL_DMG),
        backgroundColor: "#eedeb0",
      },
    },
    {
      title: "基础伤害值",
      number: Math.round(compositionAnalysis.BASE_DMG),
      style: {
        height: calculateHeight(compositionAnalysis.BASE_DMG),
        backgroundColor: "#bacac6",
      },
    },
  ].filter((item) => item.number > 0);
};

export default CalculateAnalysis;
