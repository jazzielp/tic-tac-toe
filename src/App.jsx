import { useState } from 'react'
import { TURNS } from '../src/const/const'
import { LargeButtonYellow } from './components/LargeButtonYellow'

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
      <LargeButtonYellow text='Button 1' colorButton='yellow' />
    </>
  )
}

export default App
