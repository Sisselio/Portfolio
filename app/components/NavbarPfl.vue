<template>
  <div>
    <ul>
      <li class="navbar">
        <Button-pfl
          v-for="tab in tabs.filter((tab) => tab.id !== 3)"
          :key="tab.id"
          :relocation="tab.relocation"
          :tab="tab"
        ></Button-pfl>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { tabs } from "~/data/dataBase";
</script>
<style scoped>
.navbar {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  gap: 3.125rem;
}
</style>
