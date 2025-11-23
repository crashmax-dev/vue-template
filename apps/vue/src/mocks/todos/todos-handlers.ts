import { vTodo } from '@vue-workspace/api/schemas'
import { http } from 'msw'
import * as v from 'valibot'
import { parseResolver } from '@/libs/msw/parse-resolver'
import { todosCollection } from './todos-collection'
import type {
  DeleteTodoByIdErrors,
  DeleteTodoByIdResponses,
  GetTodoByIdData,
  GetTodoByIdErrors,
  GetTodoByIdResponses,
  GetTodosData,
  GetTodosResponses,
  PostTodosData,
  PostTodosResponses,
  UpdateTodoByIdData,
  UpdateTodoByIdErrors,
  UpdateTodoByIdResponses,
} from '@vue-workspace/api/types'

const BASE_URL = '/api/todos'

function uuidValidation(uuid?: string) {
  const validation = v.safeParse(v.pick(vTodo, ['uuid']), { uuid })
  if (validation.success) return
  return validation.issues.map((issue) => issue.message)
}

function todoNotFound(uuid?: string) {
  return {
    message: `Todo "${uuid}" not found`,
  }
}

export const todosHandlers = [
  http.get(BASE_URL, async (resolver) => {
    return parseResolver<{
      request: GetTodosData
      response: GetTodosResponses
    }>(resolver, async (ctx) => {
      const start = ctx.getQuery('start', { default: 0 })
      const limit = ctx.getQuery('limit', { default: 10 })
      const todos = todosCollection.findMany(undefined, {
        skip: start,
        take: limit,
      })

      return ctx.response(200, {
        data: todos,
        total: todosCollection.count(),
      })
    })
  }),

  http.get(`${BASE_URL}/:uuid`, async (resolver) => {
    return parseResolver<{
      request: GetTodoByIdData
      response: GetTodoByIdResponses & GetTodoByIdErrors
    }>(resolver, async (ctx) => {
      const uuid = ctx.getPath('uuid')
      const uuidErrors = uuidValidation(uuid)
      if (uuidErrors) {
        return ctx.response(400, { errors: uuidErrors })
      }

      const todo = todosCollection.findFirst((q) => q.where({ uuid }))
      if (!todo) {
        return ctx.response(404, todoNotFound(uuid))
      }

      return ctx.response(200, todo)
    })
  }),

  http.post(BASE_URL, async (resolver) => {
    return parseResolver<{
      request: PostTodosData
      response: PostTodosResponses
    }>(resolver, async (ctx) => {
      const body = await ctx.getBody()

      const currentDate = new Date().toISOString()
      const todo = await todosCollection.create({
        uuid: crypto.randomUUID(),
        ...body,
        createdAt: currentDate,
        updatedAt: currentDate,
      })

      return ctx.response(200, todo)
    })
  }),

  http.patch(`${BASE_URL}/:uuid`, async (resolver) => {
    return parseResolver<{
      request: UpdateTodoByIdData
      response: UpdateTodoByIdResponses & UpdateTodoByIdErrors
    }>(resolver, async (ctx) => {
      const uuid = ctx.getPath('uuid')
      const uuidErrors = uuidValidation(uuid)
      if (uuidErrors) {
        return ctx.response(400, { errors: uuidErrors })
      }

      const body = await ctx.getBody()
      const todo = await todosCollection.update((q) => q.where({ uuid }), {
        data(todo) {
          todo.title = body.title
          todo.status = body.status
          todo.updatedAt = new Date().toISOString()
        },
      })
      if (!todo) {
        return ctx.response(404, todoNotFound(uuid))
      }

      return ctx.response(200, todo)
    })
  }),

  http.delete(`${BASE_URL}/:uuid`, async (resolver) => {
    return parseResolver<{
      request: GetTodoByIdData
      response: DeleteTodoByIdResponses & DeleteTodoByIdErrors
    }>(resolver, async (ctx) => {
      const uuid = ctx.getPath('uuid')
      const uuidErrors = uuidValidation(uuid)
      if (uuidErrors) {
        return ctx.response(400, { errors: uuidErrors })
      }

      const todo = todosCollection.findFirst((q) => q.where({ uuid }))
      if (!todo) {
        return ctx.response(404, todoNotFound(uuid))
      }

      todosCollection.delete(todo)
      return ctx.response(200)
    })
  }),
]
