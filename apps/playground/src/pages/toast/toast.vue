<template>
  <div class="flex flex-col gap-6 flex-1 min-h-0 overflow-y-auto">
    <v-page-header
      title="Toast"
      description="Playground for the daisy-ui toast queue — variants, stacking, sticky, and dismiss."
    />

    <section class="flex flex-col gap-2">
      <h2 class="text-base font-semibold">
        Variants
      </h2>
      <div class="flex flex-wrap gap-2">
        <v-button
          data-testid="toast-info"
          @click="toast.info('Heads up', { title: 'Info' })"
        >
          Info
        </v-button>

        <v-button
          data-testid="toast-success"
          @click="toast.success('Saved successfully', { title: 'Success' })"
        >
          Success
        </v-button>

        <v-button
          data-testid="toast-warning"
          @click="toast.warning('Something looks off', { title: 'Warning' })"
        >
          Warning
        </v-button>

        <v-button
          data-testid="toast-error"
          @click="toast.error('Something went wrong', { title: 'Error' })"
        >
          Error
        </v-button>
      </div>
    </section>

    <section class="flex flex-col gap-2">
      <h2 class="text-base font-semibold">
        Queue
      </h2>
      <div class="flex flex-wrap gap-2">
        <v-button
          variant="secondary"
          data-testid="toast-stack"
          @click="stackToasts"
        >
          Stack 3
        </v-button>

        <v-button
          variant="secondary"
          data-testid="toast-sticky"
          @click="toast.info('Sticky toast', { title: 'Pinned', duration: null })"
        >
          Sticky
        </v-button>

        <v-button
          variant="secondary"
          data-testid="toast-dismiss-all"
          @click="dismissAllToasts"
        >
          Dismiss all
        </v-button>
      </div>
    </section>

    <section class="flex flex-col gap-2">
      <h2 class="text-base font-semibold">
        From errors
      </h2>
      <p class="text-base opacity-70">
        These feed the same toast queue through the API interceptor / Vue error handler.
      </p>
      <div class="flex flex-wrap gap-2">
        <v-button
          data-testid="toast-report-api-error"
          @click="reportApiError(new Error('Manual API error toast'))"
        >
          reportApiError
        </v-button>

        <v-button
          variant="danger"
          data-testid="toast-throw-handler"
          @click="throwInHandler"
        >
          Throw in click handler
        </v-button>

        <v-button
          variant="danger"
          data-testid="toast-route-error"
          @click="triggerRouteError"
        >
          Trigger route error UI
        </v-button>

        <v-button
          variant="secondary"
          data-testid="toast-api-404"
          :disabled="isRequesting"
          @click="requestMissingTodo"
        >
          API 404 via client
        </v-button>
      </div>
    </section>

    <broken-toast-child v-if="showBrokenChild" />
  </div>
</template>

<script setup lang="ts">
import { getTodoById } from '@vue-workspace/api'
import { dismissAllToasts, toast } from '@vue-workspace/daisy-ui'
import { VButton } from '@vue-workspace/ui'
import { ref } from 'vue'
import VPageHeader from '@/layout/v-page-header.vue'
import { reportApiError } from '@/libs/api-error'
import BrokenToastChild from './broken-toast-child.vue'

const showBrokenChild = ref(false)
const isRequesting = ref(false)

function stackToasts() {
  toast.info('First')
  toast.success('Second')
  toast.warning('Third')
}

function throwInHandler() {
  throw new Error('Thrown from toast page click handler')
}

function triggerRouteError() {
  showBrokenChild.value = true
}

async function requestMissingTodo() {
  isRequesting.value = true
  try {
    await getTodoById({
      path: { uuid: '00000000-0000-4000-8000-000000000000' },
    })
  } catch {
    // Interceptor reports the toast; keep the page usable.
  } finally {
    isRequesting.value = false
  }
}
</script>
