import React, { useEffect, useImperativeHandle, useState } from 'react'
import ReactDOM from 'react-dom'

import './notify.scss'

export type NotifyRef = Record<string, () => {}>

interface Props {
  type?: 'warning' | 'error' | 'success' | 'notification'
  position?: 'top-right' | 'bottom-right' | 'bottom-left' | 'top-left'
  displayTime?: number
  className?: string
  ref: React.Ref<NotifyRef>
}

const Notify = React.forwardRef(
  (
    {
      type = 'notification',
      position = 'top-right',
      displayTime = 1500,
      className,
    }: Props,
    ref
  ) => {
    const [is_visible, setShowNotification] = useState(false)
    const [fadeClassName, shouldAddFadeClassName] = useState(false)
    const [notification_text, setNotificationText] = useState('')

    const delay = (ms: number) => {
      return new Promise((resolve) => setTimeout(resolve, ms))
    }

    useImperativeHandle(ref, () => ({
      showNotify: async (text: string) => {
        setNotificationText(text)
        setShowNotification(true)
        await delay(displayTime)
        shouldAddFadeClassName(true)
        await delay(displayTime)
        setShowNotification(false)
        shouldAddFadeClassName(false)
      },
    }))

    const style = {
      transition: `opacity ${displayTime / 1000}s ease`,
    }

    const NotifyComponent = () => (
      <div
        style={style}
        className={`cinch-notify ${position} ${type} ${className ? className : ''} ${
          fadeClassName ? 'fade' : ''
        }`}
      >
        {notification_text}
      </div>
    )

    return <>{is_visible && ReactDOM.createPortal(NotifyComponent(), document.body)}</>
  }
)

export default Notify
