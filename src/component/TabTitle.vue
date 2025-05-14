<template>
  <div class="tab-title">
    <slot />
  </div>
</template>

<style scoped>
.tab-title {
  line-height: 40px;
  font-weight: 600;
  background-color: #fff;
  box-shadow: 0 0 5px var(--button-bg);
  position: fixed;
  top: 0;
  left: 0;
  padding-left: 50px;
  width: 100%;
  margin-bottom: 16px;
  z-index: 99;
  text-align: center;
  padding: 0;
}
</style>
