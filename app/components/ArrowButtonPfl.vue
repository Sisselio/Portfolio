<template>
  <div class="arrowButton">
    <ButtonPfl v-if="tab" :tab="tab" />
    <NuxtImg class="arrowIcon" src="/ArrowDownIcon.svg" alt="arrow" />
  </div>
</template>

<script setup lang="ts">
import { tabs } from "~/data/dataBase";

const props = defineProps<{ id: number }>();

const tab = computed(() => tabs[props.id] ?? null);
</script>
<style scoped>
.arrowButton {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.5em;
  margin-bottom: 1em;
}
.arrowIcon {
  width: 2em;
  height: 2em;
}
</style>
