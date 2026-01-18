<template>
  <div>
    <a
      href="https://vite.dev"
      target="_blank"
    >
      <img
        src="/vite.svg"
        class="logo"
        alt="Vite logo"
      >
    </a>
    <a
      href="https://vuejs.org/"
      target="_blank"
    >
      <img
        src="./assets/vue.svg"
        class="logo vue"
        alt="Vue logo"
      >
    </a>
  </div>
  <hello-world msg="Vite + Vue" />
</template>

<script setup lang="ts">
import HelloWorld from './components/hello-world.vue'
</script>

<style scoped>
.logo {
  transition: filter 300ms;
  will-change: filter;
  padding: 1.5em;
  height: 6em;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
