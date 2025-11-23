import { HttpResponse } from 'msw'
import type { HttpResponseResolver } from 'msw'

interface ResolverTypes {
  request?: {
    body?: unknown
    query?: unknown
    path?: unknown
  }
  response?: {
    200: unknown
  }
}

export async function parseResolver<
  TResolver extends ResolverTypes = ResolverTypes,
>(resolver: Parameters<HttpResponseResolver>[0]) {
  const url = new URL(resolver.request.url)

  function getPath(key: keyof NonNullable<TResolver['request']>['path']) {
    return resolver.params[key as string] as string | undefined
  }

  async function getBody() {
    return resolver.request.clone().json() as NonNullable<TResolver['request']>['body']
  }

  function getQuery<T extends string | number = string>(
    key: keyof NonNullable<TResolver['request']>['query'],
    options?: { default?: T },
  ): T extends number ? number : string | undefined {
    const queryValue = url.searchParams.get(key as string)

    if (queryValue === null) {
      return options?.default as any
    }

    if (options?.default !== undefined && typeof options.default === 'number') {
      const num = Number(queryValue)
      return (Number.isNaN(num) ? options.default : num) as any
    }

    return queryValue as any
  }

  function responseJson(data: NonNullable<TResolver['response']>[200]) {
    return HttpResponse.json(data as any)
  }

  function responseNotFound() {
    return new HttpResponse(undefined, { status: 404 })
  }

  function responseSuccess() {
    return new HttpResponse(undefined, { status: 200 })
  }

  return {
    url,

    getPath,
    getBody,
    getQuery,

    responseJson,
    responseSuccess,
    responseNotFound,
  }
}
