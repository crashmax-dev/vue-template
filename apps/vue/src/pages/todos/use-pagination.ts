import { inject } from 'vue'
import type { GetTodosData } from '@vue-workspace/api'
import type { InjectionKey, ShallowRef } from 'vue'

export type PaginationContext = ShallowRef<GetTodosData['query']>

export const paginationInjectionKey: InjectionKey<PaginationContext> = Symbol('pagination')

export function usePagination() {
  return inject(paginationInjectionKey)!
}
