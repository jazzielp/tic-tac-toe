import React from 'react'
import './LargeButton.css'

export function LargeButton ({ children, colorButton, widthFull = false, action, value }) {
  console.log('value', value)
  const handleClick = ({ value }) => {
    action(value)
  }
  return (
    <button
      className={`large-button large-button--${colorButton} ${widthFull ? 'large-button--full' : ''}`}
      onClick={() => handleClick({ value })}
    >
      {children}
    </button>
  )
}
