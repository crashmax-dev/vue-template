import path from 'node:path'
import { createClient } from '@hey-api/openapi-ts'

const openApiPath = path.resolve('scripts', 'openapi.yaml')
const outputDir = path.join(process.cwd(), 'src', 'api')

await createClient({
  input: { path: openApiPath },
  output: outputDir,
  plugins: [
    {
      name: '@hey-api/client-fetch',
      baseUrl: '/api',
      throwOnError: true,
    },
    {
      name: '@hey-api/sdk',
      validator: true,
      auth: false,
    },
    {
      name: '@hey-api/typescript',
      enums: 'javascript',
      case: 'PascalCase',
    },
    {
      name: 'valibot',
      requests: false,
      responses: true,
    },
  ],
})
