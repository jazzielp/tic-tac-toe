import { useState } from 'react'
import { TURNS, INITIAL_SCORE, INITIAL_BOARD } from '../src/const/const'
import { Header } from './components/Header/Header'
import { Board } from './components/Board/Board'
import { ModalWinner } from './components/ModalWinner/ModalWinner'
import { NewGame } from './components/NewGame/NewGame'
function App () {
  const [board, setBoard] = useState(() => {
    const boardStorage = window.localStorage.getItem('board')
    return boardStorage ? JSON.parse(boardStorage) : INITIAL_BOARD
  })
  const [turn, setTurn] = useState(() => {
    const turnStorage = window.localStorage.getItem('turn')
    return turnStorage ?? TURNS.X
  })

  const [scoreboard, setScoreboard] = useState(() => {
    const scoreboardStorage = window.localStorage.getItem('scoreboard')
    return scoreboardStorage ? JSON.parse(scoreboardStorage) : INITIAL_SCORE
  })

  const [comboWinner, setComboWinner] = useState([])

  const [winner, setWinner] = useState(false)
  const [winnerTurn, setWinnerTurn] = useState(null)

  const resetGame = () => {
    setBoard(INITIAL_BOARD)
    setTurn(TURNS.X)
    setScoreboard(INITIAL_SCORE)
    setComboWinner([])
    setWinner(false)
    setWinnerTurn(null)
  }

  return (
    <>
      <main className='main'>
        {winner && <ModalWinner winnerTurn={winnerTurn} resetGame={resetGame} />}
        {/* <Header turn={turn} resetGame={resetGame} />
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
        /> */}
        <NewGame />
      </main>
    </>
  )
}

export default App
