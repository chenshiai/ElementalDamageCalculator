<template>
  <tab-title>剧变反应查看</tab-title>
  <div class="tips">
    官方未公开计算公式，存在一定的误差。精通伤害没计算敌人抗性，实际值请以游戏内为准，仅供参考。
  </div>
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
  <detail-block keep>
    蒸发、融化反应的伤害提升{{ Rate }}%<span class="more-rate">{{ moreRate }}</span>;
    <br />
    超载、超导、感电、燃烧、碎冰、扩散、绽放、超绽放、烈绽放的伤害提升{{ servitude }}%;
    <span v-if="servitudeMoreRate" class="more-rate"><br />{{ servitudeMoreRate }};</span>
    <br />
    超激化、蔓激化带来的[伤害提升]提高{{ jihua }}%;
    <br />
    结晶反应护盾提供的[伤害吸收量]提升{{ crystallization }}%;
  </detail-block>
  <div class="result">
    <div class="damage-tag" v-for="(item, index) in demageResult" :key="index">
      <span :class="['damage-tag__title', item.class]">{{ item.name }}</span>
      <span v-if="item.name2" :class="['damage-tag__title', item.class2]">{{ item.name2 }}</span>
      <span class="damage-tag__detail">{{ item.detail }}</span>
    </div>
  </div>
  <tab-title>护盾有多能抗</tab-title>
  <div class="tips">
    护盾吸收效果是护盾自身的属性，护盾强效则是被保护角色给予护盾的属性。
  </div>
  <div class="base-data">
    <div class="data-panel__title">
      护盾吸收效果
      <van-cell-group>
        <van-radio-group style="margin-top: 12px" v-model="shieldType">
          <van-cell
            clickable
            title="岩元素护盾:150%"
            @click="changeShield(Shield.earth)"
          >
            <template #right-icon>
              <van-radio :name="Shield.earth" checked-color="#766461" />
            </template>
          </van-cell>
          <van-cell
            clickable
            title="对应元素伤害:250%"
            @click="changeShield(Shield.special)"
          >
            <template #right-icon>
              <van-radio :name="Shield.special" checked-color="#766461" />
            </template>
          </van-cell>
          <van-cell
            title="无对应元素伤害:100%"
            clickable
            @click="changeShield(Shield.common)"
          >
            <template #right-icon>
              <van-radio :name="Shield.common" checked-color="#766461" />
            </template>
          </van-cell>
        </van-radio-group>
      </van-cell-group>
    </div>
    <div class="base-damage__title">
      护盾强效%
      <van-stepper
        v-model="data.shieldStrong"
        integer
        input-width="46px"
        button-size="20"
        theme="round"
        min="0"
      />
      <span class="holy-relic-tips">被保护角色的护盾强效</span>
    </div>
    <van-slider v-model="data.shieldStrong" :max="200" active-color="#645856" />
  </div>
  <detail-block keep>
    每1点护盾值可吸收<span class="more-rate">{{ shieldConversion }}</span>点伤害
    <br />
    等价于护盾拥有<span class="more-rate">{{ shieldRemission }}%</span>的伤害减免
    <br />
    护盾受到的伤害是在计算过角色防御力、抗性后的伤害
  </detail-block>
</template>

<script>
import { computed, defineComponent, reactive, toRefs } from "vue";
import { WITCH, THUNDER, EMERALD } from "../constant";
import { BaseDMG } from '../constants/elementalReaction';
import { calculate, calculate2, calculate3, calculate4 } from "../utils";
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
    const data = reactive({
      elementalMystery: 786,
      level: 80,
      check: "",

      shieldType: "common",
      shieldStrong: 0,
    });

    // 增幅倍率
    const Rate = computed(() => {
      return calculate(data.elementalMystery).toFixed(1);
    });

    // 聚变倍率
    const servitude = computed(() => {
      return calculate2(data.elementalMystery).toFixed(1);
    });

    // 结晶倍率
    const crystallization = computed(() => {
      return calculate3(data.elementalMystery).toFixed(1);
    });

    // 激化倍率
    const jihua = computed(() => {
      return calculate4(data.elementalMystery).toFixed(1);
    });

    const moreRate = computed(() => {
      if (data.check === WITCH) {
        return " +15%";
      }
      return "";
    });

    const servitudeMoreRate = computed(() => {
      if (data.check === THUNDER) {
        return " 超载/超导/感电/超绽放+40%;超激化+20%";
      }
      if (data.check === WITCH) {
        return " 超载/燃烧/烈绽放+40%";
      }
      if (data.check === EMERALD) {
        return " 扩散+60%";
      }
      return "";
    });

    // 剧变反应伤害公式
    const calculateDamage = (baseDamage) => {
      return Math.round(
        baseDamage * (1 + calculate2(data.elementalMystery) / 100)
      );
    };

    // 激化反应伤害公式
    const calculate4Damage = (baseDamage) => {
      return Math.round(
        baseDamage * (1 + calculate4(data.elementalMystery) / 100)
      );
    };

    // 不直接乘以 1.4 的原因：分段取整，减少误差
    // 感电伤害值
    const electroChargedDamage = computed(() => {
      const basenumber = BaseDMG.electroCharged[data.level];
      const r = calculateDamage(basenumber);
      if (data.check === THUNDER) return Math.round(basenumber * 0.4) + r;
      return r;
    });

    // 超载伤害值
    const overloadDamage = computed(() => {
      const basenumber = BaseDMG.overload[data.level];
      const r = calculateDamage(basenumber);
      if (data.check === THUNDER || data.check === WITCH)
        return Math.round(basenumber * 0.4) + r;
      return r;
    });

    // 绽放伤害值
    const bloomDamage = computed(() => {
      return calculateDamage(BaseDMG.bloom[data.level]);
    });

    // 超烈绽放伤害值
    const hyperbloomDamage = computed(() => {
      const basenumber = BaseDMG.hyperbloom[data.level];
      const r = calculateDamage(basenumber);
      if (data.check === THUNDER || data.check === WITCH)
        return Math.round(basenumber * 0.4) + r;
      return r;
    });

    // 碎冰伤害值
    const shatterDamage = computed(() => {
      return calculateDamage(BaseDMG.shatter[data.level]);
    });

    // 燃烧伤害值
    const burningDamage = computed(() => {
      const basenumber = BaseDMG.burning[data.level];
      const r = calculateDamage(basenumber);
      if (data.check === WITCH)
        return Math.round(basenumber * 0.4) + r;
      return r;
    });

    // 扩散伤害值
    const swirlDamage = computed(() => {
      const basenumber = BaseDMG.swirl[data.level];
      if (data.check === EMERALD)
        return Math.round(basenumber * 0.6) + calculateDamage(basenumber);
      return calculateDamage(basenumber);
    });

    // 超导伤害值
    const superconductDamage = computed(() => {
      const basenumber = BaseDMG.superconduct[data.level];
      const r = calculateDamage(basenumber);
      if (data.check === THUNDER) return Math.round(basenumber * 0.4) + r;
      return r;
    });

    // 超激化提升值
    const aggravateDamage = computed(() => {
      const basenumber = BaseDMG.aggravate[data.level];
      const r = calculate4Damage(basenumber);
      if (data.check === THUNDER) return Math.round(basenumber * 0.2) + r;
      return r;
    });

    // 蔓激化提升值
    const spreadDamage = computed(() => {
      const basenumber = BaseDMG.spread[data.level];
      return calculate4Damage(basenumber);
    });

    // 结晶数值
    const crystallizeValue = computed(() => {
      if (BaseDMG.crystallize[data.level]) {
        return Math.round(
          BaseDMG.crystallize[data.level] *
            (1 + ((calculate(data.elementalMystery) / 5) * 8) / 100)
        );
      }
      return "无数据";
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

    const changeCheck = (relic) => {
      if (data.check === relic) {
        data.check = "";
      } else {
        data.check = relic;
      }
    };

    const changeShield = (type) => {
      data.shieldType = type;
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
      ...toRefs(data),
      Rate,
      servitude,
      jihua,
      crystallization,
      demageResult,
      crystallizeValue,
      changeCheck,
      moreRate,
      servitudeMoreRate,
      Shield,
      changeShield,
      shieldRemission,
      shieldConversion,
    };
  },
});
</script>

<style>
.base-data {
  line-height: 24px;
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
}

.holy-relic {
  margin-top: 24px;
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
  text-align: center;
  padding: 0 6px;
  font-size: 14px;
  opacity: 0.3;
}

.holy-relic__img {
  width: 100%;
  border-radius: 20%;
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

.more-rate {
  color: #2ee27f;
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
