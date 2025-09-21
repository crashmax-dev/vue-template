import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

export async function readFixtures(basePath: string) {
  const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
  const fixturesPath = path.join(__dirname, basePath, '__fixtures__')
  const filePaths = fs.readdirSync(fixturesPath, {
    recursive: true,
    encoding: 'utf-8',
  })

  return filePaths.map((filePath) => {
    return {
      name: path.parse(filePath).name,
      path: filePath,
      source: fs.readFileSync(path.resolve(fixturesPath, filePath), 'utf-8'),
    }
  })
}
