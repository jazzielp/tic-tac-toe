import { useState } from 'react'
import { TURNS, INITIAL_BOARD } from '../src/const/const'
import { Header } from './components/Header/Header'
import { Board } from './components/Board/Board'
import { ModalWinner } from './components/ModalWinner/ModalWinner'
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

  const [comboWinner, setComboWinner] = useState([])

  const [winner, setWinner] = useState(false)
  const [winnerTurn, setWinnerTurn] = useState(null)

  return (
    <>
      <main className='main'>
        {winner && <ModalWinner winnerTurn={winnerTurn} />}
        <Header turn={turn} />
        <Board
          turn={turn}
          board={board}
          scoreboard={scoreboard}
          setBoard={setBoard}
          setTurn={setTurn}
          winner={winner}
          setWinner={setWinner}
          setWinnerTurn={setWinnerTurn}
          comboWinner={comboWinner}
          setComboWinner={setComboWinner}
          winnerTurn={winnerTurn}
        />
      </main>
    </>
  )
}

export default App
