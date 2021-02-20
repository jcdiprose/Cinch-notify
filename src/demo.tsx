import React, { Component, createRef, useRef } from 'react'
import ReactDom from 'react-dom'
import Button from './button'

import Notify, { NotifyRef } from './notify'

import './demoStyles.scss'

const Demo = () => {
  const notifyRef = createRef<NotifyRef>()

  const showNotification = () => {
    if (notifyRef && notifyRef.current) {
      /* @ts-ignore */
      notifyRef.current.showNotify('This is a notification')
    }
  }

  return (
    <div className="notificationDemo">
      <Button onClick={showNotification}>Show Notification</Button>
      <Notify ref={notifyRef} type="success" position="top-right" />
    </div>
  )
}

ReactDom.render(<Demo />, document.getElementById('notify'))
