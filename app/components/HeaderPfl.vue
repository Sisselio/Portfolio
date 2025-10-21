<template>
  <header class="header">
    <NuxtImg
      class="logo"
      src="/LogoPflVector.svg"
      alt="Logo"
      @click="irAHome"
    />
    <NavbarPfl />
  </header>
</template>
<script setup lang="ts">
const router = useRouter();

function irAHome() {
  router.push("/#Home");
}
</script>
<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 10;
  width: 100%;
  z-index: 1000;
  padding: 1.5em 5em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #0a0a0a;
}

.logo {
  width: 1.5em;
  fill: #4299e1;
  cursor: pointer;
}
</style>
