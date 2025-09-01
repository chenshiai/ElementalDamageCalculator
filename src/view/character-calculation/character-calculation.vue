<script setup lang="ts">
import { computed, watchEffect, toRaw, ref } from "vue";
import { showNotify, showConfirmDialog } from "vant";
import TabTitle from "@/component/TabTitle.vue";
import TeamListNav from "@/component/TeamListNav.vue";
import CharacterPanel from "./modules/CharacterPanel.vue";

import { ICalculatorValue } from "@/types/interface";
import CalculatorValueClass from "@/constants/characters-config/calculator-value-class";

import useCharacterInfo, { CharacterInfo } from "./modules/chararcter-info";
import useWeaponInfo, { WeaponInfo } from "./modules/weapon-info";
import useRelicInfo, { RelicInfo } from "./modules/relic-info";
import useBuffInfo, { BuffInfo } from "./modules/buff-info";
import useSkillInfo, { SkillInfo } from "./modules/skill-info";
import useTeamData from "../cloud-team/useTeamData";

import { useStore } from "@/store";
const store = useStore();

/** @module 页面展示用数据 */
const { characterInfo, constellation, levelUp, characterBuffs, initCharacterInfo } = useCharacterInfo();
const { weapon, affix, weaponBuffs, initWeaponInfo } = useWeaponInfo();
const { relicList, relicBuffs, relicSuitTexts, initRelicInfo } = useRelicInfo();
const { buffs } = useBuffInfo();
const { normalLevel, skillLevel, burstLevel, initSkillInfo } = useSkillInfo();

/** @module 面板计算 */
import calculationPanel from "@/utils/calculate/calculate-panel";
const CalculatorValue = computed<ICalculatorValue>(() => {
  if (!characterInfo.value || !weapon.value) return new CalculatorValueClass();
  return calculationPanel({
    characterInfo: characterInfo.value,
    weapon: weapon.value,
    relicList: relicList.value,
    characterBuffs: characterBuffs.value,
    weaponBuffs: weaponBuffs.value,
    relicBuffs: relicBuffs.value,
    buffs: buffs.value,
    constellation: constellation.value,
    normalLevel: normalLevel.value,
    skillLevel: skillLevel.value,
    burstLevel: burstLevel.value,
  });
});

/** @module 数据保存 */
import { IUserSavedCalculationData, calDB } from "@/constants/db";
const { characterJoinTeam } = useTeamData();
import SaveCalculation from "@/component/SaveCalculation.vue";
import db from "@/utils/db";

const createCalculationData = (title: string): IUserSavedCalculationData => {
  return {
    title,
    characterEnkaId: characterInfo.value?.enkaId,
    weaponEnkaId: weapon.value?.enkaId,
    affix: affix.value,
    weaponLevel: weapon.value?.level,
    weaponMainStats: toRaw(weapon.value?.weaponStats[0]),
    weaponSubStats: toRaw(weapon.value?.weaponStats[1]),
    // indexDB存不了数组，转化为JSON字符串
    relicList: JSON.stringify(relicList.value),
    panel: CalculatorValue.value,
  };
};

const saveCalculationResult = (title: string) => {
  if (!characterInfo.value || !weapon.value) {
    showNotify({
      type: "warning",
      message: "请先配置角色和武器",
    });
    return;
  }

  const data = createCalculationData(title);
  if (teamIndex.value >= 0) {
    characterJoinTeam(data, teamIndex.value);
  }
  
  db.add(calDB.storeName, data)
    .then(() => {
      showNotify({
        type: "success",
        message: "面板数据已保存",
      });
    })
    .catch(() => {
      showConfirmDialog({
        message: "同名数据已存在，是否覆盖？",
      })
        .then(() => {
          db.put(calDB.storeName, data).then(() => {
            showNotify({
              type: "warning",
              message: "重名数据已更新",
            });
          });
        })
        .catch(() => {});
    });
};

/** @module 数据重算（再次编辑） */
import { Character } from "@/constants/characters-config/character";
import { Weapons } from "@/constants/weapon-config/weapon";
const recalculation = (data: IUserSavedCalculationData) => {
  const cha = Character.find((c) => c.enkaId === data.characterEnkaId);

  characterInfo.value = {
    ...cha,
    baseATK: data.weaponMainStats ? data.panel.baseATK - data.weaponMainStats.statValue : cha.baseATK,
    overshoot: data.panel.overshoot || 6, // 旧版面板数据不存在overshoot字段，默认为6
    baseDEF: data.panel.baseDEF,
    baseHP: data.panel.baseHP,
    level: data.panel.level,
  };
  if (data.panel.level === 95) levelUp.value = 1;
  if (data.panel.level === 100) levelUp.value = 2;

  const wea = Weapons.find((w) => w.enkaId === data.weaponEnkaId);
  weapon.value = {
    ...wea,
    ...(data.weaponMainStats
      ? {
          weaponStats: [data.weaponMainStats, data.weaponSubStats],
        }
      : {}),
    level: data.weaponLevel,
  };
  constellation.value = data.panel.constellation;
  affix.value = data.affix;
  relicList.value = JSON.parse(data.relicList);
  normalLevel.value = data.panel.normalLevel;
  skillLevel.value = data.panel.skillLevel;
  burstLevel.value = data.panel.burstLevel;
};

/** @module 路由判断 */
import { useRoute } from "vue-router";
const route = useRoute();
/** 当前编辑角色处于的队伍中的位置 */
const teamIndex = ref(-1);

watchEffect(() => {
  if (route.params.mode === "edit") {
    const data = sessionStorage.getItem("editCharacter");
    const index = sessionStorage.getItem("editTeamIndex");
    teamIndex.value = index ? +index : -1;

    store.commit("setCurrentEdit", decodeURIComponent(route.params.title as string));

    if (data) {
      recalculation(JSON.parse(data));
    }
  } else {
    initCharacterInfo();
    initRelicInfo();
    initSkillInfo();
    initWeaponInfo();
    teamIndex.value = -1;
    store.commit("setCurrentEdit", "");
    sessionStorage.setItem("editTeamIndex", null);
  }
});
const pageTitle = computed(() => {
  return route.params.mode === "edit" ? "编辑角色数据" : "创建角色数据";
});

/** @module 实时更新队伍数据 */
const changed = () => {
  if (!characterInfo.value || !weapon.value) return;
  const data = createCalculationData(store.state.teamData.currentEdit);
  if (teamIndex.value >= 0) {
    characterJoinTeam(data, teamIndex.value);
  }
};
</script>

<template>
  <TabTitle>{{ pageTitle }}</TabTitle>
  <div class="tips">默认的角色、武器和圣遗物均以满级数据计算。可以自由搭配。</div>
  <TeamListNav />
  <section class="calculation-section">
    <div class="calculation-section__item">
      <CharacterInfo
        v-model="characterInfo"
        v-model:level-up="levelUp"
        v-model:constellation="constellation"
        @changed="changed"
      />
    </div>
    <div class="calculation-section__item">
      <WeaponInfo v-model="weapon" v-model:affix="affix" @changed="changed" />
    </div>
  </section>
  <RelicInfo v-model="relicList" :relic-suit-texts="relicSuitTexts" @changed="changed" />
  <template v-if="characterInfo && weapon">
    <CharacterPanel :character-panel-data="CalculatorValue" :element-type="characterInfo?.element" />
    <section class="calculation-section scroll-y">
      <div class="calculation-section-buffs">
        <BuffInfo
          v-model="buffs"
          v-model:character-buffs="characterBuffs"
          v-model:weapon-buffs="weaponBuffs"
          v-model:relic-buffs="relicBuffs"
          :character-info="characterInfo"
          @changed="changed"
        />
      </div>
      <div class="calculation-section-skillinfo">
        <SkillInfo
          :calculator-value="CalculatorValue"
          :character-info="characterInfo"
          :weapon="weapon"
          :affix="affix"
          v-model:normalLevel="normalLevel"
          v-model:skillLevel="skillLevel"
          v-model:burstLevel="burstLevel"
          @changed="changed"
        />
      </div>
    </section>
  </template>
  <SaveCalculation @save-data="saveCalculationResult" />
</template>

<style scoped>
@media screen and (min-width: 768px) {
  .calculation-section {
    display: flex;
    gap: 16px;
  }
  .calculation-section__item {
    flex: 1;
  }
  .scroll-y {
    overflow-y: scroll;
    height: 550px;
  }
  .calculation-section-skillinfo {
    position: sticky;
    flex: 1;
    top: 0;
  }
  .calculation-section-buffs {
    width: 40%;
  }
}
</style>
