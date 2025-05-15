<template>
  <div class="popover" @mouseover="showPopover" @mouseleave="hidePopover">
    <!-- 常驻显示的按钮插槽 -->
    <slot name="trigger"></slot>
    <div v-show="isVisible" :class="['popover-content', position]">
      <!-- 展示的内容插槽 -->
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps<{
  position: "top" | "bottom" | "left" | "right" | "top-left" | "top-right" | "bottom-left" | "bottom-right";
}>();

const isVisible = ref(false);

const showPopover = () => {
  isVisible.value = true;
};

const hidePopover = () => {
  isVisible.value = false;
};
</script>

<style scoped>
.popover {
  position: relative;
  display: inline-block;
}

.popover-content {
  position: absolute;
  background-color: white;
  border-radius: 4px;
  z-index: 1000;
  /* 移除边框，调整阴影效果 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  max-width: 80vw;
}

.popover-content.top {
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
}

.popover-content.bottom {
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
}

.popover-content.left {
  right: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
}

.popover-content.right {
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
}

.popover-content.top-left {
  bottom: calc(100% + 10px);
  left: 0;
}

.popover-content.top-right {
  bottom: calc(100% + 10px);
  right: 0;
}

.popover-content.bottom-left {
  top: calc(100% + 10px);
  left: 0;
}

.popover-content.bottom-right {
  top: calc(100% + 10px);
}

.popover-content.top::after {
  content: "";
  position: absolute;
  bottom: -9px;
  left: 50%;
  transform: translateX(-50%);
  border-width: 9px 9px 0 9px;
  border-style: solid;
  border-color: white transparent transparent transparent;
  z-index: 1001;
}

.popover-content.bottom::after {
  content: "";
  position: absolute;
  top: -9px;
  left: 50%;
  transform: translateX(-50%);
  border-width: 0 9px 9px 9px;
  border-style: solid;
  border-color: transparent transparent white transparent;
  z-index: 1001;
}

.popover-content.left::after {
  content: "";
  position: absolute;
  right: -9px;
  top: 50%;
  transform: translateY(-50%);
  border-width: 9px 0 9px 9px;
  border-style: solid;
  border-color: transparent transparent transparent white;
  z-index: 1001;
}

.popover-content.right::after {
  content: "";
  position: absolute;
  left: -9px;
  top: 50%;
  transform: translateY(-50%);
  border-width: 9px 9px 9px 0;
  border-style: solid;
  border-color: transparent white transparent transparent;
  z-index: 1001;
}

.popover-content.top-left::after {
  content: "";
  position: absolute;
  bottom: -9px;
  left: 20px;
  border-width: 9px 9px 0 9px;
  border-style: solid;
  border-color: white transparent transparent transparent;
  z-index: 1001;
}

.popover-content.top-right::after {
  content: "";
  position: absolute;
  bottom: -9px;
  right: 4px;
  border-width: 9px 9px 0 9px;
  border-style: solid;
  border-color: white transparent transparent transparent;
  z-index: 1001;
}
.popover-content.bottom-left::after {
  content: "";
  position: absolute;
  top: -9px;
  left: 20px;
  border-width: 0 9px 9px 9px;
  border-style: solid;
  border-color: transparent transparent white transparent;
  z-index: 1001;
}

.popover-content.bottom-right::after {
  content: "";
  position: absolute;
  top: -9px;
  right: 20px;
  border-width: 0 9px 9px 9px;
  border-style: solid;
  border-color: transparent transparent white transparent;
  z-index: 1001;
}
</style>
