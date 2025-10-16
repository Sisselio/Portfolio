<template>
  <ul>
    <li>
      <!-- <a href="">{{ tab.title }}</a> -->
    </li>
  </ul>
</template>
<script setup lang="ts">
import { tabs } from "~/data/data";
defineProps<{
  tab: {
    id: number;
    title: string;
  };
}>();
</script>
<style scoped>
li {
  list-style-type: none;
}
a {
  text-decoration: none;
  color: black;
}
</style>
