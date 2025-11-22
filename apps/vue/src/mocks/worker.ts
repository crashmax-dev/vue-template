import { setupWorker } from 'msw/browser'
import { todosHandlers } from './todos/todos-handlers'

export const worker = setupWorker(
  ...todosHandlers,
)
