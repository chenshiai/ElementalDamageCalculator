<template>
  <div>
    <div class="pop-title">选择伙伴</div>
    <div class="selector-area">
      <van-search
        class="selector-input"
        background="#f7f1e6"
        shape="round"
        v-model="value"
        placeholder="请输入伙伴名称"
      />
      <div class="selector-block">
        元素属性<span class="holy-relic-tips">（可多选）</span>
        <div class="check-area">123123</div>
      </div>
      <div class="selector-block">
        使用武器<span class="holy-relic-tips">（可多选）</span>
        <div class="check-area">123123</div>
      </div>
      <div class="selector">
        <div
          class="selector-items"
          v-for="(item, index) in config"
          :key="index"
        >
          <div class="selector-item__avatar">
            <img :src="item.avatar" />
          </div>
          <div class="selector-item__name">
            {{ item.name }}
          </div>
          <div :class="['logo', 'logo-' + item.element]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import TabTitle from "./TabTitle.vue";
import { CloudTeamConfig } from "../../public/CloudTeamConfig";
import { Search } from "vant";

export default defineComponent({
  name: "selector",

  components: {
    [Search.name]: Search,
    [TabTitle.name]: TabTitle,
  },

  setup() {
    const config = ref(CloudTeamConfig);

    return {
      config,
    };
  },
});
</script>

<style>
.pop-title {
  text-align: center;
  line-height: 46px;
  background-color: #fff;
  width: 100%;
  z-index: 1;
}
.selector-area {
  background-color: #f7f1e6;
  padding: 16px 16px 90px 16px;
  height: calc(100vh - 46px);
  box-sizing: border-box;
  overflow-y: scroll;
}
.selector {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.selector-area .selector-input {
  padding: 0;
  width: 100%;
  margin-bottom: 26px;
}
.van-search__content.van-search__content--round {
  background-color: #eee7db;
}
.selector-block .check-area {
  margin-top: 4px;
}
.selector-items {
  position: relative;
  width: 26%;
  text-align: center;
  margin-bottom: 30px;
  border-radius: 4px;
  overflow: hidden;
  background-color: #eee2c7;
  box-shadow: 2px 2px 8px #bebebe;
}
.selector-items img {
  position: relative;
  width: 86px;
  display: inline-block;
  vertical-align: middle;
  height: 86px;
}
.selector-item__avatar {
  background-color: #fff;
  border-radius: 0 0 26px 0;
  overflow: hidden;
}
/* .selector-items::after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(135deg, #eee2c7, transparent, transparent, transparent, transparent);
  top: 0;
} */
.selector-items .logo {
  position: absolute;
  width: 22px;
  height: 22px;
  left: 0;
  top: 0;
  z-index: 1;
}
.logo-Pyro {
  background-image: url("../../pyro.png");
  background-size: 22px;
}
.logo-Hydro {
  background-image: url("../../hydro.png");
  background-size: 22px;
}
.logo-Cryo {
  background-image: url("../../cryo.png");
  background-size: 22px;
}
.logo-Electro {
  background-image: url("../../electro.png");
  background-size: 22px;
}
.logo-Geo {
  background-image: url("../../geo.png");
  background-size: 22px;
}
.logo-Anemo {
  background-image: url("../../anemo.png");
  background-size: 22px;
}
</style>