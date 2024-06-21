import React from 'react'
import './LargeButton.css'

export function LargeButton ({ children, colorButton, widthFull = false }) {
  console.log('colorButton', colorButton)
  return (
    <button
      className={`large-button large-button--${colorButton} ${widthFull ? 'large-button--full' : ''}`}
    >
      {children}
    </button>
  )
}
