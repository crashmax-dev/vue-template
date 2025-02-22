/// <reference types="vite/client" />
/// <reference types="@vue-workspace/vite-config/types" />
/// <reference types="@histoire/plugin-vue/components" />

declare module 'histoire' {
  interface CommonMeta {
    column?: boolean
  }
}

export {}
