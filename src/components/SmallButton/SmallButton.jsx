import React from 'react'
import './SmallButton.css'

export function SmallButton ({ children, colorButton }) {
  return (
    <button onClick={() => console.log('click')} className={`small-button small-button--${colorButton}`}>{children}</button>
  )
}
