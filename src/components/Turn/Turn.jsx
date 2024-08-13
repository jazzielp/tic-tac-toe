import React from 'react'
import './Turn.css'
import iconOGray from '../../assets/icon-o-gray.svg'
import iconXGray from '../../assets/icon-x-gray.svg'
import { TURNS } from '../../const/const'

export function Turn ({ turn }) {
  console.log(turn)
  return (
    <div className='turn'>
      <img className='turn-img' src={turn === TURNS.X ? iconXGray : iconOGray} alt='Turn icon' />
      <div className='turn-text'>TURN</div>
    </div>
  )
}
