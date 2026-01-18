## EventEmitter

```ts
import { getEvents } from 'emittery'
import * as v from 'valibot'

const events = getEvents()
events.send.emit({ text: 'Hello' })

const messageEvent = createEvent({
  name: 'send',
  schema: {
    text: v.string()
  }
})

function getMessage(message) {
  console.log(message.text)
}

messageEvent.on(getMessage)
messageEvent.off(getMessage)
messageEvent.clearAll()

messageEvent.emit({ text: 'Hello' })
```

```ts
import * as v from 'valibot'

type EventListener<T> = (data: T) => void | Promise<void>

export type EventSchema = v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>

interface EventEmitterOptions<T extends EventSchema> {
  name: string
  schema: T
}

class TypedEvent<T extends EventSchema> {
  private listeners: Set<EventListener<v.InferOutput<T>>> = new Set()
  private schema: T
  private name: string

  constructor(options: EventEmitterOptions<T>) {
    this.name = options.name
    this.schema = options.schema
  }

  on(listener: EventListener<v.InferOutput<T>>): void {
    this.listeners.add(listener)
  }

  off(listener: EventListener<v.InferOutput<T>>): void {
    this.listeners.delete(listener)
  }

  clearAll(): void {
    this.listeners.clear()
  }

  async emit(data: v.InferInput<T>): Promise<void> {
    const validatedData = v.parse(this.schema, data)
    const promises = Array.from(this.listeners).map(listener => Promise.resolve(listener(validatedData)),
    )
    await Promise.all(promises)
  }

  getName(): string {
    return this.name
  }
}

function createEvent<T extends EventSchema>(
  options: EventEmitterOptions<T>,
): TypedEvent<T> {
  return new TypedEvent(options)
}

// Глобальное хранилище событий
const eventsRegistry = new Map<string, TypedEvent<any>>()

function getEvents() {
  return {
    get<T extends EventSchema>(
      name: string,
    ): TypedEvent<T> | undefined {
      return eventsRegistry.get(name)
    },
    register<T extends EventSchema>(
      event: TypedEvent<T>,
    ): void {
      eventsRegistry.set(event.getName(), event)
    },
  }
}

// Пример использования
const messageEvent = createEvent({
  name: 'send',
  schema: v.object({
    text: v.string(),
  }),
})

// Регистрация события в глобальном реестре
getEvents().register(messageEvent)

function getMessage(message: { text: string }) {
  console.log(message.text)
}

messageEvent.on(getMessage)

// Валидное событие
messageEvent.emit({ text: '1' })

// Невалидное событие - выбросит ошибку с описанием

// @ts-ignore
messageEvent.emit({ text: 123 }).catch((err) => {
  console.dir(err)
})

messageEvent.off(getMessage)
messageEvent.clearAll()
```
