import { useState, useEffect } from 'react'
import { TURNS, VS_PLAYER } from '../../const/const'
import iconO from '../../assets/icon-o.svg'
import iconX from '../../assets/icon-x.svg'
import { SmallButton } from '../SmallButton/SmallButton'
import { Modal } from '../Modal/Modal'
import './ModalWinner.css'

export function ModalWinner ({ winnerTurn, resetGame, nextRound, scoreBoard }) {
  const [whoWin, setWhoWin] = useState('')
  useEffect(() => {
    if (winnerTurn === TURNS.X) {
      if (scoreBoard.X.name === VS_PLAYER.P1) {
        setWhoWin('PLAYER 1 WINS!')
      } else if (scoreBoard.X.name === VS_PLAYER.P2) {
        setWhoWin('PLAYER 2 WINS!')
      } else if (scoreBoard.X.name === VS_PLAYER.CPU) {
        setWhoWin('OH NO, YOU LOST!')
      } else if (scoreBoard.X.name === VS_PLAYER.YOU) {
        setWhoWin('YOU WINS!')
      }
    } else {
      if (scoreBoard.O.name === VS_PLAYER.P1) {
        setWhoWin('PLAYER 1 WINS!')
      } else if (scoreBoard.O.name === VS_PLAYER.P2) {
        setWhoWin('PLAYER 2 WINS!')
      } else if (scoreBoard.O.name === VS_PLAYER.CPU) {
        setWhoWin('OH NO, YOU LOST!')
      } else if (scoreBoard.O.name === VS_PLAYER.YOU) {
        setWhoWin('YOU WINS!')
      }
    }
  }, [])

  return (
    <Modal>
      <h2 className='modal-win__title'>
        {whoWin}
      </h2>
      <div className='modal-win__who-win'>
        <img className='modal-win__icon' src={winnerTurn === TURNS.X ? iconX : iconO} />
        <p className={winnerTurn === TURNS.X ? 'modal-win__x' : 'modal-win__o'}>TAKES THE ROUND</p>
      </div>
      <div className='modal-win__buttons'>
        <SmallButton colorButton='gray'>QUIT</SmallButton>
        <SmallButton action={nextRound} colorButton='yellow'>NEXT ROUND</SmallButton>
      </div>
    </Modal>
  )
}
