export type ToastVariant = 'info' | 'success' | 'warning' | 'error'

export interface ToastInput {
  title?: string
  message: string
  variant?: ToastVariant
  /**
   * Auto-dismiss delay in ms.
   * `null` keeps the toast until dismissed manually.
   * @default 5000
   */
  duration?: number | null
  id?: string
}

export interface ToastRecord {
  id: string
  title?: string
  message: string
  variant: ToastVariant
  duration: number | null
  createdAt: number
}

export type ToastPlacement
  = | 'top-start'
    | 'top-center'
    | 'top-end'
    | 'middle-start'
    | 'middle-center'
    | 'middle-end'
    | 'bottom-start'
    | 'bottom-center'
    | 'bottom-end'

export type ToastHelperOptions = Omit<ToastInput, 'message' | 'variant'>
