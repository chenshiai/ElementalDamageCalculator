<template>
  <div class="title">元素精通计算器</div>
  <div class="tips">
    <span style="color: red">※注意事项※</span>
    计算公式为玩家自主逆推拟合而成，仅供参考，<b>存在一定的误差</b>，数值越高误差越大。结晶护盾值的数据暂时不足。<b>没有计算敌人抗性，实际数值请以游戏内为准</b>。
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
  <div class="holy-relic">
    <span class="holy-relic__title">
      圣遗物套装<span class="tips">点击选择，再次点击可以取消选择</span>
    </span>
    <div class="check">
      <span
        :class="['damage-tag', 'witch', data.check === 'witch' && 'active']"
        @click="changeCheck('witch')"
      >
        炽烈的炎之魔女
      </span>
      <span
        :class="['damage-tag', 'thunder', data.check === 'thunder' && 'active']"
        @click="changeCheck('thunder')"
      >
        如雷的盛怒
      </span>
      <span
        :class="['damage-tag', 'emerald', data.check === 'emerald' && 'active']"
        @click="changeCheck('emerald')"
      >
        翠绿之影
      </span>
    </div>
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
      <span class="damage-tag__title elector">感电</span>
      {{ electroChargedDamage }}
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
    <span v-if="crystallizeValue > 0" class="damage-tag">
      <span class="damage-tag__title crystallize">结晶</span>{{ crystallizeValue }}
    </span>
  </div>
  <div class="supporter">
    逆推公式提供者：
    <a href="https://space.bilibili.com/392692625/article">bionukg@BiliBili</a>
  </div>
  <div class="supporter">
    基础伤害数值来源：
    <a href="https://bbs.mihoyo.com/ys/article/2215872">鈴@米游社【空荧酒馆】</a>
  </div>
</template>

<script>
import { computed, defineComponent, reactive } from "vue";
import Base from "../constant";
import { calculate } from "../utils";

export default defineComponent({
  name: "Elemental Damage Calculator",
  setup() {
    const data = reactive({
      elementalMystery: 0,
      level: 1,
      base: Base,
      check: "",
    });

    // 增幅倍率
    const Rate = computed(() => {
      return (calculate(data.elementalMystery) / 2.3945).toFixed(1);
    });

    // 聚变倍率
    const servitude = computed(() => {
      return calculate(data.elementalMystery).toFixed(1);
    });

    // 结晶倍率
    const crystallization = computed(() => {
      return ((calculate(data.elementalMystery) / 12) * 8).toFixed(1);
    });

    // 聚变反应伤害公式
    const calculateDamage = (baseDamage) => {
      return Math.round(
        baseDamage * (1 + calculate(data.elementalMystery) / 100)
      );
    };

    // 感电伤害值
    const electroChargedDamage = computed(() => {
      const basenumber = Base.electroCharged[data.level];
      const r = calculateDamage(basenumber);
      if (data.check === "thunder") return Math.round(basenumber * 0.4) + r;
      return r;
    });

    // 超载伤害值
    const overloadDamage = computed(() => {
      const basenumber = Base.overload[data.level];
      const r = calculateDamage(basenumber);
      if (data.check === "thunder" || data.check === "witch")
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
      if (data.check === "emerald")
        return Math.round(basenumber * 0.6) + calculateDamage(basenumber);
      return calculateDamage(basenumber);
    });

    // 超导伤害值
    const superconductDamage = computed(() => {
      const basenumber = Base.superconduct[data.level];
      const r = calculateDamage(basenumber);
      if (data.check === "thunder") return Math.round(basenumber * 0.4) + r;
      return r;
    });

    // 结晶数值
    const crystallizeValue = computed(() => {
      if (Base.crystallize[data.level]) {
        return Math.round(
          Base.crystallize[data.level] *
            (1 + ((calculate(data.elementalMystery) / 12) * 8) / 100)
        );
      }
      return 0;
    });

    const changeCheck = (relic) => {
      if (data.check === relic) {
        data.check = "";
      } else {
        data.check = relic;
      }
    };

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
      crystallizeValue,
      changeCheck,
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

.holy-relic {
  margin-bottom: 16px;
}

.holy-relic__title,
.base-damage__title {
  font-size: 18px;
  font-weight: bold;
  display: inline-block;
  padding: 0 4px;
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
  font-weight: bold;
  opacity: 1;
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
