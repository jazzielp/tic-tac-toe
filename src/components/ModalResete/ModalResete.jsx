import React from 'react'
import '../ModalResete/ModalResete.css'

export function ModalResete () {
  return (
    <>
      <h2 class='modal-resete__title'>
        RESTART GAME?
      </h2>
      <div class='modal-win__buttons'>
        <button class='modal-win__btn-1'>QUIT</button>
        <button class='modal-win__btn-2'>NEXT ROUND</button>
      </div>
    </>
  )
}
