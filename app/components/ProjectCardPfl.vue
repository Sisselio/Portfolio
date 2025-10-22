<template>
  <div class="card" :class="{ reverse: index % 2 !== 0 }">
    <div class="cardLeft">
      <img :src="project.image" class="projectImage" />
    </div>
    <div class="cardRight">
      <p class="projectName">{{ project.name }}</p>
      <p class="projectDescription">{{ project.description }}</p>
      <div class="projectLanguages">
        <SkillBoxProjectPfl
          v-for="skill in project.languages"
          :key="skill.name"
          :skill="skill"
        />
      </div>
    </div>
  </div>
  <hr />
</template>
<script setup lang="ts">
import type { Skill } from "~/data/dataBase";
defineProps<{
  project: {
    image: string;
    name: string;
    languages: Skill[];
    description: string;
  };
  index: number;
}>();
</script>
<style scoped>
.card {
  width: 50vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2em;
  margin: 2em auto;
}

.card.reverse {
  flex-direction: row-reverse;
}

.cardLeft {
  flex: 0 0 50%;
}

.projectImage {
  width: 16em;
  height: auto;
  border-radius: 0.5em;
}

.cardRight {
  flex: 0 0 50%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  color: white;
}

.projectName {
  font-size: 2em;
}

.projectDescription {
  font-size: 1.5em;
  margin-left: 1.5em;
}

.card.reverse .projectDescription {
  margin-left: 1.5em;
}

.projectLanguages {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  margin-left: 2em;
}

.card.reverse .projectLanguages {
  margin-left: 2em;
}
</style>
