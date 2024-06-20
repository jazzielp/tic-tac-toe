import './Header.css'
import { IconGame } from '../IconGame/IconGame'
import { Turn } from '../Turn/Turn'
import { ResetButton } from '../ResetButton/ResetButton'

export function Header ({ turn, resetGame }) {
  return (
    <header className='header'>
      <IconGame />
      <Turn turn={turn} />
      <ResetButton resetGame={resetGame} />
    </header>
  )
}
