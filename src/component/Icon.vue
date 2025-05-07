<template>
  <img
    :style="{
      width: autoSize ? '100%' : w || size,
      height: autoSize ? '100%' : h || size,
    }"
    @click="onClick"
    :src="updatedIcon"
    alt="{alt}"
  />
</template>
<script setup lang="ts">
import { computed } from "vue";

type IconComProps = {
  // 图标 react 的文件，直接传递
  icon: string;
  size?: number | string;
  w?: number | string;
  h?: number | string;
  alt?: string;
  fill?: string;
  stroke?: string;
  autoSize?: boolean;
  onClick?: (e: any) => void;
};

const FILL_REGEX = /fill=(['"])[^'"]*\1/g;
const STROKE_REGEX = /stroke=(['"])[^'"]*\1/g;
const props = defineProps<IconComProps>();

const updatedIcon = computed(() => {
  let str = props.icon
  if (str.startsWith("data:image/svg")) {
    if (str.includes("fill") && props.fill) {
      return str.replace(FILL_REGEX, `fill='${encodeURIComponent(props.fill)}'`);
    }
    if (str.includes("stroke") && props.stroke) {
      return str.replace(STROKE_REGEX, `stroke='${encodeURIComponent(props.stroke)}'`);
    }
  }
  console.log(props);
});
</script>
