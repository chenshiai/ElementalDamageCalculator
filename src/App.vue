<template>
  <div class="title">元素精通计算器</div>
  <div class="tips">
    <span style="color: red">※注意事项※</span>
    计算公式为玩家自主逆推拟合而成，<b>存在一定的误差</b>，岩结晶护盾值暂无，仅供参考。<b>没有计算敌人抗性，实际数值请以游戏内为准</b>。
  </div>
  <div class="base-damage">
    <span class="base-damage__title">
      角色等级
      <input class="base-damage__input" v-model="data.level" />
    </span>
    <span class="base-damage__title">
      元素精通
      <input class="base-damage__input" v-model="data.elementalMystery" />
    </span>
  </div>
  <div class="detail">
    增幅反应伤害提高：{{ Rate }}%
    <br />
    聚变反应伤害提高：{{ servitude }}%
    <br />
    结晶反应护盾提高：{{ crystallization }}%
  </div>
  <div class="result" v-if="data.level > 0 && data.level <= 90">
    <span class="damage-tag">
      <span class="damage-tag__title elector">感电</span>{{ electroChargedDamage }}
    </span>
    <span class="damage-tag">
      <span class="damage-tag__title overload">超载</span>{{ overloadDamage }}
    </span>
    <span class="damage-tag">
      <span class="damage-tag__title crushe-ice">碎冰</span>{{ crushedIceDamage }}
    </span>
    <span class="damage-tag">
      <span class="damage-tag__title diffuse">扩散</span>{{ diffuseDamage }}
    </span>
    <span class="damage-tag">
      <span class="damage-tag__title superconduct">超导</span>{{ superconductDamage }}
    </span>
  </div>
  <div class="supporter">
    逆推公式提供者<a href="https://space.bilibili.com/392692625/article">bionukg@BiliBili</a>
  </div>
  <div class="supporter">
    基础伤害数值来源：<a href="https://bbs.mihoyo.com/ys/article/2215872">鈴@米游社【空荧酒馆】</a>
  </div>
</template>

<script>
import { computed, defineComponent, reactive } from "vue";
import Base from "./constant";

const calculate = (elementalMystery) => {
  return Math.log(+elementalMystery / 569.5 + 1) / Math.log(1.0086944);
};

const calculateDamage = (baseDamage, elementalMystery) => {
  return Math.round(baseDamage * (1 + (calculate(elementalMystery) * 12) / 5 / 100));
};

export default defineComponent({
  name: "Elemental Damage Calculator",
  setup() {
    const data = reactive({
      elementalMystery: 0,
      level: 1,
      base: Base,
    });
    const Rate = computed(() => {
      return calculate(data.elementalMystery).toFixed(1);
    });
    const servitude = computed(() => {
      return ((calculate(data.elementalMystery) * 12) / 5).toFixed(1);
    });
    const crystallization = computed(() => {
      return ((calculate(data.elementalMystery) * 8) / 5).toFixed(1);
    });

    const electroChargedDamage = computed(() => {
      return calculateDamage(Base.electroCharged[data.level], data.elementalMystery);
    });

    const overloadDamage = computed(() => {
      return calculateDamage(Base.overload[data.level], data.elementalMystery);
    });

    const crushedIceDamage = computed(() => {
      return calculateDamage(Base.crushedIce[data.level], data.elementalMystery);
    });

    const diffuseDamage = computed(() => {
      return calculateDamage(Base.diffuse[data.level], data.elementalMystery);
    });

    const superconductDamage = computed(() => {
      return calculateDamage(Base.superconduct[data.level], data.elementalMystery);
    });

    return { 
      data, 
      Rate, 
      servitude, 
      crystallization, 
      electroChargedDamage, 
      overloadDamage, 
      crushedIceDamage, 
      diffuseDamage,
      superconductDamage,
    };
  },
});
</script>

<style>
.title {
  box-sizing: border-box;
  line-height: 46px;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;

  color: #fff;
  border: 4px solid #b69f9b;
  background-color: #997874;
  box-shadow: 0 2px 6px #978c8b;
}

.tips {
  margin: 0 16px 16px 16px;
  font-size: 12px;
  text-align: left;
}

.base-damage {
  line-height: 24px;
  padding: 16px;
}

.base-damage__title {
  font-size: 18px;
  margin-bottom: 12px;
  font-weight: bold;
}

.base-damage__input {
  line-height: 24px;
  width: 80px;
  font-size: 16px;
  font-weight: bold;
  box-sizing: border-box;
}

.damage-tag {
  display: inline-block;
  background-color: #f7f1e6;
  border: 1px solid #997874;
  line-height: 24px;
  padding: 0 6px;
  border-radius: 12px;
  margin-right: 10px;
  margin-bottom: 4px;
}

.damage-tag__title {
  margin-right: 6px;
  font-weight: bold;
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

.detail {
  font-size: 14px;
  padding: 0 16px;
  margin-bottom: 16px;
}

.result {
  padding: 0 16px;
  margin-bottom: 16px;
}

.supporter {
  font-size: 12px;
}
</style>
