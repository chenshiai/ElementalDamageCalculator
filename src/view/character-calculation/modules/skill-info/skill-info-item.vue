<script setup lang="ts">
import { computed, ref } from "vue";
import { ICalculatorValue, ISkillRate } from "@/types/interface";
import { calculateDamage } from "@/utils/calculate/method-calculation";
import AtkTypeSelector from "@/component/AtkTypeSelector.vue";
import { getColorByElement } from "@/utils/getBackGroundClassByRarity";
import { Icon } from "vant";

interface IProps {
  skill: ISkillRate[];
  calculatorValue: ICalculatorValue;
  level?: number;
}
const { skill, calculatorValue, level } = defineProps<IProps>();
const atkType = ref("none");

const calculatedResults = computed(() => {
  return skill.map((item: ISkillRate) => {
    let { RESULT_DMG, CRITICAL_DMG, DEISTE_DMG, elementType } = calculateDamage({
      calculatorValue,
      attackType: item.attackType,
      elementType: item.elementType,
      rate: item.rate,
      level: level ?? 1,
      atkType: atkType.value,
      special: item.special,
    });
    return {
      label: item.label,
      common: Math.round(RESULT_DMG),
      crit: Math.round(RESULT_DMG + CRITICAL_DMG),
      desire: Math.round(RESULT_DMG + DEISTE_DMG),
      elementType,
    };
  });
});
</script>

<template>
  <template v-if="skill.length > 0">
    <div class="detail">
      <div class="skill-info-item">
        <span><Icon name="circle" /></span>
        <span>暴击伤害</span>
        <span>期望伤害</span>
        <span>一般伤害</span>
      </div>
      <div
        :class="['skill-info-item', getColorByElement(item.elementType)]"
        v-for="item of calculatedResults"
        :key="item.label"
      >
        <span class="skill-info-item-label">{{ item.label }}</span>
        <span>{{ item.crit }}</span>
        <span>{{ item.desire }}</span>
        <span>{{ item.common }}</span>
      </div>
    </div>
    <AtkTypeSelector v-model="atkType" size="small" />
  </template>
  <template v-else>
    <div class="skill-info-empty">该技能无法造成伤害。</div>
  </template>
</template>

<style scoped>
.skill-info-item {
  display: grid;
  grid-template-columns: 4fr 2fr 2fr 2fr;
  text-align: left;
  text-shadow: var(--stroke-4) 0 0 2px;
}
.skill-info-item-label {
  text-align: center;
  color:#fff;
}
.skill-info-empty {
  text-align: center;
}
</style>
