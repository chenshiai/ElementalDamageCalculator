<script setup lang="ts">
import { Popup, showNotify, Field, FloatingBubble, Popover } from "vant";
import { ref } from "vue";
import {useRouter} from "vue-router";
import CalculationDataSelector from "./CalculationDataSelector.vue";
import { useStore } from "@/store";

const store = useStore();
const emit = defineEmits(["save-data"]);

// 保存数据
const showPopup = ref(false);
const remark = ref("");
const saveDataPop = () => {
  remark.value = store.state.teamData.currentEdit;
  showPopup.value = true;
};
const saveData = () => {
  if (!remark.value) {
    showNotify({
      type: "danger",
      message: "数据命名为空",
    })
    return;
  }
  emit("save-data", remark.value);
};

// 查看数据
import { IUserSavedCalculationData } from "@/constants/db";
const showDataPopup = ref(false);
const lookDataPop = () => {
  showDataPopup.value = true;
};

/** @module 编辑页面跳转 */
const recalculation = (data: IUserSavedCalculationData) => {
  remark.value = data.title;
  store.commit("setCurrentEdit", data.title);
  sessionStorage.setItem("editCharacter", JSON.stringify(data));
  
  router.push({
    path: `/character/edit/${data.title}`,
  });
};

const router = useRouter();
const createCha = () => {
  router.push({
    path: "/character/create",
  });
}

// 悬浮球
const showPopover = ref(false);
const offset = ref({ x: 20, y: 250 });
const popoberActions = [
  { text: "保存当前角色面板", click: saveDataPop },
  { text: "查看存档", click: lookDataPop },
  { text: "创建新角色", click: createCha },
];
const onSelect = (action) => {
  action.click();
};
</script>

<template>
  <FloatingBubble v-model:offset="offset" axis="y">
    <Popover
      v-model:show="showPopover"
      :actions="popoberActions"
      actions-direction="horizontal"
      placement="right"
      @select="onSelect"
    >
      <template #reference>更多</template>
    </Popover>
  </FloatingBubble>
  <div class="save-data">
    <div class="save-btn" @click="saveDataPop">保存角色</div>
    <div class="save-btn" @click="lookDataPop">查看存档</div>
  </div>
  <Popup class="data-popup" teleport="#app" v-model:show="showPopup" position="top">
    <div class="tips">
      面板数据存储在本地浏览器的缓存中。若清空浏览器缓存，则数据也一会同清空。同名的数据会覆盖。
    </div>
    <div class="tips">各项增益的开关情况不会被保存，载入数据后需要重新开启。</div>
    <div class="description">
      保存的内容分为两个部分，分别是：
      <br />【配置数据】：角色、武器和圣遗物的配置情况，用于载入后重新配置。
      <br />【面板数据】：角色面板快照，即锁面板，用于计算队伍增益。
    </div>
    <Field v-model="remark" type="text" label="数据命名" placeholder="给这条角色数据取个名字吧" />
    <div class="popup-buttons" @click="saveData">保存角色</div>
  </Popup>

  <Popup class="data-popup" teleport="#app" v-model:show="showDataPopup" style="max-height: 80%" position="top">
    <CalculationDataSelector :show-data-popup="showDataPopup" @recalculation="recalculation" />
  </Popup>
</template>

<style scoped>
.save-data {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.save-btn {
  width: 45%;
  background-color: #fff;
  border: 1px solid var(--stroke-2);
  text-align: center;
  line-height: 40px;
  margin-bottom: 12px;
  border-radius: 4px;
}
.description {
  margin: 16px 0;
  font-size: 12px;
  padding: 0 16px;
  color: var(--tip-text);
  /* text-align: center; */
  position: relative;
}

.popup-buttons {
  line-height: 40px;
  width: 100%;
  text-align: center;
  flex: 1;
  font-size: 20px;
  background-color: var(--button-bg);
  color: #fff;
}
</style>
