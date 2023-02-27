<template>
  <tab-title>护盾能抗多少</tab-title>
  <div class="tips">
    护盾吸收效果是护盾自身的属性，护盾强效则是被保护角色给予护盾的属性。
  </div>
  <div class="base-data">
    <div class="base-data-item">
      <span class="base-damage__title">基础属性值</span>
      <van-stepper
        v-model="data.baseData"
        input-width="66px"
        integer
        button-size="20"
        theme="round"
        min="0"
        max="99999"
      />
      <span class="holy-relic-tips">角色的防御力、生命值</span>
    </div>
    <div class="base-data-item">
      <span class="base-damage__title">转化倍率%</span>
      <van-stepper
        v-model="data.conversionData"
        input-width="66px"
        button-size="20"
        decimal-length="2"
        theme="round"
        min="0"
      />
      <span class="holy-relic-tips">对应基础属性的百分比</span>
    </div>
    <div class="base-data-item">
      <span class="base-damage__title">固定附加值</span>
      <van-stepper
        v-model="data.fixedData"
        integer
        input-width="66px"
        button-size="20"
        theme="round"
        min="0"
      />
      <span class="holy-relic-tips">跟在倍率后面的固定值</span>
    </div>
    <div class="data-panel__title">
      元素盾类型
      <van-cell-group>
        <van-radio-group style="margin-top: 12px" v-model="shieldType">
          <van-cell
            title="非同元素伤害有100%吸收效果"
            clickable
            @click="changeShield(Shield.common)"
          >
            <template #right-icon>
              <van-radio :name="Shield.common" checked-color="#766461" />
            </template>
          </van-cell>
          <van-cell
            clickable
            title="对应元素伤害有250%吸收效果"
            @click="changeShield(Shield.special)"
          >
            <template #right-icon>
              <van-radio :name="Shield.special" checked-color="#766461" />
            </template>
          </van-cell>
          <van-cell
            clickable
            title="岩元素护盾有150%吸收效果"
            @click="changeShield(Shield.earth)"
          >
            <template #right-icon>
              <van-radio :name="Shield.earth" checked-color="#766461" />
            </template>
          </van-cell>
        </van-radio-group>
      </van-cell-group>
    </div>
    <van-cell
      class="eva-cell"
      @click="otherChecked = !otherChecked"
      center
      title="角色天赋、命座提升"
      is-link
      :arrow-direction="otherChecked ? 'up' : 'down'"
    />
    <div v-show="otherChecked">
      <div class="base-data-item">
        <span class="base-damage__title">天赋提高%</span>
        <van-stepper
          v-model="data.talentData"
          integer
          input-width="66px"
          button-size="20"
          theme="round"
          min="0"
        />
        <span class="holy-relic-tips">天赋提高的吸收量</span>
      </div>
      <div class="base-data-item">
        <span class="base-damage__title">命座提高%</span>
        <van-stepper
          v-model="data.fateData"
          integer
          input-width="66px"
          button-size="20"
          theme="round"
          min="0"
        />
        <span class="holy-relic-tips">命之座提高的吸收量</span>
      </div>
    </div>
    <div class="base-data-item">
      <span class="base-damage__title">护盾强效%</span>
      <van-stepper
        v-model="data.shieldStrong"
        integer
        input-width="66px"
        button-size="20"
        theme="round"
        min="0"
      />
      <span class="holy-relic-tips">被保护角色的护盾强效</span>
    </div>
    <van-slider v-model="data.shieldStrong" :max="200" active-color="#645856" />
  </div>
  <div class="shield-data">可吸收【{{ shieldData }}】点伤害</div>
  <detail-block keep>
    在当前吸收效果与护盾强效的加持下：
    <br />
    可看做护盾拥有<span class="more-rate">{{ shieldRemission }}%</span>的伤害减免
    <br />
    使得每1点护盾值可吸收<span class="more-rate">{{ shieldConversion }}</span>点伤害
  </detail-block>
</template>

<script>
import { computed, defineComponent, reactive, toRefs, ref } from "vue";
import TabTitle from "../component/TabTitle.vue";
import DetailBlock from "../component/Detail.vue";
import { CellGroup, Cell, Slider, Stepper, RadioGroup, Radio } from "vant";

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

export default defineComponent({
  name: "elemental-damage-calculator",
  components: {
    [Cell.name]: Cell,
    [Slider.name]: Slider,
    [Stepper.name]: Stepper,
    [TabTitle.name]: TabTitle,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
    [CellGroup.name]: CellGroup,
    [DetailBlock.name]: DetailBlock,
  },
  setup() {
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
    const shieldConversion = computed(() => {
      return (
        1 *
        ShieldRate[data.shieldType] *
        (1 + data.shieldStrong / 100)
      ).toFixed(2);
    });

    // 护盾减免率
    const shieldRemission = computed(() => {
      return (
        100 -
        100 / (ShieldRate[data.shieldType] * (1 + data.shieldStrong / 100))
      ).toFixed(2);
    });

    const changeShield = (type) => {
      data.shieldType = type;
    };

    const shieldData = computed(() => {
      return Math.round(
          (data.baseData * data.conversionData / 100 + data.fixedData)
          * (1 + data.talentData / 100)
          * (1 + data.fateData / 100)
          * shieldConversion.value
        );
    });

    return {
      data,
      ...toRefs(data),
      otherChecked,
      Shield,
      changeShield,
      shieldRemission,
      shieldConversion,
      shieldData,
    };
  },
});
</script>
