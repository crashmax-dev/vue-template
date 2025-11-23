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
      const [createdAt, updatedAt] = faker.date.betweens({
        from: '2007-01-01T00:00:00.000Z',
        to: new Date().toISOString(),
        count: 2,
      })

      return {
        uuid: crypto.randomUUID(),
        status: faker.helpers.enumValue(TodoStatus),
        title: faker.lorem.sentence({ min: 1, max: 5 }),
        createdAt: createdAt!.toISOString(),
        updatedAt: updatedAt!.toISOString(),
      }
    },
  },
})
