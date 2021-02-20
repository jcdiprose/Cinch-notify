export type NotifyRef = Record<string, () => {}>

interface Props {
  type?: 'warning' | 'error' | 'success' | 'notification'
  position?: 'top-right' | 'bottom-right' | 'bottom-left' | 'top-left'
  displayTime?: number
  className?: string
  ref: React.Ref<NotifyRef>
}
