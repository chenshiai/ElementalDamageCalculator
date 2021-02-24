<template>
  <div></div>
  <!-- <van-slider v-model="data.value" @change="onChange" /> -->
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

    const onChange = (value) => {
      console.log(value);
    };
    return { data, onChange };
  }
})
</script>

<style></style>