<template>
  <tab-title>单次伤害计算</tab-title>
  <div class="tips">可以自由填入属性值查看相应的伤害，适合对游戏伤害计算方式比较熟悉的人使用。暂不支持月曜反应伤害计算。</div>
  <div class="data-panel">
    <section>
      <div class="data-panel__title">基础属性</div>
      <div class="data-panel__basic">
        <details class="basic-panel-item" name="basic-panel" open>
          <summary @click="basicPanelSelect = basicPanelSelectType.ATK">
            <span class="basic-panel-item-title">攻击力</span>
            <div class="basic-panel-item-total">
              {{ baseATK + sumExtraATKNumber }}
            </div>
            <div class="basic-detial">
              {{ baseATK }} +
              <span style="color: #49ff39">{{ sumExtraATKNumber }}</span>
            </div>
          </summary>
        </details>
        <details class="basic-panel-item" name="basic-panel">
          <summary @click="basicPanelSelect = basicPanelSelectType.HP">
            <span class="basic-panel-item-title">生命值</span>
            <div class="basic-panel-item-total">
              {{ baseHP + sumExtraHPNumber }}
            </div>
            <div class="basic-detial">
              {{ baseHP }}+
              <span style="color: #49ff39">{{ sumExtraHPNumber }}</span>
            </div>
          </summary>
        </details>
        <details class="basic-panel-item" name="basic-panel">
          <summary @click="basicPanelSelect = basicPanelSelectType.DEF">
            <span class="basic-panel-item-title">防御力</span>
            <div class="basic-panel-item-total">
              {{ baseDEF + sumExtraDEFNumber }}
            </div>
            <div class="basic-detial">
              {{ baseDEF }}+
              <span style="color: #49ff39">{{ sumExtraDEFNumber }}</span>
            </div>
          </summary>
        </details>
        <details class="basic-panel-item" name="basic-panel">
          <summary @click="basicPanelSelect = basicPanelSelectType.EM">
            <span class="basic-panel-item-title">元素精通</span>
            <div>
              {{ elementalMystery }}
            </div>
          </summary>
        </details>
      </div>
      <div v-show="basicPanelSelect === basicPanelSelectType.DEF">
        <DataItem v-model="baseDEF" title="基础防御力" tips="面板防御力白字" stepperInteger :stepperMin="0" />
        <DataItem v-model="extraDEF" title="额外防御力" tips="常驻防御力绿字" stepperInteger :stepperMin="0" />
        <div class="data-panel__note-group">
          <NoteGroup v-model="extraPercentDEF" v-bind="NotesConfig.percentDEF" :selectedNotes="selectedExtraDEFNotes" />
          <NoteGroup v-model="extraFixedDEF" v-bind="NotesConfig.fixedDEF" :selectedNotes="selectedFixedDEFNotes" />
        </div>
      </div>
      <div v-show="basicPanelSelect === basicPanelSelectType.HP">
        <DataItem v-model="baseHP" title="基础生命值" tips="面板生命值白字" stepperInteger :stepperMin="0" />
        <DataItem v-model="extraHP" title="额外生命值" tips="常驻生命值绿字" stepperInteger :stepperMin="0" />
        <div class="data-panel__note-group">
          <NoteGroup v-model="extraPercentHP" v-bind="NotesConfig.percentHP" :selectedNotes="selectedExtraHPNotes" />
        </div>
      </div>
      <div v-show="basicPanelSelect === basicPanelSelectType.ATK">
        <DataItem v-model="baseATK" title="基础攻击力" tips="面板攻击力白字" stepperInteger :stepperMin="0" />
        <DataItem v-model="extraATK" title="额外攻击力" tips="常驻攻击力绿字" stepperInteger :stepperMin="0">
          <Popover position="top-right">
            <div class="data-item-popover__content">
              『攻击力加成%』是根据『基础攻击力』的百分比来计算攻击力提升，其计算后的数值会直接加在最上方『攻击力总计』的
              <span style="color: #49ff39">绿字</span>里。 <br /><br />
              一些无法常驻的攻击力加成%可以在标签组里保存，方便切换。
            </div>
            <template #trigger>
              <Icon size="26" name="question" />
            </template>
          </Popover>
        </DataItem>
        <div class="data-panel__note-group">
          <NoteGroup v-model="extraPercentATK" v-bind="NotesConfig.percentATK" :selectedNotes="selectedExtraATKNotes" />
          <NoteGroup v-model="extraFixedATK" v-bind="NotesConfig.fixedATK" :selectedNotes="selectedFixedATKNotes" />
        </div>
      </div>
      <div v-show="basicPanelSelect === basicPanelSelectType.EM">
        <DataItem v-model="elementalMystery" title="元素精通" tips="" :stepperMin="0" />
        <div class="data-panel__note-group">
          <NoteGroup v-model="elementalMystery" v-bind="NotesConfig.fixedEM" :selectedNotes="selectedFixedEMNotes" />
        </div>
      </div>
    </section>

    <section>
      <div class="data-panel__title">技能倍率</div>
      <div class="data-panel__basic">
        <div class="basic-panel-item">
          <span class="basic-panel-item-title">攻击倍率%</span>
          <input class="basic-panel-input" type="number" v-model="atkRate" />
        </div>
        <div class="basic-panel-item">
          <span class="basic-panel-item-title">生命倍率%</span>
          <input class="basic-panel-input" type="number" v-model="hpRate" />
        </div>
        <div class="basic-panel-item">
          <span class="basic-panel-item-title">防御倍率%</span>
          <input class="basic-panel-input" type="number" v-model="armRate" />
        </div>
        <div class="basic-panel-item">
          <span class="basic-panel-item-title">精通倍率%</span>
          <input class="basic-panel-input" type="number" v-model="emRate" />
        </div>
      </div>
      <DataItem v-model="extraRate" title="倍率增幅%" :stepperMin="0" :decimalLength="1">
        <Popover position="top-right">
          <div class="data-item-popover__content">
            <b>倍率增幅：</b>
            例：宵宫释放元素战技后的普通攻击“造成152%普通攻击伤害”，即“普通攻击<b>倍率增幅</b>为(152%-100%)=<b>52%</b>”；还有行秋4命、流浪者普攻、莱欧斯利普攻、那维莱特重击160%和芙宁娜战技140%。<br />
          </div>
          <template #trigger>
            <Icon size="26" name="question" />
          </template>
        </Popover>
      </DataItem>
      <DataItem v-model="additionalDemage" title="伤害提高值" tips="" :stepperMin="0" :decimalLength="2">
        <Popover position="bottom-right">
          <div class="data-item-popover__content">
            <b>基础伤害值 = (基础属性x最终倍率) + 伤害提高值 + 激化提高值</b><br />
            <p><b>基础伤害值：</b>基础属性乘以最终倍率的数值为基础伤害值。</p>
            <p><b>激化提高值：</b>雷元素和草元素的激化反应带来的提升值，受角色等级和元素精通影响。</p>
            <p>
              <b>伤害提高值：</b>部分角色天赋或装备带有“xx<span style="color: #49ff39">伤害值提升(高)</span
              >”的描述，例如：钟离·炊金馔玉、云堇·元素爆发、申鹤·元素战技、一斗·荒泷逆袈裟和圣遗物来歆余响等。
            </p>
            <b>可以点击【伤害提高值】便签进行添加</b>
          </div>
          <template #trigger>
            <Icon size="26" name="question" />
          </template>
        </Popover>
      </DataItem>
      <div class="data-panel__note-group">
        <NoteGroup
          v-model="additionalDemage"
          v-bind="NotesConfig.additionalDemage"
          :selectedNotes="selectedAdditionalDemageNotes"
        />
      </div>
    </section>

    <section>
      <DataItem v-model="critDemage" title="暴击伤害%" tips="" :stepperMin="0" :decimalLength="1" />
      <DataItem v-model="elementDemage" title="伤害加成%" tips="各种增伤、减伤" :stepperMin="-200" :decimalLength="2">
        <Popover position="top-right">
          <div class="data-item-popover__content">
            <b>攻击伤害值以一定比例改变：</b>
            <br />
            基础100% + 特定技能加伤% + 元素加伤% + 造成伤害提高% + 受到伤害提高%。
            <br />
            <p>
              <b>技能加伤：</b>满足条件时的加伤，例如角色天赋/命座、圣遗物套装、武器技能等<br />
              <b>元素加伤：</b>面板上的对应元素(物理)伤害加成<br />
              <b>造成伤害：</b>角色造成的伤害提高(加伤)、造成的伤害降低(降伤)<br />
              <b>受到伤害：</b>敌人受到的伤害提高(易伤)、受到的伤害降低(减伤)<br />
            </p>
            <b>可以在下方标签组中快捷添加各种加成。</b>
          </div>
          <template #trigger>
            <Icon size="26" name="question" />
          </template>
        </Popover>
      </DataItem>
      <div class="data-panel__note-group">
        <NoteGroup
          v-model="elementDemage"
          v-bind="NotesConfig.elementDemage"
          :selectedNotes="selectedElementDemageNotes"
        />
      </div>
    </section>

    <section class="result-section">
      <DataItem v-model="characterLevel" title="角色的等级" :stepperMax="100" :stepperMin="1" />
      <DataItem v-model="enemyLevel" title="敌人的等级" :stepperMin="1" />
      <DataItem v-model="enemyResistance" title="敌人抗性%" :stepperMin="-999" />
      <DataItem v-model="weaken" title="减少抗性%" :stepperMin="0" :stepperMax="300" />
      <DataItem v-model="armour" title="减少防御%" :stepperMin="0" :stepperMax="90" />
      <DataItem v-model="armourPiercing" title="无视防御%" :stepperMin="0" :stepperMax="100" />
    </section>
  </div>

  <section>
    <div class="data-panel__title">反应类型</div>
    <AtkTypeSelector v-model="atkType" />
    <Cell
      v-show="atkType === ElementalReactionType.Rate || atkType === ElementalReactionType.Rate2"
      center
      title="炽烈的炎之魔女，增幅反应伤害提升15%"
    >
      <template #right-icon>
        <Switch v-model="witch" active-color="#766461" inactive-color="#b7a19e" size="16" />
      </template>
    </Cell>
    <Cell v-show="atkType === ElementalReactionType.Aggravate" center title="如雷的盛怒，超激化[伤害提升]提高20%">
      <template #right-icon>
        <Switch v-model="thunder" active-color="#766461" inactive-color="#b7a19e" size="16" />
      </template>
    </Cell>
    <Cell
      v-show="atkType === ElementalReactionType.Aggravate || atkType === ElementalReactionType.Spread"
      title="白术天赋·在地为化 输入生命值"
      center
    >
      <template #right-icon>
        <input class="ex-input" type="number" v-model="baizhuHP" />
      </template>
    </Cell>
  </section>
  <div :class="['dmg-result', floatChecked && 'increase-result__top']">
    <div class="result-grid">
      <div class="grid-item">
        伤害数值
        <div class="normal-damage">
          {{ increaseResult.common }}
        </div>
      </div>
      <div class="grid-item">
        暴击伤害
        <div class="crit-damage">
          {{ increaseResult.crit }}
        </div>
      </div>
    </div>
    <div class="composition-analysis" @click="showPopup = true">查看伤害组成</div>
    <CompositionAnalysis v-model="showPopup" :analysis="increaseResult.compositionAnalysis" />
  </div>
  <Cell center title="置顶展示">
    <template #right-icon>
      <Switch v-model="floatChecked" active-color="#766461" inactive-color="#b7a19e" size="16" />
    </template>
  </Cell>
  <SaveData
    :damageModule="reactiveProps"
    :saveDataModule="saveDataModule"
    :notes-config="NotesConfig"
    @setUnifiedState="setUnifiedState"
  />
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { Switch, Cell, Icon } from "vant";

import TabTitle from "@/component/TabTitle.vue";
import DataItem from "@/component/DataItem.vue";
import NoteGroup from "@/component/NoteGroup.vue";
import SaveData from "@/component/SaveData.vue";
import CompositionAnalysis from "@/component/CompositionAnalysis.vue";
import AtkTypeSelector from "@/component/AtkTypeSelector.vue";
import Popover from "@/component/Popover.vue";

import { basicPanelSelectType, ElementalReactionType } from "@/constants";
import {
  AtkFixedNotes,
  EnhancedDamageNotes,
  AtkPercentNotes,
  HpPercentNotes,
  DefPercentNotes,
  DefFixedNotes,
  EmFixedNotes,
} from "@/constants/notes";
import { EnhancedDemageCalculationMode } from "@/constants/calculation-mode/enhancedDemage";
import { DefPercentCalculationMode, DefFixedCalculationMode } from "@/constants/calculation-mode/def";
import { AtkPercentCalculationMode, AtkFixedCalculationMode } from "@/constants/calculation-mode/atk";
import { HpPercentCalculationMode } from "@/constants/calculation-mode/hp";
import { EmFixedCalculationMode } from "@/constants/calculation-mode/em";
import { AdditionalDamageMode } from "@/constants/calculation-mode/additionalDemage";

import { computationalFormula } from "@/utils";
import { NodeType } from "@/types";

/** 置顶展示开关 */
const floatChecked = ref(false);
const showPopup = ref(false);

/** @module 面板数值 */
const basicPanelSelect = ref("攻击力");
const baseATK = ref(900);
const extraATK = ref(1100);
const extraFixedATK = ref(0);
const extraPercentATK = ref(0);

const baseDEF = ref(600);
const extraDEF = ref(400);
const extraFixedDEF = ref(0);
const extraPercentDEF = ref(0);

const baseHP = ref(10000);
const extraHP = ref(4780);
const extraFixedHP = ref(0);
const extraPercentHP = ref(0);
const elementalMystery = ref(0);

const additionalDemage = ref(0.0);
const critDemage = ref(50);
const elementDemage = ref(0.0);

const witch = ref(false);
const thunder = ref(false);
const baizhuHP = ref(0);

const atkRate = ref(100);
const armRate = ref(0);
const hpRate = ref(0);
const emRate = ref(0);

const extraRate = ref(0);
const atkType = ref<ElementalReactionType>(ElementalReactionType.None);
const characterLevel = ref(90);
const enemyLevel = ref(90);
const enemyResistance = ref(10);
const weaken = ref(0);
const armour = ref(0);
const armourPiercing = ref(0);

const sumExtraATKNumber = computed(() => {
  return Math.round(extraATK.value + extraFixedATK.value + baseATK.value * (extraPercentATK.value / 100));
});

const sumExtraHPNumber = computed(() => {
  return Math.round(extraHP.value + extraFixedHP.value + baseHP.value * (extraPercentHP.value / 100));
});

const sumExtraDEFNumber = computed(() => {
  return Math.round(extraDEF.value + extraFixedDEF.value + baseDEF.value * (extraPercentDEF.value / 100));
});

const selectedExtraDEFNotes = ref<NodeType[]>([]);
const selectedFixedDEFNotes = ref<NodeType[]>([]);

const selectedExtraHPNotes = ref<NodeType[]>([]);
const selectedFixedHPNotes = ref<NodeType[]>([]);

const selectedExtraATKNotes = ref<NodeType[]>([]);
const selectedFixedATKNotes = ref<NodeType[]>([]);

const selectedFixedEMNotes = ref<NodeType[]>([]);
const selectedElementDemageNotes = ref<NodeType[]>([]);
const selectedAdditionalDemageNotes = ref<NodeType[]>([]);

const reactiveProps = computed(() => {
  const values = {
    baseATK,
    extraATK,
    extraFixedATK,
    extraPercentATK,
    baseDEF,
    extraDEF,
    extraFixedDEF,
    extraPercentDEF,
    baseHP,
    extraHP,
    extraFixedHP,
    extraPercentHP,
    additionalDemage,
    critDemage,
    elementDemage,
    thunder,
    witch,
    elementalMystery,
    baizhuHP,
    armRate,
    atkRate,
    hpRate,
    emRate,
    extraRate,
    atkType,
    characterLevel,
    enemyLevel,
    enemyResistance,
    weaken,
    armour,
    armourPiercing,
  };
  const result = {};
  for (const key in values) {
    result[key] = values[key].value;
  }
  return result;
});
const saveDataModule = computed(() => {
  return {
    selectedExtraDEFNotes: selectedExtraDEFNotes.value,
    selectedFixedDEFNotes: selectedFixedDEFNotes.value,
    selectedExtraHPNotes: selectedExtraHPNotes.value,
    selectedFixedHPNotes: selectedFixedHPNotes.value,
    selectedExtraATKNotes: selectedExtraATKNotes.value,
    selectedFixedATKNotes: selectedFixedATKNotes.value,
    selectedFixedEMNotes: selectedFixedEMNotes.value,
    selectedElementDemageNotes: selectedElementDemageNotes.value,
    selectedAdditionalDemageNotes: selectedAdditionalDemageNotes.value,
  };
});
const setUnifiedState = (value) => {
  // 回填计算器内容
  baseATK.value = value.baseATK;
  extraATK.value = value.extraATK;
  extraFixedATK.value = value.extraFixedATK;
  extraPercentATK.value = value.extraPercentATK;

  baseDEF.value = value.baseDEF;
  extraDEF.value = value.extraDEF;
  extraFixedDEF.value = value.extraFixedDEF;
  extraPercentDEF.value = value.extraPercentDEF;

  baseHP.value = value.baseHP;
  extraHP.value = value.extraHP;
  extraFixedHP.value = value.extraFixedHP;
  extraPercentHP.value = value.extraPercentHP;

  basicPanelSelect.value = value.basicPanelSelect || basicPanelSelectType.ATK;

  additionalDemage.value = value.additionalDemage;
  critDemage.value = value.critDemage;
  elementDemage.value = value.elementDemage;
  elementalMystery.value = value.elementalMystery;
  witch.value = value.witch;
  thunder.value = value.thunder;
  baizhuHP.value = value.baizhuHP;

  atkRate.value = value.atkRate;
  armRate.value = value.armRate;
  hpRate.value = value.hpRate;
  emRate.value = value.emRate;

  extraRate.value = value.extraRate;
  atkType.value = value.atkType;
  characterLevel.value = value.characterLevel;
  enemyLevel.value = value.enemyLevel;
  enemyResistance.value = value.enemyResistance;
  weaken.value = value.weaken;
  armour.value = value.armour;
  armourPiercing.value = value.armourPiercing;
};
/** 面板数值 end */

const increaseResult = computed(() => {
  return computationalFormula(reactiveProps.value);
});

const NotesConfig = {
  percentATK: {
    title: "攻击力%加成", // 便签组名称
    localStorageName: "GenShinImpactATKNotesV2", // 存在本地storage的便签组名称
    calculationMode: AtkPercentCalculationMode, // 便签组中的快捷计算方式
    defaultNotes: AtkPercentNotes, // 本地没有保存便签组，则使用该默认便签组
    setSelectedNotes: (value: NodeType[]) => {
      selectedExtraATKNotes.value = value;
    },
  },
  fixedATK: {
    title: "固定攻击力加成",
    localStorageName: "GenShinImpactFixedATKNotesV2",
    calculationMode: AtkFixedCalculationMode,
    defaultNotes: AtkFixedNotes,
    setSelectedNotes: (value: NodeType[]) => {
      selectedFixedATKNotes.value = value;
    },
  },
  percentHP: {
    title: "生命值%加成",
    localStorageName: "GenShinImpactHPNotesV2",
    calculationMode: HpPercentCalculationMode,
    defaultNotes: HpPercentNotes,
    setSelectedNotes: (value: NodeType[]) => {
      selectedExtraHPNotes.value = value;
    },
  },
  percentDEF: {
    title: "防御力%加成",
    localStorageName: "GenShinImpactDEFNotesV2",
    calculationMode: DefPercentCalculationMode,
    defaultNotes: DefPercentNotes,
    setSelectedNotes: (value: NodeType[]) => {
      selectedExtraDEFNotes.value = value;
    },
  },
  fixedDEF: {
    title: "固定防御力加成",
    localStorageName: "GenShinImpactFixedDEFNotesV2",
    calculationMode: DefFixedCalculationMode,
    defaultNotes: DefFixedNotes,
    setSelectedNotes: (value: NodeType[]) => {
      selectedFixedDEFNotes.value = value;
    },
  },
  additionalDemage: {
    title: "伤害提高值",
    localStorageName: "GenShinImpactADNotesV2",
    calculationMode: AdditionalDamageMode,
    defaultNotes: [],
    setSelectedNotes: (value: NodeType[]) => {
      selectedAdditionalDemageNotes.value = value;
    },
  },
  elementDemage: {
    title: "伤害加成%",
    localStorageName: "GenShinImpactEDNotesV2",
    calculationMode: EnhancedDemageCalculationMode,
    defaultNotes: EnhancedDamageNotes,
    setSelectedNotes: (value: NodeType[]) => {
      selectedElementDemageNotes.value = value;
    },
  },
  fixedEM: {
    title: "元素精通加成",
    localStorageName: "GenShinImpactFixedEMNotesV2",
    calculationMode: EmFixedCalculationMode,
    defaultNotes: EmFixedNotes,
    setSelectedNotes: (value: NodeType[]) => {
      selectedFixedEMNotes.value = value;
    },
  },
};
</script>

<style src="./style.css" />
