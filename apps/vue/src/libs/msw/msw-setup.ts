import { isCommonAssetRequest } from 'msw'
import { mswEmitter } from './msw-emitter'

export async function mswSetup() {
  if (import.meta.env.PROD) return

  const { mswWorker } = await import('@/libs/msw/msw-worker')

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  const msw = await mswWorker.start({
    onUnhandledRequest(request, print) {
      if (isVue(request) || isUnpluginIcons(request)) return

      // Ignore common static asset requests
      // (i.e. tap into the default behavior).
      if (isCommonAssetRequest(request)) return

      // Otherwise, print a warning.
      print.warning()
    },
  })

  mswEmitter.emit('msw:setup')

  return msw
}

function isVue(request: Request) {
  return request.url.includes('.vue')
}

function isUnpluginIcons(request: Request) {
  return request.url.includes('~icons')
}
