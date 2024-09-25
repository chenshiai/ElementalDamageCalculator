<script setup lang="ts">
import { Checkbox, Icon, Slider } from "vant";
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
    {{ buff.describe }}
    <div class="buff-stack" v-if="buff.stackable">
      <span>层数：</span><Slider v-model="stack" :max="buff.limit" :min="0" />
    </div>
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
}
.buff-stack span {
  margin-right: 12px;
  flex-shrink: 0;
}
</style>
