import { Header } from './components/Header/Header'
import { Board } from './components/Board/Board'
import { ModalWinner } from './components/ModalWinner/ModalWinner'
import { NewGame } from './components/NewGame/NewGame'
import { ModalTied } from './components/ModalTied/ModalTied'
import { useStore } from './stores/store'
import { ModalResete } from './components/ModalResete/ModalResete'

function App () {
  const winner = useStore((state) => state.winner)
  const tie = useStore((state) => state.tie)
  const newGame = useStore((state) => state.newGame)
  const isResetGame = useStore((state) => state.isResetGame)
  return (
    <>
      <main className='main'>
        {winner &&
          <ModalWinner />}
        {tie &&
          <ModalTied />}
        {isResetGame && <ModalResete />}
        {
          newGame
            ? <NewGame />
            : (
              <>
                <Header />
                <Board />
              </>

              )
        }
      </main>
    </>
  )
}

export default App
