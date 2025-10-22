<template>
  <section class="hero" id="Home" aria-label="Sección principal">
    <TitlePfl class="title" :title="title" />

    <div class="arrowButton">
      <ArrowButtonPfl class="arrowButton" :id="1" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { title } from "~/data/dataBase";
</script>

<style scoped lang="scss">
.hero {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 100dvh;
  padding: 5em 0;
  @include respond-until("sm") {
    font-size: 0.7em;
  }
}

.arrowButton {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
