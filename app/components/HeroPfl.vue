<template>
  <div class="hero">
    <TitlePfl class="title" :title="title" />
    <ArrowButtonPfl class="arrow" :id="1"/>
  </div>
</template>
<script setup lang="ts">
import { title } from "~/data/dataBase";

</script>
<style scoped>
.hero {
  margin-top: 5em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
