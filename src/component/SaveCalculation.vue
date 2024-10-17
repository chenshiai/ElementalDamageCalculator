<script setup lang="ts">
import { Popup, showFailToast, Field } from "vant";
import { ref } from "vue";
import CalculationDataSelector from "./CalculationDataSelector.vue";
const emit = defineEmits(["save-data", "look-data", "recalculation"]);

// 保存数据
const showPopup = ref(false);
const remark = ref("");
const saveDataPop = () => {
  showPopup.value = true;
};
const saveData = () => {
  if (!remark.value) {
    showFailToast("数据命名为空");
    return;
  }
  emit("save-data", remark.value);
};

// 查看数据
import { IUesrSavedCalculations } from "@/constants/db";
const showDataPopup = ref(false);
const lookDataPop = () => {
  showDataPopup.value = true;
};

// 重算数据
const recalculation = (data: IUesrSavedCalculations) => {
  remark.value = data.title;
  emit("recalculation", data);
};
</script>

<template>
  <div class="save-data">
    <div class="save-btn" @click="saveDataPop">保存当前角色面板</div>
    <div class="save-btn" @click="lookDataPop">查看数据</div>
  </div>
  <Popup class="data-popup" teleport="#app" v-model:show="showPopup" position="top">
    <div class="tips">
      面板数据会存储在本地浏览器的缓存中。若清空浏览器缓存，则数据也一会同清空。重复命名的新数据会替换旧数据。
    </div>
    <div class="tips">
      保存的是角色计算所有增益后的面板快照，即锁面板。增益的开启情况不会保存
    </div>
    <Field v-model="remark" type="text" label="数据命名" placeholder="给这条数据取个名字吧" />
    <div class="popup-buttons" @click="saveData">保存面板数据</div>
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
  border: 1px solid var(--button-bg);
  text-align: center;
  line-height: 40px;
  margin-bottom: 12px;
  border-radius: 4px;
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
