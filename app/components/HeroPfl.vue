<template>
  <div class="hero" id="Home">
    <TitlePfl class="title" :title="title" />
    <div class="arrowButtonWrapper">
      <ArrowButtonPfl class="arrowButton" :id="1" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { title } from "~/data/dataBase";
</script>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100dvh;
  padding: 5em 0;
}

.arrowButtonWrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
