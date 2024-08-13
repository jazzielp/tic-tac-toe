import { useState } from 'react'
import { TURNS, INITIAL_SCORE, INITIAL_BOARD, VS_PLAYER } from '../src/const/const'
import { Header } from './components/Header/Header'
import { Board } from './components/Board/Board'
import { ModalWinner } from './components/ModalWinner/ModalWinner'
import { NewGame } from './components/NewGame/NewGame'
import { ModalTied } from './components/ModalTied/ModalTied'
import { useStore } from './stores/store'

function App () {
  const winner = useStore((state) => state.winner)
  const tie = useStore((state) => state.tie)
  const newGame = useStore((state) => state.newGame)
  return (
    <>
      <main className='main'>
        {winner &&
          <ModalWinner />}
        {tie &&
          <ModalTied />}
        {
          newGame
            ? <NewGame />
            : <>
              <Header />
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
