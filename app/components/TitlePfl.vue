import { title } from '../data/dataBase';
<template>
  <div>
    <h1 class="title">
      {{ title.salute }}
      <br />
      {{ title.mainTitle }}
    </h1>
    <p class="subtitle">{{ title.subTitle }}</p>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  title: {
    salute: string;
    mainTitle: string;
    subTitle: string;
  };
}>();
</script>

<style scoped>
.title {
  color: white;
  font-size: 6em;
}
.subtitle {
  color: white;
  font-size: 2em;
  max-width: 15em;
}
</style>
