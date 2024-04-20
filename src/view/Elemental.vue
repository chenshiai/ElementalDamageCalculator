<template>
  <tab-title>剧变反应计算</tab-title>
  <div class="tips">
    存在细小误差，伤害均为对0抗性敌人的伤害，仅供参考。
  </div>
  <div class="base-data">
    <div class="base-data-item">
      <span class="base-damage__title">角色等级</span>
      <van-stepper
        v-model="data.level"
        input-width="66px"
        integer
        button-size="20"
        theme="round"
        min="1"
        max="90"
      />
      <span class="holy-relic-tips">点击数字可以手动输入</span>
    </div>
    <div class="base-data-item">
      <span class="base-damage__title">元素精通</span>
      <van-stepper
        v-model="data.elementalMystery"
        integer
        input-width="66px"
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
    <div class="base-data-item">
      <span class="base-damage__title">妮露生命值</span>
      <van-stepper
        v-model="data.nilou"
        input-width="66px"
        integer
        button-size="20"
        theme="round"
        min="0"
        max="80000"
      />
      <span class="holy-relic-tips">折旋落英之庭</span>
    </div>
    <div class="base-data-item">
      <span class="base-damage__title">白术生命值</span>
      <van-stepper
        v-model="data.baizhu"
        input-width="66px"
        integer
        button-size="20"
        theme="round"
        min="0"
        max="80000"
      />
      <span class="holy-relic-tips">在地为化</span>
    </div>
  </div>
  <div class="holy-relic">
    <div>
      <span class="holy-relic__title">圣遗物套装</span>
      <span class="holy-relic-tips">点击选择，再次点击可以取消选择</span>
    </div>
    <div class="holy-relic__check">
      <div
        :class="[
          'holy-relic-content',
          'witch',
          data.check === WITCH && 'active',
        ]"
        @click="holyRelicChangeCheck(WITCH)"
      >
        <img class="holy-relic__img" src="../assets/witch2.png" />
        <div>炽烈的炎之魔女</div>
      </div>
      <div
        :class="[
          'holy-relic-content',
          'thunder',
          data.check === THUNDER && 'active',
        ]"
        @click="holyRelicChangeCheck(THUNDER)"
      >
        <img class="holy-relic__img" src="../assets/thunder2.png" />
        <div>如雷的盛怒</div>
      </div>
      <div
        :class="[
          'holy-relic-content',
          'emerald',
          data.check === EMERALD && 'active',
        ]"
        @click="holyRelicChangeCheck(EMERALD)"
      >
        <img class="holy-relic__img" src="../assets/emerald2.png" />
        <div>翠绿之影</div>
      </div>
      <div
        :class="[
          'holy-relic-content',
          'eden',
          data.check === EDEN && 'active',
        ]"
        @click="holyRelicChangeCheck(EDEN)"
      >
        <img class="holy-relic__img" src="../assets/eden.png" />
        <div>乐园遗落之花</div>
      </div>
    </div>
  </div>
  <detail-block :elementalMystery="data.elementalMystery" :check="data.check">
    <template v-slot:servitude>
      <span v-show="niluoDouns" class="more-rate"><br />妮露：丰穰之核+{{ niluoDouns.toFixed(1) }}%;</span>
      <span v-show="baizhuDouns1" class="more-rate"><br />白术：燃烧、绽放、超绽放、烈绽放+{{ baizhuDouns1.toFixed(1) }}%</span>
    </template>
    <template v-slot:catalyze >
      <span v-show="baizhuDouns2" class="more-rate"><br />白术：超激化、蔓激化+{{ baizhuDouns2.toFixed(1) }}%</span>
    </template>
  </detail-block>
  <div class="result">
    <div class="damage-tag" v-for="item in demageResult" :key="item.name">
      <span :class="['damage-tag__title', item.class]">{{ item.name }}</span>
      <span v-show="item.name2" :class="['damage-tag__title', item.class2]">{{ item.name2 }}</span>
      <span class="damage-tag__detail">{{ item.detail }}</span>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, reactive, ref } from "vue";
import { WITCH, THUNDER, EMERALD, EDEN } from "../constant";
import { BaseDMG } from '../constants/elementalReaction';
import { getAmplifiedRate, getServitudeRate, getCrystallizeRate, getCatalyzeRate } from "../utils";
import TabTitle from "../component/TabTitle.vue";
import DetailBlock from "../component/Detail.vue";
import { CellGroup, Cell, Slider, Stepper, RadioGroup, Radio } from "vant";

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
    const data = reactive({
      elementalMystery: 786,
      level: 90,
      check: "",

      nilou: 0,
      baizhu: 0,
    });

    // 妮露天赋提升比例-丰壤之核
    const niluoDouns = computed(() => {
      if (data.nilou > 30000) {
        return Math.min((data.nilou - 30000) / 1000 * 9, 400);
      }
      return 0;
    });

    // 白术天赋提升比例-绽放、燃烧
    const baizhuDouns1 = computed(() => {
      return Math.min(data.baizhu, 50000) / 1000 * 2;
    });

    // 白术天赋提升比例-激化
    const baizhuDouns2 = computed(() => {
      return Math.min(data.baizhu, 50000) / 1000 * 0.8;
    });

    // 剧变反应伤害提升数值
    const servitudeDamage = (baseDamage) => {
      return Math.round(
        baseDamage * (1 + getServitudeRate(data.elementalMystery) / 100)
      );
    };

    // 激化反应伤害提升数值
    const catalyzeDamage = (baseDamage) => {
      return Math.round(
        baseDamage * (1 + getCatalyzeRate(data.elementalMystery) / 100)
      );
    };

    // 不直接乘以 1.4 的原因：分段取整，减少误差
    // 感电伤害值
    const electroChargedDamage = computed(() => {
      const basenumber = BaseDMG.electroCharged[data.level];
      const r = servitudeDamage(basenumber);
      return data.check === THUNDER ? Math.round(basenumber * 0.4) + r : r;
    });

    // 超载伤害值
    const overloadDamage = computed(() => {
      const basenumber = BaseDMG.overload[data.level];
      const r = servitudeDamage(basenumber);
      if (data.check === THUNDER || data.check === WITCH)
        return Math.round(basenumber * 0.4) + r;
      return r;
    });

    // 绽放伤害值
    const bloomDamage = computed(() => {
      const basenumber = BaseDMG.bloom[data.level];
      const r = servitudeDamage(basenumber) + Math.round(basenumber * (niluoDouns.value + baizhuDouns1.value) / 100);
      return data.check === EDEN ? Math.round(basenumber * 0.8) + r : r;
    });

    // 超烈绽放伤害值
    const hyperbloomDamage = computed(() => {
      const basenumber = BaseDMG.hyperbloom[data.level];
      const r = servitudeDamage(basenumber) + Math.round(basenumber * baizhuDouns1.value / 100);
      if (data.check === THUNDER || data.check === WITCH)
        return Math.round(basenumber * 0.4) + r;
      else if (data.check === EDEN) 
        return Math.round(basenumber * 0.8) + r;
      return r;
    });

    // 碎冰伤害值
    const shatterDamage = computed(() => {
      return servitudeDamage(BaseDMG.shatter[data.level]);
    });

    // 燃烧伤害值
    const burningDamage = computed(() => {
      const basenumber = BaseDMG.burning[data.level];
      const r = servitudeDamage(basenumber) + Math.round(basenumber * baizhuDouns1.value / 100);
      return data.check === WITCH ? Math.round(basenumber * 0.4) + r : r;
    });

    // 扩散伤害值
    const swirlDamage = computed(() => {
      const basenumber = BaseDMG.swirl[data.level];
      if (data.check === EMERALD)
        return Math.round(basenumber * 0.6) + servitudeDamage(basenumber);
      return servitudeDamage(basenumber);
    });

    // 超导伤害值
    const superconductDamage = computed(() => {
      const basenumber = BaseDMG.superconduct[data.level];
      const r = servitudeDamage(basenumber);
      return data.check === THUNDER ? Math.round(basenumber * 0.4) + r : r;
    });

    // 超激化数值
    const aggravateDamage = computed(() => {
      const basenumber = BaseDMG.aggravate[data.level];
      const r = catalyzeDamage(basenumber) + Math.round(basenumber * baizhuDouns2.value / 100);
      return data.check === THUNDER ? Math.round(basenumber * 0.2) + r : r;
    });

    // 蔓激化数值
    const spreadDamage = computed(() => {
      const basenumber = BaseDMG.spread[data.level];
      return catalyzeDamage(basenumber) + Math.round(basenumber * baizhuDouns2.value / 100);
    });

    // 结晶盾数值
    const crystallizeValue = computed(() => {
      const basenumber = BaseDMG.crystallize[data.level];
      return Math.round(basenumber * (1 + getCrystallizeRate(data.elementalMystery) / 100));
    });

    const holyRelicChangeCheck = (relic, event) => {
      if (data.check === relic) {
        data.check = "";
      } else {
        data.check = relic;
      }
    };

    const demageResult = computed(() => {
      return [
        {
          name: "超载",
          class: "overload",
          detail: overloadDamage.value,
        },
        {
          name: "超导",
          class: "superconduct",
          detail: superconductDamage.value,
        },
        {
          name: "感电",
          class: "elector",
          detail: electroChargedDamage.value,
        },
        {
          name: "燃烧",
          class: "burning",
          detail: burningDamage.value,
        },
        {
          name: "碎冰",
          class: "shatter",
          detail: shatterDamage.value,
        },
        {
          name: "扩散",
          class: "swirl",
          detail: swirlDamage.value,
        },
        {
          name: "超绽放",
          name2: "烈绽放",
          class: "aggravate",
          class2: "burning",
          detail: hyperbloomDamage.value,
        },
        {
          name: "绽放",
          class: "bloom",
          detail: bloomDamage.value,
        },
        {
          name: "蔓激化",
          class: "bloom",
          detail: spreadDamage.value,
        },
        {
          name: "超激化",
          class: "aggravate",
          detail: aggravateDamage.value,
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
      demageResult,
      crystallizeValue,
      holyRelicChangeCheck,
      niluoDouns,
      baizhuDouns1,
      baizhuDouns2,
      WITCH,
      THUNDER,
      EMERALD,
      EDEN
    };
  },
});
</script>

<style>
.base-data {
  line-height: 24px;
}

.base-data-item {
  margin-bottom: 8px;
}

.base-data .van-stepper--round .van-stepper__minus {
  color: var(--button-bg);
  border-color: var(--button-bg);
}
.base-data .van-stepper--round .van-stepper__plus {
  border: none;
  color: #fff;
  background-color: var(--button-bg);
}

.base-data .van-stepper.van-stepper--round {
  margin-left: 18px;
}

.van-slider {
  margin-bottom: 22px;
  margin-top: 12px;
}

.holy-relic {
  /* margin-top: 24px; */
  margin-bottom: 16px;
}

.holy-relic-tips {
  font-size: 12px;
  margin-left: 4px;
  color: var(--tip-text);
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
  white-space: nowrap;
  text-align: center;
  padding: 0 2px;
  font-size: 14px;
  opacity: 0.3;
}

.holy-relic__img {
  width: 70px;
  height: 70px;
  border-radius: 6px;
}

.damage-tag {
  line-height: 20px;
  border-bottom: 2px solid var(--button-bg);
  font-weight: bold;
  margin-bottom: 12px;
  min-width: 30%;
}

.damage-tag__title {
  margin-right: 6px;
  font-size: 20px;
}

.elector {
  color: #bd00bd;
}

.overload {
  color: #c9295e;
}

.shatter {
  color: #86898b;
}

.swirl {
  color: #7ef1b2;
}

.superconduct {
  color: #7ee9f1;
}

.crystallize {
  color: #ffce2d;
}

.bloom {
  color: #00e851;
}

.aggravate {
  color: #D28CFB;
}

.burning {
  color: #FC980A;
}

.witch {
  color: #f51e1e;
}

.thunder {
  color: #ce1dfa;
}

.emerald {
  color: #2ee27f;
}

.eden {
  color: #a75eb9;
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
.shield-data {
  text-align: center;
  font-size: 20px;
}
</style>
