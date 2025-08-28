import { ref, computed } from "vue";
import { Magnification } from "@/constants/magnification.js";

export function useNiLuo() {
  const niLuo = ref(0);
  const niLuoGain = computed(() => {
    if (niLuo.value > 30000) {
      return Math.min(((niLuo.value - 30000) / 1000) * 9, 400);
    }
    return 0;
  });

  return {
    niLuoGain,
    niLuo,
  };
}

export function useBaiZhu() {
  const baiZhu = ref(0);
  const baiZhuBloomGain = computed(() => {
    return (Math.min(baiZhu.value, 50000) / 1000) * 2;
  });
  const baiZhuCatalyzeGain = computed(() => {
    return (Math.min(baiZhu.value, 50000) / 1000) * 0.8;
  });

  return {
    baiZhu,
    baiZhuCatalyzeGain,
    baiZhuBloomGain,
  };
}

export function useMizuki() {
  const mizukiEm = ref(0);
  const mizukiSkillLevel = ref(10);
  const mizukiGain = computed(() => {
    return mizukiEm.value * Magnification.Mizuki.sk[mizukiSkillLevel.value - 1];
  });
  return {
    mizukiEm,
    mizukiSkillLevel,
    mizukiGain,
  };
}

export function useYiFa() {
  const yehun = ref(0);
  const yehunGain = computed(() => {
    return Math.min(300, yehun.value * 1.5);
  });
  const yehunMoonGain = computed(() => {
    return Math.min(40, yehun.value * 0.2);
  });
  return {
    yehun,
    yehunGain,
    yehunMoonGain,
  };
}

export function useIneffa() {
  const ineffaAtk = ref(0);
  const ineffaGain = computed(() => {
    return Math.min(14, ineffaAtk.value * 0.007);
  });
  return {
    ineffaAtk,
    ineffaGain,
  };
}

export function useLauma() {
  const laumaEm = ref(0);
  const laumaLevel = ref(10);
  const laumaGain = computed(() => {
    return Math.round(laumaEm.value * Magnification.Lauma[Math.min(15, laumaLevel.value) - 1]);
  });
  return {
    laumaEm,
    laumaLevel,
    laumaGain,
  };
}
