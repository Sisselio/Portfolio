<template>
  <div class="skill">
    <div class="iconBox">
      <Icon :name="skill.icon" size="3em" />
    </div>
    <div class="name">{{ skill.name }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  skill: {
    name: string;
    icon: string;
  };
}>();
</script>
<style scoped>
.skill {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625em;
}
.iconBox {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: #367cb6;
  width: fit-content;
  height: auto;
  padding: 0.625em;
  border-radius: 50%;
}
.name {
  font-size: 1.5em;
  color: white;
  margin-right: 2em;
}
</style>
