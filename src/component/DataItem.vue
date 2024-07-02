<template>
  <div class="data-item">
    <span class="data-item__title">{{ title }}</span>
    <Stepper
      v-model="modelValue"
      :integer="stepperInteger"
      theme="round"
      button-size="20"
      :decimal-length="decimalLength"
      :max="stepperMax"
      :min="stepperMin"
      input-width="66px"
      @change="onChange"
    />
    <span class="holy-relic-tips">{{ tips }}</span>
    <div class="data-item-slot">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { Stepper } from "vant";

const modelValue = defineModel();
const props = defineProps({
  title: String,
  tips: String,
  stepperInteger: Boolean,
  stepperMin: Number || String,
  stepperMax: Number || String,
  decimalLength: Number || String,
});
function onChange(value) {
  modelValue.value = value;
}
</script>

<style scoped>
.data-item {
  margin-bottom: 8px;
}
.data-item-slot {
  float: right;
}
.data-item__title {
  font-size: 18px;
  font-weight: 600;
  margin-right: 6px;
  line-height: 26px;
}
</style>