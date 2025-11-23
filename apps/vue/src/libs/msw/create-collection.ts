import { Collection, kCollectionId } from '@msw/data/collection'
import { persist } from '@msw/data/extensions/persist'
import { Logger, pluralize } from '@zero-dependency/utils'
import { mswEmitter } from './msw-emitter'
import type {
  BaseIssue,
  BaseSchema,
  BaseSchemaAsync,
  InferInput,
} from 'valibot'

export type CollectionSchema
  = | BaseSchema<unknown, unknown, BaseIssue<unknown>>
    | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>

export function createCollection<Schema extends CollectionSchema>(params: {
  name: string
  schema: Schema
  setupMocks?: {
    count: number
    createData: (index: number) => InferInput<Schema>
  }
}) {
  const collection = new Collection({
    schema: params.schema,
    extensions: [persist()],
  })

  const collectionLogger = new Logger(params.name)

  // https://github.com/mswjs/data/blob/ff6721177ddd0f37c60cfb5ee8c3a7468dd683ac/src/collection.ts#L71
  const collectionId = collection[kCollectionId]

  // https://github.com/mswjs/data/blob/ff6721177ddd0f37c60cfb5ee8c3a7468dd683ac/src/extensions/persist.ts#L14
  const collectionStorage = localStorage.getItem(`msw/data/storage/${collectionId}`)

  async function createInitialData() {
    if (!params.setupMocks) return
    collection.clear()
    const result = await collection.createMany(
      params.setupMocks.count,
      params.setupMocks.createData,
    )
    collectionLogger.info(
      pluralize(result.length)`Created ${(count) => count} record${['', 's']}`,
      result,
    )
  }

  mswEmitter.once('msw:setup', () => {
    collectionLogger.info('Setting up collection...')
    const count = collection.count()
    if (count === 0 && !collectionStorage) {
      createInitialData()
    }
  })

  window.__MSW__ ??= {}
  window.__MSW__[params.name] = {
    collection,
    createInitialData,
  }

  return collection
}
