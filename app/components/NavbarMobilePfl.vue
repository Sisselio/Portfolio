<template>
  <nav>
    <ul class="navbar">
      <li
        v-for="tab in tabs"
        :key="tab.id"
        class="nav-item"
        @click="irA(tab.relocation)"
      >
        {{ tab.title }}
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { tabs } from "~/data/dataBase";
const emit = defineEmits(["close"]);

const router = useRouter();

function irA(destino: string) {
  router.push(destino);
  emit("close");
}
</script>

<style scoped lang="scss">
.navbar {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.nav-item {
  padding: 0.75rem 1rem;
  background-color: #222;
  color: white;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
</style>
