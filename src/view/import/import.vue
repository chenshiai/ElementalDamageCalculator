<script setup lang="ts">
import { ref } from "vue";
import { Field, showNotify, Button } from "vant";

import TabTitle from "@/component/TabTitle.vue";
import importData from "@/utils/enka/import";
import request from "@/request";

/** @module 数据导入 */
const uid = ref("");
const waiting = ref(0);
const interval = ref(null);
const importLoading = ref(false);
const importGameInfo = () => {
  if (!uid.value || waiting.value > 0) return;
  importLoading.value = true;
  request
    .get(`/player-info/uid/${uid.value}`)
    .then((res) => {
      if (res.data.data) {
        const avatarInfoList = res.data.data.avatarInfoList;
        if (avatarInfoList) {
          importData(res.data.data.avatarInfoList).then((nameList) => {
            showNotify({
              type: "success",
              message: `${nameList}，导入成功`,
            });
          });
        } else {
          showNotify({
            type: "warning",
            message: res.data.message,
          });
        }
        waiting.value = 30;
        interval.value = setInterval(() => {
          if (waiting.value > 0) {
            waiting.value = waiting.value - 1;
          } else {
            clearInterval(interval.value);
          }
        }, 1000);
      } else {
        showNotify({
          type: "danger",
          message: res.data.message,
        });
      }
    })
    .finally(() => {
      importLoading.value = false;
    });
  uid.value = "";
};
</script>

<template>
  <TabTitle>游戏数据导入</TabTitle>
  <br />
  <div>
    使用前请看：
    <p>
      需要先信任授权才可以使用导入服务。<br />
      <a href="https://8.155.52.59" target="_blank" rel="opener">-> 点击这里前往信任授权</a><br />
      浏览器会提示你“不安全”。选择“高级” -> “继续访问”。<br />
      <s><i>作者：低成本项目，没钱搞SSL安全证书。</i></s>
    </p>
    <p>
      导入后的数据会存在本地浏览器缓存中，可以在“角色组队计算”中填入查看。
    </p>
  </div>
  <Field class="uid-input" v-model="uid" label="UID" placeholder="输入UID" />
  <Button class="show-click" @click="importGameInfo" :disabled="waiting > 0" :loading="importLoading">
    <span>{{ waiting > 0 ? `${waiting}s后可再次获取` : "导入" }}</span>
  </Button>
</template>

<style scoped>
.uid-input {
  margin-top: 100px;
  margin-bottom: 20px;
}
.show-click {
  text-align: center;
  border: 1px solid var(--border);
  border-radius: 4px;
  margin-bottom: 16px;
  line-height: 32px;
  width: 100%;
  background-color: transparent;
}
</style>