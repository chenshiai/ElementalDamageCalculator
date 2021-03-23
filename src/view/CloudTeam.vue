<template>
  <div class="tips">
    各种标签的配置，均受到作者本人的主观意识影响，并不代表绝对的公正客观，仅供参考。
  </div>
  <tab-title>标签化云配队</tab-title>
</template>

<script>
import { defineComponent } from "vue";
import TabTitle from "../component/TabTitle.vue";

export default defineComponent({
  name: "cloud-team",

  components: {
    [TabTitle.name]: TabTitle,
  },
});
</script>

<style>

</style>