<template>
  <div class="additional-demage-list">
    <span v-if="additionalList.length > 0">{{ label }}：</span>
    <van-tag
      class="demage-list-item"
      v-for="(item, index) in additionalList"
      :key="index"
      closeable
      color="#997874"
      @close="closeTag(index)"
    >
      {{ format(item) }}
    </van-tag>
  </div>
  <div class="additional-demage-button" @click="openPop">
    {{ buttonText }}
  </div>
  <van-popup
    teleport="#app"
    v-model:show="showPopup"
    position="top"
    @close="handleClose"
  >
    <div class="popup-title">{{ label }}</div>
    <van-tabs
      color="#997874"
      line-width="60px"
      v-model:active="active"
      @change="handleChange"
      swipe-threshold="3"
    >
      <van-tab v-for="mode in additionalMode" :key="mode.title">
        <template #title>
          <div class="additional-tab-title">
            <img class="tab-title-img" :src="mode.img" alt="" />
            <span class="tab-title-span">{{ mode.title }}</span>
          </div>
        </template>
      </van-tab>
    </van-tabs>
    <van-tabs color="#997874" line-width="60px" v-model:active="childrenActive">
      <van-tab
        v-for="item in additionalModeChildren"
        :title="item.title"
        :key="item.title"
      />
    </van-tabs>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-for="field in additionalModeChildren[childrenActive].fields"
          v-model="temporaryData[field.label]"
          :key="field.name"
          :name="field.name"
          :label="field.label"
          :type="field.type"
          :placeholder="field.placeholder"
          :rules="[{ required: true, message: '必填项' }]"
        />
      </van-cell-group>
      <van-button
        class="popup-bottons"
        text="确定"
        size="small"
        block
        type="primary"
        native-type="submit"
      />
    </van-form>
  </van-popup>
</template>

<script>
import { defineComponent, ref, computed, toRefs } from "vue";
import {
  Popup,
  Button,
  Tab,
  Tabs,
  Tag,
  Form,
  Toast,
  Field,
  CellGroup,
} from "vant";
import { useStore } from "vuex";

export default defineComponent({
  name: "additional-demage",

  props: {
    buttonText: String,
    label: String,
    additionalMode: Object,
    additionalList: Array,
  },

  components: {
    [Tag.name]: Tag,
    [Tab.name]: Tab,
    [Form.name]: Form,
    [Tabs.name]: Tabs,
    [Field.name]: Field,
    [Popup.name]: Popup,
    [Button.name]: Button,
    [CellGroup.name]: CellGroup,
  },

  setup(props) {
    const temporaryData = ref({});
    const showPopup = ref(false);
    const store = useStore();

    const openPop = () => {
      showPopup.value = true;
    };

    const active = ref(0);
    const childrenActive = ref(0);

    const additionalModeChildren = computed(() => {
      return props.additionalMode[active.value].children || [];
    });

    const handleChange = () => {
      childrenActive.value = 0;
    };
    const handleClose = () => {
      temporaryData.value = {};
    };
    const closeTag = (index) => {
      props.additionalList.splice(index, 1);
    };

    const onSubmit = (value) => {
      const { getResult } =
        additionalModeChildren.value[childrenActive.value];
      const result = getResult(value);
      if (result) {
        props.additionalList.push(result);
        Toast.success("添加成功");
        handleClose();
      }
    };

    const format = (value) => {
      return Math.round(value);
    };

    return {
      ...toRefs(store.state.demageModule),
      showPopup,
      openPop,
      active,
      onSubmit,
      childrenActive,
      additionalModeChildren,
      temporaryData,
      handleClose,
      closeTag,
      handleChange,
      format,
    };
  },
});
</script>

<style scoped>
.additional-demage-list {
  margin-bottom: 4px;
}
.additional-demage-button {
  font-size: 12px;
  line-height: 32px;
  text-align: center;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid var(--main-text);
  margin-bottom: 16px;
}
.additional-demage-button:hover,
.additional-demage-button:active {
  background-color: var(--light-text);
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
  background-color: var(--button-bg);
  color: #fff;
  border: none;
  font-size: 18px;
  border-radius: 0;
}
.demage-list-item {
  padding: 2px 6px;
  border-radius: 4px;
  margin-right: 8px;
  font-size: 14px;
}
.additional-tab-title {
  display: flex;
  align-content: center;
  justify-content: center;
}
.tab-title-img {
  border-radius: 50%;
  width: 26px;
  height: 26px;
  margin-right: 4px;
}
.tab-title-span {
  line-height: 26px;
}
</style>
