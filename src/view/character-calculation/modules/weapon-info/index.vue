<script setup lang="ts">
import WeaponSelector from "@/component/WeaponSelector.vue";
import { IWeaponInfo } from "@/types/interface";
import { AppendProp } from "@/types/enum";
import getBackGroundByRarity from "@/utils/get-color";
import { getAppendPropName2 } from "@/constants/append-prop";
import { ref, computed } from "vue";
import { Popup, Rate, Icon, Stepper } from "vant";

const emit = defineEmits(["changed"]);
const show = ref(false);
const handleWeaponChange = (weapons: IWeaponInfo) => {
  weapon.value = weapons;
  emit("changed");
};
const weapon = defineModel<null | IWeaponInfo>();
const affix = defineModel<number>("affix", {
  default: 1,
});

const describe = computed(() => {
  return weapon.value?.getSkillDescribe(affix.value);
});
const weaponStats = computed(() => {
  return [
    {
      title: "基础攻击力",
      value: weapon.value.weaponStats[0].statValue,
      suffix: "",
    },
    weapon.value.weaponStats[1]?.statValue > 0 && {
      title: getAppendPropName2(weapon.value.weaponStats[1].appendPropId),
      value: weapon.value.weaponStats[1].statValue,
      suffix: weapon.value.weaponStats[1].appendPropId === AppendProp.ELEMENT_MASTERY ? "" : "%",
    },
  ];
});
</script>

<template>
  <div v-if="!weapon" class="show-click active-btn" @click="show = true">+添加武器</div>
  <template v-else>
    <div class="weapon-info">
      <div class="avatar-info">
        <div :class="['name', getBackGroundByRarity(weapon.rarity)]">
          {{ weapon?.name }}
          （Lv.{{ weapon.level }}）
        </div>
        <div v-for="item in weaponStats">
          <span v-show="item" class="weapon-info__base-data-item">
            <span>{{ item.title }}</span>
            <data>{{ item.value }}{{ item.suffix }}</data>
          </span>
        </div>
        <div class="affix">
          精炼等阶：<Stepper
            @change="emit('changed')"
            theme="round"
            button-size="20"
            input-width="66px"
            v-model="affix"
            min="1"
            max="5"
          /><br />
        </div>
        <Rate v-model="affix" color="#997874" icon="fire" void-icon="fire-o" />
      </div>
      <div class="avatar active-btn" @click="show = true">
        <img :src="weapon?.icon" />
        <Icon name="exchange" />
      </div>
    </div>
    <div class="weapon-describe">{{ describe.title || "描述" }}：<span v-html="describe.text"></span></div>
  </template>
  <Popup teleport="#app" v-model:show="show" position="right" :style="{ width: '100%', height: '100vh' }">
    <WeaponSelector @close="show = false" :defaultName="weapon?.name || ''" :handleChange="handleWeaponChange" />
  </Popup>
</template>

<style scoped>
.weapon-info {
  margin-bottom: 16px;
  position: relative;
}
.weapon-info:has(+ .weapon-describe) {
  margin-bottom: 8px;
}
.avatar {
  position: absolute;
  top: 0;
  right: 0;
  width: 130px;
  height: 130px;
  box-sizing: border-box;
  cursor: pointer;
}

.avatar img {
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  height: 100%;
  object-fit: contain;

  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%);
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%); /* Safari 和 Chrome */
}
.avatar i {
  position: absolute;
  right: 0px;
  top: 30px;
  border: 1px solid var(--border);
  color: var(--light-text);
  background-color: var(--bg);
}

.avatar-info {
  flex: 1;
}
.weapon-info__base-data-item {
  display: flex;
  width: 60%;
  margin-top: 4px;
  border-radius: 4px;
  overflow: hidden;
  background-color: var(--light-text);

  & span {
    background-color: var(--main-text);
    color: var(--light-text);
    padding: 0 4px;
  }

  & data {
    flex: 1;
    text-align: center;
  }
}
.name {
  line-height: 24px;
  font-size: 16px;
  text-align: center;
  color: var(--light-text);
  border-radius: 4px;
}

.weapon-stats {
  display: flex;
  justify-content: space-between;
}

.weapon-describe {
  margin-bottom: 16px;
  font-size: 12px;
}
.show-click {
  text-align: center;
  border: 1px solid var(--border);
  margin-bottom: 16px;
  border-radius: 4px;
  height: 120px;
  line-height: 120px;
  cursor: pointer;
}
</style>
