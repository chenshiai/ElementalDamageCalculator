<template>
  <div class="note-group">
    <div
      v-show="notes"
      :class="['notes-button', isExpand && 'expand']"
      @click="isExpand = !isExpand"
    >
      『{{ title }}』标签组
      <van-icon size="12" :name="isExpand ? 'arrow-up' : 'arrow-down'" />
    </div>
    <div v-show="notes && isExpand" class="data-notes">
      <div class="add-note-button" @click="showPopup = true">点此新增标签</div>
      <div
        v-for="(item, index) in notes"
        :key="index"
        :class="['memo', selectedMemos[item.title] && 'selected']"
      >
        <div @click="selectMemo(item)">
          <div class="memo-detail">
            {{
              floatNum(item.detail, 2) >= 0
                ? `+${floatNum(item.detail, 2)}`
                : floatNum(item.detail, 2)
            }}
          </div>
          <div class="memo-title">{{ item.title }}</div>
        </div>
        <van-icon
          @click="deleteMemo(item)"
          class="memo-close"
          name="delete-o"
        />
      </div>
    </div>
  </div>
  <van-popup
    teleport="#app"
    v-model:show="showPopup"
    position="top"
    @close="handleClose"
  >
    <div class="popup-title">新增『{{ title }}』标签</div>
    <van-tabs
      v-show="calculationMode.length > 1"
      class="calculation-mode"
      v-model:active="active"
      color="#997874"
      line-width="60px"
      swipe-threshold="3"
    >
      <van-tab
        v-for="mode in calculationMode"
        :title="mode.title"
        :key="mode.title"
      />
    </van-tabs>
    <van-form @submit="onSubmit">
      <van-field
        v-for="field in calculationMode[active].fields"
        v-model="temporaryData[field.label]"
        :key="field.name"
        :name="field.name"
        :type="field.type"
        :label="field.label"
        :placeholder="field.placeholder"
        :rules="[{ required: true, message: '必填项' }]"
      />
      <van-field
        v-model="newMemo.title"
        type="text"
        label="标签名称"
        placeholder="输入备注说明（不要与其他标签重复）"
        :rules="[{ required: true, message: '必填项' }]"
      />
      <van-button
        class="bottons__add"
        text="新增"
        size="small"
        block
        type="primary"
        native-type="submit"
      />
    </van-form>
  </van-popup>
</template>

<script>
import { defineComponent, reactive, ref, watch } from "vue";
import { Cell, Icon, Popup, Field, Form, Toast, Button, Tab, Tabs } from "vant";
import { deepCopyObject, floatNum } from "../utils";

export default defineComponent({
  name: "note-group",

  emits: ["update:modelValue", "updateNoteGroup"],

  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Cell.name]: Cell,
    [Icon.name]: Icon,
    [Form.name]: Form,
    [Field.name]: Field,
    [Popup.name]: Popup,
    [Button.name]: Button,
  },

  props: {
    modelValue: String | Number,
    title: String,
    notes: Array,
    selectedNotes: Object,
    setSelectedNotes: Function,
    calculationMode: Array,
  },

  setup(props, { emit }) {
    const selectedMemos = ref({});
    const isExpand = ref(false);
    const showPopup = ref(false);
    const active = ref(0);
    const temporaryData = ref({});
    const newMemo = reactive({
      title: "",
    });

    const handleClose = () => {
      temporaryData.value = {};
    };
    const changeValue = (value) => {
      emit("update:modelValue", value);
    };
    const selectMemo = (item) => {
      const key = item.title;
      const detail = +item.detail;
      if (selectedMemos.value[key]) {
        const res = floatNum(+props.modelValue - +selectedMemos.value[key], 2);
        if (res >= 0) {
          changeValue(res);
        }
        delete selectedMemos.value[key];
      } else {
        selectedMemos.value[key] = detail;
        changeValue(floatNum(+props.modelValue + +selectedMemos.value[key], 2));
      }
      props.setSelectedNotes(deepCopyObject(selectedMemos.value));
    };

    const deleteMemo = (item) => {
      const key = item.title;
      const notesFilter = props.notes.filter((item) => item.title !== key);
      emit("updateNoteGroup", notesFilter);

      if (selectedMemos.value[key]) {
        changeValue(floatNum(+props.modelValue - +selectedMemos.value[key], 2));
        delete selectedMemos.value[key];
      }
    };

    const onSubmit = (value) => {
      const { getResult } = props.calculationMode[active.value];
      const noteValue = {
        detail: getResult(value),
        title: newMemo.title,
      };
      const newNotes = [noteValue];

      // 自动选中新建的标签
      selectMemo(noteValue);

      // 将表单值设为空
      newMemo.title = "";
      temporaryData.value = {};

      // 拼接新的标签组并抛出
      emit("updateNoteGroup", newNotes.concat(props.notes));
      Toast.success("添加成功");
    };

    watch(
      () => props.selectedNotes,
      (newVal) => {
        selectedMemos.value = deepCopyObject(newVal);
        const supplementNotes = [];
        for (let key in selectedMemos.value) {
          if (!props.notes.find((item) => item.title === key)) {
            supplementNotes.push({
              title: key,
              detail: selectedMemos.value[key],
            });
          }
        }
        if (supplementNotes.length > 0)
          emit("updateNoteGroup", supplementNotes.concat(props.notes));
      }
    );

    return {
      active,
      isExpand,
      newMemo,
      selectMemo,
      showPopup,
      deleteMemo,
      selectedMemos,
      temporaryData,
      handleClose,
      onSubmit,
      floatNum,
    };
  },
});
</script>

<style scoped>
.data-notes {
  border: 1px solid var(--button-bg);
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
  border: 1px solid var(--button-bg);
  border-radius: 6px;
  box-sizing: border-box;
  padding: 2px 24px 2px 6px;
  color: var(--button-bg);
  font-size: 14px;
  position: relative;
  min-width: 80px;
}
.memo.selected {
  background-color: var(--button-bg);
  color: #fff;
}
.add-note-button {
  border: 1px solid var(--button-bg);
  padding: 2px 6px;
  text-align: center;
  box-sizing: border-box;
  color: var(--button-bg);
  height: 36px;
  line-height: 32px;
  margin-bottom: 4px;
  border-radius: 6px;
  margin-left: 6px;
  font-size: 14px;
}
.add-note-button:active {
  background-color: var(--light-text);
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
  background-color: var(--button-bg);
  color: #fff;
  text-align: center;
  font-size: 14px;
  line-height: 24px;
  border-radius: 4px;
}
.notes-button.expand {
  border-radius: 4px 4px 0 0;
}
.data-notes .memo-close {
  position: absolute;
  top: 2px;
  right: 6px;
}
.popup-title {
  text-align: center;
  font-size: 18px;
  line-height: 36px;
  font-weight: bold;
  color: #fff;
  background-color: var(--button-bg);
}
.popup-bottons {
  display: flex;
  line-height: 36px;
  text-align: center;
}
.popup-bottons__item {
  flex: 1;
  font-size: 20px;
}
.popup-bottons__add {
  background-color: var(--button-bg);
  color: #fff;
}
.bottons__add {
  background-color: var(--button-bg);
  color: #fff;
  border: none;
  font-size: 18px;
  border-radius: 0;
}
</style>
