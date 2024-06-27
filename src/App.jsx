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
    setScoreboard(INITIAL_SCORE)
    setComboWinner([])
    setWinner(false)
    setWinnerTurn(null)
  }

  const nextRound = () => {
    setWinner(false)
    setWinnerTurn(null)
    setComboWinner([])
    setBoard(INITIAL_BOARD)
    setTurn(TURNS.X)
    setTie(false)
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
    setScoreboard(newScore)
    saveInLocalStorage({ name: 'scoreboard', value: newScore })
    saveInLocalStorage({ name: 'turn', value: selectTurn })
    saveInLocalStorage({ name: 'newGame', value: false })
  }

  const saveInLocalStorage = ({ name, value }) => {
    console.log(name, value)
    window.localStorage.setItem(name, JSON.stringify(value))
  }

  return (
    <>
      <main className='main'>
        {winner && <ModalWinner winnerTurn={winnerTurn} resetGame={resetGame} nextRound={nextRound} scoreBoard={scoreBoard} />}
        {tie && <ModalTied resetGame={resetGame} nextRound={nextRound} />}
        {
          newGame
            ? <NewGame selectTurn={selectTurn} setSelectTurn={setSelectTurn} selectGame={selectGame} />
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
                setScoreBoard={setScoreboard}
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
