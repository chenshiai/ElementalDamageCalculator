<script lang="ts" setup>
import { computed, ref, toRefs } from "vue";
import { Popup, Icon } from "vant";

import { ICalculatorValue } from "@/types/interface";
import { ElementType } from "@/types/enum";

interface IProps {
  characterPanelData: ICalculatorValue;
  elementType?: ElementType;
}
const props = defineProps<IProps>();
const { characterPanelData, elementType } = toRefs(props);

interface IPanelValue {
  label: string;
  baseValue: number;
  extraValue: number;
}
const show = ref(false);
const baseValue = computed<IPanelValue[]>(() => {
  const {
    baseHP,
    extraHP,
    extraHP_NT,
    baseATK,
    extraATK,
    extraATK_NT,
    baseDEF,
    extraDEF,
    extraDEF_NT,
    elementalMystery,
    elementalMystery_NT,
  } = characterPanelData.value;
  return [
    {
      label: "生命值上限",
      baseValue: baseHP,
      extraValue: extraHP + extraHP_NT,
    },
    {
      label: "攻击力",
      baseValue: baseATK,
      extraValue: extraATK + extraATK_NT,
    },
    {
      label: "防御力",
      baseValue: baseDEF,
      extraValue: extraDEF + extraDEF_NT,
    },
    {
      label: "元素精通",
      baseValue: elementalMystery + elementalMystery_NT,
      extraValue: 0,
    },
  ];
});
const extraValue = computed<IPanelValue[]>(() => {
  const { critcal, critcalHurt, healAdd, beHealAdd, chargeEfficiency, chargeEfficiency_NT, coolDown, shieldStrong } =
    characterPanelData.value;
  return [
    {
      label: "暴击率",
      baseValue: critcal,
      extraValue: 0,
    },
    {
      label: "暴击伤害",
      baseValue: critcalHurt,
      extraValue: 0,
    },
    {
      label: "治疗加成",
      baseValue: healAdd,
      extraValue: 0,
    },
    {
      label: "受治疗加成",
      baseValue: beHealAdd,
      extraValue: 0,
    },
    {
      label: "元素充能效率",
      baseValue: chargeEfficiency + chargeEfficiency_NT,
      extraValue: 0,
    },
    {
      label: "冷却缩减",
      baseValue: coolDown,
      extraValue: 0,
    },
    {
      label: "护盾强效",
      baseValue: shieldStrong,
      extraValue: 0,
    },
  ];
});

const elementTypeToLabel = {
  [ElementType.Physical]: "物理伤害加成",
  [ElementType.Pyro]: "火元素伤害加成",
  [ElementType.Electro]: "雷元素伤害加成",
  [ElementType.Hydro]: "水元素伤害加成",
  [ElementType.Anemo]: "风元素伤害加成",
  [ElementType.Cryo]: "冰元素伤害加成",
  [ElementType.Geo]: "岩元素伤害加成",
  [ElementType.Dendro]: "草元素伤害加成",
};
const elementValue = computed<IPanelValue[]>(() => {
  const {
    pyroAddHunt,
    hydroAddHunt,
    dendroAddHunt,
    electroAddHunt,
    anemoAddHunt,
    cryoAddHunt,
    geoAddHunt,
    physicalAddHunt,
  } = characterPanelData.value;

  return [
    {
      label: elementTypeToLabel[ElementType.Pyro],
      baseValue: pyroAddHunt,
      extraValue: 0,
    },
    {
      label: elementTypeToLabel[ElementType.Hydro],
      baseValue: hydroAddHunt,
      extraValue: 0,
    },
    {
      label: elementTypeToLabel[ElementType.Dendro],
      baseValue: dendroAddHunt,
      extraValue: 0,
    },
    {
      label: elementTypeToLabel[ElementType.Electro],
      baseValue: electroAddHunt,
      extraValue: 0,
    },
    {
      label: elementTypeToLabel[ElementType.Anemo],
      baseValue: anemoAddHunt,
      extraValue: 0,
    },
    {
      label: elementTypeToLabel[ElementType.Cryo],
      baseValue: cryoAddHunt,
      extraValue: 0,
    },
    {
      label: elementTypeToLabel[ElementType.Geo],
      baseValue: geoAddHunt,
      extraValue: 0,
    },
    {
      label: elementTypeToLabel[ElementType.Physical],
      baseValue: physicalAddHunt,
      extraValue: 0,
    },
  ];
});
const leftValue = computed(() => {
  return baseValue.value.concat(
    elementValue.value.filter(({ label }) => label === elementTypeToLabel[elementType.value])
  );
});

function round(a: number, precision: number = 0): number {
  const factor = Math.pow(10, precision);
  return Math.round(a * factor) / factor;
}
</script>

<template>
  <div class="data-panel__title">角色面板属性</div>
  <div class="character-panel">
    <div class="left">
      <div class="panel-item" v-for="(val, index) in leftValue">
        <span>{{ val.label }}</span>
        <span v-show="val.extraValue" class="panel-detail">
          <div>{{ round(val.baseValue) }}</div>
          <div class="extra-text">+{{ round(val.extraValue) }}</div>
        </span>
        <span v-if="index === leftValue.length - 1"> {{ round(val.baseValue + val.extraValue, 1) }}% </span>
        <span v-else>{{ round(val.baseValue + val.extraValue) }}</span>
      </div>
    </div>
    <div class="right">
      <div class="panel-item" v-for="val in extraValue.slice(0, 5)">
        <span>{{ val.label }}</span>
        <span>{{ round(val.baseValue + val.extraValue, 1) }}%</span>
      </div>
    </div>
  </div>
  <div class="show-detail" @click="show = true">
    <Icon name="description" />详细属性
  </div>
  <Popup v-model:show="show" teleport="#app" position="bottom" round style="height: 80%" closeable>
    <div class="character-panel-popup">
      <div class="data-panel__title">基础属性</div>
      <div class="panel-item" v-for="(val, index) in baseValue">
        <span>{{ val.label }}</span>
        <span>{{ round(val.baseValue) }}
          <span class="extra-text">+{{ round(val.extraValue) }}</span>
        </span>
      </div>
      <div class="data-panel__title">进阶属性</div>
      <div class="panel-item" v-for="val in extraValue">
        <span>{{ val.label }}</span>
        <span>{{ round(val.baseValue + val.extraValue, 1) }}%</span>
      </div>
      <div class="data-panel__title">元素属性</div>
      <div class="panel-item" v-for="val in elementValue">
        <span>{{ val.label }}</span>
        <span>{{ round(val.baseValue + val.extraValue, 1) }}%</span>
      </div>
    </div>
  </Popup>
</template>

<style scoped>
.character-panel {
  display: grid;
  gap: 2px;
  grid-template-columns: 1fr 1fr;
  border: 1px solid var(--border);
  font-size: 12px;
  border-radius: 4px;
}
.left,
.right {
  padding: 0 8px;
}
.panel-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
}
.panel-detail {
  font-size: 12px;
  line-height: 12px;
  text-align: right;
}
.extra-text {
  color: var(--extra-text);
}
.character-panel-popup {
  padding: 40px 16px;
}
.show-detail {
  width: 100%;
  text-align: center;
  line-height: 18px;
}
.panel-item + .data-panel__title {
  margin-top: 20px;
}
</style>
