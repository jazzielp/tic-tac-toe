import React from 'react'
import './Board.css'
import { Square } from '../Square/Square'
import { SquareScore } from '../SquareScore/SquareScore'
import { TURNS, WINNING_COMBINATIONS } from '../../const/const'
import { useStore } from '../../stores/store'

export function Board () {
  const turn = useStore((state) => state.turn)
  const board = useStore((state) => state.board)
  const scoreBoard = useStore((state) => state.scoreBoard)
  const winner = useStore((state) => state.winner)
  const comboWinner = useStore((state) => state.comboWinner)
  const winnerTurn = useStore((state) => state.winnerTurn)

  const setBoard = useStore((state) => state.setBoard)
  const setTurn = useStore((state) => state.setTurn)
  const setWinner = useStore((state) => state.setWinner)

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
    let hasWinner = false
    for (const comboWinner of WINNING_COMBINATIONS) {
      if (board[comboWinner[0]]) {
        if (board[comboWinner[0]] === board[comboWinner[1]]) {
          if (board[comboWinner[1]] === board[comboWinner[2]]) {
            hasWinner = true
            setWinner(!winner)
            setWinnerTurn(turn)
            saveInLocalStorage({ name: 'winnerTurn', value: turn })
            setComboWinner(comboWinner)
            saveInLocalStorage({ name: 'comboWinner', value: comboWinner })
            const newScore = structuredClone(scoreBoard)
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
    if (!hasWinner) {
      const isBoardFull = board.every((square) => square !== null)
      if (isBoardFull) {
        const newScore = { ...scoreBoard }
        newScore.TIES += 1
        setScoreBoard(newScore)
        setTie(true)
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
