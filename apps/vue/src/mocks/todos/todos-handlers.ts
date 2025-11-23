import { http } from 'msw'
import { parseResolver } from '@/libs/msw/parse-resolver'
import { todosData } from './todos-data'
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
    const req = await parseResolver<GetTodosData, GetTodosResponses>(resolver)
    const start = req.getQuery('start', { default: 0 })
    const limit = req.getQuery('limit', { default: 10 })
    const todos = todosData.findMany(undefined, {
      skip: start,
      take: limit,
    })

    return req.responseJson({
      data: todos,
      total: todosData.count(),
    })
  }),

  http.get(`${BASE_URL}/:id`, async (resolver) => {
    const req = await parseResolver<GetTodoByIdData, GetTodoByIdResponses>(resolver)
    const id = req.getPath('id')
    const todo = todosData.findFirst((q) => q.where({ id }))

    if (!todo) return req.notFound()
    return req.responseJson(todo)
  }),

  http.post(BASE_URL, async (resolver) => {
    const req = await parseResolver<PostTodosData, PostTodosResponses>(resolver)
    const body = await req.getBody()
    const todo = await todosData.create({
      id: crypto.randomUUID(),
      ...body,
    })

    return req.responseJson(todo)
  }),

  http.patch(`${BASE_URL}/:id`, async (resolver) => {
    const req = await parseResolver<UpdateTodoByIdData, UpdateTodoByIdResponses>(resolver)
    const id = req.getPath('id')
    const body = await req.getBody()

    const todo = await todosData.update((q) => q.where({ id }), {
      data(todo) {
        todo.title = body.title
        todo.status = body.status
      },
    })

    if (!todo) return req.notFound()
    return req.responseJson(todo)
  }),

  http.delete(`${BASE_URL}/:id`, async (resolver) => {
    const req = await parseResolver<GetTodoByIdData>(resolver)
    const id = req.getPath('id')
    const todo = todosData.findFirst((q) => q.where({ id }))

    if (!todo) return req.notFound()
    todosData.delete(todo)
    return req.responseSuccess()
  }),
]
