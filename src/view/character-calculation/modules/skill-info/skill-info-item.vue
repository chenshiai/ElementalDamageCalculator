<script setup lang="ts">
import { CollapseItem } from "vant";
import { ICalculatorValue, IRate, ISkillRate } from "@/types/interface";
import { getIncreaseHunt, getBaseDamage } from "@/utils/calculate/method-calculation";
import { computed, ref, watch } from "vue";
import { AttackType, ElementType } from "@/types/enum";

interface IProps {
  skill: ISkillRate[];
  calculatorValue: ICalculatorValue;
  level: number;
}
const { skill, calculatorValue, level } = defineProps<IProps>();
const valueRef = ref(calculatorValue);
watch(
  () => calculatorValue,
  (value) => {
    console.log(123123);
    
    valueRef.value = value;
  },
  {
    deep: true,
    immediate: true
  }
);

function calculator(calculatorValue, { rate, attackType, elementType }: ISkillRate, level: number = 1) {
  let BASE_DMG = getBaseDamage(valueRef.value, rate, level);
  let ADDITIONAL_DMG = getIncreaseHunt(valueRef.value, attackType, elementType);
  let RESULT_DMG = BASE_DMG + ADDITIONAL_DMG;

  return {
    common: Math.round(RESULT_DMG),
    crit: Math.round(RESULT_DMG),
    desire: Math.round(RESULT_DMG),
  };
}

const calculatedResults = computed(() => {
  return skill.map((item) => {
    const { common, crit, desire } = calculator(calculatorValue, item, level);
    return {
      label: item.label,
      common,
      crit,
      desire,
      value: calculatorValue,
    };
  });
});
</script>

<template>
  <div class="skill-info-detail">
    <span></span>
    <span>伤害</span>
    <span>暴击伤害</span>
    <span>期望伤害</span>
  </div>
  <div class="skill-info-detail" v-for="item of calculatedResults" :key="item.label">
    <span>{{ item.label }}</span>
    <span>{{ item.common }}</span>
    <span>{{ item.crit }}</span>
    <span>{{ item.desire }}</span>
  </div>
</template>

<style scoped>
.skill-info-detail {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
}
</style>
