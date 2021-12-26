<template>
  <div class="data-item">
    <span class="data-item__title">{{ title }}</span>
    <van-stepper
      v-model="value"
      :integer="stepperInteger"
      theme="round"
      button-size="20"
      :decimal-length="decimalLength"
      :max="stepperMax"
      :min="stepperMin"
      input-width="66px"
      @change="onChange"
    />
    <span class="holy-relic-tips">{{ tips }}</span>
    <div class="data-item-slot">
      <slot />
    </div>
  </div>
  <van-slider
    v-show="showSlider"
    v-model="value"
    :max="sliderMax"
    :min="sliderMin"
    :step="sliderStep"
    active-color="#645856"
    @change="onChange"
  />
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import { Slider, Stepper } from "vant";

export default defineComponent({
  name: "data-item",

  emits: ["update:modelValue"],

  props: {
    modelValue: Number | String,
    title: String,
    tips: String,

    stepperInteger: Boolean,
    stepperMin: Number | String,
    stepperMax: Number | String,
    decimalLength: Number | String,

    showSlider: Boolean,
    sliderMax: Number | String,
    sliderMin: Number | String,
    sliderStep: Number | String,
  },

  components: {
    [Slider.name]: Slider,
    [Stepper.name]: Stepper,
  },

  methods: {
    onChange(value) {
      this.$emit("update:modelValue", value);
    },
  },

  setup(props) {
    const value = ref(+props.modelValue);

    watch(
      () => props.modelValue,
      (newVal) => {
        value.value = newVal;
      }
    );

    return {
      value,
    };
  },
});
</script>

<style scoped>
.data-item {
  margin-bottom: 8px;
}
.data-item-slot {
  float: right;
}
.data-item__title {
  font-size: 18px;
  font-weight: 600;
  margin-right: 6px;
  line-height: 26px;
}
</style>