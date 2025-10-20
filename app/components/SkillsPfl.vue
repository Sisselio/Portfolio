<template>
  <div class="skills" id="Competencias">
    <SecondTitlePfl :secondTitle="secondTitle!" />
    <div class="skillBoxes">
      <div v-for="skill in skills">
        <SkillBoxPfl :skill="skill" class="skillBox" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { skills } from "~/data/dataBase";
import { secondTitles } from "~/data/dataBase";

const secondTitle = secondTitles[2];
</script>
<style scoped>
.skills {
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #0f172a;
}
.skillBoxes {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 50em;
}
.skillBox {
  margin-top: 5em;
}
</style>
