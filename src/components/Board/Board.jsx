import React from 'react'
import './Board.css'
import { Square } from '../Square/Square'
import { SquareScore } from '../SquareScore/SquareScore'
import { TURNS, WINNING_COMBINATIONS } from '../../const/const'

export function Board ({ turn, board, scoreBoard, setBoard, setTurn, winner, setWinner, setWinnerTurn, comboWinner, setComboWinner, winnerTurn, setScoreBoard }) {
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
            const newScore = { ...scoreBoard }
            if (turn === TURNS.X) {
              newScore.X.score += 1
            } else {
              newScore.O.score += 1
            }
            setScoreBoard(newScore)
          }
        }
      }
    }
  }
  return (

    <section className='board'>
      {
        board.map((_, index) => {
          const classWinner = comboWinner.includes(index)
          return <Square turn={turn} key={index} square={board} index={index} clickSquare={clickSquare} classWinner={classWinner} winnerTurn={winnerTurn} />
        })
      }
      <SquareScore title={`X (${scoreBoard.X.name})`} score={scoreBoard.X.score} type='P1' />
      <SquareScore title='TIES' score={scoreBoard.TIES} type='TIES' />
      <SquareScore title={`O (${scoreBoard.O.name})`} score={scoreBoard.O.score} type='P2' />
      <p>{winner}</p>
    </section>
  )
}
