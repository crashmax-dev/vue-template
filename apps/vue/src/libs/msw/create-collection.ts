import { Collection, kCollectionId } from '@msw/data/collection'
import { persist } from '@msw/data/extensions/persist'

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

  const collectionId = collection[kCollectionId]
  const collectionStorage = localStorage.getItem(`msw/data/storage/${collectionId}`)

  function setupMocks() {
    if (!params.setupMocks) return
    collection.clear()
    collection.createMany(
      params.setupMocks.count,
      params.setupMocks.createData,
    )
  }

  mswEmitter.once('msw:setup', () => {
    const count = collection.count()
    if (count === 0 && !collectionStorage) {
      setupMocks()
    }
  })

  window.__MSW__ ??= {}
  window.__MSW__[params.name] = {
    setupMocks,
    collection,
  }

  return collection
}
