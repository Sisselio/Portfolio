<template>
  <div class="job">
    <p class="jobName">{{ job.name }}</p>
    <p class="jobDuration">{{ job.duration }}</p>
    <p class="jobDescription">{{ job.description }}</p>
    <hr class="slash" />
  </div>
</template>
<script setup lang="ts">
defineProps<{
  job: {
    name: string;
    duration: string;
    description: string;
    actual: boolean;
  };
}>();
</script>
<style scoped>
.job {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 2em;
}
.jobName {
  color: white;
  margin-left: 1em;
  font-size: 1.3em;
}
.jobDuration {
  color: white;
  margin-left: 2em;
  font-size: 1.15em;
}
.jobDescription {
  color: white;
  margin-left: 3em;
  font-size: 1.15em;
}
.slash {
  width: 60%;
  height: 0.25em;
  background-color: white;
  margin-left: 0em;
  margin-top: 1.625em;
}
</style>
