import { Navbar } from '../data/dataBase'; import { NuxtImg } from
'../../.nuxt/components';
<template>
  <header class="header">
    <NuxtImg class="logo" src="/LogoPflVector.svg" alt="Logo" />
    <NavbarPfl></NavbarPfl>
  </header>
</template>
<script></script>
<style scoped>
.header {
  padding: 1.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 18em;
  margin-left: 18em;
  background-color: #0a0a0a;
  padding-right: 5em;
}
.logo {
  width: 1.5em;
  fill: #4299e1;
}
</style>
