import { Icon } from '../../.nuxt/components';
<template>
  <div class="footer">
    <div class="footerIzquierda">
      <div class="email">
        <Icon name="meteor-icons:at" size="3em" />Rubencollazonaranjo@gmail.com
      </div>
      <div>Diseño original por Rubén Collazo © 2025</div>
    </div>
    <div class="footerDerecha">
      <div>
        <Icon name="skill-icons:github-dark" size="3em" />
      </div>
      <div>
        <Icon name="skill-icons:instagram" size="3em" />
      </div>
      <div>
        <Icon name="skill-icons:linkedin" size="3em" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.footer {
  height: 15dvh;
  width: 50vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2em;
  margin: 2em auto;
}
.footerDerecha {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
}
.footerIzquierda {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 1em;
}
.email {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1em;
}
</style>
