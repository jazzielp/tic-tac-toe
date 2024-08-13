import { useState } from 'react'
import { TURNS, INITIAL_SCORE, INITIAL_BOARD, VS_PLAYER } from '../src/const/const'
import { Header } from './components/Header/Header'
import { Board } from './components/Board/Board'
import { ModalWinner } from './components/ModalWinner/ModalWinner'
import { NewGame } from './components/NewGame/NewGame'
import { ModalTied } from './components/ModalTied/ModalTied'

function App () {
  const [board, setBoard] = useState(() => {
    const boardStorage = window.localStorage.getItem('board')
    return boardStorage ? JSON.parse(boardStorage) : INITIAL_BOARD
  })
  const [turn, setTurn] = useState(() => {
    const turnStorage = window.localStorage.getItem('turn')
    return turnStorage ? JSON.parse(turnStorage) : TURNS.X
  })

  const [scoreBoard, setScoreBoard] = useState(() => {
    const scoreBoardStorage = window.localStorage.getItem('scoreboard')
    return scoreBoardStorage ? JSON.parse(scoreBoardStorage) : INITIAL_SCORE
  })

  const [newGame, setNewGame] = useState(() => {
    const newGameStorage = window.localStorage.getItem('newGame')
    return newGameStorage ? JSON.parse(newGameStorage) : true
  })

  const [comboWinner, setComboWinner] = useState(() => {
    const comboWinnerStorage = window.localStorage.getItem('comboWinner')
    return comboWinnerStorage ? JSON.parse(comboWinnerStorage) : []
  })

  const [winner, setWinner] = useState(() => {
    const winnerStorage = window.localStorage.getItem('winner')
    return winnerStorage ? JSON.parse(winnerStorage) : false
  })

  const [winnerTurn, setWinnerTurn] = useState(() => {
    const winnerTurnStorage = window.localStorage.getItem('winnerTurn')
    return winnerTurnStorage ? JSON.parse(winnerTurnStorage) : null
  })

  const [tie, setTie] = useState(() => {
    const tieStorage = window.localStorage.getItem('tie')
    return tieStorage ? JSON.parse(tieStorage) : false
  })

  const [selectTurn, setSelectTurn] = useState(TURNS.X)

  const resetGame = () => {
    setBoard(INITIAL_BOARD)
    setTurn(TURNS.X)
    setScoreBoard(INITIAL_SCORE)
    setComboWinner([])
    setWinner(false)
    setWinnerTurn(null)
    saveInLocalStorage({ name: 'board', value: INITIAL_BOARD })
    saveInLocalStorage({ name: 'turn', value: TURNS.X })
    saveInLocalStorage({ name: 'comboWinner', value: [] })
  }

  const nextRound = () => {
    setWinner(false)
    setWinnerTurn(null)
    setComboWinner([])
    setBoard(INITIAL_BOARD)
    setTurn(TURNS.X)
    setTie(false)
    window.localStorage.setItem('winner', false)
    window.localStorage.setItem('winnerTurn', null)
    window.localStorage.setItem('board', JSON.stringify(INITIAL_BOARD))
  }

  const selectGame = ({ value }) => {
    setNewGame(false)
    const newScore = { ...scoreBoard }
    if (selectTurn === TURNS.X) {
      newScore.O.name = value === VS_PLAYER.CPU ? VS_PLAYER.CPU : VS_PLAYER.P2
      newScore.X.name = value === VS_PLAYER.CPU ? VS_PLAYER.YOU : VS_PLAYER.P1
    } else {
      newScore.X.name = value === VS_PLAYER.CPU ? VS_PLAYER.CPU : VS_PLAYER.P2
      newScore.O.name = value === VS_PLAYER.CPU ? VS_PLAYER.YOU : VS_PLAYER.P1
    }
    setScoreBoard(newScore)
    saveInLocalStorage({ name: 'scoreboard', value: newScore })
    saveInLocalStorage({ name: 'turn', value: selectTurn })
    saveInLocalStorage({ name: 'newGame', value: false })
  }

  const saveInLocalStorage = ({ name, value }) => {
    window.localStorage.setItem(name, JSON.stringify(value))
  }

  const quitGame = () => {
    console.log(INITIAL_SCORE)
    setWinner(false)
    setWinnerTurn(null)
    setComboWinner([])
    setBoard(INITIAL_BOARD)
    setScoreBoard(INITIAL_SCORE)
    setTurn(TURNS.X)
    setTie(false)
    setNewGame(true)
    saveInLocalStorage({ name: 'scoreboard', value: INITIAL_SCORE })
    saveInLocalStorage({ name: 'turn', value: TURNS.X })
    saveInLocalStorage({ name: 'newGame', value: true })
    saveInLocalStorage({ name: 'winner', value: false })
    saveInLocalStorage({ name: 'winnerTurn', value: null })
    saveInLocalStorage({ name: 'comboWinner', value: [] })
    saveInLocalStorage({ name: 'board', value: INITIAL_BOARD })
  }

  return (
    <>
      <main className='main'>
        {winner &&
          <ModalWinner
            winnerTurn={winnerTurn}
            resetGame={resetGame}
            nextRound={nextRound}
            scoreBoard={scoreBoard}
            quitGame={quitGame}
          />}
        {tie &&
          <ModalTied
            resetGame={resetGame}
            nextRound={nextRound}
          />}
        {
          newGame
            ? <NewGame
                selectTurn={selectTurn}
                setSelectTurn={setSelectTurn}
                selectGame={selectGame}
              />
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
                setScoreBoard={setScoreBoard}
                tie={tie}
                setTie={setTie}
                saveInLocalStorage={saveInLocalStorage}
              />
            </>

        }
      </main>
    </>
  )
}

export default App
