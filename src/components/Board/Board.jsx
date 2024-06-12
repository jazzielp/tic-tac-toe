import React from 'react'
import './Board.css'
import { Square } from '../Square/Square'
import { SquareScore } from '../SquareScore/SquareScore'
import { TURNS, WINNING_COMBINATIONS } from '../../const/const'

export function Board ({ turn, board, scoreboard, setBoard, setTurn, winner, setWinner, setWinnerTurn, comboWinner, setComboWinner }) {
  const clickSquare = (index) => {
    if (board[index] || winner) return null
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    checkWinner(newBoard)
  }

  const checkWinner = (board) => {
    for (const comboWinner of WINNING_COMBINATIONS) {
      if (board[comboWinner[0]]) {
        if (board[comboWinner[0]] === board[comboWinner[1]]) {
          if (board[comboWinner[1]] === board[comboWinner[2]]) {
            setWinner(!winner)
            setWinnerTurn(turn)
            setComboWinner(comboWinner)
          }
        }
      }
    }
  }
  return (

    <section className='board'>
      {
        board.map((_, index) => {
          return <Square turn={turn} key={index} square={board} index={index} clickSquare={clickSquare} />
        })
      }
      <SquareScore title='X (YOU)' score={scoreboard.P1} type='P1' />
      <SquareScore title='TIES' score={scoreboard.TIES} type='TIES' />
      <SquareScore title='O (CPU)' score={scoreboard.P2} type='P2' />
      <p>{winner}</p>
    </section>
  )
}
