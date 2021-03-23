<template>
  <div class="tips">
    各种标签的配置，均受到作者本人的主观意识影响，并不代表绝对的公正客观，仅供参考。
  </div>
  <tab-title>标签化云配队</tab-title>
  <div class="team-list">
    <div class="team-list__item" v-for="(item, index) in config" :key="index" @click="show = true">
      <img :src="item.avatar" />
      <div class="team-list__item-name">{{ item.name }}</div>
    </div>
  </div>
  <van-popup
    teleport="#app"
    v-model:show="show"
    closeable
    position="right"
    :style="{ width: '100%', height: '100vh' }"
  >
    <selector />
  </van-popup>
</template>

<script>
import { defineComponent, ref } from "vue";
import TabTitle from "../component/TabTitle.vue";
import Selector from "../component/Selector.vue";
import CloudTeamConfig from "../../public/CloudTeamConfig";
import { Popup } from 'vant';

export default defineComponent({
  name: "cloud-team",

  components: {
    [Popup.name]: Popup,
    [Selector.name]: Selector,
    [TabTitle.name]: TabTitle,
  },

  setup() {
    const config = ref(CloudTeamConfig);
    const show = ref(false);

    return {
      show,
      config,
    }
  },
});
</script>

<style>
.team-list {
  display: flex;
  justify-content: space-between;
}
.team-list__item {
  height: 100px;
  width: 76px;
  box-sizing: border-box;
  border: 2px solid #766461;
  border-radius: 4px;
  overflow: hidden;
}
.team-list__item-name {
  line-height: 20px;
  font-size: 14px;
  text-align: center;
  background-color: #F7F1E6;
}
.team-list__item img {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
  vertical-align: middle;
  max-height: 76px;
}
</style>