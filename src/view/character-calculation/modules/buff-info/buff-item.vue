<script setup lang="ts">
import { Checkbox, Icon, Slider, Stepper } from "vant";
import { IBuffBase } from "@/types/interface";
import { computed } from "vue";
interface IProps {
  showDelete?: boolean;
  buff: IBuffBase;
}
const { showDelete, buff } = defineProps<IProps>();
const enable = defineModel<boolean>();
const stack = defineModel<number>("stack", { default: 0 });

const stackText = computed(() => {
  return `${stack.value}/${buff.limit}`;
});
</script>

<template>
  <Checkbox class="buff-label" v-model="enable" checked-color="#766461">
    <div class="buff-label-text">
      {{ buff.label }}
      <span v-if="buff.stackable">（{{ stackText }}）</span>
    </div>
  </Checkbox>
  <div class="buff-detail-check">
    <Icon v-if="showDelete" class="memo-close" name="delete-o" />
    <input type="checkbox" />
  </div>
  <div class="buff-description">
    <div class="buff-stack" v-if="buff.stackable">
      <span>{{ buff.stackText || "层数" }}：</span>
      <Slider v-if="buff.stackType === 'slider'" v-model="stack" :max="buff.limit" :min="0" />
      <Stepper
        v-else
        v-model="stack"
        :max="buff.limit"
        :min="0"
        input-width="66px"
        button-size="24"
        theme="round"
        integer
      />
    </div>
    {{ buff.describe }}
  </div>
</template>

<style scoped>
.buff-detail-check {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 12px;
  height: 38px;
  display: flex;
  align-items: center;
}
.buff-label {
  display: flex;
  width: 100%;
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
  width: 20px;
  height: 20px;
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
  background-color: var(--bg);
}

input[type="checkbox"]::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(90deg);
  width: 60%;
  height: 2px;
  background-color: var(--bg);
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
.memo-close {
  font-size: 20px;
  color: red;
  display: none;
  margin-right: 10px;
}
.buff-detail-check:has(input:checked) .memo-close {
  display: block;
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
