import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { TURNS, INITIAL_SCORE, INITIAL_BOARD, VS_PLAYER } from '../const/const'

/* eslint-disable no-undef */
export const useStore = create(persist((set, get) => ({
  board: INITIAL_BOARD,
  turn: TURNS.X,
  scoreBoard: INITIAL_SCORE,
  vsPayer: null,
  player1: TURNS.X,
  player2: TURNS.O,
  newGame: true,
  comboWinner: [],
  winner: false,
  winnerTurn: null,
  tie: false,
  selectTurn: TURNS.X,
  isResetGame: false,
  setBoard: (board) => set({ board }),
  setTurn: (turn) => set({ turn }),
  setWinner: (winner) => set({ winner }),
  setWinnerTurn: (winnerTurn) => set({ winnerTurn }),
  setComboWinner: (comboWinner) => set({ comboWinner }),
  setScoreBoard: (scoreBoard) => set({ scoreBoard }),
  setTie: (tie) => set({ tie }),
  setSelectTurn: (selectTurn) => set({ selectTurn }),
  setIsResetGame: (isResetGame) => set({ isResetGame }),
  setPlayer1: (player1) => set({ player1 }),
  setPlayer2: (player2) => set({ player2 }),
  resetGame: () => {
    set({ board: INITIAL_BOARD })
    set({ turn: TURNS.X })
    set({ scoreBoard: INITIAL_SCORE })
    set({ comboWinner: [] })
    set({ winner: false })
    set({ winnerTurn: null })
    set({ isResetGame: false })
  },
  nextRound: () => {
    set({ winner: false })
    set({ winnerTurn: null })
    set({ comboWinner: [] })
    set({ board: INITIAL_BOARD })
    set({ turn: TURNS.X })
    set({ tie: false })
  },
  selectGame: ({ value }) => {
    const { scoreBoard, selectTurn } = get()
    set({ newGame: false })
    const newScore = { ...scoreBoard }
    if (selectTurn === TURNS.X) {
      newScore.O.name = value === VS_PLAYER.CPU ? VS_PLAYER.CPU : VS_PLAYER.P2
      newScore.X.name = value === VS_PLAYER.CPU ? VS_PLAYER.YOU : VS_PLAYER.P1
    } else {
      newScore.X.name = value === VS_PLAYER.CPU ? VS_PLAYER.CPU : VS_PLAYER.P2
      newScore.O.name = value === VS_PLAYER.CPU ? VS_PLAYER.YOU : VS_PLAYER.P1
    }
    set({ vsPayer: value })
    set({ scoreBoard: newScore })
  },
  quitGame: () => {
    set({ winner: false })
    set({ winnerTurn: null })
    set({ comboWinner: [] })
    set({ board: INITIAL_BOARD })
    set({ scoreBoard: INITIAL_SCORE })
    set({ turn: TURNS.X })
    set({ tie: false })
    set({ newGame: true })
  },
  cancelResetGame: () => {
    set({ isResetGame: false })
  }
}), {
  name: 'tic-tac-toe',
  getStorage: () => localStorage
}))
