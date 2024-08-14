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
