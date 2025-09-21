declare module 'vue-jscodeshift-adapter' {
  import type { API, FileInfo, Options } from 'jscodeshift'

  type JSCodeShiftAPI = Pick<API, 'jscodeshift'>

  type TransformFn = (fileInfo: FileInfo, api: JSCodeShiftAPI, options?: Options) => string

  function vueAdapter(transform: TransformFn): TransformFn

  export default vueAdapter
}
