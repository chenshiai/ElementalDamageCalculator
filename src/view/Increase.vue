<template>
  <div>
    <van-slider v-model="data.value" @change="onChange" />
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue';
import { Slider } from 'vant';

export default defineComponent({
  name: "increase",

  components: {
    [Slider.name]: Slider,
  },

  setup() {
    const data = reactive({
      value: 100,
    });
    return { data };
  }
})
</script>

<style></style>