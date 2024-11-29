<script setup lang="ts">
import { computed, ref } from "vue";
import { ICalculatorValue, ISkillRate } from "@/types/interface";
import { calculateDamage } from "@/utils/calculate/method-calculation";
import AtkTypeSelector from "@/component/AtkTypeSelector.vue";
import { getColorByElement } from "@/utils/get-color";
import { Icon } from "vant";

interface IProps {
  skill: ISkillRate[];
  calculatorValue: ICalculatorValue;
  level?: number;
  name: string;
}
const { skill, calculatorValue, level, name } = defineProps<IProps>();
const atkType = ref("none");

const calculatedResults = computed(() => {
  return skill.map((item: ISkillRate) => {
    if (!item) {
      return {
        label: "-",
        common: "-",
        crit: "-",
        desire: "-",
        elementType: "",
      };
    }
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
    <div class="skill-info-detail">
      <span><Icon name="circle" />{{ name }}</span>
      <div class="skill-info-item">
        <span></span>
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
    <div class="skill-info-empty">无伤害。</div>
  </template>
</template>

<style scoped>
.skill-info-detail {
  font-size: 14px;
  padding: 4px 8px;
  margin-bottom: 16px;
  border-radius: 0 0 4px 4px;
  color: #fff;
  text-shadow: var(--stroke-4) 0 0 2px;
  background-color: var(--main-text);
}
.skill-info-item {
  display: grid;
  grid-template-columns: 4fr 2fr 2fr 2fr;
  text-align: left;
}
.skill-info-item-label {
  text-align: center;
  color: #fff;
}
.skill-info-empty {
  text-align: center;
  margin-top: 12px;
}
</style>
