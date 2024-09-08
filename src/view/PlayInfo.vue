<template>
  <div>{{ playinfo }}</div>
  <div id="a"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const playinfo = ref({});

onMounted(() => {
  const src = document.createElement('a');
  src.innerHTML = 'kjjj';
  src.target = '_blank';
  src.href = 'https://enka.network/api/uid/101793652/';
  // src.src = 'http://localhost:8080/test.json'
  document.getElementById('a').appendChild(src);
})
</script>