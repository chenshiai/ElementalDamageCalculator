<script setup>
import TabTitle from "@/component/TabTitle.vue";
import FourSvg from "./svg.vue";
</script>

<template>
  <TabTitle>原神数值计算工具</TabTitle>
  <div class="card-group">
    <router-link to="/elemental" class="card active-btn">
      <FourSvg />
      <div>剧变反应计算</div>
      <span>快速查看元素精通的提升效果</span>
      <img src="/img/shatang.png" alt="" />
    </router-link>
    <router-link to="/moon-electro" class="card active-btn">
      <FourSvg />
      <div>月反应计算</div>
      <span>计算全队月反应的伤害</span>
      <img src="/img/inf.png" alt="" />
    </router-link>
    <router-link to="/increasing-range" class="card active-btn">
      <FourSvg />
      <div>单次伤害计算</div>
      <span>自由填入各项数值的计算</span>
      <img src="/img/hutao.png" alt="" />
    </router-link>
    <router-link to="/cloud-team" class="card active-btn">
      <FourSvg />
      <div>角色组队计算（BETA）</div>
      <span>用角色数据进行计算</span>
      <img src="/img/bnt.png" alt="" />
    </router-link>
    <router-link to="/shield" class="card active-btn">
      <FourSvg />
      <div>护盾承伤计算</div>
      <span>计算护盾的实际吸收量</span>
      <img src="/img/zhongli.png" alt="" />
    </router-link>
    <router-link to="/character/create" class="card active-btn">
      <FourSvg />
      <div>创建角色数据</div>
      <span>角色、武器、圣遗物自由搭配</span>
      <img src="/img/daiyin.png" alt="" />
    </router-link>
    <router-link to="/import" class="card active-btn">
      <FourSvg />
      <div>游戏数据导入</div>
      <span>导入玩家的角色培养数据</span>
      <img src="/img/paimeng.png" alt="" />
    </router-link>
  </div>
</template>

<style scoped>
.card-group {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
}
@media screen and (max-width: 920px) {
  .card-group {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
}
@media screen and (max-width: 670px) {
  .card-group {
    display: block;
  }
}

.card {
  display: block;
  margin: 16px;
  padding: 24px;
  position: relative;
  border-radius: 8px;

  background: var(--light-text);
  border: 1px solid var(--border);
  box-shadow: 0 8px 12px rgba(31, 38, 135, 0.1), inset 0 10px 14px rgba(255, 255, 255, 0.3);
}
.card::before,
.card::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  border: 2px solid var(--page-bg);
  width: calc(100% - 14px);
  height: calc(100% - 14px);
  box-sizing: border-box;
}
.card::before {
  border-radius: 32px;
}
.card > div {
  color: var(--main-text);
}
.card > span {
  font-size: 12px;
  color: var(--tip-text);
}

.card > img {
  position: absolute;
  top: 0;
  z-index: 1;
  top: 15%;
  height: 70%;
  right: 20px;
}
</style>

<style>
.card-svg {
  height: 12px;
  display: block;
  padding: 12px 12px 0 0;
}
.card .card-svg {
  position: absolute;
}
.card .card-svg:nth-child(1) {
  transform: rotate(-90deg);
  left: 0;
  top: 0;
}

.card .card-svg:nth-child(2) {
  right: 0;
  top: 0;
}

.card .card-svg:nth-child(3) {
  transform: rotate(-180deg);
  left: 0;
  bottom: 0;
}

.card .card-svg:nth-child(4) {
  transform: rotate(90deg);
  right: 0;
  bottom: 0;
}
</style>
