import { useState } from 'react'
import { TURNS, INITIAL_BOARD } from '../src/const/const'
import { Header } from './components/Header/Index'
import { Board } from './components/Board'
function App () {
  const [board, setBoard] = useState(() => {
    const boardStorage = window.localStorage.getItem('board')
    return boardStorage ? JSON.parse(boardStorage) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnStorage = window.localStorage.getItem('turn')
    return turnStorage ?? TURNS.X
  })

  const [scoreboard, setScoreboard] = useState(() => {
    const scoreboardStorage = window.localStorage.getItem('scoreboard')
    return scoreboardStorage ? JSON.parse(scoreboardStorage) : INITIAL_BOARD
  })
  return (
    <>
      <main className='main'>
        <Header turn={turn} />
        <Board turn={turn} board={board} scoreboard={scoreboard} setBoard={setBoard} />
      </main>
    </>
  )
}

export default App
