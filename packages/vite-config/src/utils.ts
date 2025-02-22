import url from 'node:url'

export const assetsDir = url.fileURLToPath(
  new URL('../../../packages/ui/src/assets', import.meta.url),
)

export const toPosixPath = (filePath: string) => filePath.replace(/\\/g, '/')
