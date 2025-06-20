<template>
  <details class="note-group">
    <summary class="notes-button">
      『{{ title }}』便签
      <Icon size="12" id="up" name="arrow-up" />
      <Icon size="12" id="down" name="arrow-down" />
    </summary>
    <div class="data-notes">
      <div class="add-note-button" @click="showPopup = true">＋新增便签</div>
      <div
        v-for="[name, value] of localNotes"
        :key="name"
        :class="['memo', showSelectedNotes.get(name) >= 0 && 'selected']"
      >
        <div @click="selectMemo(name, value)">
          <div class="memo-detail">
            {{ formatMemoDetail(value) }}
          </div>
          <div class="memo-title">{{ name }}</div>
        </div>
        <Icon @click="deleteMemo(name, value)" class="memo-close" name="delete-o" />
      </div>
    </div>
  </details>
  <Popup teleport="#app" v-model:show="showPopup" position="top" @close="handleClose">
    <div class="popup-title">新增『{{ title }}』便签</div>
    <div class="calculation-modes" v-show="calculationMode.length > 1">
      <div
        v-for="(mode, index) in calculationMode"
        :class="['additional-tab-title', index === active && 'additional-tab-active']"
        :key="mode.title"
        @click="handleClick(index)"
      >
        <img v-if="!!mode.img" class="additional-tab-title-img" :src="mode.img" alt="" />
        <span class="additional-tab-title-span">{{ mode.title }}</span>
      </div>
    </div>
    <Tabs color="#997874" type="card" v-model:active="childrenActive" @change="defaultTitleSetting">
      <Tab v-for="item in calculationModeChildren" :title="item.title" :key="item.title" />
    </Tabs>
    <Form @submit="onSubmit">
      <Field
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
      <Field
        v-model="newMemo.title"
        type="text"
        label="标签名称"
        placeholder="输入备注说明（不要与其他便签重名）"
        :rules="[{ required: true, message: '必填项' }]"
      />
      <Button class="bottons__add" text="确认添加" size="small" block type="primary" native-type="submit" />
    </Form>
  </Popup>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, computed } from "vue";
import { Icon, Popup, Field, Form, showNotify, Button, Tab, Tabs } from "vant";
import { floatNum, getLocalStorage, EventBus } from "@/utils";
import { ICalculationMode } from "@/types/interface/calculation-mode";
import { NodeType } from "@/types";

interface IProps {
  title: string;
  defaultNotes: NodeType[];
  selectedNotes: NodeType[];
  setSelectedNotes: (data: NodeType[]) => void;
  calculationMode: ICalculationMode[];
  localStorageName: string;
}

const props = defineProps<IProps>();

const showPopup = ref(false);
/** 本地展示用便签组 */
const localNotes = ref<Map<string, number>>(new Map());
/** 双向绑定model */
const modelValue = defineModel<number | string>();
function changeValue(value) {
  modelValue.value = value;
}
/** 格式化便签数据 */
function formatMemoDetail(detail) {
  let res = floatNum(detail, 2);
  return res >= 0 ? `+${res}` : res;
}

/** 选择便签模块 */
let selectedMemos = new Map<string, number>([]);
const showSelectedNotes = computed(() => {
  selectedMemos = new Map(props.selectedNotes);
  return selectedMemos;
});
// 点击便签事件
function selectMemo(name, value) {
  if (selectedMemos.get(name)) {
    // 如果该便签在【已选择便签】中，则减去该便签的值，再从【已选择便签】里移除
    const res = floatNum(+modelValue.value - +value, 2);
    if (res >= 0) {
      changeValue(res);
    }
    selectedMemos.delete(name);
  } else {
    // 若不在【已选择便签】中，则在【已选择便签】里新增。并加上该便签的值。
    selectedMemos.set(name, value);
    changeValue(floatNum(+modelValue.value + +value, 2));
  }

  // 最后将变更后的【已选择便签】更新
  props.setSelectedNotes([...selectedMemos]);
}

/** 表单弹窗模块 */
const active = ref(0);
const childrenActive = ref(0);
// 临时表单数据
const temporaryData = ref({});
const newMemo = reactive({
  title: "",
});
// 展示所选计算模式的表单项
const calculationModeChildren = computed(() => {
  return props.calculationMode[active.value].children || [];
});

// 设置默认标题
function defaultTitleSetting() {
  const mode = props.calculationMode[active.value];
  newMemo.title = mode.title + "·" + mode.children[childrenActive.value].title;
}

// 点击切换计算模式
async function handleClick(index) {
  active.value = index;
  childrenActive.value = 0;
  defaultTitleSetting();
}

// 清空表单数据
function handleClose() {
  temporaryData.value = {};
}

/** 更新便签模块 */
// 更新本地localstorage便签组
function updateNoteGroup(value) {
  window.localStorage.setItem(props.localStorageName, JSON.stringify(value));
}
// 删除便签
function deleteMemo(name, value) {
  // 筛选被删除的便签后更新本地便签组
  localNotes.value.delete(name);
  updateNoteGroup([...localNotes.value]);

  // 如果被删除的便签在【已选择便签】中，则减去该便签的值，并从【已选择便签】中移除
  if (selectedMemos.get(name)) {
    changeValue(floatNum(+modelValue.value - +value, 2));
    selectedMemos.delete(name);
    props.setSelectedNotes([...selectedMemos]);
  }
}

// 新增便签
function onSubmit(value) {
  const { getResult } = calculationModeChildren.value[childrenActive.value];
  const name = newMemo.title;
  const val = getResult(value);

  // 自动选中新建的标签
  selectMemo(name, val);
  localNotes.value = new Map([[name, val], ...localNotes.value]);

  // 将表单值设为初始值
  newMemo.title = "";
  temporaryData.value = {};

  // 拼接新的标签组并更新到localstorage
  updateNoteGroup([...localNotes.value]);
  showNotify({
    type: "success",
    message: "添加成功",
  });
}

/** 生命周期 mounted */
function getLocalNotes() {
  const { localStorageName, defaultNotes = [] } = props;
  // 根据名称读取本地便签组，并将其转为Map，方便后续操作
  localNotes.value = new Map(getLocalStorage(localStorageName, defaultNotes, `${localStorageName}读取失败`));
}

onMounted(() => {
  getLocalNotes();
  EventBus.$on(`${props.localStorageName}Changed`, getLocalNotes);
});
</script>

<style scoped>
.note-group {
  margin-bottom: 10px;
  user-select: none;
  -webkit-user-select: none;
  background-color: var(--page-bg);
}

.data-notes {
  border: 1px solid var(--main-text);
  border-top: none;
  flex-wrap: wrap;
  display: flex;
  padding: 6px 6px 6px 0;
  max-height: 200px;
  overflow-y: scroll;
  border-radius: 0 0 4px 4px;
}

.data-notes .memo {
  height: 36px;
  margin-left: 6px;
  margin-bottom: 4px;
  border: 1px solid var(--main-text);
  border-radius: 4px;
  box-sizing: border-box;
  padding: 2px 24px 2px 6px;
  color: var(--main-text);
  font-size: 14px;
  position: relative;
  min-width: 80px;
  cursor: pointer;
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
  border-radius: 4px;
  margin-left: 6px;
  font-size: 14px;
  cursor: pointer;
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
  height: 32px;
}

.notes-button::-webkit-details-marker,
.notes-button::marker {
  font-size: 0;
}

[open] > .notes-button {
  border-radius: 4px 4px 0 0;
}
#up {
  display: none;
}
[open] > .notes-button #down {
  display: none;
}
[open] > .notes-button #up {
  display: inline-block;
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
  margin-bottom: 16px;
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
  cursor: pointer;
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