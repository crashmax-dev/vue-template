import path from 'node:path'
import url from 'node:url'
import Vue from '@vitejs/plugin-vue'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import type { PluginOption } from 'vite'

const assetsDir = url.fileURLToPath(new URL(
  '../../../packages/ui/src/assets',
  import.meta.url,
))
const toPosixPath = (filePath: string) => filePath.replace(/\\/g, '/')

export const plugins: PluginOption[] = [
  Vue(),
  // https://github.com/unplugin/unplugin-icons
  Icons({
    iconCustomizer(_collection, _icon, props) {
      props.style = 'fill:currentColor'
      props.width = '1em'
      props.height = '1em'
    },
    customCollections: {
      'custom-icon': FileSystemIconLoader(
        path.resolve(assetsDir, 'icons'),
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
  // https://github.com/sapphi-red/vite-plugin-static-copy
  viteStaticCopy({
    targets: [
      {
        // copy files to dist from public folder
        src: toPosixPath(path.join(assetsDir, 'public', '**')),
        dest: '',
      },
    ],
  }),
]
