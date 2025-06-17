<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Popup, Icon } from "vant";
import { useStore } from "@/store";
import { useRouter } from "vue-router";

import { ITeamItem } from "@/types/interface";
import { IUserSavedCalculationData } from "@/constants/db";

import DataItem from "@/component/DataItem.vue";
import TabTitle from "@/component/TabTitle.vue";
import CalculationDataSelector from "@/component/CalculationDataSelector.vue";

import { getBackGroundByElement } from "@/utils/get-color";
import useTeamData from "./useTeamData";

/** @module 面板数据选择 */
const show = ref(false);
const selectedIndex = ref(0);
const setSlotByIndex = (index) => {
  show.value = true;
  selectedIndex.value = index;
};

/** @module 队伍数据 */
const store = useStore();
const {
  teamList,
  characterJoinTeam,
  leaveTeam,
  getAvatarIcon,
  getCharacterName,
  getWeaponIcon,
  getWeaponName,
  getRelics,
  edit,
} = useTeamData();

onMounted(() => {
  if (teamList.length > 1) return;
  const a: ITeamItem[] = JSON.parse(sessionStorage.getItem("teamList"));
  if (a) {
    a.forEach((data, index) => {
      if (data) characterJoinTeam(data.calculation, index);
    });
  }
});

const handleCharacterChange = (result: IUserSavedCalculationData) => {
  show.value = false;
  characterJoinTeam(result, selectedIndex.value);
};

/** @module 新建角色页面跳转 */
const router = useRouter();
const toCreateData = () => {
  router.push({
    path: "/character/create",
  });
};
</script>

<template>
  <TabTitle>角色组队计算</TabTitle>
  <div class="tips">点击+号，选择数据填入队伍，不设上限，可重复添加</div>

  <div class="data-panel__title">攻击目标设置</div>
  <DataItem v-model="store.state.teamData.enemyLevel" title="敌人的等级" :stepperMin="1" />
  <DataItem v-model="store.state.teamData.baseResistance" title="基础抗性%" :stepperMin="-999" />
  <div class="team-list">
    <div class="data-panel__title">队伍编辑</div>
    <section class="team-list__section">
      <div class="team-list__item" v-for="(item, index) in teamList" :key="index">
        <div class="team-list__item-avatar" @click="setSlotByIndex(index)">
          <template v-if="item">
            <img
              :class="getBackGroundByElement(item.calculation.panel.element)"
              :src="getAvatarIcon(item.calculation.characterEnkaId)"
            />
            <div class="team-list__item-name">
              {{ getCharacterName(item.calculation.characterEnkaId) }}
            </div>
          </template>
          <div class="empty" v-else></div>
        </div>
        <div class="team-list__item-detail">
          <template v-if="item">
            <div class="dataname">数据名：{{ item.calculation?.title || "" }}</div>
            <div class="team-list__item-imgs">
              <img
                class="weapon-icon"
                :src="getWeaponIcon(item.calculation.weaponEnkaId)"
                :title="getWeaponName(item.calculation.weaponEnkaId)"
              />
              <img
                v-for="(relic, index) in getRelics(item.calculation.relicList)"
                :key="index"
                class="relic-icon"
                v-lazy="relic?.icon || ''"
                :title="relic?.name || ''"
                :alt="relic ? relic.name : null"
              />
            </div>
            <div class="team-list__item-options" @click="leaveTeam(index)">离队<Icon name="revoke" /></div>
            <div class="team-list__item-look" @click="edit(index)">
              查看/编辑 详细数据<Icon name="arrow-double-right" />
            </div>
          </template>
        </div>
      </div>
    </section>
  </div>
  <div class="show-click active-btn" @click="toCreateData">去创建角色数据</div>
  <details>
    <summary>点此查看使用说明<Icon name="question" /></summary>
    <p>
      敌人的等级：<br />
      是角色攻击目标的等级，目标等级会影响到防御力减伤。在计算角色的伤害前，请先设置好被攻击目标的等级。
    </p>
    <p>
      基础抗性%：<br />
      是角色攻击目标的基础抗性，每个敌人都有不同的抗性，可以通过抗性表查看。如果需要输入负抗性，可以先设置为0，然后点击一下减号变成【-1】，这样就有负号了。
    </p>
    <p>
      队伍编辑：<br />
      可以点击【去创建角色数据】前往编辑页面，在编辑、保存完成后，可以点击“+”号选择角色数据填入队伍。
    </p>
    <br />
    使用答疑：
    <p>
      问：为什么法器角色可以使用双手剑武器？<br />
      答：武器和圣遗物均未做严格限制，在本计算器中，角色可以无视武器类型使用任何武器、圣遗物效果，你可以让那维莱特拿上暗影阔剑、可以让迪卢克拿上神乐之真意。旨在提高自由度更高的体验以及满足一些幻想（不是因为偷懒没做嗷），使用时请注意是否符合实际情况。
    </p>
    <p>
      问：为什么计算器得出的数据和游戏内的数值不一样？<br />
      答：因为官方尚未公开精准数据（精确到小数点后四位的那种），所以会存在细微误差，通常误差不会超过0.5%。
    </p>
    <p>
      问：得到了较大误差（0.5%以上），怎么办？<br />
      答：因为本计算器没做太多限制，先检查一下是否存在不符合实际情况的设置。若确定设置基本正确，仍出现了较大误差，可以联系作者反馈。
    </p>
  </details>
  <Popup class="data-popup" teleport="#app" v-model:show="show" style="max-height: 80%" position="top">
    <CalculationDataSelector :show-data-popup="show" @recalculation="handleCharacterChange" />
  </Popup>
</template>

<style scoped src="./style.css" />
