<template>
  <div class="contact" id="Contactar">
    <SecondTitlePfl :second-title="secondTitle!" />
  </div>
</template>
<script setup lang="ts">
import { secondTitles } from "~/data/dataBase";

const secondTitle = secondTitles[4];
</script>
<style scoped>
.contact {
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #0f172a;
}
</style>
