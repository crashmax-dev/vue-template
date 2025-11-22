import { HttpResponse } from 'msw'
import type { HttpResponseResolver } from 'msw'

export async function parseResolver<
  ResolverInput extends {
    body?: unknown
    query?: unknown
    path?: unknown
  },
  ResolverOutput extends {
    200: unknown
  } = any,
>(resolver: Parameters<HttpResponseResolver>[0]) {
  const url = new URL(resolver.request.url)

  function getPath(key: keyof ResolverInput['path']) {
    return resolver.params[key as string] as string | undefined
  }

  async function getBody() {
    return resolver.request.clone().json() as ResolverInput['body']
  }

  function getQuery<T extends string | number = string>(
    key: keyof ResolverInput['query'],
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

  function responseJson(data: ResolverOutput[200]) {
    return HttpResponse.json(data as any)
  }

  function notFound() {
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
    notFound,
  }
}
