<template>
  <div class="data-panel__title">
    {{ title }}
    <van-stepper
      v-model="value"
      :integer="stepperInteger"
      button-size="20"
      theme="round"
      :decimal-length="decimalLength"
      :max="stepperMax"
      :min="stepperMin"
      input-width="46px"
      @change="onChange"
    />
    <span class="holy-relic-tips">{{ tips }}</span>
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
