<script setup lang="ts">
import { ref, toRaw } from "vue";
import TabTitle from "@/component/TabTitle.vue";
import CalculationDataSelector from "@/component/CalculationDataSelector.vue";
import { Popup, Icon, showImagePreview } from "vant";
import { IUesrSavedCalculations } from "@/constants/db";
import { Character } from "@/constants/characters-config/character";
import { Weapons } from "@/constants/characters-config/weapon";
import { IRelicItem } from "@/constants/characters-config/relic-class";
import { useRouter } from "vue-router";
import { IBuffBase, ICalculatorValue } from "@/types/interface";
import useRelicInfo from "../character-calculation/modules/relic-info";
import useCharacterInfo from "../character-calculation/modules/chararcter-info";
import useWeanponInfo from "../character-calculation/modules/weapon-info";
import DataItem from "@/component/DataItem.vue";
import { useStore } from "vuex";

interface ITeamItem {
  calculation: IUesrSavedCalculations;
  buffMap: Map<string, IBuffBase[]>;
}

/** @module 面板数据选择 */
const show = ref(false);
const selectedIndex = ref(0);
const setSlotByIndex = (index) => {
  show.value = true;
  selectedIndex.value = index;
};

// 解构buff
const deconstructionBuff = (buff: IBuffBase, panel: ICalculatorValue) => {
  const effect = toRaw(buff.effect).map((eff) => {
    return {
      ...eff,
      getValue: (data, stack) => {
        // 使用闭包，将buff提供者的面板保存下来
        return eff.getValue(panel, stack, data);
      },
    };
  });
  return {
    label: buff.label,
    describe: buff.describe,
    // 共享的buff默认关闭状态，以免被重复计算
    enable: false,
    stack: buff.stack,
    stackable: buff.stackable,
    limit: buff.limit,
    target: buff.target,
    shareCondition: buff.shareCondition,
    stackText: buff.stackText,
    shareable: buff.shareable,
    effect,
  };
};

/** @module 队伍数据 */
const store = useStore();
const teamList = ref<ITeamItem[]>([null]);
const handleCharacterChange = (result: IUesrSavedCalculations) => {
  show.value = false;

  const map = new Map();
  const { characterInfo, characterBuffs } = useCharacterInfo(
    Character.find((c) => c.enkaId === result.characterEnkaId),
    result.panel.constellation
  );
  map.set(
    characterInfo.value.name,
    characterBuffs.value.filter((buff) => buff.shareable).map((buff) => deconstructionBuff(buff, result.panel))
  );

  const { weapon, weaponBuffs } = useWeanponInfo(
    Weapons.find((w) => w.enkaId === result.weaponEnkaId),
    result.affix
  );
  map.set(
    weapon.value.name,
    weaponBuffs.value.filter((buff) => buff.shareable).map((buff) => deconstructionBuff(buff, result.panel))
  );

  const { relicBuffs, relicSuitTexts } = useRelicInfo(JSON.parse(result.relicList));
  relicSuitTexts.value.forEach((item) => {
    map.set(
      item.name,
      relicBuffs.value.filter((buff) => buff.shareable).map((buff) => deconstructionBuff(buff, result.panel))
    );
  });

  teamList.value[selectedIndex.value] = {
    calculation: result,
    buffMap: map,
  };
  teamList.value.push(null);
  store.commit("setTeamList", teamList.value);
};

/** 清除数据 */
const clear = (index) => {
  teamList.value.splice(index, 1);
};

/** @module 编辑页面跳转 */
const router = useRouter();
const edit = (index) => {
  router.push({
    path: "/character/edit",
  });
  sessionStorage.setItem("editCharacter", JSON.stringify(teamList.value[index].calculation));
};
const toCreateData = () => {
  router.push({
    path: "/character/create",
  });
  sessionStorage.removeItem("editCharacter");
};

/** @module 展示信息获取 */
const getAvatarIcon = (enkaId: number) => {
  return Character.find((c) => c.enkaId === enkaId).icons.avatarIcon;
};
const getCharacterName = (enkaId: number) => {
  return Character.find((c) => c.enkaId === enkaId).name;
};

const getWeaponIcon = (enkaId: number) => {
  return Weapons.find((c) => c.enkaId === enkaId).icon;
};

const getRelics = (relicList: string) => {
  return JSON.parse(relicList) as IRelicItem[];
};

const handleImagePreview = () => {
  showImagePreview(["https://saomdpb.com/IMG_1457.PNG"]);
};
</script>

<template>
  <TabTitle>云上辉星（测试版）</TabTitle>
  <div class="tips">创建、更新角色数据后需要重新入队。</div>
  <div class="team-list">
    <div class="data-panel__title">队伍编辑</div>
    <span class="holy-relic-tips">点击+号，选择角色数据填入队伍，人数不设上限、角色也可重复</span>
    <div class="team-list__item" v-for="(item, index) in teamList" :key="index">
      <div class="team-list__item-avatar" @click="setSlotByIndex(index)">
        <template v-if="item">
          <img :src="getAvatarIcon(item.calculation.characterEnkaId)" />
          <div class="team-list__item-name">
            {{ getCharacterName(item.calculation.characterEnkaId) }}
          </div>
        </template>
        <div class="empty" v-else></div>
      </div>
      <div class="team-list__item-detail">
        <template v-if="item">
          <div class="dataname"><Icon name="notes-o" />{{ item.calculation?.title || "" }}</div>
          <div class="team-list__item-imgs">
            <img class="weapon-icon" :src="getWeaponIcon(item.calculation.weaponEnkaId)" />
            <img
              v-for="(relic, index) in getRelics(item.calculation.relicList)"
              :key="index"
              class="relic-icon"
              v-lazy="relic?.icon || ''"
              :alt="relic ? relic.name : null"
            />
          </div>
          <div class="team-list__item-options" @click="clear(index)">离队<Icon name="revoke" /></div>
          <div class="team-list__item-look" @click="edit(index)">查看更多<Icon name="description" /></div>
        </template>
      </div>
    </div>
  </div>
  <div class="show-click" @click="toCreateData">创建角色数据</div>

  <div class="data-panel">
    <DataItem v-model="store.state.teamBuffs.enemyLevel" title="敌人的等级" :stepperMin="1" />
    <DataItem v-model="store.state.teamBuffs.baseResistance" title="敌人抗性%" :stepperMin="-999">
      <div class="extra-btn" @click="handleImagePreview">查看抗性表</div>
    </DataItem>
  </div>
  <Popup class="data-popup" teleport="#app" v-model:show="show" style="max-height: 80%" position="top">
    <CalculationDataSelector :show-data-popup="show" @recalculation="handleCharacterChange" />
  </Popup>
</template>

<style scoped src="./style.css" />
