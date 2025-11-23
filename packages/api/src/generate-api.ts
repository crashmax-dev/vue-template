import fs from 'node:fs'
import path from 'node:path'
import { parseArgs } from 'node:util'
import { createClient } from '@hey-api/openapi-ts'

const { values } = parseArgs({
  options: {
    watch: {
      type: 'boolean',
      short: 'w',
    },
  },
})

const openApiPath = path.resolve(process.cwd(), 'src', 'contracts', 'openapi.yaml')
const outputDir = path.resolve(process.cwd(), 'src', 'api')

function generateApi() {
  return createClient({
    input: { path: openApiPath },
    output: outputDir,
    plugins: [
      {
        name: '@hey-api/client-fetch',
        baseUrl: '/api',
        throwOnError: true,
        exportFromIndex: false,
      },
      {
        name: '@hey-api/sdk',
        validator: true,
        auth: false,
        exportFromIndex: false,
        // responseStyle: 'data',
      },
      // {
      //   name: '@tanstack/vue-query',
      // },
      {
        name: '@hey-api/typescript',
        enums: 'javascript',
        case: 'PascalCase',
        exportFromIndex: false,
      },
      {
        name: 'valibot',
        requests: false,
        responses: true,
      },
    ],
  })
}

let lastModified: number

if (values.watch) {
  fs.watch(openApiPath, () => {
    const mtimeMs = fs.statSync(openApiPath).mtimeMs
    if (lastModified !== mtimeMs) {
      lastModified = mtimeMs
      generateApi()
    }
  })
}

generateApi()
