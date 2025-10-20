<template>
  <div class="projects" id="Proyectos">
    <SecondTitlePfl :second-title="secondTitle!" />
  </div>
</template>
<script setup lang="ts">
import { secondTitles } from "~/data/dataBase";

const secondTitle = secondTitles[3];
</script>
<style scoped>
.projects {
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
