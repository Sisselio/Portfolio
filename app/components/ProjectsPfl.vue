<template>
  <section class="projects" id="proyectos" aria-label="Proyectos">
    <SecondTitlePfl :second-title="secondTitle!" />

    <div v-for="(project, index) in projects">
      <ProjectCardPfl :project="project" :index="index" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { secondTitles } from "~/data/dataBase";
import { projects } from "~/data/dataBase";

const secondTitle = secondTitles[3];
</script>
<style scoped>
.projects {
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
