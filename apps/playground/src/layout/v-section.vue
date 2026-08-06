<template>
  <div
    v-if="error"
    class="flex h-full min-h-0 w-full overflow-y-auto"
  >
    <div class="app-shell py-4">
      <div
        class="alert alert-warning flex-col items-start gap-3"
        role="alert"
        data-testid="route-error"
      >
        <h2 class="font-bold text-lg">
          Something went wrong
        </h2>
        <p>{{ error.message }}</p>
        <button
          type="button"
          class="btn"
          @click="reset"
        >
          Try again
        </button>
      </div>
    </div>
  </div>
  <div
    v-else
    class="flex h-full min-h-0 w-full flex-col overflow-hidden"
  >
    <router-view v-slot="{ Component }">
      <transition
        name="section"
        mode="out-in"
      >
        <section
          :key="route.path"
          class="app-shell flex h-full min-h-0 min-w-0 flex-1 flex-col overflow-hidden py-4"
        >
          <suspense>
            <div class="flex h-full min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
              <component :is="Component" />
            </div>
            <template #fallback>
              <p class="opacity-70">
                Loading…
              </p>
            </template>
          </suspense>
        </section>
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { onErrorCaptured, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const error = ref<Error | null>(null)

function reset() {
  error.value = null
}

watch(() => route.fullPath, reset)

onErrorCaptured((err) => {
  error.value = err instanceof Error ? err : new Error(String(err))
  return false
})
</script>

<style scoped>
.section-enter-active,
.section-leave-active {
  transition: opacity 0.15s ease;
}

.section-enter-from,
.section-leave-to {
  opacity: 0;
}
</style>
