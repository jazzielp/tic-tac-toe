import React from 'react'
import { TURNS } from '../../const/const'
import iconO from '../../assets/icon-o.svg'
import iconX from '../../assets/icon-x.svg'
import { SmallButton } from '../SmallButton/SmallButton'
import { Modal } from '../Modal/Modal'
import './ModalWinner.css'

export function ModalWinner ({ winnerTurn }) {
  return (
    <Modal>
      <h2 className='modal-win__title'>
        OH NO, YOU LOST
      </h2>
      <div className='modal-win__who-win'>
        <img className='modal-win__icon' src={winnerTurn === TURNS.X ? iconX : iconO} />
        <p className={winnerTurn === TURNS.X ? 'modal-win__x' : 'modal-win__o'}>TAKES THE ROUND</p>
      </div>
      <div className='modal-win__buttons'>
        <SmallButton colorButton='gray'>QUIT</SmallButton>
        <SmallButton colorButton='yellow'>NEXT ROUND</SmallButton>
      </div>
    </Modal>
  )
}
