import { title } from '../data/dataBase';
<template>
  <div class="title-container">
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
.title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

}
.title {
  color: white;
  font-size: 2.5em;
}
.subtitle {
  color: white;
  font-size: 1em;
  max-width: 15em;
}
</style>
