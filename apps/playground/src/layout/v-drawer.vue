<template>
  <div class="flex h-dvh flex-col overflow-hidden">
    <div class="shrink-0">
      <slot
        name="navbar"
        :open="open"
        :close="close"
        :toggle="toggle"
        :is-desktop="isDesktop"
      />
    </div>

    <div class="flex min-h-0 flex-1 overflow-hidden">
      <nav
        v-if="isDesktop"
        class="flex h-full w-80 shrink-0 flex-col overflow-y-auto border-r border-base-300 bg-base-200"
        aria-label="Navigation"
      >
        <slot
          name="sidebar"
          :close="close"
          :is-desktop="true"
        />
      </nav>

      <main class="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
        <slot />
      </main>
    </div>

    <teleport to="body">
      <div
        v-if="open && !isDesktop"
        class="fixed inset-0 z-40"
        data-testid="drawer-mobile"
      >
        <button
          type="button"
          class="absolute inset-0 bg-black/40"
          aria-label="Close sidebar"
          data-testid="drawer-overlay"
          @click="close"
        />
        <nav
          id="app-drawer-sidebar"
          class="absolute inset-y-0 left-0 flex w-80 flex-col overflow-y-auto bg-base-200 text-base-content shadow-xl"
          aria-label="Navigation"
          role="dialog"
          aria-modal="true"
        >
          <slot
            name="sidebar"
            :close="close"
            :is-desktop="false"
          />
        </nav>
      </div>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { onKeyStroke, useMediaQuery } from '@vueuse/core'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const open = ref(false)
const route = useRoute()
const isDesktop = useMediaQuery('(min-width: 1024px)')

function close() {
  open.value = false
}

function toggle() {
  open.value = !open.value
}

watch(() => route.fullPath, close)

watch(isDesktop, (desktop) => {
  if (desktop) close()
})

onKeyStroke('Escape', (event) => {
  if (!open.value || isDesktop.value) return
  event.preventDefault()
  close()
})

defineExpose({
  open,
  close,
  toggle,
  isDesktop,
})
</script>
