import React from 'react'
import './LargeButton.css'

export function LargeButtonYellow ({ text, colorButton, widthFull = false }) {
  return (
    <button
      className={`large-button large-button--${colorButton} ${widthFull ? 'large-button--full' : ''}`}
    >
      {text}
    </button>
  )
}
