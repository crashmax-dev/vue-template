import { useDateFormat, useInterval } from '@vueuse/core'
import { computed } from 'vue'

export function useTimer() {
  const timerInterval = useInterval(1000, {
    controls: true,
    immediate: false,
  })
  const timestamp = computed(() => timerInterval.counter.value * 1000)
  const formattedTime = useDateFormat(timestamp, 'mm:ss', { locales: 'ru-RU' })

  return {
    time: formattedTime,
    start() {
      if (timerInterval.isActive.value) return
      timerInterval.resume()
    },
    stop() {
      if (!timerInterval.isActive.value) return
      timerInterval.pause()
    },
    reset() {
      timerInterval.reset()
    },
  }
}
