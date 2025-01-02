<script setup lang="ts">
import { Checkbox, Slider, Stepper, Switch } from "vant";
import { IBuffBase } from "@/types/interface";
import { computed, ref, watch } from "vue";
interface IProps {
  buff: IBuffBase;
}
const { buff } = defineProps<IProps>();
const enable = defineModel<boolean>();
const stack = defineModel<number>("stack", { default: 0 });

const check = ref(Boolean(stack.value));
watch(
  () => check.value,
  (newValue) => {
    stack.value = Number(newValue);
  }
);

const stackText = computed(() => {
  if (buff.stackType === 'switch') {
    return `${buff.stackText}：${check.value ? '开' : '关'}`
  }
  return `${stack.value}/${buff.limit}`;
});
</script>

<template>
  <div class="buff-item">
    <Checkbox v-model="enable">
      <div class="buff-label-text">
        {{ buff.label }}
        <span v-if="buff.stackable">（{{ stackText }}）</span>
      </div>
    </Checkbox>
    <div class="buff-detail-check">
      <input type="checkbox" />
    </div>
    <div class="buff-description">
      <div class="buff-stack" v-if="buff.stackable">
        <span>{{ buff.stackText || "层数" }}：</span>
        <Slider v-if="buff.stackType === 'slider'" v-model="stack" :max="buff.limit" :min="0" />
        <Stepper
          v-if="!buff.stackType"
          v-model="stack"
          :max="buff.limit"
          :min="0"
          input-width="66px"
          button-size="24"
          theme="round"
          integer
        />
        <Switch v-if="buff.stackType === 'switch'" v-model="check" size="20"/>
      </div>
      <span v-html="buff.describe"></span>
    </div>
  </div>
</template>

<style scoped>
.buff-item {
  position: relative;
  border: 1px solid var(--border);
  padding: 8px;
  border-radius: 4px;
  margin-top: 4px;
}
.buff-detail-check {
  position: absolute;
  right: 8px;
  top: 6px;
}
.buff-label-text {
  color: var(--main-text);
}

.buff-description {
  display: none;
  color: #666;
  font-size: 14px;
}

.buff-detail-check:has(input:checked) + .buff-description {
  display: block;
}

input[type="checkbox"] {
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
  appearance: none; /* 移除默认外观 */
  outline: none; /* 移除焦点轮廓 */
  border: 1px solid var(--border);
  position: relative;
  border-radius: 4px;
}

input[type="checkbox"]::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 2px;
  background-color: var(--border);
}

input[type="checkbox"]::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(90deg);
  width: 60%;
  height: 2px;
  background-color: var(--border);
}

input[type="checkbox"]:checked {
  background-color: var(--bg);
}

/* 创建一个勾选标记 */
input[type="checkbox"]:checked::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 2px;
  background-color: var(--light-text);
}
input[type="checkbox"]:checked::after {
  display: none;
}
.buff-stack {
  display: flex;
  padding-right: 16px;
  height: 24px;
  line-height: 24px;
  align-items: center;
  margin: 8px 0;
}
.buff-stack span {
  margin-right: 12px;
  flex-shrink: 0;
}

.van-slider__button-wrapper .van-slider__button {
  box-shadow: 0 2px 2px var(--button-bg);
}
</style>
<style>
.buff-stack .van-stepper--round .van-stepper__minus {
  color: var(--button-bg);
  border-color: var(--button-bg);
}

.buff-stack .van-stepper--round .van-stepper__plus {
  border: none;
  color: #fff;
  background-color: var(--button-bg);
}
</style>
