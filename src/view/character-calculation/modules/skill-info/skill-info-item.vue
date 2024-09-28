<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { ICalculatorValue, IRate, ISkillRate } from "@/types/interface";
import { calculateDamage } from "@/utils/calculate/method-calculation";
import AtkTypeSelector from "@/component/AtkTypeSelector.vue";

interface IProps {
  skill: ISkillRate[];
  calculatorValue: ICalculatorValue;
  level?: number;
}
const { skill, calculatorValue, level } = defineProps<IProps>();
const valueRef = ref(calculatorValue);
const atkType = ref("none");
watch(
  () => calculatorValue,
  (value) => {
    valueRef.value = value;
  },
  {
    deep: true,
    immediate: true,
  }
);

function calculator({ rate, attackType, elementType }: ISkillRate, level: number = 1) {
  let { RESULT_DMG, CRITICAL_DMG, DEISTE_DMG } = calculateDamage({
    calculatorValue: valueRef.value,
    attackType,
    elementType,
    rate,
    level,
    atkType: atkType.value,
  });

  return {
    common: Math.round(RESULT_DMG),
    crit: Math.round(RESULT_DMG + CRITICAL_DMG),
    desire: Math.round(RESULT_DMG + DEISTE_DMG),
  };
}

const calculatedResults = computed(() => {
  return skill.map((item: ISkillRate) => {
    const { common, crit, desire } = calculator(item, level);
    return {
      label: item.label,
      common,
      crit,
      desire,
    };
  });
});
</script>

<template>
  <template v-if="skill.length > 0">
    <AtkTypeSelector v-model="atkType" size="small" />
    <div class="skill-info-item">
      <span></span>
      <span>伤害</span>
      <span>暴击伤害</span>
      <span>期望伤害</span>
    </div>
    <div class="skill-info-item" v-for="item of calculatedResults" :key="item.label">
      <span class="skill-info-item-label">{{ item.label }}</span>
      <span>{{ item.common }}</span>
      <span>{{ item.crit }}</span>
      <span>{{ item.desire }}</span>
    </div>
  </template>
  <template v-else>该技能无法造成伤害。</template>
</template>

<style scoped>
.skill-info-item {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  text-align: center;
}
.skill-info-item-label {
  text-align: right;
}
</style>
