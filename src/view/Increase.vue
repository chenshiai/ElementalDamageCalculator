<template>
  <tab-title>伤害期望</tab-title>
</template>

<script>
import { defineComponent, reactive } from 'vue';
import TabTitle from "./TabTitle.vue";

export default defineComponent({
  name: "increase",

  components: {
    [TabTitle.name]: TabTitle,
  },

  setup() {
    const data = reactive({
      value: 100,
    });

    const onChange = (value) => {
      console.log(value);
    };
    return { data, onChange };
  }
})
</script>

<style></style>