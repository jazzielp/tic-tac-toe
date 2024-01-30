import React from 'react'
import TURNS from '../../const/const'
import { IconX, IconO } from '../Icons/Icons'

export function Square ({ turn }) {
  let icon
  if (!turn) {
    icon = null
  } else if (turn === TURNS.X) {
    icon = <IconX />
  } else {
    icon = <IconO />
  }

  return (
    <div className='square'>
      {
        icon
      }
    </div>
  )
}
