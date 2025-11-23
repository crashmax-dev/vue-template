import { HttpResponse } from 'msw'
import type { HttpResponseResolver, JsonBodyType } from 'msw'

type HTTPStatuses = 200 | 400 | 404 | 502 | 503

interface ResolverTypes {
  request?: {
    body?: unknown
    query?: unknown
    path?: unknown
  }
  response?: Partial<Record<HTTPStatuses, unknown>>
}

interface ResolverContext<Resolver extends ResolverTypes> {
  url: URL
  getPath: (key: keyof NonNullable<Resolver['request']>['path']) => string | undefined
  getBody: () => Promise<NonNullable<Resolver['request']>['body']>
  getQuery: <T extends string | number = string>(
    key: keyof NonNullable<Resolver['request']>['query'],
    options?: { default?: T },
  ) => T extends number ? number : string | undefined
  response: <T extends keyof Resolver['response']>(
    status: T,
    data?: NonNullable<Resolver['response']>[T],
  ) => HttpResponse<JsonBodyType>
}

export async function parseResolver<
  Resolver extends ResolverTypes = ResolverTypes,
>(
  resolver: Parameters<HttpResponseResolver>[0],
  resolverFn: (ctx: ResolverContext<Resolver>) => Promise<HttpResponse<JsonBodyType>>,
) {
  const url = new URL(resolver.request.url)

  function getPath(key: keyof NonNullable<Resolver['request']>['path']) {
    return resolver.params[key as string] as string | undefined
  }

  async function getBody() {
    return resolver.request.clone().json() as NonNullable<Resolver['request']>['body']
  }

  function getQuery<T extends string | number = string>(
    key: keyof NonNullable<Resolver['request']>['query'],
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

  function response<T extends keyof Resolver['response']>(
    status: T,
    data?: NonNullable<Resolver['response']>[T],
  ): HttpResponse<JsonBodyType> {
    return HttpResponse.json(data ?? undefined, { status: status as any })
  }

  return resolverFn({
    url,
    getPath,
    getBody,
    getQuery,
    response,
  })
}
