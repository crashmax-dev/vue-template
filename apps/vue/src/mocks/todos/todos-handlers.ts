import { http } from 'msw'
import { parseResolver } from '@/libs/msw/parse-resolver'
import { todosCollection } from './todos-collection'
import type {
  GetTodoByIdData,
  GetTodoByIdResponses,
  GetTodosData,
  GetTodosResponses,
  PostTodosData,
  PostTodosResponses,
  UpdateTodoByIdData,
  UpdateTodoByIdResponses,
} from '@vue-workspace/api/types'

const BASE_URL = '/api/todos'

export const todosHandlers = [
  http.get(BASE_URL, async (resolver) => {
    const req = await parseResolver<{
      request: GetTodosData
      response: GetTodosResponses
    }>(resolver)

    const start = req.getQuery('start', { default: 0 })
    const limit = req.getQuery('limit', { default: 10 })
    const todos = todosCollection.findMany(undefined, {
      skip: start,
      take: limit,
    })

    return req.responseJson({
      data: todos,
      total: todosCollection.count(),
    })
  }),

  http.get(`${BASE_URL}/:id`, async (resolver) => {
    const req = await parseResolver<{
      request: GetTodoByIdData
      response: GetTodoByIdResponses
    }>(resolver)

    const id = req.getPath('id')
    const todo = todosCollection.findFirst((q) => q.where({ id }))

    if (!todo) return req.responseNotFound()
    return req.responseJson(todo)
  }),

  http.post(BASE_URL, async (resolver) => {
    const req = await parseResolver<{
      request: PostTodosData
      response: PostTodosResponses
    }>(resolver)

    const body = await req.getBody()
    const todo = await todosCollection.create({
      id: crypto.randomUUID(),
      ...body,
    })

    return req.responseJson(todo)
  }),

  http.patch(`${BASE_URL}/:id`, async (resolver) => {
    const req = await parseResolver<{
      request: UpdateTodoByIdData
      response: UpdateTodoByIdResponses
    }>(resolver)

    const id = req.getPath('id')
    const body = await req.getBody()

    const todo = await todosCollection.update((q) => q.where({ id }), {
      data(todo) {
        todo.title = body.title
        todo.status = body.status
      },
    })

    if (!todo) return req.responseNotFound()
    return req.responseJson(todo)
  }),

  http.delete(`${BASE_URL}/:id`, async (resolver) => {
    const req = await parseResolver<{
      request: GetTodoByIdData
    }>(resolver)

    const id = req.getPath('id')
    const todo = todosCollection.findFirst((q) => q.where({ id }))

    if (!todo) return req.responseNotFound()
    todosCollection.delete(todo)
    return req.responseSuccess()
  }),
]
