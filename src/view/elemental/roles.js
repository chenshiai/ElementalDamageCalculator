import { ref, computed } from "vue";
import { Magnification } from "@/constants/magnification.js";

export function useNiLuo() {
  const niLuo = ref(0);
  const showNiluoPopover = ref(false);
  const niLuoGain = computed(() =>　{
    if (niLuo.value > 30000) {
      return Math.min((niLuo.value - 30000) / 1000 * 9, 400);
    }
    return 0;
  });

  return {
    niLuoGain,
    niLuo,
    showNiluoPopover,
  }
}

export function useBaiZhu() {
  const baiZhu = ref(0);
  const showBaizhuPopover = ref(false);
  const baiZhuBloomGain = computed(() =>　{
    return Math.min(baiZhu.value, 50000) / 1000 * 2;
  });
  const baiZhuCatalyzeGain = computed(() =>　{
    return Math.min(baiZhu.value, 50000) / 1000 * 0.8;
  });

  return {
    baiZhu,
    baiZhuCatalyzeGain,
    baiZhuBloomGain,
    showBaizhuPopover,
  }
}

export function useMizuki() {
  const mizukiEm = ref(0);
  const mizukiSkillLevel = ref(10);
  const showMizukiPopover = ref(false);
  const mizukiGain = computed(() => {
    return mizukiEm.value * Magnification.Mizuki.sk[mizukiSkillLevel.value - 1];
  })
  return {
    mizukiEm,
    mizukiSkillLevel,
    mizukiGain,
    showMizukiPopover
  }
}

export function useYiFa() {
  const yehun = ref(0);
  const showIfaPopover = ref(false);
  const yehunGain = computed(() => {
    return Math.min(300, yehun.value * 1.5);
  })
  return {
    yehun,
    yehunGain,
    showIfaPopover
  }
}