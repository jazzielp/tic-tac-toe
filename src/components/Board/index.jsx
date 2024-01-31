import React from 'react'
import './index.css'
import { Square } from '../Square'

export function Board ({ turn, board }) {
  return (
    <section className='board'>
      {
        board.map((_, index) => {
          return <Square key={index} square={board[index]} />
        })
      }
    </section>
  )
}
