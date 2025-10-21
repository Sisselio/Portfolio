<template>
  <div class="card">
    <div class="cardLeft">
      <NuxtImg />
    </div>
    <div class="cardRight">
      <p class="projectName">{{ project.name }}</p>
      <p class="projectDescription">{{ project.description }}</p>
      <p class="projectLanguages"><div v-for="skill in project.languages"></div></p>
    </div>
  </div>
</template>
<script setup lang="ts">

defineProps<{
  project: {
  image: string;
  name: string;
  languages: Skill[];
  description: string;
  };
}>();
</script>
