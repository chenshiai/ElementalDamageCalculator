<script setup lang="ts">
import { ref, toRaw } from "vue";
import TabTitle from "@/component/TabTitle.vue";
import CalculationDataSelector from "@/component/CalculationDataSelector.vue";
import { Popup, Icon } from "vant";
import { IUesrSavedCalculations } from "@/constants/db";
import { Character } from "@/constants/characters-config/character";
import { Weapons } from "@/constants/characters-config/weapon";
import { IRelicItem } from "@/constants/characters-config/relic-class";
import { useRouter } from "vue-router";
import { IBuffBase, ICalculatorValue } from "@/types/interface";
import useRelicInfo from "../character-calculation/modules/relic-info";
import useCharacterInfo from "../character-calculation/modules/chararcter-info";
import useWeanponInfo from "../character-calculation/modules/weapon-info";
import { useStore } from "vuex";

interface ITeamItem {
  calculation: IUesrSavedCalculations;
  buffMap: Map<string, IBuffBase[]>;
}

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
      getValue: (_, stack) => {
        return eff.getValue(panel, stack);
      },
    };
  });
  return {
    label: buff.label,
    describe: buff.describe,
    enable: buff.enable,
    stack: buff.stack,
    stackable: buff.stackable,
    limit: buff.limit,
    target: buff.target,
    condition: buff.condition,
    stackText: buff.stackText,
    shareable: buff.shareable,
    effect,
  };
};
// 更新队伍数据
const store = useStore();
const teamList = ref<ITeamItem[]>([null, null, null, null]);
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
  store.commit("setTeamList", teamList.value);
};

const clear = (index) => {
  teamList.value[index] = null;
};

// 路由处理
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

// 数据信息获取
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
</script>

<template>
  <TabTitle>云上辉星</TabTitle>
  <div class="tips">从本地保存数据中，选择角色数据填入</div>
  <div class="team-list">
    <div class="show-click" @click="toCreateData">+创建角色数据</div>
    <div class="team-list__item" v-for="(item, index) in teamList" :key="index">
      <div class="team-list__item-avatar" @click="setSlotByIndex(index)">
        <template v-if="item">
          <img :src="getAvatarIcon(item.calculation.characterEnkaId)" />
          <div class="team-list__item-name">{{ getCharacterName(item.calculation.characterEnkaId) }}</div>
        </template>
        <div class="empty" v-else></div>
      </div>
      <div class="team-list__item-detail">
        <template v-if="item">
          <div class="dataname">数据名：{{ item.calculation?.title || "" }}</div>
          <div>装备缩略图</div>
          <div class="team-list__item-imgs">
            <img :src="getWeaponIcon(item.calculation.weaponEnkaId)" />
            <img
              v-for="(relic, index) in getRelics(item.calculation.relicList)"
              :key="index"
              class="relic-icon"
              v-lazy="relic?.icon || ''"
            />
          </div>
          <div class="team-list__item-options">
            <div @click="edit(index)">查看<Icon name="eye-o" /></div>
            <div @click="clear(index)">离队<Icon name="close" /></div>
          </div>
        </template>
      </div>
    </div>
  </div>
  <Popup class="data-popup" teleport="#app" v-model:show="show" style="max-height: 80%" position="top">
    <CalculationDataSelector :show-data-popup="show" @recalculation="handleCharacterChange" />
  </Popup>
</template>

<style scoped src="./style.css" />
