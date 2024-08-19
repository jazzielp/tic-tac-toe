import React from 'react'
import './ResetButton.css'
import iconRestart from '../../assets/icon-restart.svg'
import { useStore } from '../../stores/store'

export function ResetButton () {
  const setIsResetGame = useStore((state) => state.setIsResetGame)
  const handleClick = () => {
    setIsResetGame(true)
  }
  return (
    <div className='button-content'>
      <button onClick={handleClick} className='button'>
        <img className='icon' src={iconRestart} alt='Icon restart' />
      </button>
    </div>
  )
}
