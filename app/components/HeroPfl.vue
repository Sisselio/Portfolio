<template>
  <div class="hero" id="Home">
    <TitlePfl class="title" :title="title" />
    <ArrowButtonPfl class="arrowButon" :id="1" />
  </div>
</template>
<script setup lang="ts">
import { title } from "~/data/dataBase";
</script>
<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100dvh;
}
.arrowButon {
  align-self: flex-end;
  justify-self: flex-end;
}
</style>
