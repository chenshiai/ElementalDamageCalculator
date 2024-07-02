<template>
  <div class="tab-title">
    <slot />
  </div>
</template>

<style>
.tab-title {
  border-radius: 4px;
  text-align: center;
  line-height: 26px;
  border: 1px solid var(--button-bg);
  font-weight: 600;
  background-color: var(--light-text);
  position: relative;
  margin-bottom: 16px;
}

.tab-title::before {
  content: '《';
  position: absolute;
  left: 4px;
  font-size: 12px;
  color: #B59C96;
}

.tab-title:after {
  content: '》';
  position: absolute;
  right: 4px;
  font-size: 12px;
  color: #B59C96;
}
</style>