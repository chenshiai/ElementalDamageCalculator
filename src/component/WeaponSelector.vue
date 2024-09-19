<template>
  <div>
    <div class="pop-title">
      选择武器
      <span class="pop-title__close" @click="$emit('close')">返回</span>
    </div>
    <div class="selector-area">
      <Search background="#f7f1e6" shape="round" v-model="keyword" @input="onInput" placeholder="输入武器名称进行检索" />
      <div class="selector-block">
        武器类型<span class="holy-relic-tips">（可多选）</span>
        <CheckboxGroup class="check-area element-select" v-model="weapon">
          <Checkbox class="element-selece__item" name="Sword">单手剑</Checkbox>
          <Checkbox class="element-selece__item" name="GreatSword">双手剑</Checkbox>
          <Checkbox class="element-selece__item" name="Bow">弓</Checkbox>
          <Checkbox class="element-selece__item" name="Magic">法器</Checkbox>
          <Checkbox class="element-selece__item" name="Polearms">长柄武器</Checkbox>
        </CheckboxGroup>
      </div>
      <div class="selector-block">
        武器稀有度<span class="holy-relic-tips">（可多选）</span>
        <CheckboxGroup class="check-area element-select" v-model="rarity">
          <Checkbox class="element-selece__item" :name="4">五星</Checkbox>
          <Checkbox class="element-selece__item" :name="3">四星</Checkbox>
          <Checkbox class="element-selece__item" :name="2">三星</Checkbox>
          <Checkbox class="element-selece__item" :name="1">二星</Checkbox>
          <Checkbox class="element-selece__item" :name="0">一星</Checkbox>
        </CheckboxGroup>
      </div>
      选择武器
      <CheckboxGroup class="selector" v-model="result" :max="maxSelect" @change="resultChange">
        <Checkbox class="selector-items" v-for="(item, index) in configFilter" :name="item.name" :key="index">
          <div :class="['selector-item__avatar', getBackGroundByRarity(item.rarity)]">
            <img :src="item.icon" />
          </div>
          <div :class="['logo', 'logo-' + item.weaponType]"></div>
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

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Weapons } from "@/constants/characters-config/weapon";
import { IWeaponInfo } from '@/constants/characters-config/interface';
import { Search, Checkbox, CheckboxGroup } from 'vant';
import getBackGroundByRarity from '@/utils/getBackGroundClassByRarity';

const props = defineProps({
  handleChange: Function,
  maxSelect: {
    type: Number,
    default() {
      return 4;
    },
  },
});
const keyword = ref('');
const result = ref([]);
const rarity = ref([]);
const weapon = ref([]);
const emit = defineEmits(['close']);

const configFilter = computed(() => {
  let res = Weapons;
  // 筛选元素
  if (rarity.value.length > 0) {
    res = res.filter((item) => rarity.value.indexOf(item.rarity) >= 0);
  }
  // 筛选武器类型
  if (weapon.value.length > 0) {
    res = res.filter((item) => weapon.value.indexOf(item.weaponType) >= 0);
  }
  // 搜索关键字
  if (keyword.value) {
    res = Weapons.filter((item) => item.name.indexOf(keyword.value) >= 0);
  }
  return res;
});

const resultChange = (value) => {
  result.value = value;
  props.handleChange(
    Weapons.filter((item: IWeaponInfo) => {
      return value.includes(item.name);
    })
  );
  if (props.maxSelect === 1 && result.value.length > 0) {
    emit('close');
  }
};

const onInput = () => {
  rarity.value = [];
  weapon.value = [];
};

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

.element-selece__item[aria-checked='true'] {
  background-color: var(--main-text);
}

.element-selece__item[aria-checked='true'] .van-checkbox__label {
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

.selector-items[aria-checked='true'] {
  box-shadow: 0 0 10px #818181;
}

.selector-items[aria-checked='true']::after {
  content: '';
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

.selector-items[aria-checked='true']::before {
  content: '';
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

.selector-items[aria-checked='true'] .selector-item__name {
  background-color: #998974;
  color: #ffffff;
  border-radius: 4px;
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
  font-size: 12px;
}
.logo-Sword {
  position: relative;
  background-size: 22px;
}

.logo-Sword::after {
  content: 'Sword';
}

.logo-GreatSword {
  background-size: 22px;
}

.logo-GreatSword::after {
  content: 'GreatSword';
}

.logo-Bow {
  background-size: 22px;
}

.logo-Bow::after {
  content: 'Bow';
}

.logo-Magic {
  background-size: 22px;
}

.logo-Magic::after {
  content: 'Magic';
}

.logo-Polearms {
  background-size: 22px;
}

.logo-Polearms::after {
  content: 'Polearms';
}
</style>
