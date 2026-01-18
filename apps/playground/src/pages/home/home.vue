<template>
  <div class="home">
    <vue-icon class="vue-icon" />
  </div>
</template>

<script setup lang="ts">
import VueIcon from '~icons/custom-icon/vue'
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.vue-icon {
  font-size: 12rem;
}
</style>
