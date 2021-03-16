<template>
  <div class="detail">
    <slot />
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "detail-block",

  props: {
    detail: String,
  }
});
</script>

<style>
.detail {
  font-size: 14px;
  padding: 4px 8px;
  margin-bottom: 16px;
  border-radius: 6px;
  color: #fff;
  margin-top: 12px;
  background-color: #645856;
}
</style>