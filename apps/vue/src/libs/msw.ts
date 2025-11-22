import { isCommonAssetRequest } from 'msw'

export async function enableMsw() {
  if (import.meta.env.PROD) return

  const { worker } = await import('@/mocks/worker')

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start({
    onUnhandledRequest(request, print) {
      if (isVue(request) || isUnpluginIcons(request)) return

      // Ignore common static asset requests
      // (i.e. tap into the default behavior).
      if (isCommonAssetRequest(request)) return

      // Otherwise, print a warning.
      print.warning()
    },
  })
}

function isVue(request: Request) {
  return request.url.includes('.vue')
}

function isUnpluginIcons(request: Request) {
  return request.url.includes('~icons')
}
