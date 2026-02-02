import { VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'
import { render as vitestRender } from 'vitest-browser-vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import App from '@/app.vue'
import type { ComponentMountingOptions } from '@vue/test-utils'
import type {
  Locator,
  LocatorSelectors,
  PrettyDOMOptions,
} from 'vitest/browser'
import type { DefineComponent } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

type ComponentProps<T> = T extends new (...args: any) => {
  $props: infer P
// eslint-disable-next-line ts/no-empty-object-type
} ? NonNullable<P> : T extends (props: infer P, ...args: any) => any ? P : {}

interface RenderResult<Props> extends LocatorSelectors {
  container: HTMLElement
  baseElement: HTMLElement
  locator: Locator
  debug(el?: HTMLElement | HTMLElement[] | Locator | Locator[], maxLength?: number, options?: PrettyDOMOptions): void
  unmount(): void
  emitted<T = unknown>(): Record<string, T[]>
  emitted<T = unknown[]>(eventName: string): undefined | T[]
  rerender(props: Partial<Props>): void
}

interface ComponentRenderOptions<C, P extends ComponentProps<C>> extends ComponentMountingOptions<C, P> {
  container?: HTMLElement
  baseElement?: HTMLElement
  routes?: RouteRecordRaw[]
}

export async function renderComponent<T, C = T extends ((...args: any) => any) | (new (...args: any) => any) ? T : T extends {
  props?: infer Props
} ? DefineComponent<Props extends Readonly<(infer PropNames)[]> | (infer PropNames)[] ? {
    [key in PropNames extends string ? PropNames : string]?: any;
  } : Props> : DefineComponent, P extends ComponentProps<C> = ComponentProps<C>>(
  component: T,
  options: ComponentRenderOptions<C, P> = {},
): Promise<RenderResult<P>> {
  const pinia = createPinia()

  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      {
        path: '/',
        // @ts-ignore
        component,
      },
      ...options.routes ?? [],
    ],
  })

  const screen = vitestRender(App, {
    ...options,
    global: {
      plugins: [
        pinia,
        router,
        [VueQueryPlugin, {
          queryClientConfig: {
            defaultOptions: {
              queries: {
                refetchOnMount: true,
                refetchOnWindowFocus: false,
              },
            },
          },
        }],
      ],
      ...options?.global,
    },
  })

  await router.isReady()

  return screen
};
