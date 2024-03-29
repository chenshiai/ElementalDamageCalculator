<template>
  <div class="note-group">
    <div
      v-show="localNotes"
      :class="['notes-button', isExpand && 'expand']"
      @click="isExpand = !isExpand"
    >
      『{{ title }}』便签
      <van-icon size="12" :name="isExpand ? 'arrow-up' : 'arrow-down'" />
    </div>
    <div v-show="localNotes && isExpand" class="data-notes">
      <div class="add-note-button" @click="showPopup = true">＋新增便签</div>
      <div
        v-for="(item, index) in localNotes"
        :key="index"
        :class="['memo', (selectedMemos[item.title] >= 0) && 'selected']"
      >
        <div @click="selectMemo(item)">
          <div class="memo-detail">
            {{ formatMemoDetail(item.detail) }}
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
    <div class="popup-title">新增『{{ title }}』便签</div>
    <div class="calculation-modes" v-show="calculationMode.length > 1">
      <div
        :class="['additional-tab-title', index == active && 'additional-tab-active']"
        v-for="(mode, index) in calculationMode"
        :key="mode.title"
        @click="handleClick(index)"
      >
        <img
          v-if="!!mode.img"
          class="additional-tab-title-img"
          :src="mode.img"
          alt=""
        />
        <span class="additional-tab-title-span">{{ mode.title }}</span>
      </div>
    </div>
    <van-tabs color="#997874" line-width="60px" v-model:active="childrenActive" @change="defaultTitleSetting">
      <van-tab
        v-for="item in calculationModeChildren"
        :title="item.title"
        :key="item.title"
      />
    </van-tabs>
    <van-form @submit="onSubmit">
      <van-field
        v-for="field in calculationModeChildren[childrenActive].fields"
        v-model="temporaryData[field.label]"
        :key="field.name"
        :name="field.name"
        :type="field.type"
        :label="field.label"
        :placeholder="field.placeholder"
        :disabled="field.disabled"
        :rules="[{ required: field.required, message: '必填项' }]"
      />
      <van-field
        v-model="newMemo.title"
        type="text"
        label="标签名称"
        placeholder="输入备注说明（不要与其他便签重名）"
        :rules="[{ required: true, message: '必填项' }]"
      />
      <van-button
        class="bottons__add"
        text="确认添加"
        size="small"
        block
        type="primary"
        native-type="submit"
      />
    </van-form>
  </van-popup>
</template>

<script>
import { defineComponent, onMounted, reactive, ref, watch, computed } from "vue";
import { Cell, Icon, Popup, Field, Form, Toast, Button, Tab, Tabs, Grid, GridItem } from "vant";
import { deepCopyObject, floatNum, getLocalStorage } from "../utils";

export default defineComponent({
  name: "note-group",

  emits: ["update:modelValue"],

  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Cell.name]: Cell,
    [Icon.name]: Icon,
    [Grid.name]: Grid,
    [Form.name]: Form,
    [Field.name]: Field,
    [Popup.name]: Popup,
    [Button.name]: Button,
    [GridItem.name]: GridItem,
  },

  props: {
    modelValue: String | Number, // 关联数据
    title: String, // 便签组名称
    defaultNotes: Array, // 默认便签列表
    selectedNotes: Object, // store中已选择的便签
    setSelectedNotes: Function, // store中更新选择便签的方法
    calculationMode: Array, // 便签表单计算公式
    localStorageName: String, // 本地便签列表名称
  },

  setup(props, { emit }) {
    const localNotes = ref([]);
    const selectedMemos = ref({});
    const isExpand = ref(false);
    const showPopup = ref(false);

    const active = ref(0);
    const childrenActive = ref(0);

    const temporaryData = ref({});
    const newMemo = reactive({
      title: "",
    });

    const calculationModeChildren = computed(() => {
      return props.calculationMode[active.value].children || [];
    });

    const handleClose = () => {
      temporaryData.value = {};
    };
    const defaultTitleSetting = () => {
      const mode = props.calculationMode[active.value];
      newMemo.title = mode.title + "·" + mode.children[childrenActive.value].title;
    };
    const handleClick = (index) => {
      active.value = index;
      childrenActive.value = 0;
      defaultTitleSetting();
    };
    const changeValue = (value) => {
      emit("update:modelValue", value);
    };
    const updateNoteGroup = (value) => {
      localNotes.value = value;
      window.localStorage.setItem(
        props.localStorageName,
        JSON.stringify(value)
      );
    };

    const selectMemo = (item) => {
      const key = item.title;
      const detail = +item.detail;
      if (selectedMemos.value[key] >= 0) {
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
      const notesFilter = localNotes.value.filter((item) => item.title !== key);
      updateNoteGroup(notesFilter);

      if (selectedMemos.value[key]) {
        changeValue(floatNum(+props.modelValue - +selectedMemos.value[key], 2));
        delete selectedMemos.value[key];
      }
    };

    const onSubmit = (value) => {
      const { getResult } = calculationModeChildren.value[childrenActive.value];
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

      // 拼接新的标签组并更新到localstorage
      updateNoteGroup(newNotes.concat(localNotes.value));
      Toast.success("添加成功");
    };

    const formatMemoDetail = (detail) => {
      let res = floatNum(detail, 2);
      return res >= 0 ? `+${res}` : res;
    };

    onMounted(() => {
      const { localStorageName, defaultNotes = [] } = props;
      localNotes.value = getLocalStorage(
        localStorageName,
        defaultNotes,
        `${localStorageName}读取失败`
      );
    });

    watch(
      () => props.selectedNotes,
      (newVal) => {
        selectedMemos.value = deepCopyObject(newVal);
        const supplementNotes = [];
        for (let key in selectedMemos.value) {
          if (!localNotes.value.find((item) => item.title === key)) {
            supplementNotes.push({
              title: key,
              detail: selectedMemos.value[key],
            });
          }
        }
        if (supplementNotes.length > 0)
          updateNoteGroup(supplementNotes.concat(localNotes.value));
      }
    );

    return {
      active,
      childrenActive,
      localNotes,
      isExpand,
      calculationModeChildren,
      newMemo,
      selectMemo,
      showPopup,
      deleteMemo,
      selectedMemos,
      temporaryData,
      handleClose,
      handleClick,
      onSubmit,
      formatMemoDetail,
      defaultTitleSetting,
    };
  },
});
</script>

<style scoped>
.note-group {
  margin-bottom: 10px;
}

.data-notes {
  border: 1px solid var(--button-bg);
  border-top: none;
  flex-wrap: wrap;
  display: flex;
  padding: 6px 6px 6px 0;
  max-height: 200px;
  overflow: scroll;
}

.data-notes .memo {
  height: 36px;
  margin-left: 6px;
  margin-bottom: 4px;
  border: 1px solid var(--main-text);
  border-radius: 6px;
  box-sizing: border-box;
  padding: 2px 24px 2px 6px;
  color: var(--main-text);
  font-size: 14px;
  position: relative;
  min-width: 80px;
}

.memo.selected {
  background-color: var(--main-text);
  color: #fff;
}

.add-note-button {
  border: 1px solid var(--main-text);
  padding: 2px 6px;
  text-align: center;
  box-sizing: border-box;
  color: var(--main-text);
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
  color: var(--main-text);
  border: 1px solid var(--main-text);
  text-align: center;
  font-size: 14px;
  line-height: 32px;
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

.calculation-modes {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  padding: 0 16px 0 16px;
}

.additional-tab-active {
  background-color: var(--button-bg);
  color: var(--light-text);
}

.additional-tab-title {
  display: flex;
  align-content: center;
  justify-content: center;
  
  width: 25%;
  margin: 2px 0 2px 0;
}

.additional-tab-title-img {
  border-radius: 50%;
  width: 26px;
  height: 26px;
  margin-right: 4px;
}

.additional-tab-title-span {
  line-height: 26px;
  font-size: 12px;
}
</style>
