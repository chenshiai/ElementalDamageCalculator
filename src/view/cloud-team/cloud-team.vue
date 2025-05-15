<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Popup, Icon, showImagePreview } from "vant";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import { IBuffBase, IBuffExtra, ITeamItem } from "@/types/interface";
import { IUserSavedCalculationData } from "@/constants/db";
import { IRelicItem } from "@/constants/characters-config/relic-class";
import { Character } from "@/constants/characters-config/character";
import { Weapons } from "@/constants/characters-config/weapon";

import DataItem from "@/component/DataItem.vue";
import TabTitle from "@/component/TabTitle.vue";
import CalculationDataSelector from "@/component/CalculationDataSelector.vue";

import useRelicInfo from "../character-calculation/modules/relic-info";
import useCharacterInfo from "../character-calculation/modules/chararcter-info";
import useWeanponInfo from "../character-calculation/modules/weapon-info";
import { getBackGroundByElement } from "@/utils/get-color";

/** @module 面板数据选择 */
const show = ref(false);
const selectedIndex = ref(0);
const setSlotByIndex = (index) => {
  show.value = true;
  selectedIndex.value = index;
};

// 解构buff
const deconstructionBuff = (buff: IBuffBase, result: IUserSavedCalculationData): IBuffExtra => {
  const effect = buff.effect.map((eff) => {
    return {
      ...eff,
      getValue: (data, stack) => {
        // 使用闭包，将buff提供者的面板保存下来
        return eff.getValue(result.panel, stack, data);
      },
    };
  });
  return {
    ...buff,
    effect,
    // 共享的buff默认关闭状态，以免被重复计算
    enable: false,
    source: result.title,
  };
};

/** @module 队伍数据 */
const store = useStore();
const teamList = ref<ITeamItem[]>([null]);
onMounted(() => {
  const a: ITeamItem[] = JSON.parse(sessionStorage.getItem("teamList"));
  if (a) {
    a.forEach((data, index) => {
      if (data) characterJoinTeam(data.calculation, index);
    });
  }
});

// 获取共享的buff
const getShareBuff = (buffs: IBuffBase[], result: IUserSavedCalculationData): IBuffExtra[] => {
  return buffs.filter((buff) => buff.shareable).map((buff) => deconstructionBuff(buff, result));
};
// 将角色加入队伍的处理
const characterJoinTeam = (result: IUserSavedCalculationData, index: number) => {
  const map = new Map();
  const { characterInfo, characterBuffs } = useCharacterInfo(
    Character.find((c) => c.enkaId === result.characterEnkaId),
    result.panel.constellation
  );
  map.set(characterInfo.value.name, getShareBuff(characterBuffs.value, result));

  const { weapon, weaponBuffs } = useWeanponInfo(
    Weapons.find((w) => w.enkaId === result.weaponEnkaId),
    result.affix
  );
  map.set(weapon.value.name, getShareBuff(weaponBuffs.value, result));

  const { relicBuffs, relicSuitTexts } = useRelicInfo(JSON.parse(result.relicList));
  relicSuitTexts.value.forEach((item) => {
    map.set(item.name, getShareBuff(relicBuffs.value, result));
  });

  teamList.value[index] = {
    calculation: result,
    buffMap: map,
  };

  if (teamList.value[teamList.value.length - 1]) {
    teamList.value.push(null);
  }
  store.commit("setTeamList", teamList.value);
};
const handleCharacterChange = (result: IUserSavedCalculationData) => {
  show.value = false;
  characterJoinTeam(result, selectedIndex.value);
};

/** 清除数据 */
const clear = (index) => {
  teamList.value.splice(index, 1);
  store.commit("setTeamList", teamList.value);
};

/** @module 编辑页面跳转 */
const router = useRouter();
const edit = (index) => {
  router.push({
    path: "/character/edit",
  });
  store.commit("setCurrentEdit", teamList.value[index].calculation.title);
  sessionStorage.setItem("editCharacter", JSON.stringify(teamList.value[index].calculation));
};
const toCreateData = () => {
  router.push({
    path: "/character/create",
  });
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
  <TabTitle>角色组队计算</TabTitle>
  <div class="tips">点击+号，选择数据填入队伍，不设上限，可重复添加</div>
  
  <div class="data-panel__title">攻击目标设置</div>
    <DataItem v-model="store.state.teamBuffs.enemyLevel" title="敌人的等级" :stepperMin="1" />
    <DataItem v-model="store.state.teamBuffs.baseResistance" title="基础抗性%" :stepperMin="-999">
      <div class="extra-btn" @click="handleImagePreview">查看抗性表</div>
    </DataItem>
  <div class="team-list">
    <span class="holy-relic-tips">更新角色数据后需要重新入队。</span>
    <div class="data-panel__title">队伍编辑</div>
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
          <div class="team-list__item-look" @click="edit(index)">
            查看&编辑详细数据<Icon name="arrow-double-right" />
          </div>
        </template>
      </div>
    </div>
  </div>
  <div class="show-click" @click="toCreateData">去创建角色数据</div>
  <div>
    使用说明：
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
    使用Q&A：
    <p>
      问：更新了辅助角色的面板数据、武器或者圣遗物，但是TA提供的队伍增益却没有变化？<br />
      答：角色面板数据更新后，需要先离队再重新填入来更新队伍数据。[角色数据更新]只会出现在【重复命名】的情况下，如果是想对比同一个角色带不同装备的效果，建议不要重复命名。在保存数据时会有提示。
    </p>
    <p>
      【角色配置】：<br />
      问：为什么法器角色可以使用双手剑武器？<br />
      答：武器和圣遗物均未做严格限制，角色可以无视武器类型使用任何武器、圣遗物效果，你可以让那维莱特拿上暗影阔剑、可以让迪卢克拿上神乐之真意。旨在提高自由度更高的体验以及满足一些幻想（不是因为偷懒没做嗷），使用时请注意是否符合实际情况。
    </p>
    <p>
      问：为什么计算器得出的数据和游戏内的数值不一样？<br />
      答：因为官方尚未公开精准数据（精确到小数点后四位的那种），所以会存在细微误差，通常误差不会超过0.5%。
    </p>
    <p>
      问：得到了较大误差（0.5%以上），怎么办？<br />
      答：因为本计算器没做太多限制，先检查一下是否存在不符合实际情况的设置。若确定设置基本正确，仍出现了较大误差，可以联系作者反馈。
    </p>
  </div>

  <Popup class="data-popup" teleport="#app" v-model:show="show" style="max-height: 80%" position="top">
    <CalculationDataSelector :show-data-popup="show" @recalculation="handleCharacterChange" />
  </Popup>
</template>

<style scoped src="./style.css" />
