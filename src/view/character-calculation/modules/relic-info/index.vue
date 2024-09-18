<script setup>
</script>

<template>
  <div class="relic-info">
    <div class="relic-detail" v-for="i in 5">
      <img class="relic-icon" src="https://enka.network/ui/UI_RelicIcon_15021_4.png" alt="">
      <div class="relic-detail__hearder">
        <div>水仙的时时刻刻</div>
        <div class="relic-main-stats">
          <span>name</span>
          <span>+4780</span>
        </div>
      </div>
      <div class="relic-detail__stats">
        <label>name</label>
        <span>+30</span>
      </div>
      <div class="relic-detail__stats">
        <label>name</label>
        <span>+30</span>
      </div>
      <div class="relic-detail__stats">
        <label>name</label>
        <span>+30</span>
      </div>
      <div class="relic-detail__stats">
        <label>name</label>
        <span>+30</span>
      </div>
    </div>
    <!-- <div class="relic-detail">羽</div>
    <div class="relic-detail">沙</div>
    <div class="relic-detail">杯</div>
    <div class="relic-detail">头</div> -->
    <div class="relic-detail">套</div>
  </div>
</template>

<style scoped>
.relic-info {
  margin-bottom: 16px;
  display: grid;
  grid-gap: 2px;
  grid-template-columns: repeat(3, 1fr);
}
.relic-detail {
  position: relative;
  border: 2px solid var(--border);
  border-radius: 4px;
  font-size: 14px;
  padding: 2px;
}
.relic-main-stats {
  display: flex;
  justify-content: space-between;
}
.relic-icon {
  width: 100%;
  z-index: -1;
  opacity: 0.2;
  top: -10%;
  position: absolute;
}
.relic-detail__stats {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  line-height: 14px;
}
</style>