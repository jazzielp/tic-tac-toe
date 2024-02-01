import React from 'react'
import './Square.css'
import { TURNS } from '../../const/const'
import { IconX, IconO } from '../Icons/Icons'

export function Square ({ turn, square, clickSquare, index }) {
  let icon
  if (!square[index]) {
    icon = null
  } else if (square[index] === TURNS.X) {
    icon = <IconX />
  } else {
    icon = <IconO />
  }

  return (
    <div onClick={() => clickSquare(index)} className='square'>
      {
        icon
      }
    </div>
  )
}
