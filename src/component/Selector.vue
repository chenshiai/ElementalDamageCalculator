<template>
  <div>
    <div class="pop-title">
      <span class="pop-title__click">已选择({{ result.length }}/{{ maxSelect }})</span>
      选择伙伴
      <span class="pop-title__close" @click="$emit('close')">返回</span>
      <span class="pop-title__clear" @click="resultChange([])">清空</span>
    </div>
    <div class="selector-area">
      <Search
        background="#f7f1e6"
        shape="round"
        v-model="keyword"
        @input="onInput"
        placeholder="请输入伙伴名称"
      />
      <div class="selector-block">
        元素属性<span class="holy-relic-tips">（可多选）</span>
        <CheckboxGroup class="check-area element-select" v-model="element">
          <Checkbox class="element-selece__item" name="Pyro">火</Checkbox>
          <Checkbox class="element-selece__item" name="Anemo">风</Checkbox>
          <Checkbox class="element-selece__item" name="Geo">岩</Checkbox>
          <Checkbox class="element-selece__item" name="Electro">雷</Checkbox>
          <Checkbox class="element-selece__item" name="Hydro">水</Checkbox>
          <Checkbox class="element-selece__item" name="Cryo">冰</Checkbox>
          <Checkbox class="element-selece__item" name="Dendro">草</Checkbox>
        </CheckboxGroup>
      </div>
      <div class="selector-block">
        使用武器<span class="holy-relic-tips">（可多选）</span>
        <CheckboxGroup class="check-area element-select" v-model="weapon">
          <Checkbox class="element-selece__item" name="Sword">单手剑</Checkbox>
          <Checkbox class="element-selece__item" name="GreatSword">双手剑</Checkbox>
          <Checkbox class="element-selece__item" name="Bow">弓</Checkbox>
          <Checkbox class="element-selece__item" name="Magic">法器</Checkbox>
          <Checkbox class="element-selece__item" name="LonGarm">长柄武器</Checkbox>
        </CheckboxGroup>
      </div>
      选择伙伴<span class="holy-relic-tips">（可多选）</span>
      <CheckboxGroup class="selector" v-model="result" :max="maxSelect"  @change="resultChange">
        <Checkbox
          class="selector-items"
          v-for="(item, index) in configFilter"
          :name="item.name"
          :key="index"
        >
          <div class="selector-item__avatar">
            <img :src="item.avatar" />
          </div>
          <div :class="['logo', 'logo-' + item.element]" />
          <span class="selector-item__name">{{ item.name }}</span>
        </Checkbox>
        <div class="selector-items placeholder"></div>
        <div class="selector-items placeholder"></div>
        <div class="selector-items placeholder"></div>
        <div class="selector-items placeholder"></div>
      </CheckboxGroup>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, computed } from "vue";
import { CloudTeamConfig } from "@/assets/CloudTeamConfig";
import { Search, Checkbox, CheckboxGroup } from "vant";

const keyword = ref("");
const result = ref([]);
const element = ref([]);
const weapon= ref([]);

const configFilter = computed(() => {
  let res = CloudTeamConfig;
  // 筛选元素
  if (element.value.length > 0) {
    res = res.filter((item) => element.value.indexOf(item.element) >= 0);
  }
  // 筛选武器类型
  if (weapon.value.length > 0) {
    res = res.filter((item) => weapon.value.indexOf(item.weapon) >= 0);
  }
  // 搜索关键字
  if (keyword.value) {
    res = CloudTeamConfig.filter((item) => item.name.indexOf(keyword.value) >= 0);
  }
  return res;
});

const resultChange = (value) => {
  result.value = value;
  props.handleChange(CloudTeamConfig.filter((item) => {
    return value.includes(item.name);
  }))
};

const onInput = () => {
  element.value = [];
  weapon.value = [];
};

const props = defineProps({
  handleChange: Function,
  maxSelect: {
      type: Number,
      default() {
        return 4;
      }
    },
})
</script>

<style>
.pop-title {
  position: relative;
  text-align: center;
  line-height: 46px;
  background-color: #fff;
  padding: 0 16px;
  box-sizing: border-box;
  width: 100%;
  z-index: 1;
}
.pop-title__click {
  float: left;
}
.pop-title__close {
  float: right;
  margin-left: 12px;
  color: rgb(255, 82, 82);
}
.pop-title__clear {
  float: right;
}
.selector-area {
  background-color: var(--light-text);
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
.van-search__content.van-search__content--round {
  background-color: #eee7db;
}
.selector,
.selector-block .check-area {
  margin-top: 8px;
}
.check-area.element-select {
  display: flex;
  flex-wrap: wrap;
  color: var(--main-text);
  justify-content: space-between;
}
.element-selece__item {
  width: 26%;
  border: 1px solid var(--main-text);
  margin-bottom: 8px;
  border-radius: 4px;
}
.element-selece__item[aria-checked="true"] {
  background-color: var(--main-text);
}
.element-selece__item[aria-checked="true"] .van-checkbox__label {
  color: #fff;
}
.element-selece__item .van-checkbox__label {
  line-height: 32px;
  text-align: center;
  color: var(--main-text);
  display: block;
  width: 100%;
}
.selector-items {
  position: relative;
  width: 86px;
  text-align: center;
  margin-bottom: 44px;
  border-radius: 4px;
  background-color: #eee2c7;
  box-shadow: 2px 2px 8px #bebebe;
}
.selector-items.placeholder {
  visibility: hidden;
}
.check-area.element-select .van-checkbox__icon,
.selector-items .van-checkbox__icon {
  display: none;
}
.selector-items.van-checkbox {
  overflow: visible !important;
}
.selector-items[aria-checked="true"] {
  box-shadow: 0 0 10px #818181;
}
.selector-items[aria-checked="true"]::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  border: 2px solid #998974;
}
.selector-items[aria-checked="true"]::before {
  content: "";
  position: absolute;
  right: -8px;
  top: -8px;
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  border: 4px solid #998974;
  background-color: #fff;
  z-index: 2;
}
.selector-block {
  margin-bottom: 10px;
}
.selector-block .van-checkbox__label,
.selector-items .van-checkbox__label {
  margin: 0;
  width: 100%;
}
.selector-item__avatar {
  width: 100%;
  background-color: #fff;
  border-radius: 4px 4px 26px 0;
  overflow: hidden;
}
.selector-item__avatar img {
  position: relative;
  width: 100%;
  display: inline-block;
  vertical-align: middle;
  height: 86px;
}
.selector-items .logo {
  width: 100%;
  height: 26px;
  background-repeat: no-repeat;
  background-position: center center;
}

.selector-items .logo::after {
  position: absolute;
  display: block;
  width: 100%;
  opacity: 0.5;
  color: #ffffff;
}
.selector-item__name {
  position: absolute;
  display: inline-block;
  width: 100%;
  transform: translateX(-50%);
  bottom: -26px;
  left: 50%;
  font-size: 14px;
}
.selector-items[aria-checked="true"] .selector-item__name {
  background-color: #998974;
  color: #ffffff;
  border-radius: 4px;
}
.logo-Pyro {
  position: relative;
  background-image: url("/pyro.png");
  background-size: 22px;
}
.logo-Pyro::after {
  content: "Pyro";
}
.logo-Hydro {
  background-image: url("/hydro.png");
  background-size: 22px;
}
.logo-Hydro::after {
  content: "Hydro";
}
.logo-Cryo {
  background-image: url("/cryo.png");
  background-size: 22px;
}
.logo-Cryo::after {
  content: "Cryo";
}
.logo-Electro {
  background-image: url("/electro.png");
  background-size: 22px;
}
.logo-Electro::after {
  content: "Electro";
}
.logo-Geo {
  background-image: url("/geo.png");
  background-size: 22px;
}
.logo-Geo::after {
  content: "Geo";
}
.logo-Anemo {
  background-image: url("/anemo.png");
  background-size: 22px;
}
.logo-Anemo::after {
  content: "Anemo";
}
.logo-Dendro {
  background-image: url("/dendro.png");
  background-size: 22px;
}
.logo-Dendro::after {
  content: "Dendro";
}
</style>