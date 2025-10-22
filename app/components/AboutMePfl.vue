<template>
  <section class="aboutMe" id="sobre-mi" aria-label="Sobre mí">
    <SecondTitlePfl :secondTitle="secondTitle!" />

    <p class="aboutMeParr">{{ aboutMe.firstPart }}</p>

    <hr class="slash" />

    <p class="aboutMeParr">{{ aboutMe.secondPart }}</p>

    <ArrowButtonPfl :id="2" />
  </section>
</template>

<script setup lang="ts">
import { secondTitles } from "~/data/dataBase";
import { aboutMe } from "~/data/dataBase";

const secondTitle = computed(() => secondTitles[0] ?? null);
</script>
<style scoped lang="scss">
.aboutMe {
  background-color: #0f172a;
  margin-top: 5em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #0f172a;
  min-height: 100dvh;
  width: 100%;
  @include respond-until("sm") {
    margin-top: 5em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #0f172a;
    min-height: 100dvh;
    width: 100%;
    font-size: 0.5em;
    padding: 5em;
  }
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
