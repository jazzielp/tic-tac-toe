import { WINNING_COMBINATIONS } from '../const/const'

export const gameCPU = (board, cpuTurn, player1Turn) => {
  const newBoard = [...board]
  const isBoardEmpty = newBoard.every((square) => square === null)
  if (isBoardEmpty) {
    return Math.floor(Math.random() * 9)
  }

  const cpuReadyToWin = isReadyToWin(newBoard, cpuTurn)
  if (cpuReadyToWin) {
    return cpuReadyToWin
  }

  const player1ReadyToWin = isReadyToWin(newBoard, player1Turn)
  if (player1ReadyToWin) {
    return player1ReadyToWin
  }

  for (const comboWinner of WINNING_COMBINATIONS) {
    const isTurnPlayer1 = comboWinner.filter((index) => newBoard[index] === player1Turn)
    if (isTurnPlayer1.length === 0) {
      const isTurnCPU = comboWinner.filter((index) => newBoard[index] === cpuTurn)
      if (isTurnCPU.length > 0) {
        const posotionEmpty = comboWinner.filter((index) => newBoard[index] === null)
        return posotionEmpty[0]
      }
    }
  }

  for (const comboWinner of WINNING_COMBINATIONS) {
    const isEmpty = comboWinner.every((index) => newBoard[index] === null)
    if (isEmpty) {
      return comboWinner[0]
    }
  }

  return board.findIndex((square) => square === null)
}

const isReadyToWin = (board, turn) => {
  for (const comboWinner of WINNING_COMBINATIONS) {
    const count = comboWinner.filter((index) => board[index] === turn).length
    if (count === 2) {
      for (const index of comboWinner) {
        if (board[index] === null) return index
      }
    }
  }
}
