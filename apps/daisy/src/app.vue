<template>
  <div class="flex flex-col items-center gap-2 h-full p-4 overflow-hidden">
    <h1>Steps: {{ stepCounter }}</h1>
    <h1>Time: {{ timer.time.value }}</h1>
    <div
      class="grid h-full grid-flow-col grid-rows-6 grid-cols-6 gap-4 mx-auto"
      :inert="isDisabledBoard"
    >
      <swap-item
        v-for="(item, index) of items"
        :key="`${item.emoji}-${index}`"
        v-model:is-open="item.isOpen"
        :emoji="item.emoji"
        :disabled="item.isDisabled"
        @update:is-open="revealeEmojiByIndex(index)"
      />
    </div>

    <dialog
      ref="dialogRef"
      class="modal"
    >
      <div class="modal-box">
        <h3 class="text-lg font-bold">
          Game ended
        </h3>
        <p class="py-4">
          You won!
        </p>
        <p>Steps: {{ stepCounter }}</p>
        <p>Time: {{ timer.time.value }}</p>
        <div class="modal-action">
          <form method="dialog">
            <button>Restart</button>
          </form>
        </div>
      </div>
    </dialog>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, useTemplateRef, watch } from 'vue'
import SwapItem from './swap-item.vue'
import { useTimer } from './use-timer'

const COLS = 6
const EMOJIS = [
  '😀',
  '😂',
  '😍',
  '🥳',
  '🤩',
  '😎',
  '🤓',
  '🍎',
  '🍕',
  '🍔',
  '🍟',
  '🍿',
  '🥗',
  '🍰',
  '🐶',
  '🐱',
  '🐭',
  '🐹',
  '🐰',
  '🦊',
  '⚽',
  '🏀',
  '🎮',
  '🎯',
  '🎲',
  '🎸',
  '🎨',
  '💻',
  '📱',
  '⌚',
  '💡',
  '🔑',
  '🔧',
  '⚡',
]

function getRandomEmoji() {
  return EMOJIS[Math.floor(Math.random() * EMOJIS.length)]!
}

function generateEmojiGrid() {
  const totalCells = COLS * COLS
  const uniqueCount = totalCells / 2

  const uniqueEmojis = new Set<string>()
  while (uniqueEmojis.size < uniqueCount) {
    uniqueEmojis.add(getRandomEmoji())
  }

  const pairs = [...uniqueEmojis, ...uniqueEmojis]

  for (let i = pairs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // eslint-disable-next-line ts/ban-ts-comment
    // @ts-ignore
    [pairs[i], pairs[j]] = [pairs[j], pairs[i]]
  }

  return pairs.map((emoji) => {
    return {
      emoji,
      isOpen: false,
      isDisabled: false,
    }
  })
}

const timer = useTimer()
const dialogRef = useTemplateRef('dialogRef')
const items = ref(generateEmojiGrid())

const openedEmojiIndexes = ref<number[]>([])
const stepCounter = ref(0)
const isGameEnded = computed(() => items.value.every((item) => item.isDisabled))
const isDisabledBoard = computed(() => openedEmojiIndexes.value.length === 2)

function revealeEmojiByIndex(index: number) {
  openedEmojiIndexes.value.push(index)
}

function restartGame() {
  stepCounter.value = 0
  items.value = generateEmojiGrid()
  timer.reset()
}

watch(isGameEnded, (isEnded) => {
  if (isEnded) {
    dialogRef.value?.showModal()
    timer.stop()
  }
})

onMounted(() => {
  if (!dialogRef.value) return
  dialogRef.value.addEventListener('close', restartGame)
})

watch(openedEmojiIndexes, async (indexes) => {
  if (indexes.length !== 2) return

  timer.start()

  const firstItem = items.value[indexes[0]!]
  const secondItem = items.value[indexes[1]!]
  if (!firstItem || !secondItem) return

  await new Promise((resolve) => setTimeout(resolve, 400))

  if (firstItem.emoji === secondItem.emoji) {
    firstItem.isDisabled = true
    secondItem.isDisabled = true
  } else {
    firstItem.isOpen = false
    secondItem.isOpen = false
  }

  stepCounter.value++
  openedEmojiIndexes.value = []
}, { deep: true })
</script>
