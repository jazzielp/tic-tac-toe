import React from 'react'
import './ResetButton.css'
import iconRestart from '../../assets/icon-restart.svg'

export function ResetButton () {
  return (
    <div className='button-content'>
      <button className='button'>
        <img className='icon' src={iconRestart} alt='Icon restart' />
      </button>
    </div>
  )
}
