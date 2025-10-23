<template>
  <header class="header" role="banner">
    <NuxtImg
      class="logo"
      src="/favicon.svg"
      alt="Ir a la página de inicio"
      @click="irAHome"
    />
    <nav aria-label="Navegación principal">
      <NavbarPfl />
    </nav>
  </header>

  <header class="headerSm" role="banner">
    <NuxtImg
      class="logo"
      src="/favicon.svg"
      alt="Ir a la página de inicio"
      @click="irAHome"
    />
    <button class="menu-toggle" @click="toggleMenu">☰</button>
  </header>

  <div v-if="menuAbierto" class="menu-desplegable">
    <NavbarMobilePfl @close="menuAbierto = false" />
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const menuAbierto = ref(false);

function irAHome() {
  router.push("/#Home");
  menuAbierto.value = false;
}

function toggleMenu() {
  menuAbierto.value = !menuAbierto.value;
}
</script>

<style scoped lang="scss">
.header {
  display: none;

  @include respond-to("sm") {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 10dvh;
    z-index: 1000;
    padding: 1.5em 5em;
    align-items: center;
    justify-content: space-around;
    background-color: #0a0a0a;
  }
}

.headerSm {
  display: none;

  @include respond-until("sm") {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 10dvh;
    z-index: 1000;
    padding: 1.5em;
    background-color: #0a0a0a;
  }

  .menu-toggle {
    background: none;
    border: none;
    font-size: 2rem;
    color: #fff;
    cursor: pointer;
  }
}

.menu-desplegable {
  position: fixed;
  bottom: 0;
  right: 0;
  background-color: #1a1a1a;
  padding: 1em;
  z-index: 999;
  width: 80vw;
  max-width: 300px;
  border-top-left-radius: 10px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.5);

  @include respond-to("sm") {
    display: none; // ocultar en pantallas grandes
  }
}

.logo {
  width: 1.5em;
  fill: #4299e1;
  cursor: pointer;
}
</style>
