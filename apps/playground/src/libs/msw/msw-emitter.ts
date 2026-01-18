import { Emitter } from '@zero-dependency/emitter'

export const mswEmitter = new Emitter<{
  'msw:setup': () => void
}>()
