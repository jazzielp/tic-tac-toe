export const TURNS = {
  X: 'x',
  O: 'o'
}

export const INITIAL_SCORE = {
  X: {
    name: '',
    score: 0
  },
  TIES: 0,
  O: {
    name: '',
    score: 0
  }
}

export const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

export const INITIAL_BOARD = Array(9).fill(null)

export const VS_PLAYER = {
  CPU: 'CPU',
  P1: 'P1',
  P2: 'P2',
  YOU: 'YOU'
}
