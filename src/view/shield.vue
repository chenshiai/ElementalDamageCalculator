<template>
  <TabTitle>护盾承伤计算</TabTitle>
  <div class="tips">护盾吸收效果是护盾自身的属性，护盾强效则是被保护角色给予护盾的属性。</div>
  <div class="base-data">
    <div class="base-data-item">
      <span class="base-damage__title">基础属性值</span>
      <Stepper v-model="data.baseData" input-width="66px" integer button-size="20" theme="round" min="0" max="99999" />
      <span class="holy-relic-tips">角色的攻击力、防御力、生命值</span>
    </div>
    <div class="base-data-item">
      <span class="base-damage__title">技能倍率%</span>
      <Stepper
        v-model="data.conversionData"
        input-width="66px"
        button-size="20"
        decimal-length="2"
        theme="round"
        min="0"
      />
    </div>
    <div class="base-data-item">
      <span class="base-damage__title">固定附加值</span>
      <Stepper v-model="data.fixedData" integer input-width="66px" button-size="20" theme="round" min="0" />
      <span class="holy-relic-tips">技能倍率后面的固定值</span>
    </div>

    <div class="data-panel__title">
      元素盾类型
      <CellGroup>
        <RadioGroup style="margin-top: 12px" v-model="data.shieldType">
          <Cell title="非同元素伤害有100%吸收效果" clickable @click="changeShield(Shield.common)">
            <template #right-icon>
              <Radio :name="Shield.common" />
            </template>
          </Cell>
          <Cell clickable title="对应元素伤害有250%吸收效果" @click="changeShield(Shield.special)">
            <template #right-icon>
              <Radio :name="Shield.special" />
            </template>
          </Cell>
          <Cell clickable title="岩元素护盾有150%吸收效果" @click="changeShield(Shield.earth)">
            <template #right-icon>
              <Radio :name="Shield.earth" />
            </template>
          </Cell>
        </RadioGroup>
      </CellGroup>
    </div>
    <Cell
      @click="otherChecked = !otherChecked"
      center
      title="角色天赋、命座提升"
      is-link
      :arrow-direction="otherChecked ? 'up' : 'down'"
    />
    <div v-show="otherChecked">
      <div class="base-data-item">
        <span class="base-damage__title">天赋提高%</span>
        <Stepper v-model="data.talentData" integer input-width="66px" button-size="20" theme="round" min="0" />
        <span class="holy-relic-tips">天赋提高的吸收量</span>
      </div>
      <div class="base-data-item">
        <span class="base-damage__title">命座提高%</span>
        <Stepper v-model="data.fateData" integer input-width="66px" button-size="20" theme="round" min="0" />
        <span class="holy-relic-tips">命之座提高的吸收量</span>
      </div>
    </div>
    <div class="base-data-item">
      <span class="base-damage__title">护盾强效%</span>
      <Stepper v-model="data.shieldStrong" integer input-width="66px" button-size="20" theme="round" min="0" />
      <span class="holy-relic-tips">被保护角色的护盾强效</span>
    </div>
    <Slider v-model="data.shieldStrong" :max="200" />
  </div>
  <div class="shield-data">可吸收【{{ shieldData }}】点伤害</div>
  <div class="detail">
    在当前吸收效果与护盾强效的加持下：
    <br />
    可看做护盾拥有<span class="more-rate">{{ shieldRemission }}%</span>的伤害减免
    <br />
    使得每1点护盾值可吸收<span class="more-rate">{{ shieldConversion }}</span
    >点伤害
  </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import TabTitle from "../component/TabTitle.vue";
import { CellGroup, Cell, Slider, Stepper, Radio, RadioGroup } from "vant";

const otherChecked = ref(false);
const data = reactive({
  shieldType: "common",
  shieldStrong: 0,

  baseData: 0,
  conversionData: 0,
  fixedData: 0,
  talentData: 0,
  fateData: 0,
});

// 护盾转换
const Shield = {
  common: "common",
  earth: "earth",
  special: "special",
};
const ShieldRate = {
  [Shield.common]: 1,
  [Shield.earth]: 1.5,
  [Shield.special]: 2.5,
};
const shieldConversion = computed(() => {
  return (1 * ShieldRate[data.shieldType] * (1 + data.shieldStrong / 100)).toFixed(2);
});

// 护盾减免率
const shieldRemission = computed(() => {
  return (100 - 100 / (ShieldRate[data.shieldType] * (1 + data.shieldStrong / 100))).toFixed(2);
});

const changeShield = (type) => {
  data.shieldType = type;
};

const shieldData = computed(() => {
  return Math.round(
    ((data.baseData * data.conversionData) / 100 + data.fixedData) *
      (1 + data.talentData / 100) *
      (1 + data.fateData / 100) *
      shieldConversion.value
  );
});
</script>
