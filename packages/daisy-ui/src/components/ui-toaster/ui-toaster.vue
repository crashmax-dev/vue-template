<template>
  <div
    class="toast ui-toaster z-[100]"
    :class="placementClass"
    data-testid="ui-toaster"
  >
    <div
      v-for="item of toasts"
      :key="item.id"
      class="alert ui-toaster__item shadow-lg"
      :class="variantClass(item.variant)"
      :role="item.variant === 'error' || item.variant === 'warning' ? 'alert' : 'status'"
      :data-toast-id="item.id"
    >
      <div class="ui-toaster__body">
        <strong v-if="item.title">{{ item.title }}</strong>
        <span>{{ item.message }}</span>
      </div>
      <button
        type="button"
        class="btn btn-ghost btn-sm btn-square ui-toaster__dismiss"
        aria-label="Dismiss"
        @click="dismissToast(item.id)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="size-4"
          aria-hidden="true"
        >
          <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { dismissToast, useToasts } from '../../toast/toast'
import type { ToastPlacement, ToastVariant } from '../../toast/types'

const props = withDefaults(defineProps<{
  placement?: ToastPlacement
}>(), {
  placement: 'top-end',
})

const toasts = useToasts()

const placementClass = computed(() => {
  switch (props.placement) {
    case 'top-start':
      return 'toast-top toast-start'
    case 'top-center':
      return 'toast-top toast-center'
    case 'top-end':
      return 'toast-top toast-end'
    case 'middle-start':
      return 'toast-middle toast-start'
    case 'middle-center':
      return 'toast-middle toast-center'
    case 'middle-end':
      return 'toast-middle toast-end'
    case 'bottom-start':
      return 'toast-bottom toast-start'
    case 'bottom-center':
      return 'toast-bottom toast-center'
    case 'bottom-end':
      return 'toast-bottom toast-end'
    default:
      return 'toast-top toast-end'
  }
})

function variantClass(variant: ToastVariant) {
  switch (variant) {
    case 'success':
      return 'alert-success'
    case 'warning':
      return 'alert-warning'
    case 'error':
      return 'alert-error'
    case 'info':
    default:
      return 'alert-info'
  }
}
</script>

<style scoped>
.ui-toaster {
  /* DaisyUI toast defaults to width: max-content — that shrink-wraps short messages. */
  width: 20rem !important;
  max-width: calc(100vw - 2rem);
}

.ui-toaster__item {
  display: flex !important;
  grid-template-columns: none !important;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
}

.ui-toaster__body {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 0.125rem;
  min-width: 0;
  overflow-wrap: anywhere;
}

.ui-toaster__dismiss {
  flex: 0 0 auto;
}
</style>
