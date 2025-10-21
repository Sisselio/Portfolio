<template>
  <button class="button">
    <a class="a" :href="tab.relocation">{{ tab.title }}</a>
  </button>
</template>
<script setup lang="ts">
defineProps<{
  tab: {
    id: number;
    title: string;
    relocation: string;
  };
}>();
</script>
<style scoped>
.button {
  padding: 0.75em;
  background-color: #4299e1;
  border-radius: 0.3125em;
  border: none;
}
.button:hover {
  padding: 0.75em;
  background-color: #6fb9f5;
  border-radius: 0.3125em;
  border: none;
  transition: 0.5s;
}
.a {
  text-decoration: none;
  color: black;
  font-size: 1.0625rem;
  font-weight: 600;
}
</style>
