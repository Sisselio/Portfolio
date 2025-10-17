<template>
  <TitlePfl class="hero" :title="title" />
</template>
<script setup lang="ts">
import { title } from "~/data/dataBase";
</script>
<style scoped>
.hero {
  margin-top: 12em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
</style>
