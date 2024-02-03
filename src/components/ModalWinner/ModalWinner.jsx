import React from 'react'
import { TURNS } from '../../const/const'
import iconO from '../../assets/icon-o.svg'
import iconX from '../../assets/icon-x.svg'

export function ModalWinner ({ WinnerTurn }) {
  return (
    <>
      <h2 class='modal-win__title'>
        OH NO, YOU LOST
      </h2>
      <div class='modal-win__who-win'>
        <img class='modal-win__icon' src={WinnerTurn === TURNS.X ? iconX : iconO} />
        <p class='modal-win__win'>TAKES THE ROUND</p>
      </div>
      <div class='modal-win__buttons'>
        <button class='modal-win__btn-1'>QUIT</button>
        <button class='modal-win__btn-2'>NEXT ROUND</button>
      </div>
    </>
  )
}
