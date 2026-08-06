<template>
  <div class="flex flex-col items-center gap-4 h-full p-4 overflow-hidden">
    <div class="flex flex-wrap items-end justify-center gap-4">
      <ui-select
        v-model="boardSize"
        label="Board size"
        :items="boardSizeOptions"
      />
      <div class="flex flex-col gap-1 text-center sm:text-left">
        <p>Steps: {{ stepCounter }}</p>
        <p>Time: {{ timer.time.value }}</p>
      </div>
    </div>

    <div
      class="grid h-full gap-4 mx-auto"
      :class="gridClass"
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
import { UiSelect } from '@vue-workspace/daisy-ui'
import { computed, onMounted, ref, useTemplateRef, watch } from 'vue'
import SwapItem from './swap-item.vue'
import { useTimer } from './use-timer'

const boardSizeOptions = [
  { value: 4, label: '4 × 4' },
  { value: 6, label: '6 × 6' },
] as const

type BoardSize = typeof boardSizeOptions[number]['value']

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

function shuffle<T>(items: T[]): T[] {
  const pairs = [...items]
  for (let i = pairs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const left = pairs[i]!
    const right = pairs[j]!
    pairs[i] = right
    pairs[j] = left
  }
  return pairs
}

function generateEmojiGrid(cols: BoardSize) {
  const totalCells = cols * cols
  const uniqueCount = totalCells / 2

  const uniqueEmojis = new Set<string>()
  while (uniqueEmojis.size < uniqueCount) {
    uniqueEmojis.add(getRandomEmoji())
  }

  return shuffle([...uniqueEmojis, ...uniqueEmojis]).map((emoji) => {
    return {
      emoji,
      isOpen: false,
      isDisabled: false,
    }
  })
}

const boardSize = ref<BoardSize>(6)
const timer = useTimer()
const dialogRef = useTemplateRef('dialogRef')
const items = ref(generateEmojiGrid(boardSize.value))

const openedEmojiIndexes = ref<number[]>([])
const stepCounter = ref(0)
const isGameEnded = computed(() => items.value.every((item) => item.isDisabled))
const isDisabledBoard = computed(() => openedEmojiIndexes.value.length === 2)
const gridClass = computed(() => {
  return boardSize.value === 4
    ? 'grid-cols-4 grid-rows-4'
    : 'grid-cols-6 grid-rows-6'
})

function revealeEmojiByIndex(index: number) {
  openedEmojiIndexes.value.push(index)
}

function restartGame() {
  stepCounter.value = 0
  openedEmojiIndexes.value = []
  items.value = generateEmojiGrid(boardSize.value)
  timer.reset()
}

watch(boardSize, () => {
  restartGame()
})

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
