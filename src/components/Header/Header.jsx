import './Header.css'
import { IconGame } from '../IconGame/IconGame'
import { Turn } from '../Turn/Turn'
import { ResetButton } from '../ResetButton/ResetButton'
import { useStore } from '../../stores/store'

export function Header () {
  const turn = useStore((state) => state.turn)
  return (
    <header className='header'>
      <IconGame />
      <Turn turn={turn} />
      <ResetButton />
    </header>
  )
}
