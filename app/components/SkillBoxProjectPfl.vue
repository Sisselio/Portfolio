<template>
  <div class="skill">
    <div class="iconBox">
      <Icon :name="skill.icon" size="1.5em" />
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.625em;
}
.iconBox {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: #18354d;
  padding: 0.625em;
  border-radius: 50%;
}
.name {
  font-size: 1em;
  color: white;
  margin-right: 2em;
}
</style>
