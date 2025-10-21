<template>
  <div class="secondTitle">
    <h2 class="title">{{ secondTitle.title }}</h2>
    <hr />
  </div>
</template>
<script setup lang="ts">
defineProps<{
  secondTitle: {
    title: string;
  };
}>();
</script>
<style scoped>
.title {
  color: white;
}
.secondTitle {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.5em;
  font-size: 2em;
  margin-top: 1em;
}
.secondTitle hr {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  gap: 0.5em;
  margin-top: 1em;
  height: 0.1875rem;
  background-color: white;
}
</style>
