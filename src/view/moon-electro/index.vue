<script setup lang="ts">
import TabTitle from "@/component/TabTitle.vue";
import { Cell, Switch } from "vant";
import { ref } from "vue";
import { useYiFa, useIneffa } from "../elemental/roles";

type teamItem = {
  level: number;
  elementMastery: number;
  criticalRate: number;
  criticalDamage: number;
  thunder: boolean;
};

const teamList = ref<teamItem[]>([
  {
    level: 90,
    elementMastery: 0,
    criticalRate: 5,
    criticalDamage: 50,
    thunder: false,
  },
]);
const otherData = ref(0);
const { yehun, yehunGain } = useYiFa();
const { ineffaAtk, ineffaGain } = useIneffa()

const addData = () => {
  teamList.value.push({
    level: 90,
    elementMastery: 0,
    criticalRate: 5,
    criticalDamage: 50,
    thunder: false,
  });
};
const removeData = (index: number) => {
  teamList.value.splice(index, 1);
};
</script>

<template>
  <TabTitle>月感电反应计算</TabTitle>
  <div class="tips">
    仅计算由普通感电反应转化的月感电反应伤害，不计算角色直接造成的月感电伤害。
    <p>注意只能使用风、水、雷这三个种元素类型的角色数据。</p>
    <p>伤害均为对0抗性敌人的伤害，仅供参考。</p>
  </div>
  <section class="moon-panel">
    <div v-for="(item, index) in teamList" :key="index">
      <div class="moon-panel__title">
        {{ index + 1 }}号角色属性
        <span class="moon-panel__delete" @click="removeData(index)">移除</span>
      </div>
      <div class="moon-panel__basic">
        <div class="basic-panel-item">
          <span class="basic-panel-item-title">等级</span>
          <input class="basic-panel-input" type="number" max="90" v-model="item.level" />
        </div>
        <div class="basic-panel-item">
          <span class="basic-panel-item-title">元素精通</span>
          <input class="basic-panel-input" type="number" v-model="item.elementMastery" />
        </div>
        <div class="basic-panel-item">
          <span class="basic-panel-item-title">暴击率%</span>
          <input class="basic-panel-input" type="number" v-model="item.criticalRate" />
        </div>
        <div class="basic-panel-item">
          <span class="basic-panel-item-title">暴击伤害%</span>
          <input class="basic-panel-input" type="number" v-model="item.criticalDamage" />
        </div>
      </div>
      <Cell center title="是否装备如雷4件套">
        <template #right-icon>
          <Switch v-model="item.thunder" active-color="#766461" inactive-color="#b7a19e" size="16" />
        </template>
      </Cell>
    </div>
    <div v-show="teamList.length < 4" class="show-click" @click="addData">新增角色属性</div>
  </section>
  <section class="moon-panel">
    <div class="moon-panel__title">其它加成</div>
    <Cell title="伊涅芙得攻击力" center>
      <template #right-icon>
        <input class="ex-input" type="number" v-model="ineffaAtk" />
      </template>
    </Cell>
    <Cell title="伊法天赋计入的夜魂总和" center>
      <template #right-icon>
        <input class="ex-input" type="number" v-model="yehun" />
      </template>
    </Cell>
    <Cell title="其它月感电伤害提升%" center>
      <template #right-icon>
        <input class="ex-input" type="number" v-model="otherData" />
      </template>
    </Cell>
  </section>
</template>

<style scoped>
.moon-panel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
}
@media screen and (max-width: 768px) {
  .moon-panel {
    grid-template-columns: 1fr;
  }
}
.moon-panel__delete {
  float: right;
  cursor: pointer;
  &:hover {
    color: var(--cancel);
  }
}
.moon-panel__basic {
  display: flex;
}
.show-click {
  text-align: center;
  border: 1px solid var(--border);
  border-radius: 4px;
  margin-bottom: 16px;
  line-height: 32px;
  height: 32px;
  width: 100%;
  background-color: transparent;
  cursor: pointer;
}
</style>
