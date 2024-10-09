<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { ICalculatorValue, ISkillRate } from "@/types/interface";
import { calculateDamage } from "@/utils/calculate/method-calculation";
import AtkTypeSelector from "@/component/AtkTypeSelector.vue";
import { getColorByElement } from "@/utils/getBackGroundClassByRarity";

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

function calculator({ rate, attackType, elementType, special }: ISkillRate, level: number = 1) {
  let {
    RESULT_DMG,
    CRITICAL_DMG,
    DEISTE_DMG,
    elementType: newElementType,
  } = calculateDamage({
    calculatorValue: valueRef.value,
    attackType,
    elementType,
    rate,
    level,
    atkType: atkType.value,
    special,
  });

  return {
    common: Math.round(RESULT_DMG),
    crit: Math.round(RESULT_DMG + CRITICAL_DMG),
    desire: Math.round(RESULT_DMG + DEISTE_DMG),
    newElementType,
  };
}

const calculatedResults = computed(() => {
  return skill.map((item: ISkillRate) => {
    const { common, crit, desire, newElementType } = calculator(item, level);
    return {
      label: item.label,
      common,
      crit,
      desire,
      elementType: newElementType,
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
    <div
      :class="['skill-info-item', getColorByElement(item.elementType)]"
      v-for="item of calculatedResults"
      :key="item.label"
    >
      <span class="skill-info-item-label">{{ item.label }}</span>
      <span>{{ item.common }}</span>
      <span>{{ item.crit }}</span>
      <span>{{ item.desire }}</span>
    </div>
  </template>
  <template v-else>
    <div class="skill-info-empty">该技能无法造成伤害。</div>
  </template>
</template>

<style scoped>
.skill-info-item {
  display: grid;
  grid-template-columns: 3fr 2fr 2fr 2fr;
  text-align: center;
}
.skill-info-item-label {
  text-align: right;
  color: var(--main-text);
}
.skill-info-empty {
  text-align: center;
}
</style>
