<template>
  <section class="experience" id="mi-experiencia" aria-label="Mi experiencia">
    <SecondTitlePfl :secondTitle="secondTitle!" />

    <ul>
      <li v-for="job in jobs.filter((job) => job.actual === true)">
        <ActualJobPfl :job="job" />
      </li>
      <li v-for="job in jobs.filter((job) => job.actual !== true)">
        <JobPfl :job="job" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { secondTitles } from "~/data/dataBase";
import { jobs } from "~/data/dataBase";

const secondTitle = computed(() => secondTitles[1] ?? null);
</script>
<style scoped lang="scss">
.experience {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100dvh;
  @include respond-until("sm") {
    margin-left: 5em;
    margin-right: 5em;
    font-size: 0.7em;
  }
}
</style>
