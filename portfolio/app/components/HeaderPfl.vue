import { NavbarPfl } from '../../.nuxt/components';
<template>
  <header>
    <NavbarPfl v-for="tab in tabs" :key="tab.id" :tab="tab"></NavbarPfl>
  </header>
</template>

<script setup>
import { tabs } from "~/data/data";
</script>
<style scoped>
header {
  padding: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 0.125em;
}
</style>
