import React from 'react'
import './index.css'

export function SquareScore ({ title, score, type }) {
  return (
    <div className={`score score--${type}`}>
      <div className='score__text'>
        {title}
      </div>
      <div className='score__score'>
        {score}
      </div>
    </div>
  )
}
