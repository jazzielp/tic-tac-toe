import React from 'react'
import { TURNS } from '../../const/const'
import iconO from '../../assets/icon-o.svg'
import iconX from '../../assets/icon-x.svg'
import { SmallButton } from '../SmallButton/SmallButton'

export function ModalWinner ({ WinnerTurn }) {
  return (
    <>
      <h2 className='modal-win__title'>
        OH NO, YOU LOST
      </h2>
      <div className='modal-win__who-win'>
        <img className='modal-win__icon' src={WinnerTurn === TURNS.X ? iconX : iconO} />
        <p className='modal-win__win'>TAKES THE ROUND</p>
      </div>
      <div className='modal-win__buttons'>
        <SmallButton colorButton='gray'>QUIT</SmallButton>
        <SmallButton colorButton='yellow'>NEXT ROUND</SmallButton>
      </div>
    </>
  )
}
