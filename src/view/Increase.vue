<template>
  <tab-title>伤害计算</tab-title>
  <van-cell class="eva-cell" center title="开启滑块辅助调整数值">
    <template #right-icon>
      <van-switch
        v-model="sliderChecked"
        active-color="#766461"
        inactive-color="#b7a19e"
        size="16"
      />
    </template>
  </van-cell>
  <div class="data-panel">
    <div class="data-panel__title">
      基础攻击力
      <van-stepper
        v-model="data.baseATK"
        integer
        button-size="20"
        theme="round"
        min="0"
      />
      <span class="holy-relic-tips">人物面板攻击力白字</span>
    </div>
    <van-slider
      v-show="sliderChecked"
      v-model="data.baseATK"
      :max="1200"
      active-color="#645856"
    >
      <template #button>
        <div class="elemental-slider-button">{{ data.baseATK }}</div>
      </template>
    </van-slider>
    <div class="data-panel__title">
      额外攻击力
      <van-stepper
        v-model="data.extraATK"
        integer
        button-size="20"
        theme="round"
        min="0"
      />
      <span class="holy-relic-tips">人物面板攻击力绿字</span>
    </div>
    <van-slider
      v-show="sliderChecked"
      v-model="data.extraATK"
      :max="3000"
      active-color="#645856"
    >
      <template #button>
        <div class="elemental-slider-button">{{ data.extraATK }}</div>
      </template>
    </van-slider>

    <div class="data-panel__title">
      暴击伤害%
      <van-stepper
        v-model="data.critDemage"
        button-size="20"
        theme="round"
        min="50"
        decimal-length="1"
        input-width="40px"
      />
      <span class="holy-relic-tips">小数位需要手动输入，下同</span>
    </div>
    <van-slider
      v-show="sliderChecked"
      v-model="data.critDemage"
      :max="600"
      :min="50"
      step="0.1"
      active-color="#645856"
    >
      <template #button>
        <div class="elemental-slider-button">
          {{ (+data.critDemage).toFixed(1) }}
        </div>
      </template>
    </van-slider>

    <div class="data-panel__title">
      伤害加成%
      <van-stepper
        v-model="data.elementDemage"
        button-size="20"
        theme="round"
        min="0"
        input-width="40px"
        decimal-length="1"
      />
      <span class="holy-relic-tips">注意区分伤害加成类型</span>
    </div>
    <van-slider
      v-show="sliderChecked"
      v-model="data.elementDemage"
      :max="600"
      step="0.1"
      active-color="#645856"
    >
      <template #button>
        <div class="elemental-slider-button">
          {{ (+data.elementDemage).toFixed(1) }}
        </div>
      </template>
    </van-slider>
    <div class="detail">
      伤害加成的数值 = 造成伤害提高 + 元素/物理伤害加成 + 普攻/重击造成伤害提高
      + 元素战技/元素爆发伤害提高 + 对元素影响下的敌人伤害提高 +
      人物技能增伤等。
    </div>

    <div class="data-panel__title">
      增幅加成%
      <van-stepper
        v-model="data.evaporationDemage"
        button-size="20"
        theme="round"
        :min="checked ? 15 : 0"
        input-width="40px"
        decimal-length="1"
      />
      <span class="holy-relic-tips">蒸发、融化的额外提升</span>
    </div>
    <van-slider
      v-show="sliderChecked"
      v-model="data.evaporationDemage"
      :max="240"
      :min="checked ? 15 : 0"
      step="0.1"
      active-color="#645856"
    >
      <template #button>
        <div class="elemental-slider-button">
          {{ (+data.evaporationDemage).toFixed(1) }}
        </div>
      </template>
    </van-slider>
    <van-cell class="eva-cell" center title="炽烈的炎之魔女4件套效果">
      <template #right-icon>
        <van-switch
          v-model="checked"
          active-color="#766461"
          inactive-color="#b7a19e"
          size="16"
          @change="changeSwitch"
        />
      </template>
    </van-cell>
    <div class="data-panel__title">
      攻击倍率%
      <van-stepper
        v-model="data.atkRate"
        button-size="20"
        theme="round"
        input-width="45px"
        decimal-length="1"
      />
    </div>
    <van-slider
      v-show="sliderChecked"
      v-model="data.atkRate"
      :max="1500"
      step="0.1"
      active-color="#645856"
    >
      <template #button>
        <div class="elemental-slider-button">
          {{ (+data.atkRate).toFixed(1) }}
        </div>
      </template>
    </van-slider>
    <div class="data-panel__title">
      反应类型
      <van-radio-group style="margin-top: 12px" v-model="data.atkType">
        <van-cell-group>
          <van-cell title="无反应" clickable @click="data.atkType = 'none'">
            <template #right-icon>
              <van-radio name="none" checked-color="#766461" />
            </template>
          </van-cell>
          <van-cell clickable @click="data.atkType = 'evaporation'">
            <template #title>
              <div>
                <span class="water">水</span>· <span class="fire">火</span>/
                <span class="fire">火</span>· <span class="ice">冰</span>~
                蒸发/融化200%
              </div>
            </template>
            <template #right-icon>
              <van-radio name="evaporation" checked-color="#766461" />
            </template>
          </van-cell>
          <van-cell clickable @click="data.atkType = 'evaporation2'">
            <template #title>
              <div>
                <span class="water">水</span>· <span class="fire">火</span>/
                <span class="ice">冰</span>· <span class="fire">火</span>~
                蒸发/融化150%
              </div>
            </template>
            <template #right-icon>
              <van-radio name="evaporation2" checked-color="#766461" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </div>
  </div>
  <van-cell class="eva-cell" center title="展开更多乘区">
    <template #right-icon>
      <van-switch
        v-model="otherChecked"
        active-color="#766461"
        inactive-color="#b7a19e"
        size="16"
      />
    </template>
  </van-cell>
  <div v-show="otherChecked" class="data-panel">
    <div class="data-panel__title">
      人物等级
      <van-stepper
        v-model="otherData.characterLevel"
        button-size="20"
        theme="round"
        integer
        min="1"
        max="90"
      />
    </div>
    <div class="data-panel__title">
      敌人等级
      <van-stepper
        v-model="otherData.enemyLevel"
        button-size="20"
        theme="round"
        integer
        min="1"
      />
    </div>
    <div class="data-panel__title">
      敌人抗性%
      <van-stepper
        v-model="otherData.enemyResistance"
        button-size="20"
        theme="round"
        integer
      />
    </div>
    <div class="data-panel__title">
      减少抗性%
      <van-stepper
        v-model="otherData.weaken"
        button-size="20"
        theme="round"
        integer
        min="0"
      />
      <span class="holy-relic-tips">圣遗物、人物天赋等效果合计</span>
    </div>
    <div class="data-panel__title">
      减少防御%
      <van-stepper
        v-model="otherData.armour"
        button-size="20"
        theme="round"
        min="0"
        integer
      />
      <span class="holy-relic-tips">圣遗物、人物天赋等效果合计</span>
    </div>
  </div>
  <div class="increase-result">
    伤害数值
    <div class="normal-demage">
      {{ increaseResult }}
    </div>
    暴击伤害
    <div class="crit-demage">
      {{ Math.round(increaseResult * (1 + data.critDemage / 100)) }}
      <span class="middle-exclamation-mark">!</span>
      <span class="large-exclamation-mark">!</span>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, reactive, ref } from "vue";
import { Slider, Stepper, Switch, Cell, RadioGroup, Radio } from "vant";
import TabTitle from "./TabTitle.vue";
import { getReactionRate, getResistanceRate, getDefRate } from "../utils";

export default defineComponent({
  name: "increase",

  components: {
    [Cell.name]: Cell,
    [Switch.name]: Switch,
    [Slider.name]: Slider,
    [Stepper.name]: Stepper,
    [TabTitle.name]: TabTitle,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
  },

  setup() {
    const data = reactive({
      baseATK: 550,
      extraATK: 660,
      critDemage: 50.0,
      elementDemage: 46.6,
      evaporationDemage: 0.0,
      atkRate: 100,
      atkType: "none",
    });
    const otherData = reactive({
      characterLevel: 80,
      enemyLevel: 80,
      enemyResistance: 10,
      weaken: 0,
      armour: 0,
    });
    const checked = ref(false);
    const sliderChecked = ref(false);
    const otherChecked = ref(false);

    const evaporationComputed = computed(() => {
      return checked.value
        ? (+data.evaporationDemage + 15).toFixed(1)
        : (+data.evaporationDemage).toFixed(1);
    });

    const changeSwitch = (val) => {
      if (val) {
        data.evaporationDemage = +data.evaporationDemage + 15;
      } else {
        data.evaporationDemage = +data.evaporationDemage - 15;
      }
    };

    const increaseResult = computed(() => {
      const { baseATK, extraATK, elementDemage, evaporationDemage, atkRate, atkType } = data;
      const { characterLevel, enemyLevel, enemyResistance, weaken, armour} = otherData;
      // 计算增幅加成
      const elerate = getReactionRate(atkType);
      const resistanceRate = getResistanceRate(enemyResistance, weaken);
      const defRate = getDefRate(characterLevel, enemyLevel, armour);

      let eva = evaporationDemage;
      if (atkType === "none") {
        eva = 0;
      }

      return Math.round((baseATK + extraATK) * (atkRate / 100) * (1 + elementDemage / 100) * elerate * (1 + eva / 100) * defRate * resistanceRate);
    });

    return {
      data,
      otherData,
      evaporationComputed,
      checked,
      changeSwitch,
      sliderChecked,
      otherChecked,
      increaseResult,
    };
  },
});
</script>

<style>
.data-panel {
  margin-bottom: 24px;
}
.eva-cell {
  margin-bottom: 12px;
}
.data-panel__title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
}
.data-panel .van-stepper--round .van-stepper__minus {
  color: #997874;
  border-color: #997874;
}
.data-panel .van-stepper--round .van-stepper__plus {
  border: none;
  color: #fff;
  background-color: #997874;
}
.water {
  color: #0075fe;
}
.fire {
  color: #ec4735;
}
.ice {
  color: #62ebf0;
}
</style>