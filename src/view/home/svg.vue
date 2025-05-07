<template>
  <Icon 
    v-for="i in 4" 
    :key="i" 
    class="card-svg" 
    :icon="crih"
    fill="#FDFBF6"
    stroke="#FDFBF6"
  />
</template>
<script setup>
import Icon from "@/component/Icon.vue";
import allImages from "@/constants/imageConstant";
const { crih } = allImages;
</script>
