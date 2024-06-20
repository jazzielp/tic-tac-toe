import React from 'react'
import './ResetButton.css'
import iconRestart from '../../assets/icon-restart.svg'

export function ResetButton ({ resetGame }) {
  const handleClick = () => {
    resetGame()
  }
  return (
    <div className='button-content'>
      <button onClick={handleClick} className='button'>
        <img className='icon' src={iconRestart} alt='Icon restart' />
      </button>
    </div>
  )
}
