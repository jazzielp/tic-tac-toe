import './Header.css'
import { IconGame } from '../IconGame'
import { Turn } from '../Turn'
import { ResetButton } from '../ResetButton'

export function Header ({ turn }) {
  return (
    <header className='header'>
      <IconGame />
      <Turn turn={turn} />
      <ResetButton />
    </header>
  )
}
