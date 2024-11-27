<template>
  <div class="tab-title">
    <slot />
  </div>
</template>

<style scoped>
.tab-title {
  text-align: center;
  line-height: 40px;
  font-weight: 600;
  background-color: #fff;
  box-shadow: 0 0 5px var(--button-bg);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin-bottom: 16px;
  z-index: 99;
}
</style>