import { setupWorker } from 'msw/browser'
import { todosHandlers } from '@/mocks/todos/todos-handlers'

export const mswWorker = setupWorker(
  ...todosHandlers,
)
