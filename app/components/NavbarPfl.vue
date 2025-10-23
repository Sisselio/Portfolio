<template>
  <div>
    <ul>
      <li class="navbar">
        <Button-pfl
          v-for="tab in tabs"
          :key="tab.id"
          :relocation="tab.relocation"
          :tab="tab"
          @click="irA(tab.relocation)"
        ></Button-pfl>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { tabs } from "~/data/dataBase";
const router = useRouter();

function irA(destino: string) {
  router.push(destino);
}
</script>
<style scoped>
.navbar {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  gap: 3.125rem;
}
</style>
