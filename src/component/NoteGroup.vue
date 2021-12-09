<template>
  <div
    v-show="notes"
    :class="['notes-button', isExpand && 'expand']"
    @click="isExpand = !isExpand"
  >
    『{{ title }}』标签组
    <van-icon size="12" :name="isExpand ? 'arrow-up' : 'arrow-down'" />
  </div>
  <div v-show="notes && isExpand" class="data-notes">
    <div class="add-note-button" @click="openNewNotePop">点此新增标签</div>
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
  <van-popup teleport="#app" v-model:show="showPopup" position="top">
    <div class="popup-title">新增『{{ title }}』标签</div>
    <van-tabs
      v-show="calculationMode.length > 1"
      class="calculation-mode"
      v-model:active="active"
      color="#997874"
      line-width="60px"
    >
      <van-tab
        v-for="mode in calculationMode"
        :title="mode.title"
        :key="mode.title"
      />
    </van-tabs>
    <van-field
      v-model="newMemo.detail"
      type="number"
      :label="calculationMode[active].label"
      :placeholder="calculationMode[active].placeholder"
      :formatter="formatterDetail"
      format-trigger="onBlur"
    />
    <van-field
      v-model="newMemo.title"
      type="text"
      label="标签名称"
      placeholder="输入备注说明（不要与其他标签重复）"
    />
    <div class="popup-bottons">
      <div @click="showPopup = false" class="popup-bottons__item">取消</div>
      <div @click="addNewNote" class="popup-bottons__item popup-bottons__add">
        新增
      </div>
    </div>
  </van-popup>
</template>

<script>
import { defineComponent, reactive, ref, watch } from "vue";
import { Cell, Icon, Popup, Field, Toast, Tab, Tabs } from "vant";
import { deepCopyObject, floatNum } from "../utils";

export default defineComponent({
  name: "note-group",

  emits: ["update:modelValue", "updateNoteGroup"],

  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Cell.name]: Cell,
    [Icon.name]: Icon,
    [Field.name]: Field,
    [Popup.name]: Popup,
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
    const changeValue = (value) => {
      emit("update:modelValue", value);
    };
    const selectMemo = (item) => {
      const key = item.title;
      const detail = +item.detail;
      if (selectedMemos.value[key]) {
        if (
          floatNum(props.modelValue) - floatNum(selectedMemos.value[key]) >=
          0
        ) {
          changeValue(
            floatNum(props.modelValue) - floatNum(selectedMemos.value[key])
          );
        }
        delete selectedMemos.value[key];
      } else {
        selectedMemos.value[key] = detail;
        changeValue(
          floatNum(props.modelValue) + floatNum(selectedMemos.value[key])
        );
      }
      props.setSelectedNotes(deepCopyObject(selectedMemos.value));
    };
    const deleteMemo = (item) => {
      const key = item.title;
      const notesFilter = props.notes.filter((item) => item.title !== key);
      emit("updateNoteGroup", notesFilter);

      if (selectedMemos.value[key]) {
        changeValue(
          floatNum(props.modelValue) - floatNum(selectedMemos.value[key])
        );
        delete selectedMemos.value[key];
      }
    };

    const showPopup = ref(false);
    const openNewNotePop = () => {
      showPopup.value = true;
    };

    const newMemo = reactive({
      detail: "",
      title: "",
    });
    const addNewNote = (remind = true) => {
      if (!newMemo.detail || !newMemo.title) {
        Toast.fail("不能为空值");
        return;
      }
      const { getResult } = props.calculationMode[active.value];
      const noteValue = {
        detail: getResult(newMemo.detail),
        title: newMemo.title,
      };
      const newNotes = [noteValue];
      selectMemo(noteValue);
      newMemo.detail = "";
      newMemo.title = "";

      emit("updateNoteGroup", newNotes.concat(props.notes));
      if (remind) Toast.success("添加成功");
    };

    const formatterDetail = (value) => {
      if (!value) return "";
      return floatNum(value);
    };

    const active = ref(0);

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
      addNewNote,
      formatterDetail,
      selectedMemos,
      openNewNotePop,
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
  padding: 2px 6px;
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
.add-note-button:active,
.add-note-button:hover {
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
</style>
