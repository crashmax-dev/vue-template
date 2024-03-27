<script setup lang="ts">
import { UiButton } from '@pnpm-workspace/ui'
import { divide } from '@pnpm-workspace/utils'
import { computed, ref } from 'vue'

const clicks = ref(0)
const count = computed(() => divide(clicks.value, 2))

function increment() {
  clicks.value += 2
}
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ui-button
      v-if="clicks"
      class="sefsef"
      size="large"
      @click="increment"
    >
      Count {{ count }}
    </ui-button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
