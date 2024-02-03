import React from 'react'
import './SmallButton.css'

export function SmallButton ({ children, colorButton }) {
  return (
    <button className={`small-button small-button--${colorButton}`}>{children}</button>
  )
}
