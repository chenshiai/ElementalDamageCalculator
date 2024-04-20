<template>
  <div class="detail">
    <div class="detail-content">
      蒸发、融化反应的伤害提升{{ Rate }}%<span class="more-rate">{{ moreRate }}</span>;
      <br />
      超载、超导、感电、燃烧、碎冰、扩散、绽放、超绽放、烈绽放的伤害提升{{ servitude }}%;
      <span v-show="servitudeMoreRate" class="more-rate"><br />{{ servitudeMoreRate }}</span>
      <slot name="servitude"></slot>
      <br />
      超激化、蔓激化带来的[伤害提升]提高{{ catalyze }}%;
      <span v-show="catalyzeMoreRate" class="more-rate"><br />{{ catalyzeMoreRate }}</span>
      <slot name="catalyze"></slot>
      <br />
      结晶反应护盾提供的[伤害吸收量]提升{{ crystallization }}%;
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import { WITCH, THUNDER, EMERALD, EDEN } from "../constant";
import { getAmplifiedRate, getServitudeRate, getCrystallizeRate, getCatalyzeRate } from "../utils";

export default defineComponent({
  name: "detail-block",

  props: {
    elementalMystery: Number,
    check: String,
  },

  setup(props) {
    // 增幅倍率
    const Rate = computed(() => {
      return getAmplifiedRate(props.elementalMystery).toFixed(1);
    });

    // 剧变倍率
    const servitude = computed(() => {
      return getServitudeRate(props.elementalMystery).toFixed(1);
    });

    // 结晶倍率
    const crystallization = computed(() => {
      return getCrystallizeRate(props.elementalMystery).toFixed(1);
    });

    // 激化倍率
    const catalyze = computed(() => {
      return getCatalyzeRate(props.elementalMystery).toFixed(1);
    });

    // 魔女4
    const moreRate = computed(() => {
      if (props.check === WITCH) {
        return " 魔女套+15%";
      }
      return "";
    });

    // 如雷4
    const servitudeMoreRate = computed(() => {
      switch(props.check) {
        case THUNDER: {
          return "如雷套：超载、超导、感电、超绽放+40%";
        }
        case WITCH: {
          return "魔女套：超载、燃烧、烈绽放+40%";
        }
        case EMERALD: {
          return "风套：扩散+60%";
        }
        case EDEN: {
          return "乐园套：绽放、超绽放、烈绽放+80%";
        }
      }
      return "";
    });

    const catalyzeMoreRate = computed(() => {
      return props.check === THUNDER ? "超激化+20%" : "";
    });
    
    return {
      Rate,
      servitude,
      crystallization,
      catalyze,
      moreRate,
      servitudeMoreRate,
      catalyzeMoreRate
    }
  }
});
</script>

<style>
.detail {
  font-size: 14px;
  padding: 4px 8px;
  margin-bottom: 16px;
  border-radius: 6px;
  color: #fff;
  margin-top: 12px;
  background-color: var(--main-text);
}
.detail-opearate {
  line-height: 16px;
  text-align: center;
}
.detail-content {
  position: relative;
}
.detail-close-tips {
  position: absolute;
  color: var(--main-text);
  right: 0;
  bottom: -30px;
}

.more-rate {
  color: #2ee27f;
}

</style>