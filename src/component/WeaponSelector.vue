<template>
  <div>
    <div class="pop-title">
      选择武器
      <span class="pop-title__close" @click="$emit('close')">返回</span>
    </div>
    <div class="selector-area">
      <Search
        background="#f7f1e6"
        shape="round"
        v-model="keyword"
        @input="onInput"
        placeholder="输入武器名称进行检索"
      />
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
      <RadioGroup class="selector" v-model="result" @change="resultChange">
        <Radio class="selector-items" v-for="(item, index) in configFilter" :name="item.name" :key="index">
          <div :class="['selector-item__avatar', getBackGroundByRarity(item.rarity)]">
            <img v-lazy="item.icon" />
          </div>
          <div :class="['logo', 'logo-' + item.weaponType]"></div>
          <span class="selector-item__name">{{ item.name }}</span>
        </Radio>
        <div class="selector-items placeholder"></div>
        <div class="selector-items placeholder"></div>
        <div class="selector-items placeholder"></div>
        <div class="selector-items placeholder"></div>
      </RadioGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { Weapons } from "@/constants/weapon-config/weapon";
import { IWeaponInfo } from "@/types/interface";
import { Search, Checkbox, CheckboxGroup, RadioGroup, Radio } from "vant";
import getBackGroundByRarity from "@/utils/get-color";

const props = defineProps({
  handleChange: Function,
  defaultName: String,
});

const keyword = ref<string>("");
const result = ref<string>("");
const rarity = ref([]);
const weapon = ref([]);
const emit = defineEmits(["close"]);

watch(
  () => props.defaultName,
  () => {
    if (props.defaultName !== result.value) {
      result.value = props.defaultName;
    }
  }
);
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
  props.handleChange(
    Weapons.find((item: IWeaponInfo) => {
      return value.includes(item.name);
    })
  );
  emit("close");
};

const onInput = () => {
  rarity.value = [];
  weapon.value = [];
};
</script>

<style src="@/assets/selector.css"></style>
