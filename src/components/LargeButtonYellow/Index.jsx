import React from 'react'
import './Index.css'

export function LargeButtonYellow ({ text, colorButton }) {
  return (
    <button
      className={`'large-button large-button--${colorButton}' `}
    >
      {text}
    </button>
  )
}
