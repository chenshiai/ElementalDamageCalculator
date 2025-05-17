<script lang="ts" setup>
import { computed, ref, toRefs } from "vue";
import { Popup, Icon } from "vant";

import { ICalculatorValue } from "@/types/interface";
import { ElementType, elementTypeToLabel } from "@/types/enum";
import allImages from "@/constants/imageConstant";
const { anemo, atk, ch, cri, crih, cryo, den, def, ele, em, geo, heal, hp, hydro, phy, pyro } = allImages;

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
  svg: string;
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
      label: "生命值",
      baseValue: baseHP,
      extraValue: extraHP + extraHP_NT,
      svg: hp,
    },
    {
      label: "攻击力",
      baseValue: baseATK,
      extraValue: extraATK + extraATK_NT,
      svg: atk,
    },
    {
      label: "防御力",
      baseValue: baseDEF,
      extraValue: extraDEF + extraDEF_NT,
      svg: def,
    },
    {
      label: "元素精通",
      baseValue: elementalMystery + elementalMystery_NT,
      extraValue: 0,
      svg: em,
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
      svg: cri,
    },
    {
      label: "暴击伤害",
      baseValue: critcalHurt,
      extraValue: 0,
      svg: crih,
    },
    {
      label: "治疗加成",
      baseValue: healAdd,
      extraValue: 0,
      svg: heal,
    },
    {
      label: "受治疗加成",
      baseValue: beHealAdd,
      extraValue: 0,
      svg: heal,
    },
    {
      label: "元素充能效率",
      baseValue: chargeEfficiency + chargeEfficiency_NT,
      extraValue: 0,
      svg: ch,
    },
    {
      label: "冷却缩减",
      baseValue: coolDown,
      extraValue: 0,
      svg: ch,
    },
    {
      label: "护盾强效",
      baseValue: shieldStrong,
      extraValue: 0,
      svg: def,
    },
  ];
});

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
      svg: pyro,
    },
    {
      label: elementTypeToLabel[ElementType.Hydro],
      baseValue: hydroAddHunt,
      extraValue: 0,
      svg: hydro,
    },
    {
      label: elementTypeToLabel[ElementType.Dendro],
      baseValue: dendroAddHunt,
      extraValue: 0,
      svg: den,
    },
    {
      label: elementTypeToLabel[ElementType.Electro],
      baseValue: electroAddHunt,
      extraValue: 0,
      svg: ele,
    },
    {
      label: elementTypeToLabel[ElementType.Anemo],
      baseValue: anemoAddHunt,
      extraValue: 0,
      svg: anemo,
    },
    {
      label: elementTypeToLabel[ElementType.Cryo],
      baseValue: cryoAddHunt,
      extraValue: 0,
      svg: cryo,
    },
    {
      label: elementTypeToLabel[ElementType.Geo],
      baseValue: geoAddHunt,
      extraValue: 0,
      svg: geo,
    },
    {
      label: elementTypeToLabel[ElementType.Physical],
      baseValue: physicalAddHunt,
      extraValue: 0,
      svg: phy,
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
        <div class="panel-leabel">
          <img :src="val.svg" />
          {{ val.label }}
        </div>
        <data v-show="val.extraValue" class="panel-detail">
          <div>{{ round(val.baseValue) }}</div>
          <div class="extra-text">+{{ round(val.extraValue) }}</div>
        </data>
        <data class="panel-number">
          {{ round(val.baseValue + val.extraValue, index === 4 ? 1 : 0)
          }}{{ index === leftValue.length - 1 ? "%" : "" }}
        </data>
      </div>
    </div>
    <div class="right">
      <div class="panel-item" v-for="val in extraValue.slice(0, 5)">
        <div class="panel-leabel">
          <img :src="val.svg" />
          {{ val.label }}
        </div>
        <data class="panel-number">{{ round(val.baseValue + val.extraValue, 1) }}%</data>
      </div>
    </div>
  </div>
  <div class="show-detail" @click="show = true"><Icon name="description" />详细属性</div>
  <Popup v-model:show="show" teleport="#app" position="bottom" round style="height: 86%" closeable>
    <div class="character-panel-popup">
      <div class="data-panel__title">基础属性</div>
      <div class="panel-item" v-for="(val, index) in baseValue">
        <div class="panel-leabel">
          <img :src="val.svg" />
          {{ val.label }}
        </div>
        <data
          >{{ round(val.baseValue) }}
          <data class="extra-text">+{{ round(val.extraValue) }}</data>
        </data>
      </div>
      <div class="data-panel__title">进阶属性</div>
      <div class="panel-item" v-for="val in extraValue">
        <div class="panel-leabel">
          <img :src="val.svg" />
          {{ val.label }}
        </div>
        <data>
          {{ round(val.baseValue + val.extraValue, 1) }}%
          <data class="extra-text"></data>
        </data>
      </div>
      <div class="data-panel__title">元素属性</div>
      <div class="panel-item" v-for="val in elementValue">
        <div class="panel-leabel">
          <img :src="val.svg" />
          {{ val.label }}
        </div>
        <data>
          {{ round(val.baseValue + val.extraValue, 1) }}%
          <span class="extra-text"></span>
        </data>
      </div>
    </div>
  </Popup>
</template>

<style scoped>
.character-panel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid var(--border);
  font-size: 12px;
  border-radius: 4px 4px 0 0;
}
.panel-number {
  padding-right: 12px;
}
.panel-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  text-wrap: nowrap;
  padding-left: 12px;
}
/* 设置偶数行的背景颜色 */
.panel-item:nth-child(even) {
  background-color: var(--light-text);
}
.panel-detail {
  font-size: 12px;
  line-height: 12px;
  text-align: right;
}
@media screen and (min-width: 550px) {
  .panel-detail {
    display: flex;
  }
}
.extra-text {
  color: var(--extra-text);
}
.character-panel-popup {
  padding: 40px 0;
  text-align: center;
}
.character-panel-popup .extra-text {
  display: inline-block;
  width: 60px;
  text-align: left;
}
.show-detail {
  text-align: center;
  line-height: 24px;
  border: 1px solid var(--border);
  border-top: none;
  margin-bottom: 16px;
  font-size: 12px;
  border-radius: 0 0 4px 4px;
  cursor: pointer;
}
.panel-item + .data-panel__title {
  margin-top: 20px;
}
.panel-leabel,
.panel-leabel span {
  display: flex;
  align-items: center;
}
</style>
<style>
.panel-leabel img {
  height: 1em;
  margin-right: 8px;
}
</style>
