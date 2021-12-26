<template>
  <tab-title>单次伤害计算</tab-title>
  <div class="tips">滑块不够用，可以点击数字进行手动输入。</div>
  <van-cell class="eva-cell" center title="开启滑块辅助调整数值">
    <template #right-icon>
      <van-switch
        v-model="sliderChecked"
        active-color="#766461"
        inactive-color="#b7a19e"
        size="16"
      />
    </template>
  </van-cell>
  <div class="data-panel">
    <div class="data-panel__title atk-top">
      攻击力总计
      <span class="atk-total">{{ baseATK + extraATKNumber }}</span>
      <span class="atk-detial">
        {{ baseATK }} +
        <span style="color: #49ff39">{{ extraATKNumber }}</span>
      </span>
    </div>
    <data-item
      v-model="baseATK"
      title="基础攻击力"
      tips="面板攻击力白字"
      stepperInteger
      stepperMin="0"
      sliderMax="1200"
      :showSlider="sliderChecked"
    />
    <data-item
      v-model="extraATK"
      title="额外攻击力"
      tips="面板攻击力绿字"
      stepperInteger
      stepperMin="0"
      sliderMax="3000"
      :showSlider="sliderChecked"
    >
      <van-popover
        class="data-item-popover"
        v-model:show="showPopoverExtraATK"
        placement="left-end"
      >
        <div class="data-item-popover__content">
          攻击力加成%会以『基础攻击力』的百分比来算，会直接加在最上方『攻击力总计』的
          <span style="color: #49ff39">绿字</span>里。
          <br /><br />
          一些无法常驻的攻击力加成%可以在下方的标签组里保存，方便切换。
        </div>
        <template #reference>
          <van-icon size="26" name="question" />
        </template>
      </van-popover>
    </data-item>
    <note-group
      v-model="extraPercentATK"
      title="攻击力加成%"
      :notes="ATKNotes"
      :selectedNotes="selectedExtraATKNotes"
      :setSelectedNotes="setSelectedExtraATKNotes"
      :calculationMode="AtkPercentCalculationMode"
      @updateNoteGroup="ATKNoteChange"
    />
    <data-item
      v-model="evaporationDemage"
      title="精通加成%"
      tips="蒸发、融化伤害提升"
      stepperMin="0"
      :sliderMin="checked ? 15 : 0"
      sliderMax="240"
      sliderStep="0.1"
      decimalLength="1"
      :showSlider="sliderChecked"
    />

    <data-item
      v-model="critDemage"
      title="暴击伤害%"
      tips="小数位可手输"
      stepperMin="0"
      sliderMin="0"
      sliderMax="600"
      sliderStep="0.1"
      decimalLength="1"
      :showSlider="sliderChecked"
    />
    <data-item
      v-model="elementDemage"
      title="伤害倍率%"
      tips=""
      stepperMin="-200"
      sliderMax="600"
      sliderMin="-200"
      sliderStep="0.1"
      decimalLength="2"
      :showSlider="sliderChecked"
    >
      <van-popover
        class="data-item-popover"
        v-model:show="showPopover"
        placement="left-end"
      >
        <div class="data-item-popover__content">
          <b>基础伤害值以一定比例改变：</b>
          <br />
          基础100% + 技能加伤% + 元素加伤% + 造成伤害% + 受到伤害%。
          <br />
          <p>
            <b>技能加伤：</b>满足条件时的加伤，例如角色天赋/命座、圣遗物套装、武器技能等<br />
            <b>元素加伤：</b>面板上的对应元素伤害加成，(物理也是元素)<br />
            <b>造成伤害：</b>造成的伤害提高(加伤)、造成的伤害降低(降伤)<br />
            <b>受到伤害：</b>受到的伤害提高(易伤)、受到的伤害降低(减伤)<br />
          </p>
          <b>可以在下方标签组中快捷添加各种加成。</b>
        </div>
        <template #reference>
          <van-icon size="26" name="question" />
        </template>
      </van-popover>
    </data-item>
    <note-group
      v-model="elementDemage"
      title="伤害倍率%"
      :notes="EDNotes"
      :selectedNotes="selectedElementDemageNotes"
      :setSelectedNotes="setSelectedElementDemageNotes"
      :calculationMode="EnhancedDemageCalculationMode"
      @updateNoteGroup="EDNoteChange"
    />
    <data-item
      v-model="atkRate"
      title="技能倍率%"
      tips="本次攻击倍率"
      stepperMin="0"
      sliderMax="1500"
      sliderStep="0.1"
      decimalLength="1"
      :showSlider="sliderChecked"
    />

    <data-item
      v-model="extraRate"
      title="倍率增幅%"
      stepperMin="0"
      sliderMax="100"
      sliderStep="0.1"
      decimalLength="1"
      :showSlider="sliderChecked"
    >
      <van-popover
        class="data-item-popover"
        v-model:show="showPopoverExtraRate"
        placement="left-end"
      >
        <div class="data-item-popover__content">
          <b>最终倍率 = 技能倍率 x (1 + 倍率增幅)</b>
          <p>
            宵宫的元素战技提升的是普攻的倍率；<br />
            行秋的4命提升的是元素战技的倍率；<br />
            安柏的2命提升的是元素战技的倍率；<br />
          </p>
          <b>基础伤害值 = 攻击力/防御力 x 最终倍率 + 附加伤害值</b>
        </div>
        <template #reference>
          <van-icon size="26" name="question" />
        </template>
      </van-popover>
    </data-item>

    <additional-demage
      label="附加伤害值"
      buttonText="添加附加伤害值"
      :additionalMode="AdditionalDemageMode"
      :additionalList="additionalDemageList"
    />

    <van-cell
      class="eva-cell"
      @click="otherChecked = !otherChecked"
      center
      title="敌人防御力、抗性调整"
    >
      <span>{{ otherChecked ? "点击收起" : "点击展开" }}</span>
    </van-cell>
    <div v-show="otherChecked" class="data-panel">
      <data-item
        v-model="characterLevel"
        title="人物的等级"
        stepperMax="90"
        stepperMin="1"
      />
      <data-item v-model="enemyLevel" title="敌人的等级" stepperMin="1" />
      <data-item v-model="enemyResistance" title="敌人抗性%" stepperMin="-999">
        <div class="extra-btn" @click="handleImagePreview">查看抗性表</div>
      </data-item>
      <data-item
        v-model="weaken"
        title="减少抗性%"
        stepperMin="0"
        stepperMax="300"
      />
      <additional-demage
        label="减少防御%"
        buttonText="添加防御减少效果"
        :additionalMode="DefCutAdditionMode"
        :additionalList="armourList"
      />
    </div>

    <van-cell class="eva-cell" center title="炽烈的炎之魔女，增幅伤害提升15%">
      <template #right-icon>
        <van-switch
          v-model="checked"
          active-color="#766461"
          inactive-color="#b7a19e"
          size="16"
          @change="changeSwitch"
        />
      </template>
    </van-cell>

    <div class="data-panel__title">
      反应类型
      <van-cell-group>
        <van-radio-group style="margin-top: 12px" v-model="atkType">
          <van-cell title="无反应" clickable @click="atkType = 'none'">
            <template #right-icon>
              <van-radio name="none" checked-color="#766461" />
            </template>
          </van-cell>
          <van-cell clickable @click="atkType = 'evaporation'">
            <template #title>
              2.0倍增幅(<span class="water"></span>→<span class="fire"></span>
              /
              <span class="fire"></span>→<span class="ice"></span>)
            </template>
            <template #right-icon>
              <van-radio name="evaporation" checked-color="#766461" />
            </template>
          </van-cell>
          <van-cell clickable @click="atkType = 'evaporation2'">
            <template #title>
              1.5倍增幅(<span class="fire"></span>→<span class="water"></span>
              /
              <span class="ice"></span>→<span class="fire"></span>)
            </template>
            <template #right-icon>
              <van-radio name="evaporation2" checked-color="#766461" />
            </template>
          </van-cell>
        </van-radio-group>
      </van-cell-group>
    </div>
  </div>
  <div :class="['result-grid', floatChecked && 'increase-result__top']">
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
  <van-cell class="eva-cell" center title="置顶展示">
    <template #right-icon>
      <van-switch
        v-model="floatChecked"
        active-color="#766461"
        inactive-color="#b7a19e"
        size="16"
      />
    </template>
  </van-cell>
  <save-data @recalculationData="recalculationData" />
</template>

<script>
import { computed, defineComponent, ref, onMounted, toRefs } from "vue";
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
import { computationalFormula, getLocalStorage, sub } from "../utils";
import DataItem from "../component/DataItem.vue";
import NoteGroup from "../component/NoteGroup.vue";
import DetailBlock from "../component/Detail.vue";
import SaveData from "../component/SaveData.vue";
import AdditionalDemage from "../component/AdditionalDemage.vue";
import { useStore } from "vuex";
import {
  EnhancedDamageNotes,
  AtkPercentNotes,
  AtkPercentCalculationMode,
  EnhancedDemageCalculationMode,
  AdditionalDemageMode,
  DefCutAdditionMode,
} from "../constant";

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
  },

  setup() {
    /** 炽烈的炎之魔女开关 */
    const checked = ref(false);
    /** 滑块辅助调整开关 */
    const sliderChecked = ref(false);
    /** 防御抗性乘区开关 */
    const otherChecked = ref(false);
    /** 置顶展示开关 */
    const floatChecked = ref(false);
    const showPopover = ref(false);
    const showPopoverExtraRate = ref(false);
    const showPopoverExtraATK = ref(false);
    const store = useStore();

    const changeSwitch = (val) => {
      if (val) {
        store.commit(
          "setEvaporationDemage",
          +store.state.demageModule.evaporationDemage + 15
        );
      } else {
        store.commit(
          "setEvaporationDemage",
          +store.state.demageModule.evaporationDemage - 15
        );
      }
    };

    const increaseResult = computed(() => {
      return computationalFormula(store.state.demageModule);
    });

    const extraATKNumber = computed(() => {
      const { baseATK, extraATK, extraPercentATK } = store.state.demageModule;
      return Math.round(extraATK + baseATK * (extraPercentATK / 100));
    });

    const EDNotes = ref([]);
    const EDNoteChange = (value) => {
      EDNotes.value = value;
      window.localStorage.setItem(
        "GenShinImpactEDNotes",
        JSON.stringify(value)
      );
    };

    const ATKNotes = ref([]);
    const ATKNoteChange = (value) => {
      ATKNotes.value = value;
      window.localStorage.setItem(
        "GenShinImpactATKNotes",
        JSON.stringify(value)
      );
    };

    onMounted(() => {
      EDNotes.value = getLocalStorage(
        "GenShinImpactEDNotes",
        EnhancedDamageNotes,
        "伤害加成标签组读取失败"
      );
      ATKNotes.value = getLocalStorage(
        "GenShinImpactATKNotes",
        AtkPercentNotes,
        "攻击力加成标签组读取失败"
      );
    });

    const setSelectedExtraATKNotes = (value) => {
      store.commit("setSelectedExtraATKNotes", value);
    };

    const setSelectedElementDemageNotes = (value) => {
      store.commit("setSelectedElementDemageNotes", value);
    };

    const recalculationData = (value) => {
      const { selectedExtraATKNotes, selectedElementDemageNotes } = value;
      store.commit("setUnifiedState", value);
      store.commit("setSelectedExtraATKNotes", selectedExtraATKNotes);
      store.commit("setSelectedElementDemageNotes", selectedElementDemageNotes);
    };

    const handleImagePreview = () => {
      ImagePreview(["http://saomdpb.com/IMG_1457.PNG"]);
    };
    return {
      showPopover,
      showPopoverExtraRate,
      showPopoverExtraATK,
      ...toRefs(store.state.demageModule),
      ...toRefs(store.state.saveDataModule),
      extraATKNumber,
      checked,
      changeSwitch,
      sliderChecked,
      otherChecked,
      floatChecked,
      increaseResult,
      EDNotes,
      EDNoteChange,
      ATKNotes,
      ATKNoteChange,
      recalculationData,
      setSelectedExtraATKNotes,
      setSelectedElementDemageNotes,
      EnhancedDemageCalculationMode,
      AtkPercentCalculationMode,
      handleImagePreview,
      AdditionalDemageMode,
      DefCutAdditionMode,
    };
  },
});
</script>

<style>
.data-panel {
  margin-bottom: 24px;
  line-height: 24px;
}
.atk-total {
  margin-left: 28px;
}
.atk-detial {
  display: inline-block;
  margin-left: 24px;
  padding: 0 12px;
  font-size: 14px;
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
.ice {
  background-size: 20px;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  display: inline-block;
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

.van-slider__button-wrapper .van-slider__button {
  box-shadow: 0 2px 2px var(--button-bg);
}

.result-grid {
  display: flex;
  width: 100%;
  top: 0;
  transition: top 0.3s;
  background-color: #fff;
  border: 1px solid var(--button-bg);
  padding: 6px 0;
  z-index: 1;
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
</style>
