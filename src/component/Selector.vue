<template>
  <div>
    <div class="pop-title">
      选择伙伴
      <span class="pop-title__close" @click="$emit('close')">返回</span>
    </div>
    <div class="selector-area">
      <Search
        background="#f7f1e6"
        shape="round"
        v-model="keyword"
        @input="onInput"
        placeholder="输入伙伴名称进行检索"
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
          <Checkbox class="element-selece__item" name="Polearms">长柄武器</Checkbox>
        </CheckboxGroup>
      </div>
      选择伙伴
      <RadioGroup class="selector" v-model="result" @change="resultChange">
        <Radio class="selector-items" v-for="(item, index) in configFilter" :name="item.name" :key="index">
          <div :class="['selector-item__avatar', getBackGroundByRarity(item.rarity)]">
            <img :src="item.icons.avatarIcon" />
          </div>
          <div :class="['logo', 'logo-' + item.element]" />
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
import { Character } from "@/constants/characters-config/character";
import { ICharacterInfo } from "@/types/interface";
import { Search, Checkbox, CheckboxGroup, RadioGroup, Radio } from "vant";
import getBackGroundByRarity from "@/utils/getBackGroundClassByRarity";

const props = defineProps({
  handleChange: Function,
  defaultName: String,
});
const keyword = ref<string>("");
const result = ref<string>("");
const element = ref([]);
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
  let res = Character;
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
    res = Character.filter((item) => item.name.indexOf(keyword.value) >= 0);
  }
  return res;
});

const resultChange = (value) => {
  if (!value || value === props.defaultName) return;
  props.handleChange(
    Character.find((item: ICharacterInfo) => {
      return value.includes(item.name);
    })
  );
  emit("close");
};

const onInput = () => {
  element.value = [];
  weapon.value = [];
};
</script>

<style src="@/assets/selector.css"></style>
