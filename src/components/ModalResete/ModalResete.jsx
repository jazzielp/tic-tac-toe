import React from 'react'
import '../ModalResete/ModalResete.css'
import { SmallButton } from '../SmallButton/SmallButton'
import { Modal } from '../Modal/Modal'
import { useStore } from '../../stores/store'

export function ModalResete () {
  const resetGame = useStore((state) => state.resetGame)

  return (
    <Modal>
      <h2 className='modal-resete__title'>
        RESTART GAME?
      </h2>
      <div className='modal-win__buttons'>
        <SmallButton colorButton='gray'>NO, CANCEL</SmallButton>
        <SmallButton colorButton='yellow' action={resetGame}>YES, RESTART</SmallButton>
      </div>
    </Modal>
  )
}
