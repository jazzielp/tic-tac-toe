import { useState } from 'react'
import { TURNS, INITIAL_SCORE, INITIAL_BOARD, VS_PLAYER } from '../src/const/const'
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

  const [scoreBoard, setScoreboard] = useState(() => {
    const scoreBoardStorage = window.localStorage.getItem('scoreboard')
    return scoreBoardStorage ? JSON.parse(scoreBoardStorage) : INITIAL_SCORE
  })

  const [newGame, setNewGame] = useState(() => {
    const newGameStorage = window.localStorage.getItem('newGame')
    return newGameStorage ? JSON.parse(newGameStorage) : true
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

  const selectGame = ({ value }) => {
    setTurn(turn)
    setNewGame(false)
    const newScore = { ...scoreBoard }
    if (turn === TURNS.X) {
      newScore.O.name = value === VS_PLAYER.CPU ? VS_PLAYER.CPU : VS_PLAYER.P2
      newScore.X.name = value === VS_PLAYER.CPU ? VS_PLAYER.YOU : VS_PLAYER.P1
    } else {
      newScore.X.name = value === VS_PLAYER.CPU ? VS_PLAYER.CPU : VS_PLAYER.P2
      newScore.O.name = value === VS_PLAYER.CPU ? VS_PLAYER.YOU : VS_PLAYER.P1
    }
    setScoreboard(newScore)
  }

  return (
    <>
      <main className='main'>
        {console.log(scoreBoard)}
        {winner && <ModalWinner winnerTurn={winnerTurn} resetGame={resetGame} />}
        {
          newGame
            ? <NewGame turn={turn} setTurn={setTurn} selectGame={selectGame} />
            : <>
              <Header turn={turn} resetGame={resetGame} />
              <Board
                turn={turn}
                board={board}
                scoreBoard={scoreBoard}
                setBoard={setBoard}
                setTurn={setTurn}
                winner={winner}
                setWinner={setWinner}
                setWinnerTurn={setWinnerTurn}
                comboWinner={comboWinner}
                setComboWinner={setComboWinner}
                winnerTurn={winnerTurn}
              />
            </>

        }
      </main>
    </>
  )
}

export default App
