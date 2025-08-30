<script setup lang="ts">
import { Field, Button } from "vant";

import TabTitle from "@/component/TabTitle.vue";
import useImport from "@/utils/enka/useImport";

const { uid, waiting, importLoading, importGameInfo } = useImport();
</script>

<template>
  <TabTitle>游戏数据导入</TabTitle>
  <br />
  <div>
    使用前请看：
    <p>
      需要先信任授权才可以使用导入服务。<br />
      <a :href="`https://8.155.52.59?time=${Date.now()}`" rel="opener">-> 点击这里前往信任授权</a><br />
      浏览器会提示你“不安全”。选择“高级” -> “继续访问”。<br />
      <i>作者：低成本项目，没钱搞SSL安全证书。</i>
    </p>
    <p>
      导入后的数据会存在本地浏览器缓存中，可以在<router-link to="/cloud-team">【角色组队计算】</router-link>中填入查看。
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
