<template>
  <tab-title>单次伤害计算</tab-title>
  <div class="tips">
    可以自由填入属性值查看相应的伤害，适合对游戏伤害计算方式比较熟悉的人使用。
  </div>
  <div class="data-panel">
    <div class="data-panel__title">基础属性</div>
    <div class="data-panel__basic">
      <div :class="['basic-panel-item', basicPanelSelect === basicPanelSelectType.ATK && 'basic-panel-selected']"
        @click="basicInputPanelSelect(basicPanelSelectType.ATK)"
      >
        <span class="basic-panel-item-title">攻击力</span>
        <div class="basic-panel-item-total">
          {{ baseATK + sumExtraATKNumber }}
        </div>
        <div class="basic-detial">
          {{ baseATK }} +
          <span style="color: #49ff39">{{ sumExtraATKNumber }}</span>
        </div>
      </div>
      <div :class="['basic-panel-item', basicPanelSelect === basicPanelSelectType.HP && 'basic-panel-selected']"
        @click="basicInputPanelSelect(basicPanelSelectType.HP)"
      >
        <span class="basic-panel-item-title">生命值</span>
        <div class="basic-panel-item-total">
          {{ baseHP + sumExtraHPNumber }}
        </div>
        <div class="basic-detial">
          {{ baseHP }}+
          <span style="color: #49ff39">{{ sumExtraHPNumber }}</span>
        </div>
      </div>
      <div :class="['basic-panel-item', basicPanelSelect === basicPanelSelectType.DEF && 'basic-panel-selected']"
        @click="basicInputPanelSelect(basicPanelSelectType.DEF)"
      >
        <span class="basic-panel-item-title">防御力</span>
        <div class="basic-panel-item-total">
          {{ baseDEF + sumExtraDEFNumber }}
        </div>
        <div class="basic-detial">
          {{ baseDEF }}+
          <span style="color: #49ff39">{{ sumExtraDEFNumber }}</span>
        </div>
      </div>
      <div :class="['basic-panel-item', basicPanelSelect === basicPanelSelectType.EM && 'basic-panel-selected']"
        @click="basicInputPanelSelect(basicPanelSelectType.EM)"
      >
        <span class="basic-panel-item-title">元素精通</span>
        <div :class="basicPanelSelect === basicPanelSelectType.EM ? 'basic-detial' : 'basic-panel-item-total'">
          {{ elementalMystery }}
        </div>
      </div>
    </div>
    <div v-show="basicPanelSelect === basicPanelSelectType.HP">
      <data-item v-model="baseHP" title="基础生命值" tips="面板生命值白字" stepperInteger stepperMin="0" />
      <data-item v-model="extraHP" title="额外生命值" tips="常驻生命值绿字" stepperInteger stepperMin="0" />
      <note-group v-model="extraPercentHP" v-bind="NotesConfig.percentHP" :selectedNotes="selectedExtraHPNotes" />
    </div>
    <div v-show="basicPanelSelect === basicPanelSelectType.DEF">
      <data-item v-model="baseDEF" title="基础防御力" tips="面板防御力白字" stepperInteger stepperMin="0" />
      <data-item v-model="extraDEF" title="额外防御力" tips="常驻防御力绿字" stepperInteger stepperMin="0" />
      <note-group v-model="extraPercentDEF" v-bind="NotesConfig.percentDEF" :selectedNotes="selectedExtraDEFNotes" />
      <note-group v-model="extraFixedDEF" v-bind="NotesConfig.fixedDEF" :selectedNotes="selectedFixedDEFNotes" />
    </div>
    <div v-show="basicPanelSelect === basicPanelSelectType.ATK">
      <data-item v-model="baseATK" title="基础攻击力" tips="面板攻击力白字" stepperInteger stepperMin="0" />
      <data-item v-model="extraATK" title="额外攻击力" tips="常驻攻击力绿字" stepperInteger stepperMin="0">
        <van-popover class="data-item-popover" v-model:show="showPopoverExtraATK" placement="left-end">
          <div class="data-item-popover__content">
            攻击力加成%会以『基础攻击力』的百分比来算，会直接加在最上方『攻击力总计』的
            <span style="color: #49ff39">绿字</span>里。 <br /><br />
            一些无法常驻的攻击力加成%可以在下方的标签组里保存，方便切换。
          </div>
          <template #reference>
            <van-icon size="26" name="question" />
          </template>
        </van-popover>
      </data-item>
      <note-group v-model="extraPercentATK" v-bind="NotesConfig.percentATK" :selectedNotes="selectedExtraATKNotes" />
      <note-group v-model="extraFixedATK" v-bind="NotesConfig.fixedATK" :selectedNotes="selectedFixedATKNotes" />
    </div>
    <div v-show="basicPanelSelect === basicPanelSelectType.EM">
      <data-item v-model="elementalMystery" title="元素精通" tips="" stepperMin="0" />
      <note-group v-model="elementalMystery" v-bind="NotesConfig.fixedEM" :selectedNotes="selectedFixedEMNotes" />
    </div>
    <div class="data-panel__title">技能倍率</div>
    <div class="data-panel__basic">
      <div class="basic-panel-item">
        <span class="basic-panel-item-title">攻击倍率%</span>
        <input class="basic-panel-input" type="number" v-model="atkRate"/>
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
    <data-item v-model="extraRate" title="倍率增幅%" stepperMin="0" decimalLength="1" />
    <data-item v-model="additionalDemage" title="伤害提高值" tips="" stepperMin="0" decimalLength="2">
      <van-popover class="data-item-popover" v-model:show="showPopoverExtraRate" placement="left-end">
        <div class="data-item-popover__content">
          <b>攻击伤害值 = (基础属性x最终倍率) + 伤害提高值 + 激化提高值</b><br />
          <p><b>最终倍率</b> = 攻击倍率 x (1 + 倍率增幅) </p>
          <p><b>倍率增幅：</b>
            例：宵宫释放元素战技后的普通攻击“造成152%普通攻击伤害”，即“普通攻击<b>倍率增幅</b>为(152%-100%)=<b>52%</b>”；还有行秋4命、安柏2命、流浪者普攻、莱欧斯利普攻、那维莱特重击160%和芙宁娜战技140%。<br />
          </p>
          <p><b>基础伤害值：</b>基础属性乘以最终倍率的数值为基础伤害值。</p>
          <p>
            <b>激化提高值：</b>雷元素和草元素的激化反应带来的提升值，受角色等级和元素精通影响。
          </p>
          <p>
            <b>伤害提高值：</b>部分角色或武器技能带有“xx伤害值提升(高)”的描述，例如：钟离·炊金馔玉、云堇·元素爆发、申鹤·元素战技、一斗·荒泷逆袈裟和圣遗物来歆余响等。
          </p>
          <b>可以点击下方【伤害提高值】便签进行添加</b>
        </div>
        <template #reference>
          <van-icon size="26" name="question" />
        </template>
      </van-popover>
    </data-item>
    <note-group v-model="additionalDemage" v-bind="NotesConfig.additionalDemage" :selectedNotes="selectedAdditionalDemageNotes" />

    <data-item v-model="critDemage" title="暴击伤害%" tips="" stepperMin="0" decimalLength="1" />
    <data-item v-model="elementDemage" title="伤害加成%" tips="各种增伤、减伤" stepperMin="-200" decimalLength="2">
      <van-popover class="data-item-popover" v-model:show="showPopover" placement="left-end">
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
        <template #reference>
          <van-icon size="26" name="question" />
        </template>
      </van-popover>
    </data-item>
    <note-group v-model="elementDemage" v-bind="NotesConfig.elementDemage" :selectedNotes="selectedElementDemageNotes" />
    <data-item v-model="characterLevel" title="角色等级" stepperMax="90" stepperMin="1" />
    <data-item v-model="enemyLevel" title="敌人等级" stepperMin="1" />
    
    <van-cell
      class="eva-cell"
      @click="otherChecked = !otherChecked"
      center
      title="敌人防御力、抗性调整"
      is-link
      :arrow-direction="otherChecked ? 'up' : 'down'"
    />
    <div v-show="otherChecked" class="data-panel">
      <data-item v-model="enemyResistance" title="敌人抗性%" stepperMin="-999">
        <div class="extra-btn" @click="handleImagePreview">查看抗性表</div>
      </data-item>
      <data-item v-model="weaken" title="减少抗性%" stepperMin="0" stepperMax="300" />
      <data-item v-model="armour" title="减少防御%" stepperMin="0" stepperMax="90" />
      <data-item v-model="armourPiercing" title="无视防御%" stepperMin="0" stepperMax="100" />
    </div>

    <div class="data-panel__title">反应类型</div>
    <div class="atk-type-panel">
      <van-radio-group style="margin-top: 12px" v-model="atkType">
        <van-radio name="none" class="atk-type-none">无反应</van-radio>
        <div class="horizontal">
          <van-radio :name="ElementalReaction.Rate" class="atk-type-item">
            <span class="atk-type-text">水蒸·火融</span>
            <span class="water bg-left"></span>
            <span class="fire bg-right"></span>
          </van-radio>
          <van-radio :name="ElementalReaction.Rate2" class="atk-type-item">
            <span class="atk-type-text">冰融·火蒸</span>
            <span class="ice bg-left"></span>
            <span class="fire bg-right"></span>
          </van-radio>
          <van-radio :name="ElementalReaction.Aggravate" class="atk-type-item">
            <span class="atk-type-text">超激化</span>
            <span class="electro"></span>
          </van-radio>
          <van-radio :name="ElementalReaction.Spread"  class="atk-type-item">
            <span class="atk-type-text">蔓激化</span>
            <span class="dendro"></span>
          </van-radio>
        </div>
      </van-radio-group>
    </div>
    <van-cell
      v-show="atkType === ElementalReaction.Rate || atkType === ElementalReaction.Rate2"
      class="eva-cell"
      center
      title="炽烈的炎之魔女，增幅反应伤害提升15%"
    >
      <template #right-icon>
        <van-switch v-model="witch" active-color="#766461" inactive-color="#b7a19e" size="16" />
      </template>
    </van-cell>
    <van-cell v-show="atkType === ElementalReaction.Aggravate" class="eva-cell" center title="如雷的盛怒，超激化[伤害提升]提高20%">
      <template #right-icon>
        <van-switch v-model="thunder" active-color="#766461" inactive-color="#b7a19e" size="16" />
      </template>
    </van-cell>
    <van-cell v-show="atkType === ElementalReaction.Aggravate || atkType === ElementalReaction.Spread" class="eva-cell" title="白术天赋·在地为化 输入生命值" center>
      <template #right-icon>
        <input class="ex-input" type="number" v-model="baizhuHP"/>
      </template>
    </van-cell>

  </div>
  <div :class="['dmg-result', floatChecked && 'increase-result__top']">
    <div class="result-grid">
      <div class="grid-item">
        伤害数值
        <div class="normal-demage">
          {{ increaseResult.common }}
        </div>
      </div>
      <div class="grid-item">
        暴击伤害
        <div class="crit-demage">
          {{ increaseResult.crit }}
        </div>
      </div>
    </div>
    <composition-analysis />
  </div>
  <van-cell class="eva-cell" center title="置顶展示">
    <template #right-icon>
      <van-switch v-model="floatChecked" active-color="#766461" inactive-color="#b7a19e" size="16" />
    </template>
  </van-cell>
  <save-data :notesConfig="NotesConfig" />
</template>

<script>
import { computed, defineComponent, ref, toRefs } from "vue";
import {
  Slider,
  Stepper,
  Switch,
  CellGroup,
  Cell,
  RadioGroup,
  Radio,
  Icon,
  ImagePreview,
  Popover,
} from "vant";
import TabTitle from "../component/TabTitle.vue";
import { computationalFormula, getLocalStorage } from "../utils";
import DataItem from "../component/DataItem.vue";
import NoteGroup from "../component/NoteGroup.vue";
import DetailBlock from "../component/Detail.vue";
import SaveData from "../component/SaveData.vue";
import AdditionalDemage from "../component/AdditionalDemage.vue";
import CompositionAnalysis from "../component/CompositionAnalysis.vue";
import { useStore } from "vuex";
import { ElementalReaction, basicPanelSelectType } from "../constant";
import {
  AtkFixedNotes,
  EnhancedDamageNotes,
  AtkPercentNotes,
  HpPercentNotes,
  DefPercentNotes,
  DefFixedNotes,
  EmFixedNotes
} from '../constants/notes';
import { EnhancedDemageCalculationMode } from '../constants/calculation-mode/enhancedDemage';
import { AtkPercentCalculationMode, AtkFixedCalculationMode } from '../constants/calculation-mode/atk';
import { HpPercentCalculationMode } from '../constants/calculation-mode/hp';
import { DefPercentCalculationMode, DefFixedCalculationMode } from '../constants/calculation-mode/def';
import { EmFixedCalculationMode } from '../constants/calculation-mode/em';
import { AdditionalDemageMode } from '../constants/calculation-mode/additionalDemage';
import { EventBus } from "../utils";

export default defineComponent({
  name: "increase",

  components: {
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [Radio.name]: Radio,
    [Switch.name]: Switch,
    [Slider.name]: Slider,
    [Stepper.name]: Stepper,
    [SaveData.name]: SaveData,
    [DataItem.name]: DataItem,
    [TabTitle.name]: TabTitle,
    [Popover.name]: Popover,
    [CellGroup.name]: CellGroup,
    [NoteGroup.name]: NoteGroup,
    [RadioGroup.name]: RadioGroup,
    [DetailBlock.name]: DetailBlock,
    [AdditionalDemage.name]: AdditionalDemage,
    [CompositionAnalysis.name]: CompositionAnalysis,
  },

  setup() {
    /** 防御抗性乘区开关 */
    const otherChecked = ref(false);
    /** 置顶展示开关 */
    const floatChecked = ref(false);
    const showPopover = ref(false);
    const showPopoverExtraRate = ref(false);
    const showPopoverExtraATK = ref(false);
    const store = useStore();

    const increaseResult = computed(() => {
      return computationalFormula(store.state.demageModule);
    });

    const basicInputPanelSelect = (value) => {
      store.commit('setBasicPanelSelect', value);
    };

    const NotesConfig = {
      percentATK: {
        title: "攻击力%加成", // 便签组名称
        localStorageName: "GenShinImpactATKNotesV2", // 存在本地storage的便签组名称
        calculationMode: AtkPercentCalculationMode, // 便签组中的快捷计算方式
        defaultNotes: AtkPercentNotes, // 本地没有保存便签组，则使用该默认便签组
        setSelectedNotes: (value) => { // 修改便签组方法
          store.commit("setSelectedExtraATKNotes", value);
        },
      },
      fixedATK: {
        title: "固定攻击力加成",
        localStorageName: "GenShinImpactFixedATKNotesV2",
        calculationMode: AtkFixedCalculationMode,
        defaultNotes: AtkFixedNotes,
        setSelectedNotes: (value) => {
          store.commit("setSelectedFixedATKNotes", value);
        },
      },
      percentHP: {
        title: "生命值%加成",
        localStorageName: "GenShinImpactHPNotesV2",
        calculationMode: HpPercentCalculationMode,
        defaultNotes: HpPercentNotes,
        setSelectedNotes: (value) => {
          store.commit("setSelectedExtraHPNotes", value);
        },
      },
      percentDEF: {
        title: "防御力%加成",
        localStorageName: "GenShinImpactDEFNotesV2",
        calculationMode: DefPercentCalculationMode,
        defaultNotes: DefPercentNotes,
        setSelectedNotes: (value) => {
          store.commit("setSelectedExtraDEFNotes", value);
        },
      },
      fixedDEF: {
        title: "固定防御力加成",
        localStorageName: "GenShinImpactFixedDEFNotesV2",
        calculationMode: DefFixedCalculationMode,
        defaultNotes: DefFixedNotes,
        setSelectedNotes: (value) => {
          store.commit("setSelectedFixedDEFNotes", value);
        },
      },
      additionalDemage: {
        title: "伤害提高值",
        localStorageName: "GenShinImpactADNotesV2",
        calculationMode: AdditionalDemageMode,
        defaultNotes: [],
        setSelectedNotes: (value) => {
          store.commit("setSelectedAdditionalDemageNotes", value);
        },
      },
      elementDemage: {
        title: "伤害加成%",
        localStorageName: "GenShinImpactEDNotesV2",
        calculationMode: EnhancedDemageCalculationMode,
        defaultNotes: EnhancedDamageNotes,
        setSelectedNotes: (value) => {
          store.commit("setSelectedElementDemageNotes", value);
        },
      },
      fixedEM: {
        title: "元素精通加成",
        localStorageName: "GenShinImpactFixedEMNotesV2",
        calculationMode: EmFixedCalculationMode,
        defaultNotes: EmFixedNotes,
        setSelectedNotes: (value) => {
          store.commit("setSelectedFixedEMNotes", value);
        },
      },
    };

    const handleImagePreview = () => {
      ImagePreview(["http://saomdpb.com/IMG_1457.PNG"]);
    };
    return {
      showPopover,
      showPopoverExtraRate,
      showPopoverExtraATK,
      ...toRefs(store.getters),
      ...toRefs(store.state.demageModule),
      ...toRefs(store.state.saveDataModule),
      basicInputPanelSelect,
      basicPanelSelectType,
      otherChecked,
      floatChecked,
      increaseResult,
      handleImagePreview,
      AdditionalDemageMode,
      NotesConfig,
      ElementalReaction,
    };
  },
});
</script>

<style>
.data-panel {
  margin-bottom: 24px;
  line-height: 24px;
}

.eva-cell {
  margin-bottom: 12px;
}

.data-panel .van-stepper--round .van-stepper__minus {
  color: var(--button-bg);
  border-color: var(--button-bg);
}

.data-panel .van-stepper--round .van-stepper__plus {
  border: none;
  color: #fff;
  background-color: var(--button-bg);
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

.bg-left {
  top: -15px;
  left: -24px;
}

.bg-right {
  bottom: -15px;
  right: -24px;
}

.water {
  background-image: url("../../hydro.png");
}

.fire {
  background-image: url("../../pyro.png");
}

.ice {
  background-image: url("../../cryo.png");
}

.dendro {
  background-image: url("../../dendro.png");
}

.electro {
  background-image: url("../../electro.png");
}

.van-slider__button-wrapper .van-slider__button {
  box-shadow: 0 2px 2px var(--button-bg);
}

.dmg-result {
  width: 100%;
  top: 0;
  transition: top 0.3s;
  background-color: #fff;
  border: 1px solid var(--button-bg);
  border-radius: 4px;
  padding: 6px 0;
  z-index: 1;
}

.result-grid {
  width: 100%;
  display: flex;
}

.grid-item {
  flex: 1;
  text-align: center;
}

.normal-demage {
  font-size: 20px;
}

.crit-demage {
  font-size: 26px;
}

.normal-demage,
.crit-demage {
  font-weight: bold;
  line-height: 26px;
}

.exclamation-mark {
  display: inline-block;
  transform: scaleY(1.4);
}

.increase-result__top {
  position: fixed;
  top: 60px;
  width: calc(100% - 32px);
}

.extra-btn {
  display: inline-block;
  margin-left: 16px;
  font-size: 14px;
  border: 1px solid var(--main-text);
  border-radius: 4px;
  padding: 0 4px;
}

.data-item-popover {
  max-width: 80%;
  transform: translateY(8px);
}

.data-item-popover__content {
  padding: 12px;
}

.data-panel__basic {
  width: 100%;
  display: flex;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 8px;
}

.basic-panel-item {
  flex: 1;
  text-align: center;
  background-color: var(--light-text);
}

.basic-panel-item-title {
  font-size: 12px;
}

.basic-detial {
  font-size: 14px;
  display: none;
}

.basic-panel-selected {
  background-color: var(--button-bg);
  color: var(--light-text);
  flex: 1.5;
}

.basic-panel-selected .basic-panel-item-total {
  display: inline-block;
  margin-left: 4px;
}

.basic-panel-selected .basic-detial {
  display: block;
}

.basic-panel-input {
  background: none;
  outline: none;
  border: none;
  width: 100%;
  text-align: center;
}

.ex-input {
  padding: 0;
  max-width: 60px;
  background: none;
  outline: none;
  border: none;
  text-align: center;
}

.atk-type-panel .van-radio {
  flex: 1;
  text-align: center;
  justify-content: center;
  font-size: 14px;
}
.atk-type-panel .horizontal {
  display: flex;
  width: 100%;
  gap: 8px
}
.atk-type-panel .van-radio__label {
  margin: 0;
  color: inherit;

}
.atk-type-panel .van-radio__icon {
  display: none;
}
.atk-type-item,
.atk-type-none {
  height: 34px;
  border-radius: 4px;
  border: solid 1px var(--button-bg);
  font-weight: bold;
  margin-bottom: 12px;
}
.atk-type-item[aria-checked=true],
.atk-type-none[aria-checked=true] {
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
</style>




