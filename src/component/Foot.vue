<template>
  <div class="foot">
    <div class="foot-title" @click="show = !show">更新日志</div>
    <div class="foot-title" @click="showAuthor = !showAuthor">联系作者</div>
  </div>
  <Popup teleport="#app" position="bottom" v-model:show="show" class="foot-popup">
    <p v-for="item in updateLog">
      <span>{{ item.data }}</span><br />
      <span v-for="(msg, index) in item.msg">
        {{ `${index + 1}、${msg}` }}
        <br />
      </span>
    </p>
  </Popup>
  <Popup teleport="#app" position="bottom" v-model:show="showAuthor" class="foot-popup" style="height: 20%">
    你可以通过以下平台联系作者
    <div class="foot-popup-name">
      <a href="https://www.miyoushe.com/ys/accountCenter/postList?id=139610391" target="_blank">
        <img src="/img/mhy.jpg" />
      </a>
      <a href="https://space.bilibili.com/76824065" target="_blank">
        <img src="/img/OIP-C.jpg" />
      </a>
      <a href="https://github.com/chenshiai/ElementalDamageCalculator" target="_blank">
        <img src="/img/git.png">
      </a>
      @ChenShiAi
    </div>
  </Popup>
</template>

<script setup>
import { Popup } from "vant";
import { ref } from "vue";

const updateLog = window.updateLog;
const show = ref(false);
const showAuthor = ref(false);
</script>

<style>
.foot {
  display: flex;
  align-content: space-between;
  font-size: 14px;
}

.foot-title {
  flex: 1;
  text-align: center;
  line-height: 60px;
  margin-bottom: 30px;
}

.foot-popup-name img {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  margin-right: 16px;
  vertical-align: middle;
  box-shadow: var(--main-text) 0 2px 6px 0px;
}

.foot-popup {
  padding: 16px;
  box-sizing: border-box;
  height: 55%;
}

.foot-popup-name {
  line-height: 48px;
}
</style>