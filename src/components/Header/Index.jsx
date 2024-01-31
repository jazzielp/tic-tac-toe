import './index.css'
import { IconGame } from '../IconGame'
import { Turn } from '../Turn'
import { ResetButton } from '../ResetButton'

export function Header () {
  return (
    <header className='header'>
      <IconGame />
      <Turn />
      <ResetButton />
    </header>
  )
}
