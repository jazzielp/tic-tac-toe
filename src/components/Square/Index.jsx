import React from 'react'
import './Index.css'
import { TURNS } from '../../const/const'
import { IconX, IconO } from '../Icons/Icons'

export function Square ({ square }) {
  let icon
  if (!square) {
    icon = null
  } else if (square === TURNS.X) {
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
