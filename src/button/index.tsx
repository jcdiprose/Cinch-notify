import React from 'react'

import './button.module.scss'

interface Props {
  children: string | JSX.Element | JSX.Element[]
  onClick: () => void
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button className="btn bebas" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
