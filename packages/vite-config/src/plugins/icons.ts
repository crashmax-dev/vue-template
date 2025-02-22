import path from 'node:path'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import { assetsDir } from '../utils.js'

export const iconsPlugin = [
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
          // https://icones.js.org/collection/heroicons-solid
          'heroicons-solid',
        ],
      }),
    ],
  }),
]
