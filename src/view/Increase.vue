<template>
  <tab-title>单次伤害计算</tab-title>
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
    <div class="data-panel__title atk-top">
      攻击力总计
      <span class="atk-total">{{ data.baseATK + data.extraATK }}</span>
      <span class="atk-detial">
        {{ data.baseATK }} +
        <span style="color: #49ff39">{{ data.extraATK }}</span>
      </span>
    </div>
    <data-item
      v-model="data.baseATK"
      title="基础攻击力"
      tips="人物面板攻击力白字"
      stepperInteger
      stepperMin="0"
      sliderMax="1200"
      :showSlider="sliderChecked"
    />
    <data-item
      v-model="data.extraATK"
      title="额外攻击力"
      tips="人物面板攻击力绿字"
      stepperInteger
      stepperMin="0"
      sliderMax="3000"
      :showSlider="sliderChecked"
    />
    <data-item
      v-model="data.critDemage"
      title="暴击伤害%"
      tips="小数位需要手动输入，下同"
      stepperMin="50"
      sliderMin="50"
      sliderMax="600"
      sliderStep="0.1"
      decimalLength="1"
      :showSlider="sliderChecked"
    />
    <data-item
      v-model="data.elementDemage"
      title="伤害加成%"
      tips="注意伤害加成触发的方式"
      stepperMin="0"
      sliderMax="600"
      sliderStep="0.1"
      decimalLength="1"
      :showSlider="sliderChecked"
      :notes="EDNotes"
      @noteChange="EDNoteChange"
      detail="伤害加成的数值 = 造成伤害提高 + 元素/物理伤害加成 + 普攻/重击造成伤害提高
      + 元素战技/元素爆发伤害提高 + 对元素影响下的敌人伤害提高 +
      人物技能增伤等。"
    />
    <div class="data-panel__title">
      精通加成%
      <van-stepper
        v-model="data.evaporationDemage"
        button-size="20"
        theme="round"
        :min="checked ? 15 : 0"
        input-width="40px"
        decimal-length="1"
      />
      <span class="holy-relic-tips">蒸发、融化的伤害提升</span>
    </div>
    <van-slider
      v-show="sliderChecked"
      v-model="data.evaporationDemage"
      :max="240"
      :min="checked ? 15 : 0"
      step="0.1"
      active-color="#645856"
    />
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
    <data-item
      v-model="data.atkRate"
      title="伤害倍率%"
      tips="本次攻击的倍率"
      sliderMax="1500"
      sliderStep="0.1"
      decimalLength="1"
      :showSlider="sliderChecked"
    />

    <div class="data-panel__title">
      反应类型
      <van-cell-group>
        <van-radio-group style="margin-top: 12px" v-model="data.atkType">
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
                <span class="fire">火</span>· <span class="water">水</span>/
                <span class="ice">冰</span>· <span class="fire">火</span>~
                蒸发/融化150%
              </div>
            </template>
            <template #right-icon>
              <van-radio name="evaporation2" checked-color="#766461" />
            </template>
          </van-cell>
        </van-radio-group>
      </van-cell-group>
    </div>
  </div>
  <van-cell class="eva-cell" center title="展开防御、抗性乘区">
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
        min="-999"
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
  <div :class="['result-grid', floatChecked && 'increase-result__top']">
    <div class="grid-item">
      伤害数值
      <div class="normal-demage">
        {{ increaseResult }}
      </div>
    </div>
    <div class="grid-item">
      暴击伤害
      <div class="crit-demage">
        {{ Math.round(increaseResult * (1 + data.critDemage / 100)) }}
        <i>
          <span class="exclamation-mark">!</span>
          <span class="exclamation-mark">!</span>
        </i>
      </div>
    </div>
  </div>
  <van-cell class="eva-cell" center title="置顶展示">
    <template #right-icon>
      <van-switch
        v-model="floatChecked"
        active-color="#766461"
        inactive-color="#b7a19e"
        size="16"
      />
    </template>
  </van-cell>
</template>

<script>
import { computed, defineComponent, reactive, ref, onMounted } from "vue";
import {
  Slider,
  Stepper,
  Switch,
  CellGroup,
  Cell,
  RadioGroup,
  Radio,
} from "vant";
import TabTitle from "../component/TabTitle.vue";
import { getReactionRate, getResistanceRate, getDefRate } from "../utils";
import DataItem from "../component/DataItem.vue";
import { EnhancedDamageNotes } from "../constant";

export default defineComponent({
  name: "increase",

  components: {
    [Cell.name]: Cell,
    [Radio.name]: Radio,
    [Switch.name]: Switch,
    [Slider.name]: Slider,
    [Stepper.name]: Stepper,
    [DataItem.name]: DataItem,
    [TabTitle.name]: TabTitle,
    [CellGroup.name]: CellGroup,
    [RadioGroup.name]: RadioGroup,
  },

  setup() {
    const data = reactive({
      baseATK: 550,
      extraATK: 660,
      critDemage: 50.0,
      elementDemage: 0,
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
    const floatChecked = ref(false);

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
      const {
        baseATK,
        extraATK,
        elementDemage,
        evaporationDemage,
        atkRate,
        atkType,
      } = data;
      const {
        characterLevel,
        enemyLevel,
        enemyResistance,
        weaken,
        armour,
      } = otherData;
      // 计算增幅加成
      const elerate = getReactionRate(atkType);
      const resistanceRate = getResistanceRate(enemyResistance, weaken);
      const defRate = getDefRate(characterLevel, enemyLevel, armour);

      let eva = evaporationDemage;
      if (atkType === "none") {
        eva = 0;
      }

      return Math.round(
        (baseATK + extraATK) *
          (atkRate / 100) *
          (1 + elementDemage / 100) *
          elerate *
          (1 + eva / 100) *
          defRate *
          resistanceRate
      );
    });

    const EDNotes = ref([]);
    const EDNoteChange = (value) => {
      EDNotes.value = value;
      window.localStorage.setItem("GenShinImpactEDNotes", JSON.stringify(value));
    };

    onMounted(() => {
      const notes = window.localStorage.getItem("GenShinImpactEDNotes");
      EDNotes.value = JSON.parse(notes) || EnhancedDamageNotes;
    });

    return {
      data,
      otherData,
      evaporationComputed,
      checked,
      changeSwitch,
      sliderChecked,
      otherChecked,
      floatChecked,
      increaseResult,
      EDNotes,
      EDNoteChange,
    };
  },
});
</script>

<style>
.data-panel {
  margin-bottom: 24px;
}
.atk-total {
  margin-left: 28px;
}
.atk-detial {
  display: inline-block;
  margin-left: 24px;
  padding: 0 12px;
  font-size: 14px;
}
.eva-cell {
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

.van-slider__button-wrapper .van-slider__button {
  box-shadow: 0 2px 2px #997874;
}

.result-grid {
  display: flex;
  width: 100%;
  top: 0;
  transition: top 0.3s;
  background-color: #fff;
  border: 1px solid #997874;
  padding: 6px 0;
}
.grid-item {
  flex: 1;
  text-align: center;
}
.normal-demage {
  font-size: 20px;
}
.crit-demage {
  font-size: 26px;
}
.normal-demage,
.crit-demage {
  font-weight: bold;
  line-height: 26px;
  font-family: "sao_font";
}
.exclamation-mark {
  display: inline-block;
  transform: scaleY(1.4);
}
.increase-result__top {
  position: fixed;
  top: 60px;
  width: calc(100% - 32px);
}
</style>
