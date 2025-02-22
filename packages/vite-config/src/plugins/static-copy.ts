import path from 'node:path'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { assetsDir, toPosixPath } from '../utils.js'

// https://github.com/sapphi-red/vite-plugin-static-copy
export const staticCopyPlugin = viteStaticCopy({
  targets: [
    {
      src: toPosixPath(path.join(assetsDir, 'public', '**')),
      dest: '',
    },
  ],
})
