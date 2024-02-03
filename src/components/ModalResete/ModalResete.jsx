import React from 'react'
import '../ModalResete/ModalResete.css'
import { SmallButton } from '../SmallButton/SmallButton'

export function ModalResete () {
  return (
    <>
      <h2 className='modal-resete__title'>
        RESTART GAME?
      </h2>
      <div class='modal-win__buttons'>
        <SmallButton colorButton='gray'>NO, CANCEL</SmallButton>
        <SmallButton colorButton='yellow'>YES, RESTART</SmallButton>
      </div>
    </>
  )
}
