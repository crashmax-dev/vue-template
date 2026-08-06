import { readonly, ref } from 'vue'
import type { ToastHelperOptions, ToastInput, ToastRecord, ToastVariant } from './types'

const DEFAULT_DURATION_MS = 5000

const toasts = ref<ToastRecord[]>([])
const timers = new Map<string, ReturnType<typeof setTimeout>>()

function clearTimer(id: string) {
  const timer = timers.get(id)
  if (timer == null) return
  clearTimeout(timer)
  timers.delete(id)
}

function scheduleDismiss(id: string, duration: number | null) {
  clearTimer(id)
  if (duration == null || duration <= 0) return

  timers.set(id, setTimeout(() => {
    dismissToast(id)
  }, duration))
}

function normalizeInput(input: ToastInput | string): ToastInput {
  return typeof input === 'string' ? { message: input } : input
}

function push(input: ToastInput | string): string {
  const options = normalizeInput(input)
  const id = options.id ?? crypto.randomUUID()
  const duration = options.duration === undefined
    ? DEFAULT_DURATION_MS
    : options.duration

  clearTimer(id)

  const record: ToastRecord = {
    id,
    title: options.title,
    message: options.message,
    variant: options.variant ?? 'info',
    duration,
    createdAt: Date.now(),
  }

  toasts.value = [
    ...toasts.value.filter((toast) => toast.id !== id),
    record,
  ]
  scheduleDismiss(id, duration)
  return id
}

function createHelper(variant: ToastVariant) {
  return (message: string, options: ToastHelperOptions = {}) => push({ ...options, message, variant })
}

export interface ToastApi {
  (input: ToastInput | string): string
  info: (message: string, options?: ToastHelperOptions) => string
  success: (message: string, options?: ToastHelperOptions) => string
  warning: (message: string, options?: ToastHelperOptions) => string
  error: (message: string, options?: ToastHelperOptions) => string
}

export const toast: ToastApi = Object.assign(push, {
  info: createHelper('info'),
  success: createHelper('success'),
  warning: createHelper('warning'),
  error: createHelper('error'),
})

export function dismissToast(id: string) {
  clearTimer(id)
  toasts.value = toasts.value.filter((item) => item.id !== id)
}

export function dismissAllToasts() {
  for (const id of timers.keys()) {
    clearTimer(id)
  }
  toasts.value = []
}

export function useToasts() {
  return readonly(toasts)
}

/** @internal */
export function __resetToastsForTests() {
  dismissAllToasts()
}
