import React from 'react'
import './index.css'
import { Square } from '../Square'
import { SquareScore } from '../SquareScore'

export function Board ({ turn, board, scoreboard }) {
  return (
    <section className='board'>
      {
        board.map((_, index) => {
          return <Square key={index} square={board[index]} />
        })
      }
      <SquareScore title='X (YOU)' score={scoreboard.P1} type='P1' />
      <SquareScore title='TIES' score={scoreboard.TIES} type='TIES' />
      <SquareScore title='O (CPU)' score={scoreboard.P2} type='P2' />
    </section>
  )
}
