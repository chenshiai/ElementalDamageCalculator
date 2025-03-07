<script setup lang="ts">
import { RadioGroup, Radio } from "vant";
import { ElementalReactionType } from "@/constants";
const { size } = defineProps({
  size: { default: "large" },
});
const atkType = defineModel<ElementalReactionType>();
</script>

<template>
  <div :class="['atk-type-panel', size]">
    <RadioGroup style="margin-top: 12px" v-model="atkType">
      <Radio :name="ElementalReactionType.None" class="atk-type-none">无反应</Radio>
      <div class="horizontal">
        <Radio :name="ElementalReactionType.Rate" class="atk-type-item">
          <span class="atk-type-text">水蒸·火融</span>
          <span class="water bg-left"></span>
          <span class="fire bg-right"></span>
        </Radio>
        <Radio :name="ElementalReactionType.Rate2" class="atk-type-item">
          <span class="atk-type-text">冰融·火蒸</span>
          <span class="ice bg-left"></span>
          <span class="fire bg-right"></span>
        </Radio>
        <Radio :name="ElementalReactionType.Aggravate" class="atk-type-item">
          <span class="atk-type-text">超激化</span>
          <span class="electro"></span>
        </Radio>
        <Radio :name="ElementalReactionType.Spread" class="atk-type-item">
          <span class="atk-type-text">蔓激化</span>
          <span class="dendro"></span>
        </Radio>
      </div>
    </RadioGroup>
  </div>
</template>
<style scoped>
.atk-type-panel .van-radio {
  flex: 1;
  text-align: center;
  justify-content: center;
  font-size: 14px;
}
.atk-type-panel .horizontal {
  display: flex;
  width: 100%;
  gap: 8px;
}
.atk-type-item,
.atk-type-none {
  height: 34px;
  border-radius: 4px;
  border: solid 1px var(--stroke-2);
  font-weight: bold;
  margin-bottom: 12px;
}
.small .atk-type-item,
.small .atk-type-none {
  height: 24px;
}
.atk-type-item[aria-checked="true"],
.atk-type-none[aria-checked="true"] {
  background-color: var(--button-bg);
  color: var(--light-text);
}
.atk-type-item {
  height: 54px;
  position: relative;
}
.atk-type-text {
  position: relative;
  z-index: 1;
}

.water,
.fire,
.ice,
.dendro,
.electro {
  position: absolute;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 54px;
  opacity: 0.5;
  bottom: 0;
  right: 0;
  /* z-index: -1; */
}
.small .water,
.small .fire,
.small .ice,
.small .dendro,
.small .electro {
  height: 24px;
  background-size: 34px;
}

.bg-left {
  top: -15px;
  left: -24px;
}

.bg-right {
  bottom: -15px;
  right: -24px;
}

.water {
  background-image: url("/img/hydro.png");
}

.fire {
  background-image: url("/img/pyro.png");
}

.ice {
  background-image: url("/img/cryo.png");
}

.dendro {
  background-image: url("/img/dendro.png");
}

.electro {
  background-image: url("/img/electro.png");
}
</style>
<style>
.atk-type-panel .van-radio__label {
  margin: 0;
  color: inherit;
}
.atk-type-panel .van-radio__icon {
  display: none;
}
</style>
