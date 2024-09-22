<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { Checkbox, Icon } from "vant";
import { ICharacterInfo, IWeaponInfo, IBuffBase } from "@/constants/characters-config/interface.d";

interface IProps {
  characterBuffs?: IBuffBase[];
  weaponBuffs?: IBuffBase[];
  relicBuffs?: IBuffBase[];
}
const { characterBuffs, weaponBuffs, relicBuffs } = defineProps<IProps>();
const buffs = defineModel<IBuffBase[]>();

</script>

<template>
  <!-- buff信息 -->
  <div class="buffs-container">
    <div>角色自身增益</div>
    <div v-for="(buff, index) in characterBuffs" :key="buff.label + index" class="buff-item">
      <Checkbox class="buff-label" v-model="buff.enable" checked-color="#766461">
        <div class="buff-label-text">{{ buff.label }}</div>
      </Checkbox>
      <div class="buff-detail-check">
        <!-- <Icon
          class="memo-close"
          name="delete-o"
        /> -->
        <input type="checkbox" />
      </div>
      <div class="buff-description">
        {{ buff.describe }}
      </div>
    </div>
    <div>武器技能增益</div>
    <div v-for="(buff, index) in weaponBuffs" :key="buff.label + index" class="buff-item">
      <Checkbox class="buff-label" v-model="buff.enable" checked-color="#766461">
        <div class="buff-label-text">{{ buff.label }}</div>
      </Checkbox>
      <div class="buff-detail-check">
        <!-- <Icon
          class="memo-close"
          name="delete-o"
        /> -->
        <input type="checkbox" />
      </div>
      <div class="buff-description">
        {{ buff.describe }}
      </div>
    </div>
    <div>圣遗物增益</div>
    <div v-for="(buff, index) in relicBuffs" :key="buff.label + index" class="buff-item">
      <Checkbox class="buff-label" v-model="buff.enable" checked-color="#766461">
        <div class="buff-label-text">{{ buff.label }}</div>
      </Checkbox>
      <div class="buff-detail-check">
        <!-- <Icon
          class="memo-close"
          name="delete-o"
        /> -->
        <input type="checkbox" />
      </div>
      <div class="buff-description">
        {{ buff.describe }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.buffs-container {
  display: flex;
  flex-direction: column;
}

.buff-item {
  position: relative;
  border: 1px solid var(--border);
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 4px;
}
.buff-detail-check {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 12px;
  height: 38px;
  display: flex;
  align-items: center;
}
.buff-label {
  display: flex;
  width: 100%;
}
.buff-label-text {
  color: var(--main-text);
}

.buff-description {
  display: none;
  color: #666;
  font-size: 14px;
}

.buff-effects {
  color: #333;
  font-size: 14px;
}
.buff-detail-check:has(input:checked) + .buff-description {
  display: block;
}

input[type="checkbox"] {
  width: 20px;
  height: 20px;
  appearance: none; /* 移除默认外观 */
  outline: none; /* 移除焦点轮廓 */
  border: 1px solid var(--border);
  position: relative;
  border-radius: 4px;
}

input[type="checkbox"]::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 2px;
  background-color: var(--bg);
}

input[type="checkbox"]::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(90deg);
  width: 60%;
  height: 2px;
  background-color: var(--bg);
}

input[type="checkbox"]:checked {
  background-color: var(--bg);
}

/* 创建一个勾选标记 */
input[type="checkbox"]:checked::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 2px;
  background-color: var(--light-text);
}
input[type="checkbox"]:checked::after {
  display: none;
}
.memo-close {
  font-size: 20px;
  color: red;
  display: none;
  margin-right: 10px;
}
.buff-detail-check:has(input:checked) .memo-close {
  display: block;
}
</style>
