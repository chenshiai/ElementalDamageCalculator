<template>
  <div class="additional-demage" @click="openPop">展开计算></div>
  <van-popup
    teleport="#app"
    v-model:show="showPopup"
    position="top"
    @close="handleClose"
  >
    <div class="popup-title">附加伤害值</div>
    <van-tabs
      color="#997874"
      line-width="60px"
      v-model:active="active"
      @change="handleChange"
      swipe-threshold="3"
    >
      <van-tab
        v-for="mode in AdditionalDemageMode"
        :title="mode.title"
        :key="mode.title"
      />
    </van-tabs>
    <van-tabs color="#997874" line-width="60px" v-model:active="childrenActive">
      <van-tab
        v-for="item in AdditionalDemageChildren"
        :title="item.title"
        :key="item.title"
      />
    </van-tabs>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-for="field in AdditionalDemageChildren[childrenActive].fields"
          v-model="temporaryData[field.label]"
          :name="field.name"
          :label="field.label"
          :type="field.type"
          :placeholder="field.placeholder"
          :rules="[{ required: true, message: '必填项' }]"
        />
      </van-cell-group>
      <van-button class="popup-bottons" text="确定" size="small" block type="primary" native-type="submit" />
    </van-form>
  </van-popup>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { Popup, Button, Tab, Tabs, Form, Field, CellGroup } from "vant";
import { AdditionalDemageMode } from "../constant";
import { useStore } from "vuex";

export default defineComponent({
  name: "additional-demage",

  components: {
    [Tab.name]: Tab,
    [Form.name]: Form,
    [Tabs.name]: Tabs,
    [Field.name]: Field,
    [Popup.name]: Popup,
    [Button.name]: Button,
    [CellGroup.name]: CellGroup,
  },

  setup() {
    const temporaryData = ref({});
    const showPopup = ref(false);
    const store = useStore();

    const openPop = () => {
      showPopup.value = true;
    };

    const active = ref(0);
    const childrenActive = ref(0);

    const AdditionalDemageChildren = computed(() => {
      return AdditionalDemageMode[active.value].children || [];
    });

    const handleChange = () => {
      childrenActive.value = 0;
    };
    const handleClose = () => {
      temporaryData.value = {};
    };
    const onSubmit = (value) => {
      const { getResult } =
        AdditionalDemageChildren.value[childrenActive.value];
      store.commit("setAdditionalDemage", getResult(value));
    };

    return {
      showPopup,
      openPop,
      active,
      onSubmit,
      childrenActive,
      AdditionalDemageChildren,
      AdditionalDemageMode,
      temporaryData,
      handleClose,
      handleChange,
    };
  },
});
</script>

<style scoped>
.additional-demage {
  display: inline-block;
  width: 80px;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #000;
  margin-left: 20px;
}
.popup-title {
  text-align: center;
  font-size: 18px;
  line-height: 36px;
  font-weight: bold;
  color: #fff;
  background-color: #997874;
}
.popup-bottons {
  background-color: #997874;
  color: #fff;
  border: none;
  font-size: 18px;
  border-radius: 0;
}
</style>