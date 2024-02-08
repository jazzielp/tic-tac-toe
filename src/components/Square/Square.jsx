import React from 'react'
import './Square.css'
import { TURNS } from '../../const/const'
import iconX from '../../assets/icon-x.svg'
import iconO from '../../assets/icon-o.svg'

export function Square ({ turn, square, clickSquare, index }) {
  return (
    <div onClick={() => clickSquare(index)} className='square'>
      {
        square[index] !== null
          ? <img src={square[index] === TURNS.X ? iconX : iconO} alt={`icon ${square[index]}`} className='square__icon' />
          : <div className={`square__icon ${turn === TURNS.X ? 'square__icon--x' : 'square__icon--o'}`} />
      }
    </div>
  )
}
