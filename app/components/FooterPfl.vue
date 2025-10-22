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
<style scoped lang="scss">
.footer {
  height: 15dvh;
  width: 90%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
  margin: 2em auto;
  box-sizing: border-box;
  padding: 0 1em;
  @include respond-until("sm") {
    margin-left: 5em;
    margin-right: 5em;
    font-size: 0.7em;
  }
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
