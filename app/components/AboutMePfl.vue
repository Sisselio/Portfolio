import { secondTitle, AboutMe } from '../data/dataBase';
<template>
  <div class="aboutMe" id="Sobre mi">
    <SecondTitlePfl :secondTitle="secondTitle!"></SecondTitlePfl>
    <p class="aboutMeParr">{{ aboutMe.firstPart }}</p>
    <hr class="slash" />
    <p class="aboutMeParr">{{ aboutMe.secondPart }}</p>
    <ArrowButtonPfl :id="2"></ArrowButtonPfl>
  </div>
</template>

<script setup lang="ts">
import { secondTitles } from "~/data/dataBase";
import { aboutMe } from "~/data/dataBase";
import SecondTitlePfl from "./SecondTitlePfl.vue";

const secondTitle = computed(() => secondTitles[0] ?? null);
</script>
<style scoped>
.aboutMe {
  margin-top: 5em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #0f172a;
  height: 100dvh;
}
.aboutMeParr {
  color: white;
  font-size: 2em;
  text-align: center;
  max-width: 43em;
  margin-top: 2em;
  margin-bottom: 2em;
}
.slash {
  width: 15%;
  height: 0.25em;
  background-color: white;
}
</style>
