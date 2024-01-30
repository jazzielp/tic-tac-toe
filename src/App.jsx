import { useState } from 'react'
import { TURNS } from '../src/const/const'
import { Header } from './components/Header/Index'
function App () {
  const [board, setBoard] = useState(() => {
    const boardStorage = window.localStorage.getItem('board')
    return boardStorage ? JSON.parse(boardStorage) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnStorage = window.localStorage.getItem('turn')
    return turnStorage ?? TURNS.X
  })
  return (
    <>
      <main className='main'>
        <Header turn={turn} />
        {/* <Board /> */}
      </main>
    </>
  )
}

export default App
