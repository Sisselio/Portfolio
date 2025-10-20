import { secondTitle, AboutMe } from '../data/dataBase';
<template>
  <div class="experience" id="Mi experiencia">
    <SecondTitlePfl :secondTitle="secondTitle!"></SecondTitlePfl>
    <ul>
      <li v-for="job in jobs.filter((job) => job.actual === true)">
        <ActualJobPfl :job="job"></ActualJobPfl>
      </li>
      <li v-for="job in jobs.filter((job) => job.actual !== true)">
        <JobPfl :job="job"></JobPfl>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { secondTitles } from "~/data/dataBase";
import { jobs } from "~/data/dataBase";

const secondTitle = computed(() => secondTitles[1] ?? null);
</script>
<style scoped>
.experience {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100dvh;
}
</style>
