import { toast } from '@vue-workspace/daisy-ui'

function toMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message || 'Request failed'
  }

  if (typeof error === 'string') {
    return error
  }

  return 'Unexpected API error'
}

export function reportApiError(error: unknown) {
  toast.error(toMessage(error), {
    title: 'API error',
    duration: 6000,
  })
}
