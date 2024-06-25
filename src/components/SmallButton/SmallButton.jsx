import React from 'react'
import './SmallButton.css'

export function SmallButton ({ children, colorButton, action }) {
  const handleClick = () => {
    action()
  }
  return (
    <button onClick={handleClick} className={`small-button small-button--${colorButton}`}>{children}</button>
  )
}
