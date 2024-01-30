import React from 'react'
import './Index.css'

export function Turn () {
  return (
    <div className='play__turn'>
      <img className='play__turn-img' src='../assets/icon-x-gray.svg' alt='Turn x icon' />
      <div className='play__turn-text'>TURN</div>
    </div>
  )
}
