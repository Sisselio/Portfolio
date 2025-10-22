<template>
  <section class="contact" id="contactar" aria-label="Formulario de contacto">
    <SecondTitlePfl :second-title="secondTitle!" />

    <form class="form">
      <div v-for="(form, index) in forms" class="form-field">
        <label :for="form.name">{{ form.name }}</label>
        <input
          :id="form.name"
          :type="form.type"
          :name="form.name"
          class="input"
          required
        />
      </div>

      <button type="submit" class="button">Contactar</button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { secondTitles } from "~/data/dataBase";
import { forms } from "~/data/dataBase";

const secondTitle = secondTitles[4];
</script>
<style scoped>
.contact {
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #0f172a;
  color: white;
}
.form {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  background-color: #24345c;
  border-radius: 0.9375em;
  padding: 1em;
  width: 50em;
}
.input {
  background-color: #465d8e;
  border-radius: 0.9375em;
  width: 48em;
  height: 4em;
}
.button {
  padding: 0.75em;
  background-color: #4299e1;
  border-radius: 0.9375em;
  border: none;
  width: 48em;
  height: 4em;
  margin-top: 1em;
}
.button:hover {
  padding: 0.75em;
  background-color: #6fb9f5;
  border-radius: 0.9375em;
  border: none;
  transition: 0.5s;
  width: 48em;
  height: 4em;
}
</style>
