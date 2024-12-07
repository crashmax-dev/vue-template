import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import Vue from '@vitejs/plugin-vue'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

import type { PluginOption } from 'vite'

const assetsDir = fileURLToPath(new URL('../../../packages/ui/src/assets', import.meta.url))

// https://github.com/sapphi-red/vite-plugin-static-copy
export const staticCopyPlugin = viteStaticCopy(
  {
    targets: [
      // {
      //   src: resolve(assetsDir, 'fonts'),
      //   dest: '',
      // },
      // {
      //   src: `${resolve(assetsDir, 'favicon')}/**`,
      //   dest: '',
      // },
    ],
  },
)

export const plugins: PluginOption[] = [
  Vue(),
  // https://github.com/unplugin/unplugin-icons
  Icons({
    compiler: 'vue3',
    autoInstall: false,
    iconCustomizer(collection, _icon, props) {
      if (collection.startsWith('heroicons')) {
        props.style = 'fill:currentColor;'
        props.width = '1em'
        props.height = '1em'
      }
    },
    customCollections: {
      'custom-icon': FileSystemIconLoader(
        resolve(assetsDir, 'icons'),
        (svg) => svg.replace(/^<svg /, '<svg width="1em" height="1em" '),
      ),
    },
  }),
  Components({
    dts: false,
    resolvers: [
      IconsResolver({
        customCollections: ['custom-icon'],
        enabledCollections: [
          // https://icones.js.org/collection/heroicons-outline
          'heroicons-outline',
        ],
      }),
    ],
  }),
]
