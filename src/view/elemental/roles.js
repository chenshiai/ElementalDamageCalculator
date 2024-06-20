import { ref, computed } from "vue";

export function useNiLuo() {
  const niLuo = ref(0);
  const niLuoGain = computed(() =>　{
    if (niLuo.value > 30000) {
      return Math.min((niLuo.value - 30000) / 1000 * 9, 400);
    }
    return 0;
  });

  return {
    niLuoGain,
    niLuo
  }
}

export function useBaiZhu() {
  const baiZhu = ref(0);
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
  }
}

