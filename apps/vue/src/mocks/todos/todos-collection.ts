import { faker } from '@faker-js/faker'
import { vTodo } from '@vue-workspace/api/schemas'
import { TodoStatus } from '@vue-workspace/api/types'
import { createCollection } from '@/libs/msw/create-collection'

export const todosCollection = createCollection({
  name: 'todos',
  schema: vTodo,
  setupMocks: {
    count: 42,
    createData() {
      return {
        id: crypto.randomUUID(),
        status: faker.helpers.enumValue(TodoStatus),
        title: faker.lorem.sentence({ min: 1, max: 5 }),
      }
    },
  },
})
