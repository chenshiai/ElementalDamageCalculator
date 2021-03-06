<template>
  <div class="tips">
    官方未公开计算公式，存在一定的误差。精通伤害没计算敌人抗性，实际值请以游戏内为准，仅供参考。
  </div>
  <tab-title>剧变反应查看</tab-title>
  <div class="base-data">
    <div class="base-damage__title">
      角色等级
      <van-stepper
        v-model="data.level"
        input-width="46px"
        integer
        button-size="20"
        theme="round"
        min="1"
        max="90"
      />
      <span class="holy-relic-tips">点击数字可以手动输入</span>
    </div>
    <div class="base-damage__title">
      元素精通
      <van-stepper
        v-model="data.elementalMystery"
        integer
        input-width="46px"
        button-size="20"
        theme="round"
        min="0"
      />
      <span class="holy-relic-tips">滑块最大值为2000</span>
    </div>
    <van-slider
      v-model="data.elementalMystery"
      :max="2000"
      active-color="#645856"
    />
  </div>
  <div class="holy-relic">
    <div class="holy-relic__title">
      圣遗物套装
      <span class="holy-relic-tips">点击选择，再次点击可以取消选择</span>
    </div>
    <div class="holy-relic__check">
      <span
        :class="[
          'holy-relic-content',
          'witch',
          data.check === 'witch' && 'active',
        ]"
        @click="changeCheck('witch')"
      >
        <img class="holy-relic__img" src="../assets/witch.png" />
        炽烈的炎之魔女
      </span>
      <span
        :class="[
          'holy-relic-content',
          'thunder',
          data.check === 'thunder' && 'active',
        ]"
        @click="changeCheck('thunder')"
      >
        <img class="holy-relic__img" src="../assets/thunder.png" />
        如雷的盛怒
      </span>
      <span
        :class="[
          'holy-relic-content',
          'emerald',
          data.check === 'emerald' && 'active',
        ]"
        @click="changeCheck('emerald')"
      >
        <img class="holy-relic__img" src="../assets/emerald.png" />
        翠绿之影
      </span>
    </div>
  </div>
  <detail-block>
    增幅反应伤害提升{{ Rate }}%<span class="more-rate">{{ moreRate }}</span>
    <br />
    剧变反应伤害提升{{ servitude }}%
    <span class="more-rate">{{ servitudeMoreRate }}</span>
    <br />
    结晶反应护盾提升{{ crystallization }}%
  </detail-block>
  <div class="result">
    <div class="damage-tag" v-for="(item, index) in demageResult" :key="index">
      <span :class="['damage-tag__title', item.class]">{{ item.name }}</span>{{ item.detail }}
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, reactive, ref } from "vue";
import { base as Base, WITCH, THUNDER, EMERALD } from "../constant";
import { calculate } from "../utils";
import TabTitle from "../component/TabTitle.vue";
import DetailBlock from "../component/Detail.vue";
import { Slider, Stepper } from "vant";

export default defineComponent({
  name: "elemental-damage-calculator",
  components: {
    [Slider.name]: Slider,
    [Stepper.name]: Stepper,
    [TabTitle.name]: TabTitle,
    [DetailBlock.name]: DetailBlock,
  },
  setup() {
    const data = reactive({
      elementalMystery: 786,
      level: 80,
      base: Base,
      check: "",
    });

    // 增幅倍率
    const Rate = computed(() => {
      return (calculate(data.elementalMystery)).toFixed(1);
    });

    // 聚变倍率
    const servitude = computed(() => {
      return (calculate(data.elementalMystery) / 5 * 12).toFixed(1);
    });

    // 结晶倍率
    const crystallization = computed(() => {
      return ((calculate(data.elementalMystery) / 5 * 8)).toFixed(1);
    });

    const moreRate = computed(() => {
      if (data.check === WITCH) {
        return " +15%";
      }
      return "";
    });

    const servitudeMoreRate = computed(() => {
      if (data.check === THUNDER) {
        return " 超载/超导/感电+40%"
      }
      if (data.check === WITCH) {
        return " 超载+40%"
      }
      if (data.check === EMERALD) {
        return " 扩散+60%";
      }
      return "";
    });

    // 聚变反应伤害公式
    const calculateDamage = (baseDamage) => {
      return Math.round(
        baseDamage * (1 + calculate(data.elementalMystery) / 5 * 12 / 100)
      );
    };

    // 感电伤害值
    const electroChargedDamage = computed(() => {
      const basenumber = Base.electroCharged[data.level];
      const r = calculateDamage(basenumber);
      if (data.check === THUNDER) return Math.round(basenumber * 0.4) + r;
      return r;
    });

    // 超载伤害值
    const overloadDamage = computed(() => {
      const basenumber = Base.overload[data.level];
      const r = calculateDamage(basenumber);
      if (data.check === THUNDER || data.check === WITCH)
        return Math.round(basenumber * 0.4) + r;
      return r;
    });

    // 碎冰伤害值
    const crushedIceDamage = computed(() => {
      return calculateDamage(Base.crushedIce[data.level]);
    });

    // 扩散伤害值
    const diffuseDamage = computed(() => {
      const basenumber = Base.diffuse[data.level];
      if (data.check === EMERALD)
        return Math.round(basenumber * 0.6) + calculateDamage(basenumber);
      return calculateDamage(basenumber);
    });

    // 超导伤害值
    const superconductDamage = computed(() => {
      const basenumber = Base.superconduct[data.level];
      const r = calculateDamage(basenumber);
      if (data.check === THUNDER) return Math.round(basenumber * 0.4) + r;
      return r;
    });

    // 结晶数值
    const crystallizeValue = computed(() => {
      if (Base.crystallize[data.level]) {
        return Math.round(
          Base.crystallize[data.level] *
            (1 + (calculate(data.elementalMystery) / 5 * 8 / 100))
        );
      }
      return '无数据';
    });

    const changeCheck = (relic) => {
      if (data.check === relic) {
        data.check = "";
      } else {
        data.check = relic;
      }
    };

    const demageResult = computed(() => {
      return [
        {
          name: "感电",
          class: "elector",
          detail: electroChargedDamage.value,
        },
        {
          name: "超载",
          class: "overload",
          detail: overloadDamage.value,
        },
        {
          name: "碎冰",
          class: "crushe-ice",
          detail: crushedIceDamage.value,
        },
        {
          name: "扩散",
          class: "diffuse",
          detail: diffuseDamage.value,
        },
        {
          name: "超导",
          class: "superconduct",
          detail: superconductDamage.value,
        },
        {
          name: "结晶",
          class: "crystallize",
          detail: crystallizeValue.value,
        },
      ];
    });

    return {
      data,
      Rate,
      servitude,
      crystallization,
      demageResult,
      crystallizeValue,
      changeCheck,
      moreRate,
      servitudeMoreRate,
    };
  },
});
</script>

<style>
.base-data {
  line-height: 24px;
}

.base-data .van-stepper--round .van-stepper__minus {
  color: #997874;
  border-color: #997874;
}
.base-data .van-stepper--round .van-stepper__plus {
  border: none;
  color: #fff;
  background-color: #997874;
}

.base-data .van-stepper.van-stepper--round {
  margin-left: 18px;
}

.van-slider {
  margin-bottom: 22px;
}

.holy-relic {
  margin-top: 24px;
  margin-bottom: 16px;
}

.holy-relic-tips {
  font-size: 12px;
  margin-left: 4px;
  color: #928986;
}

.question-title,
.data-panel__title,
.holy-relic__title,
.base-damage__title,
.cloud-team__title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
}

.elemental-slider-button {
  background-color: #766461;
  color: #fff;
  padding: 2px 4px;
  border-radius: 4px;
}

.holy-relic__title {
  margin-bottom: 12px;
}

.base-damage__input {
  line-height: 24px;
  width: 80px;
  font-size: 16px;
  font-weight: bold;
  box-sizing: border-box;
}

.holy-relic__check {
  display: flex;
}

.holy-relic-content {
  display: inline-block;
  flex: 1;
  text-align: center;
  padding: 0 6px;
  font-size: 14px;
}

.holy-relic__img {
  width: 100%;
}

.damage-tag {
  line-height: 20px;
  border-bottom: 2px solid #997874;
  font-weight: bold;
  margin-bottom: 12px;
  min-width: 30%;
}

.damage-tag__title {
  margin-right: 6px;
  font-size: 24px;
}

.more-rate {
  color: #2ee27f;
}

.elector {
  color: #bd00bd;
}

.overload {
  color: #c9295e;
}

.crushed-ice {
  color: #86898b;
}

.diffuse {
  color: #7ef1b2;
}

.superconduct {
  color: #7ee9f1;
}

.crystallize {
  color: #b48f14;
}

.witch {
  opacity: 0.5;
  color: #f51e1e;
}

.thunder {
  opacity: 0.5;
  color: #ce1dfa;
}

.emerald {
  opacity: 0.5;
  color: #2ee27f;
}

.active {
  opacity: 1;
}

.result {
  margin-bottom: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
