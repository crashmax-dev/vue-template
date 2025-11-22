import { Collection } from '@msw/data'
import { persist } from '@msw/data/extensions/persist'
import { vTodo } from '@vue-workspace/api/schemas'

export const todosData = new Collection({
  schema: vTodo,
  extensions: [persist()],
})
