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
      input-width="40px"
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
  <div v-show="notes" class="notes-button" @click="isExpand = !isExpand">
    {{ title }}标签组
    <van-icon size="12" :name="isExpand ? 'arrow-up' : 'arrow-down'" />
  </div>
  <div v-show="notes && isExpand" class="data-notes">
    <div class="add-note-button">
      <van-icon @click="addNewNote" name="plus" size="30" />
    </div>
    <div
      v-for="(item, index) in notes"
      :key="index"
      :class="['memo', selectedMemos[item.title] && 'selected']"
    >
      <div @click="selectMemo(item)">
        <div class="memo-detail">+{{ item.detail }}</div>
        <div class="memo-title">{{ item.title }}</div>
      </div>
      <van-icon @click="deleteMemo(item)" class="memo-close" name="delete-o" />
    </div>
  </div>
  <div v-if="detail" class="detail">
    {{ detail }}
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { Slider, Stepper, Icon } from "vant";

export default defineComponent({
  name: "data-item",

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

    notes: Array,
    detail: String,
  },

  components: {
    [Icon.name]: Icon,
    [Slider.name]: Slider,
    [Stepper.name]: Stepper,
  },

  methods: {
    onChange(value) {
      this.$emit("update:modelValue", value);
    },
  },

  setup(props, { emit }) {
    const value = ref(+props.modelValue);
    const selectedMemos = ref({});
    const isExpand = ref(true);

    const selectMemo = (item) => {
      const key = item.title;
      const detail = +item.detail;
      if (selectedMemos.value[key]) {
        value.value = +value.value - +selectedMemos.value[key];
        delete selectedMemos.value[key];
      } else {
        selectedMemos.value[key] = detail;
        value.value = +value.value + +selectedMemos.value[key];
      }
    };

    const deleteMemo = (item) => {
      const key = item.title;
      if (selectedMemos.value[key]) {
        value.value = +value.value - +selectedMemos.value[key];
        delete selectedMemos.value[key];
      }
      const notesFilter = [];
      props.notes.forEach((item) => {
        if (item.title !== key) {
          notesFilter.push(item);
        } 
      });
      emit('noteChange', notesFilter);
    };

    const addNewNote = () => {

    };

    return { value, selectMemo, selectedMemos, deleteMemo, isExpand, addNewNote };
  },
});
</script>

<style>
.data-notes {
  border: 1px solid #997874;
  flex-wrap: wrap;
  display: flex;
  padding: 6px 6px 6px 0;
  max-height: 140px;
  overflow: scroll;
}
.data-notes .memo {
  height: 36px;
  margin-left: 6px;
  margin-bottom: 4px;
  border: 1px solid #997874;
  border-radius: 6px;
  box-sizing: border-box;
  padding: 2px 6px;
  color: #997874;
  font-size: 14px;
  position: relative;
  min-width: 70px;
}
.memo.selected {
  background-color: #997874;
  color: #fff;
}
.add-note-button {
  border: 1px solid #997874;
  padding: 2px 6px;
  text-align: center;
  box-sizing: border-box;
  color: #997874;
  height: 36px;
  margin-bottom: 4px;
  border-radius: 6px;
  margin-left: 6px;
}
.memo-detail {
  font-weight: bold;
  line-height: 16px;
}
.memo-title {
  font-size: 12px;
  line-height: 14px;
}
.notes-button {
  background-color: #997874;
  color: #fff;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  border-radius: 4px;
}
.data-notes .memo-close {
  position: absolute;
  top: 2px;
  right: 6px;
}
</style>
