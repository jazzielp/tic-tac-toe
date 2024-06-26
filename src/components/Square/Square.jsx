import React from 'react'
import './Square.css'
import { TURNS } from '../../const/const'
import iconX from '../../assets/icon-x.svg'
import iconO from '../../assets/icon-o.svg'
import iconXOutline from '../../assets/icon-x-black.svg'
import iconOOutline from '../../assets/icon-o-black.svg'

export function Square ({ turn, square, clickSquare, index, classWinner, winnerTurn }) {
  return (
    <div
      onClick={() => clickSquare(index)}
      className={classWinner ? `square square--winner-${winnerTurn}` : 'square'}
    >

      {
        square[index] !== null
          ? classWinner
            ? <img src={square[index] === TURNS.X ? iconXOutline : iconOOutline} alt={`icon ${square[index]}`} className='square__icon' />
            : <img src={square[index] === TURNS.X ? iconX : iconO} alt={`icon ${square[index]}`} className='square__icon' />
          : <div className={`square__icon ${turn === TURNS.X ? 'square__icon--x' : 'square__icon--o'}`} />
      }
    </div>
  )
}
